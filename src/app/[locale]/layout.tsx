import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";
import { inter, notoSansArabic, spaceMono } from "../fonts";
import "../globals.css";
import { Navbar } from "@/components/Layout/navbar";
import Footer from "@/components/Layout/footer";
import { routing } from "@/i18n/routing";
import {
  getLocalizedSiteConfig,
  isSearchIndexable,
  localizedAlternates,
  localePath,
  normalizeLocale,
  siteConfig,
  siteUrl,
} from "@/lib/site";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = normalizeLocale(locale);
  const localizedSite = getLocalizedSiteConfig(localeKey);
  const socialImageAlt =
    localeKey === "ar"
      ? "صورة Servicely لخدمات الذكاء الاصطناعي وأتمتة الأعمال وبرمجيات الأعمال ومنصات العملاء"
      : "Servicely preview for AI automation, custom business software and customer platforms";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteConfig.name} - ${localizedSite.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: localizedSite.description,
    applicationName: siteConfig.name,
    keywords: [...localizedSite.keywords],
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    icons: {
      icon: [
        {
          url: "/icon.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/icon.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    alternates: localizedAlternates("/", localeKey),
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: `${siteConfig.name} - ${localizedSite.tagline}`,
      description: localizedSite.description,
      url: localePath(localeKey, "/"),
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
      title: `${siteConfig.name} - ${localizedSite.tagline}`,
      description: localizedSite.description,
      images: [{ url: siteConfig.ogImage, alt: socialImageAlt }],
    },
    robots: {
      index: isSearchIndexable,
      follow: isSearchIndexable,
      googleBot: {
        index: isSearchIndexable,
        follow: isSearchIndexable,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "technology",
  };
}

function buildStructuredData(locale: string) {
  const localizedSite = getLocalizedSiteConfig(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: siteConfig.logo,
        image: siteConfig.ogImage,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        description: localizedSite.description,
        areaServed: siteConfig.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
        ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: localizedSite.description,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: ["en", "ar"],
      },
    ],
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const localeKey = normalizeLocale(locale);
  const dir = localeKey === "ar" ? "rtl" : "ltr";

  return (
    <html
      className={`${inter.variable} ${spaceMono.variable} ${notoSansArabic.variable} overflow-x-clip`}
      lang={locale}
      dir={dir}
    >
      <body className="overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildStructuredData(localeKey)).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
