import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { nav, legalNav, site } from "@/lib/site";
import { whatsappLink, messages } from "@/lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface">
      <div aria-hidden="true" className="stripes h-2 w-full" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Center Fitness — início">
            <Image src="/images/logo.webp" alt="" width={56} height={56} className="h-14 w-14 rounded-full" />
            <span className="font-display text-3xl font-extrabold uppercase leading-none">
              Center <span className="text-brand-yellow">Fitness</span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-muted">{site.tagline}. Planos mensais a partir de {site.priceFrom} e Gympass disponível.</p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${site.instagram.handle}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:border-brand-yellow hover:text-brand-yellow"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink(messages.generic)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:border-brand-yellow hover:text-brand-yellow"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <h2 className="mb-5 font-display text-xl tracking-widest text-brand-yellow">Navegação</h2>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-muted transition hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-4 not-italic md:col-span-4">
          <h2 className="mb-5 font-display text-xl tracking-widest text-brand-yellow">Contato</h2>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-muted transition hover:text-ink">
            <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" />
            {site.address.street}
            <br />
            {site.address.city}-{site.address.state}
          </a>
          <a href={`tel:${site.phone.e164}`} className="flex gap-3 text-muted transition hover:text-ink">
            <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" />
            {site.phone.display}
          </a>
          <p className="flex gap-3 text-muted">
            <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" />
            <span>
              Seg–Sex: 5h30–12h e 14h–22h
              <br />
              Sáb e feriados: 9h–12h
            </span>
          </p>
        </address>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-8 items-center transition hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              Site por <span className="text-ink">LDT Negócios &amp; Soluções</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
