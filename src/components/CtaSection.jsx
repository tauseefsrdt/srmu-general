import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Sparkles, CheckCircle2, FileText } from 'lucide-react';
import { journalInfo } from '../data/journalDocData';

export default function CtaSection() {
  return (
    <section id="submit" className="py-14 md:py-18 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#081627] via-[#0b284c] to-[#0f4a85] text-white p-7 sm:p-10 lg:p-14 overflow-hidden shadow-xl border border-amber-400/30">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-5 text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold backdrop-blur-md border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Call for Original Research Papers • 2026</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Have an Applied Science or Engineering Discovery Worth Publishing?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {journalInfo.calloutDesc} All manuscripts undergo double-blind peer review by independent experts, rapid publication scheduling, and global open-access dissemination.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                "Strict double-blind peer review by 2+ reviewers",
                "Plagiarism screening (<10% similarity benchmark)",
                "Standard IEEE Referencing & Citation attribution",
                "Immediate Open Access under CC BY 4.0 license"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                to="/submit"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-400 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Manuscript Online</span>
              </Link>

              <Link
                to="/guidelines"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Author Instructions & Checklist</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
