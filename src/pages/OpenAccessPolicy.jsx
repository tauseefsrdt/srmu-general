import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Unlock,
  BookOpen,
  Share2,
  Database,
  FileCheck,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Search,
  Zap
} from 'lucide-react';
import PageHero from '../components/PageHero';

const sections = [
  {
    num: '01',
    title: 'Policy Statement',
    icon: <Globe className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed">
          <span className="font-bold text-slate-800">International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)</span> is committed to the free and unrestricted dissemination of scholarly research.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          The journal operates under an <strong>Open Access publishing model</strong>, ensuring that all published articles are freely available online immediately upon publication without subscription, registration, or paywall barriers.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'Open Access Principles',
    icon: <Unlock className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          IJSPAST strictly adheres to core international Open Access principles:
        </p>
        <div className="space-y-2">
          {[
            'Immediate and permanent free access to all published full-text articles.',
            'No paywalls, subscriptions, or reader registration required.',
            'Equal access to research for scholars and institutions worldwide.',
            'Promotion of global knowledge sharing and multidisciplinary collaboration.',
            'Maximizing research visibility, discoverability, and citation impact.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '03',
    title: 'Reader & User Rights',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          All users across academia, industry, and the general public may access published content without charge and may:
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800 mb-3">
          <div className="p-2.5 bg-blue-50/70 rounded-lg border border-blue-100 flex items-center space-x-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Read Full-Text PDFs</span>
          </div>
          <div className="p-2.5 bg-blue-50/70 rounded-lg border border-blue-100 flex items-center space-x-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Download & Save Papers</span>
          </div>
          <div className="p-2.5 bg-blue-50/70 rounded-lg border border-blue-100 flex items-center space-x-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Print Copies for Study</span>
          </div>
          <div className="p-2.5 bg-blue-50/70 rounded-lg border border-blue-100 flex items-center space-x-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Share Direct Paper Links</span>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          Any reuse must properly cite and credit the original authors and IJSPAST as the original source of publication.
        </p>
      </>
    ),
  },
  {
    num: '04',
    title: 'Author Rights & Repository Archiving',
    icon: <Database className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors retain expansive rights over their published scholarship, including:
        </p>
        <div className="space-y-2">
          {[
            'Depositing published versions in institutional and university repositories.',
            'Sharing published PDFs on personal academic websites and profiles.',
            'Including articles in doctoral theses, dissertations, and books with citation.',
            'Using articles for classroom teaching and institutional instructional materials.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '05',
    title: 'Licensing & Copyright Terms',
    icon: <FileCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          All articles published in IJSPAST are distributed under Open Access licensing (such as <strong>Creative Commons Attribution 4.0 International - CC BY 4.0</strong>).
        </p>
        <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200/80 text-xs text-blue-950 leading-relaxed">
          <strong>CC BY 4.0 Terms:</strong> Permits anyone to copy, distribute, transmit, and adapt the work, provided the original work is properly cited and attributed to the authors and IJSPAST.
        </div>
      </>
    ),
  },
  {
    num: '06',
    title: 'Article Processing Charges (APCs)',
    icon: <Award className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          To sustain continuous online hosting, DOI assignment, and rigorous editorial production, publication charges may apply:
        </p>
        <div className="space-y-2 text-xs text-slate-700">
          <p>• All charges, payment methods, and discount policies are published transparently.</p>
          <p>• <strong>Zero Hidden Fees:</strong> No submission charges or hidden processing fees are ever imposed.</p>
          <p>• <strong>Waiver Policy:</strong> Editorial decisions are completely independent of authors' ability to pay APCs.</p>
        </div>
      </>
    ),
  },
  {
    num: '07',
    title: 'Discoverability & Digital Preservation',
    icon: <Search className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          IJSPAST ensures long-term preservation and maximum global reach by:
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Assigning permanent persistent identifiers (DOIs) and standardized metadata.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Indexing in international academic directories and Google Scholar.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Maintaining permanent server archives and institutional backups.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: '08',
    title: 'Uncompromised Editorial Quality',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Open Access does not alter the journal's rigorous editorial standards:
        </p>
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
          Every submission undergoes identical double-blind peer review and strict editorial screening regardless of the author's nationality, institution, or funding status. Editorial acceptance is governed 100% by scientific quality.
        </div>
      </>
    ),
  },
];

export default function OpenAccessPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        title="Open Access Policy"
        subtitle="Immediate, permanent, and unrestricted global access to high-quality peer-reviewed research across science, engineering, and emerging technologies."
        badge="Unrestricted Scholarly Dissemination"
        breadcrumbs={[
          { name: 'Policies', path: '/peer-review-policy' },
          { name: 'Open Access Policy', path: null },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0f4a85]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Global Open Science Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Empowering Researchers Worldwide with Immediate Open Access
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                IJSPAST believes that unrestricted access to knowledge accelerates technological discovery, fuels innovation, and empowers global scientific communities. All articles are published under open access licensing.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <Link
                to="/publication-details"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-[#0f4a85] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
              >
                <span>Journal Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/papers"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
              >
                <span>Browse Articles</span>
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
      </div>
    </div>
  );
}
