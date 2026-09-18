import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Copy, 
  Check, 
  Sparkles, 
  FileText, 
  Download,
  Info
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { referencingStyleData } from '../data/journalDocData';

export default function ReferencingStyle() {
  const [copiedFormat, setCopiedFormat] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(key);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* Page Hero */}
      <PageHero
        title="IEEE Referencing Style & Citation Standards"
        subtitle="Official citation rules, numbering formats, and bibliographic templates specified for IJSPAST manuscript submissions."
        badge="Standard IEEE Format"
        breadcrumbs={[
          { name: "Guidelines", path: "/guidelines" },
          { name: "IEEE Referencing Style" }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 text-left">
        
        {/* Overview Card */}
        <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Citation & Bibliography Rules</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
            {referencingStyleData.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
            {referencingStyleData.desc} In-text citations must be numbered sequentially inside square brackets, e.g., [1], [2], [3]–[5].
          </p>
        </div>

        {/* Citation Examples Grid */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85] border-b border-slate-200 pb-2">
            Reference Citation Templates & Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {referencingStyleData.examples.map((eg, idx) => (
              <div key={idx} className="academic-card p-5 rounded-2xl bg-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    {eg.type}
                  </span>
                  <button
                    onClick={() => handleCopy(eg.format, `ref-pg-${idx}`)}
                    className="text-[11px] font-semibold text-slate-500 hover:text-blue-700 flex items-center space-x-1 cursor-pointer"
                  >
                    {copiedFormat === `ref-pg-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === `ref-pg-${idx}` ? 'Copied' : 'Copy Format'}</span>
                  </button>
                </div>
                <code className="block text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 break-words">
                  {eg.format}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="text-center pt-4">
          <Link
            to="/template"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#0f4a85] hover:bg-blue-800 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>View Template Typography Specifications</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
