import { renderFaviconIco } from "@/lib/mark";

// Sem entrada variável: o ICO sai pronto no build, como os PNGs de /icon.
export const dynamic = "force-static";

export async function GET() {
  const ico = await renderFaviconIco();

  return new Response(new Uint8Array(ico), {
    headers: { "Content-Type": "image/x-icon" },
  });
}
