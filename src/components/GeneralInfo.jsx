import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  Layers,
  Compass,
  CheckCircle2,
  ArrowRight,
  Info,
  BookOpen,
  Globe,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { generalInfoCards, journalScopeTopics } from '../data/journalDocData';

gsap.registerPlugin(ScrollTrigger);

const getCardIcon = (id) => {
  switch (id) {
    case 'mission':
      return <Target className="w-5 h-5 text-amber-500" />;
    case 'general-info':
      return <Layers className="w-5 h-5 text-blue-600" />;
    case 'vision':
      return <Compass className="w-5 h-5 text-sky-600" />;
    default:
      return <Info className="w-5 h-5 text-slate-700" />;
  }
};

export default function GeneralInfo() {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Computing & AI', 'Electronics & Comm', 'Core Engineering', 'Energy & Materials', 'Applied Sciences', 'Automation & Robotics'];

  const filteredScope = selectedCategory === 'All'
    ? journalScopeTopics
    : journalScopeTopics.filter(t => t.category === selectedCategory);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.geninfo-header',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      gsap.fromTo('.geninfo-card',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 md:py-18 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 1. General Information Header & 3-Pillar Cards */}
        <div>
          <div className="geninfo-header text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0f4a85] text-xs font-bold border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Foundational Journal Mandate</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f4a85] tracking-tight">
              General Information, Mission & Vision
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Official institutional framework and scholarly publishing mission of the International Journal of Multidisciplinary Advanced Research (IJMAR).
            </p>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {generalInfoCards.map((item) => (
              <div
                key={item.id}
                className={`geninfo-card academic-card relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between group ${item.isPrimary ? 'border-blue-500/50 md:-translate-y-1.5' : ''
                  }`}
              >
                {/* Accent Top Bar */}
                <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${item.isPrimary ? 'bg-gradient-to-r from-blue-600 to-[#0f4a85]' : 'bg-gradient-to-r from-amber-400 to-amber-600'
                  }`} />

                <div className="space-y-4">
                  {/* Header with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${item.isPrimary
                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                        : 'bg-amber-50 border-amber-200 text-amber-700'
                      }`}>
                      {getCardIcon(item.id)}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${item.isPrimary
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Section ID */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 block mb-0.5">
                      SECTION {item.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85] group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-2.5 border-t border-slate-100">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="mt-0.5 min-w-3.5 text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-xs text-slate-700 font-medium leading-normal">
                          {pt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger -> Routes to full page */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    to={item.id === 'general-info' ? '/publication-details' : '/vision-scope'}
                    className={`w-full flex items-center justify-center space-x-1.5 py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all duration-200 ${item.isPrimary
                        ? 'bg-[#0f4a85] text-white hover:bg-blue-800 shadow-xs'
                        : 'bg-slate-50 text-[#0f4a85] hover:bg-amber-50 hover:text-amber-800 hover:border-amber-300 border border-slate-200'
                      }`}
                  >
                    <span>Read Full {item.title} Page</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. Scope of the Journal Section */}
        <div id="scope" className="pt-4">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Scope of the Journal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f4a85] tracking-tight">
              23+ Interdisciplinary Submission Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              IJMAR welcomes submissions in, but not limited to, the following core and emerging engineering & applied science areas:
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedCategory === cat
                      ? 'bg-[#0f4a85] text-white shadow-2xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Scope Grid: 23 Domain Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {filteredScope.map((topic) => (
              <div
                key={topic.id}
                className="scope-badge-card bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-amber-400/80 transition-all flex items-start space-x-2.5 group"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 group-hover:bg-amber-100 text-[#0f4a85] group-hover:text-amber-800 flex items-center justify-center shrink-0 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#0f4a85] transition-colors leading-snug">
                    {topic.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                    {topic.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Bar */}
          <div className="mt-10 bg-gradient-to-r from-[#0f4a85] to-[#0f4a85] text-white rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg border border-amber-400/30">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center justify-center md:justify-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Double-Blind Peer Review & High Scientific Rigor</span>
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl">
                Every manuscript is screened for originality (&lt;10% similarity benchmark) and independently evaluated by at least two domain specialists.
              </p>
            </div>
            <Link
              to="/guidelines"
              className="px-4.5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-sm shrink-0 transition-all"
            >
              Read Author Guidelines
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
