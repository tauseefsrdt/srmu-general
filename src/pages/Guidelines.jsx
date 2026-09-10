import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Bot,
  Copy,
  Check,
  Send,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { authorGuidelinesData, templateSpecs } from '../data/journalDocData';

export default function Guidelines() {
  const [activeTab, setActiveTab] = useState('preparation');
  const [copiedFormat, setCopiedFormat] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(key);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

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
        title="Authors & Editorial Guidelines"
        subtitle="Complete submission and preparation protocols directly sourced from official journal documentation."
        badge="Authors Guidelines for Webpage.docx"
        breadcrumbs={[
          { name: "Guidelines", path: "/guidelines" },
          { name: "Author Instructions" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 text-left">

        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b border-slate-200 bg-white p-2 rounded-2xl shadow-2xs gap-2">
          {[
            { id: 'preparation', label: '1. Preparation & Structure' },
            { id: 'template', label: '2. Template & Formatting' },
            { id: 'referencing', label: '3. IEEE Referencing' },
            { id: 'ethics', label: '4. Ethics & AI Policy' },
            { id: 'checklist', label: '5. Pre-Submission Checklist' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeTab === tab.id
                ? 'bg-[#0f4a85] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Preparation & Structure */}
        {activeTab === 'preparation' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>General Preparation Guidance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
                Manuscript Language & Accepted Formats
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
                {authorGuidelinesData.preparation.language} Authors are strongly advised to adhere strictly to the accepted file submission formats:
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {authorGuidelinesData.preparation.formats.map((fmt, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-semibold bg-blue-50/80 text-[#0f4a85] px-4 py-2 rounded-xl border border-blue-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{fmt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0f4a85] border-b border-slate-200 pb-2">
                Manuscript Section Hierarchy (Research Papers)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {authorGuidelinesData.manuscriptStructure.map((item, idx) => (
                  <div key={idx} className="academic-card p-5 rounded-2xl bg-white space-y-2">
                    <div className="flex items-center space-x-2 font-bold text-[#0f4a85] text-sm">
                      <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-xs">
                        {idx + 1}
                      </span>
                      <span>{item.section}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-8">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Template & Formatting */}
        {activeTab === 'template' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0f4a85] to-[#081627] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">Download Camera-Ready Template (.DOC)</h3>
                <p className="text-xs text-slate-700 max-w-xl">
                  Official reference document (`13. Template.doc`) containing exact font hierarchies, two-column layouts, table layouts, and IEEE reference stylings.
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

            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">
                Typography & Spacing Specifications (From Official Template)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">Element</th>
                      <th className="p-3.5">Font & Size</th>
                      <th className="p-3.5">Spacing Rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {templateSpecs.fontHierarchy.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-[#0f4a85]">{row.element}</td>
                        <td className="p-3.5 font-mono text-slate-700">{row.font}</td>
                        <td className="p-3.5 text-slate-500">{row.spacing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: IEEE Referencing */}
        {activeTab === 'referencing' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
                {authorGuidelinesData.referencingStyle.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {authorGuidelinesData.referencingStyle.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {authorGuidelinesData.referencingStyle.examples.map((eg, idx) => (
                <div key={idx} className="academic-card p-5 rounded-2xl bg-white space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      {eg.type}
                    </span>
                    <button
                      onClick={() => handleCopy(eg.format, `ref-${idx}`)}
                      className="text-[11px] font-semibold text-slate-500 hover:text-blue-700 flex items-center space-x-1 cursor-pointer"
                    >
                      {copiedFormat === `ref-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedFormat === `ref-${idx}` ? 'Copied' : 'Copy Format'}</span>
                    </button>
                  </div>
                  <code className="block text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 break-words">
                    {eg.format}
                  </code>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Ethics & AI Policy */}
        {activeTab === 'ethics' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {authorGuidelinesData.ethicsAndPolicies.map((pol, idx) => (
              <div key={idx} className="academic-card p-6 rounded-3xl bg-white space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs">
                    {idx === 2 ? <Bot className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <h4 className="font-bold text-[#0f4a85] text-base">
                    {pol.title}
                  </h4>
                </div>
                <div className="space-y-2 pl-10">
                  {pol.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Pre-Submission Checklist */}
        {activeTab === 'checklist' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex items-center space-x-4">
              <CheckCircle2 className="w-8 h-8 text-amber-600 shrink-0" />
              <p className="text-xs sm:text-sm text-amber-950 font-medium">
                Please verify every single checklist requirement prior to submitting your manuscript to ensure immediate review dispatch without administrative rejection.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {authorGuidelinesData.checklist.map((item, idx) => (
                <div key={idx} className="academic-card bg-white p-4 rounded-2xl flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <Link
                to="/submit"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Proceed to Manuscript Submission</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
