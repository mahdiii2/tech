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
    "Servicely builds practical software for inquiries, bookings, leads, websites, apps, dashboards and business workflows across MENA, focused on Lebanon, Iraq and the UAE.",
  tagline: "Practical software and business systems for MENA",
  email: salesEmail,
  phone: "+961 81 789 355 / +971 50 243 9540",
  phoneHref: "+96181789355",
  phones: [
    {
      label: "+961 81 789 355",
      href: "https://wa.me/96181789355",
    },
    {
      label: "+971 50 243 9540",
      href: "https://wa.me/971502439540",
    },
  ],
  locale: "en",
  localeAlternates: ["ar"],
  ogImage: `${siteUrl}/icon.png`,
  logo: `${siteUrl}/icon.png`,
  areaServed: [
    "Middle East and North Africa",
    "Lebanon",
    "Iraq",
    "United Arab Emirates",
  ],
  keywords: [
    "business systems MENA",
    "custom software Lebanon",
    "custom software Iraq",
    "custom software UAE",
    "clinic appointment system",
    "real estate lead follow-up",
    "property matching system",
    "automotive inquiry system",
    "field service scheduling software",
    "service request intake system",
    "WhatsApp inquiry workflow",
    "customer automation Lebanon",
    "customer automation Iraq",
    "customer automation UAE",
    "business systems UAE",
    "web apps UAE",
    "mobile app development UAE",
    "customer support automation",
    "appointment request system",
    "business dashboards",
  ],
  social: {
    instagram: "",
    facebook: "",
    whatsapp: "https://wa.me/96181789355",
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
    ogLocale: "en_US",
    keywords: siteConfig.keywords,
  },
  ar: {
    tagline: "برمجيات عملية وأنظمة أعمال لشركات MENA",
    description:
      "تبني Servicely برمجيات عملية للاستفسارات والحجوزات ومتابعة العملاء المحتملين والمواقع والتطبيقات ولوحات التحكم في منطقة MENA، مع تركيز على لبنان والعراق والإمارات.",
    ogLocale: "ar_AE",
    keywords: [
      "أنظمة أعمال في الشرق الأوسط",
      "تطوير برمجيات في لبنان",
      "تطوير برمجيات في العراق",
      "تطوير برمجيات في الإمارات",
      "نظام مواعيد للعيادات",
      "متابعة العملاء المحتملين في العقارات",
      "نظام مطابقة عقارات",
      "نظام استفسارات سيارات",
      "برنامج جدولة الخدمات الميدانية",
      "تنفيذ مهام واتساب تلقائيًا",
      "تنفيذ مهام خدمة العملاء تلقائيًا",
      "مواقع أعمال في MENA",
      "تطبيقات جوال للشركات",
      "لوحات تحكم للأعمال",
    ],
  },
} as const;

const pageSeo = {
  home: {
    path: "/",
    en: {
      title: "Business Systems, Websites & WhatsApp Automation for MENA",
      description:
        "Servicely builds practical software for inquiries, bookings, lead follow-up, WhatsApp workflows, websites, apps and dashboards across Lebanon, Iraq, the UAE and MENA.",
      keywords: [
        "MENA business systems",
        "WhatsApp automation MENA",
        "lead follow-up software",
      ],
    },
    ar: {
      title: "أنظمة أعمال ومواقع وتنفيذ مهام واتساب تلقائيًا لشركات MENA",
      description:
        "تبني Servicely برمجيات عملية للاستفسارات والحجوزات ومتابعة العملاء المحتملين ومسارات واتساب والمواقع والتطبيقات ولوحات التحكم في لبنان والعراق والإمارات.",
      keywords: [
        "أنظمة أعمال MENA",
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
        "Explore Servicely services for MENA businesses: Power BI dashboards, KPI reports, data engineering, AI insights, data scraping, websites, apps and WhatsApp workflows.",
      keywords: [
        "Power BI services",
        "data engineering services",
        "AI business insights",
        "data scraping services",
        "web scraping MENA",
        "website and app development MENA",
      ],
    },
    ar: {
      title: "Power BI والذكاء الاصطناعي واستخراج البيانات والمواقع",
      description:
        "استكشف خدمات Servicely لشركات MENA: لوحات Power BI وتقارير مؤشرات الأداء وهندسة البيانات ورؤى الذكاء الاصطناعي واستخراج بيانات الويب والمواقع والتطبيقات ومسارات واتساب.",
      keywords: [
        "خدمات Power BI",
        "خدمات هندسة البيانات",
        "رؤى الأعمال بالذكاء الاصطناعي",
        "خدمات استخراج البيانات",
        "استخراج بيانات الويب في MENA",
        "تطوير مواقع وتطبيقات في MENA",
      ],
    },
  },
  industries: {
    path: "/industries",
    en: {
      title: "Customer Systems for Clinics, Real Estate & Services",
      description:
        "Practical customer-flow systems for clinics, real estate agencies, automotive teams and field service businesses across MENA.",
      keywords: [
        "clinic customer system",
        "real estate lead system",
        "field service customer workflow",
      ],
    },
    ar: {
      title: "أنظمة عملية للعيادات والعقارات والخدمات",
      description:
        "أنظمة عملية لتنظيم الاستفسارات والمواعيد والعملاء المحتملين والمتابعة للعيادات والعقارات والسيارات والخدمات الميدانية في MENA.",
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
        "Work directly with a small technical team that plans, builds and supports practical business systems for MENA companies.",
      keywords: [
        "direct software builders",
        "small technical team MENA",
        "practical software partner",
      ],
    },
    ar: {
      title: "لماذا Servicely؟ فريق صغير وتنفيذ عملي",
      description:
        "اعمل مباشرة مع فريق تقني صغير يبني ويدعم أنظمة عملية لشركات MENA، مع نطاق واضح وتنفيذ عملي ودعم بعد الإطلاق.",
      keywords: [
        "فريق برمجي صغير",
        "شريك برمجي عملي",
        "تطوير أنظمة أعمال MENA",
      ],
    },
  },
  about: {
    path: "/about",
    en: {
      title: "About Servicely: Practical Software Partner for MENA",
      description:
        "Servicely helps clinics, real estate teams, automotive businesses and field service teams build useful systems for inquiries, bookings, leads and workflows.",
      keywords: [
        "about Servicely",
        "software partner MENA",
        "customer workflow software",
      ],
    },
    ar: {
      title: "من نحن: شريك برمجي عملي لشركات MENA",
      description:
        "تساعد Servicely العيادات وشركات العقارات والسيارات والخدمات الميدانية على بناء أنظمة عملية للاستفسارات والحجوزات والعملاء المحتملين وسير العمل.",
      keywords: [
        "من نحن Servicely",
        "شريك برمجي في MENA",
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
        "contact software company MENA",
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
      locale: localizedSite.ogLocale,
      alternateLocale: localeKey === "ar" ? ["en_US"] : ["ar_AE"],
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
