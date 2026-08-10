import type { Metadata } from "next";
import { salesEmail } from "@/lib/booking";

/**
 * Central site metadata used for SEO, Open Graph, structured data and the
 * sitemap. Override the public URL per environment with NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://servicely.digital"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Servicely",
  shortName: "Servicely",
  url: siteUrl,
  description:
    "Servicely builds practical software for inquiries, bookings, lead follow-up, websites, apps, dashboards and connected business workflows.",
  tagline: "Practical software for clearer customer workflows",
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
  ogImage: `${siteUrl}/icon.png`,
  logo: `${siteUrl}/icon.png`,
  areaServed: ["Worldwide"],
  keywords: [
    "customer workflow software",
    "custom business software",
    "business process automation",
    "clinic appointment system",
    "real estate lead follow-up",
    "property matching system",
    "automotive inquiry system",
    "field service scheduling software",
    "service request intake system",
    "WhatsApp inquiry workflow",
    "lead follow-up automation",
    "business web apps",
    "mobile app development",
    "customer support automation",
    "appointment request system",
    "business dashboards",
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
    tagline: "برمجيات عملية لمسارات عملاء أكثر وضوحاً",
    description:
      "تبني Servicely برمجيات عملية للاستفسارات والحجوزات ومتابعة العملاء المحتملين والمواقع والتطبيقات ولوحات التحكم ومسارات الأعمال المترابطة.",
    keywords: [
      "أنظمة سير عمل العملاء",
      "تطوير برمجيات مخصصة",
      "أتمتة عمليات الأعمال",
      "نظام مواعيد للعيادات",
      "متابعة العملاء المحتملين في العقارات",
      "نظام مطابقة عقارات",
      "نظام استفسارات سيارات",
      "برنامج جدولة الخدمات الميدانية",
      "تنفيذ مهام واتساب تلقائيًا",
      "تنفيذ مهام خدمة العملاء تلقائيًا",
      "مواقع أعمال وتطبيقات ويب",
      "تطبيقات جوال للشركات",
      "لوحات تحكم للأعمال",
    ],
  },
} as const;

const pageSeo = {
  home: {
    path: "/",
    en: {
      title: "Business Systems, Websites & WhatsApp Automation",
      description:
        "Servicely builds practical software for inquiries, bookings, lead follow-up, WhatsApp workflows, websites, apps and dashboards for customer-facing teams.",
      keywords: [
        "customer workflow systems",
        "WhatsApp business automation",
        "lead follow-up software",
      ],
    },
    ar: {
      title: "أنظمة أعمال ومواقع وتنفيذ مهام واتساب تلقائيًا",
      description:
        "تبني Servicely برمجيات عملية للاستفسارات والحجوزات ومتابعة العملاء المحتملين ومسارات واتساب والمواقع والتطبيقات ولوحات التحكم للفرق التي تتعامل مع العملاء.",
      keywords: [
        "أنظمة سير عمل العملاء",
        "تنفيذ مهام واتساب تلقائيًا للشركات",
        "متابعة العملاء المحتملين",
      ],
    },
  },
  services: {
    path: "/services",
    en: {
      title: "Power BI, AI, Data Scraping, Websites & Apps",
      description:
        "Explore Servicely services for customer-facing businesses: Power BI dashboards, KPI reports, data engineering, AI insights, data scraping, websites, apps and WhatsApp workflows.",
      keywords: [
        "Power BI services",
        "data engineering services",
        "AI business insights",
        "data scraping services",
        "web scraping for business",
        "website and app development",
      ],
    },
    ar: {
      title: "Power BI والذكاء الاصطناعي واستخراج البيانات والمواقع",
      description:
        "استكشف خدمات Servicely للشركات التي تتعامل مع العملاء: لوحات Power BI وتقارير مؤشرات الأداء وهندسة البيانات ورؤى الذكاء الاصطناعي واستخراج بيانات الويب والمواقع والتطبيقات ومسارات واتساب.",
      keywords: [
        "خدمات Power BI",
        "خدمات هندسة البيانات",
        "رؤى الأعمال بالذكاء الاصطناعي",
        "خدمات استخراج البيانات",
        "استخراج بيانات الويب للأعمال",
        "تطوير مواقع وتطبيقات",
      ],
    },
  },
  industries: {
    path: "/industries",
    en: {
      title: "Customer Systems for Clinics, Real Estate & Services",
      description:
        "Practical customer-flow systems for clinics, real estate agencies, automotive teams and field service businesses that need clearer intake and follow-up.",
      keywords: [
        "clinic customer system",
        "real estate lead system",
        "field service customer workflow",
      ],
    },
    ar: {
      title: "أنظمة عملية للعيادات والعقارات والخدمات",
      description:
        "أنظمة عملية لتنظيم الاستفسارات والمواعيد والعملاء المحتملين والمتابعة للعيادات والعقارات والسيارات والخدمات الميدانية.",
      keywords: [
        "أنظمة العيادات",
        "نظام عملاء العقارات المحتملين",
        "أنظمة الخدمات الميدانية",
      ],
    },
  },
  useCases: {
    path: "/use-cases",
    en: {
      title: "Use Cases for Customer Automation and Lead Workflows",
      description:
        "See practical use cases for appointment intake, real estate lead qualification, vehicle inquiries, service requests, WhatsApp workflows and dashboards.",
      keywords: [
        "customer automation use cases",
        "appointment intake workflow",
        "property lead qualification",
      ],
    },
    ar: {
      title: "حالات استخدام لتنفيذ مهام العملاء تلقائيًا ومسارات المتابعة",
      description:
        "شاهد حالات استخدام عملية لاستقبال المواعيد، تأهيل العملاء المحتملين في العقارات، استفسارات المركبات، طلبات الخدمة، مسارات واتساب ولوحات التحكم.",
      keywords: [
        "حالات استخدام تنفيذ مهام العملاء تلقائيًا",
        "مسار استقبال المواعيد",
        "تأهيل العملاء المحتملين في العقارات",
      ],
    },
  },
  whyUs: {
    path: "/why-us",
    en: {
      title: "Why Servicely: Direct Builders and Practical Systems",
      description:
        "Work directly with a small technical team that plans, builds and supports practical business systems with clear scope and post-launch care.",
      keywords: [
        "direct software builders",
        "small technical software team",
        "practical software partner",
      ],
    },
    ar: {
      title: "لماذا Servicely؟ فريق صغير وتنفيذ عملي",
      description:
        "اعمل مباشرة مع فريق تقني صغير يبني ويدعم أنظمة عملية، مع نطاق واضح وتنفيذ عملي ودعم بعد الإطلاق.",
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
      title: "About Servicely: Practical Software Partner",
      description:
        "Servicely helps clinics, real estate teams, automotive businesses and field service teams build useful systems for inquiries, bookings, leads and workflows.",
      keywords: [
        "about Servicely",
        "practical software partner",
        "customer workflow software",
      ],
    },
    ar: {
      title: "من نحن: شريك برمجي عملي",
      description:
        "تساعد Servicely العيادات وشركات العقارات والسيارات والخدمات الميدانية على بناء أنظمة عملية للاستفسارات والحجوزات والعملاء المحتملين وسير العمل.",
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
      title: "Support, Hosting and Maintenance for Business Systems",
      description:
        "Post-launch support, hosting, monitoring, backups, SSL, deployment management and maintenance options for business systems.",
      keywords: [
        "software support and hosting",
        "business system maintenance",
        "website monitoring backups SSL",
      ],
    },
    ar: {
      title: "الدعم والاستضافة والصيانة للأنظمة",
      description:
        "خيارات دعم واستضافة وصيانة بعد الإطلاق لأنظمة الأعمال، تشمل المراقبة والنسخ الاحتياطي و SSL وإدارة النشر والتحديثات.",
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
      title: "Contact Servicely to Scope Your Project",
      description:
        "Tell Servicely what you want to improve: inquiries, appointments, lead follow-up, WhatsApp workflows, websites, apps, dashboards or internal systems.",
      keywords: [
        "contact software company",
        "request project scope",
        "business system consultation",
      ],
    },
    ar: {
      title: "تواصل معنا لتحديد نطاق مشروعك",
      description:
        "أخبر Servicely بما تريد تحسينه: الاستفسارات، المواعيد، متابعة العملاء المحتملين، مسارات واتساب، المواقع، التطبيقات، لوحات التحكم أو الأنظمة الداخلية.",
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
      title: "Privacy Policy",
      description:
        "How Servicely collects, uses and protects the information you share when you contact us about a project.",
      keywords: ["Servicely privacy policy"],
    },
    ar: {
      title: "سياسة الخصوصية في Servicely",
      description:
        "كيف تجمع Servicely وتستخدم وتحمي المعلومات التي تشاركها عند التواصل معنا بخصوص مشروع.",
      keywords: ["سياسة الخصوصية Servicely"],
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
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} mark`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [siteConfig.ogImage],
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
