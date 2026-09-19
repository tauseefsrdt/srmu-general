import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Users,
  Bot,
  RefreshCw,
  Eye,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Lock,
  Compass,
  FileCheck
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
          <span className="font-bold text-slate-800">International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)</span> is committed to maintaining the highest standards of scholarly publishing through a transparent, impartial, ethical, and rigorous editorial process.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          The Editorial Board is responsible for ensuring that all published articles meet internationally accepted standards of scientific quality, originality, integrity, and ethical conduct. Editorial decisions are based solely on the academic merit of submitted manuscripts.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'Editorial Objectives',
    icon: <Compass className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          The editorial objectives of IJSPAST are designed to advance scientific knowledge and ethical research:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            'Publish original, high-quality research in science, engineering, and emerging technologies.',
            'Promote innovation and interdisciplinary research.',
            'Ensure fairness, transparency, and consistency throughout the editorial process.',
            'Uphold the highest standards of publication ethics.',
            'Maintain the integrity of the scholarly record.',
            'Encourage reproducible and ethically conducted research.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700 font-medium">{pt}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '03',
    title: 'Editorial Independence',
    icon: <Scale className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Editorial decisions are made with absolute independence and are never influenced by:
        </p>
        <div className="space-y-2">
          {[
            'Commercial interests or advertising revenues.',
            'Advertising or institutional sponsorship.',
            'Institutional affiliations or regional preferences.',
            'Political or religious viewpoints.',
            'Nationality, ethnicity, gender, age, or personal characteristics of the authors.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
          <p className="text-xs text-blue-900 font-semibold leading-relaxed">
            The Editor-in-Chief has full authority and final responsibility over editorial decisions and publication outcomes.
          </p>
        </div>
      </>
    ),
  },
  {
    num: '04',
    title: 'Editorial Structure',
    icon: <Users className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          The editorial management and governance of IJSPAST comprises:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { role: 'Editor-in-Chief', desc: 'Overall leadership, policy implementation, and final decision authority.' },
            { role: 'Associate Editors', desc: 'Domain-specific manuscript handling and reviewer coordination.' },
            { role: 'Editorial Board Members', desc: 'Strategic counsel, peer review guidance, and quality monitoring.' },
            { role: 'Managing Editor', desc: 'Operational workflows, scheduling, and portal management.' },
            { role: 'Editorial Office', desc: 'Author support, production coordination, and communications.' },
          ].map((item, i) => (
            <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="font-bold text-xs text-[#0f4a85] mb-1">{item.role}</div>
              <div className="text-xs text-slate-600">{item.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 italic mt-3">
          Each editor is expected to perform duties with professionalism, confidentiality, impartiality, and integrity.
        </p>
      </>
    ),
  },
  {
    num: '05',
    title: 'Scope Evaluation & Initial Screening',
    icon: <FileCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Upon submission, every manuscript undergoes an initial editorial assessment to determine whether it:
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Falls within the journal's published multidisciplinary scope.",
            'Meets minimum scientific, methodological, and technical standards.',
            'Complies with the official Author Guidelines and formatting standards.',
            'Satisfies ethical and research integrity requirements.',
            'Is written in clear, concise, and understandable academic English.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 bg-amber-50 p-3 rounded-lg border border-amber-200/60">
          <strong>Note:</strong> Manuscripts that fail to meet these initial criteria may be returned to the authors for revision or declined without external review.
        </p>
      </>
    ),
  },
  {
    num: '06',
    title: 'Quality & Plagiarism Screening',
    icon: <Eye className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Before external peer review, manuscripts are rigorously evaluated for:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-semibold mb-4">
          <div className="p-2.5 bg-blue-50 text-blue-900 rounded-lg border border-blue-100">Originality & Novelty</div>
          <div className="p-2.5 bg-amber-50 text-amber-900 rounded-lg border border-amber-100">Scientific Significance</div>
          <div className="p-2.5 bg-slate-100 text-slate-800 rounded-lg border border-slate-200">Technical Accuracy</div>
          <div className="p-2.5 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-100">Plagiarism &lt; 10%</div>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          All submissions are screened with advanced plagiarism detection software. Only manuscripts passing preliminary quality and ethical screening proceed to the double-blind review stage.
        </p>
      </>
    ),
  },
  {
    num: '07',
    title: 'Editorial Decision-Making',
    icon: <FileText className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Editorial decisions are based exclusively on academic merit, methodological rigor, reviewer evaluations, and ethical compliance. Possible decisions include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200">
            <div className="font-bold text-xs text-emerald-900">Accept</div>
            <div className="text-xs text-emerald-800 mt-0.5">The manuscript meets all journal requirements and is accepted for production.</div>
          </div>
          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200">
            <div className="font-bold text-xs text-blue-900">Minor Revision</div>
            <div className="text-xs text-blue-800 mt-0.5">Authors must make minor textual, graphical, or formatting adjustments.</div>
          </div>
          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200">
            <div className="font-bold text-xs text-amber-900">Major Revision</div>
            <div className="text-xs text-amber-800 mt-0.5">Substantial modifications, additional experiments, or extensive rewriting required.</div>
          </div>
          <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200">
            <div className="font-bold text-xs text-rose-900">Reject</div>
            <div className="text-xs text-rose-800 mt-0.5">Manuscript does not meet the journal's scientific standards or scope.</div>
          </div>
        </div>
      </>
    ),
  },
  {
    num: '08',
    title: 'Double-Blind Peer Review',
    icon: <Eye className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          IJSPAST strictly enforces a Double-Blind Peer Review process:
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start space-x-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>At least two independent reviewers evaluate each manuscript.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>Reviewer identities remain completely confidential.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>Author identities and institutional affiliations are concealed from reviewers.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>If reviewer recommendations diverge substantially, an additional independent expert review is commissioned.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: '09',
    title: 'Editorial Timeliness & Workflow Benchmarks',
    icon: <Clock className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          IJSPAST is dedicated to an expedited and transparent publication timeline:
        </p>
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0f4a85] text-white">
                <th className="py-2.5 px-4 font-semibold">Editorial Stage</th>
                <th className="py-2.5 px-4 font-semibold">Target Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-medium text-slate-800">Initial Editorial Screening</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">5–7 days</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-medium text-slate-800">Reviewer Invitation</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">3–5 days</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-medium text-slate-800">Peer Review Duration</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">2–4 weeks</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-medium text-slate-800">Editorial Decision</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">Within 1 week after reviews</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-medium text-slate-800">Online Publication After Acceptance</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">Continuous fast-track release</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    num: '10',
    title: 'Confidentiality & Conflict of Interest',
    icon: <Lock className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          All submitted manuscripts are treated as privileged, strictly confidential documents. Editors and reviewers may not share, discuss, or utilize unpublished information for personal or commercial advantage.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Editors with any potential personal, financial, or academic conflict of interest regarding a manuscript must immediately recuse themselves, allowing an alternate independent editor to oversee the evaluation.
        </p>
      </>
    ),
  },
  {
    num: '11',
    title: 'Artificial Intelligence (AI) Use in Editorial Desk',
    icon: <Bot className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Editors may utilize AI-assisted tools for administrative screening or language clarity support where appropriate, subject to strict guidelines:
        </p>
        <div className="space-y-2">
          {[
            'AI tools shall not replace independent editorial judgment.',
            'AI systems shall never make final acceptance or rejection decisions.',
            'Editors remain fully accountable for all decisions and communications.',
            'Manuscript confidentiality and data security must be maintained at all times.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '12',
    title: 'Appeals, Corrections & Retractions',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors who disagree with an editorial decision may submit a formal appeal to the Editor-in-Chief within 30 days of notification, accompanied by detailed scholarly justification.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          To preserve the permanent scholarly record, IJSPAST issues errata, corrigenda, expressions of concern, or retractions when significant errors or ethical violations are identified post-publication.
        </p>
      </>
    ),
  },
];

export default function EditorialPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        title="Editorial Policy"
        subtitle="Transparent, impartial, ethical, and rigorous editorial governance governing manuscript evaluation and publication standards at IJSPAST."
        badge="Editorial Governance & Standards"
        breadcrumbs={[
          { name: 'Policies', path: '/peer-review-policy' },
          { name: 'Editorial Policy', path: null },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Summary Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0f4a85]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Editorial Commitment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Upholding High Scientific Integrity & Fair Peer Evaluation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Editorial Policy of IJSPAST defines the duties, independence, quality standards, and timelines governing our editorial desk. Every manuscript is evaluated objectively on academic merit alone.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <Link
                to="/peer-review-policy"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-[#0f4a85] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
              >
                <span>Peer Review Policy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/conflict-of-interest-policy"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
              >
                <span>Conflict of Interest</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Policy Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
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
                </div>
                <div className="pt-2">{sec.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Desk Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0f4a85] to-[#09325c] text-white rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-lg font-bold text-white">Have questions regarding editorial procedures?</h3>
            <p className="text-xs text-slate-200 max-w-xl">
              Our editorial office and managing desk are available to assist with inquiries related to manuscript screening, review status, and appeals.
            </p>
          </div>
          <Link
            to="/editorial-borad"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-all shadow-sm shrink-0"
          >
            <span>Contact Editorial Office</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
