import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Share2, 
  Quote, 
  Calendar, 
  BookOpen, 
  ExternalLink, 
  Check, 
  FileText,
  Copy,
  Users,
  Award
} from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!article) return null;

  const handleCopyCitation = () => {
    const citation = `${article.authors.map(a => a.name).join(', ')} (${article.date}). "${article.title}." International Journal of Multidisciplinary Advanced Research, ${article.volume}, ${article.pages}. https://doi.org/${article.doi}`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadPdf = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Downloaded: "${article.title}.pdf" (Sample Preview)`);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${article.categoryColor}`}>
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {article.volume} • {article.pages}
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

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Article Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f4a85] font-serif-title leading-tight">
            {article.title}
          </h2>

          {/* Authors with Affiliations */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Authors & Affiliations</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {article.authors.map((author, idx) => (
                <div key={idx} className="text-xs">
                  <p className="font-bold text-slate-800">{author.name}</p>
                  <p className="text-[11px] text-slate-500">{author.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DOI & Quick Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs bg-blue-50/60 p-3.5 rounded-xl border border-blue-100 text-slate-700">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-[#0f4a85]">DOI:</span>
              <a 
                href={`https://doi.org/${article.doi}`} 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-700 hover:underline flex items-center space-x-1 font-mono"
              >
                <span>{article.doi}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex items-center space-x-4 text-slate-500">
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Quote className="w-3.5 h-3.5 text-amber-500" />
                <span>{article.citations} Citations</span>
              </span>
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1">
              Abstract
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {article.abstract}
            </p>
          </div>

          {/* Keywords */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Keywords
            </h4>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((kw, i) => (
                <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Citation Copied!' : 'Copy Citation (APA)'}</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownloadPdf}
                disabled={downloading}
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-sm transition-all"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>{downloading ? 'Preparing PDF...' : 'Download Full PDF'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
