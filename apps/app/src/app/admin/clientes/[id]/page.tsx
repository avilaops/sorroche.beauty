import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate, time } from "@/lib/format";
import { AppShell } from "@/components/AppShell";
import { PROFILE_FIELDS } from "@/data/beauty-profile";

export const metadata: Metadata = { title: "Cliente" };

const STATUS_LABEL: Record<string, string> = {
  PENDING: "Aguardando",
  CONFIRMED: "Confirmado",
  COMPLETED: "Realizado",
  CANCELLED: "Cancelado",
  NO_SHOW: "Não compareceu",
};

export default async function ClienteDetalhe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user) return null;

  const { id } = await params;

  const client = await prisma.client.findUnique({
    where: { id },
    include: {
      beautyProfile: true,
      bookings: {
        orderBy: { startsAt: "desc" },
        include: { service: true },
        take: 20,
      },
      looks: { orderBy: { performedAt: "desc" }, take: 20 },
      bridalJourney: true,
    },
  });

  if (!client) notFound();

  const profile = client.beautyProfile as Record<string, unknown> | null;
  const answered = PROFILE_FIELDS.filter((field) => profile?.[field.name]);

  return (
    <AppShell role={session.user.role}>
      <Link href="/admin/clientes" className="text-sm text-graphite hover:text-ink">
        ← Clientes
      </Link>

      <h1 className="display mt-8 text-[clamp(2rem,5vw,3rem)]">{client.name}</h1>

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
        {client.phone && <span className="eyebrow">{client.phone}</span>}
        {client.instagram && <span className="eyebrow">{client.instagram}</span>}
        <span className="eyebrow">
          {client.bookings.length}{" "}
          {client.bookings.length === 1 ? "atendimento" : "atendimentos"}
        </span>
      </div>

      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
          <h2 className="font-serif text-2xl">Beauty Profile</h2>
          <span className="eyebrow">
            {answered.length} de {PROFILE_FIELDS.length}
          </span>
        </div>

        {answered.length === 0 ? (
          <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite">
            A cliente ainda não preencheu o perfil. Vale pedir antes do
            atendimento — é ali que aparecem alergias e preferências.
          </p>
        ) : (
          <dl className="mt-4">
            {answered.map((field) => (
              <div
                key={field.name}
                className="grid grid-cols-[10rem_1fr] gap-6 border-b border-line py-4"
              >
                <dt className="eyebrow">{field.label}</dt>
                <dd className="text-sm whitespace-pre-line">
                  {String(profile?.[field.name])}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      {client.looks.length > 0 && (
        <section className="mt-20">
          <h2 className="border-b border-line pb-4 font-serif text-2xl">
            Looks registrados
          </h2>
          <ul className="mt-4">
            {client.looks.map((look) => (
              <li
                key={look.id}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-line py-4"
              >
                <div>
                  <p className="font-serif text-xl">{look.style}</p>
                  <p className="eyebrow mt-1">
                    {fullDate.format(look.performedAt)}
                  </p>
                </div>
                <span className="text-sm text-muted">{look.code}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-20">
        <h2 className="border-b border-line pb-4 font-serif text-2xl">
          Histórico
        </h2>
        {client.bookings.length === 0 ? (
          <p className="mt-6 text-sm text-graphite">Nenhum agendamento ainda.</p>
        ) : (
          <ul className="mt-4">
            {client.bookings.map((booking) => (
              <li
                key={booking.id}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-line py-4"
              >
                <div>
                  <p className="text-sm">{booking.service.name}</p>
                  <p className="eyebrow mt-1">
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
      </section>

      {client.notes && (
        <section className="mt-20 border-l-2 border-line pl-6">
          <span className="eyebrow">Suas anotações</span>
          <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-graphite">
            {client.notes}
          </p>
        </section>
      )}
    </AppShell>
  );
}
