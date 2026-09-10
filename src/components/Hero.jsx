import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Send, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  BookOpen,
  Award,
  Download,
  Layers
} from 'lucide-react';
import { journalInfo } from '../data/journalDocData';

export default function Hero({ onOpenContact, onOpenGuidelines }) {
  const heroRef = useRef(null);
  const visualCardRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-badge', { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
        .fromTo('.hero-headline', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-desc', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-cta-btn', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 }, '-=0.2')
        .fromTo(visualCardRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.2)' }, '-=0.4')
        .fromTo('.hero-floating-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .fromTo('.hero-stat-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06 }, '-=0.2');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden subtle-mesh-bg"
    >
      {/* Ambient soft background glows without heavy overflow blur */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-blue-300/15 rounded-full blur-2xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-amber-300/20 rounded-full blur-2xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Content from Wireframe & Documents */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge */}
            <div className="hero-badge flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Peer-Reviewed Open Access</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{journalInfo.eIssn}</span>
              </div>
            </div>

            {/* Main Journal Headline */}
            <div className="hero-headline space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                Official University Research Publication
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f3b6c] tracking-tight leading-[1.15] font-serif-title">
                International Journal of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f3b6c] via-blue-700 to-amber-600">
                  Scientific Progress
                </span>{' '}
                in Applied Science & Technology
              </h1>
            </div>

            {/* Description directly from DOCX */}
            <div className="hero-desc space-y-3 max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-800 border-l-4 border-amber-500 pl-3.5">
                {journalInfo.shortDesc}
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                {journalInfo.calloutDesc} IJSPAST provides immediate open access to published articles to promote the global dissemination of scientific knowledge under rigorous Double-Blind Peer Review standards.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="hero-cta-btn inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-400/90 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Your Manuscript</span>
              </button>
              
              <button
                onClick={() => onOpenGuidelines?.('template')}
                className="hero-cta-btn inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0f3b6c] bg-white hover:bg-slate-50 border border-slate-300/80 shadow-sm hover:shadow hover:border-blue-400 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>Download .DOC Template</span>
              </button>
            </div>

            {/* Trust Badges matching Doc Policies */}
            <div className="pt-4 border-t border-slate-200/80 w-full">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Editorial Rigor & Publication Benchmarks
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Double-Blind Peer Review",
                  "Plagiarism Screening (<10%)",
                  "IEEE Referencing Standard",
                  "COPE Ethical Compliance",
                  "Immediate Open Access"
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1 text-[11px] font-medium text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Image Hover Showcase matching Wireframe */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Soft backdrop glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/10 via-amber-400/15 to-blue-800/10 rounded-3xl filter blur-lg -z-10"></div>
            
            {/* Showcase Visual Card */}
            <div 
              ref={visualCardRef}
              className="relative w-full max-w-md bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200/90 transition-all duration-500 hover:shadow-2xl group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#0f3b6c] to-[#081627] text-white aspect-[4/4.8] flex flex-col justify-between p-6 shadow-inner border border-amber-400/20">
                
                {/* Visual grid backdrop */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                
                {/* Header */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase font-semibold">
                      OFFICIAL JOURNAL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-bold tracking-wider backdrop-blur-md border border-white/20">
                      VOLUME 01 · 2026
                    </span>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="font-serif font-black text-2xl tracking-wider text-white">
                      IJSPAST
                    </h3>
                    <p className="text-[11px] text-amber-200/90 leading-tight">
                      Applied Science, Engineering & Emerging Technologies
                    </p>
                  </div>
                </div>

                {/* Central Visual with interactive hover */}
                <div className="relative z-10 my-auto py-2">
                  <div className="relative rounded-lg overflow-hidden border border-white/20 group-hover:scale-[1.02] transition-transform duration-500 shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                      alt="Metamaterial Absorber & 5G Wireless Research" 
                      className="w-full h-36 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-3">
                      <div className="flex items-center space-x-2 text-white">
                        <BookOpen className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-semibold">
                          Metamaterial Absorbers & 5G Innovations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-slate-300">
                  <div className="flex flex-col">
                    <span className="font-bold text-white">Publisher</span>
                    <span className="text-slate-400">Shri Ramswaroop Memorial University</span>
                  </div>
                  <button 
                    onClick={() => onOpenGuidelines?.('guidelines')}
                    className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    Guidelines
                  </button>
                </div>
              </div>

              {/* Floating Badge 1 (Top Right) */}
              <div className="hero-floating-card absolute -top-4 -right-4 sm:-right-6 bg-white rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center space-x-2.5 animate-float">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">23+ Domains</div>
                  <div className="text-[10px] text-slate-500 font-medium">Interdisciplinary Scope</div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Left) */}
              <div className="hero-floating-card absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center space-x-2.5 animate-float [animation-delay:2s]">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0f3b6c] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Double-Blind</div>
                  <div className="text-[10px] text-slate-500 font-medium">Peer Review Rigor</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Metrics Row from Docs */}
        <div className="mt-16 pt-10 border-t border-slate-200/70">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journalInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="hero-stat-card bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-300/80 transition-all duration-200 text-center flex flex-col items-center group"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-[#0f3b6c] group-hover:text-amber-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] font-bold text-emerald-600 mt-0.5">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
