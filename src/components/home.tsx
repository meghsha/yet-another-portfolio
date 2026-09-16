"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  Copy,
  Download,
  // Github,
  // Linkedin,
  Mail,
} from "lucide-react";
import {
  additionalWork,
  backendCapabilities,
  bento,
  compactProjects,
  dsaTopics,
  education,
  experience,
  featuredProjects,
  quotes,
  site,
  stackGroups,
  systemDesignNodes,
} from "@/lib/content";
import { FadeIn } from "@/components/fade-in";
import { ArchitectureDiagram } from "@/components/architecture";
import { useStatus } from "@/components/status";
import { cn } from "@/lib/utils";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] text-ink-soft">
      {children}
    </p>
  );
}

export function HomePage() {
  const { ping } = useStatus();
  const [sysNode, setSysNode] = useState(systemDesignNodes[2].id);
  const sys = systemDesignNodes.find((n) => n.id === sysNode)!;

  return (
    <main>
      <section
        id="home"
        className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24"
      >
        <div>
          {site.available ? (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-solid/70 px-3 py-1 text-xs text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {site.availabilityLabel}
            </div>
          ) : null}
          <h1 className="text-[40px] leading-[1.05] font-semibold tracking-tight sm:text-6xl">
            Hey, I&apos;m {site.firstName}.
          </h1>
          <p className="mt-4 max-w-xl text-xl leading-snug text-ink-soft sm:text-2xl">
            {site.headline}
          </p>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            {site.subhead}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#work"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
            >
              View My Work
            </Link>
            <a
              href={site.resumePath}
              download
              onClick={() => ping("Resume downloaded")}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm"
            >
              <Download size={15} />
              Download Résumé
            </a>
            {/* <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-line p-2.5"
            >
              <Github size={16} />
            </a> */}
            {/* <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-line p-2.5"
            >
              <Linkedin size={16} />
            </a> */}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            {site.years} years · Node.js · NestJS · APIs · Databases · System
            Design · DSA
          </p>
        </div>
        <FadeIn className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[28px] border border-line">
            <Image
              src="/images/portrait-hero.jpeg"
              alt="Meghan Sharma"
              width={900}
              height={1200}
              priority
              className="h-[520px] w-full object-cover object-[50%_18%] sm:h-[560px]"
            />
          </div>
          <div className="surface absolute right-3 bottom-3 left-3 rounded-2xl px-4 py-3 sm:right-5 sm:bottom-5 sm:left-auto sm:w-56">
            <p className="text-[11px] text-ink-soft">Currently</p>
            <p className="text-sm font-medium">SDE-1 · MelodyArc</p>
            <p className="text-xs text-ink-soft">Ex-GoKwik · Backend-leaning</p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <FadeIn>
          <SectionLabel>Engineering identity</SectionLabel>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            Systems first. Product when it needs a face.
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <BentoCard
            title={bento.backend.title}
            items={bento.backend.items}
            className="sm:col-span-2 lg:col-span-3 min-h-[130px]"
          />
          <BentoCard
            title={bento.frontend.title}
            items={bento.frontend.items}
            className="sm:col-span-2 lg:col-span-3 min-h-[130px]"
          />
          <BentoCard
            title={bento.databases.title}
            items={bento.databases.items}
            className="lg:col-span-2"
          />
          <BentoCard
            title={bento.cloud.title}
            items={bento.cloud.items}
            className="lg:col-span-2"
          />
          <BentoCard
            title={bento.system.title}
            items={bento.system.items}
            className="lg:col-span-2"
          />
          <BentoCard
            title={bento.dsa.title}
            items={bento.dsa.items}
            className="lg:col-span-6"
          />
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <FadeIn>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Production systems, then products.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Professional commerce and agent-orchestration work first. Personal
            full-stack builds after. Tutorial clones stay in the archive.
          </p>
        </FadeIn>
        <div className="mt-10 space-y-8">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.04}>
              <article className="surface overflow-hidden rounded-[28px]">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-6 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                      {project.company ?? "Personal"}{" "}
                      {project.tier === 1 ? "· Featured" : ""}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {project.oneLiner}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed">
                      {project.contribution}
                    </p>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium">Backend</p>
                        <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                          {project.backend.slice(0, 4).map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium">
                          {project.frontend.length
                            ? "Frontend"
                            : "Engineering"}
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                          {(project.frontend.length
                            ? project.frontend
                            : project.challenges
                          )
                            .slice(0, 3)
                            .map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <p className="mt-5 text-xs text-ink-soft">
                      {project.stack.join(" · ")}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm text-[var(--bg)]"
                      >
                        Case study <ArrowUpRight size={14} />
                      </Link>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-line px-4 py-2 text-sm"
                        >
                          Live
                        </a>
                      ) : null}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-line px-4 py-2 text-sm"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <div className="border-t border-line p-5 lg:border-t-0 lg:border-l">
                    <ArchitectureDiagram
                      nodes={project.architecture.nodes}
                      edges={project.architecture.edges}
                    />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {compactProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="surface rounded-[24px] p-5 transition hover:scale-[1.01]"
            >
              <p className="text-sm font-medium">{p.name}</p>
              <p className="mt-2 text-sm text-ink-soft">{p.oneLiner}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {additionalWork.map((item) => (
            <a
              key={item.name}
              href={item.href ?? item.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft hover:text-ink"
            >
              {item.name}
            </a>
          ))}
        </div>
      </section>

      <section
        id="engineering"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8"
      >
        <FadeIn>
          <SectionLabel>Backend engineering</SectionLabel>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight">
            The work behind the screens.
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {backendCapabilities.map((cap) => (
            <article key={cap.title} className="surface rounded-[24px] p-5">
              <h3 className="text-base font-medium">{cap.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {cap.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                {cap.project}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="system" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <FadeIn>
          <SectionLabel>System design</SectionLabel>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight">
            Inspect a path. Not a textbook.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink-soft">
            Production experience sits on APIs, cache, data, and integrations.
            CDN and load-balancing notes are engineering knowledge, not claimed
            as every production implementation.
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.7fr]">
          <div className="surface flex flex-wrap items-center justify-center gap-2 rounded-[28px] p-6">
            {systemDesignNodes.map((node, i) => (
              <div key={node.id} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSysNode(node.id)}
                  onMouseEnter={() => setSysNode(node.id)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-sm transition",
                    sysNode === node.id
                      ? "border-accent/40 bg-accent-soft"
                      : "border-line bg-bg-solid/50",
                  )}
                >
                  {node.label}
                  {"knowledge" in node && node.knowledge ? (
                    <span className="mt-1 block text-[10px] text-ink-soft">
                      knowledge
                    </span>
                  ) : null}
                </button>
                {i < systemDesignNodes.length - 1 ? (
                  <span className="hidden text-ink-soft sm:inline">→</span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="surface rounded-[28px] p-6">
            <p className="text-sm font-medium">{sys.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {sys.detail}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <FadeIn>
          <SectionLabel>Problem solving</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            {site.dsaCount} DSA problems solved
          </h2>
          <p className="mt-3 max-w-lg text-sm text-ink-soft">
            Practiced across platforms, with a DSA bootcamp at Programming
            Pathshala and a freeCodeCamp algorithms certification.
          </p>
        </FadeIn>
        <div className="mt-6 flex flex-wrap gap-2">
          {dsaTopics.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-bg-solid/50 px-3 py-1.5 text-xs text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <FadeIn>
          <SectionLabel>Frontend engineering</SectionLabel>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight">
            Interfaces as clients of real systems.
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {[
            {
              t: "Application architecture",
              d: "React, Next.js, Svelte, and TypeScript for checkout, payments, dashboards, and product apps — consuming APIs, not decorating them.",
            },
            {
              t: "State & rendering",
              d: "Redux Toolkit, Context, SSR on Next.js for SEO, and Svelte surfaces on high-traffic commerce paths.",
            },
            {
              t: "Performance",
              d: "Lazy loading, memoization, caching, and compressed static resources on checkout — conversion as an engineering problem.",
            },
          ].map((c) => (
            <article key={c.t} className="surface rounded-[24px] p-5">
              <h3 className="text-base font-medium">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {c.d}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Career path
          </h2>
        </FadeIn>
        <div className="mt-10 space-y-8 border-l border-line pl-6">
          {experience.map((job) => (
            <FadeIn key={job.company}>
              <div className="-ml-[31px] mb-2 h-3.5 w-3.5 rounded-full border border-line bg-bg-solid" />
              <p className="text-xs text-ink-soft">{job.dates}</p>
              <h3 className="mt-1 text-xl font-semibold">
                {job.role} · {job.company}
              </h3>
              <p className="text-sm text-ink-soft">
                {"aka" in job && job.aka ? `${job.aka} · ` : ""}
                {job.location}
              </p>
              <p className="mt-3 max-w-2xl text-sm">{job.summary}</p>
              <ul className="mt-4 max-w-2xl space-y-2 text-sm text-ink-soft">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[28px] border border-line">
            <Image
              src="/images/portrait-about.jpeg"
              alt="Meghan Sharma outdoors"
              width={900}
              height={1100}
              className="h-[420px] w-full object-cover object-[50%_18%]"
            />
          </div>
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              End-to-end is the interesting part.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              I like understanding systems completely — how data is modeled, how
              APIs are contracted, how auth actually holds, and how those pieces
              become a product someone can finish a checkout or a support
              journey in.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              The last few years have been production work on payments,
              checkout, merchant onboarding, and agentic API workflows. I still
              write serious frontend when the product needs it. I also keep DSA
              and system design sharp — {site.dsaCount} problems, and HLD/LLD as
              a regular practice, not a buzzword.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Based in {site.location}. Immediately available.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {quotes.map((q) => (
                <blockquote
                  key={q.name}
                  className="surface rounded-[24px] p-4 text-sm leading-relaxed text-ink-soft"
                >
                  “{q.text}”
                  <footer className="mt-3 text-xs text-ink">
                    {q.name} · {q.role}
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-ink-soft">
                Education
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {education.map((e) => (
                  <li key={e.place}>
                    <span className="font-medium">{e.place}</span>
                    <span className="text-ink-soft"> — {e.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink-soft">
            Backend systems, APIs, and the products that sit on them.{" "}
            {site.availabilityLabel}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-[var(--bg)]"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <button
              type="button"
              onClick={async () => {
                await navigator.clipboard.writeText(site.email);
                ping("Email copied");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm"
            >
              <Copy size={15} />
              {site.email}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-soft">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.resumePath} download>
              Resume
            </a>
            <span>{site.phone}</span>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

function BentoCard({
  title,
  items,
  className,
}: {
  title: string;
  items: readonly string[];
  className?: string;
}) {
  return (
    <article className={cn("surface rounded-[24px] p-5", className)}>
      <h3 className="text-base font-medium">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {items.join(" · ")}
      </p>
    </article>
  );
}
