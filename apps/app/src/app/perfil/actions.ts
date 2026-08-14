"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { PROFILE_FIELDS } from "@/data/beauty-profile";

export type ProfileState = { error?: string; saved?: boolean };

/**
 * Campos de escolha só aceitam as opções da lista; os de texto vão livres,
 * com limite. Tudo é opcional — a cliente preenche no ritmo dela.
 */
const schema = z.object(
  Object.fromEntries(
    PROFILE_FIELDS.map((field) => [
      field.name,
      field.options
        ? z
            .string()
            .refine((value) => value === "" || field.options!.includes(value), {
              message: `Valor inválido em ${field.label}.`,
            })
            .optional()
        : z.string().trim().max(600).optional(),
    ])
  )
);

export async function saveProfile(
  _prev: ProfileState,
  formData: FormData
): Promise<ProfileState> {
  const session = await auth();
  if (!session?.user) return { error: "Sessão expirada. Entre novamente." };

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Revise os campos." };
  }

  // String vazia vira null: "não respondido" e "respondido em branco" são a
  // mesma coisa aqui, e null deixa a leitura simples.
  const data = Object.fromEntries(
    PROFILE_FIELDS.map((field) => [
      field.name,
      (parsed.data as Record<string, string | undefined>)[field.name] || null,
    ])
  );

  // A cliente pode não ter perfil ainda (conta criada só com login).
  const client =
    (await prisma.client.findFirst({ where: { userId: session.user.id } })) ??
    (await prisma.client.create({
      data: {
        userId: session.user.id,
        name: session.user.name ?? session.user.email ?? "Cliente",
      },
    }));

  await prisma.beautyProfile.upsert({
    where: { clientId: client.id },
    update: data,
    create: { clientId: client.id, ...data },
  });

  revalidatePath("/perfil");
  return { saved: true };
}
