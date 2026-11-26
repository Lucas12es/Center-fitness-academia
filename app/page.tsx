import type { Metadata } from "next";
import { Hero } from "@/sections/Hero";
import { Marquee } from "@/components/Marquee";
import { ModalidadesSection } from "@/sections/ModalidadesSection";
import { Diferenciais } from "@/sections/Diferenciais";
import { PlanosSection } from "@/sections/PlanosSection";
import { InstagramCta } from "@/sections/InstagramCta";
import { FaqSection } from "@/sections/FaqSection";
import { CtaFinal } from "@/sections/CtaFinal";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Academia em Sarandi-PR | Musculação, Fitness e Gympass",
  description:
    "Center Fitness Academia em Sarandi-PR: musculação, fitness e treinamentos. Planos mensais a partir de R$ 89,90 e Gympass disponível. Av. João Marangoni, 2513.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ModalidadesSection />
      <Diferenciais />
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="Planos"
              title={
                <>
                  Comece por <span className="text-brand-yellow">R$ 89,90</span>
                </>
              }
              lead="Plano mensal recorrente e Gympass disponível."
            />
          </Reveal>
          <div className="mt-14">
            <PlanosSection />
          </div>
          <div className="mt-10">
            <Button href="/planos/" variant="ghost">
              Ver detalhes dos planos
            </Button>
          </div>
        </div>
      </section>
      <InstagramCta />
      <FaqSection />
      <CtaFinal />
    </>
  );
}
