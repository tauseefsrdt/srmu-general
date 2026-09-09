import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Search, 
  Sparkles, 
  Menu, 
  X, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight,
  Send,
  Globe,
  Layers,
  PhoneCall
} from 'lucide-react';
import { navItems, brandInfo } from '../data/generalData';

const getServiceIcon = (title) => {
  if (title.includes('Cloud')) return <Cloud className="w-4 h-4 text-blue-600" />;
  if (title.includes('AI')) return <Cpu className="w-4 h-4 text-amber-500" />;
  if (title.includes('Security')) return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
  if (title.includes('Product')) return <Smartphone className="w-4 h-4 text-purple-600" />;
  if (title.includes('Story') || title.includes('Case')) return <Sparkles className="w-4 h-4 text-amber-500" />;
  return <Layers className="w-4 h-4 text-blue-600" />;
};

export default function Header({ onOpenContact, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Branding */}
          <a href="#" className="flex items-center space-x-3 group text-left">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0f3b6c] via-[#0b284c] to-[#081627] text-white shadow-md group-hover:scale-105 transition-transform duration-300 border border-amber-400/30">
              <span className="font-display font-extrabold text-lg tracking-wider text-amber-400">NX</span>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#0f3b6c] group-hover:text-blue-700 transition-colors">
                  {brandInfo.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300/80">
                  Global
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500">
                Enterprise Digital Innovations
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button 
                    className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      activeDropdown === item.name 
                        ? 'text-[#0f3b6c] bg-slate-100' 
                        : 'text-slate-700 hover:text-[#0f3b6c] hover:bg-slate-50'
                    }`}
                    aria-expanded={activeDropdown === item.name}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180 text-amber-600' : 'text-slate-400'
                    }`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0f3b6c] hover:bg-slate-50 transition-colors"
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 overflow-hidden backdrop-blur-xl">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100">
                        {item.name} Directory
                      </div>
                      <div className="mt-1 space-y-1">
                        {item.dropdown.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="mt-0.5 p-1.5 rounded-lg bg-slate-100 group-hover/item:bg-white group-hover/item:shadow-sm transition-all border border-slate-200/60">
                              {getServiceIcon(sub.title)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-slate-800 group-hover/item:text-[#0f3b6c] flex items-center justify-between">
                                <span>{sub.title}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-amber-500" />
                              </p>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {sub.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 bg-slate-100/90 hover:bg-slate-200 hover:text-slate-800 border border-slate-200 transition-all ml-1 cursor-pointer"
              title="Search solutions, case studies & technologies"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Search...</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[9px] font-semibold text-slate-500 bg-white rounded border border-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenContact}
              className="ml-3 inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-amber-400/80 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-slate-900" />
              <span>Get in Touch</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100 pb-3">
              {item.dropdown ? (
                <>
                  <div className="font-bold text-sm text-[#0f3b6c] mb-2 px-2">
                    {item.name}
                  </div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {item.dropdown.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                      >
                        <span>{sub.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-bold text-sm text-slate-800 hover:text-blue-700 px-2 py-1"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-300 shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4 text-slate-900" />
              <span>Schedule Strategic Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
