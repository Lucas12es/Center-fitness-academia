import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { whatsappLink, messages } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-red py-20 sm:py-28">
      <div aria-hidden="true" className="stripes absolute inset-x-0 top-0 h-3" />
      <div aria-hidden="true" className="stripes absolute inset-x-0 bottom-0 h-3" />
      <div className="container-x text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-6xl sm:text-8xl">Seu primeiro treino começa com uma mensagem.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            Planos a partir de {site.priceFrom}. Chame no WhatsApp ou venha nos visitar na{" "}
            {site.address.street}.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={whatsappLink(messages.visit)} external variant="primary">
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </Button>
            <Button href="/contato/" variant="ghost" className="border-white/60 text-white hover:border-white hover:text-white">
              Como chegar
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
