import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { HorariosSection } from "@/sections/HorariosSection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { whatsappLink, messages } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Contato e Localização | Academia em Sarandi-PR",
  description:
    "Fale com a Center Fitness pelo WhatsApp (44) 99106-3220 ou visite a academia na Av. João Marangoni, 2513, Sarandi-PR. Veja horários e como chegar.",
  path: "/contato/",
});

export default function ContatoPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Início", path: "/" }, { name: "Contato", path: "/contato/" }])} />
      <PageHero
        crumb="Contato"
        watermark="Fale"
        eyebrow="Contato"
        title={<>Vamos <span className="text-brand-yellow">conversar?</span></>}
        lead="Chame no WhatsApp, preencha o formulário ou venha nos visitar."
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-[6px] border border-line bg-surface p-8 sm:p-10">
              <h2 className="text-4xl">Fale com a equipe</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" />
                  <a href={`tel:${site.phone.e164}`} className="hover:text-brand-yellow">
                    {site.phone.display}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" />
                  <address className="not-italic">
                    {site.address.street}
                    <br />
                    {site.address.city}-{site.address.state}
                  </address>
                </li>
                <li className="flex gap-3">
                  <InstagramIcon className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" />
                  <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">
                    {site.instagram.handle}
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappLink(messages.generic)} external>
                  <WhatsAppIcon className="h-5 w-5" />
                  Chamar no WhatsApp
                </Button>
                <Button href={site.mapsUrl} external variant="ghost">
                  <MapPin aria-hidden="true" className="h-5 w-5" />
                  Como chegar
                </Button>
              </div>
            </div>
            <HorariosSection />
          </div>

          <div className="rounded-[6px] border border-line bg-surface p-8 sm:p-10">
            <h2 className="text-4xl">Envie uma mensagem</h2>
            <p className="mb-8 mt-3 text-muted">
              Preencha os campos e abriremos o WhatsApp com tudo pronto para você enviar.
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="container-x mt-12">
          <div className="overflow-hidden rounded-[6px] border border-line">
            <iframe
              title="Mapa: Center Fitness Academia, Av. João Marangoni, 2513, Sarandi-PR"
              src={site.mapsEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block grayscale invert-[0.92] contrast-[0.9]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
