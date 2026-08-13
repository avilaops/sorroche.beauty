import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const editorial = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const interface_ = Inter({
  variable: "--font-interface",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://app.sorroche.beauty"),
  title: {
    default: "Viviane Sorroche",
    template: "%s — Viviane Sorroche",
  },
  description: "Sua área exclusiva com a Viviane Sorroche.",
  // Área privada: fora do índice, mas a prévia de compartilhamento
  // continua valendo quando a cliente recebe o link.
  robots: { index: false, follow: false },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${editorial.variable} ${interface_.variable}`}>
      <body>{children}</body>
    </html>
  );
}
