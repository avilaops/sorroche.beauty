import type { Metadata } from "next";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate, time } from "@/lib/format";
import { AppShell } from "@/components/AppShell";
import { setBookingStatus } from "./actions";
import { confirmationLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Agenda" };

const STATUS_LABEL: Record<string, string> = {
  PENDING: "Aguardando",
  CONFIRMED: "Confirmado",
};

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
              <span className="eyebrow first-letter:uppercase">{day}</span>
              <ul className="mt-5">
                {items.map((booking) => (
                  <li
                    key={booking.id}
                    className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 border-t border-line py-5 last:border-b md:grid-cols-[auto_1fr_auto]"
                  >
                    <span className="font-serif text-xl">
                      {time.format(booking.startsAt)}
                    </span>
                    <div>
                      <p className="text-sm">{booking.client.name}</p>
                      <p className="eyebrow mt-1">
                        {booking.service.name} ·{" "}
                        {STATUS_LABEL[booking.status] ?? booking.status}
                      </p>
                      {booking.occasion && (
                        <p className="mt-1 text-xs text-muted">
                          {booking.occasion}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2 flex flex-wrap items-center gap-3 md:col-span-1 md:self-center">
                      {booking.status === "CONFIRMED" &&
                        (() => {
                          const link = confirmationLink({
                            phone: booking.client.phone,
                            clientName: booking.client.name,
                            serviceName: booking.service.name,
                            startsAt: booking.startsAt,
                          });
                          return link ? (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border border-line px-4 py-2 text-[0.7rem] tracking-[0.12em] uppercase transition-colors hover:border-ink"
                            >
                              Avisar no WhatsApp
                            </a>
                          ) : (
                            <span className="text-[0.7rem] tracking-[0.12em] text-muted uppercase">
                              Sem telefone
                            </span>
                          );
                        })()}

                      {booking.status === "PENDING" && (
                        <form action={setBookingStatus}>
                          <input type="hidden" name="id" value={booking.id} />
                          <input type="hidden" name="status" value="CONFIRMED" />
                          <button
                            type="submit"
                            className="border border-ink px-4 py-2 text-[0.7rem] tracking-[0.12em] uppercase transition-colors hover:bg-ink hover:text-canvas"
                          >
                            Confirmar
                          </button>
                        </form>
                      )}
                      <form action={setBookingStatus}>
                        <input type="hidden" name="id" value={booking.id} />
                        <input type="hidden" name="status" value="CANCELLED" />
                        <button
                          type="submit"
                          className="px-2 py-2 text-[0.7rem] tracking-[0.12em] text-muted uppercase transition-colors hover:text-ink"
                        >
                          Cancelar
                        </button>
                      </form>
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
