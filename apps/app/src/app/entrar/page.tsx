import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { GoogleButton } from "./GoogleButton";
import { googleEnabled } from "@/auth";

export const metadata: Metadata = { title: "Entrar" };

export default async function EntrarPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const destination = next?.startsWith("/") ? next : "/";
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <span className="eyebrow">Viviane Sorroche</span>
        <h1 className="display mt-6 text-[clamp(2.25rem,7vw,3rem)]">
          Sua área
          <br />
          exclusiva.
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-graphite">
          Acompanhe seus agendamentos, seu Beauty Passport e cada produção.
        </p>

        {googleEnabled && (
          <div className="mt-12">
            <GoogleButton next={destination} />
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-line" />
              <span className="eyebrow">ou com e-mail</span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </div>
        )}

        <Suspense fallback={<div className="mt-12 h-64" />}>
          <LoginForm />
        </Suspense>

        <p className="mt-10 text-sm text-graphite">
          Primeira vez aqui?{" "}
          <Link
            href="/criar-conta"
            className="underline underline-offset-4 hover:text-ink"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </main>
  );
}
