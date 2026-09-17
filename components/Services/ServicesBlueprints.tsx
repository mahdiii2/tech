"use client";

import { ArrowRight, Bot, Code2, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useMessages } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Industries/Reveal";

type BlueprintSectionMessage = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  tags: string[];
  typicalRelease?: string;
  scopeBoundary?: string;
};

type BlueprintMessages = {
  heading?: string;
  supportingLabel?: string;
  supportingCapabilities?: string[];
  feasibilityNote?: string;
  typicalReleaseLabel?: string;
  scopeBoundaryLabel?: string;
  sections?: BlueprintSectionMessage[];
};

type MessagesWithServicesPage = AbstractIntlMessages & {
  ServicesPage?: {
    blueprints?: BlueprintMessages;
  };
};

type SectionTheme = {
  accent: string;
  iconBg: string;
  badgeBg: string;
  Icon: LucideIcon;
};

const SECTION_ORDER = [
  "ai-business-automation",
  "custom-business-software",
  "websites-customer-platforms",
];
const SECTION_RANK = new Map(
  SECTION_ORDER.map((id, index) => [id, index])
);

const LEGACY_SECTION_ALIASES: Record<string, string[]> = {
  "ai-business-automation": ["ai-automation", "whatsapp-automation"],
  "custom-business-software": ["custom-software", "data-reporting"],
};

const sectionThemes: Record<string, SectionTheme> = {
  "ai-business-automation": {
    accent: "#e11d48",
    iconBg: "#ffe4e6",
    badgeBg: "#fff1f2",
    Icon: Bot,
  },
  "custom-business-software": {
    accent: "var(--design-500)",
    iconBg: "var(--design-100)",
    badgeBg: "var(--design-100)",
    Icon: Code2,
  },
  "websites-customer-platforms": {
    accent: "var(--engagement-500)",
    iconBg: "var(--engagement-100)",
    badgeBg: "var(--engagement-50)",
    Icon: Globe2,
  },
};

export default function ServicesBlueprints() {
  const locale = useLocale();
  const messages = useMessages();
  const typedMessages = messages as MessagesWithServicesPage;
  const blueprintMessages = typedMessages.ServicesPage?.blueprints;

  const sections = useMemo(
    () =>
      [...(blueprintMessages?.sections ?? [])].sort(
        (a, b) =>
          (SECTION_RANK.get(a.id) ?? Number.MAX_SAFE_INTEGER) -
          (SECTION_RANK.get(b.id) ?? Number.MAX_SAFE_INTEGER)
      ),
    [blueprintMessages]
  );
  const heading = blueprintMessages?.heading ?? "";
  const supportingLabel = blueprintMessages?.supportingLabel ?? "";
  const supportingCapabilities =
    blueprintMessages?.supportingCapabilities ?? [];
  const feasibilityNote = blueprintMessages?.feasibilityNote ?? "";
  const typicalReleaseLabel = blueprintMessages?.typicalReleaseLabel ?? "";
  const scopeBoundaryLabel = blueprintMessages?.scopeBoundaryLabel ?? "";

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id ?? ""
  );
  const derivedActiveSection = useMemo(() => {
    if (sections.some((section) => section.id === activeSection)) {
      return activeSection;
    }
    return sections[0]?.id ?? "";
  }, [sections, activeSection]);

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-section-id");
          if (id) {
            setActiveSection(id);
          }
        }
      },
      {
        root: null,
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => {
      const node = sectionRefs.current[section.id];
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections.length) {
    return null;
  }

  const handleNavClick = (id: string) => {
    const target = sectionRefs.current[id];
    if (!target) return;

    setActiveSection(id);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="w-full bg-white py-16 sm:py-20"
      id="services-blueprints"
    >
      <div className="mx-auto mb-10 flex w-full max-w-6xl justify-center px-4 sm:px-6">
        <div className="flex w-full max-w-5xl flex-col items-stretch gap-3 rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg shadow-neutral-900/5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 sm:p-2 lg:flex-nowrap lg:rounded-full">
          {sections.map((section) => {
            const theme =
              sectionThemes[section.id] ??
              sectionThemes["ai-business-automation"];
            const isActive = section.id === derivedActiveSection;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNavClick(section.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 opacity-90 sm:px-9 sm:py-3.5 sm:text-lg"
                )}
                style={{
                  backgroundColor: theme.accent,
                }}
                aria-pressed={isActive}
                aria-label={section.title}
              >
                {section.title}
              </button>
            );
          })}
        </div>
      </div>
      {supportingCapabilities.length ? (
        <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
          <p
            className={cn(
              "text-xs font-semibold text-neutral-500",
              locale === "ar"
                ? "tracking-normal"
                : "uppercase tracking-[0.18em]"
            )}
          >
            {supportingLabel}
          </p>
          <ul className="flex flex-wrap justify-center gap-2.5" aria-label={supportingLabel}>
            {supportingCapabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700"
              >
                {capability}
              </li>
            ))}
          </ul>
          {feasibilityNote ? (
            <p className="max-w-3xl rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm leading-6 text-neutral-600">
              {feasibilityNote}
            </p>
          ) : null}
        </div>
      ) : null}
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:gap-16">
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-42">
            <Reveal>
              <h2 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-7xl">
                {heading}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 lg:w-2/3 lg:pr-4">
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => {
              const theme =
                sectionThemes[section.id] ??
                sectionThemes["ai-business-automation"];
              const Icon = theme.Icon;
              return (
                <Reveal key={section.id} delay={sectionIndex * 0.08}>
                <article
                  id={section.id}
                  ref={(node) => {
                    sectionRefs.current[section.id] = node;
                  }}
                  data-section-id={section.id}
                  className="scroll-mt-32 rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  {(LEGACY_SECTION_ALIASES[section.id] ?? []).map((alias) => (
                    <span
                      key={alias}
                      id={alias}
                      className="block scroll-mt-32"
                      aria-hidden="true"
                    />
                  ))}
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: theme.iconBg,
                          color: theme.accent,
                        }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-2xl font-semibold text-neutral-900">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {section.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-sm font-medium"
                        style={{
                          backgroundColor: theme.badgeBg,
                          color: theme.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-neutral-600">
                    {section.description}
                  </p>

                  {section.typicalRelease || section.scopeBoundary ? (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.typicalRelease ? (
                        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                          <p className={cn("text-xs font-semibold text-neutral-500", locale === "ar" ? "tracking-normal" : "uppercase tracking-[0.12em]")}>
                            {typicalReleaseLabel}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-neutral-700">
                            {section.typicalRelease}
                          </p>
                        </div>
                      ) : null}
                      {section.scopeBoundary ? (
                        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                          <p className={cn("text-xs font-semibold text-neutral-500", locale === "ar" ? "tracking-normal" : "uppercase tracking-[0.12em]")}>
                            {scopeBoundaryLabel}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-neutral-700">
                            {section.scopeBoundary}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  <Link
                    href={section.ctaHref}
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition focus-visible:ring-2 focus-visible:ring-offset-2 hover:brightness-110"
                    style={{
                      backgroundColor: theme.accent,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                    }}
                  >
                    {section.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
