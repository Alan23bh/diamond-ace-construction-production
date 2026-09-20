import type { ElementType, ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
  as = "h2",
  tone = "light",
}: SectionHeadingProps) {
  const Heading = as as ElementType;
  const headingColor = tone === "dark" ? "text-[var(--color-ink)]" : "text-white";
  const bodyColor =
    tone === "dark" ? "text-[var(--color-ink-soft)]" : "text-[var(--color-on-dark-muted)]";

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading className={cn("text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl", headingColor)}>
        {title}
      </Heading>
      {children ? <div className={cn("mt-5 text-base leading-7", bodyColor)}>{children}</div> : null}
    </div>
  );
}
