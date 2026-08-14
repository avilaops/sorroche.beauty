import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = { title: "Clientes" };

export default async function AdminClientes() {
  const session = await auth();
  if (!session?.user) return null;

  const clients = await prisma.client.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { bookings: true, looks: true } } },
  });

  return (
    <AppShell role={session.user.role}>
      <span className="eyebrow">Clientes</span>
      <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)]">
        {clients.length === 0
          ? "Nenhuma cliente ainda."
          : `${clients.length} ${clients.length === 1 ? "cliente" : "clientes"}.`}
      </h1>

      {clients.length > 0 && (
        <ul className="mt-12">
          {clients.map((client) => (
            <li key={client.id} className="border-t border-line last:border-b">
              <Link
                href={`/admin/clientes/${client.id}`}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-6 py-6"
              >
                <div>
                  <p className="font-serif text-2xl transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {client.name}
                  </p>
                  {client.phone && (
                    <p className="eyebrow mt-2">{client.phone}</p>
                  )}
                </div>
                <span className="text-sm text-graphite">
                  {client._count.bookings}{" "}
                  {client._count.bookings === 1 ? "atendimento" : "atendimentos"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AppShell>
  );
}
