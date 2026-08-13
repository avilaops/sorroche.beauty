import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Faq, type QA } from "@/components/sections/Faq";
import { PageCta } from "@/components/sections/PageCta";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";

const title = "Curso de Automaquiagem em São José do Rio Preto";
const description =
  "Aula de automaquiagem em São José do Rio Preto: entenda seu rosto, seus produtos e as técnicas que funcionam para a sua rotina — e repita sozinha.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/curso-automaquiagem" },
  openGraph: { title, description, url: "/curso-automaquiagem" },
};

const topics = [
  {
    t: "Conhecer o próprio rosto",
    d: "Formato, proporções, o que realçar e o que não precisa de correção. A base de tudo é parar de copiar tutorial feito para outro rosto.",
  },
  {
    t: "Preparação de pele",
    d: "O passo que quase todo mundo pula e que decide o resultado. O que usar conforme o seu tipo de pele, e em que ordem.",
  },
  {
    t: "Base, tom e cobertura",
    d: "Como escolher o tom certo, quanta cobertura você realmente precisa e como aplicar para parecer pele — não máscara.",
  },
  {
    t: "Olhos sem complicação",
    d: "Um esfumado que você consiga repetir num dia comum, sem levar meia hora e sem depender de dez pincéis.",
  },
  {
    t: "Sobrancelha e boca",
    d: "Dois detalhes que mudam o rosto inteiro. Como preencher sem endurecer e como escolher tons que combinam com você.",
  },
  {
    t: "Seu kit essencial",
    d: "Quais produtos valem o investimento para a sua rotina — e quais você pode deixar na prateleira da loja.",
  },
];

const faq: QA[] = [
  {
    q: "Preciso ter experiência com maquiagem?",
    a: "Não. A aula parte de onde você está. Quem nunca passou de um corretivo e quem já se maquia mas não gosta do resultado começam de pontos diferentes, e o conteúdo se ajusta a isso.",
  },
  {
    q: "A aula é individual ou em grupo?",
    a: "Os formatos e a duração são combinados diretamente com a Viviane, conforme a sua necessidade. Fale pelo WhatsApp para saber as opções disponíveis no momento.",
  },
  {
    q: "Preciso levar meus produtos?",
    a: "Levar o que você já tem ajuda bastante: parte do valor da aula é descobrir o que funciona no seu rosto entre o que você já comprou, e o que está sobrando na necessaire.",
  },
  {
    q: "Vou conseguir repetir sozinha em casa?",
    a: "Esse é o objetivo. A aula é prática: você faz, com orientação, em vez de assistir alguém fazer em você. O que não se repete sozinha não serviu para nada.",
  },
  {
    q: "Serve para quem tem pouco tempo de manhã?",
    a: "Sim. Uma parte importante é montar uma rotina curta e realista para o dia a dia, além do look mais elaborado para ocasiões.",
  },
];

export default function CursoPage() {
  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Curso de Automaquiagem",
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    url: `${siteConfig.domain}/curso-automaquiagem`,
  };

  return (
    <PageShell
      eyebrow="Curso de Automaquiagem · São José do Rio Preto"
      title="Aprenda a se maquiar. Sem deixar de parecer você."
      lead="Uma experiência para entender produtos, técnicas e escolhas que realmente funcionam para o seu rosto e para a sua rotina."
      crumbs={[{ label: "Curso de Automaquiagem", href: "/curso-automaquiagem" }]}
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
            O que você leva da aula
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-3">
          {topics.map((item, index) => (
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
              Para quem é
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-6">
            <p className="text-[0.95rem] leading-relaxed text-graphite">
              Para quem compra produto por indicação da internet e nunca acerta.
              Para quem sabe fazer um look e repete o mesmo há anos. Para quem
              acha que maquiagem no dia a dia é complicada demais — e não
              precisa ser.
            </p>
            <p className="text-[0.95rem] leading-relaxed text-graphite">
              Não é um curso para formar maquiadora profissional. É para você
              conseguir se produzir com segurança, em qualquer dia, sem depender
              de ninguém.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-line">
        <Faq items={faq} />
      </div>

      <PageCta
        title="Quer saber sobre a próxima turma?"
        text="Fale com a Viviane para conhecer formatos, datas e o que melhor se encaixa em você."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }}
      />
    </PageShell>
  );
}
