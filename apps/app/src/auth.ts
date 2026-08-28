import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import type { Role } from "@prisma/client";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

/**
 * O login com Google só existe se a credencial estiver configurada.
 * Sem as variáveis, o provider não entra e o botão não é renderizado —
 * o app continua funcionando com e-mail e senha.
 */
export const googleEnabled = Boolean(
  process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
);

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: { signIn: "/entrar" },
  providers: [
    ...(googleEnabled
      ? [
          Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            // A cliente que já criou conta por senha e depois entra pelo
            // Google com o mesmo e-mail cai na mesma conta, em vez de
            // receber OAuthAccountNotLinked numa tela sem saída.
            allowDangerousEmailAccountLinking: true,
          }),
        ]
      : []),
    Credentials({
      credentials: {
        email: { label: "E-mail", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(raw) {
        const parsed = credentialsSchema.safeParse(raw);
        if (!parsed.success) return null;

        const user = await prisma.user.findUnique({
          where: { email: parsed.data.email.toLowerCase() },
        });
        if (!user?.passwordHash) return null;

        const valid = await bcrypt.compare(
          parsed.data.password,
          user.passwordHash
        );
        if (!valid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  events: {
    /**
     * Conta criada pelo Google não passa por /criar-conta, então o perfil
     * de cliente é criado aqui. Se a Viviane já tinha cadastrado a pessoa
     * sem login, o perfil órfão é adotado em vez de duplicar.
     */
    async createUser({ user }) {
      if (!user.id) return;

      const orphan = user.email
        ? await prisma.client.findFirst({
            where: { userId: null, user: null, name: user.name ?? undefined },
          })
        : null;

      if (orphan) {
        await prisma.client.update({
          where: { id: orphan.id },
          data: { userId: user.id },
        });
        return;
      }

      await prisma.client.create({
        data: { userId: user.id, name: user.name ?? "Cliente" },
      });
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: Role }).role;
        token.id = user.id as string;
      }

      // Conta vinda do Google chega sem role no primeiro passe: o adapter
      // grava o User com o default do banco, então buscamos uma vez.
      if (token.id && !token.role) {
        const found = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { role: true },
        });
        token.role = found?.role ?? "CLIENT";
      }

      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
      }
      return session;
    },
  },
});
