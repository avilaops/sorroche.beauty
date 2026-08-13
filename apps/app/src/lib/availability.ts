import { prisma } from "@/lib/prisma";
import { localToUtc, minutesOf, weekdayOf } from "@/lib/timezone";

/** Granularidade dos horários oferecidos à cliente. */
const SLOT_STEP_MIN = 30;

/** Antecedência mínima para agendar. */
const MIN_NOTICE_MIN = 120;

const BLOCKING_STATUSES = ["PENDING", "CONFIRMED"] as const;

export type Slot = { minutes: number; label: string };

function label(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/**
 * Horários livres para um serviço num dia. Um horário só entra se o
 * atendimento inteiro (duração + buffer) couber na janela de trabalho
 * sem colidir com agendamentos ou bloqueios.
 */
export async function availableSlots(dateKey: string, serviceId: string) {
  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service?.active) return [];

  const dayStart = localToUtc(dateKey, 0);
  const dayEnd = localToUtc(dateKey, 24 * 60);
  const weekday = weekdayOf(dayStart);

  const [windows, bookings, blocks] = await Promise.all([
    prisma.workingHours.findMany({ where: { weekday, active: true } }),
    prisma.booking.findMany({
      where: {
        status: { in: [...BLOCKING_STATUSES] },
        startsAt: { lt: dayEnd },
        endsAt: { gt: dayStart },
      },
      select: { startsAt: true, endsAt: true },
    }),
    prisma.availability.findMany({
      where: { startsAt: { lt: dayEnd }, endsAt: { gt: dayStart } },
      select: { startsAt: true, endsAt: true },
    }),
  ]);

  if (windows.length === 0) return [];

  const busy = [...bookings, ...blocks].map((b) => ({
    start: b.startsAt.getTime(),
    end: b.endsAt.getTime(),
  }));

  const total = service.durationMin + service.bufferMin;
  const earliest = Date.now() + MIN_NOTICE_MIN * 60_000;
  const slots: Slot[] = [];

  for (const window of windows) {
    for (
      let start = window.startMinutes;
      start + total <= window.endMinutes;
      start += SLOT_STEP_MIN
    ) {
      const startsAt = localToUtc(dateKey, start).getTime();
      const endsAt = startsAt + total * 60_000;

      if (startsAt < earliest) continue;
      if (busy.some((b) => startsAt < b.end && endsAt > b.start)) continue;

      slots.push({ minutes: start, label: label(start) });
    }
  }

  return slots.sort((a, b) => a.minutes - b.minutes);
}

/**
 * Revalida no momento da gravação. `availableSlots` pode ficar velho entre
 * a escolha e o envio, então esta é a checagem que realmente protege.
 */
export async function isSlotFree(
  startsAt: Date,
  endsAt: Date,
  ignoreBookingId?: string
) {
  const weekday = weekdayOf(startsAt);
  const startMin = minutesOf(startsAt);
  const endMin = minutesOf(endsAt);

  const windows = await prisma.workingHours.findMany({
    where: { weekday, active: true },
  });
  const insideWindow = windows.some(
    (w) => startMin >= w.startMinutes && endMin <= w.endMinutes
  );
  if (!insideWindow) return false;

  const [conflicts, blocks] = await Promise.all([
    prisma.booking.count({
      where: {
        id: ignoreBookingId ? { not: ignoreBookingId } : undefined,
        status: { in: [...BLOCKING_STATUSES] },
        startsAt: { lt: endsAt },
        endsAt: { gt: startsAt },
      },
    }),
    prisma.availability.count({
      where: { startsAt: { lt: endsAt }, endsAt: { gt: startsAt } },
    }),
  ]);

  return conflicts === 0 && blocks === 0;
}
