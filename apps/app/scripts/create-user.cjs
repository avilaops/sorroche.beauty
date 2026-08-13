/**
 * Cria ou atualiza um usuário.
 * Uso: node scripts/create-user.cjs <email> <senha> <NOME> [ROLE]
 */
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const [email, password, name, role = "CLIENT"] = process.argv.slice(2);

if (!email || !password || !name) {
  console.error("uso: node scripts/create-user.cjs <email> <senha> <nome> [ROLE]");
  process.exit(1);
}

(async () => {
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.upsert({
    where: { email: email.toLowerCase() },
    update: { passwordHash, role, name },
    create: { email: email.toLowerCase(), passwordHash, role, name },
  });

  // Toda cliente precisa de um Client para agendar; staff não.
  if (user.role === "CLIENT") {
    await prisma.client.upsert({
      where: { userId: user.id },
      update: {},
      create: { userId: user.id, name: user.name || email },
    });
  }

  console.log(`${user.email} (${user.role})`);
  await prisma.$disconnect();
})().catch(async (e) => {
  console.error(e.message);
  await prisma.$disconnect();
  process.exit(1);
});
