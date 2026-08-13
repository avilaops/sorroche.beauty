import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageCta } from "@/components/sections/PageCta";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";
import { works } from "@/data/portfolio";

const title = "Portfólio de Maquiagem — Viviane Sorroche";
const description =
  "Trabalhos de maquiagem em São José do Rio Preto: rosé, clean, blindada e produções para noivas, formaturas e ensaios.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: { title, description, url: "/portfolio" },
};

export default function PortfolioPage() {
  const galleryLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: title,
    description,
    url: `${siteConfig.domain}/portfolio`,
    image: works.map((work) => `${siteConfig.domain}${work.image.src}`),
  };

  return (
    <PageShell
      eyebrow="Portfólio"
      title="A imagem fala antes do texto."
      lead="Cada produção nasce de um rosto e de uma ocasião. Estes são alguns dos estilos que a Viviane constrói."
      crumbs={[{ label: "Portfólio", href: "/portfolio" }]}
    >
      <section className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-24">
          <Reveal>
            <h2 className="display text-[clamp(1.8rem,4vw,2.75rem)]">
              O que você está vendo
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-6">
            <p className="text-[1rem] leading-relaxed text-graphite">
              Estes trabalhos foram feitos em São José do Rio Preto, em
              atendimentos reais — não em produção de estúdio com modelo
              profissional. É proposital: a maquiagem que interessa é a que
              funciona no rosto de quem vai usá-la, na luz do dia dela.
            </p>
            <p className="text-[1rem] leading-relaxed text-graphite">
              Repare menos no efeito e mais na pele: textura preservada,
              acabamento que não apaga a expressão, cor que conversa com o tom
              natural. É por isso que uma cliente costuma dizer que continua se
              reconhecendo — e é isso que separa maquiagem bem feita de
              maquiagem apenas carregada.
            </p>
            <p className="text-[1rem] leading-relaxed text-graphite">
              Cada estilo abaixo nasceu de uma ocasião diferente. O mesmo rosto
              pediria decisões distintas para um casamento de manhã, uma
              formatura à noite ou um ensaio fotográfico.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <ul className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {works.map((work, index) => (
            <Reveal
              key={work.id}
              delay={index * 0.06}
              className={index % 3 === 0 ? "md:col-span-2" : undefined}
            >
              <li>
                <div
                  className={`relative overflow-hidden bg-canvas-deep ${
                    index % 3 === 0
                      ? "aspect-4/5 md:aspect-[16/9]"
                      : "aspect-4/5"
                  }`}
                >
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    sizes={
                      index % 3 === 0
                        ? "(max-width: 768px) 100vw, 1400px"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    placeholder="blur"
                    className={index % 3 === 0 ? "banner-crop" : "portrait-crop"}
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-line pt-4">
                  <h2 className="font-serif text-2xl">{work.style}</h2>
                  <span className="eyebrow">{work.category}</span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-canvas-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
              Procurando algo específico?
            </h2>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-graphite">
              Cada tipo de produção tem sua própria página, com o que está
              incluído e as dúvidas mais comuns.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-4">
            {[
              { label: "Noivas", href: "/noivas" },
              { label: "Maquiagem social", href: "/maquiagem-social" },
              { label: "Maquiagem blindada", href: "/maquiagem-blindada" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-line bg-canvas px-6 py-3 text-[0.8rem] transition-colors hover:border-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Quer uma produção assim?"
        text="Escolha o serviço, o dia e o horário — a confirmação vem em seguida."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryLd) }}
      />
    </PageShell>
  );
}
