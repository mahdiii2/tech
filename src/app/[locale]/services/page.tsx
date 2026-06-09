import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import CanvasCircles from "@/components/Services/CanvasCircles";
import CooperationModels from "@/components/Services/CooperationModels";
import ServicesBlueprints from "@/components/Services/ServicesBlueprints";
import { ServicesBackgroundCircles } from "@/components/Services/ServicesBackgroundCircles";
import UpgradeGrid from "@/components/Services/UpgradeGrid";
import TransformationTestimonial from "@/components/Services/TransformationTestimonial";
import ProcessTimeline from "@/components/Services/ProcessTimeline";
import PartnerGrid from "@/components/Services/PartnerGrid";
import { localizedAlternates, localePath } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "الخدمات - الذكاء الاصطناعي، الأتمتة وأنظمة الأعمال"
      : "Services - AI, Automation & Business Systems",
    description: isAr
      ? "خدمات Servicely للشركات في لبنان والعراق ودبي/الإمارات: الذكاء الاصطناعي، أتمتة واتساب، المواقع، التطبيقات، لوحات التحكم، والدعم."
      : "Servicely services for companies in Lebanon, Iraq and Dubai: AI automation, WhatsApp workflows, websites, apps, dashboards, support and hosting.",
    alternates: localizedAlternates("/services", locale),
    openGraph: {
      title: isAr ? "الخدمات | Servicely" : "Services | Servicely",
      description: isAr
        ? "أنظمة عملية للشركات التي تريد خدمة عملاء أسرع وتقليل العمل اليدوي."
        : "Practical systems for businesses that want faster customer service and less manual work.",
      url: localePath(locale, "/services"),
    },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="space-y-20">
      <ServicesBackgroundCircles />
      <CanvasCircles />
      <ServicesBlueprints />
      <CooperationModels />
      <UpgradeGrid />
      <TransformationTestimonial />
      <ProcessTimeline />
      <PartnerGrid />
    </main>
  );
}
