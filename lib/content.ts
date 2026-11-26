import { site } from "@/lib/site";
import type { FaqItem } from "@/components/Faq";

export const modalidades = [
  {
    id: "musculacao",
    n: "01",
    title: "Musculação",
    short: "Força, volume e definição.",
    text: "Treino de força para quem busca ganhar massa, definir o corpo e ganhar condicionamento, com a rotina que combina com o seu objetivo.",
    points: ["Ganho de força e massa muscular", "Definição e condicionamento", "Evolução com constância"],
  },
  {
    id: "fitness",
    n: "02",
    title: "Fitness",
    short: "Movimento todos os dias.",
    text: "Para quem quer se movimentar, gastar energia e manter a rotina de exercícios em dia, com mais disposição no dia a dia.",
    points: ["Mais disposição e fôlego", "Gasto calórico e bem-estar", "Rotina leve e sustentável"],
  },
  {
    id: "treinamentos",
    n: "03",
    title: "Treinamentos",
    short: "Treino com objetivo claro.",
    text: "Organize seus treinos com foco no resultado que você quer. Fale com a equipe pelo WhatsApp e conheça as opções disponíveis.",
    points: ["Foco no seu objetivo", "Rotina organizada", "Converse com a equipe"],
  },
] as const;

export const diferenciais = [
  {
    title: `A partir de ${site.priceFrom}`,
    text: "Planos mensais recorrentes com valor acessível para começar hoje.",
  },
  {
    title: "Gympass disponível",
    text: "Tem Gympass? Você pode treinar na Center Fitness. Confirme seu plano pelo WhatsApp.",
  },
  {
    title: "Manhã cedo e noite",
    text: "De segunda a sexta, das 5h30 às 12h e das 14h às 22h. Encaixa no seu dia.",
  },
  {
    title: "Fácil de chegar",
    text: "Na Av. João Marangoni, 2513, em Sarandi-PR. Venha conhecer o espaço.",
  },
] as const;

export const faqItems: FaqItem[] = [
  {
    q: "Quais são os horários de funcionamento?",
    a: "De segunda a sexta, das 5h30 às 12h e das 14h às 22h. Aos sábados e feriados, das 9h às 12h. Para domingo, consulte pelo WhatsApp.",
  },
  {
    q: "Quanto custa a mensalidade?",
    a: `Os planos mensais começam a partir de ${site.priceFrom} (recorrente). Para conhecer as condições e opções disponíveis, fale com a equipe pelo WhatsApp.`,
  },
  {
    q: "Vocês aceitam Gympass?",
    a: "Sim, a Center Fitness está com Gympass disponível. Confirme as condições do seu plano pelo WhatsApp antes da primeira visita.",
  },
  {
    q: "Onde fica a Center Fitness?",
    a: `Na ${site.address.street}, em ${site.address.city}-${site.address.state}. Use o botão "Como chegar" na página de contato para abrir a rota no Google Maps.`,
  },
  {
    q: "Como faço para começar a treinar?",
    a: "Chame a equipe pelo WhatsApp ou visite a academia nos horários de funcionamento. É só escolher o plano e começar.",
  },
];
