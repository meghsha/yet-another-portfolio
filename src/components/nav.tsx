"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { navItems, site } from "@/lib/content";
import { CommandHint, CommandPalette } from "@/components/command-palette";
import { cn } from "@/lib/utils";

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [openPalette, setOpenPalette] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (pathname.startsWith("/work")) {
      setActive("work");
      return;
    }
    const ids = navItems.map((i) => i.id);
    const onScroll = () => {
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4">
        <nav className="surface pointer-events-auto flex w-full max-w-[920px] items-center gap-2 rounded-full px-2 py-1.5 pl-4 sm:px-3">
          <Link href="/#home" className="shrink-0 text-[13px] font-semibold tracking-tight">
            {site.firstName}
          </Link>
          <div className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-[12px] transition-colors",
                  active === item.id
                    ? "bg-bg-solid text-ink"
                    : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-1">
            <CommandHint onClick={() => setOpenPalette(true)} />
            <a
              href={site.resumePath}
              download
              className="hidden rounded-full px-2.5 py-1.5 text-[12px] text-ink-soft hover:text-ink sm:inline"
            >
              Resume
            </a>
            <button
              type="button"
              aria-label="Toggle theme"
              className="rounded-full p-2 text-ink-soft hover:text-ink"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>
            <button
              type="button"
              className="rounded-full p-2 md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute inset-0 bg-black/35 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="surface absolute inset-x-3 bottom-3 rounded-[28px] p-4 pt-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-medium">Navigate</p>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-3 py-3 text-[15px]"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={site.resumePath}
                  download
                  className="rounded-2xl px-3 py-3 text-[15px]"
                >
                  Resume
                </a>
                <button
                  type="button"
                  className="rounded-2xl px-3 py-3 text-left text-[15px]"
                  onClick={() => {
                    setMobileOpen(false);
                    setOpenPalette(true);
                  }}
                >
                  Search
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <CommandPalette open={openPalette} onOpenChange={setOpenPalette} />
    </>
  );
}
