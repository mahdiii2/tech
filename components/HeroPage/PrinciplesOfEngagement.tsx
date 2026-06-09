"use client";

import { Link } from "@/i18n/navigation";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type PrincipleKey =
  | "humanCentred"
  | "clientFocused"
  | "multidisciplinary"
  | "strategyDriven";

const PRINCIPLE_KEYS: PrincipleKey[] = [
  "humanCentred",
  "clientFocused",
  "multidisciplinary",
  "strategyDriven",
];

export function PrinciplesOfEngagement({
  namespace = "EngagementPage.principles",
}: {
  namespace?: string;
}) {
  const t = useTranslations(namespace);

  const cards = useMemo(
    () =>
      PRINCIPLE_KEYS.map((key) => ({
        key,
        title: t(`cards.${key}.title`),
        body: t(`cards.${key}.body`),
      })),
    [t]
  );

  return (
    <section className="bg-white mt-20 px-4 sm:px-6 lg:mt-30 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-0 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:pb-28">
        <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <div className="space-y-6">
            <p className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
              {t("heading")}
            </p>
            <p className="text-lg leading-relaxed text-neutral-600">
              {t("body")}
            </p>
            <p className="text-md font-semibold text-neutral-900">
              {t("support")}
            </p>
          </div>
          <Button
            asChild
            className="rounded-full bg-neutral-900 px-7 py-3 text-base font-semibold text-white hover:bg-neutral-800"
          >
            <Link href={t("ctaHref")}>{t("ctaLabel")}</Link>
          </Button>
        </div>

        <div className="lg:pt-4">
          <div className="lg:hidden">
            <ScrollArea className="h-[560px] rounded-[40px] border border-gray-200 bg-gray-50 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              <div className="flex flex-col gap-6 pr-3">
                {cards.map((card, idx) => (
                  <article
                    key={card.key}
                    className="relative overflow-hidden rounded-3xl bg-[var(--engagement-50)] px-6 py-5 shadow-sm ring-1 ring-[var(--engagement-100)]"
                  >
                    <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-[36px] bg-[var(--engagement-100)] opacity-80" />
                    <div className="relative flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--engagement-600)] shadow-sm">
                        {idx + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {card.title}
                      </h3>
                    </div>
                    <p className="relative mt-3 text-sm leading-relaxed text-neutral-800">
                      {card.body}
                    </p>
                  </article>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="hidden flex-col gap-6 lg:flex">
            {cards.map((card, idx) => (
              <article
                key={card.key}
                className="relative overflow-hidden rounded-3xl bg-[var(--engagement-50)] px-8 py-6 shadow-sm ring-1 ring-[var(--engagement-100)]"
              >
                <div className="relative flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-base font-semibold text-[var(--engagement-600)] shadow">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {card.title}
                  </h3>
                </div>
                <p className="relative mt-4 text-base leading-relaxed text-neutral-800">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
