import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Send,
  HelpCircle,
  Table
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { templateSpecs } from '../data/journalDocData';

export default function Template() {
  const handleDownloadDoc = () => {
    const link = document.createElement('a');
    link.href = '/13. Template.doc';
    link.download = 'IJSPAST_Manuscript_Template.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* Page Hero */}
      <PageHero
        title="Manuscript Camera-Ready Template (.DOC)"
        subtitle="Official Microsoft Word formatting template (`13. Template.doc`) with exact font hierarchies, two-column column rules, and figure/table guidelines."
        badge="13. Template.doc"
        breadcrumbs={[
          { name: "Guidelines", path: "/guidelines" },
          { name: "Manuscript Template" }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 text-left">
        
        {/* Download Callout Card */}
        <div className="academic-card p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0f3b6c] via-[#0b284c] to-[#081627] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Official Camera-Ready Reference File
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Download Standard .DOC Template</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Use this pre-formatted Microsoft Word file to draft your camera-ready manuscript with exact typography styles and margins.
            </p>
          </div>
          <button
            onClick={handleDownloadDoc}
            className="px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow shrink-0 flex items-center space-x-2 cursor-pointer transition-all"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>Download .DOC Template</span>
          </button>
        </div>

        {/* Font & Spacing Specifications Table */}
        <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#0f3b6c]">
              Typography & Spacing Specifications (From 13. Template.doc)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Exact font sizes, element typefaces, and paragraph spacing rules specified for camera-ready submission.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Manuscript Element</th>
                  <th className="p-3.5">Font & Size</th>
                  <th className="p-3.5">Spacing Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {templateSpecs.fontHierarchy.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-bold text-[#0f3b6c]">{row.element}</td>
                    <td className="p-3.5 font-mono text-slate-700">{row.font}</td>
                    <td className="p-3.5 text-slate-500">{row.spacing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <Link
            to="/submit"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span>Ready? Submit Manuscript Online</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
