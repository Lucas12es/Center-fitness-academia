import { Banknote, Ticket, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { diferenciais } from "@/lib/content";

const icons = [Banknote, Ticket, Clock, MapPin];

export function Diferenciais() {
  return (
    <section className="section-y border-y border-line bg-surface">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Por que a Center Fitness"
            title={
              <>
                Menos desculpa, <span className="text-brand-yellow">mais treino</span>
              </>
            }
          />
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d, i) => {
            const Icon = icons[i];
            return (
              <li key={d.title} className="bg-bg">
                <Reveal delay={i * 0.07} className="h-full">
                  <div className="h-full p-8 transition-colors duration-300 hover:bg-surface-2">
                    <Icon aria-hidden="true" className="h-9 w-9 text-brand-yellow" strokeWidth={1.6} />
                    <h3 className="mt-6 text-3xl">{d.title}</h3>
                    <p className="mt-3 text-muted">{d.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
