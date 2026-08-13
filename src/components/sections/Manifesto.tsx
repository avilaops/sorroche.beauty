import { Reveal } from "@/components/animations/Reveal";

export function Manifesto() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">
          Cada rosto conta uma história.
        </h2>
        <p className="mx-auto mt-10 max-w-lg text-[0.95rem] leading-relaxed text-graphite">
          A maquiagem não precisa transformar quem você é. Ela pode simplesmente
          revelar aquilo que já existe.
        </p>
      </Reveal>
    </section>
  );
}
