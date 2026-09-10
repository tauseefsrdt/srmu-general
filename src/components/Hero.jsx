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
  Cpu,
  Radio,
  Atom,
  Flame,
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
    tagline: "Research papers · Metamaterial Absorber & 5G Innovations",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    badge: "Special Track · 2026",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    stats: "28 Citations · IEEE Style"
  },
  {
    id: 2,
    category: "APPLIED AI & ROBOTICS",
    title: "Deep Neural Optimization for Real-Time Edge Processing",
    subtitle: "High-Throughput Machine Learning Frameworks for Autonomous Systems",
    tagline: "Ultra-low latency inference on edge microcontrollers",
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
    tagline: "Continuous online publishing with instant DOI registration",
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

  // Auto-play timer for slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 4500);
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
        .fromTo(visualCardRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.2)' }, '-=0.4')
        .fromTo('.hero-floating-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .fromTo('.hero-stat-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06 }, '-=0.2');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const activeSlideData = sliderSlides[currentSlide];

  return (
    <section 
      ref={heroRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden subtle-mesh-bg"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-blue-300/15 rounded-full blur-2xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-amber-300/20 rounded-full blur-2xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Exact Content from Handwritten Wireframe */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge */}
            <div className="hero-badge flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Peer-Reviewed Open Access</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>E-ISSN: 2582-8800</span>
              </div>
            </div>

            {/* Main Journal Headline */}
            <div className="hero-headline space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5.5xl font-extrabold text-[#0f3b6c] tracking-tight leading-[1.18] font-serif-title">
                International Journal of Scientific Progress in Applied Science & Technology{' '}
                <span className="text-xl sm:text-2xl font-normal text-slate-500 font-sans block mt-1">
                  (E-ISSN: 2582-8800)
                </span>
              </h1>
            </div>

            {/* Body Text matching Wireframe */}
            <div className="hero-desc space-y-3 max-w-2xl text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-800 border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/50 rounded-r-xl">
                IJSPAST, published by <strong>Shri Ramswaroop Memorial University</strong>, is a multidisciplinary journal with an aim to publish high-quality, original and innovative research work in Applied Science and Technology.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Authors are encouraged to submit manuscripts that present novel contributions, practical applications, innovative methodologies, and interdisciplinary research across 23+ domains.
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

            {/* Trust Badges */}
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

          {/* Right Column: Attractive Interactive Showcase Slider (Matching theme.png & wireframe) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Soft backdrop glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/10 via-amber-400/15 to-blue-800/10 rounded-3xl filter blur-lg -z-10"></div>
            
            {/* Slider Showcase Card */}
            <div 
              ref={visualCardRef}
              className="relative w-full max-w-md bg-white rounded-3xl p-5 shadow-2xl border border-slate-200/90 transition-all duration-500 hover:shadow-2xl group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="space-y-4">
                
                {/* Top Pill / Header (Matching theme.png: HIGHLIGHTS / Research Environment & Facilities) */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 block">
                      {activeSlideData.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0f3b6c] font-serif-title leading-snug">
                      Research Highlights & Publications
                    </h3>
                  </div>

                  {/* Play / Pause Toggle */}
                  <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                    title={isAutoPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Main Slider Slide Box */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3.2] bg-slate-900 shadow-md group/slide border border-slate-200">
                  <img 
                    src={activeSlideData.image} 
                    alt={activeSlideData.title}
                    className="w-full h-full object-cover transform group-hover/slide:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-between p-4 sm:p-5 text-left">
                    
                    {/* Top slide badge */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-sm border backdrop-blur-md ${activeSlideData.badgeColor}`}>
                        {activeSlideData.badge}
                      </span>
                      <span className="text-[11px] text-amber-300 font-mono font-semibold bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                        Slide {currentSlide + 1} / {sliderSlides.length}
                      </span>
                    </div>

                    {/* Bottom slide copy matching theme.png overlay paper badge */}
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 rounded bg-slate-900/90 text-white text-xs font-bold border border-white/20 backdrop-blur-md">
                        {activeSlideData.tagline}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug font-serif-title">
                        {activeSlideData.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        {activeSlideData.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Left & Right Slider Control Arrows (Matching theme.png round arrows) */}
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

                {/* Slider Pagination Dots & Bottom Action Bar (Matching theme.png) */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  {/* Dots */}
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

                  {/* Link / Explore */}
                  <div className="flex items-center space-x-3 text-xs">
                    <a
                      href="#featured-articles"
                      className="font-bold text-[#0f3b6c] hover:text-blue-800 flex items-center space-x-1 group/link"
                    >
                      <span>Explore Innovations</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-link-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1 (Top Right) */}
              <div className="hero-floating-card absolute -top-4 -right-4 sm:-right-6 bg-white rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center space-x-2.5 animate-float">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">23+ Domains</div>
                  <div className="text-[10px] text-slate-500 font-medium">Interdisciplinary Scope</div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Left) */}
              <div className="hero-floating-card absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center space-x-2.5 animate-float [animation-delay:2s]">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0f3b6c] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
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
