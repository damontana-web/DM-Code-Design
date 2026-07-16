import { Avatar } from "./Avatar";
import { Button } from "./Button";

/**
 * CONFIRMED (sync report, item 1): DESIGN_SYSTEM.md §6's `ring-blue-primary/20` /
 * `hover:-translate-y-1 hover:shadow-xl` description is stale — the real
 * CardSmall.astro/CardWide.astro markup (`ring-zinc-500`, no translate-y,
 * `shadow-lg`/`shadow-xl`, `rounded-xl`/`rounded-lg`) is the current, intentional
 * design and what this component follows. The Small vs. Wide radius/shadow
 * mismatch is real and looks unintentional, but is a separate cleanup question,
 * not something for this component to resolve on its own.
 */

interface PortfolioCardProps {
  variant: "portfolioSmall" | "portfolioWide";
  href: string;
  imageSrc: string;
  imageAlt: string;
  /** Rendered as the bottom-overlay label (product description, not a title). */
  description: string;
}

interface BlogCardProps {
  variant: "blog";
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  authorName: string;
  authorImageSrc: string;
  readTimeMinutes: number;
}

interface InsightCardProps {
  variant: "insight";
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  /** Defaults to "Read more" ("Lire plus" in the fr locale) — pass explicitly to localize. */
  readMoreLabel?: string;
}

interface RelatedCardProps {
  variant: "related";
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

interface BlogFeaturedCardProps {
  variant: "blogFeatured";
  href: string;
  imageSrc: string;
  imageAlt: string;
  /** The clickable heading text (CardBlogRecent.astro uses the post's `description` field here, not its `title`). */
  title: string;
  authorName: string;
  authorImageSrc: string;
  /** Defaults to "Creative Designer | Web Developer" — that was hardcoded in the source, not data-driven. */
  authorRole?: string;
  ctaLabel: string;
  ctaHref: string;
}

export type CardProps =
  | PortfolioCardProps
  | BlogCardProps
  | InsightCardProps
  | RelatedCardProps
  | BlogFeaturedCardProps;

/** Verbatim from icons.ts's "openInNew" registry entry — used on portfolio cards. */
function OpenInNewIcon() {
  return (
    <svg
      className="ml-0.5 inline h-3 w-3 pb-0.5 md:h-4 md:w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

/** Verbatim from icons.ts's "arrowRightStatic" registry entry — used on the insight "read more" link. */
function ArrowRightStaticIcon() {
  return (
    <svg
      className="size-4 shrink-0"
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

function PortfolioCard(props: PortfolioCardProps) {
  const isWide = props.variant === "portfolioWide";
  return (
    <a
      href={props.href}
      className={
        isWide
          ? "group relative flex h-48 items-end overflow-hidden rounded-lg bg-[#171717] shadow-xl outline-hidden ring-1 ring-zinc-500 transition duration-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:col-span-2 md:h-80"
          : "group relative flex h-48 items-end overflow-hidden rounded-xl bg-[#171717] shadow-lg outline-hidden ring-1 ring-zinc-500 transition duration-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:h-80"
      }
    >
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-60 transition duration-500 group-hover:scale-110"
      />
      <span className="relative mb-3 ml-4 inline-block text-[clamp(1.1875rem,4vw,1.6875rem)] font-medium text-neutral-50 transition duration-500 group-hover:text-neutral-50/[.8] md:ml-5">
        {props.description} <OpenInNewIcon />
      </span>
    </a>
  );
}

function BlogCard(props: BlogCardProps) {
  return (
    <a
      href={props.href}
      className="group relative block rounded-xl bg-[#171717] outline-hidden ring-zinc-500 transition duration-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"
    >
      <div className="relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-neutral-900/[.7]">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          draggable={false}
          className="absolute start-0 top-0 size-full object-cover opacity-60 transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="flex h-full flex-col p-4 sm:p-6">
          <div className="flex items-center">
            <Avatar src={props.authorImageSrc} alt={props.authorName} style="border" />
            <div className="ms-2.5 sm:ms-4">
              <h4 className="text-[16px] font-normal text-neutral-50">{props.authorName}</h4>
              <p className="text-xs text-neutral-50/[.8]">{props.readTimeMinutes} min read</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex h-full flex-col p-4 sm:p-6">
          <h3 className="text-balance text-lg font-medium text-neutral-50 group-hover:text-neutral-50/[.8] sm:text-3xl">
            {props.title}
          </h3>
          <p className="mt-2 text-pretty text-neutral-50/[.8]">{props.description}</p>
        </div>
      </div>
    </a>
  );
}

function InsightCard(props: InsightCardProps) {
  return (
    <a
      href={props.href}
      className="group rounded-xl outline-hidden ring-zinc-500 transition duration-300 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"
    >
      <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          draggable={false}
          className="absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="mt-7">
        <h3 className="text-xl text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400">
          {props.title}
        </h3>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">{props.description}</p>
        <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-[#C71D7F] decoration-2 group-hover:underline dark:text-magenta-300">
          {props.readMoreLabel ?? "Read more"}
          <ArrowRightStaticIcon />
        </p>
      </div>
    </a>
  );
}

function RelatedCard(props: RelatedCardProps) {
  return (
    <a
      href={props.href}
      className="group block rounded-xl outline-hidden ring-zinc-500 transition duration-300 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"
    >
      <div>
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          draggable={false}
          className="aspect-video w-full rounded-xl object-cover"
        />
        <h3 className="mt-2 text-balance text-lg font-medium text-neutral-800 group-hover:text-[#C71D7F] dark:text-neutral-300 dark:group-hover:text-neutral-50">
          {props.title}
        </h3>
      </div>
    </a>
  );
}

function BlogFeaturedCard(props: BlogFeaturedCardProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
      <div className="sm:order-2">
        <div className="relative rounded-lg pt-[50%] sm:pt-[100%]">
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            draggable={false}
            className="absolute start-0 top-0 size-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="sm:order-1">
        <h2 className="text-balance text-xl tracking-tight text-gray-700 md:text-2xl lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight">
          <a
            href={props.href}
            className="outline-hidden ring-zinc-500 transition duration-300 hover:text-[#C71D7F] focus-visible:ring-3 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:text-neutral-50 dark:focus:outline-hidden"
          >
            {props.title}
          </a>
        </h2>
        <div className="mt-6 space-y-6 sm:mt-10">
          <div className="flex items-center gap-x-3">
            <Avatar src={props.authorImageSrc} alt={props.authorName} style="plain" size="large" />
            <div>
              <span className="block text-[16px] font-normal text-neutral-700 dark:text-neutral-300">
                {props.authorName}
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {props.authorRole ?? "Creative Designer | Web Developer"}
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
        <div className="mt-5">
          <Button href={props.ctaHref}>{props.ctaLabel}</Button>
        </div>
      </div>
    </div>
  );
}

export function Card(props: CardProps) {
  switch (props.variant) {
    case "portfolioSmall":
    case "portfolioWide":
      return <PortfolioCard {...props} />;
    case "blog":
      return <BlogCard {...props} />;
    case "insight":
      return <InsightCard {...props} />;
    case "related":
      return <RelatedCard {...props} />;
    case "blogFeatured":
      return <BlogFeaturedCard {...props} />;
  }
}
