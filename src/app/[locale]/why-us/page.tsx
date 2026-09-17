import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  MessagesSquare,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { AnimatedHeroBackground } from "@/components/Industries/AnimatedHeroBackground";
import { Reveal } from "@/components/Industries/Reveal";
import { PageStructuredData } from "@/components/Seo/PageStructuredData";
import { getMarketContent } from "@/lib/market-content";
import { buildPageMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

const icons = [MessagesSquare, Workflow, Sparkles, CheckCircle2, Code2];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata("whyUs", locale);
}

export default async function WhyUsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getMarketContent(locale);
  const isAr = locale === "ar";
  const points = isAr
    ? [
        "خريطة واضحة لسير العمل",
        "فحص الوصول والبيانات وواجهات API",
        "نطاق مكتوب للإصدار الأول",
        "عروض عملية في نقاط متفق عليها",
        "خطة للإطلاق والتسليم والدعم",
      ]
    : [
        "Mapped workflow",
        "Access, data, and API feasibility check",
        "Written first-release scope",
        "Working demos at agreed checkpoints",
        "Launch, handover, and support plan",
      ];
  const ctaCopy = isAr
    ? {
        heroLabel: "ناقش سير العمل معنا",
        eyebrow: "خطوة أولى واضحة",
        heading: "شاركنا سير العمل والأدوات والبيانات والقيود والنتيجة التي تحتاجها.",
        finalLabel: "اطلب نطاقاً للمشروع",
      }
    : {
        heroLabel: "Discuss your workflow",
        eyebrow: "A sensible first step",
        heading: "Bring us the workflow, tools, data, constraints, and outcome you need.",
        finalLabel: "Request a project scope",
      };

  return (
    <main className="bg-white text-neutral-950">
      <PageStructuredData page="whyUs" locale={locale} />
      <AnimatedHeroBackground color="var(--design-500)">
        <div
          id="why-us-overview"
          className="mx-auto flex min-h-[50vh] max-w-4xl scroll-mt-32 flex-col items-center justify-center gap-6 text-center"
        >
          <Reveal>
            <p className={`text-sm font-semibold text-[#365fd9] ${isAr ? "tracking-normal" : "uppercase tracking-[0.18em]"}`}>
              {isAr ? "لماذا نحن" : "Why Us"}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
              {content.whyUs.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-700 md:text-xl">
              {content.whyUs.heroBody}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800"
            >
              {ctaCopy.heroLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </AnimatedHeroBackground>

      <section className="mx-auto grid max-w-6xl gap-3 px-4 py-10 sm:grid-cols-2 md:px-6 lg:grid-cols-5 lg:px-8">
        {points.map((point, index) => (
          <Reveal key={point} delay={(index % 5) * 0.06}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold leading-6 transition hover:border-neutral-300 hover:bg-white hover:shadow-[0_14px_35px_rgba(0,0,0,0.05)]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{point}</span>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {content.whyUs.sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={section.title} delay={(index % 2) * 0.08}>
                <article className="group h-full rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf2ff] text-[#365fd9] transition group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-neutral-700">
                    {section.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-neutral-950 p-6 text-white sm:p-8 md:flex md:items-center md:justify-between">
            <div>
              <p className={`text-sm font-semibold text-white/55 ${isAr ? "tracking-normal" : "uppercase tracking-[0.18em]"}`}>
                {ctaCopy.eyebrow}
              </p>
              <h2 className="mt-2 max-w-2xl text-2xl font-semibold md:text-3xl">
                {ctaCopy.heading}
              </h2>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100 md:mt-0"
            >
              {ctaCopy.finalLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
