/**
 * Fonte única de dados do negócio (NAP, horários, links).
 * Todas as informações aqui foram fornecidas pelo cliente (Instagram/Google Maps).
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://centerfitness.example.com"
).replace(/\/$/, "");

export const site = {
  name: "Center Fitness Academia",
  shortName: "Center Fitness",
  tagline: "Musculação, fitness e treinamentos em Sarandi-PR",
  description:
    "Center Fitness Academia em Sarandi-PR: musculação, fitness e treinamentos. Planos mensais a partir de R$ 89,90 e Gympass disponível. Av. João Marangoni, 2513.",
  priceFrom: "R$ 89,90",
  address: {
    street: "Av. João Marangoni, 2513",
    neighborhood: "Sarandi",
    city: "Sarandi",
    state: "PR",
    country: "BR",
    full: "Av. João Marangoni, 2513 — Sarandi-PR",
  },
  phone: {
    display: "(44) 99106-3220",
    e164: "+5544991063220",
    wa: "5544991063220",
  },
  instagram: {
    handle: "@centerfitness.gym",
    url: "https://www.instagram.com/centerfitness.gym/",
  },
  mapsUrl:
    "https://www.google.com/maps?cid=583664264147718898&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYBCAF",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Jo%C3%A3o+Marangoni%2C+2513%2C+Sarandi+-+PR&output=embed",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "",
  cnpj: process.env.NEXT_PUBLIC_LEGAL_CNPJ || "",
  /**
   * Fotos da galeria. Adicione arquivos em /public/galeria e liste aqui.
   * Enquanto estiver vazio, a seção de galeria não é exibida.
   */
  gallery: [] as { src: string; alt: string }[],
} as const;

export const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/modalidades/", label: "Modalidades" },
  { href: "/planos/", label: "Planos" },
  { href: "/contato/", label: "Contato" },
] as const;

export const legalNav = [
  { href: "/politica-de-privacidade/", label: "Política de Privacidade" },
  { href: "/termos-de-uso/", label: "Termos de Uso" },
] as const;

/** Horário de funcionamento (divulgado pela academia). */
export const hours = {
  weekday: [
    ["05:30", "12:00"],
    ["14:00", "22:00"],
  ],
  saturdayAndHolidays: [["09:00", "12:00"]],
} as const;
