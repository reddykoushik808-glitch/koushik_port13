"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "/resume.pdf", isExternal: true },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F5]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-[#E2DFD6]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand mark and Name */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 rounded-lg p-1"
          >
            {/* Sage circular brand dot */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#5B755D] group-hover:scale-110 transition-transform duration-300" />
            <span className="font-extrabold tracking-wider text-xs sm:text-sm text-[#141714] font-display uppercase">
              KOUSHIK REDDY
            </span>
          </Link>

          {/* Desktop Nav Items - with smooth sliding on click */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="text-xs font-medium text-[#4B534C] hover:text-[#141714] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#5B755D] hover:after:w-full after:transition-all tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Dedicated GitHub, LinkedIn, Mail icons + Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Dedicated GitHub Icon */}
            <a
              href="https://github.com/reddykoushik808-glitch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full border border-[#E2DFD6] hover:border-[#5B755D] bg-[#F4F2EB] hover:bg-white text-[#141714] hover:text-[#273829] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
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
              className="p-2 rounded-full border border-[#E2DFD6] hover:border-[#5B755D] bg-[#F4F2EB] hover:bg-white text-[#0A66C2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            {/* Dedicated Mail Icon */}
            <a
              href="mailto:reddykoushik808@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-full border border-[#E2DFD6] hover:border-[#5B755D] bg-[#F4F2EB] hover:bg-white text-[#364A38] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            {/* Let's Talk CTA */}
            <a
              href="mailto:reddykoushik808@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#273829] hover:bg-[#1A261B] text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ml-1"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex md:hidden items-center gap-1.5">
            <a
              href="https://github.com/reddykoushik808-glitch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-full border border-[#E2DFD6] bg-[#F4F2EB] text-[#141714]"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/koushik-reddy-3a9982328"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-full border border-[#E2DFD6] bg-[#F4F2EB] text-[#0A66C2]"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:reddykoushik808@gmail.com"
              aria-label="Email"
              className="p-1.5 rounded-full border border-[#E2DFD6] bg-[#F4F2EB] text-[#364A38]"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#141714] hover:bg-[#EFECE2] focus:outline-none focus:ring-2 focus:ring-sage-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#E2DFD6] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#2E332F] hover:text-[#141714] py-1.5 border-b border-[#EFECE2]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2.5 pt-3">
              <a
                href="https://github.com/reddykoushik808-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2DFD6] text-xs font-semibold bg-[#F4F2EB]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/koushik-reddy-3a9982328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2DFD6] text-xs font-semibold bg-[#F4F2EB] text-[#0A66C2]"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:reddykoushik808@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2DFD6] text-xs font-semibold bg-[#F4F2EB] text-[#364A38]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
            <a
              href="mailto:reddykoushik808@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#273829] text-white text-xs font-medium w-full"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
