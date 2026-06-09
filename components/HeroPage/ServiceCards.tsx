//Version with nbutton

// "use client";

// import React, { useRef } from "react";
// import { Link } from "@/i18n/navigation";
// import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
// import ReactLenis from "lenis/react";
// import animationdev from "@/public/lottie/DevCubes.json";
// import animationdesign from "@/public/lottie/DesignToggle.json";
// import animationengagement from "@/public/lottie/EngagementEye.json";
// import HeroAnimation from "@/components/AnimationVideos.tsx/AnimationVideo";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";

// const ANIMATIONS = {
//   development: animationdev,
//   design: animationdesign,
//   engagement: animationengagement,
// } as const;

// const COLOR_THEMES = {
//   development: {
//     cardBg: "var(--dev-50)",
//     chipBg: "var(--dev-200)",
//     chipText: "var(--dev-800f)",
//     circleBg: "var(--dev-200)",
//     circleGlow: "var(--dev-500)",
//   },
//   design: {
//     cardBg: "var(--design-50)",
//     chipBg: "var(--design-200)",
//     chipText: "var(--design-800)",
//     circleBg: "var(--design-200)",
//     circleGlow: "var(--design-500)",
//   },
//   engagement: {
//     cardBg: "var(--engagement-50)",
//     chipBg: "var(--engagement-200)",
//     chipText: "var(--engagement-800)",
//     circleBg: "var(--engagement-200)",
//     circleGlow: "var(--engagement-500)",
//   },
// } as const;

// type BlueprintKey = keyof typeof COLOR_THEMES;

// export type BlueprintCardContent = {
//   key: BlueprintKey;
//   title: string;
//   description: string;
//   tags: string[];
//   learnHref: string;
//   contactHref: string;
// };

// type CTAContent = {
//   learnMore: string;
//   contact: string;
// };

// type StickyCardProps = {
//   i: number;
//   blueprint: BlueprintCardContent;
//   ctas: CTAContent;
//   progress: MotionValue<number>;
//   range: [number, number];
//   targetScale: number;
// };

// const StickyCard_001 = ({
//   i,
//   blueprint,
//   ctas,
//   progress,
//   range,
//   targetScale,
// }: StickyCardProps) => {
//   const container = useRef<HTMLDivElement>(null);

//   const theme = COLOR_THEMES[blueprint.key];
//   const animation = ANIMATIONS[blueprint.key]; // âœ… this picks the correct animation

//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div
//       ref={container}
//       className="sticky top-0 flex items-center justify-center mx-3"
//     >
//       <motion.div
//         style={{
//           scale,
//           top: `calc(-5vh + ${i * 20 + 200}px)`,
//         }}
//         className="relative -top-1/4 flex w-full max-w-[1064px] origin-top flex-col "
//       >
//         <div
//           className="rounded-[32px] border border-black/5 p-6 shadow-sm sm:p-10 lg:min-h-[500px] min-h-[60vh] md:min-h-[650px]"
//           style={{ backgroundColor: theme.cardBg }}
//         >
//           <div className="grid gap-10 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] items-center">
//             {/* TEXT BLOCK */}
//             <div className="space-y-10">
//               <h3 className="text-3xl font-semibold tracking-tight text-neutral-900">
//                 {blueprint.title}
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {blueprint.tags.map((tag) => (
//                   <Badge
//                     key={tag}
//                     className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide"
//                     style={{
//                       backgroundColor: theme.chipBg,
//                       color: theme.chipText,
//                     }}
//                   >
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>

//               <p className="text-base leading-relaxed text-neutral-700">
//                 {blueprint.description}
//               </p>

//               {/* MOBILE ANIMATION â€” only visible on small screens */}
//               <div className="flex items-center justify-center order-1 lg:hidden">
//                 <div
//                   className={cn(
//                     "relative flex h-48 w-48 items-center justify-center rounded-full p-6",
//                     "before:absolute before:inset-3 before:rounded-full before:blur-3xl before:content-['']"
//                   )}
//                   style={{
//                     backgroundColor: theme.circleBg,
//                     boxShadow: `0 25px 50px -25px ${theme.circleGlow}`,
//                   }}
//                 >
//                   <HeroAnimation className="w-32" animation={animation} />
//                 </div>
//               </div>

//               {/* BUTTONS */}
//               <div className="flex flex-wrap gap-3 order-2 lg:order-none">
//                 <Button
//                   asChild
//                   className="rounded-full bg-neutral-900 px-6 py-5 text-sm font-semibold text-white hover:bg-neutral-800"
//                 >
//                   <Link href={blueprint.learnHref}>{ctas.learnMore}</Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   className="rounded-full border-0 bg-white px-6 py-5 text-sm font-semibold text-neutral-900 shadow hover:bg-white/90"
//                 >
//                   <Link href={blueprint.contactHref}>{ctas.contact}</Link>
//                 </Button>
//               </div>
//             </div>

//             {/* DESKTOP ANIMATION â€” visible only on large screens */}
//             <div className="hidden lg:flex items-center justify-center">
//               <div
//                 className={cn(
//                   "relative flex h-48 w-48 items-center justify-center rounded-full p-6",
//                   "before:absolute before:inset-3 before:rounded-full before:blur-3xl before:content-['']"
//                 )}
//                 style={{
//                   backgroundColor: theme.circleBg,
//                   boxShadow: `0 25px 50px -25px ${theme.circleGlow}`,
//                 }}
//               >
//                 <HeroAnimation className="w-32" animation={animation} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// type Skiper16Props = {
//   blueprints: BlueprintCardContent[];
//   ctas: CTAContent;
// };

// const Skiper16 = ({ blueprints, ctas }: Skiper16Props) => {
//   const container = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <ReactLenis root options={{ smoothWheel: false }}>
//       <main
//         ref={container}
//         className="relative flex w-full flex-col items-center justify-center mb-80"
//       >
//         {blueprints.map((blueprint, i) => {
//           const targetScale = Math.max(
//             0.5,
//             1 - (blueprints.length - i - 1) * 0.1
//           );

//           return (
//             <StickyCard_001
//               key={blueprint.key}
//               i={i}
//               blueprint={blueprint}
//               ctas={ctas}
//               progress={scrollYProgress}
//               range={[i * 0.25, 1]}
//               targetScale={targetScale}
//             />
//           );
//         })}
//       </main>
//     </ReactLenis>
//   );
// };

// export { Skiper16, StickyCard_001 };

"use client";

import React, { useRef } from "react";
import { Link } from "@/i18n/navigation";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import ReactLenis from "lenis/react";
import animationdev from "@/public/lottie/DevCubes.json";
import animationdesign from "@/public/lottie/DesignToggle.json";
import animationengagement from "@/public/lottie/EngagementEye.json";
import HeroAnimation from "@/components/AnimationVideos.tsx/AnimationVideo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getLocale } from "next-intl/server";
import { useLocale } from "next-intl";

const ANIMATIONS = {
  development: animationdev,
  design: animationdesign,
  engagement: animationengagement,
} as const;

const COLOR_THEMES = {
  development: {
    cardBg: "var(--dev-50)",
    chipBg: "var(--dev-200)",
    chipText: "var(--dev-800f)",
    circleBg: "var(--dev-200)",
    circleGlow: "var(--dev-500)",
  },
  design: {
    cardBg: "var(--design-50)",
    chipBg: "var(--design-200)",
    chipText: "var(--design-800)",
    circleBg: "var(--design-200)",
    circleGlow: "var(--design-500)",
  },
  engagement: {
    cardBg: "var(--engagement-50)",
    chipBg: "var(--engagement-200)",
    chipText: "var(--engagement-800)",
    circleBg: "var(--engagement-200)",
    circleGlow: "var(--engagement-500)",
  },
} as const;

type BlueprintKey = keyof typeof COLOR_THEMES;

export type BlueprintCardContent = {
  key: BlueprintKey;
  title: string;
  description: string;
  tags: string[];
  learnHref: string;
  contactHref: string;
};

type CTAContent = {
  learnMore: string;
  contact: string;
};

type StickyCardProps = {
  i: number;
  blueprint: BlueprintCardContent;
  ctas: CTAContent;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

// const StickyCard_001 = ({
//   i,
//   blueprint,
//   ctas,
//   progress,
//   range,
//   targetScale,
// }: StickyCardProps) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   const theme = COLOR_THEMES[blueprint.key];
//   const animation = ANIMATIONS[blueprint.key];

//   const scale = useTransform(progress, range, [1, targetScale]);

//   // is this card the one mostly visible?
//   const isInView = useInView(cardRef, { amount: 0.1 });

//   return (
//     <motion.div
//       ref={cardRef}
//       className="sticky top-0 flex items-center justify-center mx-3 my-10"
//       style={{
//         scale,
//         top: `calc(-5vh + ${i * 20 + 200}px)`,
//         // static stacking order â€“ no popping
//         zIndex: 10 + i,
//         // only the card thatâ€™s mostly visible can catch clicks
//         pointerEvents: isInView ? "auto" : "none",
//       }}
//     >
//       <div className="relative -top-1/4 flex w-full max-w-[1064px] origin-top flex-col">
//         <div
//           className="rounded-[32px] border border-black/5 p-6 shadow-sm sm:p-10 lg:min-h-[500px] min-h-[60vh] md:min-h-[650px]"
//           style={{ backgroundColor: theme.cardBg }}
//         >
//           <div className="grid gap-10 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] items-center">
//             {/* TEXT BLOCK */}
//             <div className="space-y-10">
//               <h3 className="text-3xl font-semibold tracking-tight text-neutral-900">
//                 {blueprint.title}
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {blueprint.tags.map((tag) => (
//                   <Badge
//                     key={tag}
//                     className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide"
//                     style={{
//                       backgroundColor: theme.chipBg,
//                       color: theme.chipText,
//                     }}
//                   >
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>

//               <p className="text-base leading-relaxed text-neutral-700">
//                 {blueprint.description}
//               </p>

//               {/* MOBILE ANIMATION */}
//               <div className="flex items-center justify-center order-1 lg:hidden">
//                 <div
//                   className={cn(
//                     "relative flex h-48 w-48 items-center justify-center rounded-full p-6",
//                     "before:absolute before:inset-3 before:rounded-full before:blur-3xl before:content-['']"
//                   )}
//                   style={{
//                     backgroundColor: theme.circleBg,
//                     boxShadow: `0 25px 50px -25px ${theme.circleGlow}`,
//                   }}
//                 >
//                   <HeroAnimation className="w-32" animation={animation} />
//                 </div>
//               </div>

//               {/* BUTTONS */}
//               <div className="flex flex-wrap gap-3 order-2 lg:order-none">
//                 <Button
//                   asChild
//                   className="rounded-full bg-neutral-900 px-6 py-5 text-sm font-semibold text-white hover:bg-neutral-800"
//                 >
//                   <Link href={blueprint.learnHref}>{ctas.learnMore}</Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   className="rounded-full border-0 bg-white px-6 py-5 text-sm font-semibold text-neutral-900 shadow hover:bg-white/90"
//                 >
//                   <Link href={blueprint.contactHref}>{ctas.contact}</Link>
//                 </Button>
//               </div>
//             </div>

//             {/* DESKTOP ANIMATION */}
//             <div className="hidden lg:flex items-center justify-center">
//               <div
//                 className={cn(
//                   "relative flex h-48 w-48 items-center justify-center rounded-full p-6",
//                   "before:absolute before:inset-3 before:rounded-full before:blur-3xl before:content-['']"
//                 )}
//                 style={{
//                   backgroundColor: theme.circleBg,
//                   boxShadow: `0 25px 50px -25px ${theme.circleGlow}`,
//                 }}
//               >
//                 <HeroAnimation className="w-32" animation={animation} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
const StickyCard_001 = ({
  i,
  blueprint,
  ctas,
  progress,
  range,
  targetScale,
}: StickyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const theme = COLOR_THEMES[blueprint.key];
  const animation = ANIMATIONS[blueprint.key];
  const scale = useTransform(progress, range, [1, targetScale]);

  // Is this card the one mostly visible in the viewport?
  const isInView = useInView(cardRef, { amount: 0.6 });

  const locale = useLocale();
  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex items-center justify-center mx-3"
      style={{
        // keep them stacked: later cards are simply on top
        zIndex: 10 + i,
        // only the card thatâ€™s mostly visible can receive clicks
        pointerEvents: isInView ? "auto" : "none",
      }}
    >
      <motion.div
        style={{
          scale,
          // this is your original vertical offset that creates the stacked effect
          top: `calc(-5vh + ${i * 20 + 200}px)`,
        }}
        className="relative -top-1/4 flex w-full max-w-[1064px] origin-top flex-col"
      >
        <div
          className="rounded-[32px] border border-black/5 p-6 shadow-sm sm:p-10 lg:min-h-[40vh] min-h-[90vh] md:min-h-[60vh]"
          style={{ backgroundColor: theme.cardBg }}
        >
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] items-center">
            <div className="space-y-10">
              <h3
                className={
                  locale === "ar"
                    ? "text-4xl leading-loose font-semibold tracking-tight text-neutral-900 "
                    : " leading-relaxed text-3xl font-semibold tracking-tight text-neutral-900 "
                }
              >
                {blueprint.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {blueprint.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide"
                    style={{
                      backgroundColor: theme.chipBg,
                      color: theme.chipText,
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <p
                className={
                  locale === "ar"
                    ? "text-xl leading-loose  tracking-tight  text-neutral-700"
                    : " leading-relaxed text-base  tracking-tight  text-neutral-700 "
                }
              >
                {blueprint.description}
              </p>

              <div className="flex items-center justify-center order-1 lg:hidden">
                <div
                  className={cn(
                    "relative flex h-48 w-48 items-center justify-center rounded-full p-6",
                    "before:absolute before:inset-3 before:rounded-full before:blur-3xl before:content-['']"
                  )}
                  style={{
                    backgroundColor: theme.circleBg,
                    boxShadow: `0 25px 50px -25px ${theme.circleGlow}`,
                  }}
                >
                  <HeroAnimation className="w-32" animation={animation} />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 order-2 lg:order-none">
                <Button
                  asChild
                  className="rounded-full bg-neutral-900 px-6 py-5 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  <Link href={blueprint.learnHref}>{ctas.learnMore}</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div
                className={cn(
                  "relative flex h-48 w-48 items-center justify-center rounded-full p-6",
                  "before:absolute before:inset-3 before:rounded-full before:blur-3xl before:content-['']"
                )}
                style={{
                  backgroundColor: theme.circleBg,
                  boxShadow: `0 25px 50px -25px ${theme.circleGlow}`,
                }}
              >
                <HeroAnimation className="w-32" animation={animation} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

type Skiper16Props = {
  blueprints: BlueprintCardContent[];
  ctas: CTAContent;
};

const Skiper16 = ({ blueprints, ctas }: Skiper16Props) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root options={{ smoothWheel: false }}>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center mb-50"
      >
        {blueprints.map((blueprint, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (blueprints.length - i - 1) * 0.1
          );

          return (
            <StickyCard_001
              key={blueprint.key}
              i={i}
              blueprint={blueprint}
              ctas={ctas}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { Skiper16, StickyCard_001 };
