"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Briefcase,
  Copy,
  Download,
  FolderGit2,
  // Github,
  Home,
  // Linkedin,
  Mail,
  Search,
  User,
} from "lucide-react";
import { fuzzyMatch, isMacPlatform } from "@/lib/utils";
import { projects, site } from "@/lib/content";
import { useStatus } from "@/components/status";

type Command = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  run: () => void;
};

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const { ping } = useStatus();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();

  const commands = useMemo<Command[]>(() => {
    const go = (href: string) => {
      onOpenChange(false);
      router.push(href);
    };

    const nav: Command[] = [
      { id: "home", group: "Navigation", label: "Home", icon: <Home size={16} />, run: () => go("/#home") },
      { id: "work", group: "Navigation", label: "View Projects", icon: <Briefcase size={16} />, run: () => go("/#work") },
      { id: "exp", group: "Navigation", label: "Experience", icon: <Briefcase size={16} />, run: () => go("/#experience") },
      { id: "eng", group: "Navigation", label: "Engineering", icon: <FolderGit2 size={16} />, run: () => go("/#engineering") },
      { id: "sd", group: "Navigation", label: "System Design", icon: <FolderGit2 size={16} />, run: () => go("/#system") },
      { id: "about", group: "Navigation", label: "About", icon: <User size={16} />, run: () => go("/#about") },
      { id: "contact", group: "Navigation", label: "Contact", icon: <Mail size={16} />, run: () => go("/#contact") },
    ];

    const actions: Command[] = [
      {
        id: "resume",
        group: "Actions",
        label: "Download Resume",
        icon: <Download size={16} />,
        run: () => {
          onOpenChange(false);
          const a = document.createElement("a");
          a.href = site.resumePath;
          a.download = "Meghan-Sharma-Resume.pdf";
          a.click();
          ping("Resume downloaded");
        },
      },
      {
        id: "email",
        group: "Actions",
        label: "Copy Email",
        hint: site.email,
        icon: <Copy size={16} />,
        run: async () => {
          await navigator.clipboard.writeText(site.email);
          onOpenChange(false);
          ping("Email copied");
        },
      },
      // {
      //   id: "gh",
      //   group: "Actions",
      //   label: "Open GitHub",
      //   icon: <Github size={16} />,
      //   run: () => {
      //     window.open(site.github, "_blank", "noopener,noreferrer");
      //     onOpenChange(false);
      //   },
      // },
      // {
      //   id: "li",
      //   group: "Actions",
      //   label: "Open LinkedIn",
      //   icon: <Linkedin size={16} />,
      //   run: () => {
      //     window.open(site.linkedin, "_blank", "noopener,noreferrer");
      //     onOpenChange(false);
      //   },
      // },
    ];

    const projectCommands: Command[] = projects
      .filter((p) => p.tier !== 3)
      .map((p) => ({
        id: p.slug,
        group: "Projects",
        label: `Open Project → ${p.name}`,
        icon: <ArrowUpRight size={16} />,
        run: () => go(`/work/${p.slug}`),
      }));

    return [...nav, ...actions, ...projectCommands];
  }, [onOpenChange, ping, router]);

  const filtered = useMemo(
    () =>
      commands.filter((c) => fuzzyMatch(query, c.label, c.group, c.hint ?? "")),
    [commands, query],
  );

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 30);
      return () => window.clearTimeout(t);
    }
    setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange, open]);

  const grouped = useMemo(() => {
    const map = new Map<string, Command[]>();
    for (const c of filtered) {
      map.set(c.group, [...(map.get(c.group) ?? []), c]);
    }
    return [...map.entries()];
  }, [filtered]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    } else if (e.key === "Escape") {
      onOpenChange(false);
    }
  };

  let running = -1;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.18 }}
        >
          <button
            aria-label="Close command palette"
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="surface relative w-full max-w-[560px] overflow-hidden rounded-[24px]"
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <Search size={16} className="text-ink-soft" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search engineering work, actions, pages…"
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-ink-soft"
              />
              <kbd className="hidden rounded-md border border-line px-1.5 py-0.5 text-[10px] text-ink-soft sm:inline">
                ESC
              </kbd>
            </div>
            <div className="max-h-[min(52vh,420px)] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-ink-soft">
                  No matches
                </p>
              ) : (
                grouped.map(([group, items]) => (
                  <div key={group} className="mb-2">
                    <p className="px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                      {group}
                    </p>
                    {items.map((item) => {
                      running += 1;
                      const index = running;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() => setActive(index)}
                          onClick={item.run}
                          className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition-colors ${
                            active === index ? "bg-accent-soft" : ""
                          }`}
                        >
                          <span className="text-ink-soft">{item.icon}</span>
                          <span className="flex-1">{item.label}</span>
                          {item.hint ? (
                            <span className="hidden text-xs text-ink-soft sm:inline">
                              {item.hint}
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function CommandHint({ onClick }: { onClick: () => void }) {
  const [mac, setMac] = useState(true);
  useEffect(() => setMac(isMacPlatform()), []);

  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden items-center gap-1.5 rounded-full border border-line bg-bg-solid/50 px-2.5 py-1 text-[11px] text-ink-soft transition hover:text-ink md:flex"
      aria-label="Open command palette"
    >
      <span>Search</span>
      <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px]">
        {mac ? "⌘K" : "Ctrl K"}
      </kbd>
    </button>
  );
}
