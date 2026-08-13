import type { Metadata } from "next";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate, time } from "@/lib/format";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Dashboard" };

export default async function AdminDashboard() {
  const session = await auth();
  if (!session?.user) return null;

  const now = new Date();
  const startOfDay = new Date(now);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(startOfDay);
  endOfDay.setDate(endOfDay.getDate() + 1);

  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const [today, monthCount, clientCount] = await Promise.all([
    prisma.booking.findMany({
      where: {
        startsAt: { gte: startOfDay, lt: endOfDay },
        status: { in: ["PENDING", "CONFIRMED", "COMPLETED"] },
      },
      orderBy: { startsAt: "asc" },
      include: { client: true, service: true },
    }),
    prisma.booking.count({
      where: {
        startsAt: { gte: startOfMonth, lt: startOfNextMonth },
        status: { in: ["PENDING", "CONFIRMED", "COMPLETED"] },
      },
    }),
    prisma.client.count(),
  ]);

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">{fullDate.format(now)}</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">Hoje</h1>

      {today.length === 0 ? (
        <p className="mt-10 text-sm text-graphite">
          Nenhum atendimento agendado para hoje.
        </p>
      ) : (
        <ul className="mt-10">
          {today.map((booking) => (
            <li
              key={booking.id}
              className="grid grid-cols-[auto_1fr] gap-x-8 border-t border-line py-6 last:border-b md:grid-cols-[auto_1fr_auto]"
            >
              <span className="font-serif text-2xl">
                {time.format(booking.startsAt)}
              </span>
              <div>
                <p className="text-sm">{booking.client.name}</p>
                <p className="eyebrow mt-1">{booking.service.name}</p>
              </div>
              <span className="eyebrow self-center">
                {booking.status === "CONFIRMED" ? "Confirmado" : "Pendente"}
              </span>
            </li>
          ))}
        </ul>
      )}

      <section className="mt-20 grid grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-3">
        <div>
          <span className="eyebrow">Hoje</span>
          <p className="mt-3 font-serif text-4xl">{today.length}</p>
        </div>
        <div>
          <span className="eyebrow">No mês</span>
          <p className="mt-3 font-serif text-4xl">{monthCount}</p>
        </div>
        <div>
          <span className="eyebrow">Clientes</span>
          <p className="mt-3 font-serif text-4xl">{clientCount}</p>
        </div>
      </section>
    </AppShell>
  );
}
