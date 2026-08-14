const TZ = "America/Sao_Paulo";

const weekdayDate = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  timeZone: TZ,
});

const hour = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: TZ,
});

/**
 * Converte o telefone cadastrado para o formato do wa.me: só dígitos, com
 * o código do país. Números brasileiros costumam ser salvos sem o 55.
 */
export function toWhatsappNumber(phone: string | null | undefined) {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) return null;
  return digits.startsWith("55") ? digits : `55${digits}`;
}

/** Link com a confirmação já escrita — a Viviane só revisa e envia. */
export function confirmationLink({
  phone,
  clientName,
  serviceName,
  startsAt,
}: {
  phone: string | null | undefined;
  clientName: string;
  serviceName: string;
  startsAt: Date;
}) {
  const number = toWhatsappNumber(phone);
  if (!number) return null;

  const firstName = clientName.trim().split(/\s+/)[0];
  const text =
    `Oi, ${firstName}! Seu horário com a Vivi está confirmado: ` +
    `${serviceName}, ${weekdayDate.format(startsAt)}, às ${hour.format(startsAt)}. ` +
    `Qualquer coisa é só me chamar por aqui. Até lá!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
