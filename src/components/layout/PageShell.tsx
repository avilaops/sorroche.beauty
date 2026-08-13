import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { siteConfig } from "@/data/site";

type Crumb = { label: string; href: string };

/**
 * Estrutura das páginas internas: cabeçalho editorial, trilha de navegação
 * e os dados estruturados de breadcrumb que o Google usa no resultado.
 */
export function PageShell({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children: React.ReactNode;
}) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { label: "Início", href: "/" },
      ...crumbs,
    ].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${siteConfig.domain}${crumb.href}`,
    })),
  };

  return (
    <>
      <Navbar solid />
      <main className="pt-32 md:pt-40">
        <header className="mx-auto max-w-[1400px] px-6 md:px-10">
          <nav aria-label="Trilha de navegação" className="eyebrow">
            <a href="/" className="transition-colors hover:text-ink">
              Início
            </a>
            {crumbs.map((crumb, index) => (
              <span key={crumb.href}>
                <span className="px-2">·</span>
                {index === crumbs.length - 1 ? (
                  <span aria-current="page">{crumb.label}</span>
                ) : (
                  <a href={crumb.href} className="transition-colors hover:text-ink">
                    {crumb.label}
                  </a>
                )}
              </span>
            ))}
          </nav>

          <p className="eyebrow mt-12">{eyebrow}</p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.5rem,6.5vw,5rem)]">
            {title}
          </h1>
          {lead && (
            <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-graphite">
              {lead}
            </p>
          )}
        </header>

        {children}
      </main>
      <Footer />
      <FloatingCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
