import {
  BadgeCheck,
  Cloud,
  Cog,
  Heart,
  Megaphone,
  Smartphone,
  Sparkles,
  Target,
  ToggleLeft,
  Users,
  type LucideIcon,
} from "lucide-react";

type CapabilityCard = {
  icon:
    | "cloud"
    | "phone"
    | "settings"
    | "heart"
    | "sparkles"
    | "toggle"
    | "target"
    | "megaphone"
    | "users"
    | string;
  title: string;
  body: string;
  tags: string[];
};

type Props = {
  heading: string;
  body: string;
  cards: CapabilityCard[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "dev" | "design" | "engagement";
  hideHeader?: boolean;
};

export function DevelopmentCapabilities({
  heading,
  body,
  cards,
  ctaLabel,
  ctaHref,
  variant = "dev",
  hideHeader = false,
}: Props) {
  const iconMap: Record<string, LucideIcon> = {
    cloud: Cloud,
    phone: Smartphone,
    settings: Cog,
    heart: Heart,
    sparkles: Sparkles,
    toggle: ToggleLeft,
    target: Target,
    megaphone: Megaphone,
    users: Users,
  };

  const palette =
    variant === "design"
      ? {
          cardBg: "var(--design-100)",
          cardRing: "var(--design-100)",
          accent: "var(--design-500)",
          tagBg: "var(--design-50)",
          tagText: "var(--design-700)",
          tagRing: "var(--design-200)",
        }
      : variant === "engagement"
      ? {
          cardBg: "var(--engagement-50)",
          cardRing: "var(--engagement-100)",
          accent: "var(--engagement-500)",
          tagBg: "var(--engagement-100)",
          tagText: "var(--engagement-800)",
          tagRing: "var(--engagement-200)",
        }
      : {
          cardBg: "var(--dev-50)",
          cardRing: "var(--dev-100)",
          accent: "var(--dev-500)",
          tagBg: "var(--dev-50)",
          tagText: "var(--dev-700)",
          tagRing: "var(--dev-200)",
        };

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-20 md:px-6 lg:px-8 mb-20">
      {!hideHeader ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-700 md:text-lg">
            {body}
          </p>
        </div>
      ) : null}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex h-full flex-col items-center rounded-3xl p-6 text-center shadow-sm md:p-7"
            style={{
              backgroundColor: palette.cardBg,
            }}
          >
            {(() => {
              const Icon = iconMap[card.icon] || Cloud;
              return (
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-md ring-6"
                  style={{
                    backgroundColor: palette.accent,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
              );
            })()}
            <h3 className="text-xl font-semibold text-neutral-900 md:text-[22px]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-800 md:mt-4 md:text-base md:leading-7">
              {card.body}
            </p>

            {card.tags?.length ? (
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-semibold shadow-sm ring-1"
                    style={{
                      backgroundColor: palette.tagBg,
                      color: palette.tagText,
                      borderColor: palette.tagRing,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

    </section>
  );
}
