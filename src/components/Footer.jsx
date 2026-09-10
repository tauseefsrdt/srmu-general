import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { journalInfo } from '../data/journalDocData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationSections = [
    {
      title: "About Journal",
      links: [
        { name: "Vision & Scope", href: "/vision-scope" },
        { name: "Publication Details", href: "/publication-details" },
        { name: "Patrons & Advisory", href: "/patrons-advisory" },
        { name: "Peer Review Workflow", href: "/publication-details" },
        { name: "Contact Editorial Office", href: "/contact" }
      ]
    },
    {
      title: "Author Guidelines",
      links: [
        { name: "Submission Instructions", href: "/guidelines" },
        { name: "Manuscript Structure", href: "/guidelines" },
        { name: "Camera-Ready Template (.DOC)", href: "/template" },
        { name: "IEEE Referencing Rules", href: "/referencing-style" },
        { name: "Pre-Submission Checklist", href: "/guidelines" }
      ]
    },
    {
      title: "Publications",
      links: [
        { name: "Current Issue (Vol. 01, 2026)", href: "/papers" },
        { name: "Special Tracks & Resonators", href: "/papers" },
        { name: "Online Archives", href: "/papers" },
        { name: "Submit Paper Online", href: "/submit" }
      ]
    },
    {
      title: "Ethics & Policies",
      links: [
        { name: "Publication Ethics (COPE)", href: "/ethics-policy" },
        { name: "Plagiarism Threshold (< 10%)", href: "/ethics-policy" },
        { name: "AI Tool Use & Disclosure", href: "/ethics-policy" },
        { name: "Open Access (CC BY 4.0)", href: "/publication-details" },
        { name: "Copyright & Licensing", href: "/ethics-policy" }
      ]
    }
  ];

  return (
    <footer className="bg-[#061220] text-slate-300 relative border-t border-slate-800">
      
      {/* Subtle Top Accent Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-amber-500 via-[#0f3b6c] to-amber-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 text-left">
          
          {/* Brand & Contact (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 font-black text-base flex items-center justify-center shadow-md">
                IJ
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {journalInfo.acronym}
                </span>
                <span className="text-[11px] font-medium text-amber-400/90 tracking-wide">
                  {journalInfo.publisher}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An international, peer-reviewed, open-access journal dedicated to publishing high-quality original research and review articles across science, engineering, and emerging technologies.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">Lucknow-Deva Road, Barabanki, Uttar Pradesh, India</span>
              </div>
              
              <div className="flex items-center space-x-2.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a 
                  href="mailto:editorial.office@ijspast.org" 
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  editorial.office@ijspast.org
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Double-Blind Peer Review (2+ Referees)</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns (8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 text-left">
            {navigationSections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <div className="flex items-center space-x-1.5">
                  <div className="w-1 h-3 bg-amber-400 rounded-full"></div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    {section.title}
                  </h4>
                </div>
                
                <ul className="space-y-2 text-xs text-slate-400">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        to={link.href} 
                        className="hover:text-amber-400 hover:translate-x-0.5 inline-block transition-all duration-150 py-0.5 leading-snug"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-slate-400">
              © {new Date().getFullYear()} <strong className="text-slate-300">{journalInfo.fullName}</strong>.
            </p>
            <p className="text-[10px] text-slate-500">
              Published under open-access license by Shri Ramswaroop Memorial University.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">
              <Globe className="w-3 h-3 text-emerald-400" />
              <span>CC BY 4.0 Open Access</span>
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 border border-slate-800 transition-all cursor-pointer font-medium"
              aria-label="Back to top"
            >
              <span className="text-[11px]">Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
