import React from 'react';
import { Send, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function CtaSection({ onOpenContact }) {
  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0f3b6c] via-[#0b284c] to-[#081627] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-amber-400/30">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold backdrop-blur-md border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Accelerate Your Digital Transformation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Modernize Your Infrastructure and Scale Seamlessly?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Connect directly with our senior cloud architects and AI engineers. We'll assess your current bottlenecks, architect a custom technical roadmap, and outline guaranteed delivery milestones.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Complimentary 30-minute system architecture audit",
                "Dedicated senior engineering team & technical lead",
                "Transparent fixed-cost & sprint-based engagement models",
                "Guaranteed 99.99% enterprise SLA uptime commitment"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center space-x-2 px-7 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-400 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Schedule Strategic Consultation</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center space-x-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200"
              >
                <span>Explore Technical Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-300 ml-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
