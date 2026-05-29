"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type FloatCircle = {
  size: number;
  style: CSSProperties;
  duration: number;
  dx: number;
  dy: number;
  hideOnMobile?: boolean;
};

const CIRCLES: FloatCircle[] = [
  {
    size: 360,
    style: { left: "-10rem", bottom: "-7.5rem" },
    duration: 9,
    dx: 24,
    dy: -28,
    hideOnMobile: true,
  },
  {
    size: 340,
    style: { right: "-9rem", top: "7.5rem" },
    duration: 11,
    dx: -26,
    dy: 22,
    hideOnMobile: true,
  },
  {
    size: 160,
    style: { left: "12%", top: "2.5rem" },
    duration: 7,
    dx: 16,
    dy: 20,
  },
  {
    size: 140,
    style: { left: "20%", bottom: "7rem" },
    duration: 8,
    dx: -18,
    dy: -16,
    hideOnMobile: true,
  },
  {
    size: 140,
    style: { right: "18%", bottom: "5.5rem" },
    duration: 10,
    dx: 18,
    dy: -22,
  },
  {
    size: 140,
    style: { left: "50%", top: "-4rem", marginLeft: -70 },
    duration: 9,
    dx: 0,
    dy: 24,
    hideOnMobile: true,
  },
];

type Props = {
  children: ReactNode;
  /** A CSS color (e.g. "var(--dev-500)") used for the floating bubbles. */
  color?: string;
};

export function AnimatedHeroBackground({
  children,
  color = "var(--dev-500)",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {CIRCLES.map((circle, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${
              circle.hideOnMobile ? "hidden md:block" : ""
            }`}
            style={{
              width: circle.size,
              height: circle.size,
              backgroundColor: color,
              ...circle.style,
            }}
            animate={{
              x: [0, circle.dx, 0],
              y: [0, circle.dy, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}
