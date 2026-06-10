import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Workflow,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { AnimatedHeroBackground } from "@/components/Industries/AnimatedHeroBackground";
import { Reveal } from "@/components/Industries/Reveal";
import { getIndustriesCopy } from "@/components/Industries/data";
import { localizedAlternates, localePath } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "القطاعات - أنظمة عملية للعملاء"
      : "Industries - Practical Customer Systems",
    description: isAr
      ? "أنظمة عملية للعيادات والعقارات والسيارات والخدمات الميدانية في منطقة MENA، مع تركيز على لبنان والعراق والإمارات."
      : "Practical systems for clinics, real estate agencies, automotive teams and field service businesses across MENA, with a focus on Lebanon, Iraq and the UAE.",
    alternates: localizedAlternates("/industries", locale),
    openGraph: {
      title: isAr ? "القطاعات | Servicely" : "Industries | Servicely",
      description: isAr
        ? "أنظمة عملية لتحسين الاستفسارات والمواعيد والعملاء المحتملين والطلبات والمتابعة."
        : "Practical systems for inquiries, appointments, leads, requests, and follow-up.",
      url: localePath(locale, "/industries"),
    },
  };
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pageCopy = getIndustriesCopy(locale);

  return (
    <main className="bg-white">
      <AnimatedHeroBackground color="var(--dev-500)">
        <div className="mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center gap-6 text-center md:gap-8">
          <Reveal delay={0}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#365fd9]">
              {pageCopy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
              {pageCopy.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-700 md:text-xl">
              {pageCopy.body}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="max-w-2xl text-base leading-7 text-neutral-500">
              {pageCopy.support}
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href={pageCopy.ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800"
              >
                {pageCopy.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/use-cases#clinics-medical-centers"
                className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-7 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-400"
              >
                {pageCopy.viewUseCasesLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </AnimatedHeroBackground>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 md:px-6 lg:px-8">
        {pageCopy.metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 0.1}>
            <div className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-300 hover:bg-white hover:shadow-[0_14px_35px_rgba(0,0,0,0.05)]">
              <p className="text-3xl font-semibold text-neutral-900">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {metric.label}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <section
        id="primary-industries"
        className="mx-auto max-w-6xl scroll-mt-32 px-4 py-12 md:px-6 lg:px-8 lg:py-16"
      >
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#17ac87]">
              {pageCopy.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl">
              {pageCopy.sectionTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              {pageCopy.sectionBody}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pageCopy.industries.map((industry, index) => {
            const Icon = industry.Icon;

            return (
              <Reveal key={industry.id} delay={(index % 3) * 0.08}>
                <article
                  id={industry.id}
                  className="group flex h-full scroll-mt-32 flex-col rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.08)]"
                  style={{ backgroundColor: industry.bg }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-md transition group-hover:scale-105"
                      style={{ backgroundColor: industry.color }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold leading-tight text-neutral-900">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-neutral-700">
                    {industry.body}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                      {pageCopy.helpsWithLabel}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {industry.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm leading-6 text-neutral-800"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: industry.color }}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {industry.tags ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-white/80 px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <Link
                    href={`/use-cases#${industry.id}`}
                    className="mt-auto flex items-center gap-3 pt-8 text-base font-semibold text-neutral-900"
                  >
                    <span>{pageCopy.viewUseCasesLabel}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <Reveal>
          <div className="grid overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-950 text-white md:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 sm:p-10">
              <div className="flex gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Workflow className="h-6 w-6 text-[#e3f94c]" />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Clock3 className="h-6 w-6 text-[#66d6b2]" />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <BarChart3 className="h-6 w-6 text-[#94adff]" />
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">
                {pageCopy.closingTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/75">
                {pageCopy.closingBody}
              </p>
            </div>
            <div className="grid gap-3 bg-white p-5 text-neutral-900 sm:p-8">
              {pageCopy.closingChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold leading-6"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
