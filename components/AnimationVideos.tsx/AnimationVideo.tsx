"use client";

import Lottie, { type LottieComponentProps } from "lottie-react";

import { cn } from "@/lib/utils";

export type AnimationData = LottieComponentProps["animationData"];

type HeroAnimationProps = {
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  animation: AnimationData;
};

export default function HeroAnimation({
  animation,
  className,
  loop = true,
  autoplay = true,
}: HeroAnimationProps) {
  return (
    <div className={cn("mx-auto w-full max-w-md", className)}>
      <Lottie animationData={animation} loop={loop} autoplay={autoplay} />
    </div>
  );
}
