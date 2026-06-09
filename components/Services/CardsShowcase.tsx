"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

type ShowcaseCard = {
  title: string;
  body: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  align: "left" | "right" | string;
  variant?: "dev" | "design" | "engagement";
};

type Props = {
  cards: ShowcaseCard[];
};

const accentMap = {
  dev: {
    tagBg: "var(--dev-50)",
    tagText: "var(--dev-700)",
    tagRing: "var(--dev-200)",
  },
  design: {
    tagBg: "var(--design-100)",
    tagText: "var(--design-700)",
    tagRing: "var(--design-200)",
  },
  engagement: {
    tagBg: "var(--engagement-100)",
    tagText: "var(--engagement-800)",
    tagRing: "var(--engagement-200)",
  },
};

export function DevelopmentShowcase({ cards }: Props) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="mx-5 mt-16 max-w-6xl space-y-10 md:mt-24 md:space-y-12 justify-center xl:mx-auto  ">
      {cards.map((card, idx) => {
        const justify =
          card.align === "left" ? "md:justify-start" : "md:justify-end";
        const accent = accentMap[card.variant ?? "dev"] ?? accentMap.dev;
        const titleClass = `text-xl font-semibold text-neutral-900 ${
          isRtl ? "md:text-3xl" : "md:text-2xl"
        }`;
        const bodyClass = `mt-3 flex-1 overflow-y-auto text-sm leading-6 text-neutral-800 md:mt-4 ${
          isRtl ? "md:text-lg md:leading-10" : "md:text-lg md:leading-7"
        }`;
        const badgeClass = `rounded-full px-3 py-1 font-semibold shadow-sm ring-1 ${
          isRtl ? "text-sm" : "text-sm"
        }`;

        return (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-3xl bg-neutral-900/5 shadow-xl ring-1 ring-black/5"
          >
            <div className="relative min-h-[420px] md:h-[420px]">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1100px"
                priority={idx === 0}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:items-end md:p-8 lg:p-10 ${justify}`}
              >
                <div className="flex h-full max-h-[360px] w-[92%] max-w-[320px] flex-col overflow-hidden rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm ring-1 ring-black/5 sm:max-w-[440px] md:max-w-[520px] md:p-7 lg:max-w-[540px]">
                  <h3 className={titleClass}>{card.title}</h3>
                  <p className={bodyClass}>{card.body}</p>

                  {card.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2 md:mt-5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={badgeClass}
                          style={{
                            backgroundColor: accent.tagBg,
                            color: accent.tagText,
                            borderColor: accent.tagRing,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
