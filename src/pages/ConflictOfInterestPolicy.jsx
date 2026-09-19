import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Users,
  Eye,
  FileCheck,
  Scale,
  Building2,
  HelpCircle,
  ArrowUpRight,
  Sparkles,
  Lock,
  BookOpen
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
          The <span className="font-bold text-slate-800">International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)</span> is committed to ensuring the integrity, transparency, objectivity, and credibility of the scholarly publication process.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          All participants in the publication process—including authors, reviewers, editors, editorial board members, and the publisher—are expected to disclose any actual, potential, or perceived conflicts of interest that could influence, or reasonably appear to influence, their professional judgment.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'Definition of Conflict of Interest',
    icon: <HelpCircle className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          A <strong>conflict of interest (COI)</strong> exists when personal, financial, professional, institutional, or other relationships may influence—or may reasonably be perceived to influence—the preparation, review, editorial handling, or publication of a manuscript.
        </p>
        <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/70 text-xs text-amber-950">
          <strong>Key Principle:</strong> Having a conflict of interest does not automatically prevent participation in the publication process; however, all conflicts must be disclosed transparently and managed appropriately.
        </div>
      </>
    ),
  },
  {
    num: '03',
    title: 'Conflicts of Interest for Authors',
    icon: <DollarSign className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors must disclose all relationships or activities that could influence the interpretation or presentation of their research across four main categories:
        </p>
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">Financial Interests</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              Research grants, funding bodies, employment by related entities, consultancy fees, honoraria, stock ownership, patent royalties, or commercial sponsorships.
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">Professional & Institutional Interests</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              Editorial roles on competitor journals, advisory board memberships, corporate partnerships, or institutional affiliations that may benefit from the publication.
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">Personal Interests</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              Family relationships, close friendships, or active academic rivalries that could influence impartial findings.
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    num: '04',
    title: 'Standard Declaration Statement for Authors',
    icon: <FileCheck className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors must include a formal Conflict of Interest Statement in their manuscript before the References section. If no conflicts exist, the following standardized statement must be used:
        </p>
        <div className="p-4 bg-slate-900 text-amber-300 font-mono text-xs rounded-xl border border-slate-800 leading-relaxed shadow-inner">
          "Conflict of Interest: The authors declare that they have no known financial, professional, institutional, or personal conflicts of interest that could have influenced the work reported in this paper."
        </div>
      </>
    ),
  },
  {
    num: '05',
    title: 'Responsibilities of Reviewers',
    icon: <Eye className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Reviewers must disclose any potential conflicts before accepting an invitation to review and should decline if they have:
        </p>
        <div className="space-y-2">
          {[
            'Financial interests related directly to the manuscript topic.',
            'Current or recent (within 3 years) collaboration with any author.',
            'Employment at the same institution as the authors.',
            'Personal relationships or active academic disputes.',
            'Any situation that could reasonably compromise impartial review.',
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
    num: '06',
    title: 'Responsibilities of Editors & Board Members',
    icon: <Scale className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Editors and Board Members must recuse themselves from manuscript handling if conflicts exist:
        </p>
        <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <p>
            • <strong>Recusal Protocol:</strong> When an editor has a conflict, the manuscript is reassigned immediately to another qualified editor.
          </p>
          <p>
            • <strong>Board Member Submissions:</strong> When Editorial Board members submit their own research to IJSPAST, they are excluded completely from the editorial review and decision process. Their submissions undergo standard double-blind review managed independently.
          </p>
        </div>
      </>
    ),
  },
  {
    num: '07',
    title: 'Management of Disclosed Conflicts',
    icon: <Users className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          When a conflict of interest is identified, IJSPAST implements structured actions:
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Request supplementary financial or relationship disclosures.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Reassign reviewers or editors to eliminate bias.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Publish a transparent disclosure footnote alongside the article.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Reject manuscripts if unresolvable conflicts compromise scientific validity.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: '08',
    title: 'Funding Disclosure & Undisclosed Conflicts',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors must declare all funding sources (government grants, university support, corporate sponsorship) and explain the sponsor's role in study design or analysis.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          If undisclosed conflicts are discovered post-publication, the Editorial Board investigates under COPE guidelines and may publish corrections, expressions of concern, or retractions.
        </p>
      </>
    ),
  },
];

export default function ConflictOfInterestPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        title="Conflict of Interest Policy"
        subtitle="Ensuring impartiality, transparency, and research integrity across authors, reviewers, editors, and publishers at IJSPAST."
        badge="Ethical Transparency Guidelines"
        breadcrumbs={[
          { name: 'Policies', path: '/peer-review-policy' },
          { name: 'Conflict of Interest', path: null },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0f4a85]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>COPE & ICMJE Compliant</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Safeguarding Objectivity & Scholarly Credibility
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Transparency regarding financial, personal, and professional affiliations is essential to maintaining the credibility of published research. This policy outlines mandatory disclosure workflows for all journal stakeholders.
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
                to="/editorial-policy"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
              >
                <span>Editorial Policy</span>
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
