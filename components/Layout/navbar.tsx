"use client";

import { useEffect, useRef, useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  CarFront,
  Clock3,
  Code2,
  HeartPulse,
  Menu,
  MessageCircle,
  Wrench,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_ITEMS: { key: string; href: string }[] = [
  { key: "services", href: "/services" },
  { key: "industries", href: "/industries" },
  { key: "useCases", href: "/use-cases" },
  { key: "about", href: "/about" },
];

type NavCardConfig = {
  key: string;
  href: string;
  bg: string;
  accent: string;
  iconAccent: string;
  icon: LucideIcon;
};

const SERVICE_CARDS: NavCardConfig[] = [
  {
    key: "development",
    href: "/services#development",
    bg: "var(--dev-50)",
    accent: "var(--dev-200)",
    iconAccent: "var(--dev-500)",
    icon: Code2,
  },
  {
    key: "automation",
    href: "/services#design",
    bg: "var(--design-50)",
    accent: "var(--design-200)",
    iconAccent: "var(--design-500)",
    icon: Clock3,
  },
  {
    key: "data",
    href: "/services#engagement",
    bg: "var(--engagement-50)",
    accent: "var(--engagement-200)",
    iconAccent: "var(--engagement-500)",
    icon: BarChart3,
  },
];

const INDUSTRY_CARDS: NavCardConfig[] = [
  {
    key: "clinics",
    href: "/industries#clinics-medical-centers",
    bg: "var(--dev-50)",
    accent: "var(--dev-200)",
    iconAccent: "var(--dev-500)",
    icon: HeartPulse,
  },
  {
    key: "realEstate",
    href: "/industries#real-estate-agencies",
    bg: "var(--design-50)",
    accent: "var(--design-200)",
    iconAccent: "var(--design-500)",
    icon: Building2,
  },
  {
    key: "automotive",
    href: "/industries#automotive-mobility",
    bg: "var(--engagement-50)",
    accent: "var(--engagement-200)",
    iconAccent: "var(--engagement-500)",
    icon: CarFront,
  },
  {
    key: "fieldServices",
    href: "/industries#home-field-services",
    bg: "var(--dev-50)",
    accent: "var(--dev-200)",
    iconAccent: "var(--dev-500)",
    icon: Wrench,
  },
];

const LOCALE_OPTIONS = [
  { value: "en", label: "English", shortLabel: "EN" },
  { value: "ar", label: "العربية", shortLabel: "AR" },
];

type MobileSheetView = "menu" | "services" | "industries";

export function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const serviceCardsContent = SERVICE_CARDS.map((card) => ({
    ...card,
    title: t(`serviceCards.${card.key}.title`),
    description: t(`serviceCards.${card.key}.description`),
  }));
  const industryCardsContent = INDUSTRY_CARDS.map((card) => ({
    ...card,
    title: t(`industryCards.${card.key}.title`),
    description: t(`industryCards.${card.key}.description`),
  }));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSheetView, setMobileSheetView] =
    useState<MobileSheetView>("menu");

  const handleLocaleChange = (targetLocale: string) => {
    if (targetLocale === locale) {
      return;
    }

    router.replace(pathname, { locale: targetLocale });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full bg-primary text-primary-foreground text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/10 text-[0.75rem]">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="opacity-90">{t("banner.text")}</span>
          <Link
            href={t("banner.ctaHref")}
            className="ml-1 font-semibold underline-offset-4 hover:underline"
          >
            {t("banner.cta")}
          </Link>
        </div>
      </div>

      <div
        className={`w-full border-b-none transition-colors duration-200 ${
          isScrolled ? "bg-background/70 backdrop-blur-sm" : "bg-background"
        }`}
      >
        <div className="relative flex w-full items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
          <Link
            href="/"
            className="flex items-center text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl"
          >
            {t("logo")}
          </Link>

          <nav className="hidden items-center gap-12 font-medium text-foreground/80 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.key === "services" ? (
                <NavCardsDropdown
                  key={item.key}
                  label={t(`links.${item.key}`)}
                  href={item.href}
                  cards={serviceCardsContent}
                />
              ) : item.key === "industries" ? (
                <NavCardsDropdown
                  key={item.key}
                  label={t(`links.${item.key}`)}
                  href={item.href}
                  cards={industryCardsContent}
                />
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {t(`links.${item.key}`)}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher
              locale={locale}
              onLocaleChange={handleLocaleChange}
            />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher
              locale={locale}
              onLocaleChange={handleLocaleChange}
              compact
            />

            <Sheet
              onOpenChange={(open) => {
                if (!open) {
                  setMobileSheetView("menu");
                }
              }}
            >
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t("openMenu")}</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                hideCloseButton
                className="flex h-full w-screen max-w-none flex-col overflow-hidden border-none bg-transparent p-0 sm:max-w-none"
              >
                <div className="relative flex h-full flex-col">
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-violet-100/60 backdrop-blur-[40px] dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-800" />
                  <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-8 sm:px-10">
                    <SheetHeader className="sr-only">
                      <SheetTitle>{t("menuTitle")}</SheetTitle>
                    </SheetHeader>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold tracking-tight text-neutral-900">
                        {t("logo")}
                      </span>
                      <SheetClose asChild>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-10 w-10 rounded-full border border-black/10 bg-white/50 text-foreground backdrop-blur"
                        >
                          <X className="h-5 w-5" />
                          <span className="sr-only">{t("closeMenu")}</span>
                        </Button>
                      </SheetClose>
                    </div>

                    <div className="relative mt-14 flex-1 overflow-hidden pb-2">
                      <div
                        className={cn(
                          "absolute inset-0 flex flex-col gap-5 text-2xl font-semibold text-neutral-900 transition-all duration-300 dark:text-neutral-50",
                          mobileSheetView === "menu"
                            ? "translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-3 opacity-0"
                        )}
                      >
                        {NAV_ITEMS.map((item) =>
                          item.key === "services" ||
                          item.key === "industries" ? (
                            <button
                              type="button"
                              key={item.key}
                              onClick={() =>
                                setMobileSheetView(
                                  item.key as "services" | "industries"
                                )
                              }
                              className="flex items-center justify-between rounded-2xl px-2 py-2 transition-colors hover:text-neutral-500"
                            >
                              <span>{t(`links.${item.key}`)}</span>
                              <ArrowRight className="h-5 w-5 text-neutral-400" />
                            </button>
                          ) : (
                            <SheetClose asChild key={item.key}>
                              <Link
                                href={item.href}
                                className="flex items-center justify-between rounded-2xl px-2 py-2 transition-colors hover:text-neutral-500"
                              >
                                <span>{t(`links.${item.key}`)}</span>
                              </Link>
                            </SheetClose>
                          )
                        )}
                      </div>

                      <div
                        className={cn(
                          "absolute inset-0 flex flex-col gap-5 overflow-y-auto pb-6 transition-all duration-300",
                          mobileSheetView !== "menu"
                            ? "translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-3 opacity-0"
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => setMobileSheetView("menu")}
                          className="flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:bg-white/80"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          {t("mobile.backToMenu")}
                        </button>
                        {(mobileSheetView === "industries"
                          ? industryCardsContent
                          : serviceCardsContent
                        ).map((card) => {
                          const Icon = card.icon;
                          return (
                            <SheetClose asChild key={card.key}>
                              <Link
                                href={card.href}
                                className="flex min-h-[230px] w-full flex-col justify-between rounded-[2rem] p-6 text-left text-neutral-900 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                                style={{ backgroundColor: card.bg }}
                              >
                                <div className="flex items-start justify-between">
                                  <span
                                    className="flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{ backgroundColor: card.iconAccent }}
                                  >
                                    <Icon className="h-7 w-7 text-white" />
                                  </span>
                                  <span
                                    className="flex h-12 w-12 items-center justify-center rounded-full"
                                    style={{ backgroundColor: card.accent }}
                                  >
                                    <ArrowRight className="h-5 w-5 text-neutral-900" />
                                  </span>
                                </div>
                                <div>
                                  <p className="text-xl font-semibold">
                                    {card.title}
                                  </p>
                                </div>
                              </Link>
                            </SheetClose>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

type NavCardsDropdownProps = {
  label: string;
  href: string;
  cards: Array<{
    key: string;
    title: string;
    description: string;
    href: string;
    bg: string;
    accent: string;
    iconAccent: string;
    icon: LucideIcon;
  }>;
};

type LanguageSwitcherProps = {
  locale: string;
  onLocaleChange: (targetLocale: string) => void;
  compact?: boolean;
};

function LanguageSwitcher({
  locale,
  onLocaleChange,
  compact = false,
}: LanguageSwitcherProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-white/70 p-1 shadow-sm",
        compact ? "gap-0.5" : "gap-1"
      )}
      aria-label="Language"
    >
      {LOCALE_OPTIONS.map((option) => {
        const isActive = option.value === locale;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onLocaleChange(option.value)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full font-semibold uppercase transition-colors",
              compact ? "px-2 py-1 text-[11px]" : "px-3 py-1.5 text-xs",
              isActive
                ? "bg-neutral-950 text-white"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
            )}
          >
            {option.shortLabel}
          </button>
        );
      })}
    </div>
  );
}

function NavCardsDropdown({ label, href, cards }: NavCardsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isWideMenu = cards.length > 3;
  const isTwoCardMenu = cards.length === 2;
  const isFourCardMenu = cards.length === 4;
  const isCompactMenu = cards.length >= 3;

  const handleOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setIsOpen(true);
  };

  const handleClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = setTimeout(() => setIsOpen(false), 250);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  return (
    <div
      className="flex items-center"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocusCapture={handleOpen}
      onBlurCapture={handleClose}
    >
      <Link
        href={href}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="transition-colors hover:text-foreground"
      >
        {label}
      </Link>
      <div
        className={`absolute left-1/2 top-full z-50 hidden w-screen max-w-none -translate-x-1/2 flex-col px-4 pt-4 transition-all duration-300 ease-out lg:flex ${
          isOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <div className="mx-auto w-full max-w-[calc(100vw-1rem)]">
          <div
            className={cn(
              "gap-3",
              isFourCardMenu
                ? "mx-auto grid max-w-5xl grid-cols-4"
                : isWideMenu
                  ? "grid grid-cols-6"
                : isTwoCardMenu
                  ? "mx-auto grid max-w-3xl grid-cols-2"
                  : "mx-auto grid max-w-3xl grid-cols-3"
            )}
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.key}
                  href={card.href}
                  className={cn(
                    "flex flex-col items-center justify-center gap-5 text-center text-foreground transition-transform duration-200 hover:-translate-y-1",
                    isCompactMenu
                      ? "h-52 min-w-0 rounded-2xl p-5"
                      : "h-56 rounded-[1.75rem] p-7"
                  )}
                  style={{ backgroundColor: card.bg }}
                >
                  <span
                    className={cn(
                      "flex shrink-0 items-center justify-center rounded-full shadow-sm",
                      isCompactMenu ? "h-16 w-16" : "h-20 w-20"
                    )}
                    style={{ backgroundColor: card.iconAccent }}
                  >
                    <Icon
                      className={cn(
                        "text-white",
                        isCompactMenu ? "h-7 w-7" : "h-9 w-9"
                      )}
                    />
                  </span>
                  <p
                    className={cn(
                      "font-semibold leading-snug text-neutral-900",
                      isCompactMenu ? "text-base xl:text-lg" : "text-xl"
                    )}
                  >
                    {card.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
