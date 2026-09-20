import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";

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
    "border-transparent bg-[var(--color-accent)] text-[#171715] shadow-sm hover:bg-[var(--color-accent-dark)] hover:text-white",
  secondary:
    "border-white/20 bg-transparent text-[var(--color-on-dark)] hover:border-white/45 hover:bg-white/10",
  inverse:
    "border-transparent bg-white text-[var(--color-ink)] hover:bg-[var(--color-page)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-ink)] hover:bg-black/[0.045]",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
