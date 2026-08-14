"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { PROFILE_FIELDS } from "@/data/beauty-profile";
import { saveProfile, type ProfileState } from "./actions";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-ink px-10 py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85 disabled:opacity-50"
    >
      {pending ? "Salvando…" : "Salvar perfil"}
    </button>
  );
}

export function ProfileForm({
  values,
}: {
  values: Record<string, string | null>;
}) {
  const [state, formAction] = useActionState<ProfileState, FormData>(
    saveProfile,
    {}
  );

  const input =
    "mt-3 w-full border-b border-line bg-transparent pb-3 text-sm outline-none transition-colors focus:border-ink";

  return (
    <form action={formAction} className="mt-14 max-w-2xl">
      <div className="flex flex-col gap-10">
        {PROFILE_FIELDS.map((field) => (
          <label key={field.name} className="block">
            <span className="eyebrow">{field.label}</span>

            {field.options ? (
              <select
                name={field.name}
                defaultValue={values[field.name] ?? ""}
                className={`${input} appearance-none`}
              >
                <option value="">A preencher</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.long ? (
              <textarea
                name={field.name}
                rows={2}
                maxLength={600}
                defaultValue={values[field.name] ?? ""}
                className={`${input} resize-none`}
              />
            ) : (
              <input
                name={field.name}
                maxLength={600}
                defaultValue={values[field.name] ?? ""}
                className={input}
              />
            )}

            {field.hint && (
              <span className="mt-2 block text-xs text-muted">{field.hint}</span>
            )}
          </label>
        ))}
      </div>

      {state.error && (
        <p role="alert" className="mt-8 text-sm text-graphite">
          {state.error}
        </p>
      )}

      <div className="mt-12 flex flex-wrap items-center gap-5">
        <Submit />
        {state.saved && (
          <span role="status" className="text-sm text-graphite">
            Perfil salvo. A Viviane já consegue ver.
          </span>
        )}
      </div>
    </form>
  );
}
