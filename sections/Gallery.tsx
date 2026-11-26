import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

/** Só aparece quando houver fotos em lib/site.ts → gallery. */
export function Gallery() {
  if (site.gallery.length === 0) return null;
  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Galeria" title={<>Por dentro da <span className="text-brand-yellow">academia</span></>} />
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {site.gallery.map((img) => (
            <li key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-surface">
              <Image src={img.src} alt={img.alt} fill loading="lazy" sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
