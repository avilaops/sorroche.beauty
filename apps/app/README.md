This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Login com Google

O app aceita e-mail/senha e Google. O provider Google só entra se
`AUTH_GOOGLE_ID` e `AUTH_GOOGLE_SECRET` existirem — sem elas o botão não é
renderizado e nada quebra.

A credencial é um **OAuth Client** do projeto Google `contatos-424700`, com os
redirects deste domínio (o projeto é compartilhado; o cliente OAuth é próprio).
No Console → APIs e Serviços → Credenciais → Criar → ID do cliente OAuth →
Aplicativo da Web:

- Origens JavaScript: `https://app.sorroche.beauty`, `http://localhost:3000`
- URIs de redirecionamento:
  - `https://app.sorroche.beauty/api/auth/callback/google`
  - `http://localhost:3000/api/auth/callback/google`

Quem já tem conta por senha e entra pelo Google com o mesmo e-mail cai na mesma
conta (`allowDangerousEmailAccountLinking`) — sem isso o Auth.js recusa com
`OAuthAccountNotLinked` numa tela sem saída. Conta criada pelo Google não passa
pelo `/criar-conta`, então o `Client` é criado no evento `createUser`.

As tabelas `Account`, `Session` e `VerificationToken` já existem desde a
migration inicial; não há migration nova.
