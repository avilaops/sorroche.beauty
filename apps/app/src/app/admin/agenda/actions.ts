"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate, time } from "@/lib/format";

const STAFF_ROLES = new Set(["STAFF", "ADMIN", "OWNER"]);

async function requireStaff() {
  const session = await auth();
  if (!session?.user || !STAFF_ROLES.has(session.user.role)) {
    throw new Error("Não autorizado.");
  }
}

const ALLOWED = ["CONFIRMED", "CANCELLED", "COMPLETED", "NO_SHOW"] as const;
type Status = (typeof ALLOWED)[number];

export async function setBookingStatus(formData: FormData) {
  await requireStaff();

  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "") as Status;

  if (!ALLOWED.includes(status)) {
    throw new Error("Status inválido.");
  }

  const booking = await prisma.booking.update({
    where: { id },
    data: { status },
    include: { service: true },
  });

  // A cliente é avisada dentro do app. Fica gravado, então ela vê no
  // próximo acesso mesmo que não esteja online agora.
  const when = `${fullDate.format(booking.startsAt)} às ${time.format(booking.startsAt)}`;

  if (status === "CONFIRMED") {
    await prisma.notification.create({
      data: {
        clientId: booking.clientId,
        type: "BOOKING_CONFIRMED",
        title: "Seu horário está confirmado",
        body: `${booking.service.name} — ${when}.`,
        href: `/agendamentos/${booking.id}`,
      },
    });
  }

  if (status === "CANCELLED") {
    await prisma.notification.create({
      data: {
        clientId: booking.clientId,
        type: "BOOKING_CANCELLED",
        title: "Seu agendamento foi cancelado",
        body: `${booking.service.name} — ${when}. Fale com a Viviane para remarcar.`,
        href: "/agendamentos",
      },
    });
  }

  revalidatePath("/admin");
  revalidatePath("/admin/agenda");
  revalidatePath("/agendamentos");
  revalidatePath("/");
}
