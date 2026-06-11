import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, BarChart3, Clock3, Code2, Workflow } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/Industries/Reveal";
import { buildPageMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

type AboutHero = {
  title: string;
  bodyLines: string[];
  ctaLabel: string;
  ctaHref: string;
  servicesLabel: string;
  servicesHref: string;
  clientsLabel: string;
  clientsHref: string;
};

type AboutCard = {
  title: string;
  body: string;
};

const icons = [Code2, Clock3, Workflow, BarChart3];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata("about", locale);
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");
  const hero = t.raw("hero") as AboutHero;
  const pillars = t.raw("pillars.cards") as AboutCard[];
  const stats = t.raw("stats.items") as { value: string; label: string }[];
  const introBody = t.raw("intro.body") as string[];

  return (
    <main className="bg-white text-neutral-950">
      <section
        id="about-servicely"
        className="mx-auto max-w-6xl scroll-mt-32 px-5 pb-8 pt-10 md:px-6 md:pb-12 md:pt-14 lg:px-8"
      >
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#365fd9]">
                {hero.servicesLabel}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
                {hero.bodyLines[0]}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={hero.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  {hero.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={hero.clientsHref}
                  className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-950"
                >
                  {hero.clientsLabel}
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-neutral-200 px-2 py-4 last:border-b-0"
                >
                  <p className="text-2xl font-semibold text-neutral-950">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-neutral-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl border-y border-neutral-200 px-5 py-8 md:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#365fd9]">
                {t("intro.eyebrow")}
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-neutral-900">
                {t("intro.title")}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {introBody.map((line) => (
                <p
                  key={line}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 text-base leading-7 text-neutral-700"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-9 md:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#17ac87]">
                {t("pillars.eyebrow")}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-neutral-900 md:text-4xl">
                {t("pillars.title")}
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {pillars.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={card.title} delay={(index % 2) * 0.08}>
                <article className="h-full rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2ff] text-[#365fd9]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-tight text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">
                    {card.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-1 md:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-neutral-950 p-6 text-white sm:p-8 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                {t("localTrust.eyebrow")}
              </p>
              <h2 className="mt-2 max-w-2xl text-2xl font-semibold md:text-3xl">
                {t("localTrust.title")}
              </h2>
            </div>
            <Link
              href={hero.ctaHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100 md:mt-0"
            >
              {hero.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
