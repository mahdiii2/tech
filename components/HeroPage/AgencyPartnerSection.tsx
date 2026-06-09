"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import HeroAnimation from "@/components/AnimationVideos.tsx/AnimationVideo";
import codeAnimation from "@/public/lottie/Code.json";
import gearAnimation from "@/public/lottie/Gear.json";
import successAnimation from "@/public/lottie/Success.json";
import devCubesAnimation from "@/public/lottie/DevCubes.json";
import arrowArcAnimation from "@/public/lottie/ArrowArc.json";

/* REVEAL ON SCROLL (APPEAR + DISAPPEAR) */
export function useRevealOnScroll(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const observerOptions = useMemo(
    () => ({
      threshold: 0.25,
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, observerOptions);

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [observerOptions]);

  return { ref, visible };
}

export function HeroWithFloatingImages() {
  const t = useTranslations("HomePage.partnerSection");
  const { ref: galleryRef, visible: showGallery } = useRevealOnScroll();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col mx-auto max-w-6xl px-4">
        <div
          ref={galleryRef}
          className={`
            order-1 md:order-2
            relative min-h-[20vw] max-h-[40vw] mt-22 md:mb-20 mx-auto w-full max-w-7xl
            transition-all duration-700 ease-out
            ${
              showGallery
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
          dir="ltr"
        >
          <div className="absolute inset-0">
            <div className="grid grid-cols-4 gap-4 md:grid-cols-4 relative">
              <div className="relative">
                <div
                  className="
                    absolute
                    top-[-12.5vw] left-[7.8vw] w-[15.6vw] h-[18vw]
                    lg:top-[-200px] lg:left-[100px] lg:w-[200px] lg:h-[230px]
                  "
                >
                  <TechTile
                    label="AI"
                    accent="var(--dev-500)"
                    bg="var(--dev-50)"
                    animation={devCubesAnimation}
                  />
                </div>

                <div
                  className="
                    absolute
                    top-[11.7vw] left-[9.4vw] w-[11.7vw] h-[11.7vw]
                    lg:top-[130px] lg:left-[120px] lg:w-[150px] lg:h-[150px]
                  "
                >
                  <MetricTile value="98%" label="clean reports" />
                </div>
              </div>

              <div className="relative">
                <div
                  className="
                    absolute
                    top-[0.9vw] left-[3.9vw] w-[13.3vw] h-[17.2vw]
                    lg:top-[12px] lg:left-[50px] lg:w-[170px] lg:h-[220px]
                  "
                >
                  <TechTile
                    label="AUTO"
                    accent="var(--design-500)"
                    bg="var(--design-50)"
                    animation={gearAnimation}
                  />
                </div>
              </div>

              <div className="relative">
                <div
                  className="
                    absolute
                    top-[-2.3vw] left-[0vw] w-[12vw] h-[15.6vw]
                    lg:top-[-30px] lg:left-[0px] lg:w-[150px] lg:h-[200px]
                  "
                >
                  <TechTile
                    label="DATA"
                    accent="var(--engagement-500)"
                    bg="var(--engagement-50)"
                    animation={codeAnimation}
                  />
                </div>
              </div>

              <div className="relative">
                <div
                  className="
                    absolute
                    top-[1.6vw] left-[-3.1vw] w-[15.6vw] h-[18vw]
                    lg:top-[20px] lg:left-[-40px] lg:w-[200px] lg:h-[230px]
                  "
                >
                  <TechTile
                    label="FLOW"
                    accent="var(--dev-600)"
                    bg="var(--dev-100)"
                    animation={arrowArcAnimation}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            order-2 md:order-1
            mx-auto flex w-full flex-col gap-10 pb-32 pt-20
            lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]
            lg:items-start
          "
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
              {t("heading")}
            </h2>
          </div>

          <div className="max-w-md space-y-6 text-neutral-600 lg:ml-auto sm:max-w-full">
            <p>{t("bodyPrimary")}</p>
            {t("bodySecondary") ? <p>{t("bodySecondary")}</p> : null}

            <Button
              asChild
              className="inline-flex items-center rounded-full bg-neutral-900 px-7 py-3 text-sm font-semibold text-white shadow hover:bg-neutral-800"
            >
              <Link href={t("ctaHref")}>{t("ctaLabel")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

type TechTileProps = {
  label: string;
  accent: string;
  bg: string;
  animation: object;
};

function TechTile({ label, accent, bg, animation }: TechTileProps) {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-black/5 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
      style={{ backgroundColor: bg }}
    >
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-35 blur-2xl"
        style={{ backgroundColor: accent }}
        aria-hidden
      />
      <div className="relative flex h-full items-center justify-center">
        <HeroAnimation animation={animation} className="w-24" />
      </div>
      <span
        className="relative inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-white"
        style={{ backgroundColor: accent }}
      >
        {label}
      </span>
    </div>
  );
}

function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-neutral-950 p-4 text-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
      <HeroAnimation animation={successAnimation} className="mx-auto w-16" />
      <div>
        <p className="text-3xl font-semibold leading-none">{value}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
          {label}
        </p>
      </div>
    </div>
  );
}
