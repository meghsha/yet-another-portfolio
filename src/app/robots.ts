import { site } from "@/lib/content";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://meghansharma.dev/sitemap.xml",
    host: site.linkedin,
  };
}
