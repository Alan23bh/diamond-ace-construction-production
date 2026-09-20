import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
};

export function Badge({ children, className, tone = "dark" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em]",
        tone === "dark"
          ? "border-white/25 bg-black/10 text-white"
          : "border-black/10 bg-white text-[var(--color-ink-soft)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
