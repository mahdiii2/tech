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
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-24 sm:pb-16 sm:pt-32">
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
      <div className="relative flex w-full items-center justify-center py-8 sm:py-10">
        <div
          data-circle-surface
          className="relative grid h-[360px] w-[360px] shrink-0 place-items-center sm:h-[500px] sm:w-[500px]"
        >
          <div
            className="absolute inset-0 rounded-full opacity-25"
            style={{ backgroundColor: "var(--dev-300)" }}
            aria-hidden="true"
          />
          <div
            data-circle-copy
            className="relative flex w-full max-w-[22rem] flex-col items-center gap-2.5 px-5 py-5 sm:max-w-[25rem] sm:gap-3 sm:px-10 sm:py-8"
          >
            <h1 className="max-w-[25rem] text-balance text-[clamp(1.25rem,6.2vw,1.5rem)] font-semibold leading-[1.12] tracking-normal text-neutral-900 sm:text-[2rem]">
              {heading}
            </h1>
            <p className="max-w-[20rem] text-[11px] leading-[1.55] text-neutral-600 sm:max-w-[22rem] sm:text-[13px] sm:leading-5">
              {body}
            </p>
            {chips && chips.length > 0 ? (
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="whitespace-nowrap rounded-full border border-neutral-200 bg-white/75 px-2.5 py-1 text-[9px] font-semibold leading-4 text-neutral-700 backdrop-blur sm:px-3 sm:text-[10px]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-[11px] font-semibold text-white shadow-lg transition hover:bg-neutral-800 sm:px-6 sm:text-xs"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
