"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import HeroAnimation from "../AnimationVideos.tsx/AnimationVideo";
import animationContact from "@/public/lottie/ContactUs.json";
import { siteConfig } from "@/lib/site";

const SOCIALS = [
  {
    label: "Instagram",
    Icon: Instagram,
    href: siteConfig.social.instagram,
    color: "#E1306C",
  },
  {
    label: "Facebook",
    Icon: Facebook,
    href: siteConfig.social.facebook,
    color: "#1877F2",
  },
];

export default function ContactBridge() {
  const [hoverRight, setHoverRight] = useState(false);
  const t = useTranslations("HomePage.contactBridge");

  return (
    <section className="w-full px-4 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <h2 className="text-3xl font-semibold text-[color:var(--neutral-900)] sm:text-4xl">
          {t("title")}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--neutral-600)]">
          {t("subtitle")}
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl justify-center">
        <div
          onMouseEnter={() => setHoverRight(true)}
          onMouseLeave={() => setHoverRight(false)}
          className="relative w-full overflow-hidden rounded-[32px] bg-[#E8F2FF] p-10 text-center shadow-[0_35px_90px_rgba(15,23,42,0.12)]"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: hoverRight ? 2.15 : 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute bottom-0 right-[-200] w-[400px] h-[400px] bg-[#D9E9FF] rounded-t-full"
          />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <HeroAnimation className="w-32" animation={animationContact} />
            <h3 className="text-2xl font-semibold text-[color:var(--neutral-900)]">
              {t("cardTitle")}
            </h3>
            <p className="text-base leading-relaxed text-[color:var(--neutral-700)] max-w-md">
              {t("cardBody")}
            </p>
            <Link
              href={t("ctaHref")}
              className="mt-2 rounded-full bg-[color:var(--neutral-900)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--neutral-800)]"
            >
              {t("ctaLabel")}
            </Link>

            <div className="mt-4 flex flex-col items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--neutral-500)]">
                {t("followLabel")}
              </span>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ label, Icon, href, color }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white/70 backdrop-blur transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md"
                    style={{ color }}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
