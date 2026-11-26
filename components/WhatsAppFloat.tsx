import { whatsappLink, messages } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(messages.generic)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Center Fitness no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 font-display text-lg font-bold uppercase tracking-wide text-black shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] transition hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Chamar no WhatsApp</span>
    </a>
  );
}
