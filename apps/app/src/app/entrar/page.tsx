import { Suspense } from "react";
import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Entrar" };

export default function EntrarPage() {
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

        <Suspense fallback={<div className="mt-12 h-64" />}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
