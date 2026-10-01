"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { works } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

/**
 * Galeria com filtro por categoria e lightbox. Estrutura adaptada do
 * "Gallery Grid with Lightbox" (21st.dev, moumensoliman) para o traço do
 * site: sem shadcn, com next/image, tokens do @theme e sem cantos
 * arredondados. A navegação do lightbox percorre só o filtro ativo.
 */
const TODOS = "Todos";

export function Portfolio() {
  const [filter, setFilter] = useState<string>(TODOS);
  const [active, setActive] = useState<string | null>(null);

  const categories = useMemo(
    () => [TODOS, ...new Set(works.map((w) => w.category))],
    []
  );
  const visible = useMemo(
    () => (filter === TODOS ? works : works.filter((w) => w.category === filter)),
    [filter]
  );

  const activeIndex = visible.findIndex((w) => w.id === active);
  const current = activeIndex >= 0 ? visible[activeIndex] : null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) => {
      if (activeIndex < 0) return;
      setActive(visible[(activeIndex + dir + visible.length) % visible.length].id);
    },
    [activeIndex, visible]
  );

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, close, step]);

  return (
    <section id="portfolio" className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10">
      <Reveal className="mb-10 flex items-end justify-between gap-6">
        <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">Portfólio</h2>
        <p className="eyebrow mb-2 hidden md:block">Trabalhos selecionados</p>
      </Reveal>

      <Reveal
        delay={0.05}
        className="mb-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-line pb-5"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={cn(
              "eyebrow cursor-pointer border-b pb-1 transition-colors",
              filter === category
                ? "border-ink text-ink"
                : "border-transparent hover:text-ink"
            )}
          >
            {category}
          </button>
        ))}
      </Reveal>

      <motion.ul
        layout
        className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14"
        aria-label="Trabalhos"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((work, i) => {
            // A cada 5 itens um ocupa duas colunas: ritmo editorial, sem virar grade de loja.
            const wide = i % 5 === 0;
            return (
              <motion.li
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={cn(wide && "md:col-span-2")}
              >
                <button
                  type="button"
                  onClick={() => setActive(work.id)}
                  className="group block w-full cursor-pointer text-left"
                  aria-label={`Ampliar ${work.style}`}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden bg-canvas-deep",
                      wide ? "aspect-4/5 md:aspect-[8/5]" : "aspect-4/5"
                    )}
                  >
                    <Image
                      src={work.image}
                      alt={work.alt}
                      fill
                      sizes={wide ? "(max-width: 768px) 50vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                      placeholder="blur"
                      className={cn(
                        "transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]",
                        wide ? "portrait-crop" : "portrait-crop-tall"
                      )}
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3">
                    <span className="font-serif text-xl md:text-2xl">{work.style}</span>
                    <span className="eyebrow hidden sm:block">{work.category}</span>
                  </div>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex flex-col bg-ink/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={current.style}
            onClick={close}
          >
            <div className="flex items-center justify-between px-6 py-6 text-canvas md:px-10">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-xl">{current.style}</span>
                <span className="eyebrow text-canvas/60">{current.category}</span>
              </div>
              <button
                type="button"
                onClick={close}
                className="cursor-pointer text-[0.75rem] tracking-[0.18em] uppercase"
              >
                Fechar
              </button>
            </div>

            <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
            </div>

            <div
              className="flex items-center justify-center gap-10 px-6 py-7 text-canvas"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                className="cursor-pointer text-[0.75rem] tracking-[0.14em] uppercase"
              >
                ← Anterior
              </button>
              <span className="eyebrow text-canvas/50">
                {activeIndex + 1} / {visible.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                className="cursor-pointer text-[0.75rem] tracking-[0.14em] uppercase"
              >
                Próxima →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
