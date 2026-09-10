import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Target, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Building2,
  Award
} from 'lucide-react';
import { aboutPillars } from '../data/generalData';

gsap.registerPlugin(ScrollTrigger);

const getPillarIcon = (iconName) => {
  switch (iconName) {
    case 'Target':
      return <Target className="w-6 h-6 text-amber-500" />;
    case 'Globe':
      return <Globe className="w-6 h-6 text-blue-600" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-sky-600" />;
    default:
      return <Building2 className="w-6 h-6 text-slate-700" />;
  }
};

export default function About() {
  const sectionRef = useRef(null);
  const [selectedPillar, setSelectedPillar] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.about-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });

      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] via-slate-50 to-[#f1f5f9] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="about-header text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#0f4a85] text-xs font-bold border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Company Architecture & Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f4a85] tracking-tight">
            Engineering Rigor Meets Strategic Innovation
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            We bridge the gap between ambitious business vision and scalable technological execution. Our multidisciplinary engineers build enduring software infrastructure.
          </p>
        </div>

        {/* 3-Card Grid: [ Mission ] [ General Information ] [ Vision ] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {aboutPillars.map((item) => (
            <div
              key={item.id}
              className={`about-card relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group ${
                item.isPrimary
                  ? 'bg-white shadow-xl border-2 border-blue-600/30 hover:border-blue-600 md:-translate-y-2'
                  : 'bg-white/95 shadow-md border border-slate-200/90 hover:border-amber-400 hover:shadow-lg'
              }`}
            >
              {/* Top Accent Indicator */}
              <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${item.color}`} />

              <div className="space-y-5">
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 ${
                    item.isPrimary 
                      ? 'bg-blue-50 border-blue-200 text-blue-700' 
                      : 'bg-amber-50 border-amber-200 text-amber-700'
                  }`}>
                    {getPillarIcon(item.icon)}
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    item.isPrimary
                      ? 'bg-blue-100 text-blue-900 border-blue-300'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-[#0f4a85] group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 mt-0.5">
                    {item.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  {item.highlights.map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <div className="mt-0.5 min-w-4 text-emerald-600">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-xs text-slate-700 font-medium leading-normal">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Trigger */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => setSelectedPillar(item)}
                  className={`w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    item.isPrimary
                      ? 'bg-[#0f4a85] text-white hover:bg-blue-800 shadow-sm'
                      : 'bg-slate-100 text-[#0f4a85] hover:bg-amber-50 hover:text-amber-800 hover:border-amber-300 border border-slate-200'
                  }`}
                >
                  <span>Learn More About {item.title}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Security & Client Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-600 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0f4a85]">
                Zero-Compromise Security & Continuous Operational Resilience
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                All client architectures are built with enterprise zero-trust security, continuous vulnerability auditing, and automated disaster recovery.
              </p>
            </div>
          </div>
          <a
            href="#services"
            className="shrink-0 inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#0f4a85] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
          >
            <span>View Architecture Standards</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Pillar Detail Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-50 text-[#0f4a85]">
                  {getPillarIcon(selectedPillar.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f4a85]">{selectedPillar.title}</h3>
                  <p className="text-xs text-amber-600">{selectedPillar.tagline}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedPillar(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedPillar.desc}
            </p>

            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">Strategic Execution Framework:</h5>
              {selectedPillar.highlights.map((pt, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-3">
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0f4a85] text-white hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
