import { Link } from "@/i18n/navigation";
import { BarChart3, CheckCircle2, Clock3, Fingerprint } from "lucide-react";

import { Button } from "@/components/ui/button";

type AttendanceSpotlightProps = {
  title: string;
  body: string;
  points: string[];
  target: string;
  ctaLabel: string;
  ctaHref: string;
};

const icons = [Clock3, Fingerprint, BarChart3, CheckCircle2];

export function AttendanceSpotlight({
  title,
  body,
  points,
  target,
  ctaLabel,
  ctaHref,
}: AttendanceSpotlightProps) {
  return (
    <section className="bg-white px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-950 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative flex min-h-[380px] flex-col justify-between p-7 sm:p-10">
          <div
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#365fd9] opacity-45 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-[#17ac87] opacity-35 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
              {body}
            </p>
          </div>
          <div className="relative mt-8">
            <Button
              asChild
              className="rounded-full bg-white px-6 py-5 text-sm font-semibold text-neutral-950 hover:bg-white/90"
            >
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white p-5 text-neutral-900 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={point}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf2ff] text-[#365fd9]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6">
                    {point}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-2xl bg-[#e9f8f3] p-5 text-sm font-semibold leading-7 text-[#0d6c57]">
            {target}
          </div>
        </div>
      </div>
    </section>
  );
}
