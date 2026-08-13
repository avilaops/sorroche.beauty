"use server";

import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(80),
  email: z.string().trim().toLowerCase().email("E-mail inválido."),
  phone: z.string().trim().max(30).optional(),
  password: z.string().min(8, "A senha precisa de ao menos 8 caracteres."),
});

export type SignupState = { error?: string };

export async function signup(
  _prev: SignupState,
  formData: FormData
): Promise<SignupState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Revise os campos." };
  }

  const { name, email, phone, password } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { error: "Já existe uma conta com esse e-mail. Tente entrar." };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  // A Viviane pode ter cadastrado a cliente antes (sem login). Nesse caso,
  // liga o perfil existente à nova conta em vez de duplicar.
  const user = await prisma.user.create({
    data: { name, email, passwordHash, role: "CLIENT" },
  });

  const orphan = phone
    ? await prisma.client.findFirst({ where: { phone, userId: null } })
    : null;

  if (orphan) {
    await prisma.client.update({
      where: { id: orphan.id },
      data: { userId: user.id, name },
    });
  } else {
    await prisma.client.create({
      data: { userId: user.id, name, phone: phone || null },
    });
  }

  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
    return {};
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Conta criada. Faça login para entrar." };
    }
    // signIn lança NEXT_REDIRECT em caso de sucesso — precisa propagar.
    throw error;
  }
}
