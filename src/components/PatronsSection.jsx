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
        { y: 15, opacity: 0 },
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

      gsap.fromTo('.patron-card',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
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
      className="py-12 md:py-16 bg-transparent relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ================= PATRONS SECTION ================= */}
        <div className="space-y-6">

          {/* Section Divider Heading: Patrons */}
          <div className="patrons-header flex items-center justify-center space-x-4">
            <div className="h-px bg-slate-300/80 flex-1 max-w-[100px] sm:max-w-[180px]"></div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f3b6c] tracking-tight text-center">
              Patrons
            </h2>
            <div className="h-px bg-slate-300/80 flex-1 max-w-[100px] sm:max-w-[180px]"></div>
          </div>

          {/* 3-Card Grid for Patrons with balanced proportions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {patronsData.patrons.map((patron) => (
              <div
                key={patron.id}
                className="patron-card academic-card rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center group"
              >
                {/* Circular Portrait with Golden Accent Ring */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 patron-gold-ring group-hover:scale-105 transition-transform duration-300 mb-3.5">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                    <img
                      src={patron.image}
                      alt={patron.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-bold text-[#0f3b6c] group-hover:text-blue-800 transition-colors leading-snug">
                  {patron.name}
                </h3>

                {/* Designation */}
                <p className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-slate-500 uppercase mt-1">
                  {patron.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CO PATRONS SECTION ================= */}
        <div className="space-y-6">

          {/* Section Divider Heading: Co Patrons */}
          <div className="patrons-header flex items-center justify-center space-x-4">
            <div className="h-px bg-slate-300/80 flex-1 max-w-[100px] sm:max-w-[180px]"></div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f3b6c] tracking-tight text-center">
              Co Patrons
            </h2>
            <div className="h-px bg-slate-300/80 flex-1 max-w-[100px] sm:max-w-[180px]"></div>
          </div>

          {/* 3-Card Grid for Co-Patrons with balanced proportions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {patronsData.coPatrons.map((copatron) => (
              <div
                key={copatron.id}
                className="patron-card academic-card rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center group"
              >
                {/* Circular Portrait with Golden Accent Ring */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 patron-gold-ring group-hover:scale-105 transition-transform duration-300 mb-3.5">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                    <img
                      src={copatron.image}
                      alt={copatron.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-bold text-[#0f3b6c] group-hover:text-blue-800 transition-colors leading-snug">
                  {copatron.name}
                </h3>

                {/* Designation */}
                <p className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-slate-500 uppercase mt-1">
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
