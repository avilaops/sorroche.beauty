import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate } from "@/lib/format";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Looks" };

export default async function AdminLooks({
  searchParams,
}: {
  searchParams: Promise<{ registrado?: string }>;
}) {
  const session = await auth();
  if (!session?.user) return null;

  const { registrado } = await searchParams;

  const [pending, looks] = await Promise.all([
    // Atendimentos que já aconteceram e ainda não viraram look.
    prisma.booking.findMany({
      where: {
        startsAt: { lt: new Date() },
        status: { in: ["CONFIRMED", "COMPLETED"] },
        look: { is: null },
      },
      orderBy: { startsAt: "desc" },
      include: { client: true, service: true },
      take: 30,
    }),
    prisma.look.findMany({
      orderBy: { performedAt: "desc" },
      include: { client: true },
      take: 40,
    }),
  ]);

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Beauty Passport</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        Looks realizados.
      </h1>

      {registrado && (
        <p className="mt-8 border-l-2 border-ink pl-4 text-sm text-graphite">
          Look {registrado} registrado. A cliente já pode vê-lo no Beauty
          Passport.
        </p>
      )}

      {pending.length > 0 && (
        <section className="mt-16">
          <span className="eyebrow">Aguardando registro</span>
          <ul className="mt-6">
            {pending.map((booking) => (
              <li
                key={booking.id}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-line py-5 last:border-b"
              >
                <div>
                  <p className="font-serif text-xl">{booking.client.name}</p>
                  <p className="eyebrow mt-1">
                    {fullDate.format(booking.startsAt)} · {booking.service.name}
                  </p>
                </div>
                <Link
                  href={`/admin/looks/novo?atendimento=${booking.id}`}
                  className="border border-ink px-5 py-2 text-[0.7rem] tracking-[0.12em] uppercase transition-colors hover:bg-ink hover:text-canvas"
                >
                  Registrar look
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-20">
        <span className="eyebrow">Registrados</span>
        {looks.length === 0 ? (
          <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite">
            Nenhum look registrado ainda. Depois de cada atendimento, registre
            o look — é o que constrói o Beauty Passport da cliente.
          </p>
        ) : (
          <ul className="mt-6">
            {looks.map((look) => (
              <li
                key={look.id}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-line py-5 last:border-b"
              >
                <div>
                  <p className="font-serif text-xl">{look.style}</p>
                  <p className="eyebrow mt-1">
                    {look.client.name} · {fullDate.format(look.performedAt)}
                  </p>
                </div>
                <span className="text-sm text-muted">{look.code}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </AppShell>
  );
}
