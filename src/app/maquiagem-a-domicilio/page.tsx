import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Faq, type QA } from "@/components/sections/Faq";
import { PageCta } from "@/components/sections/PageCta";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";
import { cities } from "@/data/cities";

const title = "Maquiagem a Domicílio em São José do Rio Preto";
const description =
  "Maquiadora que atende em casa, hotel ou no local do evento em São José do Rio Preto e região. Como funciona, o que preparar e como reservar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/maquiagem-a-domicilio" },
  openGraph: { title, description, url: "/maquiagem-a-domicilio" },
};

const needs = [
  {
    t: "Um ponto de luz natural",
    d: "Perto de uma janela é o ideal. Luz de teto amarela engana a percepção de cor e pode comprometer o resultado nas fotos.",
  },
  {
    t: "Uma tomada por perto",
    d: "Alguns equipamentos precisam de energia. Vale conferir antes, principalmente em chácara e espaço de festa.",
  },
  {
    t: "Uma cadeira sem encosto alto",
    d: "Encosto alto atrapalha o acesso ao rosto. Uma cadeira comum de cozinha costuma funcionar melhor que a poltrona da sala.",
  },
  {
    t: "Um espaço com pouca circulação",
    d: "Quarto ou um canto reservado. Produção no meio do movimento da casa atrasa e tira a concentração de todo mundo.",
  },
];

const faq: QA[] = [
  {
    q: "O atendimento a domicílio custa mais caro?",
    a: "O deslocamento entra no orçamento, e ele varia conforme a distância e o horário. Por isso o valor é passado depois de saber onde e a que horas será o atendimento.",
  },
  {
    q: "Você atende em hotel ou espaço de festa?",
    a: "Sim. Casa, hotel, salão de festas ou chácara — o que importa é ter um canto com luz razoável e espaço para montar. Vale combinar o local exato com antecedência.",
  },
  {
    q: "Quais cidades além de Rio Preto?",
    a: "Mirassol, Bady Bassitt, Cedral e Guapiaçu, entre outras da região. Para cidades mais distantes, é só perguntar — depende da agenda e do horário do evento.",
  },
  {
    q: "Dá para atender várias pessoas no mesmo lugar?",
    a: "Sim, e é o mais comum em casamento: noiva, madrinhas e mãe da noiva na mesma produção. Como cada pessoa soma tempo, a quantidade precisa ser definida quando a data é reservada.",
  },
  {
    q: "Preciso preparar alguma coisa antes?",
    a: "Um ponto com luz natural, uma tomada e uma cadeira sem encosto alto resolvem quase tudo. Chegar com o rosto limpo e o cabelo já combinado com o horário do penteado ajuda a manter o cronograma.",
  },
];

export default function DomicilioPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maquiagem a domicílio",
    serviceType: "Maquiagem a domicílio",
    description,
    provider: {
      "@type": "BeautySalon",
      name: siteConfig.name,
      telephone: siteConfig.phoneRaw,
      url: siteConfig.domain,
    },
    areaServed: [
      siteConfig.address.city,
      ...cities.map((city) => city.name),
    ].map((name) => ({ "@type": "City", name })),
    url: `${siteConfig.domain}/maquiagem-a-domicilio`,
  };

  return (
    <PageShell
      eyebrow="Atendimento a domicílio · Rio Preto e região"
      title="A produção acontece onde você estiver."
      lead="Em casa, no hotel ou no local do evento. O atendimento a domicílio poupa deslocamento no dia em que o tempo é mais curto — e é o formato mais comum em casamento."
      crumbs={[{ label: "Maquiagem a Domicílio", href: "/maquiagem-a-domicilio" }]}
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
            O que ajuda no local
          </h2>
          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-graphite">
            Nada complicado — só quatro coisas que fazem diferença no resultado
            e no tempo.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {needs.map((item, index) => (
            <Reveal key={item.t} delay={index * 0.05}>
              <h3 className="font-serif text-xl">{item.t}</h3>
              <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-graphite">
                {item.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-canvas-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              Cidades atendidas
            </h2>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-graphite">
              Além de {siteConfig.address.city}, o atendimento alcança as
              cidades da região. Cada uma tem sua própria página com o que muda
              na logística do dia.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {cities.map((city, index) => (
              <Reveal key={city.slug} delay={index * 0.04}>
                <li className="border-t border-line pt-5">
                  <Link
                    href={`/atendimento/${city.slug}`}
                    className="group flex items-baseline justify-between gap-6"
                  >
                    <span className="font-serif text-2xl transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {city.name}
                    </span>
                    <span className="text-sm text-muted">→</span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-line">
        <Faq items={faq} />
      </div>

      <PageCta
        title="Onde vai ser a sua produção?"
        text="Conte o local e o horário do evento — a partir daí montamos o cronograma."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </PageShell>
  );
}
