import { cities } from "@/data/cities";
import { servicePages, siteConfig, whatsappUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-deep">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-12">
            <p className="display text-[clamp(2rem,4vw,3rem)]">
              {siteConfig.name}
            </p>
            <p className="eyebrow mt-4">{siteConfig.role}</p>
          </div>

          <nav className="md:col-span-6 lg:col-span-3">
            <span className="eyebrow">Serviços</span>
            <ul className="mt-4 space-y-3">
              {servicePages.map((page) => (
                <li key={page.slug}>
                  <a
                    href={`/${page.slug}`}
                    className="text-sm text-graphite transition-colors hover:text-ink"
                  >
                    {page.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/maquiagem-a-domicilio"
                  className="text-sm text-graphite transition-colors hover:text-ink"
                >
                  Atendimento a domicílio
                </a>
              </li>
            </ul>
          </nav>

          <nav className="md:col-span-6 lg:col-span-3">
            <span className="eyebrow">Cidades</span>
            <ul className="mt-4 space-y-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/atendimento/${city.slug}`}
                    className="text-sm text-graphite transition-colors hover:text-ink"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-6 lg:col-span-3">
            <span className="eyebrow">Navegar</span>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Portfólio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Sobre", href: "/sobre" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-graphite transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-6 lg:col-span-3">
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-graphite transition-colors hover:text-ink"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-graphite transition-colors hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <p className="mt-8 text-sm text-muted">
              {siteConfig.address.city} · {siteConfig.address.state}
            </p>
          </div>
        </div>

        <p className="mt-20 border-t border-line pt-8 text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
