"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#17ac87", "#365fd9", "#e3f94c"];

type Circle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: string;
};

function createCircle(width: number, height: number): Circle {
  const radius = Math.random() * 40 + 90; // big & clean
  return {
    x: Math.random() * width,
    y: height + radius + Math.random() * height,
    radius,
    speed: Math.random() * 2 + 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

export default function FloatingCircles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const maskCanvas = maskRef.current!;
    const ctx = canvas.getContext("2d")!;
    const maskCtx = maskCanvas.getContext("2d")!;

    let circles: Circle[] = [];
    const COUNT = 4;

    const resize = () => {
      const parent = canvas.parentElement!;
      const w = parent.clientWidth;
      const h = 300;

      canvas.width = w;
      canvas.height = h;

      maskCanvas.width = w;
      maskCanvas.height = h;

      circles = Array.from({ length: COUNT }, () => createCircle(w, h));

      // Draw fade mask ONCE
      maskCtx.clearRect(0, 0, w, h);
      const g = maskCtx.createLinearGradient(0, h * 0.5, 0, h);
      g.addColorStop(0, "rgba(255,255,255,0)");
      g.addColorStop(1, "rgba(255,255,255,1)");

      maskCtx.fillStyle = g;
      maskCtx.fillRect(0, h * 0.5, w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, w, h);

      // Draw ALL circles solid
      for (const c of circles) {
        ctx.fillStyle = c.color;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fill();

        c.y -= c.speed;

        if (c.y + c.radius < 0) {
          Object.assign(c, createCircle(w, h));
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <canvas
        ref={maskRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
