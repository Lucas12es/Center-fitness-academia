import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { Gallery } from "@/sections/Gallery";
import { CtaFinal } from "@/sections/CtaFinal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Sobre a Center Fitness Academia em Sarandi-PR",
  description:
    "Conheça a Center Fitness Academia, em Sarandi-PR: musculação, fitness e treinamentos com planos acessíveis e horários que cabem na sua rotina.",
  path: "/sobre/",
});

const valores = [
  { t: "Constância", d: "Resultado vem de treinar com regularidade. Horários amplos ajudam você a manter a rotina." },
  { t: "Acessibilidade", d: `Planos mensais a partir de ${site.priceFrom} e Gympass disponível.` },
  { t: "Foco no treino", d: "Um espaço pensado para quem quer treinar: musculação, fitness e treinamentos." },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Início", path: "/" }, { name: "Sobre", path: "/sobre/" }])} />
      <PageHero
        crumb="Sobre"
        watermark="Sobre"
        eyebrow="Quem somos"
        title={<>Uma academia feita para o seu <span className="text-brand-yellow">ritmo</span></>}
        lead="A Center Fitness Academia fica em Sarandi-PR e reúne musculação, fitness e treinamentos em um só lugar."
      />

      <section className="section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-lg text-muted">
              <p>
                A <strong className="text-ink">Center Fitness Academia</strong> está na{" "}
                {site.address.street}, em {site.address.city}-{site.address.state}. Nosso propósito
                é simples: oferecer um lugar para você treinar com regularidade, com planos
                acessíveis e horários que cabem na rotina.
              </p>
              <p>
                De segunda a sexta, abrimos cedo e fechamos à noite. Aos sábados e feriados, o
                treino também continua. E, se você tem Gympass, ele está disponível aqui.
              </p>
              <p>Venha conhecer o espaço ou chame a equipe pelo WhatsApp.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div aria-hidden="true" className="stripes absolute -right-4 -top-4 h-28 w-28" />
              <div className="relative flex h-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black">
                <Image
                  src="/images/logo.webp"
                  alt="Logotipo da Center Fitness Academia"
                  width={320}
                  height={320}
                  className="h-4/5 w-4/5 rounded-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-24">
        <div className="container-x">
          <ul className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-3">
            {valores.map((v, i) => (
              <li key={v.t} className="bg-bg p-8 sm:p-10">
                <Reveal delay={i * 0.08}>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
                    0{i + 1}
                  </p>
                  <h2 className="mt-3 text-4xl sm:text-5xl">{v.t}</h2>
                  <p className="mt-4 text-muted">{v.d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Gallery />
      <CtaFinal />
    </>
  );
}
