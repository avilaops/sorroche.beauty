import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/animations/Reveal";

export function Testimonials() {
  return (
    <section className="border-y border-line bg-canvas-deep">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-40">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.5rem)]">
            O resultado é visto.
            <br />
            A experiência é sentida.
          </h2>
        </Reveal>

        {testimonials.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {testimonials.map((item) => (
              <Reveal key={item.name}>
                <figure>
                  <blockquote className="font-serif text-xl leading-snug">
                    “{item.text}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <span className="block text-sm">{item.name}</span>
                    <span className="eyebrow">{item.service}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-14">
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Depoimentos a cadastrar — a estrutura já está preparada para nome,
              texto, serviço, foto, data e origem.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
