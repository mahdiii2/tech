import Link from "next/link";
import { CalendarDays, Clock3, Mail, MessageCircle, Video } from "lucide-react";

import { bookingUrl, meetingEmailHref, salesEmail } from "@/lib/booking";

const WHATSAPP_NUMBER = "+243 905 600 055";
const WHATSAPP_HREF = "https://wa.me/243905600055";

const INFO_ITEMS = [
  { Icon: Clock3, label: "30 minutes", href: null },
  { Icon: Video, label: "Online call", href: null },
  { Icon: Mail, label: salesEmail, href: `mailto:${salesEmail}` },
  { Icon: MessageCircle, label: WHATSAPP_NUMBER, href: WHATSAPP_HREF },
];

const meetingSlots = [
  "Monday morning",
  "Monday afternoon",
  "Tuesday morning",
  "Tuesday afternoon",
  "Wednesday morning",
  "Wednesday afternoon",
  "Thursday morning",
  "Thursday afternoon",
  "Friday morning",
  "Friday afternoon",
];

export default function SchedulePage() {
  return (
    <main className="bg-white">
      <section className="px-4 py-14 md:px-6 md:py-20 lg:px-8">
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
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#365fd9] opacity-15 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <CalendarDays className="h-4 w-4 text-blue-400" />
                Schedule a meeting
              </div>

              <h1 className="mt-6 max-w-sm text-4xl font-semibold leading-tight sm:text-5xl">
                Let&apos;s talk about your project
              </h1>

              <p className="mt-5 max-w-sm text-base leading-7 text-white/70">
                Book a free 30-minute call. Tell us about your website, custom
                app, attendance system, Power BI dashboard, or AI integration
                needs, and we&apos;ll map the next step together.
              </p>
            </div>

            <div className="relative mt-10 flex flex-col gap-3">
              {INFO_ITEMS.map(({ Icon, label, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#365fd9]/30 text-blue-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  {href ? (
                    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/90 hover:text-white">
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
            {bookingUrl ? (
              <iframe
                src={bookingUrl}
                title="Schedule a meeting with Tech Solutions RDC"
                className="h-full min-h-[640px] w-full rounded-2xl"
              />
            ) : (
              <div className="flex h-full flex-col rounded-2xl bg-neutral-50 p-5">
                <div className="border-b border-neutral-200 pb-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    Select a preferred time
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-neutral-950">
                    Meeting availability
                  </h2>
                </div>

                <div className="grid flex-1 content-start gap-3 py-5 sm:grid-cols-2">
                  {meetingSlots.map((slot) => (
                    <Link
                      key={slot}
                      href={meetingEmailHref(slot)}
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-4 text-left text-sm font-semibold text-neutral-800 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {slot}
                    </Link>
                  ))}
                </div>

                <p className="rounded-xl bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-600">
                  Choose a preferred time and we will confirm availability by
                  email. You can also write to {salesEmail} with a short
                  description of your project.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
