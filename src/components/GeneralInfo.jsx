import React, { useEffect, useRef, useState } from 'react';
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
  Sparkles,
  Cpu,
  Radio,
  Atom,
  Flame,
  Bot
} from 'lucide-react';
import { generalInfoCards, journalScopeTopics } from '../data/journalDocData';

gsap.registerPlugin(ScrollTrigger);

const getCardIcon = (id) => {
  switch (id) {
    case 'mission':
      return <Target className="w-6 h-6 text-amber-500" />;
    case 'general-info':
      return <Layers className="w-6 h-6 text-blue-600" />;
    case 'vision':
      return <Compass className="w-6 h-6 text-sky-600" />;
    default:
      return <Info className="w-6 h-6 text-slate-700" />;
  }
};

export default function GeneralInfo({ onOpenGuidelines }) {
  const sectionRef = useRef(null);
  const [activeModalItem, setActiveModalItem] = useState(null);
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
        { y: 25, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      gsap.fromTo('.geninfo-card', 
        { y: 30, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
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
      className="py-16 md:py-24 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. General Information Header & 3-Pillar Cards (Matching Wireframe: [ Mission ] [ General Information ] [ Vision ]) */}
        <div>
          <div className="geninfo-header text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50/90 text-[#0f3b6c] text-xs font-bold border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Foundational Journal Mandate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3b6c] tracking-tight font-serif-title">
              General Information, Mission & Vision
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              International Journal of Scientific Progress in Applied Science and Technology (IJSPAST) is dedicated to disseminating original research and innovative review papers worldwide.
            </p>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {generalInfoCards.map((item) => (
              <div
                key={item.id}
                className={`geninfo-card relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs ${
                  item.isPrimary
                    ? 'bg-white/95 shadow-xl border-2 border-blue-600/30 hover:border-blue-600 md:-translate-y-2'
                    : 'bg-white/90 shadow-md border border-slate-200/90 hover:border-amber-400 hover:shadow-lg'
                }`}
              >
                {/* Accent Top Border */}
                <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${
                  item.isPrimary ? 'bg-gradient-to-r from-blue-600 to-[#0f3b6c]' : 'bg-gradient-to-r from-amber-400 to-amber-600'
                }`} />

                <div className="space-y-5">
                  {/* Header with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 ${
                      item.isPrimary 
                        ? 'bg-blue-50 border-blue-200 text-blue-700' 
                        : 'bg-amber-50 border-amber-200 text-amber-700'
                    }`}>
                      {getCardIcon(item.id)}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      item.isPrimary
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Number */}
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                      SECTION {item.num}
                    </span>
                    <h3 className="text-2xl font-bold text-[#0f3b6c] group-hover:text-blue-700 transition-colors font-serif-title">
                      {item.title}
                    </h3>
                  </div>

                  {/* Summary Paragraph */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Key Bullet Points */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {item.points.map((pt, idx) => (
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

                {/* Bottom Details Trigger */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className={`w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      item.isPrimary
                        ? 'bg-[#0f3b6c] text-white hover:bg-blue-800 shadow-sm'
                        : 'bg-slate-100 text-[#0f3b6c] hover:bg-amber-50 hover:text-amber-800 hover:border-amber-300 border border-slate-200'
                    }`}
                  >
                    <span>Read Full {item.title} Overview</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. Scope of the Journal Section - Faithful representation of "Scope of the Journal.docx" */}
        <div id="scope" className="pt-6">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50/90 text-amber-900 text-xs font-bold border border-amber-200">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Scope of the Journal</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3b6c] tracking-tight font-serif-title">
              23+ Interdisciplinary Submission Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              IJSPAST welcomes submissions in, but not limited to, the following core and emerging engineering & applied science areas:
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0f3b6c] text-white shadow-xs'
                      : 'bg-white/90 text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Scope Grid: 23 Domain Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredScope.map((topic) => (
              <div
                key={topic.id}
                className="scope-badge-card bg-white/90 backdrop-blur-xs p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-400/80 transition-all flex items-start space-x-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-amber-100 text-[#0f3b6c] group-hover:text-amber-800 flex items-center justify-center shrink-0 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#0f3b6c] transition-colors leading-snug">
                    {topic.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                    {topic.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Callout bar directly from Doc */}
          <div className="mt-10 bg-gradient-to-r from-[#0f3b6c] to-[#081627] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-amber-400/30">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start space-x-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Double-Blind Peer Review & High Scientific Rigor</span>
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl">
                Every manuscript is screened for originality (&lt;10% similarity benchmark) and independently evaluated by at least two domain specialists.
              </p>
            </div>
            <button
              onClick={() => onOpenGuidelines?.('guidelines')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-sm shrink-0 transition-all cursor-pointer"
            >
              Read Author Guidelines
            </button>
          </div>
        </div>

      </div>

      {/* Deep-Dive Modal for General Information Item */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-50 text-[#0f3b6c]">
                  {getCardIcon(activeModalItem.id)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f3b6c] font-serif-title">{activeModalItem.title}</h3>
                  <p className="text-xs text-amber-600">{activeModalItem.badge}</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveModalItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {activeModalItem.summary}
            </p>

            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">Detailed Action Framework:</h5>
              {activeModalItem.points.map((pt, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 italic">
              {activeModalItem.details}
            </p>

            <div className="flex justify-end pt-3">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0f3b6c] text-white hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
