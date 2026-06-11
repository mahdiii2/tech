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
import { buildPageMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata("services", locale);
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
