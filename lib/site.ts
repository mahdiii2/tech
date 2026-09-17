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
    "Servicely delivers AI and business automation, custom business software, and websites and customer platforms for workflow-heavy service businesses.",
  tagline: "AI automation, business software, and customer platforms",
  email: salesEmail,
  phone: "+961 81 789 355",
  phoneHref: "+96181789355",
  phones: [
    {
      label: "+961 81 789 355",
      href: "https://wa.me/96181789355",
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
    "AI business automation",
    "WhatsApp and email automation",
    "lead qualification and routing",
    "custom CRM development",
    "online booking platform",
    "customer portal development",
    "business website development",
    "internal portal development",
    "business system integrations",
    "Power BI reporting dashboards",
    "custom web and mobile apps",
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
    keywords: siteConfig.keywords,
  },
  ar: {
    tagline: "أتمتة بالذكاء الاصطناعي وبرمجيات أعمال ومنصات للعملاء",
    description:
      "تقدم Servicely الذكاء الاصطناعي وأتمتة الأعمال وبرمجيات أعمال مخصصة ومواقع ومنصات للعملاء للشركات الخدمية ذات العمليات المتعددة.",
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
      "أتمتة واتساب والبريد الإلكتروني",
      "تأهيل العملاء المحتملين وتوجيههم",
      "تطوير أنظمة CRM مخصصة",
      "منصات الحجز عبر الإنترنت",
      "تطوير بوابات العملاء",
      "تطوير مواقع الأعمال",
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
      title: "AI Automation, Custom Software & Websites",
      description:
        "AI and business automation, custom software, websites, portals, and booking apps for construction and trades, clinics, and independent car dealerships.",
      keywords: [
        "AI automation for service businesses",
        "custom business software",
        "construction workflow automation",
        "clinic booking and dealership lead software",
      ],
    },
    ar: {
      title: "أتمتة ذكية وبرمجيات مخصصة ومواقع للأعمال",
      description:
        "أتمتة أعمال بالذكاء الاصطناعي وبرمجيات مخصصة ومواقع وبوابات وتطبيقات حجز للمقاولات والخدمات الفنية والعيادات ومعارض السيارات المستقلة.",
      keywords: [
        "أتمتة أعمال للشركات الخدمية",
        "برمجيات أعمال مخصصة",
        "أتمتة سير العمل لشركات المقاولات",
        "برمجيات حجز للعيادات وإدارة عملاء معارض السيارات",
      ],
    },
  },
  services: {
    path: "/services",
    en: {
      title: "AI Automation, Business Software & Websites",
      description:
        "Explore AI and business automation, custom CRM, dashboards and internal tools, plus websites, customer portals, online booking, and web or mobile apps.",
      keywords: [
        "AI business automation services",
        "WhatsApp and email reply automation",
        "custom software development services",
        "custom CRM and dashboard development",
        "business websites and customer portals",
        "online booking app development",
      ],
    },
    ar: {
      title: "خدمات أتمتة الأعمال والبرمجيات والمواقع",
      description:
        "استكشف أتمتة الأعمال بالذكاء الاصطناعي وأنظمة CRM واللوحات والأدوات الداخلية، إضافة إلى المواقع وبوابات العملاء والحجز وتطبيقات الويب والجوال.",
      keywords: [
        "خدمات أتمتة الأعمال بالذكاء الاصطناعي",
        "أتمتة ردود واتساب والبريد الإلكتروني",
        "خدمات تطوير البرمجيات المخصصة",
        "تطوير CRM ولوحات معلومات مخصصة",
        "مواقع أعمال وبوابات عملاء",
        "تطوير تطبيقات الحجز عبر الإنترنت",
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
      title: "Software & Automation Agency: Scope Before Build",
      description:
        "See how Servicely checks feasibility, maps workflows, writes the first-release scope, reviews working software, and plans launch, handover, and support.",
      keywords: [
        "software automation agency",
        "software feasibility and scope",
        "custom software delivery process",
      ],
    },
    ar: {
      title: "وكالة برمجيات وأتمتة: نطاق واضح قبل البناء",
      description:
        "تعرف إلى طريقة Servicely في التحقق من الجدوى ورسم سير العمل وكتابة نطاق الإصدار الأول ومراجعة النظام والتخطيط للإطلاق والتسليم والدعم.",
      keywords: [
        "وكالة برمجيات وأتمتة",
        "جدوى ونطاق البرمجيات",
        "عملية تنفيذ برمجيات مخصصة",
      ],
    },
  },
  about: {
    path: "/about",
    en: {
      title: "About Servicely: Automation, Software & Customer Platforms",
      description:
        "Learn how Servicely works as a software and automation agency delivering scoped systems and ongoing support for workflow-heavy businesses.",
      keywords: [
        "about Servicely",
        "software and automation agency",
        "customer workflow software",
      ],
    },
    ar: {
      title: "عن Servicely: أتمتة وبرمجيات أعمال ومنصات للعملاء",
      description:
        "تعرّف إلى طريقة عمل Servicely كوكالة للبرمجيات والأتمتة تقدم أنظمة محددة النطاق ودعماً مستمراً للشركات كثيفة العمليات.",
      keywords: [
        "من نحن Servicely",
        "وكالة برمجيات وأتمتة",
        "برمجيات سير عمل العملاء",
      ],
    },
  },
  supportHosting: {
    path: "/support-hosting",
    en: {
      title: "Post-launch Software Support, Hosting & Maintenance",
      description:
        "Explore post-launch support, maintenance, monitoring, backups, deployment, and hosting options for systems delivered through a scoped Servicely project.",
      keywords: [
        "software support and hosting",
        "business system maintenance",
        "website monitoring backups SSL",
      ],
    },
    ar: {
      title: "دعم البرمجيات واستضافتها وصيانتها بعد الإطلاق",
      description:
        "استكشف خيارات الدعم والصيانة والمراقبة والنسخ الاحتياطي والنشر والاستضافة للأنظمة المنفذة ضمن مشروع محدد النطاق مع Servicely.",
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
      title: "Privacy & Data Notice: Outreach, Inquiries and Projects",
      description:
        "See how Servicely handles business outreach, website inquiries, contact channels, functional cookies, project and AI data, security, choices, and retention.",
      keywords: [
        "Servicely privacy policy",
        "project inquiry data security",
        "data retention and deletion",
      ],
    },
    ar: {
      title: "إشعار الخصوصية والبيانات: التواصل والاستفسارات والمشاريع",
      description:
        "تعرف إلى تعامل Servicely مع التواصل التجاري والاستفسارات وقنوات التواصل وملفات الارتباط الوظيفية وبيانات المشاريع والذكاء الاصطناعي والأمان والخيارات والاحتفاظ.",
      keywords: [
        "سياسة الخصوصية Servicely",
        "أمن بيانات استفسارات المشاريع",
        "الاحتفاظ بالبيانات وحذفها",
      ],
    },
  },
} as const;

const localizedServiceCatalog = {
  en: [
    {
      id: "ai-business-automation",
      name: "AI & Business Automation",
      description:
        "WhatsApp and email replies, lead follow-ups, reminders, document handling, and repetitive workflow automation.",
    },
    {
      id: "custom-business-software",
      name: "Custom Business Software",
      description:
        "Company dashboards, CRM systems, internal tools, booking systems, and operational platforms built around the business.",
    },
    {
      id: "websites-customer-platforms",
      name: "Websites & Customer Platforms",
      description:
        "Business websites, customer portals, online booking pages, and custom web or mobile applications.",
    },
  ],
  ar: [
    {
      id: "ai-business-automation",
      name: "الذكاء الاصطناعي وأتمتة الأعمال",
      description:
        "ردود واتساب والبريد الإلكتروني ومتابعة العملاء المحتملين والتذكيرات ومعالجة المستندات وأتمتة الأعمال المتكررة.",
    },
    {
      id: "custom-business-software",
      name: "برمجيات أعمال مخصصة",
      description:
        "لوحات معلومات وأنظمة CRM وأدوات داخلية وأنظمة حجز ومنصات تشغيلية مبنية حول العمل.",
    },
    {
      id: "websites-customer-platforms",
      name: "المواقع ومنصات العملاء",
      description:
        "مواقع أعمال وبوابات للعملاء وصفحات حجز عبر الإنترنت وتطبيقات ويب أو جوال مخصصة.",
    },
  ],
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
      ? "صورة Servicely للذكاء الاصطناعي وأتمتة الأعمال وبرمجيات الأعمال ومنصات العملاء"
      : "Servicely AI automation, custom business software and customer platforms";

  return {
    metadataBase: new URL(siteUrl),
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

  if (page === "services") {
    const services = localizedServiceCatalog[localeKey];
    graph.push({
      "@type": "ItemList",
      "@id": `${url}#service-catalog`,
      name:
        localeKey === "ar"
          ? "خدمات Servicely الأساسية"
          : "Servicely core services",
      numberOfItems: services.length,
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          "@id": `${url}#${service.id}`,
          name: service.name,
          description: service.description,
          url: `${url}#${service.id}`,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: "Worldwide",
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
