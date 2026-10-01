import { renderMark } from "@/lib/mark";

export const contentType = "image/png";

export function generateImageMetadata() {
  return [
    { id: "32", size: { width: 32, height: 32 }, contentType },
    { id: "192", size: { width: 192, height: 192 }, contentType },
    { id: "512", size: { width: 512, height: 512 }, contentType },
  ];
}

// Gerado uma vez no build: o site é exportado como arquivos estáticos.
export const dynamic = "force-static";

export default async function Icon({ id }: { id: Promise<string> }) {
  return renderMark(Number(await id));
}
