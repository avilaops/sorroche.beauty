import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { availableSlots } from "@/lib/availability";
import { toDateKey } from "@/lib/timezone";
import { AppShell } from "@/components/AppShell";
import { BookingDetails } from "./BookingDetails";

export const metadata: Metadata = { title: "Agendar" };

/** Próximos 45 dias como opções de data. */
function upcomingDays(count = 45) {
  const days: { key: string; weekday: number; day: string; month: string }[] = [];
  for (let i = 0; i < count; i++) {
    const date = new Date(Date.now() + i * 86_400_000);
    const key = toDateKey(date);
    const local = new Date(`${key}T12:00:00Z`);
    days.push({
      key,
      weekday: local.getUTCDay(),
      day: String(local.getUTCDate()).padStart(2, "0"),
      month: new Intl.DateTimeFormat("pt-BR", {
        month: "short",
        timeZone: "UTC",
      })
        .format(local)
        .replace(".", "")
        .toUpperCase(),
    });
  }
  return days;
}

const WEEKDAY_LABEL = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

function duration(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return [h && `${h}h`, m && `${m}min`].filter(Boolean).join(" ");
}

export default async function Agendar({
  searchParams,
}: {
  searchParams: Promise<{ servico?: string; data?: string }>;
}) {
  const session = await auth();
  if (!session?.user) return null;

  const { servico, data } = await searchParams;

  const services = await prisma.service.findMany({
    where: { active: true },
    orderBy: [{ order: "asc" }],
  });

  const selected = services.find((s) => s.id === servico);

  // Etapa 1 — escolher o serviço.
  if (!selected) {
    return (
      <AppShell role={session.user.role}>
        <span className="eyebrow">Agendar · 1 de 3</span>
        <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
          Qual será sua
          <br />
          próxima produção?
        </h1>

        <ul className="mt-14">
          {services.map((service) => (
            <li key={service.id} className="border-t border-line last:border-b">
              <Link
                href={`/agendar?servico=${service.id}`}
                className="group flex items-baseline justify-between gap-6 py-6"
              >
                <div>
                  <p className="font-serif text-2xl transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {service.name}
                  </p>
                  <p className="eyebrow mt-2">
                    {duration(service.durationMin)}
                  </p>
                </div>
                <span className="text-sm text-muted">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </AppShell>
    );
  }

  // Etapa 2 — escolher a data e o horário.
  if (!data) {
    const days = upcomingDays();
    return (
      <AppShell role={session.user.role}>
        <span className="eyebrow">Agendar · 2 de 3</span>
        <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
          {selected.name}
        </h1>
        <Link
          href="/agendar"
          className="mt-4 inline-block text-sm text-graphite hover:text-ink"
        >
          ← trocar serviço
        </Link>

        <p className="eyebrow mt-14">Escolha o dia</p>
        <ul className="mt-6 flex snap-x gap-3 overflow-x-auto pb-4">
          {days.map((day) => (
            <li key={day.key}>
              <Link
                href={`/agendar?servico=${selected.id}&data=${day.key}`}
                className="flex w-20 shrink-0 snap-start flex-col items-center border border-line px-3 py-4 transition-colors hover:border-ink"
              >
                <span className="eyebrow">{WEEKDAY_LABEL[day.weekday]}</span>
                <span className="mt-2 font-serif text-2xl">{day.day}</span>
                <span className="eyebrow mt-1">{day.month}</span>
              </Link>
            </li>
          ))}
        </ul>
      </AppShell>
    );
  }

  const slots = await availableSlots(data, selected.id);
  const chosen = new Date(`${data}T12:00:00Z`);
  const readable = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    timeZone: "UTC",
  }).format(chosen);

  // Etapa 3 — horário e detalhes.
  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Agendar · 3 de 3</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        {selected.name}
      </h1>
      <p className="mt-4 text-sm text-graphite first-letter:uppercase">
        {readable}
      </p>
      <Link
        href={`/agendar?servico=${selected.id}`}
        className="mt-4 inline-block text-sm text-graphite hover:text-ink"
      >
        ← trocar data
      </Link>

      {slots.length === 0 ? (
        <p className="mt-14 max-w-md text-sm leading-relaxed text-graphite">
          Não há horários disponíveis nesse dia. Escolha outra data — ou fale
          com a Viviane para entrar na lista de espera.
        </p>
      ) : (
        <BookingDetails
          serviceId={selected.id}
          date={data}
          slots={slots}
          duration={duration(selected.durationMin)}
        />
      )}
    </AppShell>
  );
}
