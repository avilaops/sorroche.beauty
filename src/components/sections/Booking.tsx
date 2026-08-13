import { siteConfig, whatsappUrl, mapsUrl } from "@/data/site";
import { Reveal } from "@/components/animations/Reveal";

export function Booking() {
  const { address } = siteConfig;

  return (
    <section id="contato" className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="display text-[clamp(2.25rem,5vw,4rem)]">
          Vamos criar sua próxima produção?
        </h2>
        <p className="mx-auto mt-8 max-w-sm text-[0.95rem] leading-relaxed text-graphite">
          Conte para a Viviane sobre sua ocasião e consulte disponibilidade.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-ink px-10 py-5 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
        >
          Agendar pelo WhatsApp
        </a>
      </Reveal>

      <Reveal
        delay={0.1}
        className="mt-28 grid grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-3"
      >
        <div>
          <span className="eyebrow">Atendimento</span>
          <p className="mt-4 font-serif text-2xl">
            {address.city} — {address.state}
          </p>
        </div>
        <div>
          <span className="eyebrow">Endereço</span>
          <address className="mt-4 text-sm not-italic leading-relaxed text-graphite">
            {address.street}
            <br />
            {address.district}
            <br />
            CEP {address.zip}
          </address>
        </div>
        <div className="flex items-start">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-7 py-3.5 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:border-ink"
          >
            Abrir no mapa
          </a>
        </div>
      </Reveal>
    </section>
  );
}
