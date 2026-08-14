import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — Makeup Artist em ${siteConfig.address.city}/${siteConfig.address.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photo, serif] = await Promise.all([
    readFile(path.join(process.cwd(), "public/portfolio/viviane.jpg")),
    // Instrument Serif via next/font não é acessível aqui; a fonte é
    // carregada do pacote para manter a identidade editorial.
    readFile(
      path.join(
        process.cwd(),
        "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff"
      )
    ).catch(() => null),
  ]);

  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#faf8f5",
          color: "#0d0c0b",
        }}
      >
        <div
          style={{
            width: "52%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 68px",
          }}
        >
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#8a827a",
            }}
          >
            Makeup Artist
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              lineHeight: 1.04,
              marginTop: 28,
              fontFamily: serif ? "Editorial" : undefined,
            }}
          >
            <span>Viviane</span>
            <span>Sorroche</span>
          </div>
          <div
            style={{
              fontSize: 26,
              marginTop: 34,
              color: "#3d3a37",
            }}
          >
            {`${siteConfig.address.city} · ${siteConfig.address.state}`}
          </div>
        </div>

        <div style={{ width: "48%", display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={576}
            height={630}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: serif
        ? [{ name: "Editorial", data: serif, style: "normal", weight: 400 }]
        : [],
    }
  );
}
