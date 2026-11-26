import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/sobre/", priority: 0.7 },
  { path: "/modalidades/", priority: 0.8 },
  { path: "/planos/", priority: 0.9 },
  { path: "/contato/", priority: 0.9 },
  { path: "/politica-de-privacidade/", priority: 0.3 },
  { path: "/termos-de-uso/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
