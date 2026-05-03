/**
 * Bespoke monoline icon set for Absolute PT South Bay.
 * Single style: 1.5px stroke, round caps/joins, geometric, 24x24 grid.
 * Uses currentColor so they inherit text color from the surrounding context.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ..rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {..rest}
    >
      {children}
    </svg>
  );
}

/* ============= 1. Spine / Back ============= */
export const SpineIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M12 3v18" />
    <path d="M9 5.5h6" />
    <path d="M8.5 9h7" />
    <path d="M8 12.5h8" />
    <path d="M8.5 16h7" />
    <path d="M9 19h6" />
  </Base>
);

/* ============= 2. Knee ============= */
export const KneeIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M9 3v6l-3 5v7" />
    <path d="M15 3v6l3 5v7" />
    <circle cx="12" cy="11.5" r="3" />
  </Base>
);

/* ============= 3. Shoulder ============= */
export const ShoulderIcon = (p: IconProps) => (
  <Base {..p}>
    <circle cx="12" cy="6.5" r="2.5" />
    <path d="M5 14c1.5-3 4-5 7-5s5.5 2 7 5" />
    <path d="M5 14v6" />
    <path d="M19 14v6" />
  </Base>
);

/* ============= 4. Hip ============= */
export const HipIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M5 6c0 4 3 7 7 7s7-3 7-7" />
    <circle cx="8" cy="6" r="1.5" />
    <circle cx="16" cy="6" r="1.5" />
    <path d="M8 13v8" />
    <path d="M16 13v8" />
  </Base>
);

/* ============= 5. Foot / Ankle ============= */
export const FootIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M7 4v8c0 4 2 6 5 6s5-2 5-6V9" />
    <circle cx="9.5" cy="6" r="0.6" fill="currentColor" />
    <circle cx="12" cy="5.5" r="0.6" fill="currentColor" />
    <circle cx="14.5" cy="6" r="0.6" fill="currentColor" />
    <path d="M7 14h10" />
  </Base>
);

/* ============= 6. Recovery (arrow circling) ============= */
export const RecoveryIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M20 12a8 8 0 1 1-2.5-5.8" />
    <path d="M20 4v3.5h-3.5" />
  </Base>
);

/* ============= 7. Strength (kettlebell) ============= */
export const StrengthIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M9 5.5a3 3 0 0 1 6 0v1.5" />
    <path d="M8 7h8" />
    <path d="M7.5 9c-1.2 1.5-2 3.5-2 5.5a6.5 6.5 0 0 0 13 0c0-2-.8-4-2-5.5z" />
  </Base>
);

/* ============= 8. Mobility (figure stretching) ============= */
export const MobilityIcon = (p: IconProps) => (
  <Base {..p}>
    <circle cx="9" cy="4.5" r="1.5" />
    <path d="M9 6v5l-3 4" />
    <path d="M9 11l4-2 6-1" />
    <path d="M9 11v4l3 5" />
  </Base>
);

/* ============= 9. Nutrition (leaf) ============= */
export const NutritionIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M19 4c0 8-5 13-13 13 0-8 5-13 13-13z" />
    <path d="M5 19c2.5-3 5-5.5 9-8" />
  </Base>
);

/* ============= 10. One-on-one care (two figures) ============= */
export const CareIcon = (p: IconProps) => (
  <Base {..p}>
    <circle cx="8" cy="6" r="2" />
    <circle cx="16" cy="6" r="2" />
    <path d="M4 20c0-3 2-5 4-5s4 2 4 5" />
    <path d="M12 20c0-3 2-5 4-5s4 2 4 5" />
  </Base>
);

/* ============= 11. Concierge (offering hand) ============= */
export const ConciergeIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M5 16c0-1 .5-2 2-2 1 0 2 1 4 1l5-2.5c.7-.4 1.5 0 1.5 1 0 .6-.3 1.1-.9 1.4l-5.6 3c-.6.3-1.3.4-2 .4H6c-.5 0-1-.5-1-1v-1.3z" />
    <circle cx="12" cy="6" r="3" />
    <path d="M11 6h2" />
  </Base>
);

/* ============= 12. Performance (upward chart arrow) ============= */
export const PerformanceIcon = (p: IconProps) => (
  <Base {..p}>
    <path d="M4 19h16" />
    <path d="M4 16l5-5 3 3 7-8" />
    <path d="M19 11V6h-5" />
  </Base>
);

/* Convenience export. Useful for typed maps */
export const Icons = {
  spine: SpineIcon,
  knee: KneeIcon,
  shoulder: ShoulderIcon,
  hip: HipIcon,
  foot: FootIcon,
  recovery: RecoveryIcon,
  strength: StrengthIcon,
  mobility: MobilityIcon,
  nutrition: NutritionIcon,
  care: CareIcon,
  concierge: ConciergeIcon,
  performance: PerformanceIcon,
} as const;
export type IconName = keyof typeof Icons;
