import React from "react";
import { MARQUEE_ITEMS } from "@/data/projects";

export default function Marquee() {
  // Repeating array to ensure continuous, seamless infinite loop
  const cycleList = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-[#1E2B20] text-[#E3E9E3] py-3.5 sm:py-4 overflow-hidden border-y border-[#1A261B] select-none shadow-sm relative">
      {/* Subtle edge fades for smooth entry and exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#1E2B20] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#1E2B20] to-transparent z-10" />

      {/* Cyclic continuous loop track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee-cycle flex items-center gap-8 sm:gap-12 tracking-widest text-[10px] sm:text-xs font-bold uppercase whitespace-nowrap">
          {cycleList.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12">
              <span className="hover:text-white transition-colors cursor-default">
                {item}
              </span>
              <span className="text-[#5B755D] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
