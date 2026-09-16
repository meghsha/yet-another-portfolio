"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Status = { message: string; id: number };

const StatusContext = createContext<{
  status: Status | null;
  ping: (message: string) => void;
} | null>(null);

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status | null>(null);

  const ping = useCallback((message: string) => {
    const id = Date.now();
    setStatus({ message, id });
    window.setTimeout(() => {
      setStatus((current) => (current?.id === id ? null : current));
    }, 2200);
  }, []);

  const value = useMemo(() => ({ status, ping }), [status, ping]);

  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  );
}

export function useStatus() {
  const ctx = useContext(StatusContext);
  if (!ctx) throw new Error("useStatus must be used within StatusProvider");
  return ctx;
}
