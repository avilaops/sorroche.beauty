import type { StaticImageData } from "next/image";
import esfumadoMarrom from "@/../public/portfolio/esfumado-marrom.jpg";
import roseIluminado from "@/../public/portfolio/rose-iluminado.jpg";
import esfumadoPreto from "@/../public/portfolio/esfumado-preto.jpg";
import glow from "@/../public/portfolio/glow.jpg";
import delineado from "@/../public/portfolio/delineado.jpg";
import esfumadoSuave from "@/../public/portfolio/esfumado-suave.jpg";
import dourado from "@/../public/portfolio/dourado.jpg";
import debutante from "@/../public/portfolio/debutante.jpg";
import ondasHollywood from "@/../public/portfolio/ondas-hollywood.jpg";
import radiante from "@/../public/portfolio/radiante.jpg";

export type Work = {
  id: string;
  style: string;
  category: string;
  alt: string;
  image: StaticImageData;
};

/** Fotos reais de atendimentos, ordenadas para alternar tom e clima. */
export const works: Work[] = [
  {
    id: "delineado",
    style: "Delineado",
    category: "Maquiagem Social",
    alt: "Maquiagem social com delineado gatinho preciso, pele rosada luminosa e lábios nude, em cliente ruiva.",
    image: delineado,
  },
  {
    id: "rose",
    style: "Rosé",
    category: "Maquiagem Social",
    alt: "Esfumado rosé com brilho iluminado nas pálpebras, cílios volumosos e lábios em tom vinho suave, em cliente de cabelo cacheado.",
    image: roseIluminado,
  },
  {
    id: "esfumado-preto",
    style: "Esfumado",
    category: "Longa Duração",
    alt: "Esfumado preto com pele acetinada e lábios rosados, rabo de cavalo baixo com ondas.",
    image: esfumadoPreto,
  },
  {
    id: "ondas-hollywood",
    style: "Hollywood",
    category: "Festa",
    alt: "Maquiagem com pálpebra iluminada e lábios nude, cabelo em ondas Hollywood, vestido azul royal.",
    image: ondasHollywood,
  },
  {
    id: "dourado",
    style: "Dourado",
    category: "Festa",
    alt: "Esfumado dourado com glitter, blush rosado e lábios glossy, coque alto com mechas soltas.",
    image: dourado,
  },
  {
    id: "esfumado-marrom",
    style: "Marrom",
    category: "Longa Duração",
    alt: "Esfumado marrom com delineado, pele bronzeada e lábios glossy, em cliente loira de cabelo ondulado.",
    image: esfumadoMarrom,
  },
  {
    id: "radiante",
    style: "Radiante",
    category: "Beauty",
    alt: "Maquiagem leve com pele iluminada, blush pêssego e sorriso aberto, vestido preto de um ombro só.",
    image: radiante,
  },
  {
    id: "esfumado-suave",
    style: "Clássica",
    category: "Noivas",
    alt: "Esfumado marrom suave, pele natural e lábios rosados, cabelo preso com ondas soltas e colar de diamantes.",
    image: esfumadoSuave,
  },
  {
    id: "glow",
    style: "Glow",
    category: "Beauty",
    alt: "Pele bronzeada iluminada, esfumado suave e lábios nude, cabelo preso e colar riviera.",
    image: glow,
  },
  {
    id: "debutante",
    style: "Debutante",
    category: "Festa",
    alt: "Debutante com tiara e vestido rosa de pétalas, maquiagem delicada em festa decorada com flores.",
    image: debutante,
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
    image: delineado,
  },
  {
    label: "Rosé",
    title: "Calor nos olhos.",
    description:
      "Esfumado quente em tons rosé, olhar suave e um brilho que acompanha o movimento.",
    image: roseIluminado,
  },
  {
    label: "Bold",
    title: "Um gesto decisivo.",
    description:
      "Lábio marcante, contorno preciso e a segurança de uma maquiagem que atravessa a noite.",
    image: esfumadoPreto,
  },
];
