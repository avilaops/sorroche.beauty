require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// Durações são estimativas operacionais iniciais; preços ficam nulos
// até a Viviane cadastrar os valores reais.
const services = [
  { slug: "maquiagem-social", name: "Maquiagem Social", durationMin: 90, bufferMin: 15, order: 1 },
  { slug: "noivas", name: "Noivas", durationMin: 180, bufferMin: 30, order: 2 },
  { slug: "maquiagem-blindada", name: "Maquiagem Blindada", durationMin: 120, bufferMin: 15, order: 3 },
  { slug: "producoes-especiais", name: "Produções Especiais", durationMin: 120, bufferMin: 15, order: 4 },
  { slug: "curso-automaquiagem", name: "Curso de Automaquiagem", durationMin: 180, bufferMin: 15, order: 5 },
];

(async () => {
  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }
  console.log("seeded", await prisma.service.count(), "services");
  await prisma.$disconnect();
})().catch(async (e) => {
  console.error(e.message);
  await prisma.$disconnect();
  process.exit(1);
});
