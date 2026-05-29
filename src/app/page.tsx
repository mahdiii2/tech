import { HomeHeroSequence } from "@/components/HeroPage/HomeHeroSequence";
import { Skiper16 } from "@/components/HeroPage/ServiceCards";
import { HeroWithFloatingImages } from "@/components/HeroPage/AgencyPartnerSection";
import { DigitalSolutionsSection } from "@/components/HeroPage/DigitalSolutionsSection";
import { AttendanceSpotlight } from "@/components/HeroPage/AttendanceSpotlight";
import ContactBridge from "@/components/HeroPage/ContactBridge";
import { getTranslations } from "next-intl/server";
import TechStackSlider from "@/components/HeroPage/TechStackSlider";
import CaseStudySlider from "@/components/HeroPage/ClientSwiper";
import ImageSlider from "@/components/Services/ImageSlider";
const BLUEPRINT_KEYS = ["development", "design", "engagement"] as const;
export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const blueprints = BLUEPRINT_KEYS.map((key) => ({
    key,
    title: t(`blueprints.${key}.title`),
    description: t(`blueprints.${key}.description`),
    tags: t.raw(`blueprints.${key}.tags`) as string[],
    learnHref: t(`blueprints.${key}.learnHref`),
    contactHref: t(`blueprints.${key}.contactHref`),
  }));

  return (
    <div className="space-y-8 mb-10">
      <HomeHeroSequence
        vision={{
          heading: t("vision.heading"),
          body: t("vision.body"),
          ctaLabel: t("vision.cta"),
          ctaHref: t("vision.ctaHref"),
          chips: t.raw("vision.chips") as string[],
        }}
      />
      <AttendanceSpotlight
        title={t("attendanceSpotlight.title")}
        body={t("attendanceSpotlight.body")}
        points={t.raw("attendanceSpotlight.points") as string[]}
        target={t("attendanceSpotlight.target")}
        ctaLabel={t("attendanceSpotlight.ctaLabel")}
        ctaHref={t("attendanceSpotlight.ctaHref")}
      />
      <Skiper16
        blueprints={blueprints}
        ctas={{
          learnMore: t("blueprints.cta.learnMore"),
          contact: t("blueprints.cta.contact"),
        }}
      />
      <HeroWithFloatingImages />
      <DigitalSolutionsSection />
      <ImageSlider
        title={t("imageSlider.heading")}
        leftImage="/SliderImages/eng1.png"
        rightImage="/SliderImages/eng2.png"
      />
      <CaseStudySlider />
      <TechStackSlider />
      <ContactBridge />
    </div>
  );
}
