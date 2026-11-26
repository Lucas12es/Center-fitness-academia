import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { OpenStatus } from "@/components/OpenStatus";
import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { whatsappLink, messages } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44">
      {/* camadas decorativas */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] bg-brand-red lg:block"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -bottom-6 left-0 -z-10 select-none whitespace-nowrap font-display text-[9rem] font-extrabold uppercase leading-none sm:text-[16rem]"
      >
        Center
      </span>

      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-6 flex animate-rise items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] text-brand-yellow">
            <span aria-hidden="true" className="h-px w-8 bg-brand-yellow" />
            Center Fitness Academia · Sarandi-PR
          </p>
          <h1
            className="animate-rise text-[3.6rem] leading-[0.88] sm:text-[6rem] lg:text-[7.5rem]"
            style={{ animationDelay: "80ms" }}
          >
            Academia em Sarandi para quem leva o{" "}
            <span className="text-brand-yellow">treino a sério.</span>
          </h1>
          <p
            className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            Musculação, fitness e treinamentos na {site.address.street}. Planos
            mensais a partir de{" "}
            <strong className="text-ink">{site.priceFrom}</strong> e Gympass
            disponível.
          </p>

          <div
            className="mt-10 flex animate-rise flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button href={whatsappLink(messages.plans)} external>
              <WhatsAppIcon className="h-5 w-5" />
              Quero treinar
            </Button>
            <Button href="/planos/" variant="ghost">
              Ver planos
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>

          <div
            className="mt-8 flex animate-rise flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
            style={{ animationDelay: "320ms" }}
          >
            <OpenStatus />
            <span>Seg–Sex 5h30–22h · Sáb 9h–12h</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-rise lg:col-span-5 lg:max-w-none" style={{ animationDelay: "200ms" }}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[6px] border border-white/10 bg-surface shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
            <Image
              src="/images/hero.webp"
              alt="Atleta fazendo rosca com halter na Center Fitness Academia"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-top grayscale contrast-110"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
                  Planos mensais
                </p>
                <p className="font-display text-5xl font-extrabold leading-none">
                  <span className="text-lg font-bold text-white/70">a partir de </span>
                  {site.priceFrom}
                </p>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="stripes absolute -bottom-4 -left-4 -z-10 h-24 w-24 sm:h-32 sm:w-32"
          />
        </div>
      </div>
    </section>
  );
}
