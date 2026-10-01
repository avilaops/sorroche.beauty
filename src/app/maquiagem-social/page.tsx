import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Faq, type QA } from "@/components/sections/Faq";
import { PageCta } from "@/components/sections/PageCta";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";
import social from "@/../public/portfolio/rose-iluminado.jpg";

const title = "Maquiagem Social em São José do Rio Preto";
const description =
  "Maquiagem para formatura, festa, debutante e aniversário em São José do Rio Preto. Acabamento natural, longa duração e um look que continua sendo você.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/maquiagem-social" },
  openGraph: { title, description, url: "/maquiagem-social" },
};

const occasions = [
  {
    t: "Formatura",
    d: "O look precisa aguentar colação, fotos oficiais, jantar e festa — e continuar bonito na foto que fica para sempre.",
  },
  {
    t: "Debutante e 15 anos",
    d: "Maquiagem que respeita a idade e a pele jovem: nada de pesado, tudo de marcante. A menina continua ela mesma.",
  },
  {
    t: "Festa e aniversário",
    d: "Produção para a noite, pensada para luz baixa e fotografia com flash, sem ficar artificial ao vivo.",
  },
  {
    t: "Ensaio fotográfico",
    d: "Acabamento calibrado para câmera, com atenção a textura e brilho controlado — o que a lente vê é diferente do que o olho vê.",
  },
  {
    t: "Madrinha e convidada",
    d: "Elegante sem competir com a noiva, e resistente o suficiente para a festa inteira.",
  },
  {
    t: "Eventos e trabalho",
    d: "Para quem precisa estar bem em um evento profissional, palestra ou gravação, com aparência natural.",
  },
];

const faq: QA[] = [
  {
    q: "Quanto tempo dura o atendimento?",
    a: "Uma maquiagem social costuma levar em torno de uma hora e meia, contando a preparação de pele. O tempo exato depende do look escolhido e do seu tipo de pele.",
  },
  {
    q: "Quanto custa uma maquiagem social?",
    a: "O valor varia conforme a ocasião, o horário e se há deslocamento. O orçamento é passado na conversa inicial, considerando o que a sua produção realmente envolve.",
  },
  {
    q: "Preciso levar algum produto?",
    a: "Não. Todos os produtos são da profissional. Se você usa algo específico por alergia ou preferência, é só avisar antes e levar — isso entra no seu perfil de beleza.",
  },
  {
    q: "Como devo chegar para a maquiagem?",
    a: "Com o rosto limpo, sem maquiagem, e de preferência com o cabelo já resolvido ou combinado com o horário do penteado. Evite procedimentos novos na pele nos dias anteriores.",
  },
  {
    q: "A maquiagem funciona em pele oleosa?",
    a: "Sim. O preparo de pele muda conforme o tipo: pele oleosa recebe produtos e selagem próprios para controlar brilho e manter o acabamento durante a festa.",
  },
  {
    q: "Dá para escolher o estilo antes?",
    a: "Sim, e ajuda muito. Referências de imagem, o vestido e a ocasião guiam a escolha. Se você já foi atendida antes, o look anterior fica registrado e pode ser repetido.",
  },
];

export default function MaquiagemSocialPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maquiagem social",
    serviceType: "Maquiagem social",
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
    url: `${siteConfig.domain}/maquiagem-social`,
  };

  return (
    <PageShell
      eyebrow="Maquiagem Social · São José do Rio Preto"
      title="Para os dias que merecem ser lembrados."
      lead="Formatura, festa, debutante, ensaio. Maquiagem personalizada para a ocasião, com acabamento natural e duração que acompanha a noite inteira."
      crumbs={[{ label: "Maquiagem Social", href: "/maquiagem-social" }]}
    >
      <Reveal className="mx-auto mt-20 max-w-[1400px] px-6 md:mt-28 md:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/2] md:aspect-[16/9]">
          <Image
            src={social}
            alt="Maquiagem social em tons rosé com esfumado quente e pele de acabamento natural luminoso."
            fill
            sizes="(max-width: 768px) 100vw, 1400px"
            placeholder="blur"
            className="banner-crop"
          />
        </div>
      </Reveal>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
            Cada ocasião pede uma decisão diferente
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-3">
          {occasions.map((item, index) => (
            <Reveal key={item.t} delay={index * 0.04}>
              <h3 className="font-serif text-xl">{item.t}</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-graphite">
                {item.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-canvas-deep">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:gap-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              O que muda quando a maquiagem é feita para você
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-6">
            <p className="text-[0.95rem] leading-relaxed text-graphite">
              Maquiagem boa não é a que aparece primeiro — é a que faz você
              aparecer. A escolha de tom, cobertura e acabamento parte do seu
              rosto e da sua rotina, não de uma fórmula pronta que se repete em
              todo mundo.
            </p>
            <p className="text-[0.95rem] leading-relaxed text-graphite">
              Por isso a conversa antes do atendimento importa: entender a
              ocasião, ver referências, saber o que você não gosta. É o que
              separa uma produção que você ama de uma que só está tecnicamente
              correta.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-line">
        <Faq items={faq} />
      </div>

      <PageCta
        title="Qual é a sua próxima ocasião?"
        text="Escolha o serviço, o dia e o horário. A confirmação vem em seguida."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </PageShell>
  );
}
