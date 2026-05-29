"use client";

import { useTranslations } from "next-intl";

type UpgradeItem = {
  title: string;
  body: string;
};

type UpgradeAccent = { bubble: string; number: string };
type DevelopmentUpgradeProps = {
  namespace?: string;
  accent?: UpgradeAccent;
  ctaHref?: string;
};

const DEFAULT_ACCENT: UpgradeAccent = { bubble: "#94adff", number: "#2a6ac7" };

export function DevelopmentUpgrade({
  namespace = "DevelopmentPage.upgrade",
  accent = DEFAULT_ACCENT,
  ctaHref = "/schedule",
}: DevelopmentUpgradeProps) {
  const t = useTranslations(namespace);
  const items = (t.raw("items") as UpgradeItem[]) ?? [];
  const heading = t("heading");
  const ctaLabel = t("ctaLabel");

  if (!items.length) return null;

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item, idx) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gray-100 p-7 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            >
              <div
                className="absolute left-0 top-0 h-16 w-16 rounded-br-[36px]"
                style={{ backgroundColor: accent.bubble, opacity: 0.9 }}
              />
              <div className="relative flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-900 shadow-sm"
                  style={{ color: accent.number }}
                >
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
          ))}
        </div>

      </div>
    </section>
  );
}
