"use client";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

// Animated concentric circles
// Blue core stays; yellow + green rings expand & collapse in sequence:
// 1) Yellow expands in
// 2) Green expands in
// 3) Green collapses out
// 4) Yellow collapses out
// ...repeat

export default function AnimatedCircles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const t = useTranslations("ServicesPage.hero");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const logicalSize = 800;
    canvas.width = logicalSize * dpr;
    canvas.height = logicalSize * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.scale(dpr, dpr);

    const colors = {
      blue: "#b8c9ff", // dev-200
      yellow: "#e3f94c", // design-300
      green: "#99e3cc", // engagement-200
    };

    const centerX = logicalSize / 2;
    const centerY = logicalSize / 2;
    const blueRadius = 220;
    const yellowBaseRadius = 240;
    const greenBaseRadius = 280;
    const maxRingThickness = 40;

    const cycleDuration = 4000; // ms for full cycle

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const phaseProgress = (t: number, start: number, end: number) => {
      if (t < start || t > end) return 0;
      return (t - start) / (end - start);
    };

    let animationFrameId: number;
    const startTime = performance.now();

    const render = (timestamp: number) => {
      const elapsed = (timestamp - startTime) % cycleDuration;
      const t = elapsed / cycleDuration; // 0..1

      ctx.clearRect(0, 0, logicalSize, logicalSize);

      // --- Blue core (always visible) ---
      ctx.beginPath();
      ctx.arc(centerX, centerY, blueRadius, 0, Math.PI * 2);
      ctx.fillStyle = colors.blue;
      ctx.fill();

      // --- Yellow ring: expand then collapse ---
      let yellowScale: number;
      if (t <= 0.25) {
        // expand 0 → 1
        yellowScale = phaseProgress(t, 0, 0.25);
      } else if (t >= 0.75) {
        // collapse 1 → 0
        yellowScale = 1 - phaseProgress(t, 0.75, 1);
      } else {
        yellowScale = 1; // fully visible while green animates
      }

      if (yellowScale > 0.01) {
        const radius = lerp(
          yellowBaseRadius * 0.9,
          yellowBaseRadius,
          yellowScale
        );
        const thickness = lerp(0, maxRingThickness, yellowScale);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.lineWidth = thickness;
        ctx.strokeStyle = colors.yellow;
        ctx.stroke();
      }

      // --- Green ring: expand then collapse ---
      let greenScale = 0;
      if (t >= 0.25 && t <= 0.5) {
        // expand 0 → 1
        greenScale = phaseProgress(t, 0.25, 0.5);
      } else if (t > 0.5 && t <= 0.75) {
        // collapse 1 → 0
        greenScale = 1 - phaseProgress(t, 0.5, 0.75);
      } else {
        greenScale = 0;
      }

      if (greenScale > 0.01) {
        const radius = lerp(greenBaseRadius * 0.9, greenBaseRadius, greenScale);
        const thickness = lerp(0, maxRingThickness, greenScale);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.lineWidth = thickness;
        ctx.strokeStyle = colors.green;
        ctx.stroke();
      }
    };

    const loop = (timestamp: number) => {
      render(timestamp);
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full p-10 pb-0 mb-0 bg-white">
      <div className="relative flex items-center justify-center w-full max-w-[760px] aspect-square">
        <canvas ref={canvasRef} className="absolute inset-0" />
        <div className="relative z-10 flex max-w-[520px] flex-col items-center justify-center gap-4 px-8 text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-normal text-neutral-900 md:text-5xl">
            {t("titleLine1")} <span className="block">{t("titleLine2")}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
