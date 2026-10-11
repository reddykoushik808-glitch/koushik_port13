"use client";

import React from "react";
import { Mail, Linkedin, Github, ArrowUpRight, ArrowUp } from "lucide-react";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-20 lg:pt-28 pb-12 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-bold text-[#6C756E] tracking-wider">
            04.
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#273829] font-bold">
            CONTACT
          </span>
          <div className="h-[1px] w-12 bg-[#C8C5B9]" />
        </div>

        {/* Big Editorial Heading & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-20 border-b border-[#E2DFD6]">
          
          {/* Main Call to action heading */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#141714] leading-[0.95] tracking-tight uppercase">
              LET’S BUILD <br />
              <span className="text-[#364A38]">SOMETHING</span> <br />
              USEFUL.
            </h2>
          </div>

          {/* Contact actions & annotations */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 relative">
            
            {/* Handwritten style annotation */}
            <div className="hidden sm:flex items-center justify-end gap-2 text-right pointer-events-none transform -rotate-2">
              <span className="handwriting text-lg sm:text-xl font-bold text-[#273829]">
                Looking forward to connecting!
              </span>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#273829]">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <p className="text-sm sm:text-base text-[#4B534C] leading-relaxed">
              I’m always open to interesting projects, collaborations, or opportunities. Let’s turn data into meaningful outcomes.
            </p>

            {/* Direct contact links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:reddykoushik808@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#273829] hover:bg-[#1A261B] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4" />
                <span>reddykoushik808@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="https://www.linkedin.com/in/koushik-reddy-3a9982328"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#EFECE2] hover:bg-[#E5E1D3] text-[#141714] text-xs sm:text-sm font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/reddykoushik808-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#EFECE2] hover:bg-[#E5E1D3] text-[#141714] text-xs sm:text-sm font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Github className="w-4 h-4 text-[#141714]" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6C756E]">
          <div>
            © {currentYear} Koushik Reddy. Designed &amp; built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-medium hover:text-[#141714] transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
