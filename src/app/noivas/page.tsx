import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Faq, type QA } from "@/components/sections/Faq";
import { PageCta } from "@/components/sections/PageCta";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";
import bridal from "@/../public/portfolio/maquiagem-clean.png";

const title = "Maquiagem de Noiva em São José do Rio Preto";
const description =
  "Maquiagem para noivas em São José do Rio Preto: teste de maquiagem, acabamento pensado para fotografia, longa duração e horário reservado só para você.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/noivas" },
  openGraph: { title, description, url: "/noivas" },
};

const steps = [
  {
    title: "Conversa e reserva da data",
    text: "Antes de qualquer coisa, entender o casamento: horário da cerimônia, local, vestido, luz e como você se imagina nas fotos. A data fica reservada só para você.",
  },
  {
    title: "Teste de maquiagem",
    text: "Um encontro para experimentar o look com calma, ajustar cores e acabamento, e ver como a pele responde. É onde a insegurança vira decisão tranquila.",
  },
  {
    title: "Look aprovado",
    text: "O que funcionou fica registrado — base, tons, cílios, acabamento. No dia do casamento não há improviso nem tentativa.",
  },
  {
    title: "O dia",
    text: "Atendimento com horário reservado, no seu tempo, acompanhando o cronograma do casamento. Madrinhas e mãe da noiva podem ser incluídas na mesma produção.",
  },
];

const faq: QA[] = [
  {
    q: "Com quanta antecedência devo reservar?",
    a: "Quanto antes melhor, porque cada data recebe uma noiva só. Sábados de alta temporada costumam fechar primeiro. Se a sua data estiver ocupada, vale entrar na lista de espera — cancelamentos acontecem.",
  },
  {
    q: "O teste de maquiagem é obrigatório?",
    a: "Não é obrigatório, mas é altamente recomendado. É no teste que se descobre como a sua pele reage aos produtos, se o tom de base está certo na luz do seu casamento e se o look combina com o vestido e o penteado.",
  },
  {
    q: "Quanto custa a maquiagem de noiva?",
    a: "O valor depende do que a produção envolve: teste, número de pessoas atendidas, deslocamento e horário. Como cada casamento é diferente, o orçamento é feito depois da conversa inicial — assim você recebe um valor real, não uma estimativa genérica.",
  },
  {
    q: "Você atende as madrinhas e a mãe da noiva?",
    a: "Sim. É comum a produção incluir madrinhas, mãe da noiva e acompanhantes. Como isso muda o tempo necessário, precisa ser combinado quando a data é reservada.",
  },
  {
    q: "A maquiagem dura a festa inteira?",
    a: "A maquiagem de noiva é montada para longa duração: preparo de pele adequado ao seu tipo, produtos resistentes e acabamento selado. Ela precisa atravessar a emoção da cerimônia, o calor e as horas de festa.",
  },
  {
    q: "Você atende fora de São José do Rio Preto?",
    a: "Sim, cidades da região como Mirassol, Bady Bassitt, Cedral e Guapiaçu. O deslocamento entra no orçamento e precisa ser combinado com antecedência.",
  },
];

export default function NoivasPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maquiagem para noivas",
    serviceType: "Maquiagem de noiva",
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
    areaServed: [
      "São José do Rio Preto",
      "Mirassol",
      "Bady Bassitt",
      "Cedral",
      "Guapiaçu",
    ].map((name) => ({ "@type": "City", name })),
    url: `${siteConfig.domain}/noivas`,
  };

  return (
    <PageShell
      eyebrow="Noivas · São José do Rio Preto"
      title="Seu dia. Sua história. Sua beleza."
      lead="Uma produção construída para você — pensando na sua personalidade, na fotografia, na iluminação, no vestido e em cada momento do casamento."
      crumbs={[{ label: "Noivas", href: "/noivas" }]}
    >
      <Reveal className="mx-auto mt-20 max-w-[1400px] px-6 md:mt-28 md:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/2] md:aspect-[16/9]">
          <Image
            src={bridal}
            alt="Maquiagem de noiva com acabamento natural luminoso e olhar suave, por Viviane Sorroche."
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
              Como funciona
            </h2>
          </Reveal>

          <div>
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.05}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 last:border-b md:gap-10"
              >
                <span className="eyebrow pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-graphite">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
              O que está incluído na produção
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-3">
            {[
              {
                t: "Preparação de pele personalizada",
                d: "O preparo muda conforme o seu tipo de pele. É ele que determina se a maquiagem vai durar e como ela se comporta nas fotos.",
              },
              {
                t: "Acabamento pensado para fotografia",
                d: "Flash, luz natural e luz de festa reagem de formas diferentes. O acabamento é escolhido para funcionar em todas elas.",
              },
              {
                t: "Longa duração real",
                d: "Produtos e técnica escolhidos para atravessar a emoção da cerimônia, o calor e as horas de festa sem retoque constante.",
              },
              {
                t: "Horário reservado",
                d: "Sua data não é dividida com outro atendimento. O tempo é seu, sem pressa e sem atropelo no cronograma.",
              },
              {
                t: "Madrinhas e família",
                d: "Madrinhas, mãe da noiva e acompanhantes podem entrar na mesma produção, combinado com antecedência.",
              },
              {
                t: "Registro do look",
                d: "O que foi usado fica guardado na sua área da cliente — para repetir depois, se você quiser.",
              },
            ].map((item, index) => (
              <Reveal key={item.t} delay={index * 0.04}>
                <h3 className="font-serif text-xl">{item.t}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-graphite">
                  {item.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <Faq items={faq} />
      </div>

      <PageCta
        title="Vamos conversar sobre o seu casamento?"
        text="Conte a data, o local e como você se imagina. A partir daí montamos a produção junto."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </PageShell>
  );
}
