import type { Metadata } from "next";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate, time } from "@/lib/format";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Agenda" };

export default async function AdminAgenda() {
  const session = await auth();
  if (!session?.user) return null;

  const from = new Date();
  from.setHours(0, 0, 0, 0);

  const bookings = await prisma.booking.findMany({
    where: { startsAt: { gte: from }, status: { in: ["PENDING", "CONFIRMED"] } },
    orderBy: { startsAt: "asc" },
    include: { client: true, service: true },
    take: 100,
  });

  // Agrupa por dia para leitura de agenda, não lista corrida.
  const byDay = new Map<string, typeof bookings>();
  for (const booking of bookings) {
    const key = fullDate.format(booking.startsAt);
    byDay.set(key, [...(byDay.get(key) ?? []), booking]);
  }

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Agenda</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        Próximos atendimentos.
      </h1>

      {byDay.size === 0 ? (
        <p className="mt-10 text-sm text-graphite">
          Nenhum atendimento agendado.
        </p>
      ) : (
        <div className="mt-12 space-y-14">
          {[...byDay.entries()].map(([day, items]) => (
            <section key={day}>
              <span className="eyebrow">{day}</span>
              <ul className="mt-5">
                {items.map((booking) => (
                  <li
                    key={booking.id}
                    className="grid grid-cols-[auto_1fr] gap-x-8 border-t border-line py-5 last:border-b"
                  >
                    <span className="font-serif text-xl">
                      {time.format(booking.startsAt)}
                    </span>
                    <div>
                      <p className="text-sm">{booking.client.name}</p>
                      <p className="eyebrow mt-1">{booking.service.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </AppShell>
  );
}
