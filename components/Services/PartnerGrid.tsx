"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Industries/Reveal";

const circlePalette = [
  "var(--dev-200)",
  "var(--design-200)",
  "var(--engagement-200)",
  "var(--dev-100)",
  "var(--design-100)",
  "var(--engagement-100)",
  "var(--dev-300)",
  "var(--design-300)",
];

const columns = 4;
const rows = 4;

function opacityFor(col: number, row: number) {
  const colCenter = (columns - 1) / 2;
  const rowCenter = (rows - 1) / 2;
  const dist = Math.abs(col - colCenter) + Math.abs(row - rowCenter);
  return Math.max(1, 1 - dist * 0.12);
}

export default function PartnerGrid() {
  const t = useTranslations("ServicesPage.partnerGrid");

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6">
        <div className="relative flex w-full items-start justify-between gap-8">
          <div className="hidden lg:grid lg:w-[320px] lg:grid-cols-4 lg:gap-5">
            {Array.from({ length: rows * columns }).map((_, idx) => {
              const color = circlePalette[idx % circlePalette.length];
              const col = idx % columns;
              const row = Math.floor(idx / columns);
              const fade = opacityFor(col, row);
              return (
                <span
                  key={`left-${idx}`}
                  className="h-14 w-14 rounded-full"
                  style={{ backgroundColor: color, opacity: fade }}
                />
              );
            })}
          </div>

          <Reveal className="flex flex-1 flex-col items-center text-center">
            <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-700">
              {t("body1")}
              <br />
              {t("body2")}
              <br />
              {t("body3")}
            </p>

            <div className="mt-8 flex items-center justify-center gap-5 lg:hidden">
              {[0, 1, 2].map((idx) => {
                const color = circlePalette[idx % circlePalette.length];
                return (
                  <span
                    key={`mobile-${idx}`}
                    className="h-10 w-10 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                );
              })}
            </div>
          </Reveal>

          <div className="hidden lg:grid lg:w-[320px] lg:grid-cols-4 lg:gap-5">
            {Array.from({ length: rows * columns }).map((_, idx) => {
              const color = circlePalette[(idx + 3) % circlePalette.length];
              const col = idx % columns;
              const row = Math.floor(idx / columns);
              const fade = opacityFor(col, row);
              return (
                <span
                  key={`right-${idx}`}
                  className="h-14 w-14 rounded-full"
                  style={{ backgroundColor: color, opacity: fade }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
