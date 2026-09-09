import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Layers, Cloud, Sparkles } from 'lucide-react';
import { servicesData, projectsData } from '../data/generalData';

export default function SearchModal({ isOpen, onClose, onSelectProject, onSelectService }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const matchedServices = query.trim() === ''
    ? []
    : servicesData.filter(s => 
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.desc.toLowerCase().includes(query.toLowerCase()) ||
        s.category.toLowerCase().includes(query.toLowerCase()) ||
        s.features.some(f => f.toLowerCase().includes(query.toLowerCase()))
      );

  const matchedProjects = query.trim() === ''
    ? []
    : projectsData.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.client.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search enterprise solutions, case studies, technologies..."
            className="w-full text-sm outline-none text-slate-800 placeholder:text-slate-400 bg-transparent"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded bg-slate-100 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-slate-400 space-y-3">
              <p>Type keywords to search across solutions, client case studies, and capabilities.</p>
              <div className="flex justify-center gap-2">
                {['Kubernetes', 'LLMs', 'FinTech', 'Zero Trust', 'Microservices'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-amber-100 hover:text-amber-900 text-slate-600 text-xs transition-colors cursor-pointer"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (matchedServices.length > 0 || matchedProjects.length > 0) ? (
            <div className="space-y-4">
              {matchedServices.length > 0 && (
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                    Solutions ({matchedServices.length})
                  </div>
                  {matchedServices.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => {
                        onSelectService(srv);
                        onClose();
                      }}
                      className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer flex items-start justify-between gap-3 group"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-amber-600 uppercase">
                          {srv.category}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#0f3b6c] transition-colors leading-snug">
                          {srv.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {srv.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              )}

              {matchedProjects.length > 0 && (
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                    Case Studies ({matchedProjects.length})
                  </div>
                  {matchedProjects.map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => {
                        onSelectProject(proj);
                        onClose();
                      }}
                      className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer flex items-start justify-between gap-3 group"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-blue-600 uppercase">
                          {proj.category} • {proj.client}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#0f3b6c] transition-colors leading-snug">
                          {proj.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {proj.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching capabilities or case studies found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
