"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
};

type Props = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating in. Use small increments to stagger lists. */
  delay?: number;
  direction?: Direction;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: Props) {
  const offset = OFFSETS[direction];
  const reduceMotion = useReducedMotion();
  const initialOffset = reduceMotion
    ? { x: 0, y: 0 }
    : { x: offset.x * 0.25, y: offset.y * 0.25 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
