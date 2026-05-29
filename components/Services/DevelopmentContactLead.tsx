"use client";

import { ArrowRight, Linkedin } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";

type ContactLeadProps = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  linkedinLabel: string;
  linkedinHref: string;
  name: string;
  role: string;
  photoSrc: string;
};

export function DevelopmentContactLead({
  heading,
  body,
  ctaLabel,
  ctaHref,
  linkedinLabel,
  linkedinHref,
  name,
  role,
  photoSrc,
}: ContactLeadProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="relative mx-auto flex w-full max-w-sm flex-col items-center lg:max-w-xs">
          <div className="absolute -left-17 -top-15 hidden h-52 w-52 rounded-full bg-[#eaf2ff] lg:block" />
          <div className="relative overflow-hidden rounded-3xl bg-[#cfe3ff]">
            <Image
              src={photoSrc}
              alt={name}
              width={420}
              height={480}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="mt-4 flex w-full items-start justify-between gap-3">
            <div className="space-y-1">
              <p className="text-lg font-semibold text-neutral-900">{name}</p>
              <p className="text-sm uppercase tracking-wide text-neutral-600">
                {role}
              </p>
            </div>
            {linkedinHref ? (
              <a
                href={linkedinHref}
                aria-label={linkedinLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-[#0a66c2] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            ) : null}
          </div>
        </div>

        <div
          className={`flex flex-1 flex-col gap-6 ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          <h3 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
            {heading}
          </h3>
          <p className="text-lg leading-relaxed text-neutral-700">
            {name} {body}
          </p>
          <div className={isRtl ? "flex justify-end" : ""}>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
            >
              {ctaLabel}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
