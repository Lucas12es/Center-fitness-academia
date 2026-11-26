import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { ModalidadesSection } from "@/sections/ModalidadesSection";
import { Diferenciais } from "@/sections/Diferenciais";
import { CtaFinal } from "@/sections/CtaFinal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Musculação, Fitness e Treinamentos em Sarandi-PR",
  description:
    "Conheça as modalidades da Center Fitness Academia em Sarandi-PR: musculação, fitness e treinamentos. Fale no WhatsApp e comece a treinar.",
  path: "/modalidades/",
});

export default function ModalidadesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Modalidades", path: "/modalidades/" },
        ])}
      />
      <PageHero
        crumb="Modalidades"
        watermark="Treino"
        eyebrow="Modalidades"
        title={
          <>
            Musculação, fitness e <span className="text-brand-yellow">treinamentos</span>
          </>
        }
        lead="Escolha o treino que combina com o seu objetivo. Tem dúvida? A equipe responde pelo WhatsApp."
      />
      <ModalidadesSection withHeading={false} />
      <Diferenciais />
      <CtaFinal />
    </>
  );
}
