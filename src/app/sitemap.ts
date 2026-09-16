import { projects } from "@/lib/content";

export default function sitemap() {
  const base = "https://meghansharma.dev";
  return [
    { url: base, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
