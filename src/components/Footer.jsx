import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Mail, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { journalInfo } from '../data/journalDocData';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const footerLinks = {
    about: [
      { name: "Vision & Scope", href: "/vision-scope" },
      { name: "Publication Details", href: "/publication-details" },
      { name: "Editorial Board & Patrons", href: "/patrons-advisory" },
      { name: "Double-Blind Review Model", href: "/publication-details" },
      { name: "Contact & Editorial Office", href: "/contact" }
    ],
    guidelines: [
      { name: "Author Instructions", href: "/guidelines" },
      { name: "Manuscript Structure", href: "/guidelines" },
      { name: "Camera-Ready Template (.DOC)", href: "/template" },
      { name: "IEEE Referencing Rules", href: "/referencing-style" },
      { name: "Pre-Submission Checklist", href: "/guidelines" }
    ],
    papers: [
      { name: "Current Issue (Vol. 01, 2026)", href: "/papers" },
      { name: "Special Tracks: 5G & Metamaterials", href: "/papers" },
      { name: "Journal Archives", href: "/papers" },
      { name: "Indexing & Metadata", href: "/publication-details" }
    ],
    policy: [
      { name: "Publication Ethics (COPE)", href: "/ethics-policy" },
      { name: "Plagiarism Policy (< 10%)", href: "/ethics-policy" },
      { name: "AI Tool Use Policy", href: "/ethics-policy" },
      { name: "Open Access License (CC BY 4.0)", href: "/publication-details" },
      { name: "Terms of Use & Copyright", href: "/ethics-policy" }
    ]
  };

  return (
    <footer className="bg-[#081627] text-white pt-14 pb-10 border-t-2 border-amber-500 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Bar */}
        <div className="pb-10 mb-10 border-b border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center lg:justify-start space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Subscribe to IJSPAST Research Alerts</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400">
              Receive notifications for newly published issues, special tracks, and call for papers.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Thank you! You are now subscribed to IJSPAST alerts.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full sm:w-auto items-center gap-2">
              <div className="relative flex-1 sm:w-72">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter institutional email..." 
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
              <button
                type="submit"
                className="px-4.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 btn-gold-shadow transition-all shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* 5-Column Grid with Real React Router Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 pb-10 border-b border-slate-800 text-left">
          
          {/* Column 1: Journal Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black text-lg flex items-center justify-center shadow-md">
                IJ
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  {journalInfo.acronym}
                </span>
                <span className="block text-[11px] text-amber-300/90 font-medium">
                  {journalInfo.publisher}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              {journalInfo.shortDesc}
            </p>

            <div className="space-y-1.5 pt-1.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Lucknow-Deva Road, Barabanki, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:editorial.office@ijspast.org" className="hover:text-amber-400 transition-colors">
                  editorial.office@ijspast.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Double-Blind Peer Review & COPE Guidelines</span>
              </div>
            </div>
          </div>

          {/* Column 2: About (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="flex items-center space-x-1.5">
              <div className="w-1 h-3 bg-amber-400 rounded-xs"></div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                About
              </h4>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {footerLinks.about.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.href} 
                    className="hover:text-amber-400 hover:translate-x-0.5 inline-block transition-all duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Guidelines (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="flex items-center space-x-1.5">
              <div className="w-1 h-3 bg-amber-400 rounded-xs"></div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Guidelines
              </h4>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {footerLinks.guidelines.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.href} 
                    className="hover:text-amber-400 hover:translate-x-0.5 inline-block transition-all duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Papers (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="flex items-center space-x-1.5">
              <div className="w-1 h-3 bg-amber-400 rounded-xs"></div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Papers
              </h4>
            </div>
            <ul className="space-y-1.5 text-slate-300 text-xs">
              {footerLinks.papers.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-amber-400 hover:translate-x-0.5 inline-block transition-all duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Policy (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="flex items-center space-x-1.5">
              <div className="w-1 h-3 bg-amber-400 rounded-xs"></div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Policy & Terms
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerLinks.policy.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.href} 
                    className="hover:text-amber-400 hover:translate-x-0.5 inline-block transition-all duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <div>
            <span>© {new Date().getFullYear()} <strong>{journalInfo.fullName}</strong>. Published by Shri Ramswaroop Memorial University.</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-[10px] text-slate-500">
              CC BY 4.0 Open Access Dissemination
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 transition-colors text-white border border-slate-700 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
