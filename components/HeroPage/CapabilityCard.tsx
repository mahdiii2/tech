"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Brick = {
  width: number;
  height: number;
  color: string;
  rounded?: number;
};

export type CapabilityCardTheme = {
  shellBg: string;
  artworkBg: string;
  panelBg: string;
  titleColor: string;
  bodyColor: string;
  subtleColor: string;
  shapes: Brick[][];
};

const DEFAULT_THEME: CapabilityCardTheme = {
  shellBg: "#eef4ff",
  artworkBg: "linear-gradient(135deg,#f9fbff,#dfe9ff)",
  panelBg: "#3973ff",
  titleColor: "#ffffff",
  bodyColor: "rgba(255,255,255,0.92)",
  subtleColor: "rgba(255,255,255,0.75)",
  shapes: [
    [
      { width: 96, height: 24, color: "#bdd7ff" },
      { width: 64, height: 24, color: "#d7e6ff" },
    ],
    [
      { width: 72, height: 52, color: "#1e40af" },
      { width: 48, height: 52, color: "#2563eb" },
    ],
    [{ width: 88, height: 28, color: "#f5f7ff" }],
  ],
};

type CapabilityCardProps = {
  title: string;
  body?: React.ReactNode;
  eyebrow?: string;
  className?: string;
  theme?: Partial<CapabilityCardTheme>;
  artwork?: React.ReactNode;
};

const mergeTheme = (theme?: Partial<CapabilityCardTheme>): CapabilityCardTheme => ({
  ...DEFAULT_THEME,
  ...theme,
  shapes: theme?.shapes ?? DEFAULT_THEME.shapes,
});

export function CapabilityCard({
  title,
  body,
  eyebrow,
  className,
  theme,
  artwork,
}: CapabilityCardProps) {
  const palette = mergeTheme(theme);

  return (
    <article
      className={cn(
        "rounded-[32px] border border-black/5 bg-white shadow-[0_30px_60px_rgba(15,23,42,0.1)]",
        className
      )}
      style={{ background: palette.shellBg }}
    >
      <div className="grid items-stretch md:grid-cols-[minmax(0,220px)_minmax(0,1fr)]">
        <div
          className="flex min-h-[220px] items-center justify-center p-10"
          style={{ background: palette.artworkBg }}
        >
          {artwork ? (
            artwork
          ) : (
            <div className="flex flex-col gap-4">
              {palette.shapes.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                  {row.map((brick, brickIndex) => (
                    <span
                      key={`${rowIndex}-${brickIndex}`}
                      className="rounded-2xl shadow-inner"
                      style={{
                        width: brick.width,
                        height: brick.height,
                        borderRadius: brick.rounded ?? 16,
                        backgroundColor: brick.color,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col rounded-[32px] rounded-l-none p-8 text-base leading-relaxed",
            body ? "gap-4" : "items-center justify-center text-center"
          )}
          style={{ background: palette.panelBg, color: palette.bodyColor }}
        >
          {eyebrow ? (
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: palette.subtleColor }}
            >
              {eyebrow}
            </span>
          ) : null}
          <h3 className="text-2xl font-semibold" style={{ color: palette.titleColor }}>
            {title}
          </h3>
          {body ? <div className="space-y-4">{body}</div> : null}
        </div>
      </div>
    </article>
  );
}
