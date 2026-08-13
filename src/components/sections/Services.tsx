"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { services } from "@/data/services";
import { Reveal } from "@/components/animations/Reveal";

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const preview = hovered !== null ? services[hovered] : null;

  return (
    <section id="servicos" className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
      <Reveal>
        <span className="eyebrow">Serviços</span>
        <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.5rem)]">
          O que podemos criar juntas.
        </h2>
      </Reveal>

      <div
        className="relative mt-16"
        onMouseLeave={() => setHovered(null)}
      >
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.05}>
            <div
              onMouseEnter={() => setHovered(i)}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-line py-8 transition-colors last:border-b md:grid-cols-[auto_1fr_1.1fr] md:gap-10 md:py-10"
            >
              <span className="eyebrow">{service.index}</span>
              <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] transition-transform duration-500 ease-out md:group-hover:translate-x-2">
                {service.title}
              </h3>
              <p className="col-span-2 max-w-md text-sm leading-relaxed text-graphite md:col-span-1">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}

        {/* Floating hover preview — desktop only, purely additive. */}
        <AnimatePresence>
          {preview?.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute right-0 top-1/2 hidden aspect-4/5 w-64 -translate-y-1/2 overflow-hidden xl:block"
            >
              <Image
                src={preview.image}
                alt=""
                fill
                sizes="256px"
                className="portrait-crop-tall"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
