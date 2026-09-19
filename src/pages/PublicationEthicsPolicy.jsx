import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Users,
  Eye,
  Bot,
  RefreshCw,
  Lock,
  FileText,
  FileCheck,
  Sparkles,
  ArrowUpRight,
  Database,
  Award
} from 'lucide-react';
import PageHero from '../components/PageHero';

const sections = [
  {
    num: '01',
    title: 'Introduction & Ethical Framework',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed">
          <span className="font-bold text-slate-800">International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)</span> is committed to maintaining the highest standards of integrity, transparency, fairness, and ethical conduct in scholarly publishing.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          The journal expects all participants—including authors, editors, reviewers, and publishers—to adhere strictly to ethical standards recommended by the <strong>Committee on Publication Ethics (COPE)</strong>, the <strong>International Committee of Medical Journal Editors (ICMJE)</strong> (where applicable), and Core Practices of scholarly publishing ethics.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'Responsibilities of Authors',
    icon: <Users className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors submitting manuscripts to IJSPAST certify compliance with key obligations:
        </p>
        <div className="space-y-2.5">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">3.1 Originality & Concurrent Submission</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              Work must be 100% original, unpublished elsewhere, and not under concurrent consideration by any other journal or conference proceedings.
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">3.2 Authorship Criteria</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              Authorship is restricted strictly to individuals who made substantial scholarly contributions to conception, experimental design, data analysis, or manuscript writing. All authors must approve the final submission.
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">3.3 Data Integrity & Retention</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              Data must be presented honestly without fabrication, falsification, or image manipulation. Raw research datasets must be retained for verification upon request.
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">3.4 Ethical Approvals</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              Studies involving human participants, animals, or sensitive datasets must document formal approval from institutional ethics committees (IRB/IEC).
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    num: '03',
    title: 'Plagiarism & Citation Integrity',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Plagiarism in any form—direct copying, self-plagiarism (text recycling), mosaic copying, or improper paraphrasing—is strictly forbidden.
        </p>
        <div className="space-y-2 mb-3">
          {[
            'All submissions are screened with advanced plagiarism software before review.',
            'Similarity index must remain strictly below 10% benchmark.',
            'Citation manipulation intended to artificially inflate citation metrics is prohibited.',
            'Proper attribution is mandatory for all referenced figures, formulas, and concepts.',
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
    num: '04',
    title: 'Responsibilities of Editors & Reviewers',
    icon: <Scale className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Editors and peer reviewers uphold fairness, objectivity, and confidentiality:
        </p>
        <div className="space-y-2 text-xs text-slate-700">
          <p>• <strong>Non-Discrimination:</strong> Evaluation is conducted without regard to nationality, ethnicity, gender, institutional prestige, or political views.</p>
          <p>• <strong>Double-Blind Confidentiality:</strong> Privileged manuscript content and referee identities remain strictly confidential.</p>
          <p>• <strong>COI Recusal:</strong> Any editor or reviewer with competing interests must decline or recuse immediately.</p>
          <p>• <strong>Prompt Review:</strong> Reviews must be constructive, evidence-based, and submitted within established timelines.</p>
        </div>
      </>
    ),
  },
  {
    num: '05',
    title: 'Artificial Intelligence (AI) Policy',
    icon: <Bot className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          In alignment with COPE guidelines on generative AI in academic publishing:
        </p>
        <div className="space-y-2">
          {[
            'AI tools (such as ChatGPT or LLMs) cannot be listed as authors or co-authors.',
            'Authors remain fully responsible and accountable for all content, accuracy, and citations.',
            'AI usage for drafting or language improvement must be declared transparently in the manuscript.',
            'AI must never replace human intellectual responsibility for research validity.',
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
    num: '06',
    title: 'Research Misconduct & Investigations',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Research misconduct encompasses data fabrication, data falsification, image manipulation, undisclosed conflicts, fake peer review, and unauthorized authorship changes.
        </p>
        <div className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-200/80 text-xs text-rose-950 leading-relaxed">
          <strong>Action on Misconduct:</strong> Allegations of misconduct are investigated impartially by the Editorial Board in strict adherence to COPE flowcharts. Findings may lead to manuscript rejection, institutional notification, or public retraction.
        </div>
      </>
    ),
  },
  {
    num: '07',
    title: 'Corrections, Retractions & Archiving',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          IJSPAST is committed to preserving the integrity of the scholarly record:
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold mb-3">
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">Errata / Corrigenda (Minor Errors)</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">Expressions of Concern</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">Formal Article Retractions</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">Permanent Archival Records</div>
        </div>
      </>
    ),
  },
  {
    num: '08',
    title: 'Complaints, Appeals & Policy Governance',
    icon: <FileCheck className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors and stakeholders may submit written complaints or appeals regarding editorial decisions to the Editor-in-Chief within 30 days. Appeals are reviewed by an independent editorial panel.
        </p>
        <p className="text-xs text-slate-500 italic">
          This Publication Ethics Policy is reviewed periodically to reflect evolving international best practices in scholarly publishing.
        </p>
      </>
    ),
  },
];

export default function PublicationEthicsPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        title="Publication Ethics Policy"
        subtitle="Comprehensive ethical standards, research integrity protocols, COPE guidelines, and author-editor responsibilities for IJSPAST."
        badge="COPE & ICMJE Research Integrity"
        breadcrumbs={[
          { name: 'Policies', path: '/peer-review-policy' },
          { name: 'Publication Ethics Policy', path: null },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0f4a85]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Ethical Publishing Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Upholding the Highest Benchmarks of Academic Integrity
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                IJSPAST is committed to zero tolerance for plagiarism, data falsification, and unethical publishing practices. All participants in the publication lifecycle must strictly observe these ethical codes.
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
