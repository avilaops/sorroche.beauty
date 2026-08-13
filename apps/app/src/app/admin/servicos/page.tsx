import type { Metadata } from "next";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Serviços" };

function duration(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return [h && `${h}h`, m && `${m}min`].filter(Boolean).join(" ");
}

export default async function AdminServicos() {
  const session = await auth();
  if (!session?.user) return null;

  const services = await prisma.service.findMany({
    orderBy: [{ order: "asc" }, { name: "asc" }],
  });

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Serviços</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        O que você oferece.
      </h1>

      <ul className="mt-12">
        {services.map((service) => (
          <li
            key={service.id}
            className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-line py-6 last:border-b"
          >
            <div>
              <p className="font-serif text-2xl">{service.name}</p>
              <p className="eyebrow mt-2">
                {duration(service.durationMin + service.bufferMin)}
                {service.bufferMin > 0 && ` · inclui ${service.bufferMin}min de intervalo`}
              </p>
            </div>
            <span className="text-sm text-graphite">
              {service.priceCents
                ? (service.priceCents / 100).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "a definir"}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-md text-sm leading-relaxed text-muted">
        Preços e durações ainda não foram confirmados — os valores acima são
        estimativas iniciais para a agenda funcionar.
      </p>
    </AppShell>
  );
}
