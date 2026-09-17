"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Industries/Reveal";

type TransformationTestimonialProps = {
  namespace?: string;
  backgroundColor?: string;
};

export default function TransformationTestimonial({
  namespace = "ServicesPage.testimonial",
  backgroundColor = "#f1f8fd",
}: TransformationTestimonialProps) {
  const t = useTranslations(namespace);

  const quote = t("quote");
  const name = t("name");
  const role = t("role");

  return (
    <section className="w-full mt-20 p-10 sm:py-30" style={{ backgroundColor }}>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 text-center">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-600">
              {name}
            </p>
            <p className="mt-5 text-2xl font-semibold leading-[1.6] text-neutral-900 sm:text-3xl">
              {quote}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-center text-sm font-semibold text-neutral-700 sm:text-base">
            {role}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
