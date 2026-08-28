import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/animations/Reveal";
import portrait from "@/../public/portfolio/viviane-mirante.jpg";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10 md:pb-44">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <div className="relative aspect-4/5 overflow-hidden bg-canvas-deep">
            <Image
              src={portrait}
              alt="Viviane Sorroche em um mirante, de chapéu de palha e camisa branca, com a cidade e o mar ao fundo."
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              placeholder="blur"
              className="portrait-crop-tall"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex items-center md:col-span-5">
          <div>
            <span className="eyebrow">Sobre</span>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3.25rem)]">
              Por trás dos pincéis.
            </h2>
            <p className="mt-8 text-[0.95rem] leading-relaxed text-graphite">
              {siteConfig.name} é maquiadora em {siteConfig.address.city}/
              {siteConfig.address.state}, com trabalho voltado para maquiagem
              social, noivas e automaquiagem.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
