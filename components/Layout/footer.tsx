"use client";

import { Link } from "@/i18n/navigation";
import {
  CalendarDays,
  Facebook,
  Instagram,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { gmailComposeHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const SOCIALS: { label: string; Icon: LucideIcon; href: string; color: string }[] = [
  {
    label: "instagram",
    Icon: Instagram,
    href: siteConfig.social.instagram,
    color: "#E1306C",
  },
  {
    label: "facebook",
    Icon: Facebook,
    href: siteConfig.social.facebook,
    color: "#1877F2",
  },
].filter((item) => item.href);

export default function SiteFooter() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const navLinks = t.raw("navLinks") as { label: string; href: string }[];
  const serviceDots = t.raw("serviceDots") as { label: string; href: string }[];
  const locations = t.raw("locations") as { title: string; subtitle: string }[];
  const phones = siteConfig.phones;
  const email = siteConfig.email;
  const showPhone = phones.length > 0;

  return (
    <footer className="w-full border-t bg-white text-black">
      <div className="w-full border-b">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-10">
          <Link
            href="/"
            className="flex h-12 items-center text-2xl font-bold tracking-tight text-neutral-950"
          >
            {t("brand")}
          </Link>
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, Icon, href, color }) => (
              <Link
                key={`top-${label}`}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:border-neutral-300"
                style={{ color }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
            <Link
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-[#25D366] hover:border-neutral-300"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-8 px-6 py-8 lg:grid lg:grid-cols-[1fr_360px] lg:items-stretch lg:px-10">
        <div
          className={`border-b pb-8 lg:border-b-0 lg:border-neutral-200 lg:pb-0 ${
            isRTL ? "lg:border-l lg:pl-12" : "lg:border-r lg:pr-12"
          }`}
        >
          <div className="grid gap-8 text-base font-medium sm:grid-cols-2 lg:grid-cols-3">
            <nav className="space-y-4 text-[15px] leading-relaxed">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block hover:text-neutral-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-4 text-[15px] leading-relaxed">
              {serviceDots.map((dot, index) => (
                <ServiceDot
                  key={`${dot.label}-${index}`}
                  label={dot.label}
                  href={dot.href}
                  colorClass={
                    index === 0
                      ? "bg-[#365fd9]"
                      : index === 1
                        ? "bg-[#e3f94c]"
                        : "bg-[#17ac87]"
                  }
                />
              ))}
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-neutral-800">
              {locations.map((loc, idx) => (
                <div key={`${loc.title}-${idx}`} className="space-y-1">
                  <p className="font-semibold">{loc.title}</p>
                  <p className="text-sm text-neutral-600">{loc.subtitle}</p>
                </div>
              ))}
              <div className="flex flex-col gap-1">
                {showPhone ? (
                  phones.map((phone) => (
                    <Link
                      key={phone.href}
                      href={phone.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-semibold hover:text-neutral-600"
                    >
                      {phone.label}
                    </Link>
                  ))
                ) : null}
                <Link
                  href={gmailComposeHref(email)}
                  className="block text-sm text-neutral-800 hover:text-neutral-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {email}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex w-full flex-col gap-6 lg:items-end ${
            isRTL ? "lg:pr-12" : "lg:pl-12"
          }`}
        >
          <div className="w-full max-w-md rounded-[24px] border border-neutral-200 p-5 shadow-sm sm:p-6 lg:self-end">
            <p className="text-sm font-semibold text-neutral-900">
              {t("ctaGradient")}
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              {t("newsletterHeading")}
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {t("newsletterBody")}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                <CalendarDays className="h-4 w-4" />
                {t("meetingCta")}
              </Link>
              <Link
                href={gmailComposeHref(email)}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-300"
                target="_blank"
                rel="noreferrer"
              >
                <Mail className="h-4 w-4" />
                {t("emailCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t px-6 py-4 lg:px-12">
        <div className="flex w-full flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/privacy" className="hover:text-neutral-800">
            {t("privacy")}
          </Link>
          <span>{t("legal")}</span>
        </div>
      </div>
    </footer>
  );
}

function ServiceDot({
  label,
  colorClass,
  href,
}: {
  label: string;
  colorClass: string;
  href: string;
}) {
  return (
    <Link href={href} className="flex items-center gap-3 hover:text-neutral-600">
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${colorClass}`}
        aria-hidden="true"
      />
      <span>{label}</span>
    </Link>
  );
}
