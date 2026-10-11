"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Github, ExternalLink, X, Code2 } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

// Dedicated CSS UI Preview for NUTANA
function NutanaPreview() {
  return (
    <div className="w-full h-full bg-[#181D19] p-3 text-white flex flex-col justify-between font-mono text-[9px] select-none">
      <div className="flex items-center justify-between border-b border-[#2B352C] pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#5B755D] animate-pulse" />
          <span className="font-bold tracking-wider text-[11px] text-[#E3E9E3]">NUTANA</span>
        </div>
        <span className="text-[#8FA890] text-[8px] bg-[#232E24] px-1.5 py-0.5 rounded">FEFO ACTIVE</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 my-2">
        <div className="bg-[#212822] p-1.5 rounded border border-[#2F3C31]">
          <div className="text-[8px] text-[#8FA890]">Near-Expiry</div>
          <div className="text-xs font-bold text-[#E5E1D3]">14 SKUs</div>
        </div>
        <div className="bg-[#212822] p-1.5 rounded border border-[#2F3C31]">
          <div className="text-[8px] text-[#8FA890]">Cross-Shop</div>
          <div className="text-xs font-bold text-[#A8BFA9]">98% Synced</div>
        </div>
        <div className="bg-[#212822] p-1.5 rounded border border-[#2F3C31]">
          <div className="text-[8px] text-[#8FA890]">AI Saved</div>
          <div className="text-xs font-bold text-[#5B755D]">₹4,280</div>
        </div>
      </div>
      <div className="bg-[#212822] p-1.5 rounded border border-[#2F3C31] flex items-end gap-1 h-11 pt-2">
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
      <div className="flex items-center justify-between border-b border-[#E2DFD6] pb-1.5">
        <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#273829]">
          <span className="w-2 h-2 rounded-full bg-[#364A38]" />
          PlanMyHome
        </div>
        <span className="text-[8px] font-mono text-[#5B755D] bg-[#EFECE2] px-1.5 py-0.5 rounded">Setback: 3.5m</span>
      </div>
      {/* 2D Architectural Layout Mock */}
      <div className="grid grid-cols-3 gap-1 p-1.5 bg-[#F4F2EB] rounded border border-dashed border-[#C8C5B9] h-18 my-1">
        <div className="col-span-2 bg-[#EFECE2] border border-[#C8C5B9] rounded p-1 flex items-center justify-center font-mono text-[8px] text-[#565C54]">
          LIVING ROOM (18' x 14')
        </div>
        <div className="bg-[#E5E1D3] border border-[#C8C5B9] rounded p-1 flex items-center justify-center font-mono text-[8px] text-[#565C54]">
          KITCHEN
        </div>
        <div className="bg-[#E5E1D3] border border-[#C8C5B9] rounded p-1 flex items-center justify-center font-mono text-[8px] text-[#565C54]">
          BEDROOM 1
        </div>
        <div className="col-span-2 bg-[#EFECE2] border border-[#C8C5B9] rounded p-1 flex items-center justify-center font-mono text-[8px] text-[#565C54]">
          BALCONY
        </div>
      </div>
      <div className="flex justify-between items-center text-[8px] text-[#6C756E] font-mono">
        <span>Plot: 30x40 East</span>
        <span className="text-[#364A38] font-bold">Solver: Aligned</span>
      </div>
    </div>
  );
}

// Dedicated CSS UI Preview for Customer Churn
function ChurnPreview() {
  return (
    <div className="w-full h-full bg-[#15191C] p-3 text-white flex flex-col justify-between font-mono text-[9px] select-none">
      <div className="flex items-center justify-between border-b border-[#2C343B] pb-1.5">
        <span className="font-bold text-[11px] text-[#E3E9E3]">boAt Churn Profiler</span>
        <span className="text-[#E76F51] text-[8px] bg-[#3B2220] px-1.5 py-0.5 rounded">Risk: 23.4%</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 my-1">
        <div className="bg-[#1D2328] p-1 rounded border border-[#2D373F]">
          <div className="text-[8px] text-[#8C9BA5]">Top Predictor</div>
          <div className="text-[10px] font-bold text-[#E5E1D3]">Discount Sensitivity</div>
        </div>
        <div className="bg-[#1D2328] p-1 rounded border border-[#2D373F]">
          <div className="text-[8px] text-[#8C9BA5]">Retention Lift</div>
          <div className="text-[10px] font-bold text-[#2A9D8F]">+18.2% Active</div>
        </div>
      </div>
      <div className="bg-[#1D2328] p-1.5 rounded border border-[#2D373F] flex items-center justify-around h-12">
        <div className="w-8 h-8 rounded-full border-2 border-[#2A9D8F] border-t-[#E76F51] flex items-center justify-center text-[7px] font-bold">
          76.6%
        </div>
        <div className="text-[8px] text-[#8C9BA5] space-y-0.5">
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
      <div className="flex items-center justify-between border-b border-[#E1E8EE] pb-1.5">
        <div className="flex items-center gap-1 font-bold text-[11px] text-[#204E78]">
          <span className="w-2 h-2 rounded-full bg-[#2E6B9E]" />
          Forecast IQ
        </div>
        <span className="text-[8px] font-mono text-[#2E6B9E] bg-[#E8F1F8] px-1.5 py-0.5 rounded">Engine Ready</span>
      </div>
      <div className="my-1 bg-white p-1.5 rounded border border-[#D5E1EC]">
        <div className="flex justify-between text-[8px] text-[#5C728A] mb-1 font-mono">
          <span>90-Day Trajectory</span>
          <span className="text-[#20755D] font-bold">94.8%</span>
        </div>
        <div className="h-9 flex items-end gap-1 pt-1">
          <div className="w-1/8 bg-[#D2E3F3] h-[35%] rounded-t" />
          <div className="w-1/8 bg-[#ADCDE9] h-[55%] rounded-t" />
          <div className="w-1/8 bg-[#86B4DF] h-[50%] rounded-t" />
          <div className="w-1/8 bg-[#5A9AD5] h-[70%] rounded-t" />
          <div className="w-1/8 bg-[#3781CA] h-[85%] rounded-t" />
          <div className="w-1/8 bg-[#2069B5] h-[92%] rounded-t" />
          <div className="w-1/8 bg-[#185392] h-[100%] rounded-t" />
        </div>
      </div>
      <div className="text-[8px] text-[#5C728A] font-mono truncate">
        AI: Steady upward momentum in Q4.
      </div>
    </div>
  );
}

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

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
            <p className="text-xs text-[#565C54] max-w-xl">
              A selection of my recent work, showcasing full-stack development, data analytics, and AI applications.
            </p>
          </div>

          <a
            href="https://github.com/reddykoushik808-glitch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#273829] hover:text-[#5B755D] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid - Clicking pops up project enlarged modal with Show Source Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => {
            const hasError = imageErrors[project.id];

            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="bg-[#F4F2EB] rounded-2xl border border-[#E2DFD6] overflow-hidden flex flex-col justify-between hover:border-[#5B755D] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                {/* Visual Area */}
                <div className="h-44 sm:h-48 w-full bg-[#E5E1D3] relative overflow-hidden border-b border-[#E2DFD6]">
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

                  {hasError && renderFallback(project.placeholderType)}

                  {/* Subtle click indicator tag on hover */}
                  <div className="absolute inset-0 bg-[#1E2B20]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5]/90 text-[11px] font-semibold text-[#141714] shadow-sm transform scale-95 group-hover:scale-100 transition-transform">
                      Click to Expand
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Category */}
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-display font-bold text-sm sm:text-base text-[#141714] tracking-tight group-hover:text-[#273829] transition-colors">
                        {project.title}
                      </h3>
                      {project.githubUrl && (
                        <div className="text-[#6C756E] group-hover:text-[#141714] transition-colors p-1">
                          <Github className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#565C54] leading-relaxed mb-4 min-h-[3.75rem]">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#E2DFD6] text-[10px] font-medium text-[#4B534C]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Details / Action Footer */}
                    <div className="pt-3 border-t border-[#E5E1D3]/80 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#273829] group-hover:text-[#5B755D] transition-colors">
                        <span>Expand Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>

                      {project.githubUrl ? (
                        <span className="text-[10px] font-mono text-[#5B755D] font-medium bg-[#EFECE2] px-2 py-0.5 rounded">
                          Source Ready
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-[#6C756E] italic">
                          Local Repo
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

      {/* Enlarged Project Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-[#FAF9F5] w-full max-w-2xl rounded-3xl border border-[#C8C5B9] shadow-2xl overflow-hidden flex flex-col transform scale-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2DFD6] bg-[#F4F2EB]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5B755D] font-bold">
                  {activeModalProject.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#141714]">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="p-2 rounded-full hover:bg-[#EFECE2] text-[#4B534C] hover:text-[#141714] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Enlarged Preview */}
            <div className="h-64 sm:h-72 w-full bg-[#E5E1D3] relative overflow-hidden border-b border-[#E2DFD6]">
              {!imageErrors[activeModalProject.id] ? (
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  sizes="650px"
                  className="object-cover object-top"
                  onError={() => handleImageError(activeModalProject.id)}
                />
              ) : null}

              {imageErrors[activeModalProject.id] && renderFallback(activeModalProject.placeholderType)}
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6C756E] mb-2 font-mono">
                  Project Overview
                </h4>
                <p className="text-sm text-[#2E332F] leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6C756E] mb-2.5 font-mono">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#EFECE2] border border-[#C8C5B9] text-xs font-medium text-[#273829]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer with "Show Source Code" button */}
              <div className="pt-4 border-t border-[#E2DFD6] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#6C756E]">
                  Status: <strong className="text-[#141714]">Completed Engineering Project</strong>
                </span>

                <div className="flex items-center gap-3">
                  {activeModalProject.githubUrl ? (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#273829] hover:bg-[#1A261B] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>Show Source Code</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFECE2] border border-[#C8C5B9] text-[#6C756E] text-xs font-medium">
                      <span>Local Project (Private Codebase)</span>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2.5 rounded-full border border-[#C8C5B9] hover:bg-[#EFECE2] text-xs font-medium text-[#4B534C] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
