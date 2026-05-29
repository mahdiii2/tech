"use client";

import {
  ArrowRight,
  ClipboardList,
  Coins,
  Star,
  UsersRound,
} from "lucide-react";
import { useMessages } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";
import { Reveal } from "@/components/Industries/Reveal";

type CooperationHero = {
  title: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
};

type CooperationModel = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

type CooperationMessages = {
  title?: string;
  subtitle?: string;
  hero?: CooperationHero;
  models?: CooperationModel[];
  ctaLabel?: string;
  ctaHref?: string;
};

type MessagesWithCooperation = AbstractIntlMessages & {
  ServicesPage?: {
    cooperation?: CooperationMessages;
  };
};

const modelIcons: Record<string, typeof ClipboardList> = {
  managed: ClipboardList,
  fixed: Coins,
  leasing: UsersRound,
};

export default function CooperationModels() {
  const messages = useMessages();
  const typedMessages = messages as MessagesWithCooperation;
  const cooperation = typedMessages.ServicesPage?.cooperation;

  if (!cooperation) return null;

  const hero = cooperation.hero;
  const models = cooperation.models ?? [];

  return (
    <section className="w-full bg-white py-16 sm:py-20" id="cooperation-models">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <Reveal>
          <div className="space-y-4 items-center mx-auto">
            <div className="items-center mx-auto text-4xl font-semibold text-neutral-900 ">
              {cooperation.title}
            </div>
            <p className="text-lg text-neutral-600">{cooperation.subtitle}</p>
          </div>
        </Reveal>

        {hero && (
          <Reveal>
          <article className="grid gap-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:grid-cols-2 transition hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
            <div className="space-y-5">
              <h3 className="text-3xl font-semibold text-neutral-900">
                {hero.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-600">
                {hero.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-[var(--dev-50)] px-3 py-1 text-sm font-semibold text-[var(--dev-500)] shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={hero.ctaHref}
                className="inline-flex items-center gap-2 text-base font-semibold text-neutral-900 underline decoration-2 decoration-transparent transition hover:decoration-neutral-900"
              >
                {hero.ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative md:h-56 md:w-56 max-w-full h-32 w-32">
                <div className="absolute inset-0 rounded-full bg-[var(--dev-100)]"></div>
                <div className="absolute inset-5 rounded-full border-[6px] border-[var(--dev-400)] bg-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-[var(--dev-500)] text-white">
                    <Star className="h-full w-full p-4 " />
                  </div>
                </div>
              </div>
            </div>
          </article>
          </Reveal>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model, modelIndex) => {
            const Icon = modelIcons[model.id] ?? ClipboardList;
            return (
              <Reveal key={model.id} delay={modelIndex * 0.08}>
              <article
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_15px_35px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="relative h-32 w-32">
                    <div className="absolute inset-0 rounded-full bg-[var(--dev-100)]"></div>
                    <div className="absolute inset-4 rounded-full border-[6px] border-[var(--dev-400)] bg-white"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--dev-500)] text-white">
                        <Icon className="h-8 w-8" strokeWidth={1.6} />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-semibold text-neutral-900">
                  {model.title}
                </h4>
                <p className="mt-3 flex-1 text-base text-neutral-600">
                  {model.description}
                </p>
                <span className="mt-4 inline-flex items-center self-start rounded-full bg-[var(--dev-50)] px-3 py-1 text-sm font-semibold text-[var(--dev-500)] shadow-sm">
                  {model.tag}
                </span>
              </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
