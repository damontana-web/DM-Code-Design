interface NavLinkProps {
  href: string;
  children: string;
  /** True when this link matches the current route. The Astro version derives this from window.location at runtime via a <script>; in React, pass it down from your router instead. */
  active?: boolean;
}

/** Sitewide nav link. Active-state colour (#1565C0) matches NavLink.astro's script-driven override. */
export function NavLink({ href, children, active = false }: NavLinkProps) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={
        active
          ? "rounded-lg text-base font-medium text-[#1565C0] outline-hidden ring-zinc-500 focus-visible:ring-3 dark:text-[#1565C0] dark:ring-zinc-200 dark:focus:outline-hidden md:py-3 md:text-base 2xl:text-base"
          : "rounded-lg text-base font-medium text-neutral-600 outline-hidden ring-zinc-500 hover:text-[#2A3A8F] active:text-[#1565C0] focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-[#2A3A8F] dark:active:text-[#1565C0] dark:focus:outline-hidden md:py-3 md:text-base 2xl:text-base"
      }
    >
      {children}
    </a>
  );
}
