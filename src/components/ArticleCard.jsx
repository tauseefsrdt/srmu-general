import React from 'react';
import { 
  ArrowUpRight, 
  Calendar, 
  Quote 
} from 'lucide-react';

export default function ArticleCard({ article, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(article)}
      className="article-card group academic-card rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Card Image Header with Category Tag */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
          
          {/* Category Pill */}
          <div className="absolute top-2.5 left-2.5">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-2xs border ${article.categoryColor}`}>
              {article.category}
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-[10px] font-medium">
            <span className="flex items-center space-x-1 font-semibold text-amber-300">
              <Calendar className="w-3 h-3 text-amber-400" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-1 font-semibold text-white">
              <Quote className="w-3 h-3 text-amber-400" />
              <span>{article.citations} Cites</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 space-y-2 text-left">
          {/* Volume / DOI snippet */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>{article.volume}</span>
            <span className="text-blue-700 font-semibold truncate max-w-[120px]">
              DOI: {article.doi.replace('10.1007/', '').replace('10.1038/', '').replace('10.3390/', '')}
            </span>
          </div>

          {/* Article Title */}
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0f3b6c] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>

          {/* Authors */}
          <p className="text-[11px] text-slate-500 line-clamp-1 font-medium">
            {article.authors.map(a => a.name).join(', ')}
          </p>

          {/* Abstract Snippet */}
          <p className="text-[11px] text-slate-600 line-clamp-3 leading-relaxed">
            {article.abstract}
          </p>
        </div>
      </div>

      {/* Card Footer: Action Bar */}
      <div className="px-4 pb-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-slate-500">
          {article.readTime}
        </span>
        <button 
          className="inline-flex items-center space-x-1 text-xs font-bold text-[#0f3b6c] group-hover:text-amber-600 transition-colors cursor-pointer"
          aria-label={`Read article: ${article.title}`}
        >
          <span>Read Paper</span>
          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
