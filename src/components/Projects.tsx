"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, LayoutGrid, Database, LineChart, Cpu } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

// Dedicated CSS UI Preview for NUTANA
function NutanaPreview() {
  return (
    <div className="w-full h-full bg-[#181D19] p-3 text-white flex flex-col justify-between font-mono text-[10px] select-none">
      <div className="flex items-center justify-between border-b border-[#2B352C] pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#5B755D]" />
          <span className="font-bold tracking-wider text-xs text-[#E3E9E3]">NUTANA</span>
        </div>
        <span className="text-[#8FA890] text-[9px] bg-[#232E24] px-2 py-0.5 rounded">FEFO ENGINE ACTIVE</span>
      </div>
      <div className="grid grid-cols-3 gap-2 my-2">
        <div className="bg-[#212822] p-2 rounded border border-[#2F3C31]">
          <div className="text-[9px] text-[#8FA890]">Near-Expiry</div>
          <div className="text-sm font-bold text-[#E5E1D3]">14 SKUs</div>
        </div>
        <div className="bg-[#212822] p-2 rounded border border-[#2F3C31]">
          <div className="text-[9px] text-[#8FA890]">Cross-Shop</div>
          <div className="text-sm font-bold text-[#A8BFA9]">98% Synced</div>
        </div>
        <div className="bg-[#212822] p-2 rounded border border-[#2F3C31]">
          <div className="text-[9px] text-[#8FA890]">AI Waste Saved</div>
          <div className="text-sm font-bold text-[#5B755D]">₹4,280</div>
        </div>
      </div>
      <div className="bg-[#212822] p-2 rounded border border-[#2F3C31] flex items-end gap-1.5 h-12 pt-3">
        <div className="w-1/6 bg-[#5B755D] rounded-t h-[40%]" />
        <div className="w-1/6 bg-[#5B755D] rounded-t h-[65%]" />
        <div className="w-1/6 bg-[#5B755D] rounded-t h-[50%]" />
        <div className="w-1/6 bg-[#8FA890] rounded-t h-[80%]" />
        <div className="w-1/6 bg-[#8FA890] rounded-t h-[95%]" />
        <div className="w-1/6 bg-[#C2D1C1] rounded-t h-[70%]" />
      </div>
    </div>
  );
}

// Dedicated CSS UI Preview for PlanMyHome
function PlanMyHomePreview() {
  return (
    <div className="w-full h-full bg-[#FAF9F5] p-3 text-[#141714] flex flex-col justify-between select-none border border-[#E2DFD6]">
      <div className="flex items-center justify-between border-b border-[#E2DFD6] pb-2">
        <div className="flex items-center gap-1.5 font-bold text-xs text-[#273829]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#364A38]" />
          PlanMyHome
        </div>
        <span className="text-[9px] font-mono text-[#5B755D] bg-[#EFECE2] px-1.5 py-0.5 rounded">Setback: 3.5m</span>
      </div>
      {/* 2D Architectural Layout Mock */}
      <div className="grid grid-cols-3 gap-1.5 p-2 bg-[#F4F2EB] rounded border border-dashed border-[#C8C5B9] h-20 my-1">
        <div className="col-span-2 bg-[#EFECE2] border border-[#C8C5B9] rounded p-1 flex items-center justify-center font-mono text-[9px] text-[#565C54]">
          LIVING ROOM (18' x 14')
        </div>
        <div className="bg-[#E5E1D3] border border-[#C8C5B9] rounded p-1 flex items-center justify-center font-mono text-[9px] text-[#565C54]">
          KITCHEN
        </div>
        <div className="bg-[#E5E1D3] border border-[#C8C5B9] rounded p-1 flex items-center justify-center font-mono text-[9px] text-[#565C54]">
          BEDROOM 1
        </div>
        <div className="col-span-2 bg-[#EFECE2] border border-[#C8C5B9] rounded p-1 flex items-center justify-center font-mono text-[9px] text-[#565C54]">
          BALCONY &amp; ENTRYWAY
        </div>
      </div>
      <div className="flex justify-between items-center text-[9px] text-[#6C756E] font-mono">
        <span>Plot: 30x40 East Facing</span>
        <span className="text-[#364A38] font-bold">Rule Solver: Aligned</span>
      </div>
    </div>
  );
}

// Dedicated CSS UI Preview for Customer Churn
function ChurnPreview() {
  return (
    <div className="w-full h-full bg-[#15191C] p-3 text-white flex flex-col justify-between font-mono text-[10px] select-none">
      <div className="flex items-center justify-between border-b border-[#2C343B] pb-2">
        <span className="font-bold text-xs text-[#E3E9E3]">boAt Churn Profiler</span>
        <span className="text-[#E76F51] text-[9px] bg-[#3B2220] px-2 py-0.5 rounded">High Risk: 23.4%</span>
      </div>
      <div className="grid grid-cols-2 gap-2 my-1">
        <div className="bg-[#1D2328] p-1.5 rounded border border-[#2D373F]">
          <div className="text-[9px] text-[#8C9BA5]">Top Predictor</div>
          <div className="text-xs font-bold text-[#E5E1D3]">Discount Sensitivity</div>
        </div>
        <div className="bg-[#1D2328] p-1.5 rounded border border-[#2D373F]">
          <div className="text-[9px] text-[#8C9BA5]">Retention Lift</div>
          <div className="text-xs font-bold text-[#2A9D8F]">+18.2% Active</div>
        </div>
      </div>
      <div className="bg-[#1D2328] p-2 rounded border border-[#2D373F] flex items-center justify-around h-14">
        {/* Donut chart simulation */}
        <div className="w-10 h-10 rounded-full border-4 border-[#2A9D8F] border-t-[#E76F51] flex items-center justify-center text-[8px] font-bold">
          76.6%
        </div>
        <div className="text-[9px] text-[#8C9BA5] space-y-0.5">
          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" /> Retained</div>
          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#E76F51]" /> At-Risk</div>
        </div>
      </div>
    </div>
  );
}

// Dedicated CSS UI Preview for Forecast IQ
function ForecastPreview() {
  return (
    <div className="w-full h-full bg-[#F5F8FA] p-3 text-[#1F2D3D] flex flex-col justify-between font-sans select-none border border-[#DEE5EC]">
      <div className="flex items-center justify-between border-b border-[#E1E8EE] pb-2">
        <div className="flex items-center gap-1.5 font-bold text-xs text-[#204E78]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2E6B9E]" />
          Forecast IQ
        </div>
        <span className="text-[9px] font-mono text-[#2E6B9E] bg-[#E8F1F8] px-2 py-0.5 rounded">CSV Engine: Ready</span>
      </div>
      <div className="my-1 bg-white p-2 rounded border border-[#D5E1EC] shadow-xs">
        <div className="flex justify-between text-[9px] text-[#5C728A] mb-1 font-mono">
          <span>Sales Trajectory (Next 90 Days)</span>
          <span className="text-[#20755D] font-bold">Confidence: 94.8%</span>
        </div>
        <div className="h-10 flex items-end gap-1 pt-2">
          <div className="w-1/8 bg-[#D2E3F3] h-[35%] rounded-t" />
          <div className="w-1/8 bg-[#ADCDE9] h-[55%] rounded-t" />
          <div className="w-1/8 bg-[#86B4DF] h-[50%] rounded-t" />
          <div className="w-1/8 bg-[#5A9AD5] h-[70%] rounded-t" />
          <div className="w-1/8 bg-[#3781CA] h-[85%] rounded-t" />
          <div className="w-1/8 bg-[#2069B5] h-[92%] rounded-t" />
          <div className="w-1/8 bg-[#185392] h-[100%] rounded-t" />
        </div>
      </div>
      <div className="text-[9px] text-[#5C728A] font-mono truncate">
        AI Explanation: Steady upward momentum driven by Q4 peak cycles.
      </div>
    </div>
  );
}

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const renderFallback = (type: Project["placeholderType"]) => {
    switch (type) {
      case "nutana":
        return <NutanaPreview />;
      case "planmyhome":
        return <PlanMyHomePreview />;
      case "churn":
        return <ChurnPreview />;
      case "forecast":
        return <ForecastPreview />;
      default:
        return <NutanaPreview />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-[#E2DFD6]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#6C756E] tracking-wider">
                02.
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#273829] font-bold">
                FEATURED PROJECTS
              </span>
              <div className="h-[1px] w-12 bg-[#C8C5B9]" />
            </div>
            <p className="text-xs sm:text-sm text-[#565C54] max-w-xl">
              A selection of my recent work, showcasing full-stack development, data analytics, and AI applications.
            </p>
          </div>

          <a
            href="https://github.com/reddykoushik808-glitch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#273829] hover:text-[#5B755D] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid - 1 Col on mobile, 2 Col on tablet, 4 Col on large desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => {
            const hasError = imageErrors[project.id];

            return (
              <div
                key={project.id}
                className="bg-[#F4F2EB] rounded-2xl border border-[#E2DFD6] overflow-hidden flex flex-col justify-between hover:border-[#A3B7A3] hover:shadow-md transition-all group duration-300"
              >
                {/* Visual Area */}
                <div className="h-44 sm:h-48 w-full bg-[#E5E1D3] relative overflow-hidden border-b border-[#E2DFD6]">
                  {/* If image is available and not errored */}
                  {!hasError ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : null}

                  {/* Fallback CSS Preview Mockup */}
                  {hasError && renderFallback(project.placeholderType)}
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Category */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#141714] tracking-tight">
                        {project.title}
                      </h3>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="text-[#6C756E] hover:text-[#141714] transition-colors p-1"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs text-[#565C54] leading-relaxed mb-4 min-h-[4rem]">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded bg-[#FAF9F5] border border-[#E2DFD6] text-[11px] font-medium text-[#4B534C]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="pt-3 border-t border-[#E5E1D3]/80">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#273829] group-hover:text-[#5B755D] transition-colors"
                        >
                          <span>View Project</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6C756E] italic">
                          <span>Local Project</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5B755D]" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
