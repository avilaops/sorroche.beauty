import type { Metadata } from "next";
import Link from "next/link";
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

const WHATSAPP =
  "https://wa.me/5517992152917?text=" +
  encodeURIComponent("Olá, Vivi! É sobre o meu agendamento.");

export default async function AgendamentoDetalhe({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ novo?: string }>;
}) {
  const session = await auth();
  if (!session?.user) return null;

  const { id } = await params;
  const { novo } = await searchParams;

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
      {novo ? (
        <>
          <span className="eyebrow">Agendamento reservado</span>
          <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
            Está marcado.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite">
            A Viviane vai confirmar seu horário em breve. A confirmação
            aparece aqui nos seus agendamentos.
          </p>
        </>
      ) : (
        <>
          <span className="eyebrow">{STATUS_LABEL[booking.status]}</span>
          <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
            {booking.service.name}
          </h1>
        </>
      )}

      <dl className="mt-14">
        {novo && (
          <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5">
            <dt className="text-sm text-graphite">Serviço</dt>
            <dd className="text-sm">{booking.service.name}</dd>
          </div>
        )}
        <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5">
          <dt className="text-sm text-graphite">Data</dt>
          <dd className="text-sm first-letter:uppercase">
            {fullDate.format(booking.startsAt)}
          </dd>
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
          <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5">
            <dt className="text-sm text-graphite">Local</dt>
            <dd className="text-sm">{booking.location}</dd>
          </div>
        )}
        {booking.notes && (
          <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5">
            <dt className="text-sm text-graphite">Observações</dt>
            <dd className="max-w-xs text-right text-sm">{booking.notes}</dd>
          </div>
        )}
        {!novo && (
          <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-5 last:border-b">
            <dt className="text-sm text-graphite">Situação</dt>
            <dd className="text-sm">{STATUS_LABEL[booking.status]}</dd>
          </div>
        )}
      </dl>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:bg-ink hover:text-canvas"
        >
          Falar com a Vivi
        </a>
        <Link
          href="/agendamentos"
          className="px-2 py-4 text-[0.75rem] tracking-[0.14em] text-graphite uppercase transition-colors hover:text-ink"
        >
          Meus agendamentos
        </Link>
      </div>
    </AppShell>
  );
}
