import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Globe,
  FileText
} from 'lucide-react';
import { journalInfo, footerLinks } from '../data/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081627] text-white pt-16 pb-12 border-t-4 border-amber-500 relative overflow-hidden">
      
      {/* Decorative background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid matching Wireframe Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & University Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center font-display text-lg shadow-md">
                IJ
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-wider text-white">
                  {journalInfo.acronym}
                </span>
                <span className="block text-[11px] text-amber-300/90 font-medium">
                  SRMU Research & Publication Cell
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              International Journal of Scientific Progress in Applied Science & Technology. A high-impact peer-reviewed scholarly venue published under Shri Ramswaroop Memorial University.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>SRMU Campus, Lucknow-Deva Road, Barabanki, UP - 225003, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:editor.ijspast@srmu.ac.in" className="hover:text-amber-400 transition-colors">
                  editor.ijspast@srmu.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span>E-ISSN: 2582-8800 | Open Access (CC BY 4.0)</span>
              </div>
            </div>
          </div>

          {/* Column 2: About (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-3.5 bg-amber-400 rounded-xs"></div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                About
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerLinks.about.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all duration-150">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Guidelines (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-3.5 bg-amber-400 rounded-xs"></div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Guidelines
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerLinks.guidelines.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all duration-150">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Papers & Archive (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-3.5 bg-amber-400 rounded-xs"></div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Papers
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerLinks.papers.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all duration-150">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Policy & Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-3.5 bg-amber-400 rounded-xs"></div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Policy & Terms
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all duration-150">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} <strong>IJSPAST</strong> • Shri Ramswaroop Memorial University. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] text-slate-500">
              Indexed in CrossRef • Google Scholar • DOAJ
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 transition-colors text-white border border-slate-700"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
