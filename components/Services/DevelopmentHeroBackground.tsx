import { ReactNode } from "react";

type ColorVariant = "dev" | "design" | "engagement";

type Props = {
  children: ReactNode;
  colorVariant?: ColorVariant;
};

const colorMap: Record<ColorVariant, string> = {
  dev: "var(--dev-500)",
  design: "var(--design-300)",
  engagement: "var(--engagement-400)",
};

export function DevelopmentHeroBackground({
  children,
  colorVariant = "dev",
}: Props) {
  const circleColor = colorMap[colorVariant] ?? colorMap.dev;

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -left-16 top-10 h-[170px] w-[170px] rounded-full"
          style={{ backgroundColor: circleColor }}
        />
        <div
          className="absolute right-[-90px] top-16 h-[200px] w-[200px] rounded-full"
          style={{ backgroundColor: circleColor }}
        />
        <div
          className="absolute -left-6 bottom-[120px] h-[210px] w-[210px] rounded-full"
          style={{ backgroundColor: circleColor }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        aria-hidden="true"
      >
        <div
          className="absolute -left-40 bottom-[-120px] h-[360px] w-[360px] rounded-full"
          style={{ backgroundColor: circleColor }}
        />
        <div
          className="absolute -right-36 top-[120px] h-[340px] w-[340px] rounded-full"
          style={{ backgroundColor: circleColor }}
        />
        <div
          className="absolute left-[12%] top-10 h-[160px] w-[160px] rounded-full"
          style={{ backgroundColor: circleColor }}
        />
        <div
          className="absolute left-[20%] bottom-[110px] h-[140px] w-[140px] rounded-full"
          style={{ backgroundColor: circleColor }}
        />
        <div
          className="absolute right-[18%] bottom-[90px] h-[140px] w-[140px] rounded-full"
          style={{ backgroundColor: circleColor }}
        />
        <div
          className="absolute left-1/2 -top-16 h-[140px] w-[140px] -translate-x-1/2 rounded-full"
          style={{ backgroundColor: circleColor }}
        />
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}
