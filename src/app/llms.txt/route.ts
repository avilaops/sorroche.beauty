import { siteConfig, whatsappUrl } from "@/data/site";
import { services } from "@/data/services";
import { works } from "@/data/portfolio";
import { sortedPosts } from "@/data/posts";

// Convenção llmstxt.org: um resumo em Markdown, legível por modelos de
// linguagem, do que o site oferece.
export const dynamic = "force-static";

export function GET() {
  const { address, instagram } = siteConfig;

  const body = `# ${siteConfig.name}

> Maquiadora profissional em ${address.city}/${address.state}, especializada em maquiagem social, noivas, maquiagem blindada de longa duração e curso de automaquiagem.

${siteConfig.name} atende em ${address.city} e região, com produções personalizadas para casamentos, formaturas, ensaios e ocasiões especiais. O trabalho valoriza a identidade de cada cliente: maquiagem que realça, sem descaracterizar.

## Serviços

${services.map((service) => `- **${service.title}** — ${service.description}`).join("\n")}

## Estilos no portfólio

${works.map((work) => `- ${work.style} (${work.category})`).join("\n")}

## Blog

${sortedPosts.map((post) => `- [${post.title}](${siteConfig.domain}/blog/${post.slug}): ${post.description}`).join("\n")}

## Atendimento

- Cidade: ${address.city} — ${address.state}, Brasil
- Endereço: ${address.street}, ${address.district}, CEP ${address.zip}
- WhatsApp: ${siteConfig.phone}
- Instagram: ${instagram.handle} (${instagram.url})

## Agendamento

O agendamento é feito pelo WhatsApp (${siteConfig.phone}). A cliente informa o serviço, o dia e o horário, e recebe a confirmação da Viviane.

## Links

- [Site](${siteConfig.domain}/): portfólio, serviços, noivas, curso e contato
- [Agendar pelo WhatsApp](${whatsappUrl})
- [Instagram](${instagram.url})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
