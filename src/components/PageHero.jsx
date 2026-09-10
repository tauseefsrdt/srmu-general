import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function PageHero({ 
  title, 
  subtitle, 
  badge, 
  breadcrumbs = [] 
}) {
  return (
    <div className="relative pt-32 pb-12 md:pt-36 md:pb-14 bg-gradient-to-b from-blue-50/70 via-slate-50 to-[#f8fafc] border-b border-slate-200/80 overflow-hidden scientific-grid-bg">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/10 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-4" aria-label="Breadcrumb">
          <Link to="/" className="flex items-center space-x-1 hover:text-[#0f3b6c] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-[#0f3b6c] transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-[#0f3b6c] font-semibold">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge & Title */}
        <div className="space-y-2 max-w-3xl">
          {badge && (
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-950 text-xs font-bold border border-amber-300/80">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{badge}</span>
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f3b6c] tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
