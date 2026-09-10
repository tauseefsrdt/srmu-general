import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Bot, 
  CheckCircle2, 
  Scale, 
  Sparkles, 
  FileText,
  AlertTriangle,
  Globe
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { authorGuidelinesData } from '../data/journalDocData';

export default function EthicsPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* Page Hero */}
      <PageHero
        title="Publication Ethics & AI Policy"
        subtitle="Ethical benchmarks, plagiarism thresholds (<10%), AI tool usage disclosure, and COPE compliance standards for IJSPAST."
        badge="Ethical Integrity & COPE Guidelines"
        breadcrumbs={[
          { name: "Guidelines", path: "/guidelines" },
          { name: "Publication Ethics & AI Policy" }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 text-left">
        
        <div className="space-y-8">
          {authorGuidelinesData.ethicsAndPolicies.map((pol, idx) => (
            <div key={idx} className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm">
                  {idx === 2 ? <Bot className="w-5 h-5" /> : idx === 1 ? <Scale className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">
                  {pol.title}
                </h3>
              </div>
              
              <div className="space-y-2.5 pl-12">
                {pol.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="academic-card p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Need to review manuscript preparation guidelines?</h4>
            <p className="text-xs text-slate-300">View complete formatting guidelines and camera-ready reference templates.</p>
          </div>
          <Link
            to="/guidelines"
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow shrink-0 transition-all"
          >
            Author Guidelines Page
          </Link>
        </div>

      </div>
    </div>
  );
}
