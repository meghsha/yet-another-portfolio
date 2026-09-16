"use client";

import { motion, AnimatePresence } from "motion/react";
import { useStatus } from "@/components/status";

export function StatusIsland() {
  const { status } = useStatus();

  return (
    <div className="pointer-events-none fixed top-3 left-1/2 z-[70] -translate-x-1/2">
      <AnimatePresence>
        {status ? (
          <motion.div
            key={status.id}
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="pointer-events-auto rounded-full px-4 py-2 text-xs font-medium"
            style={{
              background: "var(--island)",
              color: "var(--island-ink)",
            }}
          >
            {status.message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
