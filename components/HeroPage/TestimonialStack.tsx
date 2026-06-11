"use client";

import { Link } from "@/i18n/navigation";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
};

type StickyCardProps = {
  i: number;
  testimonial: Testimonial;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  clientLabel: string;
};

const TestimonialStickyCard = ({
  i,
  testimonial,
  progress,
  range,
  targetScale,
  clientLabel,
}: StickyCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex w-full items-center justify-center px-4"
    >
      <motion.article
        style={{
          scale,
          top: `calc(-6vh + ${i * 20 + 220}px)`,
        }}
        className="relative -top-1/4 flex w-full max-w-[520px] origin-top flex-col"
      >
        <div
          className="flex max-sm:min-h-[clamp(480px,20vh,640px)] flex-col rounded-[32px] border border-[color:var(--dev-200)] bg-white/95 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.12)] sm:p-10"
          style={{
            background:
              "linear-gradient(180deg, var(--neutral-white) 0%, var(--dev-50) 120%)",
          }}
        >
          <div className="mb-6 flex items-center justify-between">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-3xl font-black text-white shadow-[0_20px_45px_rgba(54,95,217,0.35)]"
              style={{ backgroundColor: "var(--dev-500)" }}
            >
              <Quote size={24} className="text-white" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--neutral-500)]">
              {clientLabel}
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--dev-400)]">
            {testimonial.industry}
          </p>

          <p className="mt-4 text-lg font-semibold leading-relaxed text-[color:var(--neutral-900)] sm:text-xl">
            {testimonial.quote}
          </p>

          <div className="mt-auto space-y-1 pt-6">
            <p className="text-base font-semibold text-[color:var(--neutral-900)]">
              {testimonial.author}
            </p>
            <p className="text-sm text-[color:var(--neutral-600)]">
              {testimonial.role}
            </p>
            <p className="text-sm text-[color:var(--neutral-500)]">
              {testimonial.company}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const TestimonialStack = () => {
  const t = useTranslations("HomePage.testimonials");
  const testimonials = t.raw("items") as Testimonial[];
  const cardsContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainer,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="relative w-full px-4 pb-24 sm:px-8"
      style={{
        background:
          "linear-gradient(140deg, var(--dev-200) 0%, var(--dev-100) 45%, var(--dev-50) 100%)",
      }}
    >
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,360px)_1fr]">
          <aside className="mt-16 rounded-[32px] border border-[color:var(--dev-100)] bg-white/80 p-8 text-left shadow-[0_45px_120px_rgba(15,23,42,0.12)] backdrop-blur-sm lg:sticky lg:top-33 lg:mt-32">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--dev-500)]">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[color:var(--neutral-900)] sm:text-5xl">
              {t("heading")}
            </h2>
            <p className="mt-6 text-base font-sans leading-relaxed text-[color:var(--neutral-700)]">
              {t("bodyPrimary")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--neutral-700)]">
              {t("bodySecondary")}
            </p>
            <div className="mt-8 flex gap-2 pb-10">
              <Link
                href={t("ctaPrimaryHref")}
                className="rounded-full bg-[color:var(--neutral-900)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--neutral-800)]"
              >
                {t("ctaPrimaryLabel")}
              </Link>
              <Link
                href={t("ctaSecondaryHref")}
                className="rounded-full border border-[color:var(--neutral-200)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--neutral-900)] transition hover:border-[color:var(--neutral-300)]"
              >
                {t("ctaSecondaryLabel")}
              </Link>
            </div>
          </aside>

          <div
            ref={cardsContainer}
            className="relative flex w-full flex-col items-center justify-center pb-[20vh]"
          >
            {testimonials.map((testimonial, i) => {
              const targetScale = Math.max(
                0.55,
                1 - (testimonials.length - i - 1) * 0.08
              );

              return (
                <TestimonialStickyCard
                  key={`${testimonial.author}-${i}`}
                  i={i}
                  testimonial={testimonial}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                  clientLabel={t("clientLabel")}
                />
              );
            })}
          </div>
        </div>
      </section>
  );
};

export { TestimonialStack, TestimonialStickyCard };
