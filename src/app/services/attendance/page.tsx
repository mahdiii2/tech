import { getTranslations } from "next-intl/server";
import { DevelopmentHeroBackground } from "@/components/Services/DevelopmentHeroBackground";
import { DevelopmentHeroContent } from "@/components/Services/DevelopmentHeroContent";
import { WhyCustom } from "@/components/Services/WhyCustom";
import { DevelopmentShowcase } from "@/components/Services/CardsShowcase";
import { DevelopmentCapabilities } from "@/components/Services/OurCapabilities";
import { DevelopmentReasons } from "@/components/Services/DevelopmentReasons";
import ImageSlider from "@/components/Services/ImageSlider";
import DesignTimeline from "@/components/Services/DesignTimeline";
import { DevelopmentUpgrade } from "@/components/Services/DevelopmentUpgrade";
import ClientSliding from "@/components/HeroPage/ClientSliding";
import TransformationTestimonial from "@/components/Services/TransformationTestimonial";
import { DevelopmentContactLead } from "@/components/Services/DevelopmentContactLead";

export default async function AttendancePage() {
  const t = await getTranslations("DesignPage");
  const t2 = await getTranslations("DevelopmentPage");
  const trustedClientsHeading = t("clientsHeading");

  const ceoContact = t2.raw("ceoContact") as {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    linkedinLabel: string;
    linkedinHref: string;
  };
  const showcaseRaw = t.raw("showcase") as {
    heading: string;
    cards: { title: string; body: string; tags: string[]; imageAlt: string }[];
  };
  const capabilities = t.raw("capabilities") as {
    heading: string;
    body: string;
    cards: {
      title: string;
      body: string;
      tags: string[];
      icon: "heart" | "sparkles" | "toggle" | "target" | "cloud";
    }[];
    ctaLabel: string;
    ctaHref: string;
  };
  const reasons = t.raw("reasons") as {
    heading: string;
    cards: { title: string; body: string; icon: string }[];
  };

  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
      alt: "Attendance reports and business data review",
    },
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      alt: "Team reviewing an attendance dashboard",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      alt: "Operational dashboard with staff metrics",
    },
  ];

  const showcaseImages = [
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
      alt: "Attendance dashboard and payroll review",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
      alt: "Team checking HR reports",
    },
  ];

  const showcaseCards = showcaseRaw.cards.map((card, idx) => ({
    ...card,
    ctaLabel: "",
    ctaHref: "",
    imageSrc: showcaseImages[idx % showcaseImages.length].src,
    imageAlt: card.imageAlt || showcaseImages[idx % showcaseImages.length].alt,
    align: idx % 2 === 0 ? "right" : "left",
    variant: "design" as const,
  }));

  return (
    <main className="bg-white">
      <DevelopmentHeroBackground colorVariant="design">
        <DevelopmentHeroContent
          title={t("hero.title")}
          description={t("hero.description")}
          ctaLabel={t("hero.cta")}
        />
      </DevelopmentHeroBackground>

      <WhyCustom
        variant="design"
        eyebrow={t("whyDesign.eyebrow")}
        body={t("whyDesign.body")}
        images={gallery}
      />

      <div className="mx-auto mt-16 max-w-6xl px-6 text-center md:mt-24">
        <h2 className="text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl">
          {showcaseRaw.heading}
        </h2>
      </div>
      <DevelopmentShowcase cards={showcaseCards} />

      <DevelopmentCapabilities
        heading={capabilities.heading}
        body={capabilities.body}
        cards={capabilities.cards}
        ctaLabel={capabilities.ctaLabel}
        ctaHref={capabilities.ctaHref}
        variant="design"
      />

      <ClientSliding heading={trustedClientsHeading} />
      <ImageSlider
        title={t("imageSlider.heading")}
        leftImage="/SliderImages/des1.png"
        rightImage="/SliderImages/des2.png"
      />
      <DevelopmentUpgrade
        namespace="DesignPage.upgrade"
        accent={{ bubble: "var(--design-200)", number: "var(--design-600)" }}
        ctaHref="/schedule"
      />
      <TransformationTestimonial
        namespace="DesignPage.testimonial"
        backgroundColor="var(--design-100)"
      />
      <DesignTimeline
        namespace="DesignPage.process"
        defaultColor="var(--design-400)"
      />
      <DevelopmentReasons
        heading={reasons.heading}
        cards={reasons.cards}
        accent={{
          gradientFrom: "var(--design-300)",
          gradientVia: "var(--design-400)",
          gradientTo: "var(--design-500)",
        }}
      />
      <DevelopmentContactLead
        heading={ceoContact.heading}
        body={ceoContact.body}
        ctaLabel={ceoContact.ctaLabel}
        ctaHref={ceoContact.ctaHref}
        linkedinLabel={ceoContact.linkedinLabel}
        linkedinHref={ceoContact.linkedinHref}
        name="Tech Solutions RDC"
        role="Attendance automation team"
        photoSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
      />
    </main>
  );
}
