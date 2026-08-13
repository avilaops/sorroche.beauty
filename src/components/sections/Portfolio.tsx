"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { works } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + works.length) % works.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
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
  }, [active, close, step]);

  return (
    <section id="portfolio" className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10">
      <Reveal className="mb-16 flex items-end justify-between gap-6">
        <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">Portfólio</h2>
        <p className="eyebrow mb-2 hidden md:block">Trabalhos selecionados</p>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
        {works.map((work, i) => {
          // Deliberate asymmetry so three photos read as editorial, not a thin grid.
          const layout = [
            "md:col-span-7",
            "md:col-span-5 md:mt-28",
            "md:col-span-8 md:col-start-4 md:-mt-12",
          ][i];

          return (
            <Reveal key={work.id} delay={i * 0.08} className={layout}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full cursor-pointer text-left"
                aria-label={`Ampliar ${work.style}`}
              >
                <div className="relative aspect-4/5 overflow-hidden bg-canvas-deep">
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    placeholder="blur"
                    className="portrait-crop-tall transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
                  <span className="font-serif text-2xl">{work.style}</span>
                  <span className="eyebrow">{work.category}</span>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex flex-col bg-ink/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={works[active].style}
          >
            <div className="flex items-center justify-between px-6 py-6 text-canvas md:px-10">
              <span className="font-serif text-xl">{works[active].style}</span>
              <button
                type="button"
                onClick={close}
                className="text-[0.75rem] tracking-[0.18em] uppercase"
              >
                Fechar
              </button>
            </div>

            <div className="relative flex-1">
              <Image
                src={works[active].image}
                alt={works[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-center gap-10 px-6 py-7 text-canvas">
              <button
                type="button"
                onClick={() => step(-1)}
                className="text-[0.75rem] tracking-[0.14em] uppercase"
              >
                ← Anterior
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="text-[0.75rem] tracking-[0.14em] uppercase"
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
