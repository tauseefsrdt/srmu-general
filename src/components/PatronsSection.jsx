import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { patronsData } from '../data/patronsData';

gsap.registerPlugin(ScrollTrigger);

export default function PatronsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.patrons-header', 
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

      gsap.fromTo('.patron-card', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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
      id="patrons"
      ref={sectionRef}
      className="py-16 md:py-24 bg-transparent relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= PATRONS SECTION ================= */}
        <div className="space-y-10">
          
          {/* Section Divider Heading matching theme.png: Patrons */}
          <div className="patrons-header flex items-center justify-center space-x-6">
            <div className="h-px bg-slate-300/80 flex-1 max-w-xs"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3b6c] font-serif-title tracking-tight text-center">
              Patrons
            </h2>
            <div className="h-px bg-slate-300/80 flex-1 max-w-xs"></div>
          </div>

          {/* 3-Card Grid for Patrons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {patronsData.patrons.map((patron) => (
              <div
                key={patron.id}
                className="patron-card glass-card glass-card-hover rounded-3xl p-8 flex flex-col items-center text-center group"
              >
                {/* Circular Portrait with Golden Outer Ring & Ambient Glow */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 golden-ring-glow group-hover:scale-105 transition-transform duration-300 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                    <img
                      src={patron.image}
                      alt={patron.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f3b6c] group-hover:text-blue-800 transition-colors font-serif-title leading-snug">
                  {patron.name}
                </h3>

                {/* Designation */}
                <p className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mt-2">
                  {patron.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CO PATRONS SECTION ================= */}
        <div className="space-y-10 pt-4">
          
          {/* Section Divider Heading matching theme.png: Co Patrons */}
          <div className="patrons-header flex items-center justify-center space-x-6">
            <div className="h-px bg-slate-300/80 flex-1 max-w-xs"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3b6c] font-serif-title tracking-tight text-center">
              Co Patrons
            </h2>
            <div className="h-px bg-slate-300/80 flex-1 max-w-xs"></div>
          </div>

          {/* 3-Card Grid for Co-Patrons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {patronsData.coPatrons.map((copatron) => (
              <div
                key={copatron.id}
                className="patron-card glass-card glass-card-hover rounded-3xl p-8 flex flex-col items-center text-center group"
              >
                {/* Circular Portrait with Golden Outer Ring & Ambient Glow */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 golden-ring-glow group-hover:scale-105 transition-transform duration-300 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                    <img
                      src={copatron.image}
                      alt={copatron.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f3b6c] group-hover:text-blue-800 transition-colors font-serif-title leading-snug">
                  {copatron.name}
                </h3>

                {/* Designation */}
                <p className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mt-2">
                  {copatron.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
