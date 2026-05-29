import InfiniteLogos from "@/components/HeroPage/ClientsSlider";
import { getTranslations } from "next-intl/server";
function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const defaultFocusAreas = [
  "Companies",
  "Factories",
  "Construction",
  "Hotels",
  "Hospitals",
  "Stores",
  "Websites",
  "Attendance",
  "Power BI",
  "Data pipelines",
  "HR reports",
  "AI workflows",
];

type ClientSliderProps = {
  heading?: string;
};

export default async function ClientSlider({ heading }: ClientSliderProps) {
  const t = await getTranslations("HomePage.clients");
  const resolvedHeading = heading ?? t("heading");
  let focusAreas = defaultFocusAreas;

  try {
    const translatedFocusAreas = t.raw("focusAreas") as string[];

    if (Array.isArray(translatedFocusAreas) && translatedFocusAreas.length) {
      focusAreas = translatedFocusAreas;
    }
  } catch {
    focusAreas = defaultFocusAreas;
  }

  const randomFocusAreas = shuffleArray([...focusAreas]).slice(0, 6);

  return (
    <section className="w-full px-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="mb-8 max-w-3xl text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl md:mb-10 md:text-4xl">
          {resolvedHeading}
        </h2>
        <InfiniteLogos speed={50}>
          {randomFocusAreas.map((label, i) => (
            <span
              key={i}
              className="mx-12 whitespace-nowrap text-4xl font-semibold text-gray-400 transition hover:text-gray-700"
            >
              {label}
            </span>
          ))}
        </InfiniteLogos>
      </div>
    </section>
  );
}
