import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { inter, spaceMono } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/Layout/navbar";
import Footer from "@/components/Layout/footer";
import { getLocale, getMessages } from "next-intl/server";
type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: "Tech Solutions RDC",
    template: "%s | Tech Solutions RDC",
  },
  description:
    "Software, websites, attendance automation, Power BI dashboards, data engineering and practical AI tools for organizations in DRC.",
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html
      className={`${inter.variable} ${spaceMono.variable}`}
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
