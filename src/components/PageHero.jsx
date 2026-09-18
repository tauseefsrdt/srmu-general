import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles, BookOpen } from 'lucide-react';

export default function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  image = "https://images.unsplash.com/photo-1507842229451-7f01be837453?auto=format&fit=crop&w=1600&q=80"
}) {
  return (
    <div className="relative min-h-[500px] flex items-center pt-32 pb-20 bg-[#0f4a85] text-white border-b border-amber-500/40 overflow-hidden">

      {/* Background Hero Image with Academic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-45 contrast-125"
        />
        {/* Layered Gradient Overlays for High Contrast & SRMU Color Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071526]/95 via-[#0a2540]/90 to-[#0f4a85]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a85] via-transparent to-black/40"></div>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">

        {/* Breadcrumbs with Frosted Backdrop */}
        <nav className="inline-flex items-center space-x-2 text-xs font-medium text-slate-200 mb-3.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10" aria-label="Breadcrumb">
          <Link to="/" className="flex items-center space-x-1 hover:text-amber-400 transition-colors">
            <Home className="w-3.5 h-3.5 text-amber-400" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-amber-400 transition-colors text-slate-200">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-amber-300 font-semibold truncate max-w-xs sm:max-w-md">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Title, Badge & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pt-1">
          <div className="space-y-2 max-w-3xl">
            {badge && (
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-[11px] font-bold border border-amber-400/40 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{badge}</span>
              </div>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm md:text-base text-slate-200 line-clamp-2 leading-relaxed max-w-2xl font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Quick Journal ID Badge */}
          <div className="hidden lg:flex items-center space-x-3 bg-black/40 px-4 py-2 rounded-2xl border border-white/15 backdrop-blur-md shrink-0 text-xs text-slate-200">
            <div className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs">
              IJ
            </div>
            <div>
              <span className="font-bold text-amber-300 block">IJMAR</span>
              <span className="text-[10px] text-slate-300 font-mono">E-ISSN: 2582-8800</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
