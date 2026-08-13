import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { works } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Com barra final, para bater com o canonical.
      url: `${siteConfig.domain}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      // O trabalho é visual: as fotos merecem entrar na busca por imagens.
      images: works.map(
        (work) => `${siteConfig.domain}${work.image.src}`
      ),
    },
  ];
}
