import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * O acervo fotográfico da Viviane não é material de treinamento, mas
 * aparecer em respostas de assistentes traz cliente. As duas coisas têm
 * agentes diferentes, então são tratadas separadamente.
 */

// Rastreiam para treinar modelos.
const TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
  "cohere-training-data-crawler",
  "Diffbot",
  "Omgilibot",
];

// Rastreiam para indexar e citar — levam tráfego de volta.
const SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Applebot",
];

// Gerado uma vez no build: o site é exportado como arquivos estáticos.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
      ...TRAINING_BOTS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${siteConfig.domain}/sitemap.xml`,
    host: siteConfig.domain,
  };
}
