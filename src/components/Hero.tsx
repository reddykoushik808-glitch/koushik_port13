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
  UserCheck,
  Github,
  Linkedin,
  Mail
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
    <section id="hero" className="pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Bio, CTAs, Technologies (Col span: 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-3.5">
              <span className="font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#6C756E] font-medium bg-[#EFECE2] px-3 py-1 rounded-full border border-[#E2DFD6]">
                B.Tech CSE (Data Science)
              </span>
            </div>

            {/* Giant Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#141714] tracking-tight leading-[0.96] uppercase mb-4">
              HI, I’M <br />
              <span className="block">KOUSHIK REDDY.</span>
            </h1>

            {/* Sub-headline / Role */}
            <h2 className="font-display text-base sm:text-xl lg:text-[1.35rem] font-bold text-[#364A38] uppercase tracking-normal mb-4 leading-snug">
              FULL STACK DEVELOPER <br className="hidden sm:inline" />
              <span className="text-[#5B755D]">&</span> DATA ANALYST
            </h2>

            {/* Concise Description */}
            <p className="text-xs sm:text-sm text-[#4B534C] leading-relaxed mb-7 max-w-md">
              I build useful applications and turn data into meaningful insights through software engineering, analytics, and AI.
            </p>

            {/* CTAs + Dedicated Social Icons */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#273829] hover:bg-[#1A261B] text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/resume.pdf"
                download="Koushik_Reddy_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-[#C8C5B9] bg-[#FAF9F5] hover:bg-[#EFECE2] text-[#273829] text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Download Resume</span>
                <Download className="w-3.5 h-3.5" />
              </a>

              {/* Dedicated GitHub Icon */}
              <a
                href="https://github.com/reddykoushik808-glitch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full border border-[#C8C5B9] bg-[#FAF9F5] hover:bg-[#EFECE2] text-[#141714] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>

              {/* Dedicated LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/koushik-reddy-3a9982328"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full border border-[#C8C5B9] bg-[#FAF9F5] hover:bg-[#EFECE2] text-[#0A66C2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              {/* Dedicated Email Icon */}
              <a
                href="mailto:reddykoushik808@gmail.com"
                aria-label="Email"
                className="p-3 rounded-full border border-[#C8C5B9] bg-[#FAF9F5] hover:bg-[#EFECE2] text-[#364A38] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                title="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Tech chips below CTA */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] text-[#565C54] font-medium pt-3 border-t border-[#E5E1D3]/70 max-w-md">
              <span className="hover:text-[#141714] transition-colors">Python</span>
              <span className="w-1 h-1 rounded-full bg-[#A3B7A3]" />
              <span className="hover:text-[#141714] transition-colors">JavaScript</span>
              <span className="w-1 h-1 rounded-full bg-[#A3B7A3]" />
              <span className="hover:text-[#141714] transition-colors">Machine Learning</span>
              <span className="w-1 h-1 rounded-full bg-[#A3B7A3]" />
              <span className="hover:text-[#141714] transition-colors">Data Visualization</span>
            </div>
          </div>

          {/* Center Column: Portrait Artwork Composition (Col span: 4) */}
          <div className="lg:col-span-4 flex justify-center items-center relative py-2">
            <div className="relative w-[270px] h-[330px] sm:w-[330px] sm:h-[390px] md:w-[360px] md:h-[420px] flex items-center justify-center">
              
              {/* Sage Green Organic Backdrop with smooth interactive hover float */}
              <div className="absolute inset-0 bg-[#A8BFA9] rounded-[48%_52%_55%_45%_/_48%_46%_54%_52%] transform rotate-1 scale-95 transition-all duration-700 hover:rotate-3 hover:scale-100 shadow-inner" />

              {/* Minimal geometric decoration & sketch accents */}
              <div className="absolute -top-3 left-3 text-[#364A38] opacity-70">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                  <path d="M5 25L15 15M10 32L24 18M18 36L30 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Portrait Container with actual portrait.jpg image */}
              <div className="relative w-[92%] h-[92%] rounded-[48%_52%_55%_45%_/_48%_46%_54%_52%] overflow-hidden flex items-center justify-center bg-transparent z-10 transition-transform duration-500 hover:scale-[1.02] shadow-md">
                {!imageError ? (
                  <Image
                    src="/images/portrait.jpg"
                    alt="Koushik Reddy - Portrait"
                    fill
                    sizes="(max-width: 768px) 330px, 420px"
                    className="object-cover object-center"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : null}

                {/* Fallback state if ever unavailable */}
                {imageError && (
                  <div className="w-full h-full bg-gradient-to-b from-[#B8CCB9] to-[#8FA890] flex flex-col items-center justify-center p-6 text-center text-[#1E2B20]">
                    <div className="w-20 h-20 rounded-full bg-[#FAF9F5]/85 flex items-center justify-center mb-3 shadow-md border-2 border-[#5B755D]/30">
                      <UserCheck className="w-10 h-10 text-[#273829]" />
                    </div>
                    <span className="font-display font-extrabold text-base uppercase tracking-wide text-[#141714]">
                      Koushik Reddy
                    </span>
                  </div>
                )}
              </div>

              {/* Subtle accent corner sparkle */}
              <div className="absolute -right-2 bottom-8 z-20 pointer-events-none text-[#364A38]/50">
                <span className="text-xl font-bold">✦</span>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics Sidebar (Col span: 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:pl-8 lg:border-l border-[#E2DFD6]">
            {HERO_STATS.map((stat, idx) => {
              const IconComp = statIcons[stat.icon as keyof typeof statIcons] || Sparkles;
              return (
                <div key={idx} className="flex items-start gap-3.5 group hover:translate-x-1.5 transition-transform duration-300">
                  <div className="p-2.5 rounded-xl bg-[#EFECE2] text-[#364A38] group-hover:bg-[#C6D3C6] group-hover:scale-110 transition-all duration-300 mt-0.5 shadow-2xs">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display text-xl sm:text-2xl font-extrabold text-[#141714] leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-[#273829]">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-[#6C756E]">
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
