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

// Janelas iniciais de atendimento (terça a sábado). A Viviane ajusta depois.
const workingHours = [
  { weekday: 2, startMinutes: 9 * 60, endMinutes: 18 * 60 },
  { weekday: 3, startMinutes: 9 * 60, endMinutes: 18 * 60 },
  { weekday: 4, startMinutes: 9 * 60, endMinutes: 18 * 60 },
  { weekday: 5, startMinutes: 9 * 60, endMinutes: 18 * 60 },
  { weekday: 6, startMinutes: 8 * 60, endMinutes: 16 * 60 },
];

(async () => {
  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }
  for (const window of workingHours) {
    await prisma.workingHours.upsert({
      where: {
        weekday_startMinutes: {
          weekday: window.weekday,
          startMinutes: window.startMinutes,
        },
      },
      update: {},
      create: window,
    });
  }
  console.log(
    "seeded",
    await prisma.service.count(),
    "services,",
    await prisma.workingHours.count(),
    "working hours"
  );
  await prisma.$disconnect();
})().catch(async (e) => {
  console.error(e.message);
  await prisma.$disconnect();
  process.exit(1);
});
