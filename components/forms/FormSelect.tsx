"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { cn } from "../../lib/utils";

function optionId(selectId: string, index: number) {
  return `${selectId}-option-${index}`;
}

type FormSelectProps = {
  id: string;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  onBlur?: () => void;
  invalid?: boolean;
  describedBy?: string;
  testId?: string;
};

export function FormSelect({
  id,
  label,
  value,
  options,
  onChange,
  onBlur,
  invalid = false,
  describedBy,
  testId,
}: FormSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedIndex = Math.max(0, options.indexOf(value));
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listboxId = `${id}-listbox`;

  const activeOptionId = useMemo(
    () => (isOpen ? optionId(id, activeIndex) : undefined),
    [activeIndex, id, isOpen],
  );

  useEffect(() => {
    setActiveIndex(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        onBlur?.();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        onBlur?.();
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onBlur]);

  function openSelect() {
    setActiveIndex(selectedIndex);
    setIsOpen(true);
  }

  function chooseOption(index: number) {
    const nextValue = options[index];

    if (!nextValue) {
      return;
    }

    onChange(nextValue);
    setActiveIndex(index);
    setIsOpen(false);
    onBlur?.();
    buttonRef.current?.focus();
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();

      if (!isOpen) {
        openSelect();
        return;
      }

      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((current) => (current + direction + options.length) % options.length);
      return;
    }

    if (event.key === "Home" && isOpen) {
      event.preventDefault();
      setActiveIndex(0);
      return;
    }

    if (event.key === "End" && isOpen) {
      event.preventDefault();
      setActiveIndex(options.length - 1);
      return;
    }

    if ((event.key === "Enter" || event.key === " ") && isOpen) {
      event.preventDefault();
      chooseOption(activeIndex);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openSelect();
      return;
    }

    if (event.key === "Tab" && isOpen) {
      setIsOpen(false);
      onBlur?.();
    }
  }

  return (
    <div ref={rootRef} className="mt-2">
      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={activeOptionId}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        data-testid={testId}
        onClick={() => (isOpen ? setIsOpen(false) : openSelect())}
        onKeyDown={handleKeyDown}
        onBlur={(event) => {
          if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
            onBlur?.();
          }
        }}
        className={cn(
          "flex min-h-12 w-full items-center justify-between gap-4 rounded-lg border bg-white px-4 text-left text-sm text-[var(--color-ink)] outline-none transition",
          "border-black/15 hover:border-black/25 focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(184,145,79,0.14)]",
          invalid && "border-[#983f34]/45 ring-2 ring-[#983f34]/8",
          isOpen && "border-[var(--color-accent)] ring-4 ring-[rgba(184,145,79,0.14)]",
        )}
      >
        <span className="font-medium">{value}</span>
        <ChevronDown
          aria-hidden="true"
          size={18}
          className={cn(
            "shrink-0 text-[var(--color-ink-muted)] transition-transform duration-200",
            isOpen && "rotate-180 text-[var(--color-accent-dark)]",
          )}
        />
      </button>

      {isOpen ? (
        <div
          id={listboxId}
          role="listbox"
          aria-label={`${label} options`}
          className="mt-2 overflow-hidden rounded-xl border border-black/10 bg-white p-1.5 shadow-[0_18px_45px_rgba(23,23,21,0.14)]"
        >
          {options.map((option, index) => {
            const isSelected = option === value;
            const isActive = index === activeIndex;

            return (
              <button
                key={option}
                id={optionId(id, index)}
                type="button"
                role="option"
                aria-selected={isSelected}
                data-testid={`${testId ?? id}-option-${index}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => chooseOption(index)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                  isActive ? "bg-[var(--color-page)] text-[var(--color-ink)]" : "text-[var(--color-ink-soft)]",
                  isSelected && "font-semibold text-[var(--color-accent-dark)]",
                )}
              >
                <span>{option}</span>
                {isSelected ? <Check aria-hidden="true" size={16} strokeWidth={2.5} /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
