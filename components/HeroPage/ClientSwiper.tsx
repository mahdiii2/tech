"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const CASE_STUDY_KEYS = [
  "pricingEngine",
  "designSystem",
  "workflowAutomation",
] as const;
type CaseStudyKey = (typeof CASE_STUDY_KEYS)[number];

const CASE_STUDY_HREFS: Record<CaseStudyKey, string> = {
  pricingEngine: "/use-cases#construction-trades",
  designSystem: "/use-cases#dental-medical-clinics",
  workflowAutomation: "/use-cases#independent-car-dealerships",
};

export default function CaseStudySlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations("HomePage.caseStudies");

  const slides = useMemo(
    () =>
      CASE_STUDY_KEYS.map((key: CaseStudyKey) => ({
        key,
        title: t(`slides.${key}.title`),
        description: t(`slides.${key}.description`),
        image: t(`slides.${key}.image`),
        href: CASE_STUDY_HREFS[key],
      })),
    [t]
  );

  const ctaLabel = t("ctaLabel");
  const ctaHref = t("ctaHref");
  const slideLabel = t("slideLabel");

  return (
    <section className="relative max-w-screen-2xl mx-auto p-4 lg:p-10 lg:pb-0 pb-80">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#365fd9]">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-neutral-950 md:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 text-base leading-7 text-neutral-600">
          {t("body")}
        </p>
      </div>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        loop
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-[600px] w-full relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key}>
            <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center h-full lg:pl-10">
              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <div className="relative aspect-[4/3] w-full max-w-[600px] overflow-hidden rounded-2xl shadow-xl">
                  <span className="absolute start-3 top-3 z-10 max-w-[calc(100%-1.5rem)] rounded-full bg-neutral-950/85 px-3 py-1.5 text-xs font-semibold leading-5 text-white backdrop-blur-sm">
                    {slideLabel}
                  </span>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 1024px) calc(100vw - 3rem), 600px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="order-2 lg:order-1 flex gap-4 px-4 lg:px-0 mt-2 lg:mt-0 lg:absolute lg:top-6 lg:left-6 z-20">
                <Button
                  variant="outline"
                  aria-label={t("previousSlide")}
                  className="shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  aria-label={t("nextSlide")}
                  className="shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="order-3 lg:order-1 relative space-y-6 px-4 lg:px-10 pt-2 lg:pt-0">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {slide.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {slide.description}
                </p>

                <Link
                  href={slide.href || ctaHref}
                  className="
                    relative z-50 mt-10 inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-3
                    text-sm font-semibold text-white shadow transition hover:bg-neutral-800
                    lg:absolute lg:left-[-20] lg:bottom-[-70] lg:mt-0
                  "
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
