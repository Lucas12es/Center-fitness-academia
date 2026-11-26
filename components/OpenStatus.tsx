"use client";

import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus as Status } from "@/lib/schedule";
import { cn } from "@/lib/cn";

/** Status de funcionamento calculado no navegador (fuso America/Sao_Paulo). */
export function OpenStatus({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const state = status?.state ?? "unknown";
  const dot =
    state === "open"
      ? "bg-emerald-400"
      : state === "closed"
        ? "bg-brand-red"
        : "bg-white/40";

  return (
    <p
      className={cn(
        "inline-flex min-h-8 items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-ink",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <span
        aria-hidden="true"
        className={cn("h-2.5 w-2.5 rounded-full", dot, state === "open" && "animate-pulse-dot")}
      />
      {status ? status.label : "Veja os horários abaixo"}
    </p>
  );
}
