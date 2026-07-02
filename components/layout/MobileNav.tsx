"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "../../data/navigation";
import { cn } from "../../lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-md border border-[var(--color-border)] px-3 py-2 text-sm font-semibold text-[var(--color-warm-white)]"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        Menu
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-4 top-20 rounded-md border border-[var(--color-border)] bg-[var(--color-charcoal-900)] p-3 shadow-2xl"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-medium text-[var(--color-warm-muted)]",
                  pathname === item.href &&
                    "bg-[var(--color-charcoal-800)] text-[var(--color-warm-white)]",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
