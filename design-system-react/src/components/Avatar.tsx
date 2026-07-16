/**
 * CONFIRMED (sync report, item 2): the Astro system's four avatar components are
 * not just size variants — ring (Avatar.astro) and border (AvatarBlog.astro) are
 * genuinely distinct visual treatments and stay separate `style` values.
 * AvatarBlogLarge.astro and AvatarTestimonialSection.astro differ only in their
 * two responsive breakpoints and collapse into "plain"'s `size` prop.
 */

export type AvatarStyle = "ring" | "border" | "plain";
export type AvatarPlainSize = "compact" | "large";

interface BaseAvatarProps {
  src: string;
  alt: string;
}

interface RingAvatarProps extends BaseAvatarProps {
  /** Avatar.astro — fixed 32px, ring-2 ring-neutral-50. */
  style: "ring";
}

interface BorderAvatarProps extends BaseAvatarProps {
  /** AvatarBlog.astro — fixed 46px, border-2 border-neutral-50. */
  style: "border";
}

interface PlainAvatarProps extends BaseAvatarProps {
  /** AvatarBlogLarge.astro / AvatarTestimonialSection.astro — no ring or border. */
  style: "plain";
  /** compact: 32px -> 46px @ sm (AvatarTestimonialSection.astro). large: 40px -> 56px @ sm (AvatarBlogLarge.astro). */
  size?: AvatarPlainSize;
}

export type AvatarProps = RingAvatarProps | BorderAvatarProps | PlainAvatarProps;

const ringClasses = "inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800";
// Source wraps border/plain avatars in a `shrink-0` div wherever they're placed in a flex row
// (BlogCard's author row, testimonial rows, etc.) — folded into the image class itself here
// since a bare <img> has nothing else to wrap; harmless outside a flex/grid context.
const borderClasses = "size-[46px] shrink-0 rounded-full border-2 border-neutral-50";
const plainClasses: Record<AvatarPlainSize, string> = {
  compact: "size-8 shrink-0 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]",
  large: "size-10 shrink-0 rounded-full sm:h-14 sm:w-14",
};

export function Avatar(props: AvatarProps) {
  const className =
    props.style === "ring" ? ringClasses : props.style === "border" ? borderClasses : plainClasses[props.size ?? "compact"];

  return <img src={props.src} alt={props.alt} loading="lazy" className={className} />;
}
