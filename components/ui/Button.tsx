import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonElementProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[var(--color-brass)] text-[var(--color-charcoal-950)] hover:bg-[var(--color-brass-dark)]",
  secondary:
    "border-[var(--color-border)] bg-transparent text-[var(--color-warm-white)] hover:border-[var(--color-brass)] hover:text-[var(--color-soft-beige)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-warm-white)] hover:text-[var(--color-soft-beige)]",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brass)] focus:ring-offset-2 focus:ring-offset-[var(--color-charcoal-950)]",
    variants[variant],
    className,
  );

  if ("href" in props) {
    const linkProps = { ...props } as Omit<
      ButtonLinkProps,
      "children" | "variant" | "className"
    > &
      Partial<ButtonBaseProps>;
    delete linkProps.children;
    delete linkProps.variant;
    delete linkProps.className;

    return (
      <Link {...linkProps} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = { ...props } as ComponentPropsWithoutRef<"button"> &
    Partial<ButtonBaseProps> & { href?: never };
  delete buttonProps.children;
  delete buttonProps.variant;
  delete buttonProps.className;
  delete buttonProps.href;

  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
