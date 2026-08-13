/**
 * O negócio acontece em São José do Rio Preto. O servidor roda em UTC,
 * então toda conversão entre "data do calendário" e instante real passa
 * por aqui — nunca use getHours()/setHours() direto num Date.
 */
export const TIMEZONE = "America/Sao_Paulo";

const partsFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIMEZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function parts(date: Date) {
  const map: Record<string, string> = {};
  for (const part of partsFormatter.formatToParts(date)) {
    if (part.type !== "literal") map[part.type] = part.value;
  }
  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    // Intl devolve 24 para meia-noite em alguns runtimes.
    hour: Number(map.hour) % 24,
    minute: Number(map.minute),
  };
}

/** Data local no formato YYYY-MM-DD. */
export function toDateKey(date: Date) {
  const { year, month, day } = parts(date);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Dia da semana local: 0 = domingo … 6 = sábado. */
export function weekdayOf(date: Date) {
  return new Date(`${toDateKey(date)}T12:00:00Z`).getUTCDay();
}

/** Offset do fuso, em minutos, para o instante dado (trata horário de verão). */
function offsetMinutes(date: Date) {
  const local = parts(date);
  const asUTC = Date.UTC(
    local.year,
    local.month - 1,
    local.day,
    local.hour,
    local.minute
  );
  return (asUTC - Math.floor(date.getTime() / 60000) * 60000) / 60000;
}

/**
 * Converte "YYYY-MM-DD" + minutos desde a meia-noite (hora local) no
 * instante UTC correspondente.
 */
export function localToUtc(dateKey: string, minutes: number) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const guess = new Date(
    Date.UTC(year, month - 1, day, Math.floor(minutes / 60), minutes % 60)
  );
  // Aplica o offset e reconfere: perto da virada do DST o offset muda.
  const first = new Date(guess.getTime() - offsetMinutes(guess) * 60000);
  const second = new Date(guess.getTime() - offsetMinutes(first) * 60000);
  return second;
}

/** Minutos desde a meia-noite local. */
export function minutesOf(date: Date) {
  const { hour, minute } = parts(date);
  return hour * 60 + minute;
}
