import type { Metadata } from "next";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Agendar" };

const WHATSAPP =
  "https://wa.me/5517992152917?text=" +
  encodeURIComponent(
    "Olá, Vivi! Vim pelo app e gostaria de consultar um horário."
  );

export default async function Agendar() {
  const session = await auth();
  if (!session?.user) return null;

  const services = await prisma.service.findMany({
    where: { active: true },
    orderBy: [{ order: "asc" }],
  });

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Agendar</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        Qual será sua
        <br />
        próxima produção?
      </h1>

      <ul className="mt-14">
        {services.map((service) => (
          <li key={service.id} className="border-t border-line py-6 last:border-b">
            <p className="font-serif text-2xl">{service.name}</p>
            {service.description && (
              <p className="mt-2 max-w-md text-sm text-graphite">
                {service.description}
              </p>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-14 border-t border-line pt-8">
        <p className="max-w-md text-sm leading-relaxed text-graphite">
          O agendamento com escolha de data e horário está em construção. Por
          enquanto, fale direto com a Viviane para reservar seu horário.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
        >
          Falar com a Vivi
        </a>
      </div>
    </AppShell>
  );
}
