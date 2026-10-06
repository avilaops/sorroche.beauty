import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { works } from "@/data/portfolio";
import { sortedPosts } from "@/data/posts";
import { cities } from "@/data/cities";

// `output: "export"` exige que a rota seja resolvida no build.
export const dynamic = "force-static";

/** Páginas fixas, com a prioridade que reflete o valor comercial. */
const staticPages = [
  { path: "/noivas", priority: 0.9 },
  { path: "/maquiagem-social", priority: 0.9 },
  { path: "/maquiagem-blindada", priority: 0.9 },
  { path: "/curso-automaquiagem", priority: 0.9 },
  { path: "/maquiagem-a-domicilio", priority: 0.8 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/sobre", priority: 0.6 },
  { path: "/contato", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      // Sem barra final, igual ao canonical e ao og:url.
      url: siteConfig.domain,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      // O trabalho é visual: as fotos merecem entrar na busca por imagens.
      images: works.map((work) => `${siteConfig.domain}${work.image.src}`),
    },
    ...staticPages.map((page) => ({
      url: `${siteConfig.domain}${page.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...cities.map((city) => ({
      url: `${siteConfig.domain}/atendimento/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${siteConfig.domain}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...sortedPosts.map((post) => ({
      url: `${siteConfig.domain}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T12:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
