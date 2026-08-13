import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { dayMonth, firstName, greeting, time } from "@/lib/format";
import { AppShell } from "@/components/AppShell";

export default async function ClientHome() {
  const session = await auth();
  if (!session?.user) return null;

  const client = await prisma.client.findFirst({
    where: { userId: session.user.id },
    include: {
      bookings: {
        where: { startsAt: { gte: new Date() }, status: { in: ["PENDING", "CONFIRMED"] } },
        orderBy: { startsAt: "asc" },
        take: 1,
        include: { service: true },
      },
      _count: { select: { looks: true } },
    },
  });

  const next = client?.bookings[0];

  return (
    <AppShell role={session.user.role}>
      <p className="eyebrow">
        {greeting()}, {firstName(session.user.name) || "bem-vinda"}
      </p>

      {next ? (
        <section className="mt-12">
          <h1 className="display text-[clamp(2rem,5vw,3rem)]">
            Seu próximo momento
            <br />
            com a Vivi
          </h1>

          <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-line pt-8">
            <span className="display text-[clamp(2.5rem,6vw,3.5rem)]">
              {dayMonth.format(next.startsAt).replace(".", "").toUpperCase()}
            </span>
            <span className="display text-[clamp(2.5rem,6vw,3.5rem)]">
              {time.format(next.startsAt)}
            </span>
          </div>

          <p className="mt-6 font-serif text-2xl">{next.service.name}</p>
          {next.occasion && (
            <p className="mt-2 text-sm text-graphite">{next.occasion}</p>
          )}

          <Link
            href={`/agendamentos/${next.id}`}
            className="mt-10 inline-block border border-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:bg-ink hover:text-canvas"
          >
            Ver agendamento
          </Link>
        </section>
      ) : (
        <section className="mt-12">
          <h1 className="display text-[clamp(2rem,5vw,3rem)]">
            Vamos criar sua
            <br />
            próxima produção?
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-graphite">
            Você ainda não tem um horário reservado.
          </p>
          <Link
            href="/agendar"
            className="mt-10 inline-block bg-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
          >
            Agendar
          </Link>
        </section>
      )}

      {client && client._count.looks > 0 && (
        <section className="mt-24 border-t border-line pt-8">
          <div className="flex items-baseline justify-between">
            <span className="eyebrow">Beauty Passport</span>
            <Link href="/beauty-passport" className="text-sm text-graphite hover:text-ink">
              Ver tudo
            </Link>
          </div>
          <p className="mt-6 font-serif text-3xl">
            {client._count.looks}{" "}
            {client._count.looks === 1 ? "produção" : "produções"}
          </p>
        </section>
      )}
    </AppShell>
  );
}
