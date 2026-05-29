import CanvasCircles from "@/components/Services/CanvasCircles";
import CooperationModels from "@/components/Services/CooperationModels";
import ServicesBlueprints from "@/components/Services/ServicesBlueprints";
import { ServicesBackgroundCircles } from "@/components/Services/ServicesBackgroundCircles";
import UpgradeGrid from "@/components/Services/UpgradeGrid";
import TransformationTestimonial from "@/components/Services/TransformationTestimonial";
import ProcessTimeline from "@/components/Services/ProcessTimeline";
import PartnerGrid from "@/components/Services/PartnerGrid";
export default async function ServicesPage() {
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
