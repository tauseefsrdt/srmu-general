import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight, FileText } from 'lucide-react';
import { featuredArticles } from '../data/data';

export default function SearchModal({ isOpen, onClose, onSelectArticle }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? [] 
    : featuredArticles.filter(art => 
        art.title.toLowerCase().includes(query.toLowerCase()) ||
        art.category.toLowerCase().includes(query.toLowerCase()) ||
        art.abstract.toLowerCase().includes(query.toLowerCase()) ||
        art.authors.some(a => a.name.toLowerCase().includes(query.toLowerCase())) ||
        art.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search papers by keyword, topic, author or DOI..."
            className="w-full text-sm outline-none text-slate-800 placeholder:text-slate-400 bg-transparent"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded bg-slate-100"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-slate-400">
              <p>Type keywords to search across all published volumes and articles.</p>
              <div className="flex justify-center gap-2 mt-3">
                {['Quantum', 'Robotics', 'Hydrogel', 'Photovoltaics'].map((tag) => (
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
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                Found {results.length} result(s)
              </div>
              {results.map((art) => (
                <div
                  key={art.id}
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-amber-600 uppercase">
                      {art.category} • {art.volume}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#0f3b6c] transition-colors leading-snug">
                      {art.title}
                    </h5>
                    <p className="text-[11px] text-slate-500">
                      {art.authors.map(a => a.name).join(', ')}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching manuscripts found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
