import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { modalidades } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

type Props = { withHeading?: boolean };

export function ModalidadesSection({ withHeading = true }: Props) {
  const CardTitle = withHeading ? "h3" : "h2";
  return (
    <section className="section-y">
      <div className="container-x">
        {withHeading && (
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Modalidades"
              title={
                <>
                  Escolha o seu <span className="text-brand-yellow">treino</span>
                </>
              }
              lead="Musculação, fitness e treinamentos em um só lugar."
            />
          </Reveal>
        )}
        <ul className={`grid gap-5 lg:grid-cols-3 ${withHeading ? "mt-14" : ""}`}>
          {modalidades.map((m, i) => (
            <li key={m.id}>
              <Reveal delay={i * 0.08} className="h-full">
                <article
                  id={m.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[6px] border border-line bg-surface p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-yellow/60"
                >
                  <span
                    aria-hidden="true"
                    className="text-outline absolute -right-2 -top-6 font-display text-[9rem] font-extrabold leading-none transition-colors duration-500 group-hover:[-webkit-text-stroke-color:rgba(255,196,0,0.6)]"
                  >
                    {m.n}
                  </span>
                  <CardTitle className="relative mt-20 text-5xl">{m.title}</CardTitle>
                  <p className="relative mt-2 font-display text-xl font-semibold uppercase tracking-wide text-brand-yellow">
                    {m.short}
                  </p>
                  <p className="relative mt-5 text-muted">{m.text}</p>
                  <ul className="relative mt-6 space-y-2 border-t border-line pt-6 text-sm">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-3">
                        <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-brand-red" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Olá! Vim pelo site da Center Fitness e quero saber mais sobre ${m.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-8 inline-flex min-h-11 items-center gap-2 self-start font-display text-lg font-bold uppercase tracking-wide text-brand-yellow"
                  >
                    Quero saber mais
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    <span className="sr-only"> sobre {m.title} (abre o WhatsApp)</span>
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
