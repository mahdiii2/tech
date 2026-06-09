"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

import { DevelopDesignEngageCanvas } from "@/components/HeroPage/DevDesEngCanvas";
import { BackgroundCircles } from "./BackgroundCircle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type VisionContent = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
  chips?: string[];
};

type HomeHeroSequenceProps = {
  vision: VisionContent;
  animationDurationMs?: number;
};

export function HomeHeroSequence({
  vision,
  animationDurationMs = 4800,
}: HomeHeroSequenceProps) {
  const [showVision, setShowVision] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);
  const fadeDurationMs = 700;

  useEffect(() => {
    const showTimeout = window.setTimeout(
      () => setShowVision(true),
      animationDurationMs
    );
    const hideTimeout = window.setTimeout(
      () => setHideAnimation(true),
      animationDurationMs + fadeDurationMs
    );
    return () => {
      window.clearTimeout(showTimeout);
      window.clearTimeout(hideTimeout);
    };
  }, [animationDurationMs, fadeDurationMs]);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-24 sm:pt-32 sm:pb-16">
      <BackgroundCircles />
      <div className="relative z-10 grid w-full place-items-center">
        {!hideAnimation && (
          <div
            className={cn(
              "col-start-1 row-start-1 transition-all duration-700 ease-out",
              showVision
                ? "pointer-events-none opacity-0 scale-95"
                : "opacity-100 scale-100"
            )}
          >
            <DevelopDesignEngageCanvas />
          </div>
        )}
        <div
          className={cn(
            "col-start-1 row-start-1 transition-all duration-700 ease-out",
            showVision
              ? "opacity-100 scale-100"
              : "pointer-events-none opacity-0 scale-95"
          )}
        >
          <VisionCallout {...vision} />
        </div>
      </div>
    </div>
  );
}

function VisionCallout({
  heading,
  body,
  ctaLabel,
  ctaHref = "/schedule",
  chips,
}: VisionContent) {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center text-center">
      <div className="relative flex w-full items-center justify-center px-4 py-16 sm:px-10 sm:py-20">
        <div
          className="absolute h-[420px] w-[420px] rounded-full opacity-25 sm:h-[560px] sm:w-[560px]"
          style={{ backgroundColor: "var(--dev-300)" }}
          aria-hidden="true"
        />
        <div className="relative flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 sm:px-10">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {heading}
          </h1>
          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
            {body}
          </p>
          {chips && chips.length > 0 ? (
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-neutral-700 backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
