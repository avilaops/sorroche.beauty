import Link from "next/link";
import type { Role } from "@prisma/client";
import { signOut } from "@/auth";

const CLIENT_NAV = [
  { href: "/", label: "Início" },
  { href: "/agendamentos", label: "Agendamentos" },
  { href: "/beauty-passport", label: "Beauty Passport" },
  { href: "/perfil", label: "Beauty Profile" },
];

const ADMIN_NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/agenda", label: "Agenda" },
  { href: "/admin/clientes", label: "Clientes" },
  { href: "/admin/looks", label: "Looks" },
  { href: "/admin/servicos", label: "Serviços" },
];

export function AppShell({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const isStaff = role === "STAFF" || role === "ADMIN" || role === "OWNER";
  const nav = isStaff ? ADMIN_NAV : CLIENT_NAV;

  return (
    <div className="min-h-svh">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-6">
          <Link href={isStaff ? "/admin" : "/"} className="font-serif text-lg">
            Viviane Sorroche
          </Link>

          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/entrar" });
            }}
          >
            <button
              type="submit"
              className="text-[0.7rem] tracking-[0.16em] text-muted uppercase transition-colors hover:text-ink"
            >
              Sair
            </button>
          </form>
        </div>

        <nav className="mx-auto max-w-5xl px-6">
          <ul className="flex gap-7 overflow-x-auto pb-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-sm text-graphite transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>
    </div>
  );
}
