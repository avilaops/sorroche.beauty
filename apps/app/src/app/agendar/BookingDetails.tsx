"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { createBooking, type BookingState } from "./actions";
import type { Slot } from "@/lib/availability";
import { cn } from "@/lib/utils";

function Submit({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={disabled || pending}
      className="mt-12 w-full bg-ink py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85 disabled:opacity-40 md:w-auto md:px-12"
    >
      {pending ? "Reservando…" : "Confirmar agendamento"}
    </button>
  );
}

export function BookingDetails({
  serviceId,
  date,
  slots,
  duration,
}: {
  serviceId: string;
  date: string;
  slots: Slot[];
  duration: string;
}) {
  const [minutes, setMinutes] = useState<number | null>(null);
  const [state, formAction] = useActionState<BookingState, FormData>(
    createBooking,
    {}
  );

  return (
    <form action={formAction} className="mt-14">
      <input type="hidden" name="serviceId" value={serviceId} />
      <input type="hidden" name="date" value={date} />
      <input type="hidden" name="minutes" value={minutes ?? ""} />

      <p className="eyebrow">Horários disponíveis · {duration}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {slots.map((slot) => (
          <button
            key={slot.minutes}
            type="button"
            onClick={() => setMinutes(slot.minutes)}
            aria-pressed={minutes === slot.minutes}
            className={cn(
              "border px-5 py-3 text-sm transition-colors",
              minutes === slot.minutes
                ? "border-ink bg-ink text-canvas"
                : "border-line hover:border-ink"
            )}
          >
            {slot.label}
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-8 border-t border-line pt-10">
        <label className="block">
          <span className="eyebrow">Ocasião (opcional)</span>
          <input
            name="occasion"
            maxLength={120}
            placeholder="Casamento, formatura, ensaio…"
            className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
          />
        </label>

        <label className="block">
          <span className="eyebrow">Local (opcional)</span>
          <input
            name="location"
            maxLength={200}
            placeholder="Estúdio da Vivi ou endereço do atendimento"
            className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
          />
        </label>

        <label className="block">
          <span className="eyebrow">Observações (opcional)</span>
          <textarea
            name="notes"
            rows={3}
            maxLength={1000}
            placeholder="Referências, horário do evento, qualquer detalhe importante."
            className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
          />
        </label>
      </div>

      {state.error && (
        <p role="alert" className="mt-8 text-sm text-graphite">
          {state.error}
        </p>
      )}

      <Submit disabled={minutes === null} />
      {minutes === null && (
        <p className="mt-4 text-xs text-muted">Escolha um horário acima.</p>
      )}
    </form>
  );
}
