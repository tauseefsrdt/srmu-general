import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
  ChevronLeft, 
  ChevronRight, 
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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    badge: "Special Track · 2026",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    stats: "28 Citations · IEEE Referencing",
    link: "/articles/art-1"
  },
  {
    id: 2,
    category: "APPLIED AI & ROBOTICS",
    title: "Deep Neural Optimization for Real-Time Edge Processing",
    subtitle: "High-Throughput Machine Learning Frameworks for Autonomous Systems",
    tagline: "Ultra-low latency inference on embedded silicon",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    badge: "AI & Data Science",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    stats: "34 Citations · Open Access",
    link: "/articles/art-2"
  },
  {
    id: 3,
    category: "ENERGY & MATERIALS",
    title: "Ultra-Broadband Solar Energy Harvesting & Nanophotonics",
    subtitle: "High-Efficiency Photovoltaic Monolayers & Thin-Film Absorbers",
    tagline: "Surrogate modeling exceeding 97.4% solar spectrum efficiency",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&q=80",
    badge: "Materials Science",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    stats: "42 Citations · CrossRef DOI",
    link: "/articles/art-2"
  },
  {
    id: 4,
    category: "NETWORKS & SECURITY",
    title: "Dual-Band EMI Wave Shielding for 5G & Wireless Networks",
    subtitle: "Polarization-Insensitive Symmetrical Metamaterial Resonators",
    tagline: "Continuous online publishing with rapid DOI assignment",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    badge: "5G/6G Networks",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    stats: "19 Citations · Double-Blind",
    link: "/articles/art-3"
  }
];

export default function Hero() {
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
        .fromTo('.hero-headline', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
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
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden scientific-grid-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Academic Journal Profile & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            
            {/* Badges */}
            <div className="hero-badge flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0f4a85] text-white text-xs font-semibold shadow-xs">
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

            {/* Main Journal Title */}
            <div className="hero-headline space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold text-[#0f4a85] tracking-tight leading-[1.2]">
                International Journal of Scientific Progress in Applied Science &amp; Technology
              </h1>
              <p className="text-sm sm:text-base font-medium text-slate-600 italic mt-2">
                "Advancing Innovation through Interdisciplinary Engineering Research"
              </p>
            </div>

            {/* Institutional Mandate Card */}
            <div className="hero-desc space-y-3 max-w-2xl text-slate-700 text-sm leading-relaxed">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                {/* <div className="text-[11px] font-bold text-[#0f4a85] uppercase tracking-wider">
                  Official Publication Mandate
                </div> */}
                <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                  IJMAR, published by <strong>Shri Ramswaroop Memorial University</strong>, is a multidisciplinary journal with an aim to publish high-quality, original and innovative research work in Applied Science and Technology.
                </p>
                {/* <p className="text-xs text-slate-500 leading-normal">
                  Accepts original research, experimental validations, review papers, and short communications across 23+ core disciplines.
                </p> */}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/submit"
                className="hero-cta-btn inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-400/90 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Your Manuscript</span>
              </Link>
              
              <Link
                to="/template"
                className="hero-cta-btn inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#0f4a85] bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs hover:shadow hover:border-blue-400 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>Download Camera-Ready Template (.DOC)</span>
              </Link>
            </div>

            {/* Publication Standards Badges */}
            <div className="pt-3 border-t border-slate-200/80 w-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
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
                    className="inline-flex items-center space-x-1.5 text-[11px] font-medium text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Research Showcase Slider */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            <div 
              ref={visualCardRef}
              className="relative w-full max-w-md academic-card rounded-3xl p-5 group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="space-y-3.5">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 block">
                      {activeSlideData.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#0f4a85] leading-snug">
                      Featured Publication
                    </h3>
                  </div>

                  <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    title={isAutoPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Main Slide Card */}
                <Link to={activeSlideData.link} className="block">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md group/slide border border-slate-200">
                    <img 
                      src={activeSlideData.image} 
                      alt={activeSlideData.title}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      className="w-full h-full object-cover transform group-hover/slide:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-between p-4 text-left">
                      
                      {/* Top slide badge */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md shadow-sm border backdrop-blur-md ${activeSlideData.badgeColor}`}>
                          {activeSlideData.badge}
                        </span>
                        <span className="text-[10px] text-amber-300 font-mono font-semibold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                          {currentSlide + 1} / {sliderSlides.length}
                        </span>
                      </div>

                      {/* Bottom slide copy */}
                      <div className="space-y-1">
                        <div className="inline-block px-2 py-0.5 rounded bg-slate-900/90 text-amber-300 text-[10px] font-bold border border-white/20 backdrop-blur-md">
                          {activeSlideData.tagline}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                          {activeSlideData.title}
                        </h4>
                        <p className="text-[10px] text-slate-300 line-clamp-1">
                          {activeSlideData.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Slider Arrows */}
                    <button
                      onClick={(e) => { e.preventDefault(); handlePrevSlide(); }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer hover:scale-110 active:scale-90"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => { e.preventDefault(); handleNextSlide(); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer hover:scale-110 active:scale-90"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Link>

                {/* Slider Pagination */}
                <div className="pt-1.5 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center space-x-1.5">
                    {sliderSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          currentSlide === idx 
                            ? 'w-5 bg-[#0f4a85]' 
                            : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <Link
                    to="/papers"
                    className="font-bold text-[11px] text-[#0f4a85] hover:text-blue-800 flex items-center space-x-1 group/link"
                  >
                    <span>Browse Articles</span>
                    <ArrowRight className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

              {/* Floating Badge 1 */}
              <div className="hero-floating-card absolute -top-3 -right-3 sm:-right-4 bg-white rounded-xl p-2.5 shadow-md border border-slate-200/90 flex items-center space-x-2 animate-float">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900">28+ Domains</div>
                  <div className="text-[9px] text-slate-500 font-medium">Peer Reviewed</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="hero-floating-card absolute -bottom-3 -left-3 sm:-left-4 bg-white rounded-xl p-2.5 shadow-md border border-slate-200/90 flex items-center space-x-2 animate-float [animation-delay:2s]">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0f4a85] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900">Double-Blind</div>
                  <div className="text-[9px] text-slate-500 font-medium">Expert Reviewers</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Metrics Row from Docs */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {journalInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="hero-stat-card academic-card rounded-xl p-3.5 text-center flex flex-col items-center group"
              >
                <div className="text-lg sm:text-xl font-extrabold text-[#0f4a85] group-hover:text-amber-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold text-slate-700 mt-0.5">
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
