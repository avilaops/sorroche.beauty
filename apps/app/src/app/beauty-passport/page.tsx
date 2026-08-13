import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { fullDate } from "@/lib/format";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Beauty Passport" };

export default async function BeautyPassport() {
  const session = await auth();
  if (!session?.user) return null;

  const client = await prisma.client.findFirst({
    where: { userId: session.user.id },
    include: { looks: { orderBy: { performedAt: "desc" } } },
  });

  const looks = client?.looks ?? [];
  const styles = new Set(looks.map((look) => look.style));
  const since = client?.createdAt;

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Beauty Passport</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        Seu histórico de beleza.
      </h1>

      {looks.length === 0 ? (
        <p className="mt-10 max-w-md text-sm leading-relaxed text-graphite">
          Depois de cada produção, a Viviane registra aqui o look realizado —
          com as cores, os produtos e as escolhas daquele dia. Assim você pode
          repetir um look que amou.
        </p>
      ) : (
        <>
          <div className="mt-12 flex flex-wrap gap-12 border-t border-line pt-8">
            <div>
              <p className="font-serif text-4xl">{looks.length}</p>
              <span className="eyebrow">
                {looks.length === 1 ? "produção" : "produções"}
              </span>
            </div>
            <div>
              <p className="font-serif text-4xl">{styles.size}</p>
              <span className="eyebrow">
                {styles.size === 1 ? "estilo" : "estilos"}
              </span>
            </div>
            {since && (
              <div>
                <p className="font-serif text-4xl">
                  {since.getUTCFullYear()}
                </p>
                <span className="eyebrow">cliente desde</span>
              </div>
            )}
          </div>

          <ul className="mt-16">
            {looks.map((look) => (
              <li key={look.id} className="border-t border-line last:border-b">
                <Link
                  href={`/beauty-passport/${look.id}`}
                  className="group flex items-baseline justify-between gap-6 py-7"
                >
                  <div>
                    <span className="eyebrow">
                      {fullDate.format(look.performedAt)}
                    </span>
                    <p className="display mt-3 text-3xl transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {look.style}
                    </p>
                    {look.occasion && (
                      <p className="mt-2 text-sm text-graphite">
                        {look.occasion}
                      </p>
                    )}
                  </div>
                  <span className="text-sm text-muted">{look.code}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </AppShell>
  );
}
