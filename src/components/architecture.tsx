"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ArchEdge, ArchNode } from "@/lib/content";

export function ArchitectureDiagram({
  nodes,
  edges,
}: {
  nodes: ArchNode[];
  edges: ArchEdge[];
}) {
  const [active, setActive] = useState(nodes[0]?.id ?? "");
  const current = nodes.find((n) => n.id === active) ?? nodes[0];

  return (
    <div className="surface rounded-[24px] p-5 sm:p-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        Architecture
      </p>
      <div className="mt-5 flex flex-col gap-3">
        {nodes.map((node, index) => {
          const hasNext = edges.some((e) => e.from === node.id);
          return (
            <div key={node.id}>
              <button
                type="button"
                onClick={() => setActive(node.id)}
                onMouseEnter={() => setActive(node.id)}
                className={cn(
                  "w-full rounded-2xl border px-4 py-3 text-left transition-all duration-300",
                  active === node.id
                    ? "border-accent/40 bg-accent-soft"
                    : "hairline bg-bg-solid/60 hover:border-accent/25",
                )}
              >
                <span className="text-sm font-medium">{node.label}</span>
                <span className="mt-0.5 block text-xs text-ink-soft">
                  {node.hint}
                </span>
              </button>
              {hasNext && index < nodes.length - 1 ? (
                <div className="flex justify-center py-1.5" aria-hidden>
                  <span className="h-5 w-px bg-line" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {current ? (
        <p className="mt-5 text-sm leading-relaxed text-ink-soft">
          {current.hint}
        </p>
      ) : null}
    </div>
  );
}
