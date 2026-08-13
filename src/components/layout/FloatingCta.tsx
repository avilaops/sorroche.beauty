"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { siteConfig } from "@/data/site";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={siteConfig.app}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-5 bottom-5 z-40 bg-ink py-4 text-center text-[0.75rem] tracking-[0.14em] text-canvas uppercase md:hidden"
        >
          Agendar horário
        </motion.a>
      )}
    </AnimatePresence>
  );
}
