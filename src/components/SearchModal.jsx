import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Layers, BookOpen, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { journalScopeTopics, authorGuidelinesData, featuredTemplateArticles } from '../data/journalDocData';

export default function SearchModal({ isOpen, onClose, onSelectArticle, onOpenGuidelines }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const matchedScope = query.trim() === ''
    ? []
    : journalScopeTopics.filter(t => 
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.category.toLowerCase().includes(query.toLowerCase())
      );

  const matchedArticles = query.trim() === ''
    ? []
    : featuredTemplateArticles.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.abstract.toLowerCase().includes(query.toLowerCase()) ||
        a.keywords.some(k => k.toLowerCase().includes(query.toLowerCase())) ||
        a.authors.some(auth => auth.name.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
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
            placeholder="Search 23 scope topics, guidelines, templates, articles..."
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
            className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 text-left">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400 text-xs space-y-3">
              <p>Type keywords to search across journal scope, manuscript guidelines, IEEE citation rules, and papers.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Artificial Intelligence', '5G/6G Networks', 'Template .DOC', 'Plagiarism Policy', 'Metamaterials'].map((hint) => (
                  <button
                    key={hint}
                    onClick={() => setQuery(hint)}
                    className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    {hint}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {matchedScope.length === 0 && matchedArticles.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-xs">
                  No matching journal topics or articles found for "<strong>{query}</strong>".
                </div>
              ) : null}

              {/* Matched Scope Domains */}
              {matchedScope.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>Journal Scope & Topics ({matchedScope.length})</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {matchedScope.map((topic) => (
                      <div
                        key={topic.id}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                        onClick={() => {
                          onClose();
                          window.location.hash = '#scope';
                        }}
                      >
                        <div className="flex items-center space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <div>
                            <p className="text-xs font-bold text-slate-800">{topic.title}</p>
                            <p className="text-[10px] text-slate-400">{topic.category}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Articles */}
              {matchedArticles.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                    <span>Research Papers ({matchedArticles.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchedArticles.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => {
                          onClose();
                          onSelectArticle?.(art);
                        }}
                        className="p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all cursor-pointer space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded ${art.categoryColor}`}>
                            {art.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">DOI: {art.doi}</span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-800 line-clamp-1">{art.title}</h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{art.abstract}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
