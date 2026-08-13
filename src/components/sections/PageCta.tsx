import { siteConfig, whatsappUrl } from "@/data/site";

export function PageCta({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="border-t border-line bg-canvas-deep">
      <div className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-10 md:py-32">
        <h2 className="display mx-auto max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
          {title}
        </h2>
        <p className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-graphite">
          {text}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.app}
            className="bg-ink px-10 py-5 text-[0.75rem] tracking-[0.14em] text-canvas uppercase transition-opacity hover:opacity-85"
          >
            Agendar horário
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-10 py-5 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:border-ink"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
