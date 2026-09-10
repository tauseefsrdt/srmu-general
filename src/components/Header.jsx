import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  ArrowRight,
  Send
} from 'lucide-react';
import { journalInfo } from '../data/journalDocData';

export default function Header({ onOpenContact, onOpenSearch, onOpenGuidelines }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact dropdown menu names matching the handwritten wireframe:
  // About v: Vision & Scope, Publication Details, Editorial Board, Contact Us
  // Guidelines v: Authors (Author Guidelines, Template, Review Process, Ethics)
  // Papers v: Current, Archives
  // Submit
  const navItems = [
    {
      name: "About",
      href: "#about",
      dropdown: [
        { title: "Vision & Scope", href: "#scope", action: null },
        { title: "Publication Details", href: "#about", action: () => onOpenGuidelines?.('guidelines') },
        { title: "Editorial Board", href: "#about", action: null },
        { title: "Contact Us", href: "#contact", action: onOpenContact }
      ]
    },
    {
      name: "Guidelines",
      href: "#guidelines",
      dropdown: [
        { title: "Authors Guidelines", href: "#guidelines", action: () => onOpenGuidelines?.('guidelines') },
        { title: "Manuscript Template (.DOC)", href: "#template", action: () => onOpenGuidelines?.('template') },
        { title: "IEEE Referencing Style", href: "#referencing", action: () => onOpenGuidelines?.('referencing') },
        { title: "Publication Ethics & AI Policy", href: "#ethics", action: () => onOpenGuidelines?.('ethics') }
      ]
    },
    {
      name: "Papers",
      href: "#featured-articles",
      dropdown: [
        { title: "Current Issue", href: "#featured-articles", action: null },
        { title: "Archives", href: "#featured-articles", action: null }
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Branding - Matching Handwritten Wireframe: IJSPAST & subtitle */}
          <a href="#" className="flex items-center space-x-3.5 group text-left">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0f3b6c] via-[#0b284c] to-[#081627] text-white shadow-md group-hover:scale-105 transition-transform duration-300 border border-amber-400/40 shrink-0">
              <span className="font-serif font-black text-xl tracking-wider text-amber-400">IJ</span>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-serif font-extrabold text-2xl tracking-tight text-[#0f3b6c] group-hover:text-blue-800 transition-colors">
                  {journalInfo.acronym}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300/80">
                  Open Access
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 line-clamp-1 max-w-xs sm:max-w-sm md:max-w-md">
                International Journal of Scientific Progress in Applied Science & Technology
              </span>
            </div>
          </a>

          {/* Desktop Navigation: [ About v ] [ Guidelines v ] [ Papers v ] [ Submit ] */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
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

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 overflow-hidden backdrop-blur-xl">
                      <div className="space-y-0.5">
                        {item.dropdown.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            onClick={(e) => {
                              if (sub.action) {
                                e.preventDefault();
                                sub.action();
                              }
                              setActiveDropdown(null);
                            }}
                            className="flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#0f3b6c] hover:bg-blue-50/70 transition-colors group/item"
                          >
                            <span>{sub.title}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-amber-500" />
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
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 hover:text-slate-800 border border-slate-200 transition-all ml-1 cursor-pointer"
              title="Search journal scope, guidelines & articles"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Search...</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[9px] font-semibold text-slate-500 bg-white rounded border border-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* Submit Button matching Wireframe */}
            <button
              onClick={onOpenContact}
              className="ml-2 inline-flex items-center space-x-1.5 px-4.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-amber-400/80 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>Submit</span>
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
              <div className="font-bold text-sm text-[#0f3b6c] mb-2 px-2">
                {item.name}
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {item.dropdown.map((sub, idx) => (
                  <a
                    key={idx}
                    href={sub.href}
                    onClick={(e) => {
                      if (sub.action) {
                        e.preventDefault();
                        sub.action();
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-800"
                  >
                    <span>{sub.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>Submit Manuscript</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
