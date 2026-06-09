import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  LifeBuoy,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { AnimatedHeroBackground } from "@/components/Industries/AnimatedHeroBackground";
import { Reveal } from "@/components/Industries/Reveal";
import { getMarketContent } from "@/lib/market-content";
import { localizedAlternates, localePath } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

const icons = [LifeBuoy, ShieldCheck, Wrench, Cloud];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "الدعم والاستضافة والصيانة"
      : "Support, Hosting & Maintenance",
    description: isAr
      ? "خيارات دعم واستضافة وصيانة لأنظمة الأعمال، تشمل الدعم القياسي، الأولوية، 24/7، النسخ الاحتياطي، SSL، المراقبة، وإدارة النشر."
      : "Support, hosting and maintenance options for business systems, including standard support, priority support, 24/7 coverage, backups, SSL, monitoring, and deployment management.",
    alternates: localizedAlternates("/support-hosting", locale),
    openGraph: {
      title: isAr
        ? "الدعم والاستضافة | Servicely"
        : "Support & Hosting | Servicely",
      description: isAr
        ? "خيارات دعم وصيانة بعد الإطلاق حسب أهمية المشروع."
        : "Post-launch support and maintenance options based on project importance.",
      url: localePath(locale, "/support-hosting"),
    },
  };
}

export default async function SupportHostingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getMarketContent(locale);
  const isAr = locale === "ar";

  return (
    <main className="bg-white text-neutral-950">
      <AnimatedHeroBackground color="var(--engagement-500)">
        <div className="mx-auto flex min-h-[50vh] max-w-4xl flex-col items-center justify-center gap-6 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#365fd9]">
              {isAr ? "الدعم والاستضافة" : "Support & Hosting"}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
              {content.support.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-700 md:text-xl">
              {content.support.heroBody}
            </p>
          </Reveal>
        </div>
      </AnimatedHeroBackground>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {content.support.sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            const color =
              index % 3 === 0
                ? "var(--dev-500)"
                : index % 3 === 1
                  ? "var(--engagement-500)"
                  : "var(--design-500)";
            const bg =
              index % 3 === 0
                ? "var(--dev-50)"
                : index % 3 === 1
                  ? "var(--engagement-50)"
                  : "var(--design-50)";

            return (
              <Reveal key={section.title} delay={(index % 2) * 0.08}>
                <article
                  className="group flex h-full flex-col rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.08)]"
                  style={{ backgroundColor: bg }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition group-hover:scale-105"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-neutral-950">
                    {section.title}
                  </h2>
                  <ul className="mt-5 grid gap-2">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-6 text-neutral-800"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 lg:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-950 text-white md:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 sm:p-10">
              <div className="flex gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <LifeBuoy className="h-6 w-6 text-[#e3f94c]" />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck className="h-6 w-6 text-[#66d6b2]" />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Cloud className="h-6 w-6 text-[#94adff]" />
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">
                {isAr
                  ? "اختر مستوى الدعم حسب أهمية النظام."
                  : "Choose the support level based on how important the system is."}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/75">
                {isAr
                  ? "لا نعد بتوفر غير مدعوم. يمكن ترتيب خيارات بنية تحتية مدعومة باتفاقية مستوى خدمة حتى 99.99% حسب البنية وخطة الاستضافة."
                  : "We do not promise unsupported uptime. SLA-backed infrastructure options up to 99.99% can be arranged depending on architecture and hosting plan."}
              </p>
            </div>
            <div className="grid content-center gap-3 bg-white p-5 text-neutral-900 sm:p-8">
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                {content.common.startProject}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="max-w-md text-sm leading-7 text-neutral-600">
                {isAr
                  ? "أخبرنا بمدى أهمية النظام وسنقترح مستوى الدعم المناسب."
                  : "Tell us how critical the system is and we will suggest the right support level."}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
