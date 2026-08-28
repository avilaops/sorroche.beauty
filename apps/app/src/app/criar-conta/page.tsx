import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "./SignupForm";
import { GoogleButton } from "../entrar/GoogleButton";
import { googleEnabled } from "@/auth";

export const metadata: Metadata = { title: "Criar conta" };

export default function CriarContaPage() {
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
          Crie sua conta para agendar, acompanhar suas produções e guardar seu
          Beauty Passport.
        </p>

        {googleEnabled && (
          <div className="mt-12">
            <GoogleButton next="/" />
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-line" />
              <span className="eyebrow">ou com e-mail</span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </div>
        )}

        <SignupForm />

        <p className="mt-10 text-sm text-graphite">
          Já tem conta?{" "}
          <Link href="/entrar" className="underline underline-offset-4 hover:text-ink">
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
}
