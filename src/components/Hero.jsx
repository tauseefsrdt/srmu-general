import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Send, Sparkles, CheckCircle2, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { journalInfo, submissionAreaSlides } from "../data/journalDocData";

export default function Hero() {
  const heroRef = useRef(null);
  const visualCardRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % submissionAreaSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % submissionAreaSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + submissionAreaSlides.length) % submissionAreaSlides.length);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-badge", { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
        .fromTo(".hero-headline", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-desc", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-cta-btn", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 }, "-=0.2")
        .fromTo(visualCardRef.current, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .fromTo(".hero-stat-card", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 }, "-=0.2");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const activeSlideData = submissionAreaSlides[currentSlide];

  return (
    <section ref={heroRef} className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden scientific-grid-bg">
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
              <p className="text-sm sm:text-base font-medium text-slate-600 italic mt-2">"Advancing Innovation through Interdisciplinary Engineering Research"</p>
            </div>

            {/* Institutional Mandate Card */}
            <div className="hero-desc space-y-3 max-w-2xl text-slate-700 text-sm leading-relaxed">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                  IJSPAST, published by <strong>Shri Ramswaroop Memorial University</strong>, is a multidisciplinary journal with an aim to publish high-quality, original and
                  innovative research work across <strong>23 Interdisciplinary Submission Areas</strong> in Applied Science and Technology.
                </p>
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Editorial Rigor & Publication Standards</span>
              <div className="flex flex-wrap items-center gap-2">
                {["Double-Blind Peer Review", "Plagiarism Screening (<10%)", "IEEE Referencing Standard", "COPE Ethical Compliance", "Open Access (CC BY 4.0)"].map(
                  (badge, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-1.5 text-[11px] font-medium text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{badge}</span>
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right Column: 23 Interdisciplinary Submission Areas Slider (Image & Title Only) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div
              ref={visualCardRef}
              className="relative w-full max-w-md academic-card rounded-3xl p-3 sm:p-4 group shadow-xl bg-white border border-slate-200"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md border border-slate-200 group/slide">
                <img
                  key={activeSlideData.id}
                  src={activeSlideData.image}
                  alt={activeSlideData.title}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-cover transform group-hover/slide:scale-105 transition-transform duration-700"
                />

                {/* Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-md">
                    {activeSlideData.title}
                  </h3>
                </div>

                {/* Slider Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handlePrevSlide();
                  }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer hover:scale-110 active:scale-90"
                  aria-label="Previous Area"
                >
                  <ChevronLeft className="w-4 h-4 block leading-none" />
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleNextSlide();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer hover:scale-110 active:scale-90"
                  aria-label="Next Area"
                >
                  <ChevronRight className="w-4 h-4 block leading-none" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Row from Docs */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {journalInfo.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card academic-card rounded-xl p-3.5 text-center flex flex-col items-center group">
                <div className="text-lg sm:text-xl font-extrabold text-[#0f4a85] group-hover:text-amber-600 transition-colors">{stat.value}</div>
                <div className="text-[11px] font-semibold text-slate-700 mt-0.5">{stat.label}</div>
                <div className="text-[10px] font-bold text-emerald-600 mt-0.5">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
