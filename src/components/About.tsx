"use client";

import React from "react";
import { Code2, TrendingUp, BrainCircuit, Cog, ArrowRight } from "lucide-react";
import { ABOUT_HIGHLIGHTS } from "@/data/projects";

export default function About() {
  const highlightIcons = {
    Code2: Code2,
    TrendingUp: TrendingUp,
    BrainCircuit: BrainCircuit,
    Lightbulb: Cog, // matches the settings/cog gear in reference image
  };

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-[#E2DFD6]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with index number */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs font-bold text-[#6C756E] tracking-wider">
            01.
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#273829] font-bold">
            ABOUT ME
          </span>
          <div className="h-[1px] w-12 bg-[#C8C5B9]" />
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Column 1: Big Headline */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#141714] leading-[0.95] tracking-tight uppercase">
              CURIOUS <br />
              ANALYST. <br />
              <span className="text-[#5B755D]">PRACTICAL</span> <br />
              <span className="text-[#5B755D]">BUILDER.</span>
            </h2>
          </div>

          {/* Column 2: Narrative text & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-[#4B534C] leading-relaxed">
              <p>
                I'm <strong className="text-[#141714] font-semibold">Koushik Reddy</strong>, a B.Tech Computer Science (Data Science) undergraduate passionate about building practical applications and working with data, AI, and modern web technologies.
              </p>
              <p>
                I enjoy solving real-world problems through a combination of full-stack development, data analysis, and AI — from inventory management systems to predictive analytics and intelligent applications.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#273829] hover:bg-[#1A261B] text-white text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: 4 Compact Expertise Cards in 2x2 grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {ABOUT_HIGHLIGHTS.map((item, idx) => {
              const Icon = highlightIcons[item.icon as keyof typeof highlightIcons] || Code2;
              return (
                <div
                  key={idx}
                  className="bg-[#F4F2EB] p-5 rounded-2xl border border-[#E2DFD6] hover:border-[#A3B7A3] hover:shadow-sm transition-all flex flex-col justify-between min-h-[160px]"
                >
                  <div className="w-10 h-10 rounded-full bg-[#5B755D]/15 flex items-center justify-center text-[#364A38] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#141714] leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#6C756E] leading-relaxed">
                      {idx === 0 && "Building end-to-end web applications"}
                      {idx === 1 && "Turning data into meaningful insights"}
                      {idx === 2 && "Applying AI to real-world problems"}
                      {idx === 3 && "Building practical and user-focused solutions"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
