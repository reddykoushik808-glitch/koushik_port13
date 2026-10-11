import React from "react";
import { MARQUEE_ITEMS } from "@/data/projects";

export default function Marquee() {
  return (
    <div className="w-full bg-[#1E2B20] text-[#E3E9E3] py-3.5 sm:py-4 overflow-hidden border-y border-[#1A261B] select-none shadow-sm">
      <div className="flex whitespace-nowrap overflow-x-auto no-scrollbar justify-between items-center max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-6 sm:gap-10 tracking-widest text-[11px] sm:text-xs font-bold uppercase w-full justify-around flex-wrap sm:flex-nowrap">
          {MARQUEE_ITEMS.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                {item}
              </span>
              {idx < MARQUEE_ITEMS.length - 1 && (
                <span className="text-[#5B755D] text-xs">✦</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
