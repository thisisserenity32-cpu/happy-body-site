/**
 * Three section dividers in the brand palette.
 * Each is a full-width SVG that sits between sections.
 *
 * <SectionDivider variant="curve"  fillTop="cream" fillBottom="primary" />
 * <SectionDivider variant="angle"  fillTop="cream" fillBottom="primary" />
 * <SectionDivider variant="topo"   tone="primary" /> // dotted topographic line motif
 */

type FillToken = "cream" | "cream-deep" | "primary" | "card";

const tokenToVar: Record<FillToken, string> = {
  cream: "var(--cream)",
  "cream-deep": "var(--cream-deep)",
  primary: "var(--primary)",
  card: "var(--card)",
};

type CurveProps = {
  variant: "curve";
  fillTop: FillToken;
  fillBottom: FillToken;
  height?: number;
  className?: string;
};
type AngleProps = {
  variant: "angle";
  fillTop: FillToken;
  fillBottom: FillToken;
  height?: number;
  className?: string;
};
type TopoProps = {
  variant: "topo";
  tone?: FillToken;
  height?: number;
  className?: string;
};
type Props = CurveProps | AngleProps | TopoProps;

export function SectionDivider(props: Props) {
  if (props.variant === "curve") {
    const h = props.height ?? 80;
    return (
      <div
        aria-hidden
        className={props.className}
        style={{ background: tokenToVar[props.fillTop], lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 80"
          width="100%"
          height={h}
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,40 C240,80 480,0 720,30 C960,60 1200,80 1440,30 L1440,80 L0,80 Z"
            fill={tokenToVar[props.fillBottom]}
          />
        </svg>
      </div>
    );
  }
  if (props.variant === "angle") {
    const h = props.height ?? 64;
    return (
      <div
        aria-hidden
        className={props.className}
        style={{ background: tokenToVar[props.fillTop], lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 64"
          width="100%"
          height={h}
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path d="M0,64 L1440,0 L1440,64 Z" fill={tokenToVar[props.fillBottom]} />
        </svg>
      </div>
    );
  }
  // topo. A dotted topographic line motif used as a horizontal break inside a section
  const tone = props.tone ?? "primary";
  const h = props.height ?? 28;
  const stroke = tokenToVar[tone];
  return (
    <div
      aria-hidden
      className={props.className}
      style={{ lineHeight: 0, opacity: 0.35 }}
    >
      <svg
        viewBox="0 0 1440 28"
        width="100%"
        height={h}
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <path
          d="M0,14 C200,4 360,24 560,14 C760,4 920,24 1120,14 C1280,6 1360,18 1440,14"
          fill="none"
          stroke={stroke}
          strokeWidth={1.25}
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
