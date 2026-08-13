"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { whatsappUrl } from "@/data/site";
import hero from "@/../public/portfolio/maquiagem-rose.png";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section
      id="top"
      className="relative grid min-h-[100svh] grid-cols-1 lg:grid-cols-[45%_55%]"
    >
      <div className="order-2 flex items-center px-6 pb-20 pt-10 md:px-10 lg:order-1 lg:pb-0 lg:pt-0">
        <div className="max-w-xl">
          <motion.p {...rise(0.5)} className="eyebrow">
            Makeup Artist · São José do Rio Preto
          </motion.p>

          <h1 className="display mt-7 text-[clamp(3rem,8vw,6.5rem)]">
            {["Beleza que", "continua", "sendo você."].map((line, i) => (
              <motion.span
                key={line}
                {...rise(0.65 + i * 0.12)}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...rise(1.1)}
            className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-graphite"
          >
            Maquiagem personalizada para momentos que merecem ser lembrados.
          </motion.p>

          <motion.div {...rise(1.25)} className="mt-11 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
            >
              Agendar maquiagem
            </a>
            <a
              href="#portfolio"
              className="border border-line px-8 py-4 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:border-ink"
            >
              Ver portfólio
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reduced ? { opacity: 0 } : { clipPath: "inset(12% 0% 12% 0%)", opacity: 0 }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        transition={{ duration: 1.5, ease: EASE }}
        className="relative order-1 h-[62svh] lg:order-2 lg:h-auto"
      >
        <Image
          src={hero}
          alt="Maquiagem social em tons rosé com esfumado quente e pele natural luminosa, por Viviane Sorroche."
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          placeholder="blur"
          className="portrait-crop"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="pointer-events-none absolute bottom-8 left-6 z-10 hidden items-center gap-3 md:left-10 lg:flex"
      >
        <span className="eyebrow">Role</span>
        <span className="h-px w-12 bg-muted" />
      </motion.div>
    </section>
  );
}
