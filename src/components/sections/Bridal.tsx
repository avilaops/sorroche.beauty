import Image from "next/image";
import { whatsappUrl } from "@/data/site";
import { Reveal } from "@/components/animations/Reveal";
import bridal from "@/../public/portfolio/esfumado-suave.jpg";

const details = [
  "Preparação personalizada",
  "Maquiagem de longa duração",
  "Acabamento fotográfico",
  "Atendimento com horário reservado",
];

export function Bridal() {
  return (
    <section id="noivas" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative order-2 h-[70svh] lg:order-1 lg:h-auto lg:min-h-[92svh]">
        <Image
          src={bridal}
          alt="Maquiagem de noiva com acabamento de longa duração e lábios marcantes, por Viviane Sorroche."
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          placeholder="blur"
          className="portrait-crop-tall"
        />
      </div>

      <div className="order-1 flex items-center bg-canvas-deep px-6 py-28 md:px-16 lg:order-2">
        <Reveal className="max-w-lg">
          <span className="eyebrow">Noivas</span>
          <h2 className="display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)]">
            Seu dia.
            <br />
            Sua história.
            <br />
            Sua beleza.
          </h2>
          <p className="mt-8 text-[0.95rem] leading-relaxed text-graphite">
            Uma produção construída para você — pensando na sua personalidade,
            fotografia, iluminação, vestido e em cada momento do casamento.
          </p>

          <ul className="mt-10 space-y-3">
            {details.map((detail) => (
              <li
                key={detail}
                className="flex items-center gap-3 text-sm text-graphite"
              >
                <span className="h-px w-6 bg-champagne" />
                {detail}
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block bg-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
          >
            Quero conhecer o atendimento para noivas
          </a>
        </Reveal>
      </div>
    </section>
  );
}
