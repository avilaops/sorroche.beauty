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

export const navLinks = [
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Noivas", href: "#noivas" },
  { label: "Curso", href: "#curso" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;
