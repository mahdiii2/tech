import { BackgroundCircles } from "./BackgroundCircle";
import { Link } from "@/i18n/navigation";

type VisionContent = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
  chips?: string[];
};

type HomeHeroSequenceProps = {
  vision: VisionContent;
};

export function HomeHeroSequence({ vision }: HomeHeroSequenceProps) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-24 sm:pb-16 sm:pt-32">
      <BackgroundCircles />
      <div className="relative z-10 grid w-full place-items-center">
        <VisionCallout {...vision} />
      </div>
    </div>
  );
}

function VisionCallout({
  heading,
  body,
  ctaLabel,
  ctaHref = "/contact",
  chips,
}: VisionContent) {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center text-center">
      <div className="relative flex w-full items-center justify-center px-4 py-14 sm:px-8 sm:py-16">
        <div
          className="absolute h-[360px] w-[360px] rounded-full opacity-25 sm:h-[500px] sm:w-[500px]"
          style={{ backgroundColor: "var(--dev-300)" }}
          aria-hidden="true"
        />
        <div className="relative flex w-full max-w-md flex-col items-center gap-4 px-4 py-8 sm:max-w-lg sm:px-8">
          <h1 className="max-w-md text-3xl font-semibold leading-tight tracking-normal text-neutral-900 sm:text-4xl">
            {heading}
          </h1>
          <p className="max-w-sm text-sm leading-6 text-neutral-600 sm:max-w-md sm:text-base sm:leading-7">
            {body}
          </p>
          {chips && chips.length > 0 ? (
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-neutral-200 bg-white/75 px-3 py-1.5 text-[11px] font-semibold text-neutral-700 backdrop-blur sm:text-xs"
                >
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
          <Link
            href={ctaHref}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
