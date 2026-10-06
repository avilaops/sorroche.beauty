import { renderMark } from "@/lib/mark";

// `output: "export"` exige que a rota seja resolvida no build.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return renderMark(180);
}
