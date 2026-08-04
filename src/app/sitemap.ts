import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/platform", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ecosystem", changeFrequency: "monthly", priority: 0.9 },
  { path: "/families", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hospitals", changeFrequency: "monthly", priority: 0.8 },
  { path: "/company", changeFrequency: "monthly", priority: 0.6 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

// /hello is intentionally absent — it is noindex, for conference QR traffic only.
export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((e) => ({
    url: new URL(e.path, siteUrl).toString(),
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
