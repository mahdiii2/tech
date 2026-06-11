import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { HomeHeroSequence } from "@/components/HeroPage/HomeHeroSequence";
import { Skiper16 } from "@/components/HeroPage/ServiceCards";
import { HeroWithFloatingImages } from "@/components/HeroPage/AgencyPartnerSection";
import { DigitalSolutionsSection } from "@/components/HeroPage/DigitalSolutionsSection";
import { buildPageMetadata } from "@/lib/site";

const ImageSlider = dynamic(() => import("@/components/Services/ImageSlider"));
const CaseStudySlider = dynamic(
  () => import("@/components/HeroPage/ClientSwiper")
);
const TechStackSlider = dynamic(
  () => import("@/components/HeroPage/TechStackSlider")
);
const ContactBridge = dynamic(
  () => import("@/components/HeroPage/ContactBridge")
);
const TestimonialStack = dynamic(
  () =>
    import("@/components/HeroPage/TestimonialStack").then(
      (mod) => mod.TestimonialStack
    )
);

type Props = { params: Promise<{ locale: string }> };

const BLUEPRINT_KEYS = ["development", "design", "engagement"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata("home", locale);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  const blueprints = BLUEPRINT_KEYS.map((key) => ({
    key,
    title: t(`blueprints.${key}.title`),
    description: t(`blueprints.${key}.description`),
    learnHref: t(`blueprints.${key}.learnHref`),
  }));

  return (
    <div className="mb-10 space-y-8">
      <HomeHeroSequence
        vision={{
          heading: t("vision.heading"),
          body: t("vision.body"),
          ctaLabel: t("vision.cta"),
          ctaHref: t("vision.ctaHref"),
          chips: t.raw("vision.chips") as string[],
        }}
      />
      <Skiper16
        blueprints={blueprints}
        ctas={{
          learnMore: t("blueprints.cta.learnMore"),
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
      <TestimonialStack />
      <ContactBridge />
    </div>
  );
}
