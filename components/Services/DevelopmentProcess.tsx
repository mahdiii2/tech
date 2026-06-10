"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

type Step = {
  title: string;
  body: string;
  color: string;
};

export default function DevelopmentProcess() {
  const t = useTranslations("DevelopmentPage.process");
  const insights = useTranslations("DevelopmentPage.insights");
  const steps = (t.raw("steps") as Step[]) ?? [];
  const title = t("title");
  const description = t("description");

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const locale = useLocale();
  const isRtl = locale === "ar";
  const insightTags = (insights.raw("tags") as string[]) ?? [];

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
        color: step.color || "#365fd9",
      })),
    [steps]
  );

  const accentFor = (idx: number) =>
    idx >= 0 ? normalizedSteps[idx]?.color ?? "#365fd9" : "#d1d5db";

  const renderInsightsCard = (variant: "desktop" | "mobile") => {
    const isDesktopCard = variant === "desktop";
    const formLayout = isDesktopCard
      ? `${isRtl ? "flex-row-reverse" : "flex-row"} items-center gap-4`
      : "flex-col gap-3";
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#365ee2] via-[#3157c6] to-[#2745a7] p-8 text-white shadow-xl sm:p-10 ${
          isRtl ? "text-right" : "text-left"
        }`}
      >
        <span
          className="pointer-events-none absolute -left-10 -top-12 h-40 w-40 rounded-full bg-white/10"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -bottom-16 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-[#2c53d1] via-[#2344ad] to-[#1c358a] opacity-80"
          aria-hidden
        />
        <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
          {insights("title")}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-white/90">
          {insights("body")}
        </p>
        <div className={`mt-8 flex ${formLayout}`}>
          <Link
            href="/contact"
            className={`rounded-full bg-white px-6 py-3 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-white/90 ${
              isDesktopCard ? "min-w-[170px] text-center" : "w-full text-center"
            }`}
          >
            {insights("button")}
          </Link>
        </div>
        {isDesktopCard && (
          <div className={`mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3`}>
            {insightTags.map((tag, idx) => (
              <span
                key={tag + idx}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!normalizedSteps.length) return null;

  const displayIndex = isDesktop ? hoverIndex ?? -1 : 0;

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-700">
            {description}
          </p>
        </div>

        <div className="hidden w-full flex-col lg:flex">
          <div className="relative flex items-start pt-3 pb-3">
            {normalizedSteps.map((step, idx) => {
              const isActive = isDesktop ? idx === displayIndex : true;
              const circleColor = isActive ? step.color : "#d1d5db";
              const showNext = idx < normalizedSteps.length - 1;
              return (
                <div
                  key={step.title + idx}
                  className="relative flex w-full max-w-[20rem] flex-col items-start lg:min-w-63 xl:min-w-70"
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

          <div className="grid grid-cols-1 gap-6  text-base text-neutral-600 md:grid-cols-3 lg:grid-cols-4 ">
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

        <div className="mt-14 sm:mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              {insights("headline")}
            </h3>
          </div>
          <div className="mt-8 hidden lg:block">
            {renderInsightsCard("desktop")}
          </div>
          <div className="mt-8 lg:hidden">{renderInsightsCard("mobile")}</div>
        </div>
      </div>
    </section>
  );
}
