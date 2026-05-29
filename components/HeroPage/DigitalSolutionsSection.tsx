"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CapabilityCard,
  CapabilityCardTheme,
} from "@/components/HeroPage/CapabilityCard";
import HeroAnimation, {
  type AnimationData,
} from "@/components/AnimationVideos.tsx/AnimationVideo";
import devCubesAnimation from "@/public/lottie/DevCubes.json";
import successAnimation from "@/public/lottie/Success.json";
import gearAnimation from "@/public/lottie/Gear.json";
import codeAnimation from "@/public/lottie/Code.json";
import arrowArcAnimation from "@/public/lottie/ArrowArc.json";
import chevronLeftAnimation from "@/public/lottie/ChevronLeft.json";
import { cn } from "@/lib/utils";

type SolutionKey =
  | "customDevelopment"
  | "digitalTransformation"
  | "topDevelopers"
  | "consulting"
  | "holisticApproach"
  | "creativeExpertise";

const SOLUTION_KEYS: SolutionKey[] = [
  "customDevelopment",
  "digitalTransformation",
  "topDevelopers",
  "consulting",
  "holisticApproach",
  "creativeExpertise",
];

const DEV_BASE_THEME: Partial<CapabilityCardTheme> = {
  shellBg: "var(--dev-50)",
  artworkBg: "linear-gradient(135deg,var(--dev-50),var(--dev-100))",
  panelBg: "var(--dev-500)",
  bodyColor: "rgba(255,255,255,0.94)",
  subtleColor: "rgba(255,255,255,0.7)",
};

const CARD_THEMES: Record<SolutionKey, Partial<CapabilityCardTheme>> = {
  customDevelopment: {
    ...DEV_BASE_THEME,
    shapes: [
      [
        { width: 96, height: 24, color: "var(--dev-200)" },
        { width: 64, height: 24, color: "var(--dev-100)" },
      ],
      [
        { width: 72, height: 52, color: "var(--dev-700)" },
        { width: 48, height: 52, color: "var(--dev-400)" },
      ],
      [{ width: 88, height: 28, color: "var(--dev-50)" }],
    ],
  },
  digitalTransformation: {
    ...DEV_BASE_THEME,
  },
  topDevelopers: {
    ...DEV_BASE_THEME,
  },
  consulting: {
    ...DEV_BASE_THEME,
  },
  holisticApproach: {
    ...DEV_BASE_THEME,
  },
  creativeExpertise: {
    ...DEV_BASE_THEME,
  },
};

const CARD_ANIMATIONS: Record<
  SolutionKey,
  { data: AnimationData; className?: string }
> = {
  customDevelopment: { data: devCubesAnimation, className: "w-32" },
  digitalTransformation: { data: gearAnimation, className: "w-28" },
  topDevelopers: { data: codeAnimation, className: "w-32" },
  consulting: { data: arrowArcAnimation, className: "w-32" },
  holisticApproach: { data: chevronLeftAnimation, className: "w-28" },
  creativeExpertise: { data: successAnimation, className: "w-28" },
};

export function DigitalSolutionsSection() {
  const t = useTranslations("HomePage.solutions");

  const cards = useMemo(
    () =>
      SOLUTION_KEYS.map((key) => ({
        key,
        title: t(`cards.${key}.title`),
        body: t.rich(`cards.${key}.body`, {
          strong: (chunks) => (
            <span className="font-semibold text-white">{chunks}</span>
          ),
        }),
      })),
    [t]
  );

  const introBody = t.rich("body", {
    strong: (chunks) => (
      <span className="font-semibold text-neutral-900">{chunks}</span>
    ),
  });

  const renderArtwork = (key: SolutionKey) => {
    const animation = CARD_ANIMATIONS[key];
    if (!animation) {
      return null;
    }

    return (
      <div className="flex w-full items-center justify-center">
        <HeroAnimation
          animation={animation.data}
          className={cn("w-28", animation.className)}
        />
      </div>
    );
  };

  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:pb-28 pt-0 mt-0">
        <div className="space-y-6 lg:sticky lg:top-40 lg:self-start">
          <div className="space-y-4">
            <p className="text-4xl font-semibold leading-tight text-neutral-900">
              {t("heading")}
            </p>
            <p className="text-lg leading-relaxed text-neutral-600">
              {introBody}
            </p>
            <p className="text-base font-semibold text-neutral-900">
              {t("support")}
            </p>
          </div>
        </div>
        <div className="lg:pt-4">
          <div className="lg:hidden">
            <ScrollArea className="h-[520px] rounded-[40px] border border-gray-300 p-2 bg-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
              <div className="flex flex-col gap-7 pr-3">
                {cards.map((card) => (
                  <CapabilityCard
                    key={card.key}
                    title={card.title}
                                        theme={CARD_THEMES[card.key]}
                    artwork={renderArtwork(card.key)}
                    className=""
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="hidden flex-col gap-6 lg:flex">
            {cards.map((card) => (
              <CapabilityCard
                key={card.key}
                title={card.title}
                                theme={CARD_THEMES[card.key]}
                artwork={renderArtwork(card.key)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
