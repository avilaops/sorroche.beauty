"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { lookChapters } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function TheLook() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(
      lookChapters.length - 1,
      Math.floor(v * lookChapters.length)
    );
    setIndex((prev) => (prev === next ? prev : next));
  });

  return (
    <section className="bg-ink text-canvas">
      {/* Desktop: sticky portrait, chapters change cinematically on scroll. */}
      <div
        ref={ref}
        className="relative hidden lg:block"
        style={{ height: `${lookChapters.length * 100}svh` }}
      >
        <div className="sticky top-0 grid h-svh grid-cols-2">
          <div className="relative overflow-hidden">
            {lookChapters.map((chapter, i) => (
              <motion.div
                key={chapter.label}
                initial={false}
                animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.04 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={chapter.image}
                  alt={`Look ${chapter.label} por Viviane Sorroche.`}
                  fill
                  sizes="50vw"
                  placeholder="blur"
                  className="portrait-crop"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col justify-center px-16">
            <span className="eyebrow">The Look</span>

            <div className="relative mt-10 h-56">
              {lookChapters.map((chapter, i) => (
                <motion.div
                  key={chapter.label}
                  initial={false}
                  animate={{
                    opacity: i === index ? 1 : 0,
                    y: i === index ? 0 : 18,
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <h3 className="display text-[clamp(2.5rem,4vw,3.75rem)]">
                    {chapter.title}
                  </h3>
                  <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-canvas/65">
                    {chapter.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex gap-8">
              {lookChapters.map((chapter, i) => (
                <span
                  key={chapter.label}
                  className={cn(
                    "text-[0.75rem] tracking-[0.18em] uppercase transition-colors duration-500",
                    i === index ? "text-canvas" : "text-canvas/35"
                  )}
                >
                  {chapter.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal swipe. */}
      <div className="lg:hidden">
        <div className="px-6 pt-24">
          <span className="eyebrow">The Look</span>
        </div>
        <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-24">
          {lookChapters.map((chapter) => (
            <article key={chapter.label} className="w-[78vw] shrink-0 snap-center">
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={chapter.image}
                  alt={`Look ${chapter.label} por Viviane Sorroche.`}
                  fill
                  sizes="78vw"
                  placeholder="blur"
                  className="portrait-crop-tall"
                />
              </div>
              <h3 className="display mt-6 text-3xl">{chapter.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-canvas/65">
                {chapter.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
