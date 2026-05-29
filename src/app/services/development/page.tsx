import { getTranslations } from "next-intl/server";
import { DevelopmentHeroBackground } from "@/components/Services/DevelopmentHeroBackground";
import { DevelopmentHeroContent } from "@/components/Services/DevelopmentHeroContent";
import { WhyCustom } from "@/components/Services/WhyCustom";
import { DevelopmentShowcase } from "@/components/Services/CardsShowcase";
import ClientSliding from "@/components/HeroPage/ClientSliding";
import { DevelopmentCapabilities } from "@/components/Services/OurCapabilities";
import { DevelopmentToolbox } from "@/components/Services/DevelopmentToolbox";
import { DevelopmentUpgrade } from "@/components/Services/DevelopmentUpgrade";
import ImageSlider from "@/components/Services/ImageSlider";
import TransformationTestimonial from "@/components/Services/TransformationTestimonial";
import { DevelopmentReasons } from "@/components/Services/DevelopmentReasons";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Custom web app dashboard on a laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    alt: "Team reviewing a software workflow",
  },
  {
    src: "/SliderImages/dev2.png",
    alt: "Software dashboard interface",
  },
];

export default async function DevelopmentPage() {
  const t = await getTranslations("DevelopmentPage");
  const showcaseImages = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      alt: "Custom web app dashboard on a laptop",
    },
    {
      src: "/SliderImages/dev2.png",
      alt: "Software dashboard interface",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
      alt: "Team reviewing a software workflow",
    },
  ];

  const showcaseCardsRaw = t.raw("showcase.cards") as {
    title: string;
    body: string;
    tags: string[];
    ctaLabel: string;
    ctaHref: string;
  }[];

  const showcaseCards = showcaseCardsRaw.map((card, idx) => ({
    ...card,
    imageSrc: showcaseImages[idx % showcaseImages.length].src,
    imageAlt: showcaseImages[idx % showcaseImages.length].alt,
    align: idx === 1 ? "left" : "right",
  }));

  const capabilityCards = t.raw("capabilities.cards") as {
    title: string;
    body: string;
    tags: string[];
    icon: string;
  }[];

  const toolboxRaw = t.raw("toolbox") as {
    titleLines: string[];
    body: string;
    icons: string[];
    cards: {
      title: string;
      columns: string[][];
    }[];
  };

  const reasons = t.raw("reasons") as {
    heading: string;
    cards: { title: string; body: string; icon: string }[];
  };

  return (
    <main className="bg-white">
      <DevelopmentHeroBackground>
        <DevelopmentHeroContent
          title={t("hero.title")}
          description=""
          ctaLabel={t("hero.cta")}
        />
      </DevelopmentHeroBackground>

      <WhyCustom
        eyebrow={t("whyCustom.eyebrow")}
        body={t("whyCustom.body")}
        images={gallery}
      />

      <DevelopmentShowcase cards={showcaseCards} />

      <DevelopmentCapabilities
        heading={t("capabilities.heading")}
        body={t("capabilities.body")}
        cards={capabilityCards}
        ctaLabel={t("capabilities.ctaLabel")}
        ctaHref={t("capabilities.ctaHref")}
      />
      <ClientSliding />
      <DevelopmentToolbox
        titleLines={toolboxRaw.titleLines}
        body={toolboxRaw.body}
        icons={toolboxRaw.icons.map((label) => ({ label }))}
        cards={toolboxRaw.cards}
      />
      <ImageSlider
        title={t("imageSlider.heading")}
        leftImage={"/SliderImages/dev1.png"}
        rightImage={"/SliderImages/dev2.png"}
      />
      <DevelopmentUpgrade />
      <TransformationTestimonial />
      <DevelopmentReasons heading={reasons.heading} cards={reasons.cards} />
    </main>
  );
}
