"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { login, type LoginState } from "./actions";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-8 w-full bg-ink py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85 disabled:opacity-50"
    >
      {pending ? "Entrando…" : "Entrar"}
    </button>
  );
}

export function LoginForm() {
  const params = useSearchParams();
  const [state, formAction] = useActionState<LoginState, FormData>(login, {});

  return (
    <form action={formAction} className="mt-12">
      <input type="hidden" name="next" value={params.get("next") ?? "/"} />

      <label className="block">
        <span className="eyebrow">E-mail</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors focus:border-ink"
        />
      </label>

      <label className="mt-8 block">
        <span className="eyebrow">Senha</span>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors focus:border-ink"
        />
      </label>

      {state.error && (
        <p role="alert" className="mt-6 text-sm text-graphite">
          {state.error}
        </p>
      )}

      <Submit />
    </form>
  );
}
