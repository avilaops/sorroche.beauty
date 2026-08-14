"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { markRead } from "@/app/notificacoes/actions";

export type ClientNotification = {
  id: string;
  title: string;
  body: string | null;
  href: string | null;
};

/**
 * Mostra um aviso por vez, do mais antigo para o mais recente. Ao fechar,
 * marca como lido no banco — então ele não volta no próximo acesso.
 */
export function NotificationPopup({
  notifications,
}: {
  notifications: ClientNotification[];
}) {
  const [queue, setQueue] = useState(notifications);
  const [, startTransition] = useTransition();

  const current = queue[0];
  if (!current) return null;

  const dismiss = () => {
    setQueue((rest) => rest.slice(1));
    startTransition(() => {
      void markRead(current.id);
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="aviso-titulo"
      className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-6 sm:items-center sm:pb-0"
    >
      <button
        type="button"
        aria-label="Fechar aviso"
        onClick={dismiss}
        className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]"
      />

      <div className="relative w-full max-w-sm border border-line bg-canvas p-8 shadow-[0_18px_60px_-30px_rgba(13,12,11,0.5)]">
        <span className="eyebrow">Viviane Sorroche</span>

        <h2 id="aviso-titulo" className="display mt-4 text-[1.75rem] leading-tight">
          {current.title}
        </h2>

        {current.body && (
          <p className="mt-4 text-sm leading-relaxed text-graphite">
            {current.body}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {current.href && (
            <Link
              href={current.href}
              onClick={dismiss}
              className="bg-ink px-7 py-3.5 text-[0.72rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
            >
              Ver
            </Link>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="px-2 py-3.5 text-[0.72rem] tracking-[0.14em] text-graphite uppercase transition-colors hover:text-ink"
          >
            Fechar
          </button>

          {queue.length > 1 && (
            <span className="ml-auto text-xs text-muted">
              +{queue.length - 1}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
