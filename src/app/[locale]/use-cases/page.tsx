import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  Clock3,
  Workflow,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { AnimatedHeroBackground } from "@/components/Industries/AnimatedHeroBackground";
import { Reveal } from "@/components/Industries/Reveal";
import { getIndustriesCopy } from "@/components/Industries/data";
import { buildPageMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata("useCases", locale);
}

export default async function UseCasesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pageCopy = getIndustriesCopy(locale);
  const { detail, problemsLabels } = pageCopy;

  return (
    <main className="bg-white">
      <AnimatedHeroBackground color="var(--engagement-500)">
        <div className="mx-auto flex min-h-[42vh] max-w-4xl flex-col items-center justify-center gap-6 text-center">
          <Reveal delay={0}>
            <Link
              href="/industries#primary-industries"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
            >
              <ArrowLeft className="h-4 w-4" />
              {detail.backLabel}
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {pageCopy.useCasesHeroEyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.16}>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
              {pageCopy.useCasesHeroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 md:text-xl">
              {pageCopy.useCasesHeroBody}
            </p>
          </Reveal>
        </div>
      </AnimatedHeroBackground>

      <div className="border-y border-neutral-200 bg-white">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-4 md:px-6 lg:px-8">
          {pageCopy.industries.map((industry) => (
            <a
              key={industry.id}
              href={`#${industry.id}`}
              className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
            >
              {industry.title}
            </a>
          ))}
        </nav>
      </div>

      {pageCopy.industries.map((industry, sectionIndex) => {
        const Icon = industry.Icon;
        const isAlt = sectionIndex % 2 === 1;

        return (
          <section
            key={industry.id}
            id={industry.id}
            className={`scroll-mt-32 ${isAlt ? "bg-neutral-50" : "bg-white"}`}
          >
            <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
              <Reveal>
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span
                      className="block h-1.5 w-12 rounded-full"
                      style={{ backgroundColor: industry.color }}
                      aria-hidden
                    />
                    <div
                      className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md"
                      style={{ backgroundColor: industry.color }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl">
                      {industry.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm font-semibold text-neutral-600">
                      {industry.subtitle}
                    </p>
                  </div>
                  <div
                    className="max-w-md rounded-2xl px-5 py-4 text-sm font-semibold leading-7"
                    style={{
                      backgroundColor: industry.bg,
                      color: "var(--foreground)",
                    }}
                  >
                    {industry.outcome}
                  </div>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {industry.useCases.map((useCase, caseIndex) => (
                  <Reveal key={useCase.title} delay={caseIndex * 0.08}>
                    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                      <div
                        className="flex items-start gap-3 p-6"
                        style={{ backgroundColor: industry.bg }}
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                          style={{ backgroundColor: industry.color }}
                        >
                          {caseIndex + 1}
                        </span>
                        <h3 className="text-lg font-semibold leading-7 text-neutral-900">
                          {useCase.title}
                        </h3>
                      </div>

                      <div className="flex flex-1 flex-col gap-5 p-6">
                        <div>
                          <p
                            className="text-xs font-bold uppercase tracking-[0.18em]"
                            style={{ color: industry.color }}
                          >
                            {problemsLabels.problem}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-neutral-700">
                            {useCase.problem}
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-xs font-bold uppercase tracking-[0.18em]"
                            style={{ color: industry.color }}
                          >
                            {problemsLabels.solution}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-neutral-700">
                            {useCase.solution}
                          </p>
                        </div>
                        <div className="mt-auto flex gap-3 rounded-2xl bg-neutral-50 p-4">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0"
                            style={{ color: industry.color }}
                          />
                          <div>
                            <p
                              className="text-xs font-bold uppercase tracking-[0.18em]"
                              style={{ color: industry.color }}
                            >
                              {problemsLabels.result}
                            </p>
                            <p className="mt-1 text-sm font-semibold leading-6 text-neutral-900">
                              {useCase.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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
