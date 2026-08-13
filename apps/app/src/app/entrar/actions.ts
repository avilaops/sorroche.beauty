"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";

export type LoginState = { error?: string };

const STAFF_ROLES = new Set(["STAFF", "ADMIN", "OWNER"]);

export async function login(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = String(formData.get("email") || "").toLowerCase();
  const requested = String(formData.get("next") || "");

  // Staff cai no painel; cliente na própria área. Um `next` explícito
  // só é respeitado se apontar para dentro do app.
  let destination = requested.startsWith("/") ? requested : "";
  if (!destination || destination === "/") {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { role: true },
    });
    destination = user && STAFF_ROLES.has(user.role) ? "/admin" : "/";
  }

  try {
    await signIn("credentials", {
      email,
      password: String(formData.get("password") || ""),
      redirectTo: destination,
    });
    return {};
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "E-mail ou senha incorretos." };
    }
    // signIn lança NEXT_REDIRECT em caso de sucesso — precisa propagar.
    throw error;
  }
}
