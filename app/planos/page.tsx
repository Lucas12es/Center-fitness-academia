import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { PlanosSection } from "@/sections/PlanosSection";
import { FaqSection } from "@/sections/FaqSection";
import { CtaFinal } from "@/sections/CtaFinal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Planos de Academia em Sarandi-PR a partir de R$ 89,90",
  description:
    "Planos mensais da Center Fitness a partir de R$ 89,90 (recorrente) e Gympass disponível. Fale no WhatsApp e escolha o melhor para você.",
  path: "/planos/",
});

const steps = [
  { t: "Chame no WhatsApp", d: "Tire dúvidas sobre valores, condições e horários." },
  { t: "Visite a academia", d: `Passe na ${site.address.street}, em ${site.address.city}-${site.address.state}, nos horários de funcionamento.` },
  { t: "Comece a treinar", d: "Escolha seu plano e entre na rotina de treino." },
];

export default function PlanosPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Início", path: "/" }, { name: "Planos", path: "/planos/" }])} />
      <PageHero
        crumb="Planos"
        watermark="Planos"
        eyebrow="Planos e valores"
        title={<>Planos a partir de <span className="text-brand-yellow">{site.priceFrom}</span></>}
        lead="Plano mensal recorrente e Gympass disponível. Fale com a equipe para confirmar valores e condições."
      />

      <section className="section-y">
        <div className="container-x">
          <h2 className="sr-only">Nossos planos</h2>
          <PlanosSection />
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-24">
        <div className="container-x">
          <h2 className="text-5xl sm:text-6xl">Como <span className="text-brand-yellow">começar</span></h2>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.t}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-[6px] border border-line bg-bg p-8">
                    <span aria-hidden="true" className="font-display text-7xl font-extrabold leading-none text-brand-yellow">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 text-3xl">{s.t}</h3>
                    <p className="mt-3 text-muted">{s.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection />
      <CtaFinal />
    </>
  );
}
