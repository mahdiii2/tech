import type { Metadata } from "next";
import { salesEmail } from "@/lib/booking";

/**
 * Central site metadata used for SEO, Open Graph, structured data and the
 * sitemap. Override the public URL per environment with NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://servicely.tech"
).replace(/\/$/, "");

export const isSearchIndexable = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";

export const siteConfig = {
  name: "Servicely",
  shortName: "Servicely",
  url: siteUrl,
  description:
    "Servicely builds custom software, web and mobile apps, internal portals, AI and WhatsApp automations, integrations, and reporting for workflow-heavy service businesses.",
  tagline: "Custom software and automation for workflow-heavy businesses",
  email: salesEmail,
  phone: "+96171383987",
  phoneHref: "+96171383987",
  phones: [
    {
      label: "+96171383987",
      href: "https://wa.me/96171383987",
    },
  ],
  locale: "en",
  localeAlternates: ["ar"],
  ogImage: `${siteUrl}/opengraph-image`,
  logo: `${siteUrl}/icon.png`,
  areaServed: ["Worldwide"],
  keywords: [
    "custom business software",
    "construction workflow software",
    "contractor lead management automation",
    "skilled trades scheduling software",
    "dental clinic appointment automation",
    "medical clinic inquiry management",
    "independent car dealership software",
    "dealership lead follow-up automation",
    "AI workflow automation",
    "WhatsApp conversation automation",
    "lead qualification and routing",
    "internal portal development",
    "business system integrations",
    "Power BI reporting dashboards",
    "custom web and mobile apps",
  ],
  social: {
    instagram: "",
    facebook: "",
    whatsapp: "https://wa.me/96171383987",
  },
  get sameAs(): string[] {
    return [this.social.instagram, this.social.facebook].filter(Boolean);
  },
} as const;

export const locales = ["en", "ar"] as const;
export const defaultLocale = "en";
export type Locale = (typeof locales)[number];

const localizedSeo = {
  en: {
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
  },
  ar: {
    tagline: "برمجيات مخصصة وأتمتة لعمليات الأعمال",
    description:
      "تبني Servicely برمجيات مخصصة وتطبيقات وبوابات وأتمتة بالذكاء الاصطناعي وواتساب وتكاملات وتقارير للشركات الخدمية ذات العمليات المتعددة.",
    keywords: [
      "برمجيات أعمال مخصصة",
      "برمجيات سير العمل لشركات المقاولات",
      "أتمتة إدارة العملاء المحتملين للمقاولين",
      "برمجيات جدولة الخدمات الفنية",
      "أتمتة مواعيد عيادات الأسنان",
      "إدارة استفسارات العيادات الطبية",
      "برمجيات معارض السيارات المستقلة",
      "أتمتة متابعة العملاء المحتملين لمعارض السيارات",
      "أتمتة سير العمل بالذكاء الاصطناعي",
      "أتمتة محادثات واتساب",
      "تأهيل العملاء المحتملين وتوجيههم",
      "تطوير بوابات داخلية",
      "تكامل أنظمة الأعمال",
      "لوحات معلومات وتقارير Power BI",
      "تطوير تطبيقات ويب وجوال مخصصة",
    ],
  },
} as const;

const pageSeo = {
  home: {
    path: "/",
    en: {
      title: "Custom Software & Automation for Service Teams",
      description:
        "Custom software, AI and WhatsApp automation, integrations, and reporting for construction and skilled trades, clinics, and independent car dealerships.",
      keywords: [
        "custom software for service businesses",
        "construction workflow automation",
        "clinic and dealership software",
      ],
    },
    ar: {
      title: "برمجيات مخصصة وأتمتة للفرق الخدمية",
      description:
        "برمجيات مخصصة وأتمتة بالذكاء الاصطناعي وواتساب وتكاملات وتقارير للمقاولات والخدمات الفنية والعيادات ومعارض السيارات المستقلة.",
      keywords: [
        "برمجيات مخصصة للشركات الخدمية",
        "أتمتة سير العمل لشركات المقاولات",
        "برمجيات للعيادات ومعارض السيارات",
      ],
    },
  },
  services: {
    path: "/services",
    en: {
      title: "Custom Software & Workflow Automation Services",
      description:
        "Explore custom web and mobile apps, internal portals, AI and workflow automation, WhatsApp lead flows, integrations, Power BI reporting, and support.",
      keywords: [
        "custom software development services",
        "AI workflow automation services",
        "WhatsApp lead automation",
        "internal portal development",
        "Power BI and systems integration",
      ],
    },
    ar: {
      title: "خدمات البرمجيات المخصصة وأتمتة سير العمل",
      description:
        "استكشف تطبيقات الويب والجوال والبوابات الداخلية وأتمتة سير العمل بالذكاء الاصطناعي ومسارات واتساب للعملاء المحتملين والتكاملات وتقارير Power BI والدعم.",
      keywords: [
        "خدمات تطوير البرمجيات المخصصة",
        "خدمات أتمتة سير العمل بالذكاء الاصطناعي",
        "أتمتة مسارات العملاء المحتملين عبر واتساب",
        "تطوير بوابات داخلية",
        "تكامل الأنظمة وتقارير Power BI",
      ],
    },
  },
  industries: {
    path: "/industries",
    en: {
      title: "Software for Construction, Clinics & Dealerships",
      description:
        "See intake, scheduling, lead-handoff, follow-up, and reporting workflows for construction and trade teams, clinics, and independent dealerships.",
      keywords: [
        "construction company workflow software",
        "dental and medical clinic automation",
        "independent car dealership lead software",
      ],
    },
    ar: {
      title: "برمجيات للمقاولات والعيادات ومعارض السيارات",
      description:
        "شاهد مسارات استقبال الطلبات والجدولة وتوجيه العملاء المحتملين والمتابعة والتقارير للمقاولات والخدمات الفنية والعيادات ومعارض السيارات المستقلة.",
      keywords: [
        "برمجيات سير العمل لشركات المقاولات",
        "أتمتة عيادات الأسنان والعيادات الطبية",
      "برمجيات إدارة العملاء المحتملين لمعارض السيارات المستقلة",
      ],
    },
  },
  useCases: {
    path: "/use-cases",
    en: {
      title: "Lead, Job & Appointment Automation Use Cases",
      description:
        "See repeatable ways to capture complete requests, qualify and route leads, automate WhatsApp handoffs, track follow-up, schedule work, and report on status.",
      keywords: [
        "lead qualification automation use cases",
        "job and estimate intake workflow",
        "clinic appointment automation workflow",
      ],
    },
    ar: {
      title: "حالات استخدام لأتمتة العملاء المحتملين والمواعيد",
      description:
        "شاهد طرقاً متكررة لجمع الطلبات المكتملة وتأهيل العملاء المحتملين وتوجيههم ونقل محادثات واتساب إلى الفريق ومتابعة الأعمال والمواعيد والتقارير.",
      keywords: [
        "حالات استخدام أتمتة تأهيل العملاء المحتملين",
        "مسار استقبال الأعمال وعروض الأسعار",
        "مسار أتمتة مواعيد العيادات",
      ],
    },
  },
  whyUs: {
    path: "/why-us",
    en: {
      title: "Direct Software Team: Clear Scope & Support",
      description:
        "Work directly with the team that maps, scopes, builds, launches, and supports your workflow, with concrete deliverables and visible review points.",
      keywords: [
        "direct software builders",
        "small technical software team",
        "practical software partner",
      ],
    },
    ar: {
      title: "فريق برمجي تتعامل معه مباشرة",
      description:
        "اعمل مباشرة مع الفريق الذي يرسم سير العمل ويحدد نطاقه ويبنيه ويطلقه ويدعمه، بمخرجات واضحة ونقاط مراجعة مرئية.",
      keywords: [
        "فريق برمجي صغير",
        "شريك برمجي عملي",
        "تطوير أنظمة أعمال عملية",
      ],
    },
  },
  about: {
    path: "/about",
    en: {
      title: "About Servicely: Software & Automation Builders",
      description:
        "Meet the hands-on team building custom software and automation for construction and trade businesses, clinics, independent dealerships, and other operators.",
      keywords: [
        "about Servicely",
        "practical software partner",
        "customer workflow software",
      ],
    },
    ar: {
      title: "عن Servicely: فريق لبناء البرمجيات والأتمتة",
      description:
        "تعرّف إلى الفريق العملي الذي يبني برمجيات مخصصة وأتمتة للمقاولات والخدمات الفنية والعيادات ومعارض السيارات المستقلة وغيرها من الفرق التشغيلية.",
      keywords: [
        "من نحن Servicely",
        "شريك برمجي عملي",
        "برمجيات سير عمل العملاء",
      ],
    },
  },
  supportHosting: {
    path: "/support-hosting",
    en: {
      title: "Software Support, Hosting & Maintenance Services",
      description:
        "Explore post-launch support, maintenance, monitoring, backups, deployment, and hosting options for custom apps, portals, automations, and websites.",
      keywords: [
        "software support and hosting",
        "business system maintenance",
        "website monitoring backups SSL",
      ],
    },
    ar: {
      title: "خدمات دعم واستضافة وصيانة البرمجيات",
      description:
        "استكشف خيارات الدعم والصيانة والمراقبة والنسخ الاحتياطي والنشر والاستضافة للتطبيقات المخصصة والبوابات والأتمتة والمواقع بعد الإطلاق.",
      keywords: [
        "دعم واستضافة الأنظمة",
        "صيانة أنظمة الأعمال",
        "مراقبة ونسخ احتياطي SSL",
      ],
    },
  },
  contact: {
    path: "/contact",
    en: {
      title: "Discuss a Custom Software or Automation Workflow",
      description:
        "Send a short description of the lead, job, appointment, reporting, or internal workflow that is hard to run. Servicely will identify a practical place to start.",
      keywords: [
        "contact software company",
        "request project scope",
        "business system consultation",
      ],
    },
    ar: {
      title: "ناقش مساراً لبرمجيات مخصصة أو أتمتة",
      description:
        "أرسل وصفاً قصيراً لمسار عميل محتمل أو عمل أو موعد أو تقرير أو عملية داخلية يصعب تشغيلها، وستحدد Servicely بداية عملية.",
      keywords: [
        "تواصل مع شركة برمجيات",
        "طلب نطاق مشروع",
        "استشارة أنظمة أعمال",
      ],
    },
  },
  privacy: {
    path: "/privacy",
    en: {
      title: "Privacy Policy: Data Use, Security & Retention",
      description:
        "Learn what project inquiry data Servicely collects, why it is used, how it is protected, how long it is retained and how to request access or deletion.",
      keywords: [
        "Servicely privacy policy",
        "project inquiry data security",
        "data retention and deletion",
      ],
    },
    ar: {
      title: "سياسة الخصوصية: استخدام البيانات وأمنها والاحتفاظ بها",
      description:
        "تعرف على بيانات استفسارات المشاريع التي تجمعها Servicely، وأسباب استخدامها، وكيفية حمايتها، ومدة الاحتفاظ بها، وطريقة طلب الوصول إليها أو حذفها.",
      keywords: [
        "سياسة الخصوصية Servicely",
        "أمن بيانات استفسارات المشاريع",
        "الاحتفاظ بالبيانات وحذفها",
      ],
    },
  },
} as const;

export type SeoPageKey = keyof typeof pageSeo;

export function normalizeLocale(locale: string): Locale {
  return locale === "ar" ? "ar" : "en";
}

export function getLocalizedSiteConfig(locale: string) {
  return localizedSeo[normalizeLocale(locale)];
}

export function buildPageMetadata(page: SeoPageKey, locale: string): Metadata {
  const localeKey = normalizeLocale(locale);
  const localizedSite = getLocalizedSiteConfig(localeKey);
  const entry = pageSeo[page];
  const seo = entry[localeKey];
  const url = `${siteUrl}${localePath(localeKey, entry.path)}`;
  const socialImageAlt =
    localeKey === "ar"
      ? "صورة Servicely التعريفية للبرمجيات المخصصة والأتمتة في الشركات الخدمية"
      : "Servicely custom software and automation for workflow-heavy service businesses";

  return {
    title: seo.title,
    description: seo.description,
    keywords: [...localizedSite.keywords, ...seo.keywords],
    alternates: localizedAlternates(entry.path, localeKey),
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: seo.title,
      description: seo.description,
      url,
      locale: localeKey,
      alternateLocale: [localeKey === "ar" ? "en" : "ar"],
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [{ url: siteConfig.ogImage, alt: socialImageAlt }],
    },
  };
}

/** Build the URL path for a route in a given locale (English is un-prefixed). */
export function localePath(locale: string, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === defaultLocale ? clean || "/" : `/${locale}${clean}`;
}

/**
 * Locale-aware canonical + hreflang alternates for a route. Each language
 * version is canonical to itself and references the others via hreflang.
 */
export function localizedAlternates(path: string, locale: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      en: localePath("en", path),
      ar: localePath("ar", path),
      "x-default": localePath("en", path),
    },
  };
}

export function buildPageStructuredData(page: SeoPageKey, locale: string) {
  const localeKey = normalizeLocale(locale);
  const entry = pageSeo[page];
  const seo = entry[localeKey];
  const url = `${siteUrl}${localePath(localeKey, entry.path)}`;
  const breadcrumbId = `${url}#breadcrumb`;
  const pageType =
    page === "about"
      ? "AboutPage"
      : page === "contact"
        ? "ContactPage"
        : "WebPage";

  const graph: Record<string, unknown>[] = [
    {
      "@type": pageType,
      "@id": `${url}#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      inLanguage: localeKey,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      ...(entry.path === "/" ? {} : { breadcrumb: { "@id": breadcrumbId } }),
    },
  ];

  if (entry.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: localeKey === "ar" ? "الرئيسية" : "Home",
          item: `${siteUrl}${localePath(localeKey, "/")}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: seo.title,
          item: url,
        },
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
