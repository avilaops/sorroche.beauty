# Viviane Sorroche — Makeup Artist

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

`src/data/testimonials.ts` está intencionalmente vazio — nenhuma avaliação
real foi fornecida. Ao preencher o array, a seção passa a renderizar
automaticamente.

### Fotografias

`public/portfolio/`. Os retratos têm o rosto no terço superior, por isso os
crops usam `.portrait-crop` (frames largos) e `.portrait-crop-tall`
(frames 4:5 e colunas altas). Trocar as fotos exige revisar esses valores.

## Deploy

Docker + Caddy em VPS Hetzner.

```bash
docker compose up -d --build
```

A aplicação escuta apenas em `127.0.0.1:3000`; o Caddy (`deploy/Caddyfile`)
termina TLS e faz o proxy reverso.

## Roadmap

`app.sorroche.beauty` — área da cliente, agendamento, Beauty Passport e
painel administrativo. Escopo em `docs/brief.md`.
