import { renderMark } from "@/lib/mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Gerado uma vez no build: o site é exportado como arquivos estáticos.
export const dynamic = "force-static";

export default async function AppleIcon() {
  return renderMark(180);
}
