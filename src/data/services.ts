import type { StaticImageData } from "next/image";
import blindada from "@/../public/portfolio/maquiagem-blindada.png";
import clean from "@/../public/portfolio/maquiagem-clean.png";
import rose from "@/../public/portfolio/maquiagem-rose.png";

export type Service = {
  index: string;
  title: string;
  description: string;
  image?: StaticImageData;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Maquiagem Social",
    description:
      "Para formaturas, casamentos, aniversários e cada ocasião em que você quer se sentir inteiramente você.",
    image: rose,
  },
  {
    index: "02",
    title: "Noivas",
    description:
      "Uma produção construída ao redor da sua história, da sua fotografia e de cada hora do seu dia.",
  },
  {
    index: "03",
    title: "Maquiagem Blindada",
    description:
      "Acabamento pensado para longa duração, resistente ao calor, à emoção e às horas de festa.",
    image: blindada,
  },
  {
    index: "04",
    title: "Produções Especiais",
    description:
      "Ensaios, editoriais e projetos com direção de beleza sob medida.",
  },
  {
    index: "05",
    title: "Curso de Automaquiagem",
    description:
      "Para entender seu rosto, seus produtos e suas escolhas — e repetir sozinha, todos os dias.",
    image: clean,
  },
];
