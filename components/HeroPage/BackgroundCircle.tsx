export function BackgroundCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block">
      <div className="absolute left-[13%] top-[20%] h-40 w-40 rounded-full bg-[var(--dev-500)] ]opacity-80" />

      <div className="absolute right-[9%] top-[25%] h-48 w-48 rounded-full  bg-[var(--engagement-400)] opacity-70" />

      <div className="absolute left-[5%] bottom-[15%] h-48 w-48 rounded-full  bg-[var(--design-300)] opacity-70" />

      <div className="absolute right-0 bottom-[10%] h-56 w-56 rounded-full  bg-[var(--dev-500)] opacity-40" />
    </div>
  );
}
