import { site } from "@/lib/site";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.phone.wa}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const messages = {
  generic: "Olá! Vim pelo site da Center Fitness e gostaria de mais informações.",
  plans: "Olá! Vim pelo site da Center Fitness e quero conhecer os planos.",
  gympass: "Olá! Vim pelo site da Center Fitness e quero treinar com o Gympass.",
  visit: "Olá! Vim pelo site da Center Fitness e quero fazer uma visita.",
} as const;
