"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { CalendarDays, Check, Clock, Gift, ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SpecialOffer() {
  const t = useTranslations("HomePage.specialOffer");
  const includes = t.raw("includes") as string[];
  const whatsappHref = `${siteConfig.social.whatsapp}?text=${encodeURIComponent(
    `${t("badge")}: ${t("title")} (${t("price")})`
  )}`;

  return (
    <section className="w-full px-4 py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0e2747] via-[#123a63] to-[#0e2747] p-6 text-white shadow-[0_35px_90px_rgba(15,23,42,0.25)] sm:p-10"
      >
        {/* decorative glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#17a2b8]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#365fd9]/25 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left: headline + price + includes */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#17a2b8]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#5fd0e0]">
              {t("badge")}
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-3 font-[var(--font-space-mono)] text-base italic text-[#9fd6e2] sm:text-lg">
              {t("subtitle")}
            </p>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-sm font-medium uppercase tracking-wide text-white/60">
                {t("priceLabel")}
              </span>
              <span className="text-5xl font-extrabold leading-none text-[#5fd0e0] sm:text-6xl">
                {t("price")}
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
              {t("priceNote")}
            </p>

            <div className="mt-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
                <Gift className="h-4 w-4 text-[#5fd0e0]" />
                {t("includedTitle")}
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#17a2b8]">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: e-commerce option + CTAs */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17a2b8]/20 text-[#5fd0e0]">
                  <ShoppingCart className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white/70">
                    {t("ecommerceTitle")}
                  </p>
                  <p className="text-2xl font-bold text-white">
                    {t("ecommercePrice")}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">
                {t("ecommerceFeatures")}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-[#9fd6e2]">
              <Clock className="h-4 w-4" />
              {t("limited")}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={t("ctaHref")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0e2747] transition hover:bg-white/90"
              >
                <CalendarDays className="h-4 w-4" />
                {t("ctaLabel")}
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5b]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t("whatsappLabel")}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
