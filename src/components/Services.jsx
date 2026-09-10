import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Smartphone, 
  Database, 
  Compass, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { servicesData } from '../data/generalData';

gsap.registerPlugin(ScrollTrigger);

const getServiceIcon = (name) => {
  switch (name) {
    case 'Cloud':
      return <Cloud className="w-6 h-6 text-blue-600" />;
    case 'Cpu':
      return <Cpu className="w-6 h-6 text-amber-500" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    case 'Smartphone':
      return <Smartphone className="w-6 h-6 text-purple-600" />;
    case 'Database':
      return <Database className="w-6 h-6 text-sky-600" />;
    case 'Compass':
      return <Compass className="w-6 h-6 text-amber-600" />;
    default:
      return <Zap className="w-6 h-6 text-blue-600" />;
  }
};

export default function Services({ onSelectService }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.services-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 45,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="services-header text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f4a85] tracking-tight">
            Comprehensive Enterprise Technology Solutions
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            From zero-downtime cloud infrastructure to proprietary AI workflows and high-concurrency microservices, we build scalable platforms tailored to your business ambitions.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              className="service-card bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-blue-50 border border-slate-200/80 group-hover:border-blue-200 flex items-center justify-center transition-colors">
                    {getServiceIcon(srv.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {srv.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0f4a85] transition-colors leading-snug">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-[#0f4a85]">
                    {srv.metric}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    {srv.metricLabel}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(srv)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0f4a85] group-hover:text-amber-600 transition-colors cursor-pointer"
                >
                  <span>Inquire Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
