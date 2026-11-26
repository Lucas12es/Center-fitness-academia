import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string };

/** Accordion nativo (<details>): acessível por teclado e sem JavaScript. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-2xl font-bold uppercase tracking-wide marker:hidden [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown
              aria-hidden="true"
              className="h-6 w-6 shrink-0 text-brand-yellow transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p className="max-w-3xl pb-6 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
