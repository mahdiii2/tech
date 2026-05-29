"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Reveal } from "@/components/Industries/Reveal";

export default function SelectedServicesCallout() {
  const t = useTranslations("ServicesPage.selectedServices");
  const items = (t.raw("items") as { title: string; body: string }[]) ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-14 sm:py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6">
        <Reveal>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              {t("title")}
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
              {t.rich("description", {
                strong: (chunks) => (
                  <strong className="font-semibold">{chunks}</strong>
                ),
              })}
            </p>
          </div>
        </Reveal>

        <div className="w-full space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={item.title + idx} delay={Math.min(idx, 4) * 0.05}>
              <div
                className="overflow-hidden rounded-2xl border border-neutral-200 transition hover:border-neutral-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-4 py-4 transition hover:bg-neutral-50 sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-[#365fd9]">
                    {item.title}
                  </span>
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8efff] text-[#365fd9]"
                    aria-hidden
                  >
                    {isOpen ? "x" : "+"}
                  </span>
                </button>
                <div
                  className="grid overflow-hidden border-t border-neutral-200 px-4 text-neutral-800 transition-[grid-template-rows] duration-300 ease-in-out sm:px-6"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="min-h-0 py-5">
                    <div
                      className="space-y-3 text-sm leading-relaxed sm:text-base"
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>

        <Link
          href={t("ctaHref")}
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {t("ctaLabel")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
