import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase text-[var(--color-brass)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--color-warm-white)] sm:text-4xl">
        {title}
      </h2>
      {children ? <div className="mt-4 text-base leading-7">{children}</div> : null}
    </div>
  );
}
