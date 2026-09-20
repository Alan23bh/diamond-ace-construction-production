"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { business } from "../../data/business";
import { navigation } from "../../data/navigation";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      setIsOpen(false);
      window.requestAnimationFrame(() => toggleRef.current?.focus());
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        data-testid="mobile-nav-toggle"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--color-ink)] transition-colors hover:bg-[var(--color-page)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>

      {isOpen ? (
        <div
          ref={panelRef}
          id="mobile-navigation"
          data-testid="mobile-navigation"
          className="absolute inset-x-4 top-[4.4rem] overflow-hidden rounded-xl border border-black/10 bg-white p-3 shadow-[0_24px_60px_rgba(23,23,21,0.18)]"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-page)] hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
                  pathname === item.href && "bg-[var(--color-page)] text-[var(--color-ink)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" className="mt-3 w-full">
            {business.primaryCta}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
