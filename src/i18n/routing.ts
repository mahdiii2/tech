import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Locales the site is available in.
  locales: ["en", "ar"],
  defaultLocale: "en",
  // English keeps clean URLs (/services); Arabic is prefixed (/ar/services).
  localePrefix: "as-needed",
  // Detect the visitor's preferred language on first visit.
  localeDetection: true,
});

export type AppLocale = (typeof routing.locales)[number];
