import React from 'react';
import { X, CheckCircle, TrendingUp, ArrowRight, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${project.tagColor}`}>
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-semibold">
              Client: {project.client}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3b6c] leading-tight">
            {project.title}
          </h2>

          {/* Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 bg-blue-50/70 p-4 rounded-2xl border border-blue-100 text-center">
            <div>
              <div className="text-base sm:text-lg font-extrabold text-[#0f3b6c]">
                {project.stats.metric1}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                Peak Concurrency
              </div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-amber-600">
                {project.stats.metric2}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                SLA Guarantee
              </div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-emerald-600">
                {project.stats.metric3}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                System Volume
              </div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Challenge & Architectural Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Key Engineering Deliverables & Milestones:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-sm transition-all cursor-pointer"
            >
              <span>Build Similar Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
