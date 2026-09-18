import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  BookOpen,
  Scale,
  Sparkles,
  ChevronRight,
  HelpCircle,
  ExternalLink,
  Bot,
  Copy,
  Check
} from 'lucide-react';
import {
  authorGuidelinesData,
  templateSpecs,
  referencingStyleData,
  ethicsAndPoliciesData,
  submissionChecklistData,
} from '../data/journalDocData';

export default function GuidelinesModal({ isOpen, onClose, initialTab = 'guidelines' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copiedFormat, setCopiedFormat] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(key);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleDownloadDoc = () => {
    // Trigger download of Template file
    const link = document.createElement('a');
    link.href = '/13. Template.doc';
    link.download = 'IJMAR_Manuscript_Template.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-white/95 backdrop-blur-md shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f4a85] to-[#0f4a85] text-amber-400 flex items-center justify-center font-bold shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">
                Authors & Editorial Guidelines
              </h3>
              <p className="text-xs text-slate-500">
                Official Submission & Preparation Protocols (IJMAR)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 px-6 sm:px-8 overflow-x-auto shrink-0 gap-2">
          {[
            { id: 'guidelines', label: 'Preparation & Structure' },
            { id: 'template', label: 'Template & Formatting' },
            { id: 'referencing', label: 'IEEE Referencing' },
            { id: 'ethics', label: 'Ethics & AI Policy' },
            { id: 'checklist', label: 'Submission Checklist' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-all cursor-pointer ${activeTab === tab.id
                  ? 'border-blue-700 text-[#0f4a85] bg-white rounded-t-lg'
                  : 'border-transparent text-slate-600 hover:text-[#0f4a85]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm">

          {/* TAB 1: Preparation & Structure */}
          {activeTab === 'guidelines' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0f4a85] text-sm">Language & Accepted File Formats</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {authorGuidelinesData.preparation.language}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {authorGuidelinesData.preparation.formats.map((fmt, i) => (
                      <span key={i} className="text-[11px] font-semibold bg-white text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#0f4a85] text-base border-b border-slate-100 pb-2">
                  Manuscript Section Hierarchy
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {authorGuidelinesData.manuscriptStructure.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 space-y-1">
                      <div className="flex items-center space-x-2 font-bold text-[#0f4a85] text-xs">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{item.section}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-7">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Template & Formatting */}
          {activeTab === 'template' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-gradient-to-r from-[#0f4a85] to-[#0f4a85] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-white">Download Standard Manuscript Template</h4>
                  <p className="text-xs text-amber-200/90">
                    Official Microsoft Word reference document (`13. Template.doc`) with pre-set fonts and column spacing.
                  </p>
                </div>
                <button
                  onClick={handleDownloadDoc}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-sm shrink-0 flex items-center space-x-2 cursor-pointer transition-all"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Download .DOC Template</span>
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#0f4a85] text-base border-b border-slate-100 pb-2">
                  Typography & Spacing Specifications (Template Rules)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Manuscript Element</th>
                        <th className="p-3">Font & Size</th>
                        <th className="p-3">Spacing Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {templateSpecs.fontHierarchy.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3 font-semibold text-[#0f4a85]">{row.element}</td>
                          <td className="p-3 font-mono text-slate-600">{row.font}</td>
                          <td className="p-3 text-slate-500">{row.spacing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: IEEE Referencing */}
          {activeTab === 'referencing' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <h4 className="font-bold text-[#0f4a85] text-base">
                  {referencingStyleData.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {referencingStyleData.desc}
                </p>
              </div>

              <div className="space-y-4">
                {referencingStyleData.examples.map((eg, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {eg.type}
                      </span>
                      <button
                        onClick={() => handleCopy(eg.format, `eg-${idx}`)}
                        className="text-[11px] font-semibold text-slate-500 hover:text-blue-700 flex items-center space-x-1 cursor-pointer"
                      >
                        {copiedFormat === `eg-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedFormat === `eg-${idx}` ? 'Copied' : 'Copy Format'}</span>
                      </button>
                    </div>
                    <code className="block text-xs font-mono bg-white p-2.5 rounded-lg border border-slate-200 text-slate-800">
                      {eg.format}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Ethics & AI Policy */}
          {activeTab === 'ethics' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {ethicsAndPoliciesData.map((pol, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                      {idx === 2 ? <Bot className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                    </div>
                    <h4 className="font-bold text-[#0f4a85] text-sm">
                      {pol.title}
                    </h4>
                  </div>
                  <div className="space-y-2 pl-8">
                    {pol.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: Submission Checklist */}
          {activeTab === 'checklist' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0" />
                <p className="text-xs text-amber-900 font-medium">
                  Please verify every single checklist requirement prior to submitting your manuscript to ensure immediate review dispatch without administrative rejection.
                </p>
              </div>

              <div className="space-y-2.5">
                {submissionChecklistData.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 border-t border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <span className="text-xs text-slate-500 font-medium">
            IJMAR Editorial Office • Double-Blind Review
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0f4a85] text-white hover:bg-blue-800 transition-colors cursor-pointer"
          >
            Close Guidelines
          </button>
        </div>

      </div>
    </div>
  );
}
