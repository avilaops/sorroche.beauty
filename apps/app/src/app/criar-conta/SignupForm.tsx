"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signup, type SignupState } from "./actions";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-10 w-full bg-ink py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85 disabled:opacity-50"
    >
      {pending ? "Criando…" : "Criar conta"}
    </button>
  );
}

export function SignupForm() {
  const [state, formAction] = useActionState<SignupState, FormData>(signup, {});

  return (
    <form action={formAction} className="mt-12">
      <label className="block">
        <span className="eyebrow">Nome</span>
        <input
          name="name"
          required
          maxLength={80}
          autoComplete="name"
          className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors focus:border-ink"
        />
      </label>

      <label className="mt-8 block">
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
        <span className="eyebrow">WhatsApp (opcional)</span>
        <input
          name="phone"
          type="tel"
          maxLength={30}
          autoComplete="tel"
          placeholder="(17) 99999-9999"
          className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
        />
      </label>

      <label className="mt-8 block">
        <span className="eyebrow">Senha</span>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors focus:border-ink"
        />
        <span className="mt-2 block text-xs text-muted">
          Ao menos 8 caracteres.
        </span>
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
