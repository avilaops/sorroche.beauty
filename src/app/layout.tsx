import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
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

const title = `${siteConfig.name} — Maquiadora em ${siteConfig.address.city}/${siteConfig.address.state}`;
const description =
  "Maquiagem personalizada para noivas, formaturas e ocasiões especiais em São José do Rio Preto. Maquiagem social, blindada e curso de automaquiagem.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: siteConfig.name,
  description,
  url: siteConfig.domain,
  image: `${siteConfig.domain}/og-image.jpg`,
  telephone: siteConfig.phoneRaw,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  },
  sameAs: [siteConfig.instagram.url],
  areaServed: {
    "@type": "City",
    name: siteConfig.address.city,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${editorial.variable} ${interface_.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
