/**
 * Editorial bracket accent — wraps a key phrase in headings to create
 * the brand's small visual signature.
 *
 *   <h1>Expert care. <BracketAccent>Your home.</BracketAccent> Real results.</h1>
 *
 * The brackets render as small SVG marks in the warm accent color so they
 * read as a deliberate flourish, not Unicode characters.
 */
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** override color (defaults to var(--color-accent)) */
  color?: string;
  className?: string;
};

export function BracketAccent({ children, color, className = "" }: Props) {
  const stroke = color ?? "var(--color-accent)";
  return (
    <span className={`relative inline-flex items-baseline gap-[0.28em] ${className}`}>
      <Bracket side="left" color={stroke} />
      <span>{children}</span>
      <Bracket side="right" color={stroke} />
    </span>
  );
}

function Bracket({ side, color }: { side: "left" | "right"; color: string }) {
  // Each bracket is rendered at 0.6em tall so it scales with the heading size
  const d = side === "left" ? "M9 1 L3 1 L3 17 L9 17" : "M3 1 L9 1 L9 17 L3 17";
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 18"
      width="0.42em"
      height="0.7em"
      fill="none"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: "none", display: "inline-block", transform: "translateY(-0.05em)" }}
    >
      <path d={d} />
    </svg>
  );
}
