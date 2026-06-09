"use client";

import { useMemo, useRef } from "react";
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
      })),
    [t]
  );

  const ctaLabel = t("ctaLabel");
  const ctaHref = t("ctaHref");

  return (
    <div className="relative max-w-screen-2xl mx-auto p-4 lg:p-10 lg:pb-0 pb-80">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
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
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-2xl shadow-xl max-h-[450px] object-cover"
                />
              </div>

              <div className="order-2 lg:order-1 flex gap-4 px-4 lg:px-0 mt-2 lg:mt-0 lg:absolute lg:top-6 lg:left-6 z-20">
                <Button
                  variant="outline"
                  className="shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  className="shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="order-3 lg:order-1 relative space-y-6 px-4 lg:px-10 pt-2 lg:pt-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {slide.description}
                </p>

                <Button
                  asChild
                  className="
                    mt-10 inline-flex items-center rounded-full bg-neutral-900 px-7 py-3 
                    text-sm font-semibold text-white shadow hover:bg-neutral-800
                    lg:absolute lg:left-[-20] lg:bottom-[-70] lg:mt-0
                  "
                >
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
