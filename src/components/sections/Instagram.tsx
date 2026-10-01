import Image from "next/image";
import { siteConfig } from "@/data/site";
import { works } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";

export function Instagram() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10 md:pb-44">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="display text-[clamp(1.75rem,4vw,3rem)]">
          {siteConfig.instagram.handle}
        </h2>
        <a
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-ink pb-1 text-[0.75rem] tracking-[0.14em] uppercase"
        >
          Acompanhar no Instagram
        </a>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {works.slice(0, 5).map((work, i) => (
          <Reveal
            key={work.id}
            delay={i * 0.06}
            className={i === 0 ? "col-span-2 row-span-2" : ""}
          >
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden bg-canvas-deep"
            >
              <Image
                src={work.image}
                alt={work.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                placeholder="blur"
                className="portrait-crop transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
