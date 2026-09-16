export const siteConfig = {
  name: "Viviane Sorroche",
  role: "Makeup Artist",
  domain: "https://sorroche.beauty",
  instagram: {
    handle: "@vivianesorroche.makeup",
    url: "https://www.instagram.com/vivianesorroche.makeup/",
  },
  phone: "+55 17 99215-2917",
  phoneRaw: "+5517992152917",
  whatsappMessage:
    "Olá, Vivi! Vim pelo seu site e gostaria de consultar um horário para maquiagem.",
  address: {
    street: "Rua Luiz Antônio da Silveira, 1512",
    district: "Vila Nossa Senhora da Paz",
    city: "São José do Rio Preto",
    state: "SP",
    zip: "15025-020",
    country: "BR",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw.replace(
  /\D/g,
  ""
)}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city} - ${siteConfig.address.state}, ${siteConfig.address.zip}`
)}`;

// Absolutos para funcionarem também a partir das páginas internas.
export const navLinks = [
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Noivas", href: "/noivas" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Curso", href: "/curso-automaquiagem" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/#contato" },
] as const;

/** Páginas de serviço com URL própria. */
export const servicePages = [
  {
    slug: "noivas",
    label: "Noivas",
    title: "Maquiagem de Noiva em São José do Rio Preto",
    description:
      "Maquiagem para noivas em São José do Rio Preto: teste, acabamento fotográfico, longa duração e atendimento com horário reservado.",
  },
  {
    slug: "maquiagem-social",
    label: "Maquiagem Social",
    title: "Maquiagem Social em São José do Rio Preto",
    description:
      "Maquiagem para formatura, festa, debutante e aniversário em São José do Rio Preto, com acabamento natural e longa duração.",
  },
  {
    slug: "maquiagem-blindada",
    label: "Maquiagem Blindada",
    title: "Maquiagem Blindada em São José do Rio Preto",
    description:
      "Maquiagem blindada de longa duração em São José do Rio Preto: acabamento que resiste ao calor, à emoção e às horas de festa.",
  },
  {
    slug: "curso-automaquiagem",
    label: "Curso de Automaquiagem",
    title: "Curso de Automaquiagem em São José do Rio Preto",
    description:
      "Aula de automaquiagem em São José do Rio Preto para entender seu rosto, seus produtos e repetir o resultado sozinha.",
  },
] as const;
