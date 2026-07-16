/** Consolidates StatsSmall.astro and StatsBig.astro — identical structure/color, differing only in number size. */
export type StatSize = "sm" | "lg";

interface StatProps {
  title: string;
  subtitle: string;
  size?: StatSize;
}

const containerClasses: Record<StatSize, string | undefined> = {
  sm: undefined,
  lg: "lg:pe-6 xl:pe-12",
};

const titleClasses: Record<StatSize, string> = {
  sm: "text-3xl font-bold text-magenta-400 dark:text-magenta-300",
  lg: "text-6xl font-bold leading-10 text-magenta-400 dark:text-magenta-300",
};

const subtitleClasses: Record<StatSize, string> = {
  sm: "mt-1 text-neutral-600 dark:text-neutral-400",
  lg: "mt-2 text-neutral-600 dark:text-neutral-400 sm:mt-3",
};

export function Stat({ title, subtitle, size = "sm" }: StatProps) {
  return (
    <div className={containerClasses[size]}>
      <p className={titleClasses[size]}>{title}</p>
      <p className={subtitleClasses[size]}>{subtitle}</p>
    </div>
  );
}
