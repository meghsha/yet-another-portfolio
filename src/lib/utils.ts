import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fuzzyMatch(query: string, ...haystacks: string[]) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return haystacks.some((hay) => {
    const s = hay.toLowerCase();
    if (s.includes(q)) return true;
    let i = 0;
    for (const ch of s) {
      if (ch === q[i]) i += 1;
      if (i === q.length) return true;
    }
    return false;
  });
}

export function isMacPlatform() {
  if (typeof navigator === "undefined") return false;
  return /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent);
}
