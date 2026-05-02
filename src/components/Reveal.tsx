import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Refined scroll-driven reveal.
 * - Triggers at 70% viewport threshold (element is 30% into view)
 * - 24px upward translate + opacity 0 → 1
 * - 600ms ease-out cubic-bezier(0.22, 1, 0.36, 1)
 * - Respects prefers-reduced-motion (renders instantly, no transform)
 *
 * Use <RevealGroup> to stagger children by 80ms.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span" | "p" | "h2" | "h3";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </Tag>
  );
}

/**
 * Stagger children by 80ms when revealing a group (cards, list items).
 * Wrap a list and let each child be a <RevealItem>.
 */
export function RevealGroup({
  children,
  className = "",
  staggerMs = 80,
}: {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerMs / 1000 },
    },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
