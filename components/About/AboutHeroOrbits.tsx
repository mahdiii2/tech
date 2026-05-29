"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type AboutHeroOrbitsProps = {
  title: string;
  bodyLines: string[];
  ctaLabel: string;
  ctaHref: string;
  servicesLabel: string;
  servicesHref: string;
  clientsLabel: string;
  clientsHref: string;
};

type Phase = "initial" | "converge" | "split" | "drop";

type CircleConfig = {
  color: string;
  size: number;
};

type Viewport = "mobile" | "tablet" | "desktop";

const CIRCLES: CircleConfig[] = [
  { color: "#1f7cff", size: 100 },
  { color: "#4ec3a5", size: 100 },
  { color: "#d2e24d", size: 100 },
  { color: "#a48dfc", size: 100 },
];

const PHASE_TIMINGS = [1000, 1000, 1000, 800];

const DESKTOP_POSITIONS = {
  initial: [
    { x: "16%", y: "38%" },
    { x: "18%", y: "70%" },
    { x: "22%", y: "24%" },
    { x: "78%", y: "48%" },
  ],
  split: [
    { x: "30%", y: "46%" },
    { x: "34%", y: "64%" },
    { x: "66%", y: "42%" },
    { x: "70%", y: "62%" },
  ],
};

const TABLET_POSITIONS = {
  initial: [
    { x: "-15%", y: "14%" },
    { x: "-12%", y: "72%" },
    { x: "110%", y: "18%" },
    { x: "108%", y: "74%" },
  ],
  split: [
    { x: "-15%", y: "14%" },
    { x: "-12%", y: "72%" },
    { x: "110%", y: "18%" },
    { x: "108%", y: "74%" },
  ],
};

const MOBILE_POSITIONS = {
  initial: [
    { x: "-18%", y: "12%" },
    { x: "-16%", y: "74%" },
    { x: "118%", y: "16%" },
    { x: "116%", y: "78%" },
  ],
  split: [
    { x: "-18%", y: "12%" },
    { x: "-16%", y: "74%" },
    { x: "118%", y: "16%" },
    { x: "116%", y: "78%" },
  ],
};

const CENTER = { x: "50%", y: "50%" };

function BackgroundCircles() {
  const [phase, setPhase] = useState<Phase>("initial");
  const [viewport, setViewport] = useState<Viewport>("desktop");

  useEffect(() => {
    const computeViewport = () => {
      const w = window.innerWidth;
      if (w < 768) return "mobile";
      if (w < 1024) return "tablet";
      return "desktop";
    };
    const update = () => setViewport(computeViewport());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const currentPositions = useMemo(() => {
    if (viewport === "mobile") return MOBILE_POSITIONS;
    if (viewport === "tablet") return TABLET_POSITIONS;
    return DESKTOP_POSITIONS;
  }, [viewport]);

  const isAnimated = viewport === "desktop";
  const basePositions = isAnimated
    ? currentPositions.initial
    : currentPositions.split; // mobile/tablet: show split layout only

  const targets = useMemo(() => {
    if (!isAnimated) {
      return currentPositions.split.map((pos) => ({ ...pos, opacity: 1 }));
    }
    if (phase === "converge") {
      return CIRCLES.map(() => ({ ...CENTER, opacity: 1 }));
    }
    if (phase === "split") {
      return currentPositions.split.map((pos) => ({ ...pos, opacity: 1 }));
    }
    if (phase === "drop") {
      return currentPositions.split.map((pos) => ({
        ...pos,
        y: "115%",
        opacity: 0,
      }));
    }
    return currentPositions.initial.map((pos) => ({ ...pos, opacity: 1 }));
  }, [phase, currentPositions, isAnimated]);

  useEffect(() => {
    let step = 0;
    const timers: number[] = [];

    if (!isAnimated) {
      return () => {
        timers.forEach((id) => window.clearTimeout(id));
      };
    }

    const schedule = () => {
      const phases: Phase[] = ["initial", "converge", "split", "drop"];
      setPhase(phases[step]);
      if (step < PHASE_TIMINGS.length - 1) {
        const id = window.setTimeout(() => {
          step += 1;
          schedule();
        }, PHASE_TIMINGS[step]);
        timers.push(id);
      }
    };

    schedule();
    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [isAnimated, currentPositions]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        {CIRCLES.map((circle, index) => {
          const staticPos = {
            left: basePositions[index].x,
            top: basePositions[index].y,
            opacity: 1,
            scale: 1,
          };
          const animatedPos = {
            left: targets[index].x,
            top: targets[index].y,
            opacity: targets[index].opacity,
            scale: 1,
          };

          return (
            <motion.div
              key={circle.color + index}
              initial={isAnimated ? { ...staticPos, opacity: 0.9, scale: 0.9 } : staticPos}
              animate={isAnimated ? animatedPos : staticPos}
              transition={
                isAnimated
                  ? { type: "spring", stiffness: 260, damping: 20, duration: 0.8 }
                  : { duration: 0 }
              }
              className="absolute"
              style={{
                position: "absolute",
                width: circle.size,
                height: circle.size,
                borderRadius: "9999px",
                backgroundColor: circle.color,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function AboutHeroOrbits({
  title,
  bodyLines,
  servicesLabel,
  servicesHref,
  clientsLabel,
  clientsHref,
}: AboutHeroOrbitsProps) {
  const circleButtonClass =
    "flex items-center justify-center rounded-full bg-neutral-900 text-white text-xs font-semibold text-center transition-transform duration-200 hover:scale-95";

  return (
    <section className="relative isolate overflow-hidden rounded-[32px] border border-neutral-200 bg-white text-neutral-900 shadow-[0_14px_50px_rgba(0,0,0,0.08)] min-h-[520px] sm:min-h-[480px] flex items-center">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-100/40 via-white to-neutral-50/50" />
      <BackgroundCircles />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 py-14 sm:px-10 lg:py-20">
        <div className="grid items-center gap-10 text-center lg:grid-cols-[auto_1fr_auto] lg:text-center">
          <Link
            href={servicesHref}
            className={`${circleButtonClass} hidden h-28 w-28 lg:flex`}
          >
            <span className="leading-tight">{servicesLabel}</span>
          </Link>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <div className="text-neutral-700 space-y-1 text-base">
              {bodyLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <Link
            href={clientsHref}
            className={`${circleButtonClass} hidden h-28 w-28 lg:flex`}
          >
            <span className="leading-tight">{clientsLabel}</span>
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-between lg:hidden">
          <Link
            href={servicesHref}
            className={`${circleButtonClass} h-24 w-24`}
          >
            <span className="leading-tight">{servicesLabel}</span>
          </Link>
          <Link href={clientsHref} className={`${circleButtonClass} h-24 w-24`}>
            <span className="leading-tight">{clientsLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/*
// --- Previous orbiting canvas hero retained for reference ---
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

type Node = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
};

const PALETTE = [
  { color: "rgba(101, 195, 255, 0.78)", radius: 150 },
  { color: "rgba(252, 224, 110, 0.75)", radius: 120 },
  { color: "rgba(144, 228, 195, 0.75)", radius: 140 },
  { color: "rgba(132, 143, 255, 0.78)", radius: 160 },
] as const;

function createNodes(width: number, height: number): Node[] {
  return PALETTE.map((preset) => {
    const speed = 22 + Math.random() * 16;
    const directionX = Math.random() > 0.5 ? 1 : -1;
    const directionY = Math.random() > 0.5 ? 1 : -1;

    return {
      x: preset.radius + Math.random() * Math.max(1, width - preset.radius * 2),
      y:
        preset.radius + Math.random() * Math.max(1, height - preset.radius * 2),
      radius: preset.radius,
      vx: speed * directionX,
      vy: speed * directionY,
      color: preset.color,
    };
  });
}

function OrbitingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gradientRef = useRef<CanvasGradient | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const sizeRef = useRef({ width: 960, height: 560 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const MIN_HEIGHT = 480;
    let raf = 0;
    let lastTime = performance.now();

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();
      const width = rect?.width ?? window.innerWidth;
      const height = Math.max(rect?.height ?? MIN_HEIGHT, MIN_HEIGHT);

      sizeRef.current = { width, height };

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      gradientRef.current = ctx.createLinearGradient(
        0,
        height * 0.1,
        width,
        height * 0.9
      );
      gradientRef.current.addColorStop(0, "rgba(14, 19, 45, 0.8)");
      gradientRef.current.addColorStop(1, "rgba(6, 8, 24, 0.95)");

      nodesRef.current = createNodes(width, height);
    };

    const drawConnections = (nodes: Node[]) => {
      const linkDistance = 420;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < linkDistance) {
            const alpha = Math.max(0, 1 - dist / linkDistance) * 0.45;
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawNodes = (nodes: Node[]) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      nodes.forEach((node) => {
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          node.radius * 0.25,
          node.x,
          node.y,
          node.radius * 1.1
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, "rgba(255,255,255,0.04)");

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 70;
        ctx.shadowColor = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    };

    const step = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const { width, height } = sizeRef.current;
      const gradient = gradientRef.current;
      const nodes = nodesRef.current;

      ctx.clearRect(0, 0, width, height);
      if (gradient) {
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      nodes.forEach((node) => {
        node.x += node.vx * dt;
        node.y += node.vy * dt;

        if (node.x < node.radius || node.x > width - node.radius) {
          node.vx *= -1;
        }
        if (node.y < node.radius || node.y > height - node.radius) {
          node.vy *= -1;
        }
      });

      drawConnections(nodes);
      drawNodes(nodes);

      raf = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.05),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#050712]/80" />
    </div>
  );
}

export function AboutHeroOrbitsLegacy({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
}: AboutHeroOrbitsProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-[32px] border border-white/5 bg-[#050712] text-white shadow-[0_20px_80px_rgba(5,7,18,0.45)] min-h-[520px]">
      <OrbitingCanvas />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
            {eyebrow}
          </span>
          <span className="h-px flex-1 min-w-[120px] bg-white/10" aria-hidden />
        </div>

        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-white/80 md:text-xl">{body}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="rounded-full bg-white px-6 py-5 text-sm font-semibold text-neutral-900 hover:bg-white/90"
          >
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>

          {secondaryCta ? (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 bg-white/10 px-6 py-5 text-sm font-semibold text-white hover:bg-white/20"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
*/
