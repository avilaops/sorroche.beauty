import type { Metadata } from "next";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Beauty Profile" };

const FIELDS = [
  ["Tipo de pele", "skinType"],
  ["Tonalidade", "skinTone"],
  ["Subtom", "undertone"],
  ["Sensibilidade", "sensitivity"],
  ["Alergias", "allergies"],
  ["Cobertura preferida", "coverage"],
  ["Acabamento preferido", "finish"],
] as const;

export default async function Perfil() {
  const session = await auth();
  if (!session?.user) return null;

  const client = await prisma.client.findFirst({
    where: { userId: session.user.id },
    include: { beautyProfile: true },
  });

  const profile = client?.beautyProfile;

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Beauty Profile</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        Seu perfil de beleza.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite">
        Informações que ajudam a Viviane a preparar seu atendimento. Não é
        diagnóstico clínico — são suas preferências.
      </p>

      <dl className="mt-14">
        {FIELDS.map(([label, key]) => (
          <div
            key={key}
            className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-line py-5 last:border-b"
          >
            <dt className="text-sm text-graphite">{label}</dt>
            <dd className="text-sm">
              {profile?.[key] || (
                <span className="text-muted">a preencher</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </AppShell>
  );
}
