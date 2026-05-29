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
          <p className="text-2xl font-semibold leading-[1.6] text-neutral-900 sm:text-3xl">
            &quot;{quote}&quot;
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="space-y-2 text-center text-sm font-semibold text-neutral-900 sm:text-base">
            <div>{name}</div>
            <div className="text-neutral-700">{role}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
