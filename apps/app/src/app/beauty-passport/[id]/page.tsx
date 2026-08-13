import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate } from "@/lib/format";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Look" };

export default async function LookDetalhe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user) return null;

  const { id } = await params;

  const look = await prisma.look.findUnique({
    where: { id },
    include: { client: true },
  });

  // Uma cliente só pode ver o próprio look.
  const isStaff = ["STAFF", "ADMIN", "OWNER"].includes(session.user.role);
  if (!look || (!isStaff && look.client.userId !== session.user.id)) {
    notFound();
  }

  const details = [
    ["Ocasião", look.occasion],
    ["Pele", look.skin],
    ["Olhos", look.eyes],
    ["Cílios", look.lashes],
    ["Lábios", look.lips],
  ].filter(([, value]) => Boolean(value)) as [string, string][];

  const repeat =
    "https://wa.me/5517992152917?text=" +
    encodeURIComponent(
      `Olá, Vivi! Gostaria de repetir o look ${look.style} (${look.code}).`
    );

  return (
    <AppShell role={session.user.role}>
      <Link
        href="/beauty-passport"
        className="text-sm text-graphite hover:text-ink"
      >
        ← Beauty Passport
      </Link>

      <span className="eyebrow mt-10 block">Look {look.code}</span>
      <h1 className="display mt-5 text-[clamp(2.25rem,6vw,3.5rem)]">
        {look.style}
      </h1>
      <p className="mt-4 text-sm text-graphite first-letter:uppercase">
        {fullDate.format(look.performedAt)}
      </p>

      {details.length > 0 && (
        <dl className="mt-14 max-w-xl">
          {details.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[8rem_1fr] gap-6 border-t border-line py-5 last:border-b"
            >
              <dt className="eyebrow">{label}</dt>
              <dd className="text-sm">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {look.products && (
        <section className="mt-14 max-w-xl">
          <span className="eyebrow">Produtos utilizados</span>
          <p className="mt-4 text-sm leading-relaxed whitespace-pre-line">
            {look.products}
          </p>
        </section>
      )}

      {look.notes && (
        <section className="mt-12 max-w-xl border-l-2 border-line pl-6">
          <span className="eyebrow">Notas da Viviane</span>
          <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-graphite">
            {look.notes}
          </p>
        </section>
      )}

      {!isStaff && (
        <a
          href={repeat}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 inline-block bg-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
        >
          ♡ Quero repetir este look
        </a>
      )}
    </AppShell>
  );
}
