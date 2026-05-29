"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Industries/Reveal";

type UpgradeItem = {
  title: string;
  body: string;
};

const ACCENTS = [
  { bubble: "#8cb7f5", number: "#2a6ac7" },
  { bubble: "#5fc9a7", number: "#239f75" },
  { bubble: "#a792ff", number: "#6f5ad6" },
  { bubble: "#d9f05c", number: "#9fb100" },
];

export default function UpgradeGrid() {
  const t = useTranslations("ServicesPage.upgradeGrid");
  const items = (t.raw("items") as UpgradeItem[]) ?? [];
  const heading = t("heading");

  if (!items.length) return null;

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:pt-0">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
              {heading}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <Reveal key={item.title} delay={(idx % 2) * 0.08}>
              <article
                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gray-100 p-7 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                <div
                  className="absolute left-0 top-0 h-16 w-16 rounded-br-[36px]"
                  style={{ backgroundColor: accent.bubble, opacity: 0.9 }}
                />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-900 shadow-sm">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  {item.body}
                </p>
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
