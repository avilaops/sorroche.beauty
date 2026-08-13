import type { MetadataRoute } from "next";
import { servicePages, siteConfig } from "@/data/site";
import { works } from "@/data/portfolio";
import { sortedPosts } from "@/data/posts";

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
    ...servicePages.map((page) => ({
      url: `${siteConfig.domain}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
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
