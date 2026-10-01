# Viviane Sorroche: Makeup Artist

Site institucional premium para Viviane Sorroche, maquiadora em São José do Rio Preto/SP.

Produção: **https://sorroche.beauty**

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Motion (animações)
- Instrument Serif + Inter

## Desenvolvimento

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── app/            layout, página, sitemap, robots
├── components/
│   ├── layout/     Navbar, Footer, FloatingCta
│   ├── sections/   Hero, Manifesto, Portfolio, TheLook, Services,
│   │               Bridal, Course, About, Testimonials, Instagram, Booking
│   └── animations/ Reveal
├── data/           site.ts, services.ts, portfolio.ts, testimonials.ts
└── lib/
```

Todo o conteúdo (textos, telefone, links, portfólio) vive em `src/data/`.
Nenhum dado fica hardcoded nos componentes.

### Depoimentos

`src/data/testimonials.ts` está intencionalmente vazio, nenhuma avaliação
real foi fornecida. Ao preencher o array, a seção passa a renderizar
automaticamente.

### Fotografias

`public/portfolio/`. Os retratos têm o rosto no terço superior, por isso os
crops usam `.portrait-crop` (frames largos) e `.portrait-crop-tall`
(frames 4:5 e colunas altas). Trocar as fotos exige revisar esses valores.

## Deploy

Site 100% estático, sem servidor Node em produção. `npm run build` gera a
pasta `out/` (`output: "export"` em `next.config.ts`).

O CI (`.github/workflows/deploy-production.yml`) monta uma imagem que só
transporta esses arquivos; o deploy estático da infra (`DEPLOY_MODE=static`
em `avilaops/infra`) copia o conteúdo para `/var/www/sorroche.beauty`, com
rollback automático se a verificação falhar. O Caddy serve os arquivos direto
(`deploy/Caddyfile`).

Para conferir localmente:

```bash
npm run build
npx serve out
```

Não existe área administrativa nem banco de dados: todo o conteúdo vive em
`src/data/` e o agendamento é pelo WhatsApp. A antiga `app.sorroche.beauty`
(desativada em 16/09/2026) foi removida do repositório; o código continua no
histórico do Git.
