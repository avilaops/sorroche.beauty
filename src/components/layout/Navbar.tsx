"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, siteConfig, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * `solid` para páginas sem hero fotográfico: o cabeçalho já nasce com fundo,
 * porque não há imagem embaixo para justificar a transparência.
 */
export function Navbar({ solid = false }: { solid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isSolid = solid || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isSolid
            ? "bg-canvas/80 py-4 backdrop-blur-md"
            : "bg-transparent py-7"
        )}
        style={{ transitionTimingFunction: "var(--ease-editorial)" }}
      >
        <nav
          className={cn(
            "flex items-center justify-between px-6 md:px-10",
            // Before scroll the nav shares the viewport with the hero photo,
            // so it stays inside the left text column to keep contrast.
            isSolid ? "mx-auto max-w-[1400px]" : "md:w-[45%]",
            // Below md the photo sits behind the header and is dark, so the
            // wordmark and the menu button invert to stay readable.
            !isSolid && "text-canvas md:text-ink"
          )}
        >
          <a
            href="/"
            className="font-serif text-lg tracking-tight md:text-xl"
            aria-label={`${siteConfig.name} — início`}
          >
            {siteConfig.name}
          </a>

          <ul
            className={cn(
              "hidden items-center xl:flex",
              isSolid ? "gap-9" : "gap-5 xl:gap-7"
            )}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[0.8rem] tracking-wide text-graphite transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-400 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
            {isSolid && (
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink px-5 py-2.5 text-[0.75rem] tracking-[0.12em] uppercase transition-colors hover:bg-ink hover:text-canvas"
                >
                  Agendar horário
                </a>
              </li>
            )}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-[0.75rem] tracking-[0.18em] uppercase xl:hidden"
            aria-label="Abrir menu"
          >
            Menu
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-canvas px-6 py-7 xl:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg">{siteConfig.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[0.75rem] tracking-[0.18em] uppercase"
                aria-label="Fechar menu"
              >
                Fechar
              </button>
            </div>

            <ul className="mt-auto mb-auto flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display block py-2 text-[2.75rem]"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-ink py-4 text-center text-[0.75rem] tracking-[0.18em] text-canvas uppercase"
            >
              Agendar pelo WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
