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

## app.sorroche.beauty

A aplicação vive em `apps/app` e é independente deste site (build, deploy
e container próprios). Produção: **https://app.sorroche.beauty**

- Next.js 16 + Prisma 7 + PostgreSQL
- Auth.js v5, credenciais, papéis `CLIENT` / `STAFF` / `ADMIN` / `OWNER`
- `src/proxy.ts` protege as rotas; `/admin` restrito a staff

```bash
cd apps/app
npm install
npx prisma generate
npm run dev            # porta 3200
```

O banco roda no Postgres do host do servidor (não em container, para poupar
memória). Em desenvolvimento, acesse via túnel SSH:

```bash
ssh -i ~/.ssh/hetzner_avilaops -N -L 15432:127.0.0.1:5432 root@178.105.82.48
```

Criar usuário:

```bash
node scripts/create-user.cjs <email> <senha> <nome> [ROLE]
```

### Estado atual

Pronto: autenticação, papéis, dashboard da Viviane (agenda do dia e
indicadores), agenda, clientes, serviços, Beauty Passport e Beauty Profile.

Falta: fluxo de agendamento com data e horário (hoje `/agendar` lista os
serviços e encaminha ao WhatsApp), registro de looks pela Viviane,
pagamentos, automações de WhatsApp e lista de espera. Escopo completo em
`docs/brief.md`.
