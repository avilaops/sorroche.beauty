/**
 * Definição dos campos do Beauty Profile. Formulário e visualização leem
 * daqui, então não há como as duas telas divergirem.
 *
 * São preferências para o atendimento — não diagnóstico clínico.
 */
export type ProfileField = {
  name: string;
  label: string;
  /** Sem options = campo de texto livre. */
  options?: string[];
  hint?: string;
  long?: boolean;
};

export const PROFILE_FIELDS: ProfileField[] = [
  {
    name: "skinType",
    label: "Tipo de pele",
    options: ["Seca", "Normal", "Mista", "Oleosa"],
    hint: "Define o preparo de pele e o que segura a maquiagem no seu rosto.",
  },
  {
    name: "skinTone",
    label: "Tonalidade",
    options: ["Muito clara", "Clara", "Média", "Morena", "Negra"],
  },
  {
    name: "undertone",
    label: "Subtom",
    options: ["Quente", "Frio", "Neutro", "Não sei"],
    hint: "Na dúvida, deixe em “Não sei” — a Viviane identifica no atendimento.",
  },
  {
    name: "sensitivity",
    label: "Sensibilidade",
    options: ["Nenhuma", "Pouca", "Média", "Alta"],
  },
  {
    name: "coverage",
    label: "Cobertura preferida",
    options: ["Leve", "Média", "Alta"],
  },
  {
    name: "finish",
    label: "Acabamento preferido",
    options: ["Natural", "Matte", "Luminoso"],
  },
  {
    name: "allergies",
    label: "Alergias",
    long: true,
    hint: "Produtos, componentes ou reações que já teve. Isso é importante.",
  },
  {
    name: "preferences",
    label: "O que você gosta",
    long: true,
    hint: "Estilos, cores, referências — o que costuma funcionar em você.",
  },
  {
    name: "dislikes",
    label: "O que você não gosta",
    long: true,
    hint: "Tão útil quanto o que você gosta.",
  },
];

/** Nomes válidos, para validar o que chega do formulário. */
export const PROFILE_FIELD_NAMES = PROFILE_FIELDS.map((field) => field.name);
