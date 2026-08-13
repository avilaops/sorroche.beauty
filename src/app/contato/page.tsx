import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/animations/Reveal";
import { mapsUrl, siteConfig, whatsappUrl } from "@/data/site";

const title = "Contato — Viviane Sorroche, Maquiadora em Rio Preto";
const description =
  "Endereço, WhatsApp e agendamento com Viviane Sorroche, maquiadora em São José do Rio Preto. Atendimento no estúdio e a domicílio na região.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contato" },
  openGraph: { title, description, url: "/contato" },
};

const { address } = siteConfig;

export default function ContatoPage() {
  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteConfig.domain}/contato`,
    name: title,
    description,
    mainEntity: {
      "@type": "BeautySalon",
      name: siteConfig.name,
      telephone: siteConfig.phoneRaw,
      url: siteConfig.domain,
      image: `${siteConfig.domain}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
        addressCountry: address.country,
      },
      areaServed: [
        "São José do Rio Preto",
        "Mirassol",
        "Bady Bassitt",
        "Cedral",
        "Guapiaçu",
      ].map((name) => ({ "@type": "City", name })),
      sameAs: [siteConfig.instagram.url],
    },
  };

  return (
    <PageShell
      eyebrow="Contato"
      title="Vamos combinar o seu horário."
      lead="O agendamento online mostra os horários realmente disponíveis. Para dúvidas ou produções fora do comum, fale direto com a Viviane."
      crumbs={[{ label: "Contato", href: "/contato" }]}
    >
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-3">
          <Reveal>
            <span className="eyebrow">Agendamento</span>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-graphite">
              Escolha o serviço, o dia e o horário. Você recebe a confirmação
              da Viviane em seguida.
            </p>
            <a
              href={siteConfig.app}
              className="mt-6 inline-block bg-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
            >
              Agendar horário
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <span className="eyebrow">WhatsApp</span>
            <p className="mt-4 font-serif text-2xl">{siteConfig.phone}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border border-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:bg-ink hover:text-canvas"
            >
              Abrir conversa
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <span className="eyebrow">Instagram</span>
            <p className="mt-4 font-serif text-2xl">
              {siteConfig.instagram.handle}
            </p>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-[0.8rem] text-graphite underline underline-offset-4 transition-colors hover:text-ink"
            >
              Ver o trabalho no Instagram
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-deep">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-[1fr_1fr] md:gap-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              Onde fica o estúdio
            </h2>
            <address className="mt-8 text-[1rem] leading-relaxed text-graphite not-italic">
              {address.street}
              <br />
              {address.district}
              <br />
              {address.city} — {address.state}
              <br />
              CEP {address.zip}
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:bg-ink hover:text-canvas"
            >
              Abrir no mapa
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              Atendimento a domicílio
            </h2>
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-graphite">
              Além do estúdio, a Viviane atende em casa, em hotel ou no local
              do evento — em {address.city} e em cidades da região como
              Mirassol, Bady Bassitt, Cedral e Guapiaçu.
            </p>
            <Link
              href="/maquiagem-a-domicilio"
              className="mt-8 inline-block text-[0.8rem] text-graphite underline underline-offset-4 transition-colors hover:text-ink"
            >
              Como funciona o atendimento a domicílio
            </Link>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
    </PageShell>
  );
}
