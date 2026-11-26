import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { faqItems } from "@/lib/content";

export function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="section-y">
      <JsonLd data={jsonLd} />
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading
              eyebrow="Dúvidas frequentes"
              title={<>Antes de <span className="text-brand-yellow">começar</span></>}
              lead="Respostas rápidas sobre horários, planos e Gympass."
            />
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <Faq items={faqItems} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
