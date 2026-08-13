import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate, time } from "@/lib/format";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Agendamento" };

const STATUS_LABEL: Record<string, string> = {
  PENDING: "Aguardando confirmação",
  CONFIRMED: "Confirmado",
  COMPLETED: "Realizado",
  CANCELLED: "Cancelado",
  NO_SHOW: "Não compareceu",
};

export default async function AgendamentoDetalhe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user) return null;

  const { id } = await params;

  const booking = await prisma.booking.findUnique({
    where: { id },
    include: { service: true, client: true },
  });

  // Uma cliente só pode ver o próprio agendamento.
  const isStaff = ["STAFF", "ADMIN", "OWNER"].includes(session.user.role);
  if (!booking || (!isStaff && booking.client.userId !== session.user.id)) {
    notFound();
  }

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">{STATUS_LABEL[booking.status]}</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        {booking.service.name}
      </h1>

      <dl className="mt-14">
        <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5">
          <dt className="text-sm text-graphite">Data</dt>
          <dd className="text-sm">{fullDate.format(booking.startsAt)}</dd>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5">
          <dt className="text-sm text-graphite">Horário</dt>
          <dd className="text-sm">{time.format(booking.startsAt)}</dd>
        </div>
        {booking.occasion && (
          <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5">
            <dt className="text-sm text-graphite">Ocasião</dt>
            <dd className="text-sm">{booking.occasion}</dd>
          </div>
        )}
        {booking.location && (
          <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5 last:border-b">
            <dt className="text-sm text-graphite">Local</dt>
            <dd className="text-sm">{booking.location}</dd>
          </div>
        )}
      </dl>
    </AppShell>
  );
}
