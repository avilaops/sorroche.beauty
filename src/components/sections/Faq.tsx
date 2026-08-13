export type QA = { q: string; a: string };

/**
 * Perguntas frequentes com FAQPage em JSON-LD — é o que habilita o
 * resultado expandido na busca.
 */
export function Faq({ items, title = "Perguntas frequentes" }: { items: QA[]; title?: string }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">{title}</h2>

      <dl className="mt-16 max-w-3xl">
        {items.map((item) => (
          <div
            key={item.q}
            className="grid gap-3 border-t border-line py-8 last:border-b md:grid-cols-[1fr_1.4fr] md:gap-10"
          >
            <dt className="font-serif text-xl leading-snug">{item.q}</dt>
            <dd className="text-[0.95rem] leading-relaxed text-graphite">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </section>
  );
}
