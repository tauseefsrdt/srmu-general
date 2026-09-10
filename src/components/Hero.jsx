import React, { useEffect, useRef, useState } from 'react';
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
  Layers,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Pause,
  Play
} from 'lucide-react';
import { journalInfo } from '../data/journalDocData';

const sliderSlides = [
  {
    id: 1,
    category: "RESEARCH HIGHLIGHT",
    title: "International Journal of Microwave & Optical Technology",
    subtitle: "A Publication of the International Academy of Microwave and Optical Technology",
    tagline: "Metamaterial Absorber & 5G Resonator Innovations",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    badge: "Special Track · 2026",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    stats: "28 Citations · IEEE Referencing"
  },
  {
    id: 2,
    category: "APPLIED AI & ROBOTICS",
    title: "Deep Neural Optimization for Real-Time Edge Processing",
    subtitle: "High-Throughput Machine Learning Frameworks for Autonomous Systems",
    tagline: "Ultra-low latency inference on embedded silicon",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    badge: "AI & Data Science",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    stats: "34 Citations · Open Access"
  },
  {
    id: 3,
    category: "ENERGY & MATERIALS",
    title: "Ultra-Broadband Solar Energy Harvesting & Nanophotonics",
    subtitle: "High-Efficiency Photovoltaic Monolayers & Thin-Film Absorbers",
    tagline: "Surrogate modeling exceeding 97.4% solar spectrum efficiency",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    badge: "Materials Science",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    stats: "42 Citations · CrossRef DOI"
  },
  {
    id: 4,
    category: "NETWORKS & SECURITY",
    title: "Dual-Band EMI Wave Shielding for 5G & Wireless Networks",
    subtitle: "Polarization-Insensitive Symmetrical Metamaterial Resonators",
    tagline: "Continuous online publishing with rapid DOI assignment",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    badge: "5G/6G Networks",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    stats: "19 Citations · Double-Blind"
  }
];

export default function Hero({ onOpenContact, onOpenGuidelines }) {
  const heroRef = useRef(null);
  const visualCardRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-badge', { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
        .fromTo('.hero-headline', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-desc', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-cta-btn', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 }, '-=0.2')
        .fromTo(visualCardRef.current, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-floating-card', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .fromTo('.hero-stat-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 }, '-=0.2');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const activeSlideData = sliderSlides[currentSlide];

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden subtle-mesh-bg"
    >
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Academic Journal Profile & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Structured Metadata Badges */}
            <div className="hero-badge flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0f3b6c] text-white text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Peer-Reviewed Open Access</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-100/90 text-amber-950 text-xs font-bold border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>E-ISSN: 2582-8800</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-300">
                <span>Volume 01 (2026)</span>
              </div>
            </div>

            {/* Main Journal Headline */}
            <div className="hero-headline space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f3b6c] tracking-tight leading-[1.2]">
                International Journal of Scientific Progress in Applied Science & Technology
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-600">
                A multidisciplinary platform dedicated to publishing high-impact discoveries in Applied Science and Modern Engineering.
              </p>
            </div>

            {/* Institutional Endorsement & Scope Summary */}
            <div className="hero-desc space-y-3 max-w-2xl text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <div className="text-xs font-bold text-[#0f3b6c] uppercase tracking-wider">
                  Official Publication Mandate
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                  Published under the auspices of <strong>Shri Ramswaroop Memorial University</strong>, IJSPAST accepts original research, experimental validations, review papers, and short communications across 23+ core disciplines.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenContact}
                className="hero-cta-btn inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-400/90 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Your Manuscript</span>
              </button>
              
              <button
                onClick={() => onOpenGuidelines?.('template')}
                className="hero-cta-btn inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#0f3b6c] bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs hover:shadow hover:border-blue-400 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>Download Camera-Ready Template (.DOC)</span>
              </button>
            </div>

            {/* Publication Standards Badges */}
            <div className="pt-4 border-t border-slate-200/80 w-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Editorial Rigor & Publication Standards
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Double-Blind Peer Review",
                  "Plagiarism Screening (<10%)",
                  "IEEE Referencing Standard",
                  "COPE Ethical Compliance",
                  "Open Access (CC BY 4.0)"
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 text-[11px] font-medium text-slate-700 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Research Showcase & Article Slider */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Slider Showcase Card */}
            <div 
              ref={visualCardRef}
              className="relative w-full max-w-md bg-white rounded-3xl p-5 shadow-xl border border-slate-200/90 transition-all duration-500 hover:shadow-2xl group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="space-y-4">
                
                {/* Header with Category & Auto-Slide Controls */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 block">
                      {activeSlideData.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0f3b6c] leading-snug">
                      Featured Publication
                    </h3>
                  </div>

                  {/* Play / Pause Toggle */}
                  <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    title={isAutoPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Main Slide Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3.2] bg-slate-900 shadow-md group/slide border border-slate-200">
                  <img 
                    src={activeSlideData.image} 
                    alt={activeSlideData.title}
                    className="w-full h-full object-cover transform group-hover/slide:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-between p-4 sm:p-5 text-left">
                    
                    {/* Top slide badge */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-sm border backdrop-blur-md ${activeSlideData.badgeColor}`}>
                        {activeSlideData.badge}
                      </span>
                      <span className="text-[11px] text-amber-300 font-mono font-semibold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                        {currentSlide + 1} / {sliderSlides.length}
                      </span>
                    </div>

                    {/* Bottom slide copy */}
                    <div className="space-y-1.5">
                      <div className="inline-block px-2.5 py-0.5 rounded bg-slate-900/90 text-amber-300 text-[11px] font-bold border border-white/20 backdrop-blur-md">
                        {activeSlideData.tagline}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug">
                        {activeSlideData.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        {activeSlideData.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Slider Control Arrows */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer hover:scale-110 active:scale-90"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer hover:scale-110 active:scale-90"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Slider Pagination Dots & Bottom Action Bar */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center space-x-1.5">
                    {sliderSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentSlide === idx 
                            ? 'w-6 bg-[#0f3b6c]' 
                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <a
                    href="#featured-articles"
                    className="font-bold text-xs text-[#0f3b6c] hover:text-blue-800 flex items-center space-x-1 group/link"
                  >
                    <span>Browse Articles</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

              {/* Floating Metric 1 (Top Right) */}
              <div className="hero-floating-card absolute -top-4 -right-3 sm:-right-5 bg-white rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center space-x-2.5 animate-float">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">23+ Domains</div>
                  <div className="text-[10px] text-slate-500 font-medium">Peer Reviewed</div>
                </div>
              </div>

              {/* Floating Metric 2 (Bottom Left) */}
              <div className="hero-floating-card absolute -bottom-4 -left-3 sm:-left-5 bg-white rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center space-x-2.5 animate-float [animation-delay:2s]">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0f3b6c] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">Double-Blind</div>
                  <div className="text-[10px] text-slate-500 font-medium">Expert Reviewers</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Metrics Row from Docs */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journalInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="hero-stat-card bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-400/80 transition-all duration-200 text-center flex flex-col items-center group"
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
