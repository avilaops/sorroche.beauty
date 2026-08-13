import type { StaticImageData } from "next/image";
import blindada from "@/../public/portfolio/maquiagem-blindada.png";
import clean from "@/../public/portfolio/maquiagem-clean.png";
import rose from "@/../public/portfolio/maquiagem-rose.png";

export type Work = {
  id: string;
  style: string;
  category: string;
  alt: string;
  image: StaticImageData;
};

export const works: Work[] = [
  {
    id: "rose",
    style: "Rosé",
    category: "Maquiagem Social",
    alt: "Maquiagem social em tons rosé, com esfumado quente e pele de acabamento natural luminoso.",
    image: rose,
  },
  {
    id: "blindada",
    style: "Blindada",
    category: "Longa Duração",
    alt: "Maquiagem blindada com lábios vermelhos e olhar esfumado, acabamento de alta duração.",
    image: blindada,
  },
  {
    id: "clean",
    style: "Clean",
    category: "Beauty",
    alt: "Maquiagem clean com pele natural, sobrancelhas definidas e lábios em tom nude rosado.",
    image: clean,
  },
];

export type LookChapter = {
  label: string;
  title: string;
  description: string;
  image: StaticImageData;
};

/** THE LOOK — the signature scroll section. */
export const lookChapters: LookChapter[] = [
  {
    label: "Clean",
    title: "Pele que continua pele.",
    description:
      "Acabamento natural, textura preservada, o mínimo necessário para que a luz faça o resto.",
    image: clean,
  },
  {
    label: "Rosé",
    title: "Calor nos olhos.",
    description:
      "Esfumado quente em tons rosé, olhar suave e um brilho que acompanha o movimento.",
    image: rose,
  },
  {
    label: "Bold",
    title: "Um gesto decisivo.",
    description:
      "Lábio marcante, contorno preciso e a segurança de uma maquiagem que atravessa a noite.",
    image: blindada,
  },
];
