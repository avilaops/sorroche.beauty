import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageCta } from "@/components/sections/PageCta";
import { siteConfig } from "@/data/site";
import { getPost, posts, sortedPosts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = sortedPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
    image: post.image
      ? `${siteConfig.domain}${post.image.src}`
      : `${siteConfig.domain}/opengraph-image`,
  };

  return (
    <PageShell
      eyebrow={post.category}
      title={post.title}
      crumbs={[
        { label: "Blog", href: "/blog" },
        { label: post.title, href: `/blog/${post.slug}` },
      ]}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line pb-8">
          <time dateTime={post.date} className="eyebrow">
            {dateFormat.format(new Date(`${post.date}T12:00:00Z`))}
          </time>
          <span className="eyebrow">{post.readingMinutes} min de leitura</span>
        </div>
      </div>

      {post.image && (
        <div className="mx-auto mt-16 max-w-[1400px] px-6 md:px-10">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-canvas-deep sm:aspect-[3/2] md:aspect-[16/9]">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              placeholder="blur"
              className="banner-crop"
            />
          </div>
        </div>
      )}

      <article className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="flex max-w-[38rem] flex-col gap-7">
          {post.body.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="font-serif text-[1.75rem] leading-snug mt-6"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="flex flex-col gap-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="grid grid-cols-[auto_1fr] gap-4 text-[1rem] leading-relaxed text-graphite"
                    >
                      <span aria-hidden="true" className="mt-3 h-px w-4 bg-champagne" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="border-l-2 border-champagne py-1 pl-6 font-serif text-[1.3rem] leading-snug"
                >
                  {block.text}
                </blockquote>
              );
            }

            return (
              <p key={index} className="text-[1rem] leading-relaxed text-graphite">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
            <span className="eyebrow">Continue lendo</span>
            <ul className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
              {others.map((item) => (
                <li key={item.slug} className="border-t border-line pt-6">
                  <Link href={`/blog/${item.slug}`} className="group block">
                    <span className="eyebrow">{item.category}</span>
                    <h3 className="display mt-3 text-2xl transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {item.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <PageCta
        title="Vamos criar sua próxima produção?"
        text="Escolha o serviço, o dia e o horário — a confirmação vem em seguida."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </PageShell>
  );
}
