import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  crumb: string;
  watermark: string;
};

/** Cabeçalho padrão das páginas internas (h1 + breadcrumb). */
export function PageHero({ eyebrow, title, lead, crumb, watermark }: Props) {
  return (
    <section className="grain relative overflow-hidden border-b border-line pb-16 pt-36 sm:pb-24 sm:pt-44">
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[10rem] font-extrabold uppercase leading-none sm:text-[18rem]"
      >
        {watermark}
      </span>
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {crumb}
            </li>
          </ol>
        </nav>
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={lead} />
      </div>
    </section>
  );
}
