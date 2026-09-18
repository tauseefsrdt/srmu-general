import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowRight,
  Send,
  BookOpen,
  Sparkles,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { journalInfo } from '../data/journalDocData';

export default function Header({ onOpenSearch }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      name: "About",
      href: "/about",
      dropdown: [
        { title: "Vision & Scope", href: "/vision-scope", desc: "Interdisciplinary scientific domains" },
        { title: "Publication Details", href: "/publication-details", desc: "Full page journal specs, frequency & peer review" },
        { title: "Editorial Borad", href: "/editorial-borad", desc: "Direct communication with editorial desk" }
      ]
    },
    {
      name: "Guidelines",
      href: "/guidelines",
      dropdown: [
        { title: "Authors Guidelines", href: "/guidelines", desc: "Preparation rules & requirements" },
        { title: "Peer Review Policy", href: "/peer-review-policy", desc: "Double-blind evaluation process & standards" },
        { title: "Plagiarism Policy", href: "/ethics-policy", desc: "Similarity thresholds & publication ethics" }
      ]
    },
    {
      name: "Template",
      href: "/template"
    },
    {
      name: "Papers",
      href: "/papers",
      dropdown: [
        { title: "Current Issue (Vol. 01, 2026)", href: "/papers", desc: "Latest peer-reviewed articles" },
        { title: "Special Tracks & Archives", href: "/papers", desc: "5G, Optical & Metamaterials" }
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs transition-all">

      {/* Top Institutional Header Bar */}
      <div className="bg-[#0f4a85] text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 font-medium">
              <span className="text-amber-400 font-semibold">Published by:</span>
              <span className="text-slate-200">{journalInfo.publisher}</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center space-x-1">
              <span className="text-amber-400 font-semibold">E-ISSN:</span>
              <span className="font-mono text-slate-200">2582-8800</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center space-x-1.5 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Double-Blind Peer Review</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Continuous Online Publication</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 sm:py-3">

          {/* Logo & Branding */}
          <Link to="/" className="flex items-center space-x-3 group text-left">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0f4a85] via-[#0b284c] to-[#0f4a85] text-white shadow-md group-hover:scale-105 transition-transform duration-300 border border-amber-400/40 shrink-0">
              <span className="font-extrabold text-lg sm:text-xl tracking-wider text-amber-400">IJ</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0f4a85] group-hover:text-blue-800 transition-colors">
                  {journalInfo.acronym}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-100 text-amber-950 px-2 py-0.5 rounded-md border border-amber-300/80">
                  Open Access
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 line-clamp-1 max-w-xs sm:max-w-sm md:max-w-md">
                International Journal of Multidisciplinary Advanced Research
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${location.pathname.startsWith(item.href) || activeDropdown === item.name
                    ? 'text-[#0f4a85] bg-slate-100'
                    : 'text-slate-700 hover:text-[#0f4a85] hover:bg-slate-50'
                    }`}
                  aria-expanded={activeDropdown === item.name}
                >
                  <span>{item.name}</span>
                  {item.dropdown && item.dropdown.length > 0 && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-amber-600' : 'text-slate-400'
                      }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && item.dropdown.length > 0 && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 overflow-hidden backdrop-blur-xl">
                      <div className="space-y-1">
                        {item.dropdown.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex flex-col p-2.5 rounded-xl text-left hover:bg-blue-50/70 transition-colors group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-800 group-hover/item:text-[#0f4a85]">
                                {sub.title}
                              </span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-amber-500" />
                            </div>

                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Search Button */}
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

            {/* Submit Manuscript Button */}
            {/* <Link
              to="/submit"
              className="ml-2 inline-flex items-center space-x-1.5 px-4.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-amber-400/90 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>Submit Manuscript</span>
            </Link> */}
          </nav>

          {/* Mobile Menu Toggle Button */}
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
              <div className="font-bold text-sm text-[#0f4a85] mb-2 px-2">
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-800 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  {(!item.dropdown || item.dropdown.length === 0) && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </Link>
              </div>
              {item.dropdown && item.dropdown.length > 0 && (
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {item.dropdown.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 px-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-800"
                    >
                      <span>{sub.title}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-2">
            <Link
              to="/submit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>Submit Manuscript Online</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
