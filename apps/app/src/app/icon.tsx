import { ImageResponse } from "next/og";

export const contentType = "image/png";

export function generateImageMetadata() {
  return [
    { id: "192", size: { width: 192, height: 192 }, contentType },
    { id: "512", size: { width: 512, height: 512 }, contentType },
  ];
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const resolved = Number(await id);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0c0b",
          color: "#faf8f5",
          fontSize: resolved * 0.46,
          fontFamily: "serif",
          letterSpacing: -resolved * 0.02,
        }}
      >
        VS
      </div>
    ),
    { width: resolved, height: resolved }
  );
}
