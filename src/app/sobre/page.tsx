import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageCta } from "@/components/sections/PageCta";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";
import portrait from "@/../public/portfolio/viviane.jpg";

const title = "Sobre a Viviane Sorroche — Maquiadora em Rio Preto";
const description =
  "Quem é Viviane Sorroche: maquiadora em São José do Rio Preto com trabalho voltado para noivas, maquiagem social e curso de automaquiagem.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sobre" },
  openGraph: { title, description, url: "/sobre" },
};

const beliefs = [
  {
    t: "A maquiagem não precisa transformar",
    d: "Ela pode simplesmente revelar o que já existe. Quando a cliente olha no espelho e continua se reconhecendo, o trabalho deu certo.",
  },
  {
    t: "O preparo vale mais que o acabamento",
    d: "A etapa que ninguém fotografa é a que decide se a maquiagem vai durar. É onde está a diferença entre bonito por uma hora e bonito a noite inteira.",
  },
  {
    t: "Escutar antes de aplicar",
    d: "Referências, o que a cliente não gosta, como ela se sente com o próprio rosto. Isso muda mais o resultado do que qualquer técnica.",
  },
  {
    t: "Cada rosto pede uma decisão",
    d: "Tom, cobertura e acabamento partem da pessoa à frente — não de uma fórmula que se repete em todo mundo.",
  },
];

export default function SobrePage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Maquiadora",
    description,
    url: `${siteConfig.domain}/sobre`,
    telephone: siteConfig.phoneRaw,
    sameAs: [siteConfig.instagram.url],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    knowsAbout: [
      "Maquiagem de noiva",
      "Maquiagem social",
      "Maquiagem blindada",
      "Automaquiagem",
    ],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };

  return (
    <PageShell
      eyebrow="Sobre"
      title="Por trás dos pincéis."
      lead="Viviane Sorroche é maquiadora em São José do Rio Preto, com trabalho voltado para noivas, maquiagem social e automaquiagem."
      crumbs={[{ label: "Sobre", href: "/sobre" }]}
    >
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden bg-canvas-deep">
              <Image
                src={portrait}
                alt="Viviane Sorroche, maquiadora em São José do Rio Preto."
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                placeholder="blur"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6 md:col-span-6 md:col-start-7 md:justify-center">
            <p className="text-[1rem] leading-relaxed text-graphite">
              O trabalho da Viviane acontece em São José do Rio Preto e nas
              cidades da região, entre noivas, formandas, debutantes e mulheres
              que só querem estar bem em um dia que importa.
            </p>
            <p className="text-[1rem] leading-relaxed text-graphite">
              A escolha por maquiagem personalizada não é discurso: cada
              atendimento começa por entender a ocasião, a pele e o que a
              cliente gosta de ver no espelho. É por isso que o teste de
              maquiagem tem tanto peso no atendimento de noiva, e por que o
              preparo de pele recebe tanta atenção quanto a cor.
            </p>
            <p className="text-[1rem] leading-relaxed text-graphite">
              Além dos atendimentos, ela ensina automaquiagem — para que a
              cliente consiga repetir sozinha, em qualquer dia comum, o que
              aprendeu a gostar em si mesma.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
              O que guia o trabalho
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {beliefs.map((item, index) => (
              <Reveal key={item.t} delay={index * 0.05}>
                <h3 className="font-serif text-2xl">{item.t}</h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-graphite">
                  {item.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              Onde a Viviane atende
            </h2>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-graphite">
              O estúdio fica em {siteConfig.address.city}, no bairro{" "}
              {siteConfig.address.district}. Também há atendimento a domicílio
              na cidade e em municípios da região.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-4">
            {[
              { label: "Noivas", href: "/noivas" },
              { label: "Maquiagem social", href: "/maquiagem-social" },
              { label: "Maquiagem blindada", href: "/maquiagem-blindada" },
              { label: "Curso de automaquiagem", href: "/curso-automaquiagem" },
              { label: "Atendimento a domicílio", href: "/maquiagem-a-domicilio" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-line px-6 py-3 text-[0.8rem] transition-colors hover:border-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Vamos conversar sobre a sua produção?"
        text="Escolha o serviço, o dia e o horário — ou fale direto com a Viviane."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
    </PageShell>
  );
}
