import React from "react";
import { SKILLS_DATA } from "@/data/projects";

// SVG icons or clean branded iconography matching the reference
function SkillIcon({ name }: { name: string }) {
  switch (name) {
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <path d="M12 2C6.5 2 7 4.5 7 4.5V7h5v1.5H5S2 8 2 13.5 4.5 19 4.5 19H7v-2.5s-.3-3 3-3h5s2.5 0 2.5-2.5V4.5S17.5 2 12 2zm-1.8 2.2a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB" />
          <path d="M12 22c5.5 0 5-2.5 5-2.5V17h-5v-1.5h7s3 .5 3-5-2.5-5.5-2.5-5.5H17v2.5s.3 3-3 3h-5s-2.5 0-2.5 2.5v6.5s-.5 2.5 5 2.5zm1.8-2.2a1 1 0 110-2 1 1 0 010-2z" fill="#FFD43B" />
        </svg>
      );
    case "JavaScript":
      return (
        <div className="w-8 h-8 rounded bg-[#F7DF1E] text-black font-bold flex items-end justify-end p-0.5 text-xs">
          JS
        </div>
      );
    case "TypeScript":
      return (
        <div className="w-8 h-8 rounded bg-[#3178C6] text-white font-bold flex items-end justify-end p-0.5 text-xs">
          TS
        </div>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "Next.js":
      return (
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px]">
          N
        </div>
      );
    case "HTML & CSS":
      return (
        <div className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs text-[#E34F26]">
          &lt;/&gt;
        </div>
      );
    case "Flask":
      return (
        <div className="w-8 h-8 flex items-center justify-center font-serif text-lg font-bold text-[#141714]">
          🌶
        </div>
      );
    case "SQL":
    case "MySQL":
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#336791]" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "MongoDB":
      return (
        <div className="w-8 h-8 flex items-center justify-center text-xl text-[#47A248] font-bold">
          🍃
        </div>
      );
    case "AWS":
      return (
        <div className="w-8 h-8 flex items-center justify-center font-extrabold text-[11px] text-[#FF9900]">
          aws
        </div>
      );
    case "Power BI":
      return (
        <div className="w-8 h-8 flex items-end justify-center gap-0.5 pb-1">
          <div className="w-1.5 h-3 bg-[#F2C811] rounded-xs" />
          <div className="w-1.5 h-4.5 bg-[#E69C24] rounded-xs" />
          <div className="w-1.5 h-6 bg-[#D76938] rounded-xs" />
        </div>
      );
    case "Git & GitHub":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#141714]" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    default:
      return (
        <div className="w-8 h-8 rounded-full bg-[#E5E1D3] flex items-center justify-center font-mono text-xs font-bold text-[#364A38]">
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-[#E2DFD6]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#6C756E] tracking-wider">
                03.
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#273829] font-bold">
                SKILLS &amp; TOOLS
              </span>
              <div className="h-[1px] w-12 bg-[#C8C5B9]" />
            </div>
            <p className="text-xs sm:text-sm text-[#565C54] max-w-xl">
              Languages, libraries, databases, and frameworks applied in my engineering workflows.
            </p>
          </div>
          <span className="text-xs text-[#6C756E] font-mono">
            Technologies and tools I work with.
          </span>
        </div>

        {/* Clean Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <div
              key={index}
              className="bg-[#F4F2EB] rounded-2xl border border-[#E2DFD6] p-5 flex flex-col items-center justify-center gap-3 hover:border-[#A3B7A3] hover:bg-white hover:shadow-sm transition-all duration-200 group"
            >
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                <SkillIcon name={skill.name} />
              </div>
              <div className="text-center">
                <div className="text-xs sm:text-sm font-semibold text-[#141714] group-hover:text-[#273829]">
                  {skill.name}
                </div>
                <div className="text-[10px] text-[#6C756E] font-mono">
                  {skill.category}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
