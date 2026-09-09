import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Send, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  FileCheck, 
  TrendingUp, 
  ShieldAlert, 
  Award,
  ArrowRight,
  ExternalLink,
  Layers,
  Globe
} from 'lucide-react';
import { journalInfo } from '../data/data';

export default function Hero({ onOpenSubmit, onOpenArticle }) {
  const heroRef = useRef(null);
  const leftContentRef = useRef(null);
  const visualCardRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check prefers reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        delay: 0.1
      })
      .from('.hero-title-line', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
      }, '-=0.4')
      .from('.hero-desc', {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.4')
      .from('.hero-cta-btn', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
      }, '-=0.3')
      .from(visualCardRef.current, {
        scale: 0.92,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.4)'
      }, '-=0.6')
      .from('.hero-floating-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
      }, '-=0.4')
      .from('.hero-stat-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08
      }, '-=0.4');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden subtle-mesh-bg"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information Hierarchy */}
          <div ref={leftContentRef} className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Pill / ISSN Badge */}
            <div className="hero-badge flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>E-ISSN: {journalInfo.eIssn}</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Peer-Reviewed & Multidisciplinary</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="hero-title-line">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                  Official Research Publication
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f3b6c] tracking-tight leading-[1.18]">
                  International Journal of Scientific Progress in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f3b6c] via-blue-700 to-amber-600">
                    Applied Science & Technology
                  </span>
                </h1>
              </div>
            </div>

            {/* Description & University Affiliation from Wireframe */}
            <div className="hero-desc space-y-3 max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-800 border-l-3 border-amber-500 pl-3">
                Published by <span className="font-bold text-[#0f3b6c]">Shri Ramswaroop Memorial University</span>
              </p>
              <p>
                IJSPAST is a multidisciplinary journal with an aim to publish high-quality, original, and innovative research work in Applied Science and Technology. Delivering rapid global dissemination with strict double-blind peer review.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenSubmit}
                className="hero-cta-btn inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-400/90 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Your Paper</span>
              </button>
              
              <a
                href="#featured-articles"
                className="hero-cta-btn inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0f3b6c] bg-white hover:bg-slate-50 border border-slate-300/80 shadow-sm hover:shadow hover:border-blue-400 transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-blue-700" />
                <span>Browse Current Issue</span>
                <ArrowRight className="w-4 h-4 text-slate-400 ml-1" />
              </a>
            </div>

            {/* Trust Indexing Badges */}
            <div className="pt-3 border-t border-slate-200/80 w-full">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Indexing & Compliance Highlights
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {journalInfo.indexing.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1 text-[11px] font-medium text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Featured Visual Area matching Wireframe with Sophisticated Treatment */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Outer Decorative Background Glow & Framing */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/15 via-amber-400/20 to-blue-800/10 rounded-3xl filter blur-xl -z-10 transform rotate-1"></div>
            
            {/* Main Visual Display Card */}
            <div 
              ref={visualCardRef}
              className="relative w-full max-w-md bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 transition-all duration-500 hover:shadow-glass-hover group"
            >
              {/* Journal Cover Visual */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#0f3b6c] to-[#081627] text-white aspect-[4/4.8] flex flex-col justify-between p-6 shadow-inner border border-amber-400/20">
                
                {/* Visual Pattern overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                
                {/* Header of Journal Cover */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase font-semibold">
                      Volume 12 • Issue 4 • 2026
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-bold tracking-wider backdrop-blur-md border border-white/20">
                      OPEN ACCESS
                    </span>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="font-display font-black text-2xl tracking-wider text-white">
                      IJSPAST
                    </h3>
                    <p className="text-[11px] text-amber-200/90 leading-tight font-sans">
                      International Journal of Scientific Progress in Applied Science & Technology
                    </p>
                  </div>
                </div>

                {/* Central Featured Abstract Preview Artwork */}
                <div className="relative z-10 my-auto py-4">
                  <div className="relative rounded-lg overflow-hidden border border-white/15 group-hover:scale-[1.02] transition-transform duration-500 shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80" 
                      alt="Frontiers in Applied Science & Innovation" 
                      className="w-full h-36 object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <p className="text-xs font-semibold text-white line-clamp-2">
                        Special Section: Breakthroughs in Quantum Nanomaterials & AI-Driven Robotics
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer of Journal Cover */}
                <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-slate-300">
                  <div className="flex flex-col">
                    <span className="font-bold text-white">SRMU Publication Cell</span>
                    <span className="text-slate-400">Barabanki, Uttar Pradesh</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 font-bold flex items-center justify-center shadow-md">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill 1 (Top Right) */}
              <div className="hero-floating-card absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center space-x-2.5 animate-float">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">3.84 CiteScore</div>
                  <div className="text-[10px] text-slate-500 font-medium">Impact Trajectory</div>
                </div>
              </div>

              {/* Floating Stat Pill 2 (Bottom Left) */}
              <div className="hero-floating-card absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center space-x-2.5 animate-float [animation-delay:2s]">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0f3b6c] flex items-center justify-center font-bold">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">14 Days</div>
                  <div className="text-[10px] text-slate-500 font-medium">Fast Peer Review</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Academic Counters (Matching theme.png metrics banner) */}
        <div ref={statsRef} className="mt-16 pt-10 border-t border-slate-200/70">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journalInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="hero-stat-item bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-300/80 transition-all duration-200 text-center flex flex-col items-center group"
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-[#0f3b6c] group-hover:text-amber-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
