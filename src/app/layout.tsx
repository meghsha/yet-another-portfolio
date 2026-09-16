import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Providers } from "@/components/providers";
import { StatusIsland } from "@/components/status-island";
import { site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meghansharma.dev"),
  title: {
    default: `${site.name} · Software Engineer`,
    template: `%s · ${site.name}`,
  },
  description: site.subhead,
  keywords: [
    "Software Engineer",
    "Backend",
    "Node.js",
    "NestJS",
    "TypeScript",
    "System Design",
    "Meghan Sharma",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    title: `${site.name} · Software Engineer`,
    description: site.headline,
    type: "website",
    images: ["/images/portrait-hero.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Software Engineer`,
    description: site.headline,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink">
        <Providers>
          <StatusIsland />
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
