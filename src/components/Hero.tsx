"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  BarChart3,
  Layers,
  Lightbulb,
  GraduationCap,
  Sparkles,
  UserCheck
} from "lucide-react";
import { HERO_STATS } from "@/data/projects";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const statIcons = {
    BarChart3: BarChart3,
    Layers: Layers,
    Lightbulb: Lightbulb,
    GraduationCap: GraduationCap,
  };

  return (
    <section id="hero" className="pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Bio, CTAs, Technologies (Col span: 5 or 6) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#6C756E] font-medium">
                B.Tech CSE (Data Science)
              </span>
            </div>

            {/* Giant Main Title */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#141714] tracking-tight leading-[0.95] uppercase mb-4">
              HI, I’M <br />
              <span className="block">KOUSHIK REDDY.</span>
            </h1>

            {/* Sub-headline / Role */}
            <h2 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-[#364A38] uppercase tracking-normal mb-5 leading-snug">
              FULL STACK DEVELOPER <br className="hidden sm:inline" />
              <span className="text-[#5B755D]">&</span> DATA ANALYST
            </h2>

            {/* Concise Description */}
            <p className="text-sm sm:text-base text-[#4B534C] leading-relaxed mb-8 max-w-md">
              I build useful applications and turn data into meaningful insights through software engineering, analytics, and AI.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#273829] hover:bg-[#1A261B] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Koushik_Reddy_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[#C8C5B9] bg-[#FAF9F5] hover:bg-[#EFECE2] text-[#273829] text-xs sm:text-sm font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Tech chips below CTA */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#565C54] font-medium pt-2 border-t border-[#E5E1D3]/60 max-w-md">
              <span>Python</span>
              <span className="w-1 h-1 rounded-full bg-[#A3B7A3]" />
              <span>JavaScript</span>
              <span className="w-1 h-1 rounded-full bg-[#A3B7A3]" />
              <span>Machine Learning</span>
              <span className="w-1 h-1 rounded-full bg-[#A3B7A3]" />
              <span>Data Visualization</span>
            </div>
          </div>

          {/* Center Column: Portrait Artwork Composition (Col span: 4 or 5) */}
          <div className="lg:col-span-4 flex justify-center items-center relative">
            <div className="relative w-[280px] h-[340px] sm:w-[340px] sm:h-[400px] md:w-[380px] md:h-[440px] flex items-center justify-center">
              
              {/* Sage Green Organic / Rounded Backdrop */}
              <div className="absolute inset-0 bg-[#A8BFA9] rounded-[48%_52%_55%_45%_/_48%_46%_54%_52%] transform rotate-1 scale-95 transition-transform duration-700 hover:rotate-3 shadow-inner" />

              {/* Minimal geometric decoration & sketch accents */}
              <div className="absolute -top-3 left-4 text-[#364A38] opacity-70">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M5 25L15 15M10 32L24 18M18 36L30 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Portrait container */}
              <div className="relative w-[92%] h-[92%] rounded-[48%_52%_55%_45%_/_48%_46%_54%_52%] overflow-hidden flex items-center justify-center bg-transparent z-10">
                {!imageError ? (
                  <Image
                    src="/images/portrait.jpg"
                    alt="Koushik Reddy - Portrait"
                    fill
                    sizes="(max-width: 768px) 320px, 400px"
                    className="object-cover object-top"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : null}

                {/* Graceful deliberate CSS portrait placeholder if image is missing or empty */}
                {imageError && (
                  <div className="w-full h-full bg-gradient-to-b from-[#B8CCB9] to-[#8FA890] flex flex-col items-center justify-center p-6 text-center text-[#1E2B20]">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF9F5]/80 flex items-center justify-center mb-3 shadow-md border-2 border-[#5B755D]/30">
                      <UserCheck className="w-12 h-12 text-[#273829]" />
                    </div>
                    <span className="font-display font-extrabold text-lg uppercase tracking-wide text-[#141714]">
                      Koushik Reddy
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#364A38] mt-1">
                      Data Science & Full Stack
                    </span>
                    <div className="mt-3 px-3 py-1 rounded-full bg-[#FAF9F5]/70 text-[11px] font-medium text-[#273829]">
                      Add portrait.jpg to public/images/
                    </div>
                  </div>
                )}
              </div>

              {/* Handwritten annotation on the right: "TURNING DATA INTO REAL IMPACT" */}
              <div className="absolute -right-4 sm:-right-8 bottom-12 z-20 pointer-events-none transform rotate-3 flex items-start gap-1">
                <span className="handwriting text-base sm:text-lg font-bold text-[#273829] leading-tight text-right block max-w-[110px]">
                  TURNING <br />
                  DATA INTO <br />
                  REAL IMPACT
                </span>
                <span className="text-[#273829] text-xl font-bold mt-1">
                  &gt;
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics Sidebar (Col span: 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:pl-6 lg:border-l border-[#E2DFD6]">
            {HERO_STATS.map((stat, idx) => {
              const IconComp = statIcons[stat.icon as keyof typeof statIcons] || Sparkles;
              return (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-[#EFECE2] text-[#364A38] group-hover:bg-[#C6D3C6] transition-colors mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#141714] leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#273829]">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#6C756E]">
                      {stat.subtext}
                    </div>
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
