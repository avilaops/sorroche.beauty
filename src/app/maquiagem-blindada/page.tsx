import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Faq, type QA } from "@/components/sections/Faq";
import { PageCta } from "@/components/sections/PageCta";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";
import blindada from "@/../public/portfolio/esfumado-preto.jpg";

const title = "Maquiagem Blindada em São José do Rio Preto";
const description =
  "Maquiagem blindada de longa duração em São José do Rio Preto: acabamento selado que resiste ao calor, à emoção e às horas de festa sem retoque constante.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/maquiagem-blindada" },
  openGraph: { title, description, url: "/maquiagem-blindada" },
};

const faq: QA[] = [
  {
    q: "O que é maquiagem blindada?",
    a: "É uma técnica de longa duração: o preparo de pele, a escolha dos produtos e a selagem final são pensados para que a maquiagem resista a suor, calor, lágrima e ao tempo de uma festa inteira. Não é um produto específico, é um método.",
  },
  {
    q: "Ela é à prova d'água mesmo?",
    a: "Resiste bem a lágrima e suor, que é o que acontece em casamento e formatura. Isso não significa que seja feita para piscina ou mar — nenhuma maquiagem sobrevive a imersão prolongada.",
  },
  {
    q: "Quanto tempo ela dura?",
    a: "Feita corretamente, atravessa uma festa inteira, incluindo cerimônia, jantar e pista. A duração real depende do seu tipo de pele, do clima do dia e de quanto você mexe no rosto.",
  },
  {
    q: "Fica com aspecto pesado ou de máscara?",
    a: "Não precisa ficar. Longa duração e naturalidade não são opostos: o que evita o aspecto pesado é a construção em camadas finas e a escolha certa de cobertura para a sua pele.",
  },
  {
    q: "Serve para pele oleosa e para o calor de Rio Preto?",
    a: "É justamente onde ela mais faz diferença. Em dias quentes e em peles oleosas, o preparo e a selagem são o que impedem a maquiagem de escorrer ou craquelar ao longo da noite.",
  },
  {
    q: "Como remover no fim da noite?",
    a: "Por ser resistente, pede uma remoção adequada — água micelar ou demaquilante próprio, sem esfregar. Isso é explicado no atendimento para não agredir a pele.",
  },
];

export default function MaquiagemBlindadaPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maquiagem blindada",
    serviceType: "Maquiagem de longa duração",
    description,
    provider: {
      "@type": "BeautySalon",
      name: siteConfig.name,
      telephone: siteConfig.phoneRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
    },
    areaServed: { "@type": "City", name: siteConfig.address.city },
    url: `${siteConfig.domain}/maquiagem-blindada`,
  };

  return (
    <PageShell
      eyebrow="Maquiagem Blindada · São José do Rio Preto"
      title="Do primeiro olhar até a última fotografia."
      lead="Acabamento construído para durar: resiste ao calor, à emoção e às horas de festa — sem parecer pesado e sem exigir retoque a cada hora."
      crumbs={[{ label: "Maquiagem Blindada", href: "/maquiagem-blindada" }]}
    >
      <Reveal className="mx-auto mt-20 max-w-[1400px] px-6 md:mt-28 md:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/2] md:aspect-[16/9]">
          <Image
            src={blindada}
            alt="Maquiagem blindada com lábios vermelhos e olhar esfumado, acabamento de alta duração."
            fill
            sizes="(max-width: 768px) 100vw, 1400px"
            placeholder="blur"
            className="banner-crop"
          />
        </div>
      </Reveal>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.3fr] md:gap-24">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              Por que ela dura
            </h2>
          </Reveal>

          <div>
            {[
              {
                t: "O preparo decide tudo",
                d: "Antes de qualquer cor, a pele é preparada conforme o seu tipo. É essa etapa — invisível na foto — que determina se a maquiagem vai ficar de pé até o fim da noite.",
              },
              {
                t: "Camadas finas, não camadas grossas",
                d: "Cobertura vem de construção, não de quantidade. Camadas finas e bem fixadas duram mais e continuam parecendo pele.",
              },
              {
                t: "Produtos escolhidos para resistir",
                d: "Fórmulas de longa permanência nos pontos que mais sofrem: base, olhos e boca. Cada área recebe o que aguenta o tipo de desgaste que ela vai enfrentar.",
              },
              {
                t: "Selagem final",
                d: "A última etapa fixa o conjunto e controla o brilho. É o que protege contra suor, calor e o toque involuntário no rosto.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.t}
                delay={index * 0.05}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 last:border-b md:gap-10"
              >
                <span className="eyebrow pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{item.t}</h3>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-graphite">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
              Quando a blindada é a escolha certa
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {[
              "Casamento ao ar livre ou em dia quente",
              "Formatura com cerimônia, jantar e festa na sequência",
              "Noiva que vai chorar — e todas choram",
              "Festa que atravessa a madrugada",
              "Pele oleosa que costuma perder a base no meio da noite",
              "Evento com muitas fotos e flash",
            ].map((item, index) => (
              <Reveal
                key={item}
                delay={index * 0.03}
                className="border-t border-line pt-5 text-[0.95rem] text-graphite"
              >
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <Faq items={faq} />
      </div>

      <PageCta
        title="Sua festa vai ser longa?"
        text="Conte a ocasião e o horário do evento. A produção é montada para durar o que precisar."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </PageShell>
  );
}
