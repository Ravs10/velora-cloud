import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://velora-cloud.run4ravish.workers.dev";
  const date = new Date("2026-11-24");

  return [
    { url: `${base}/`, lastModified: date, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/boilerplates`, lastModified: date, changeFrequency: "weekly", priority: 0.9 },
  ];
}
