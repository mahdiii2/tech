import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";
import { inter, spaceMono } from "../fonts";
import "../globals.css";
import { Navbar } from "@/components/Layout/navbar";
import Footer from "@/components/Layout/footer";
import { routing } from "@/i18n/routing";
import {
  getLocalizedSiteConfig,
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
  const alternateLocale = localeKey === "ar" ? ["en_US"] : ["ar_AE"];

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
      locale: localizedSite.ogLocale,
      alternateLocale,
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
      title: `${siteConfig.name} - ${localizedSite.tagline}`,
      description: localizedSite.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
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
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: siteConfig.name,
        url: siteUrl,
        image: siteConfig.ogImage,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        description: localizedSite.description,
        areaServed: siteConfig.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
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
      className={`${inter.variable} ${spaceMono.variable}`}
      lang={locale}
      dir={dir}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildStructuredData(localeKey)),
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
