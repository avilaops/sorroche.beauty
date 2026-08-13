"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createLook, type LookState } from "../actions";

const FIELDS = [
  { name: "skin", label: "Pele", placeholder: "Base, cobertura, acabamento" },
  { name: "eyes", label: "Olhos", placeholder: "Sombras, esfumado, delineado" },
  { name: "lashes", label: "Cílios", placeholder: "Modelo utilizado" },
  { name: "lips", label: "Lábios", placeholder: "Batom, gloss, tom" },
] as const;

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-12 w-full bg-ink py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85 disabled:opacity-40 md:w-auto md:px-12"
    >
      {pending ? "Registrando…" : "Registrar look"}
    </button>
  );
}

export function LookForm({
  bookingId,
  defaultOccasion,
}: {
  bookingId: string;
  defaultOccasion: string;
}) {
  const [state, formAction] = useActionState<LookState, FormData>(
    createLook,
    {}
  );

  return (
    <form action={formAction} className="mt-14 max-w-xl">
      <input type="hidden" name="bookingId" value={bookingId} />

      <label className="block">
        <span className="eyebrow">Estilo do look *</span>
        <input
          name="style"
          required
          maxLength={80}
          placeholder="Soft Rosé, Clean Beauty, Glam…"
          className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
        />
      </label>

      <label className="mt-8 block">
        <span className="eyebrow">Ocasião</span>
        <input
          name="occasion"
          maxLength={120}
          defaultValue={defaultOccasion}
          placeholder="Casamento, formatura…"
          className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
        />
      </label>

      <div className="mt-14 space-y-8 border-t border-line pt-10">
        {FIELDS.map((field) => (
          <label key={field.name} className="block">
            <span className="eyebrow">{field.label}</span>
            <input
              name={field.name}
              maxLength={200}
              placeholder={field.placeholder}
              className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
            />
          </label>
        ))}

        <label className="block">
          <span className="eyebrow">Produtos utilizados</span>
          <textarea
            name="products"
            rows={3}
            maxLength={2000}
            placeholder="Marcas, tons, referências — o que precisa lembrar para repetir."
            className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
          />
        </label>

        <label className="block">
          <span className="eyebrow">Notas da profissional</span>
          <textarea
            name="notes"
            rows={3}
            maxLength={2000}
            placeholder="Observações sobre a pele, preferências, o que funcionou."
            className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
          />
        </label>
      </div>

      {state.error && (
        <p role="alert" className="mt-8 text-sm text-graphite">
          {state.error}
        </p>
      )}

      <Submit />
      <p className="mt-4 text-xs text-muted">
        Registrar o look marca o atendimento como realizado.
      </p>
    </form>
  );
}
