"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const STAFF_ROLES = new Set(["STAFF", "ADMIN", "OWNER"]);

async function requireStaff() {
  const session = await auth();
  if (!session?.user || !STAFF_ROLES.has(session.user.role)) {
    throw new Error("Não autorizado.");
  }
}

export async function setBookingStatus(formData: FormData) {
  await requireStaff();

  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "");

  if (!["CONFIRMED", "CANCELLED", "COMPLETED", "NO_SHOW"].includes(status)) {
    throw new Error("Status inválido.");
  }

  await prisma.booking.update({
    where: { id },
    data: { status: status as never },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/agenda");
  revalidatePath("/agendamentos");
}
