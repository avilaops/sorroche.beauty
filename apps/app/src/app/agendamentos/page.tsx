import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate, time } from "@/lib/format";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Agendamentos" };

const STATUS_LABEL: Record<string, string> = {
  PENDING: "Aguardando confirmação",
  CONFIRMED: "Confirmado",
  COMPLETED: "Realizado",
  CANCELLED: "Cancelado",
  NO_SHOW: "Não compareceu",
};

export default async function Agendamentos() {
  const session = await auth();
  if (!session?.user) return null;

  const client = await prisma.client.findFirst({
    where: { userId: session.user.id },
    include: {
      bookings: { orderBy: { startsAt: "desc" }, include: { service: true } },
    },
  });

  const bookings = client?.bookings ?? [];

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Agendamentos</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        Seus horários.
      </h1>

      {bookings.length === 0 ? (
        <div className="mt-10">
          <p className="text-sm text-graphite">
            Você ainda não tem agendamentos.
          </p>
          <Link
            href="/agendar"
            className="mt-8 inline-block bg-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
          >
            Agendar
          </Link>
        </div>
      ) : (
        <ul className="mt-12">
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-line py-6 last:border-b"
            >
              <div>
                <p className="font-serif text-2xl">{booking.service.name}</p>
                <p className="eyebrow mt-2">
                  {fullDate.format(booking.startsAt)} ·{" "}
                  {time.format(booking.startsAt)}
                </p>
              </div>
              <span className="text-sm text-graphite">
                {STATUS_LABEL[booking.status] ?? booking.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </AppShell>
  );
}
