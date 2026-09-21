import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  AlertTriangle,
  RefreshCw,
  FileText,
  Scale,
  CheckCircle2,
  FileWarning,
  Eye,
  Search,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
  Clock,
  History,
  Mail,
  ShieldCheck
} from 'lucide-react';
import PageHero from '../components/PageHero';

const sections = [
  {
    num: '01',
    title: 'Policy Statement',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed">
          The <span className="font-bold text-slate-800">International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)</span> is dedicated to preserving the accuracy, integrity, transparency, and reliability of the scholarly record.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          When errors or ethical concerns are identified in published articles, the journal will take appropriate corrective action in a timely, transparent, and fair manner following <span className="font-semibold text-slate-800">COPE (Committee on Publication Ethics)</span> guidelines.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'Purpose & Objectives',
    icon: <HelpCircle className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          This policy establishes formal procedures for:
        </p>
        <div className="space-y-2 text-xs text-slate-700">
          {[
            'Correcting unintentional author or publisher errors.',
            'Addressing substantiated allegations of research or publication misconduct.',
            'Retracting unreliable or ethically compromised publications.',
            'Informing readers of significant post-publication notices.',
            'Preserving the permanent historical record of scientific discovery.'
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="leading-relaxed">{pt}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '03',
    title: 'Guiding Principles',
    icon: <Scale className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { title: 'Fair & Impartial Investigations', desc: 'Objective evidence-based assessments with no bias.' },
            { title: 'Transparency in Editorial Rulings', desc: 'Public notices detailing exact reasons for action.' },
            { title: 'Due Process for Authors', desc: 'Reasonable opportunity for all authors to respond.' },
            { title: 'Timely Scholarly Correction', desc: 'Expedited processing of verified errata and notices.' },
            { title: 'Permanent Preservation', desc: 'Maintaining permanent Version of Record integrity.' },
            { title: 'COPE Ethics Alignment', desc: 'Full adherence to international publishing standards.' }
          ].map((item, i) => (
            <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="font-bold text-xs text-[#0f4a85] mb-0.5">{item.title}</div>
              <div className="text-[11px] text-slate-600 leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '04',
    title: 'Types of Post-Publication Notices',
    icon: <FileText className="w-5 h-5" />,
    color: 'amber',
    content: (
      <div className="space-y-3">
        <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200">
          <div className="font-bold text-xs text-blue-900 mb-1 flex items-center justify-between">
            <span>4.1 Correction / Erratum (Publisher Error)</span>
            <span className="text-[10px] font-mono uppercase bg-blue-200/80 px-2 py-0.5 rounded text-blue-950 font-bold">Erratum</span>
          </div>
          <p className="text-xs text-blue-800 leading-relaxed">
            Issued when the journal introduces an inadvertent error during copyediting, typesetting, layout, or indexing (e.g., misprinted numbers, misspelled author names, formatting flaws).
          </p>
        </div>

        <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200">
          <div className="font-bold text-xs text-amber-900 mb-1 flex items-center justify-between">
            <span>4.2 Author Correction / Corrigendum</span>
            <span className="text-[10px] font-mono uppercase bg-amber-200/80 px-2 py-0.5 rounded text-amber-950 font-bold">Corrigendum</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed">
            Issued when authors identify significant unintentional errors that do not compromise the overall scientific conclusions (e.g., equation typos, figure label errors, missing acknowledgments).
          </p>
        </div>

        <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200">
          <div className="font-bold text-xs text-purple-900 mb-1 flex items-center justify-between">
            <span>4.3 Expression of Concern</span>
            <span className="text-[10px] font-mono uppercase bg-purple-200/80 px-2 py-0.5 rounded text-purple-950 font-bold">Notice</span>
          </div>
          <p className="text-xs text-purple-800 leading-relaxed">
            Published when credible evidence of serious concerns exists (e.g., ongoing institutional investigation, suspected manipulation), but conclusive proof is pending.
          </p>
        </div>

        <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200">
          <div className="font-bold text-xs text-rose-900 mb-1 flex items-center justify-between">
            <span>4.4 Retraction (Unreliable / Unethical)</span>
            <span className="text-[10px] font-mono uppercase bg-rose-200/80 px-2 py-0.5 rounded text-rose-950 font-bold">Retraction</span>
          </div>
          <p className="text-xs text-rose-800 leading-relaxed">
            Issued when a published paper is fundamentally unreliable due to major error, data falsification, fabrication, extensive plagiarism, or severe misconduct.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: '05',
    title: 'Grounds for Retraction',
    icon: <ShieldAlert className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          In accordance with COPE Retraction Guidelines, an article may be retracted for:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          {[
            'Plagiarism & substantial text recycling',
            'Data fabrication or deliberate falsification',
            'Duplicate / redundant prior publication',
            'Inappropriate image manipulation',
            'Fatal methodological or calculation errors',
            'Unethical research or lack of IRB approval',
            'Copyright or intellectual property infringement',
            'Fraudulent authorship or fake peer review',
            'Major undisclosed conflicts compromising validity',
            'Legal or court-mandated directives'
          ].map((g, i) => (
            <div key={i} className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
              <span className="font-medium text-slate-800">{g}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '06',
    title: 'Correction vs. Retraction Rationale',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          A <strong>Correction (Corrigendum/Erratum)</strong> is preferred over retraction when:
        </p>
        <div className="space-y-2 text-xs text-slate-700">
          {[
            'The core scientific findings and conclusions remain completely valid.',
            'Errors are honest, unintentional, and isolated.',
            'Minor data or graphical inaccuracies can be rectified with replacement panels.',
            'Omitted funding or disclosure statements require formal updating.',
            'Authors immediately cooperate to submit validated corrections.'
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '07',
    title: 'Misconduct Investigation Procedure',
    icon: <Search className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          When post-publication concerns or whistleblower complaints are raised:
        </p>
        <ol className="space-y-2 text-xs text-slate-700 list-decimal list-inside">
          <li className="p-2 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-900">Receipt & Triage:</span> Editorial Office confirms receipt and assesses prima facie evidence.
          </li>
          <li className="p-2 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-900">Author Inquiry:</span> Corresponding author is contacted confidentially with specific claims.
          </li>
          <li className="p-2 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-900">Expert Review:</span> Independent subject experts or editorial board panels examine raw data.
          </li>
          <li className="p-2 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-900">Institutional Contact:</span> If necessary, host university or research body integrity committees are notified.
          </li>
          <li className="p-2 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-900">Final Editorial Decision:</span> Editor-in-Chief issues a formal ruling and transparent public notice.
          </li>
        </ol>
      </>
    ),
  },
  {
    num: '08',
    title: 'Author Response & Due Process',
    icon: <MessageSquare className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors are always afforded fair due process and a defined timeframe (normally 30 calendar days) to provide original data, explanations, and supporting records.
        </p>
        <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 text-xs text-amber-950">
          <strong>Non-Responsiveness:</strong> If authors fail to respond after reasonable reminders, the journal reserves the right to proceed with appropriate corrective actions based on verified evidence.
        </div>
      </>
    ),
  },
  {
    num: '09',
    title: 'Retraction Notice Protocol',
    icon: <FileWarning className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          When a retraction is executed:
        </p>
        <ul className="space-y-2 text-xs text-slate-700">
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>The original PDF is retained but watermarked with <strong>"RETRACTED"</strong> on every page.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>A dedicated Retraction Notice with a new Crossref DOI is published immediately.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>The notice states who initiated the retraction and details the underlying rationale.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Bidirectional electronic links connect the original article and the retraction notice.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: '10',
    title: 'Version of Record (VoR) Integrity',
    icon: <History className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          To preserve scholarly transparency, published articles are never silently altered or removed from the web:
        </p>
        <div className="p-3.5 bg-slate-900 text-slate-200 rounded-xl text-xs space-y-2 font-mono">
          <p className="text-amber-300 font-bold">// Archival Integrity Policy</p>
          <p>• All versions and post-publication notices remain permanent.</p>
          <p>• Errata and Corrigenda link directly to the Version of Record.</p>
          <p>• Readers and indexing engines can trace the complete publication history.</p>
        </div>
      </>
    ),
  },
  {
    num: '11',
    title: 'Indexing & Crossref Metadata Updates',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Upon publishing any erratum or retraction notice, IJSPAST immediately updates bibliographic metadata with Crossref (Crossmark), Google Scholar, DOAJ, and digital indexing databases so that researchers worldwide are alerted to the updated article status.
        </p>
      </>
    ),
  },
  {
    num: '12',
    title: 'Appeals & Misconduct Reporting',
    icon: <Scale className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors who disagree with a retraction or correction ruling may submit a formal appeal within <strong>30 days</strong> of decision notification.
        </p>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
          <p><strong>Appeals must include:</strong> Full manuscript reference, clear technical rebuttal, and documented new evidence.</p>
          <p>Appeals are reviewed by an independent panel of the Editorial Board not involved in the original ruling. The panel's outcome is final.</p>
        </div>
      </>
    ),
  },
];

export default function RetractionCorrectionPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        title="Retraction and Correction Policy"
        subtitle="Transparent procedures for errata, corrigenda, expressions of concern, and retractions to maintain research integrity at IJSPAST."
        badge="Post-Publication Integrity"
        breadcrumbs={[
          { name: 'Policies', path: '/peer-review-policy' },
          { name: 'Retraction & Correction', path: null },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0f4a85]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>COPE Retraction Guidelines Compliant</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Maintaining the Integrity of the Scholarly Record
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                When scientific errors or ethical violations occur, prompt and transparent corrections are vital to maintaining academic credibility. IJSPAST adheres strictly to COPE standards for errata, author corrigenda, and formal retractions.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <Link
                to="/publication-ethics-policy"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-[#0f4a85] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
              >
                <span>Publication Ethics</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/ethics-policy"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
              >
                <span>Plagiarism Policy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                      sec.color === 'amber'
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : 'bg-blue-100 text-blue-900 border border-blue-200'
                    }`}
                  >
                    {sec.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Section {sec.num}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {sec.title}
                    </h3>
                  </div>
                </div>
                <div className="pt-2">{sec.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Whistleblower & Misconduct Report Card */}
        <div className="mt-12 bg-gradient-to-r from-[#0f4a85] to-[#09325c] text-white rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-lg font-bold text-white">Need to report a post-publication error or ethics concern?</h3>
            <p className="text-xs text-slate-200 max-w-xl">
              All inquiries, correction requests, and confidential reports of publication misconduct are treated with strict impartiality and urgency by the Editorial Integrity Committee.
            </p>
          </div>
          <a
            href="mailto:editorial.office@ijspast.org"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-all shadow-sm shrink-0"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Contact Integrity Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
