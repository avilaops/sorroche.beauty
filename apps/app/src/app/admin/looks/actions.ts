"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const STAFF_ROLES = new Set(["STAFF", "ADMIN", "OWNER"]);

async function requireStaff() {
  const session = await auth();
  if (!session?.user || !STAFF_ROLES.has(session.user.role)) {
    throw new Error("Não autorizado.");
  }
}

const schema = z.object({
  bookingId: z.string().min(1),
  style: z.string().trim().min(1).max(80),
  occasion: z.string().trim().max(120).optional(),
  skin: z.string().trim().max(200).optional(),
  eyes: z.string().trim().max(200).optional(),
  lashes: z.string().trim().max(200).optional(),
  lips: z.string().trim().max(200).optional(),
  products: z.string().trim().max(2000).optional(),
  notes: z.string().trim().max(2000).optional(),
});

export type LookState = { error?: string };

/** Próximo código na sequência SV-0001. */
async function nextCode() {
  const last = await prisma.look.findFirst({
    orderBy: { code: "desc" },
    select: { code: true },
  });
  const current = last ? Number(last.code.replace(/\D/g, "")) : 0;
  return `SV-${String(current + 1).padStart(4, "0")}`;
}

export async function createLook(
  _prev: LookState,
  formData: FormData
): Promise<LookState> {
  await requireStaff();

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: "Revise os campos. O estilo é obrigatório." };
  }

  const { bookingId, style, ...rest } = parsed.data;

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: { look: true },
  });
  if (!booking) return { error: "Atendimento não encontrado." };
  if (booking.look) return { error: "Esse atendimento já tem um look." };

  // Registrar o look encerra o atendimento.
  await prisma.booking.update({
    where: { id: bookingId },
    data: { status: "COMPLETED" },
  });

  // A sequência pode colidir se dois registros acontecerem juntos.
  let created;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      created = await prisma.look.create({
        data: {
          code: await nextCode(),
          clientId: booking.clientId,
          bookingId: booking.id,
          style,
          occasion: rest.occasion || booking.occasion || null,
          skin: rest.skin || null,
          eyes: rest.eyes || null,
          lashes: rest.lashes || null,
          lips: rest.lips || null,
          products: rest.products || null,
          notes: rest.notes || null,
          performedAt: booking.startsAt,
        },
      });
      break;
    } catch (error) {
      const code = (error as { code?: string }).code;
      if (code !== "P2002" || attempt === 4) throw error;
    }
  }

  revalidatePath("/admin/looks");
  revalidatePath("/beauty-passport");
  revalidatePath("/");
  redirect(`/admin/looks?registrado=${created!.code}`);
}
