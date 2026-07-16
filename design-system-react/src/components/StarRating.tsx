/** Exact SVG paths from FullStar.astro / HalfStar.astro. */
const FULL_STAR_PATH =
  "M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z";
const HALF_STAR_FILLED_PATH =
  "M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z";

const starClass = "h-4 w-4 text-yellow-500 dark:text-yellow-400";

function FullStarIcon() {
  return (
    <svg className={starClass} viewBox="0 0 51 51" fill="none">
      <path d={FULL_STAR_PATH} fill="currentColor" />
    </svg>
  );
}

function HalfStarIcon() {
  return (
    <svg className={starClass} viewBox="0 0 51 51" fill="none">
      <path d={HALF_STAR_FILLED_PATH} fill="currentColor" />
    </svg>
  );
}

function EmptyStarIcon() {
  return (
    <svg className={starClass} viewBox="0 0 51 51" fill="none">
      <path d={FULL_STAR_PATH} fill="none" stroke="currentColor" strokeWidth={1} />
    </svg>
  );
}

interface StarRatingProps {
  /** 0-5, supports .5 increments (e.g. 3.5 renders 3 full + 1 half + 1 empty). */
  rating: number;
  max?: number;
}

/**
 * CONFIRMED (sync report, item 4): ReviewComponent.astro renders N full stars then
 * always exactly one half star regardless of the actual rating fraction, and no
 * "empty star" asset exists anywhere in the source — both are bugs/gaps in the
 * original, not intentional design. This component's proportional rendering
 * (e.g. 3.5 -> 3 full + 1 half + 1 empty) is the intended fix; EmptyStarIcon below
 * is a new outline asset added to make that possible, since nothing upstream defined one.
 */
export function StarRating({ rating, max = 5 }: StarRatingProps) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = max - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: full }, (_, i) => (
        <FullStarIcon key={`full-${i}`} />
      ))}
      {hasHalf ? <HalfStarIcon /> : null}
      {Array.from({ length: Math.max(empty, 0) }, (_, i) => (
        <EmptyStarIcon key={`empty-${i}`} />
      ))}
    </div>
  );
}
