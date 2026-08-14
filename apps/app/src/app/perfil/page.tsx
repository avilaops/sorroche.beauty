import type { Metadata } from "next";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AppShell } from "@/components/AppShell";
import { PROFILE_FIELDS } from "@/data/beauty-profile";
import { ProfileForm } from "./ProfileForm";

export const metadata: Metadata = { title: "Beauty Profile" };

export default async function Perfil() {
  const session = await auth();
  if (!session?.user) return null;

  const client = await prisma.client.findFirst({
    where: { userId: session.user.id },
    include: { beautyProfile: true },
  });

  const profile = client?.beautyProfile;

  const values = Object.fromEntries(
    PROFILE_FIELDS.map((field) => [
      field.name,
      (profile as Record<string, unknown> | null | undefined)?.[
        field.name
      ] as string | null ?? null,
    ])
  );

  const filled = Object.values(values).filter(Boolean).length;

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Beauty Profile</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        Seu perfil de beleza.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite">
        Informações que ajudam a Viviane a preparar seu atendimento. Não é
        diagnóstico clínico — são suas preferências. Preencha o que quiser,
        quando quiser.
      </p>

      <p className="eyebrow mt-8">
        {filled} de {PROFILE_FIELDS.length} preenchidos
      </p>

      <ProfileForm values={values} />
    </AppShell>
  );
}
