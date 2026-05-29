"use client";

export function ServicesBackgroundCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <div className="absolute left-[-6%] top-[12%] h-56 w-56 rounded-full bg-[#eaf4ff] opacity-60" />
      <div className="absolute left-[6%] bottom-[200px] h-64 w-64 rounded-full bg-[#f7fbcd] opacity-60" />

      <div className="absolute right-[4%] top-[18%] h-60 w-60 rounded-full bg-[#e5f5f0] opacity-60" />
      <div className="absolute right-[-5%] bottom-[10%] h-72 w-72 rounded-full bg-[#eaf4ff] opacity-60" />
    </div>
  );
}
