"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
type Step = {
  title: string;
  body: string;
  color: string;
};

type ProcessTimelineProps = {
  namespace?: string;
  defaultColor?: string;
  defaultActiveIndex?: number;
};

export default function ProcessTimeline({
  namespace = "ServicesPage.process",
  defaultColor = "#365fd9",
  defaultActiveIndex = 0,
}: ProcessTimelineProps) {
  const t = useTranslations(namespace);
  const steps = (t.raw("steps") as Step[]) ?? [];
  const title = t("title");
  const description = t("description");

  const [activeIndex, _setActiveIndex] = useState(0); // unused legacy
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const locale = useLocale();
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const normalizedSteps = useMemo(
    () =>
      steps.map((step) => ({
        ...step,
        color: step.color || defaultColor,
      })),
    [steps, defaultColor]
  );

  const accentFor = (idx: number) =>
    idx >= 0 ? normalizedSteps[idx]?.color ?? defaultColor : "#d1d5db";

  if (!normalizedSteps.length) return null;

  const clampedFallback = Math.min(
    Math.max(defaultActiveIndex, 0),
    normalizedSteps.length - 1
  );
  const displayIndex = isDesktop
    ? hoverIndex ?? clampedFallback
    : clampedFallback;

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-700">
            {description}
          </p>
        </div>

        <div className="hidden w-full flex-col lg:flex">
          <div className="relative flex items-start justify-between pt-3 pb-3">
            {normalizedSteps.map((step, idx) => {
              const isActive = isDesktop ? idx === displayIndex : true;
              const circleColor = isActive ? step.color : "#d1d5db";
              const showNext = idx < normalizedSteps.length - 1;
              return (
                <div
                  key={step.title + idx}
                  className="relative flex w-full max-w-[18rem] flex-col items-start text-left "
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onFocus={() => setHoverIndex(idx)}
                  onBlur={() => setHoverIndex(null)}
                >
                  <button
                    type="button"
                    className={`mb-2 text-lg font-semibold transition ${
                      isActive ? "text-neutral-900" : "text-neutral-400"
                    }`}
                    style={{ color: isActive ? step.color : undefined }}
                    aria-pressed={isActive}
                  >
                    {step.title}
                  </button>
                  <div className="relative flex w-full items-center">
                    <span
                      className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white transition"
                      style={{ borderColor: circleColor }}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full transition"
                        style={{
                          backgroundColor: isActive ? circleColor : "#e5e7eb",
                        }}
                      />
                    </span>
                    <span className="relative block h-[2px] flex-1 rounded-full bg-neutral-300">
                      <span
                        className="absolute left-0 top-0 h-full rounded-full transition"
                        style={{
                          width: "100%",
                          backgroundColor: isActive
                            ? circleColor
                            : "transparent",
                        }}
                      />
                    </span>
                    {!showNext && (
                      <span className="relative block h-[2px] w-4 rounded-full bg-neutral-300" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 text-base text-neutral-600 md:grid-cols-3 lg:grid-cols-4">
            {normalizedSteps.map((step, idx) => {
              const isActive = isDesktop ? idx === displayIndex : true;
              return (
                <div
                  key={step.title + idx}
                  className={`${
                    locale === "ar" ? "text-right" : "text-left"
                  } transition ${
                    isActive ? "text-neutral-800" : "text-neutral-400"
                  }`}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onFocus={() => setHoverIndex(idx)}
                  onBlur={() => setHoverIndex(null)}
                >
                  <p className="leading-relaxed">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 lg:hidden">
          <div className="relative">
            <div
              className={
                locale === "ar"
                  ? "absolute right-[-15px] top-3 h-[calc(100%-16px)] border-l"
                  : "absolute left-6 top-3 h-[calc(100%-16px)] border-l"
              }
              style={{ borderColor: accentFor(0) }}
            />
            <div className="flex flex-col gap-8 pl-10">
              {normalizedSteps.map((step, idx) => (
                <div key={step.title + idx} className="relative">
                  <span
                    className={
                      locale === "ar"
                        ? "absolute right-[-25px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white"
                        : "absolute left-[-26px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white"
                    }
                    style={{ borderColor: step.color }}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                  </span>
                  <h3
                    className="mb-2 text-lg font-semibold text-neutral-900"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-neutral-800">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
