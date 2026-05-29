import { getTranslations } from "next-intl/server";
import { DevelopmentHeroBackground } from "@/components/Services/DevelopmentHeroBackground";
import { DevelopmentHeroContent } from "@/components/Services/DevelopmentHeroContent";
import { WhyCustom } from "@/components/Services/WhyCustom";
import { DevelopmentShowcase } from "@/components/Services/CardsShowcase";
import { DevelopmentCapabilities } from "@/components/Services/OurCapabilities";
import ImageSlider from "@/components/Services/ImageSlider";
import DesignTimeline from "@/components/Services/DesignTimeline";
import { DevelopmentUpgrade } from "@/components/Services/DevelopmentUpgrade";
import ClientSliding from "@/components/HeroPage/ClientSliding";
import TransformationTestimonial from "@/components/Services/TransformationTestimonial";
import { PrinciplesOfEngagement } from "@/components/HeroPage/PrinciplesOfEngagement";
import { DevelopmentContactLead } from "@/components/Services/DevelopmentContactLead";

export default async function AnalyticsPage() {
  const t = await getTranslations("EngagementPage");
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
    cards: {
      title: string;
      body: string;
      tags: string[];
      ctaLabel: string;
      ctaHref: string;
    }[];
  };
  const capabilities = t.raw("capabilities") as {
    heading: string;
    body: string;
    cards: {
      title: string;
      body: string;
      tags: string[];
      icon: "target" | "megaphone" | "users";
    }[];
    ctaLabel: string;
    ctaHref: string;
  };

  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      alt: "Power BI-style dashboard with business charts",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      alt: "Analytics dashboard on a laptop",
    },
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
      alt: "Business reports prepared for analytics review",
    },
  ];

  const showcaseImages = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      alt: "Business intelligence dashboard",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      alt: "Data reporting dashboard on a laptop",
    },
  ];

  const showcaseCards = showcaseRaw.cards.map((card, idx) => ({
    ...card,
    imageSrc: showcaseImages[idx % showcaseImages.length].src,
    imageAlt: showcaseImages[idx % showcaseImages.length].alt,
    align: idx === 1 ? "left" : "right",
    variant: "engagement" as const,
  }));

  return (
    <main className="bg-white">
      <DevelopmentHeroBackground colorVariant="engagement">
        <DevelopmentHeroContent
          title={t("hero.title")}
          description={t("hero.description")}
          ctaLabel={t("hero.cta")}
        />
      </DevelopmentHeroBackground>

      <WhyCustom
        variant="engagement"
        eyebrow={t("whyEngagement.eyebrow")}
        body={t("whyEngagement.body")}
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
        variant="engagement"
      />

      <ClientSliding heading={trustedClientsHeading} />
      <ImageSlider
        title={t("imageSlider.heading")}
        leftImage="/SliderImages/eng1.png"
        rightImage="/SliderImages/eng2.png"
      />
      <DevelopmentUpgrade
        namespace="EngagementPage.upgrade"
        accent={{
          bubble: "var(--engagement-200)",
          number: "var(--engagement-600)",
        }}
        ctaHref="/schedule"
      />
      <TransformationTestimonial
        namespace="EngagementPage.testimonial"
        backgroundColor="var(--engagement-100)"
      />
      <DesignTimeline
        namespace="EngagementPage.process"
        defaultColor="var(--engagement-400)"
      />
      <PrinciplesOfEngagement namespace="EngagementPage.principles" />
      <DevelopmentContactLead
        heading={ceoContact.heading}
        body={ceoContact.body}
        ctaLabel={ceoContact.ctaLabel}
        ctaHref={ceoContact.ctaHref}
        linkedinLabel={ceoContact.linkedinLabel}
        linkedinHref={ceoContact.linkedinHref}
        name="Tech Solutions RDC"
        role="Analytics and AI team"
        photoSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
      />
    </main>
  );
}
