"use client";

import { ThemeProvider } from "next-themes";
import { StatusProvider } from "@/components/status";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <StatusProvider>{children}</StatusProvider>
    </ThemeProvider>
  );
}
