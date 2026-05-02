/**
 * Subtle topographic dot grid background, used sparingly behind
 * testimonial sections and the about-page hero to add depth without noise.
 *
 * Layered absolutely behind its parent (parent must be position: relative).
 * Tone "primary" = green dots on cream. Tone "light" = cream dots on dark.
 */
type Props = {
  tone?: "primary" | "light";
  /** 0.03–0.05 recommended */
  opacity?: number;
  className?: string;
};

export function BackgroundPattern({
  tone = "primary",
  opacity = 0.05,
  className = "",
}: Props) {
  const cls = tone === "primary" ? "pattern-topo" : "pattern-topo-light";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${cls} ${className}`}
      style={{ opacity }}
    />
  );
}
