"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import HeroAnimation from "../AnimationVideos.tsx/AnimationVideo";
import animationContact from "@/public/lottie/ContactUs.json";

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
          </div>
        </div>
      </div>
    </section>
  );
}
