"use client";

import { Handshake, Layers, Lightbulb, Users } from "lucide-react";
import { useLocale } from "next-intl";

type ReasonCard = {
  title: string;
  body: string;
  icon: string;
};

const iconMap = {
  layers: Layers,
  users: Users,
  handshake: Handshake,
  lightbulb: Lightbulb,
};

export function DevelopmentReasons({
  heading,
  cards,
  accent = {
    gradientFrom: "#365ee2",
    gradientVia: "#3157c6",
    gradientTo: "#2745a7",
  },
}: {
  heading: string;
  cards: ReasonCard[];
  accent?: {
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
  };
}) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => {
            const Icon =
              iconMap[card.icon.toLowerCase() as keyof typeof iconMap] ||
              Lightbulb;
            return (
              <div
                key={card.title + idx}
                className={`flex h-full flex-col items-center gap-4 text-center ${
                  isRtl ? "text-right sm:text-right lg:text-center" : ""
                }`}
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br shadow-md"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${accent.gradientFrom}, ${accent.gradientVia}, ${accent.gradientTo})`,
                  }}
                >
                  <Icon className="h-10 w-10 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed text-neutral-900 lg:max-w-[50%] ${
                    isRtl ? "text-right lg:text-center" : ""
                  }`}
                >
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
