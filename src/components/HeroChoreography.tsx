import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Choreographed hero entrance:
 *   - eyebrow      fades in from below     200ms / 400ms
 *   - headline     word-by-word stagger    400ms base / 60ms per word
 *   - sub-headline fade in                 900ms / 500ms
 *   - CTAs         scale 0.96→1.0          1100ms
 *   - image        scale 1.05→1.0 fade     0ms / 700ms
 */

export function HeroEyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Render headline text with per-word entrance animation.
 * Pass an array of "lines"; each line is rendered as a block with words staggered together
 * across the whole headline (so the stagger feels like one phrase, not three).
 */
export function HeroHeadline({
  lines,
  className = "",
  baseDelay = 400,
  perWordMs = 60,
  wordClassNames,
}: {
  lines: ReactNode[][];
  className?: string;
  baseDelay?: number;
  perWordMs?: number;
  /** optional per-line className override */
  wordClassNames?: (lineIndex: number) => string | undefined;
}) {
  const reduce = useReducedMotion();
  let wordIndex = 0;
  if (reduce) {
    return (
      <h1 className={className}>
        {lines.map((line, li) => (
          <span key={li} className={wordClassNames?.(li)} style={{ display: "block" }}>
            {line}
          </span>
        ))}
      </h1>
    );
  }
  return (
    <h1 className={className} style={{ overflow: "hidden" }}>
      {lines.map((line, li) => (
        <span
          key={li}
          className={wordClassNames?.(li)}
          style={{ display: "block", overflow: "hidden" }}
        >
          {line.map((word, wi) => {
            const delay = (baseDelay + wordIndex * perWordMs) / 1000;
            wordIndex += 1;
            return (
              <motion.span
                key={`${li}-${wi}`}
                style={{ display: "inline-block", whiteSpace: "pre" }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay }}
              >
                {word}
                {wi < line.length - 1 ? " " : ""}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export function HeroSub({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <p className={className}>{children}</p>;
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.p>
  );
}

export function HeroCTAs({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Hero image with entrance (scale 1.05 → 1.0, fade) and subtle parallax.
 * Parallax disabled on mobile and when prefers-reduced-motion is set.
 */
export function HeroImage({
  src,
  alt,
  className = "",
  style,
  parallax = true,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  parallax?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // 0.3 ratio: image moves at 30% of scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ overflow: "hidden", ...style }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          willChange: "transform",
          // Parallax: only desktop + motion allowed
          y: !reduce && parallax ? y : 0,
        }}
        className="hero-img-parallax"
        initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
      />
      {/* Disable parallax y-transform on mobile for performance / motion sickness */}
      <style>{`
        @media (max-width: 767px) {
          .hero-img-parallax { transform: none !important; }
        }
      `}</style>
    </div>
  );
}
