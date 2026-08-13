import { whatsappUrl } from "@/data/site";
import { Reveal } from "@/components/animations/Reveal";

export function Course() {
  return (
    <section id="curso" className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
      <Reveal className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="eyebrow">Curso de Automaquiagem</span>
        </div>
        <div className="md:col-span-7">
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            Aprenda a se maquiar.
            <br />
            Sem deixar de parecer você.
          </h2>
          <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-graphite">
            Uma experiência para entender produtos, técnicas e escolhas que
            realmente funcionam para o seu rosto e para a sua rotina.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border border-ink px-8 py-4 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:bg-ink hover:text-canvas"
          >
            Quero saber sobre o curso
          </a>
        </div>
      </Reveal>
    </section>
  );
}
