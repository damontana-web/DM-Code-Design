import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

interface SharedProps {
  /** "primary" = solid magenta pill (PrimaryCTA.astro). "secondary" = outline blue pill (SecondaryCTA.astro). */
  variant?: ButtonVariant;
  /** Trailing arrow icon, shown by default on the primary variant only. Set false to suppress it. */
  arrow?: boolean;
  children: ReactNode;
}

export type ButtonProps = SharedProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

const base =
  "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden border border-transparent disabled:pointer-events-none disabled:opacity-50 2xl:text-base";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "text-neutral-50 bg-[#E90E8C] hover:bg-[#E90E8C]/90 active:bg-[#E90E8C]/90 dark:ring-zinc-200 dark:focus:outline-hidden",
  secondary:
    "font-medium border-2 border-[#2A4C9C] bg-transparent text-[#2A4C9C] shadow-xs hover:bg-[#2A4C9C]/10 active:bg-[#2A4C9C]/20 dark:border-[#2A4C9C] dark:text-[#5B7FD4] dark:ring-zinc-200 dark:hover:bg-[#2A4C9C]/20 dark:focus:outline-hidden",
};

/** Trailing arrow — verbatim from icons.ts's "arrowRight" registry entry. */
function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/**
 * Button/CTA link. Sitewide convention (DESIGN_SYSTEM.md §5): primary is always
 * labelled "Book a call"; secondary is always "Get in touch" or "See my work".
 * This component doesn't enforce that copy — it's a content decision, not a prop constraint.
 */
export function Button({ variant = "primary", arrow = variant === "primary", children, ...rest }: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={href} {...anchorRest}>
        {children}
        {arrow ? <ArrowIcon /> : null}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type={buttonRest.type ?? "button"} {...buttonRest}>
      {children}
      {arrow ? <ArrowIcon /> : null}
    </button>
  );
}
