"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

/** Marca um aviso como lido. Só o dono do aviso consegue. */
export async function markRead(id: string) {
  const session = await auth();
  if (!session?.user) return;

  const client = await prisma.client.findFirst({
    where: { userId: session.user.id },
    select: { id: true },
  });
  if (!client) return;

  await prisma.notification.updateMany({
    where: { id, clientId: client.id, readAt: null },
    data: { readAt: new Date() },
  });

  revalidatePath("/");
}
