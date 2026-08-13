import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/animations/Reveal";
import { PageCta } from "@/components/sections/PageCta";
import { sortedPosts } from "@/data/posts";

const title = "Blog";
const description =
  "Textos sobre maquiagem de noiva, longa duração, cuidados com a pele e como escolher a produção certa — por Viviane Sorroche, maquiadora em São José do Rio Preto.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog" },
};

const dateFormat = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function BlogIndex() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Sobre maquiagem, com calma."
      lead="O que costuma gerar dúvida antes de uma produção importante — respondido sem pressa e sem promessa fácil."
      crumbs={[{ label: "Blog", href: "/blog" }]}
    >
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <ul>
          {sortedPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.04}>
              <li className="border-t border-line last:border-b">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-4 py-10 md:grid-cols-[1fr_1.4fr] md:gap-16"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="eyebrow">{post.category}</span>
                    <time dateTime={post.date} className="eyebrow">
                      {dateFormat.format(new Date(`${post.date}T12:00:00Z`))}
                    </time>
                  </div>

                  <div>
                    <h2 className="display text-[clamp(1.6rem,3vw,2.35rem)] transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {post.title}
                    </h2>
                    <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-graphite">
                      {post.description}
                    </p>
                    <span className="eyebrow mt-5 inline-block">
                      {post.readingMinutes} min de leitura
                    </span>
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <PageCta
        title="Ficou com alguma dúvida?"
        text="Fale com a Viviane ou reserve seu horário direto pela agenda."
      />
    </PageShell>
  );
}
