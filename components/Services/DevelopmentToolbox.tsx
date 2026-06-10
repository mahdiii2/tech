"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useRef } from "react";

type ToolboxIcon = {
  label: string;
};

type ToolboxCard = {
  title: string;
  columns: string[][];
};

type Props = {
  titleLines: string[];
  body: string;
  icons: ToolboxIcon[];
  cards: ToolboxCard[];
};

export function DevelopmentToolbox({ titleLines, body, icons, cards }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const gridWithOpacity = useMemo(() => {
    const slugMap: Record<string, string> = {
      AWS: "amazonwebservices",
      React: "react",
      Angular: "angular",
      CSS3: "css3",
      "C#": "csharp",
      Azure: "microsoftazure",
      "C++": "cplusplus",
      Docker: "docker",
      Cypress: "cypress",
      Kubernetes: "kubernetes",
      Flutter: "flutter",
      GitLab: "gitlab",
      Go: "go",
      HTML5: "html5",
      Java: "java",
      Airtable: "airtable",
      GraphQL: "graphql",
      Kotlin: "kotlin",
      PostgreSQL: "postgresql",
      Stripe: "stripe",
      Figma: "figma",
      Sketch: "sketch",
      "Vue.js": "vuedotjs",
      Vue: "vuedotjs",
      Python: "python",
      WordPress: "wordpress",
      "Next.js": "nextdotjs",
      Bitbucket: "bitbucket",
    };

    const toSlug = (label: string) =>
      slugMap[label] ??
      label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "")
        .replace(/^(.)$/, "$1");

    const columns = 5;
    const rows = Math.ceil(icons.length / columns) || 1;

    return icons.map((icon, idx) => {
      const row = Math.floor(idx / columns);
      const col = idx % columns;
      const colFactor = columns > 1 ? col / (columns - 1) : 0;
      const rowFactor = rows > 1 ? row / (rows - 1) : 0;
      const opacity = Math.max(0.28, 1 - colFactor * 0.45 - rowFactor * 0.35);
      return { ...icon, opacity, slug: toSlug(icon.label) };
    });
  }, [icons]);

  const scrollSlider = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const offset = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  const Buttons = (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => scrollSlider("left")}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
        aria-label="Previous toolbox slide"
      >
        <ArrowLeft className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => scrollSlider("right")}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
        aria-label="Next toolbox slide"
      >
        <ArrowRight className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-24 md:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-12">
        <div className="order-1 space-y-5">
          <div className="space-y-2">
            {titleLines.map((line) => (
              <p
                key={line}
                className="text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
            {body}
          </p>

          <div className="hidden lg:flex">{Buttons}</div>
        </div>

        <div className="order-3 grid grid-cols-4 gap-3 sm:grid-cols-5 md:order-2">
          {gridWithOpacity.map((icon, idx) => (
            <div
              key={`${icon.label}-${idx}`}
              className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white text-xs font-semibold text-neutral-700 shadow-sm"
              style={{ opacity: icon.opacity }}
            >
              <Image
                src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon.slug}.svg`}
                alt={icon.label}
                width={40}
                height={40}
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  const fallback = img.parentElement?.querySelector(
                    "[data-fallback]"
                  ) as HTMLElement | null;
                  if (fallback) {
                    fallback.classList.remove("hidden");
                  }
                }}
              />
              <span
                data-fallback
                className="hidden text-xs font-semibold text-neutral-700"
              >
                {icon.label}
              </span>
            </div>
          ))}
        </div>

        <div className="order-2 flex lg:hidden">{Buttons}</div>
      </div>

      <div className="mt-10 md:mt-12">
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-hidden pb-2"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex w-72 flex-none flex-col rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] ring-1 ring-neutral-100 sm:w-80 md:w-[360px] snap-start"
            >
              <h3 className="text-xl font-semibold text-neutral-900 md:text-[22px]">
                {card.title}
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {card.columns.map((col, idx) => (
                  <ul
                    key={`${card.title}-col-${idx}`}
                    className="space-y-2 text-sm text-neutral-800"
                  >
                    {col.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
