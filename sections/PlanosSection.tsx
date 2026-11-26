import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { whatsappLink, messages } from "@/lib/whatsapp";

export function PlanosSection() {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {/* Plano mensal */}
      <Reveal className="lg:col-span-3">
        <article className="relative h-full overflow-hidden rounded-[6px] bg-brand-red p-8 sm:p-12">
          <div aria-hidden="true" className="stripes absolute right-0 top-0 h-3 w-full opacity-90" />
          <p className="inline-block rounded-[3px] bg-black px-3 py-1 font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
            Plano mensal · recorrente
          </p>
          <h3 className="mt-6 text-6xl sm:text-7xl">Plano Mensal</h3>
          <p className="mt-6 flex items-end gap-2">
            <span className="pb-3 font-display text-xl font-bold uppercase tracking-wide">a partir de</span>
            <span className="font-display text-7xl font-extrabold leading-none sm:text-8xl">
              {site.priceFrom}
            </span>
            <span className="pb-3 font-display text-xl font-bold uppercase">/mês</span>
          </p>
          <ul className="mt-8 space-y-3 text-lg">
            {[
              "Acesso à academia nos horários de funcionamento",
              "Musculação, fitness e treinamentos",
              "Pagamento mensal recorrente",
              "Confirme valores e condições pelo WhatsApp",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" strokeWidth={3} />
                {t}
              </li>
            ))}
          </ul>
          <Button href={whatsappLink(messages.plans)} external variant="primary" className="mt-10 w-full sm:w-auto">
            <WhatsAppIcon className="h-5 w-5" />
            Quero este plano
          </Button>
        </article>
      </Reveal>

      {/* Gympass */}
      <Reveal delay={0.1} className="lg:col-span-2">
        <article className="flex h-full flex-col rounded-[6px] border border-line bg-surface p-8 sm:p-10">
          <p className="inline-block self-start rounded-[3px] border border-brand-yellow/50 px-3 py-1 font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
            Benefício
          </p>
          <h3 className="mt-6 text-6xl">Gympass</h3>
          <p className="mt-5 text-muted">
            A Center Fitness está com Gympass disponível. Se você já tem o benefício, é só falar
            com a equipe e confirmar como funciona o seu plano.
          </p>
          <ul className="mt-6 space-y-3">
            {["Disponível na Center Fitness", "Confirmação rápida pelo WhatsApp"].map((t) => (
              <li key={t} className="flex gap-3">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" strokeWidth={3} />
                {t}
              </li>
            ))}
          </ul>
          <Button href={whatsappLink(messages.gympass)} external variant="ghost" className="mt-auto w-full sm:w-auto">
            Treinar com Gympass
          </Button>
        </article>
      </Reveal>
    </div>
  );
}
