import type { Metadata } from "next";
import { SITE_URL, site } from "@/lib/site";

/** Metadados por página: title, description, canonical, Open Graph e Twitter. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string; // ex.: "/sobre/"
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: ["/images/og.jpg"],
    },
  };
}

/** Schema.org ExerciseGym (LocalBusiness) — apenas dados fornecidos pelo cliente. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ExerciseGym", "LocalBusiness"],
  "@id": `${SITE_URL}/#gym`,
  name: site.name,
  description: site.description,
  url: SITE_URL,
  image: `${SITE_URL}/images/og.jpg`,
  logo: `${SITE_URL}/images/logo.webp`,
  telephone: site.phone.e164,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: site.address.country,
  },
  hasMap: site.mapsUrl,
  sameAs: [site.instagram.url],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
