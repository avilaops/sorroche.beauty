import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate, time } from "@/lib/format";
import { AppShell } from "@/components/AppShell";
import { LookForm } from "./LookForm";

export const metadata: Metadata = { title: "Registrar look" };

export default async function NovoLook({
  searchParams,
}: {
  searchParams: Promise<{ atendimento?: string }>;
}) {
  const session = await auth();
  if (!session?.user) return null;

  const { atendimento } = await searchParams;
  if (!atendimento) notFound();

  const booking = await prisma.booking.findUnique({
    where: { id: atendimento },
    include: { client: true, service: true, look: true },
  });
  if (!booking) notFound();

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Registrar look</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        {booking.client.name}
      </h1>
      <p className="mt-4 text-sm text-graphite first-letter:uppercase">
        {fullDate.format(booking.startsAt)} · {time.format(booking.startsAt)} ·{" "}
        {booking.service.name}
      </p>

      {booking.look ? (
        <p className="mt-12 text-sm text-graphite">
          Esse atendimento já tem o look {booking.look.code} registrado.
        </p>
      ) : (
        <LookForm
          bookingId={booking.id}
          defaultOccasion={booking.occasion ?? ""}
        />
      )}
    </AppShell>
  );
}
