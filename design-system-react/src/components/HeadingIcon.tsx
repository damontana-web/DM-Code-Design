import type { CSSProperties } from "react";

export type HeadingIconLayout = "inline" | "flexAlign" | "centered";

interface HeadingIconProps {
  /** SVG path `d` attribute(s) — pass an array for multi-path icons. */
  d: string | string[];
  /** Height and width, always square (viewBox is always "0 0 24 24"). */
  size?: string;
  /** Omit to inherit currentColor from the surrounding heading text. */
  color?: string;
  /**
   * "inline" (default): margin-right, vertical-align middle — icon sits before running text.
   * "flexAlign": no margin, for use inside a flex row (most section headings).
   * "centered": its own centered block above the text (pricing cards, CTA module).
   */
  layout?: HeadingIconLayout;
}

/** Shared brand icon renderer — every icon in the system shares this 24x24 canvas. See DESIGN_SYSTEM.md §4. */
export function HeadingIcon({ d, size = "1em", color, layout = "inline" }: HeadingIconProps) {
  const paths = Array.isArray(d) ? d : [d];

  const positionStyle: CSSProperties =
    layout === "centered"
      ? { display: "block", margin: "0 auto 0.5rem", flexShrink: 0 }
      : layout === "flexAlign"
        ? { flexShrink: 0 }
        : { marginRight: "0.5rem", verticalAlign: "middle", flexShrink: 0 };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ height: size, width: size, color, ...positionStyle }}
    >
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}
