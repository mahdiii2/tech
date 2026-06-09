import { Link } from "@/i18n/navigation";

type Props = {
  title: string;
  description: string;
  ctaLabel: string;
};

export function DevelopmentHeroContent({
  title,
  description,
  ctaLabel,
}: Props) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center gap-6 text-center md:gap-8">
      <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
        {title}
      </h1>
    </div>
  );
}
