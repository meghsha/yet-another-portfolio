import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/content";
import { ArchitectureDiagram } from "@/components/architecture";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: `${project.name} · Meghan Sharma`,
    description: project.oneLiner,
  };
}

const sections = [
  ["01", "Overview"],
  ["02", "Problem"],
  ["03", "My role"],
  ["04", "Architecture"],
  ["05", "Backend"],
  ["06", "Frontend"],
  ["07", "Challenges"],
  ["08", "Impact"],
  ["09", "Stack"],
  ["10", "Links"],
] as const;

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const blocks: { id: string; n: string; t: string; body: React.ReactNode }[] = [
    { id: "overview", n: "01", t: "Overview", body: <p>{project.overview}</p> },
    { id: "problem", n: "02", t: "Problem", body: <p>{project.problem}</p> },
    { id: "role", n: "03", t: "My role", body: <p>{project.role}</p> },
    {
      id: "arch",
      n: "04",
      t: "Architecture",
      body: (
        <ArchitectureDiagram
          nodes={project.architecture.nodes}
          edges={project.architecture.edges}
        />
      ),
    },
    {
      id: "backend",
      n: "05",
      t: "Backend",
      body: (
        <ul className="space-y-2">
          {project.backend.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "frontend",
      n: "06",
      t: "Frontend",
      body: project.frontend.length ? (
        <ul className="space-y-2">
          {project.frontend.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      ) : (
        <p className="text-ink-soft">
          This work was primarily backend / systems. Product UI was not the
          center of gravity.
        </p>
      ),
    },
    {
      id: "challenges",
      n: "07",
      t: "Engineering challenges",
      body: (
        <ul className="space-y-2">
          {project.challenges.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "impact",
      n: "08",
      t: "Impact",
      body: project.impact?.length ? (
        <ul className="space-y-2">
          {project.impact.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      ) : (
        <p className="text-ink-soft">
          No additional public metrics beyond what is described above.
        </p>
      ),
    },
    {
      id: "stack",
      n: "09",
      t: "Stack",
      body: <p>{project.stack.join(" · ")}</p>,
    },
    {
      id: "links",
      n: "10",
      t: "Links",
      body: (
        <div className="flex flex-wrap gap-3">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm text-[var(--bg)]"
            >
              Live demo <ArrowUpRight size={14} />
            </a>
          ) : (
            <p className="text-sm text-ink-soft">
              No public live URL for this work.
            </p>
          )}
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
      ),
    },
  ];

  return (
    <article className="mx-auto max-w-3xl px-5 pt-28 pb-24 sm:px-8">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={14} /> Work
      </Link>
      <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        {project.company ?? "Personal project"}
        {project.period ? ` · ${project.period}` : ""}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {project.name}
      </h1>
      <p className="mt-4 text-lg text-ink-soft">{project.oneLiner}</p>

      <nav className="mt-10 flex flex-wrap gap-2">
        {sections.map(([n, t]) => (
          <a
            key={n}
            href={`#s-${n}`}
            className="rounded-full border border-line px-3 py-1 text-[11px] text-ink-soft"
          >
            {n} {t}
          </a>
        ))}
      </nav>

      <div className="mt-14 space-y-14">
        {blocks.map((b) => (
          <section key={b.n} id={`s-${b.n}`}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              {b.n} — {b.t}
            </p>
            <div className="mt-4 text-[15px] leading-relaxed">{b.body}</div>
          </section>
        ))}
      </div>
    </article>
  );
}
