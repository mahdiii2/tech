import { salesEmail } from "@/lib/booking";

/**
 * Central site metadata used for SEO, Open Graph, structured data and the
 * sitemap. Override the public URL per environment with NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://servicely.digital"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Servicely",
  shortName: "Servicely",
  url: siteUrl,
  description:
    "Servicely builds practical software for inquiries, bookings, leads, websites, apps, dashboards and business workflows across MENA, focused on Lebanon, Iraq and the UAE.",
  tagline: "Practical software and business systems for MENA",
  email: salesEmail,
  phone: "+243 905 600 055",
  phoneHref: "+243905600055",
  locale: "en",
  localeAlternates: ["ar"],
  ogImage: `${siteUrl}/icon.png`,
  logo: `${siteUrl}/icon.png`,
  areaServed: [
    "Middle East and North Africa",
    "Lebanon",
    "Iraq",
    "United Arab Emirates",
  ],
  keywords: [
    "business systems MENA",
    "custom software Lebanon",
    "custom software Iraq",
    "custom software UAE",
    "clinic appointment system",
    "real estate lead follow-up",
    "property matching system",
    "automotive inquiry system",
    "field service scheduling software",
    "service request intake system",
    "WhatsApp inquiry workflow",
    "customer automation Lebanon",
    "customer automation Iraq",
    "customer automation UAE",
    "business systems UAE",
    "web apps UAE",
    "mobile app development UAE",
    "customer support automation",
    "appointment request system",
    "business dashboards",
  ],
  social: {
    instagram: "",
    facebook: "",
    whatsapp: "https://wa.me/243905600055",
  },
  get sameAs(): string[] {
    return [this.social.instagram, this.social.facebook].filter(Boolean);
  },
} as const;

export const locales = ["en", "ar"] as const;
export const defaultLocale = "en";
export type Locale = (typeof locales)[number];

/** Build the URL path for a route in a given locale (English is un-prefixed). */
export function localePath(locale: string, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === defaultLocale ? clean || "/" : `/${locale}${clean}`;
}

/**
 * Locale-aware canonical + hreflang alternates for a route. Each language
 * version is canonical to itself and references the others via hreflang.
 */
export function localizedAlternates(path: string, locale: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      en: localePath("en", path),
      ar: localePath("ar", path),
      "x-default": localePath("en", path),
    },
  };
}
