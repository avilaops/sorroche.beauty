import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Faq, type QA } from "@/components/sections/Faq";
import { PageCta } from "@/components/sections/PageCta";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";
import { cities, getCity } from "@/data/cities";

export function generateStaticParams() {
  return cities.map((city) => ({ cidade: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await params;
  const city = getCity(cidade);
  if (!city) return {};

  const title = `Maquiadora em ${city.name} — Viviane Sorroche`;
  const description = `Maquiagem para noivas, formatura e festa em ${city.name}, na região de São José do Rio Preto. Atendimento a domicílio com horário reservado.`;

  return {
    title,
    description,
    alternates: { canonical: `/atendimento/${city.slug}` },
    openGraph: { title, description, url: `/atendimento/${city.slug}` },
  };
}

export default async function CidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade } = await params;
  const city = getCity(cidade);
  if (!city) notFound();

  const others = cities.filter((item) => item.slug !== city.slug);

  // As específicas primeiro: é o que diferencia esta página das outras cidades.
  const faq: QA[] = [
    ...city.faq,
    {
      q: `Quanto custa o atendimento em ${city.name}?`,
      a: "O valor depende do serviço, do horário e do deslocamento até o local. Por isso o orçamento é feito depois de saber a data, o endereço e quantas pessoas serão atendidas.",
    },
    {
      q: "Preciso ir até Rio Preto para o teste de maquiagem?",
      a: `O teste costuma acontecer no estúdio em ${siteConfig.address.city}, mas pode ser combinado de outra forma dependendo da data e da agenda. Vale conversar antes de fechar.`,
    },
  ];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Maquiagem profissional em ${city.name}`,
    serviceType: "Maquiagem",
    description: `Maquiagem para noivas, formatura e festa em ${city.name}, região de São José do Rio Preto.`,
    provider: {
      "@type": "BeautySalon",
      name: siteConfig.name,
      telephone: siteConfig.phoneRaw,
      url: siteConfig.domain,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
    },
    areaServed: { "@type": "City", name: city.name },
    url: `${siteConfig.domain}/atendimento/${city.slug}`,
  };

  return (
    <PageShell
      eyebrow={`Atendimento · ${city.name} — SP`}
      title={`Maquiagem em ${city.name}`}
      lead={city.context}
      crumbs={[
        { label: "Atendimento a domicílio", href: "/maquiagem-a-domicilio" },
        { label: city.name, href: `/atendimento/${city.slug}` },
      ]}
    >
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-24">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3rem)]">
              Como funciona por aqui
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-6">
            <p className="text-[1rem] leading-relaxed text-graphite">
              {city.logistics}
            </p>
            <p className="text-[1rem] leading-relaxed text-graphite">
              {city.timing}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3rem)]">
              Serviços disponíveis em {city.name}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {[
              {
                label: "Maquiagem de noiva",
                href: "/noivas",
                d: "Com teste, acabamento pensado para fotografia e horário reservado.",
              },
              {
                label: "Maquiagem social",
                href: "/maquiagem-social",
                d: "Formatura, festa, debutante, aniversário e ensaio fotográfico.",
              },
              {
                label: "Maquiagem blindada",
                href: "/maquiagem-blindada",
                d: "Longa duração para festas ao ar livre e dias quentes.",
              },
              {
                label: "Curso de automaquiagem",
                href: "/curso-automaquiagem",
                d: "Aula prática para aprender a se produzir sozinha.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.href}
                delay={index * 0.04}
                className="border-t border-line pt-5"
              >
                <Link href={item.href} className="group block">
                  <h3 className="font-serif text-2xl transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                    {item.d}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <Faq items={faq} title={`Dúvidas sobre o atendimento em ${city.name}`} />
      </div>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <span className="eyebrow">Outras cidades atendidas</span>
          <ul className="mt-8 flex flex-wrap gap-4">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/atendimento/${item.slug}`}
                  className="inline-block border border-line px-6 py-3 text-[0.85rem] transition-colors hover:border-ink"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta
        title={`Seu evento é em ${city.name}?`}
        text="Conte a data, o local e o horário. A partir daí montamos a produção."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </PageShell>
  );
}
