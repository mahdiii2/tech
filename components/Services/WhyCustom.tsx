import Image from "next/image";
import { useLocale } from "next-intl";

type GalleryItem = {
  src: string;
  alt: string;
};

type Variant = "dev" | "design" | "engagement";

type Props = {
  eyebrow: string;
  body: string;
  images: GalleryItem[];
  variant?: Variant;
};

const accentMap: Record<Variant, string> = {
  dev: "var(--dev-500)",
  design: "var(--design-500)",
  engagement: "var(--engagement-500)",
};

export function WhyCustom({ eyebrow, body, images, variant = "dev" }: Props) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const accentColor = accentMap[variant] ?? accentMap.dev;

  return (
    <section className="mx-auto mt-16 grid max-w-6xl items-center md:mt-10 lg:grid-cols-3 lg:gap-20">
      <div className="order-2 space-y-4 pl-3 lg:order-1 lg:pl-6 lg:col-span-2 lg:pl-22">
        <p className="text-lg font-semibold" style={{ color: accentColor }}>
          {eyebrow}
        </p>
        <p className="text-[26px] leading-[34px] text-neutral-900 md:text-4xl md:leading-[42px] font-semibold">
          {body}
        </p>
      </div>

      <div className="relative order-1 lg:order-2 lg:col-span-1">
        <div className="relative mx-auto h-[360px] w-full max-w-md lg:hidden">
          {images.map((item, idx) => {
            const offsets = [
              { top: 0, left: 66, rotation: "-rotate-1" },
              { top: 80, left: 90, rotation: "rotate-2" },
              { top: 160, left: 70, rotation: "-rotate-3" },
            ];
            const { top, left, rotation } = offsets[idx] || {
              top: idx * 60,
              left: 20,
              rotation: "",
            };
            return (
              <div
                key={item.src}
                className={`absolute h-[180px] w-[260px] overflow-hidden rounded-2xl shadow-xl ${rotation}`}
                style={{ top, left }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 260px"
                  priority={idx === 0}
                />
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-8">
          {images.map((item, idx) => {
            const sizes = [
              {
                height: 220,
                width: 320,
                translate: isRtl ? "lg:translate-x-22" : "lg:-translate-x-22",
              },
              {
                height: 200,
                width: 300,
                translate: isRtl ? "lg:translate-x-14" : "lg:-translate-x-14",
              },
              {
                height: 220,
                width: 320,
                translate: isRtl ? "lg:translate-x-22" : "lg:-translate-x-22",
              },
            ];
            const { height, width, translate } = sizes[idx] || {
              height: 210,
              width: 300,
              translate: "",
            };

            return (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-2xl shadow-xl ${translate}`}
                style={{ height: `${height}px`, width: `${width}px` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 320px"
                  priority={idx === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
