"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { isSlotFree } from "@/lib/availability";
import { localToUtc } from "@/lib/timezone";

const schema = z.object({
  serviceId: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  minutes: z.coerce.number().int().min(0).max(24 * 60),
  occasion: z.string().trim().max(120).optional(),
  location: z.string().trim().max(200).optional(),
  notes: z.string().trim().max(1000).optional(),
});

export type BookingState = { error?: string };

export async function createBooking(
  _prev: BookingState,
  formData: FormData
): Promise<BookingState> {
  const session = await auth();
  if (!session?.user) return { error: "Sessão expirada. Entre novamente." };

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "Dados inválidos. Revise e tente novamente." };

  const { serviceId, date, minutes, occasion, location, notes } = parsed.data;

  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service?.active) return { error: "Serviço indisponível." };

  // A cliente pode não ter perfil ainda (conta criada só com login).
  const client =
    (await prisma.client.findFirst({ where: { userId: session.user.id } })) ??
    (await prisma.client.create({
      data: {
        userId: session.user.id,
        name: session.user.name ?? session.user.email ?? "Cliente",
      },
    }));

  const startsAt = localToUtc(date, minutes);
  const endsAt = new Date(
    startsAt.getTime() + (service.durationMin + service.bufferMin) * 60_000
  );

  if (startsAt.getTime() < Date.now()) {
    return { error: "Esse horário já passou." };
  }

  // Revalida no momento da gravação: o slot pode ter sido tomado.
  if (!(await isSlotFree(startsAt, endsAt))) {
    return { error: "Esse horário acabou de ser reservado. Escolha outro." };
  }

  const booking = await prisma.booking.create({
    data: {
      clientId: client.id,
      serviceId: service.id,
      startsAt,
      endsAt,
      priceCents: service.priceCents,
      occasion: occasion || null,
      location: location || null,
      notes: notes || null,
    },
  });

  revalidatePath("/agendamentos");
  revalidatePath("/");
  redirect(`/agendamentos/${booking.id}?novo=1`);
}
