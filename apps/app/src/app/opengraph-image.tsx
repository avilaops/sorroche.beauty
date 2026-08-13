import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Viviane Sorroche — sua área exclusiva";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const font = await readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff"
    )
  ).catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 92px",
          background: "#0d0c0b",
          color: "#faf8f5",
        }}
      >
        <div
          style={{
            fontSize: 19,
            letterSpacing: 7,
            textTransform: "uppercase",
            color: "#8a827a",
          }}
        >
          Viviane Sorroche
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 86,
            lineHeight: 1.05,
            marginTop: 30,
            fontFamily: font ? "Editorial" : undefined,
          }}
        >
          <span>Sua área</span>
          <span>exclusiva.</span>
        </div>

        <div
          style={{
            width: 132,
            height: 3,
            background: "#c8b39a",
            marginTop: 44,
          }}
        />

        <div style={{ fontSize: 25, marginTop: 40, color: "#b3aaa0" }}>
          Agendamentos, Beauty Passport e cada produção.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "Editorial", data: font, style: "normal", weight: 400 }]
        : [],
    }
  );
}
