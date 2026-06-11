import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/Industries/Reveal";
import { gmailComposeHref } from "@/lib/booking";
import { getMarketContent } from "@/lib/market-content";
import { buildPageMetadata, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata("contact", locale);
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getMarketContent(locale);
  const isAr = locale === "ar";
  const subject = isAr ? "طلب مشروع جديد" : "New project request";
  const body = isAr
    ? "مرحباً Servicely،\n\nنريد مناقشة مشروع جديد.\n\nاسم الشركة:\nالدولة/المدينة:\nنوع المشروع:\nالمشكلة الحالية:\nالميزانية التقريبية:\nالجدول الزمني:\nطريقة التواصل المفضلة:\n\nشكراً."
    : "Hello Servicely,\n\nWe would like to discuss a new project.\n\nBusiness name:\nCountry/city:\nProject type:\nCurrent problem:\nBudget range:\nTimeline:\nPreferred contact method:\n\nThank you.";

  const infoItems = [
    {
      Icon: Clock3,
      label: isAr ? "رد أولي عملي" : "Practical first reply",
      href: null,
    },
    {
      Icon: CalendarDays,
      label: isAr ? "نطاق واضح قبل البناء" : "Clear scope before building",
      href: null,
    },
    {
      Icon: Mail,
      label: siteConfig.email,
      href: gmailComposeHref(siteConfig.email, subject, body),
    },
    {
      Icon: MessageCircle,
      label: "WhatsApp",
      href: siteConfig.social.whatsapp,
    },
  ];

  return (
    <main className="bg-white">
      <section className="px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-neutral-200 shadow-[0_28px_90px_rgba(15,23,42,0.18)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex flex-col justify-between bg-neutral-950 p-7 text-white sm:p-10">
              <div
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#365fd9] opacity-40 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-[#17ac87] opacity-30 blur-3xl"
                aria-hidden
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                  <CalendarDays className="h-4 w-4 text-blue-400" />
                  {isAr ? "نطاق المشروع" : "Project scope"}
                </div>

                <h1 className="mt-6 max-w-md text-4xl font-semibold leading-tight sm:text-5xl">
                  {content.contact.heroTitle}
                </h1>

                <p className="mt-5 max-w-md text-base leading-7 text-white/70">
                  {content.contact.heroBody}
                </p>
              </div>

              <div className="relative mt-10 flex flex-col gap-3">
                {infoItems.map(({ Icon, label, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#365fd9]/30 text-blue-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    {href ? (
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white/90 hover:text-white"
                      >
                        {label}
                      </Link>
                    ) : (
                      <span className="text-sm font-semibold text-white/90">
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5">
              <div className="flex h-full flex-col rounded-2xl bg-neutral-50 p-5">
                <div className="border-b border-neutral-200 pb-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    {isAr ? "ماذا سنسأل؟" : "What we will ask"}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-neutral-950">
                    {isAr ? "تفاصيل تساعدنا على فهم المشروع" : "Details that help us understand the project"}
                  </h2>
                </div>

                <div className="grid flex-1 content-start gap-3 py-5">
                  {content.contact.groups.map((group) => (
                    <article
                      key={group.title}
                      className="rounded-2xl border border-neutral-200 bg-white p-5"
                    >
                      <h3 className="text-lg font-semibold text-neutral-950">
                        {group.title}
                      </h3>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {group.fields.map((field) => (
                          <li
                            key={field}
                            className="flex items-start gap-2 text-sm leading-6 text-neutral-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                            <span>{field}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <div className="rounded-xl bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-600">
                  {content.contact.cta}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={siteConfig.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                      WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={gmailComposeHref(siteConfig.email, subject, body)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
                    >
                      {isAr ? "راسلنا" : "Email us"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
