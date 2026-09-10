import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  ArrowUpRight, 
  TrendingUp, 
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/generalData';

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ onSelectProject }) {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'FinTech', 'HealthTech', 'IoT & Supply', 'Cloud & DevTools'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 4)));

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.projects-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 45,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-[#f8fafc] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="projects-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#0f4a85] text-xs font-bold border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Proven Business Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f4a85] tracking-tight">
              Featured Client Case Studies
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Explore how our engineering teams have helped global industry leaders scale infrastructure, unlock AI capabilities, and achieve record revenues.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/90 rounded-xl border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0f4a85] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Projects Grid matching 4-box wireframe layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="project-card group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border backdrop-blur-md ${proj.tagColor}`}>
                      {proj.category}
                    </span>
                  </div>

                  {/* Impact Tag on Image */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                    <span className="flex items-center space-x-1 font-bold text-amber-300">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{proj.impact}</span>
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-3">
                  <div className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                    {proj.client}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0f4a85] transition-colors line-clamp-2 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 font-mono">
                  {proj.stats.metric1}
                </span>
                <button 
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0f4a85] group-hover:text-amber-600 transition-colors cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Impact Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Want to explore custom technical architectures for your business?</p>
                <p className="text-[11px] text-slate-500">Our senior architects provide free 30-minute system audits and modernization roadmaps.</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0f4a85] hover:bg-blue-800 shadow-sm transition-colors shrink-0"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
