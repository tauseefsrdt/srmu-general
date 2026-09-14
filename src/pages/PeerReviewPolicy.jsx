import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Eye,
  UserCheck,
  FileSearch,
  CheckCircle2,
  AlertTriangle,
  Clock,
  MessageSquare,
  Lock,
  Scale,
  RefreshCw,
  Star,
  Globe,
  ArrowUpRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const sections = [
  {
    num: '01',
    title: 'Purpose',
    icon: <Star className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed">
          International Journal of Scientific Progress in Applied Science and Technology (IJSPAST) is committed to publishing high-quality, original, and scientifically sound research. The peer review process is a cornerstone of the journal's editorial system and is designed to ensure the quality, originality, validity, and significance of all published manuscripts.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          The journal follows a <span className="font-semibold text-[#0f4a85]">fair, transparent, confidential, and unbiased</span> peer review process in accordance with internationally accepted standards of publication ethics.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'Peer Review Model',
    icon: <Eye className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          IJSPAST follows a <span className="font-bold text-[#0f4a85]">Double-Blind Peer Review</span> process. Under this model:
        </p>
        <div className="space-y-2.5">
          {[
            'The identities of the authors are concealed from reviewers.',
            'The identities of reviewers are concealed from authors.',
            "Reviewers evaluate manuscripts solely on academic merit, originality, technical quality, clarity, and relevance to the journal's scope.",
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          This approach helps minimize bias related to authors' identity, institution, nationality, gender, or reputation.
        </p>
      </>
    ),
  },
  {
    num: '03',
    title: 'Initial Editorial Screening',
    icon: <FileSearch className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          After submission, each manuscript undergoes an initial editorial assessment to determine whether it:
        </p>
        <div className="space-y-2.5">
          {[
            'Falls within the scope of IJSPAST.',
            'Complies with the Author Guidelines.',
            'Meets basic standards of scientific quality.',
            'Is written in acceptable English.',
            'Satisfies publication ethics requirements.',
            'Passes plagiarism screening.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          Manuscripts that do not satisfy these requirements may be returned to the authors for correction or rejected before peer review.
        </p>
      </>
    ),
  },
  {
    num: '04',
    title: 'Assignment to Reviewers',
    icon: <UserCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Manuscripts passing the initial screening are assigned by the Editor-in-Chief or a designated Associate Editor to <span className="font-semibold text-[#0f4a85]">at least two independent expert reviewers</span> with relevant subject expertise. Reviewers are selected based on:
        </p>
        <div className="space-y-2.5">
          {[
            'Academic qualifications.',
            'Research expertise.',
            'Publication record.',
            'Previous reviewing performance.',
            'Absence of conflicts of interest.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          The journal may invite additional reviewers if further expert evaluation is required.
        </p>
      </>
    ),
  },
  {
    num: '05',
    title: 'Evaluation Criteria',
    icon: <Star className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Reviewers are requested to evaluate manuscripts based on:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'Originality and novelty.',
            'Scientific and technical quality.',
            'Research methodology.',
            'Accuracy of data analysis.',
            'Validity of conclusions.',
            'Significance of findings.',
            'Organization and clarity.',
            'Quality of figures, tables, and references.',
            'Ethical compliance.',
            'Overall contribution to science and engineering.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-xs text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          Constructive recommendations for improvement are encouraged.
        </p>
      </>
    ),
  },
  {
    num: '06',
    title: 'Reviewer Recommendations',
    icon: <MessageSquare className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Reviewers may recommend one of the following editorial decisions:
        </p>
        <div className="space-y-2.5">
          {[
            { label: 'Accept without revision.', color: 'emerald' },
            { label: 'Accept with minor revisions.', color: 'blue' },
            { label: 'Major revisions required.', color: 'amber' },
            { label: 'Reject.', color: 'red' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl border ${
              item.color === 'emerald' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' :
              item.color === 'blue' ? 'bg-blue-50 border-blue-200 text-blue-800' :
              item.color === 'amber' ? 'bg-amber-50 border-amber-200 text-amber-800' :
              'bg-red-50 border-red-200 text-red-800'
            }`}>
              <span className="text-xs font-bold w-4 text-center">{i + 1}</span>
              <span className="text-xs font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          Reviewer recommendations are advisory. The final decision rests with the Editor-in-Chief.
        </p>
      </>
    ),
  },
  {
    num: '07',
    title: 'Editorial Decision',
    icon: <Scale className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          After considering the reviewers' reports, the Editor-in-Chief may decide to:
        </p>
        <div className="space-y-2.5">
          {[
            'Accept the manuscript.',
            'Request minor revisions.',
            'Request major revisions.',
            'Reject the manuscript.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          Where reviewer opinions differ substantially, the editor may seek an additional independent review before reaching a final decision.
        </p>
      </>
    ),
  },
  {
    num: '08',
    title: 'Revision Process',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Authors receiving revision requests should:
        </p>
        <div className="space-y-2.5">
          {[
            'Address every reviewer comment individually.',
            'Submit a revised manuscript with changes clearly indicated.',
            'Provide a detailed response explaining how each comment has been addressed.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          Revised manuscripts may be returned to the original reviewers for further evaluation when appropriate.
        </p>
      </>
    ),
  },
  {
    num: '09',
    title: 'Confidentiality',
    icon: <Lock className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          All submitted manuscripts are confidential documents. Editors and reviewers shall:
        </p>
        <div className="space-y-2.5">
          {[
            'Treat manuscripts as privileged information.',
            'Not disclose manuscript content to unauthorized persons.',
            'Not use unpublished material for personal research or commercial benefit.',
            'Maintain confidentiality before, during, and after the review process.',
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
    num: '10',
    title: 'Conflict of Interest',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Reviewers and editors must disclose any actual or potential conflicts of interest, including:
        </p>
        <div className="space-y-2.5">
          {[
            'Personal relationships with the authors.',
            'Financial interests.',
            'Institutional affiliations.',
            'Collaborative relationships.',
            'Academic competition.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          Individuals with conflicts of interest shall decline the review assignment or recuse themselves from editorial handling.
        </p>
      </>
    ),
  },
  {
    num: '11',
    title: 'Responsibilities of Reviewers',
    icon: <UserCheck className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Reviewers are expected to:
        </p>
        <div className="space-y-2.5">
          {[
            'Provide objective, constructive, and evidence-based evaluations.',
            'Submit reviews within the agreed timeframe.',
            'Identify relevant published work not cited by the authors.',
            'Report suspected plagiarism, duplicate publication, data fabrication, or other ethical concerns.',
            'Maintain confidentiality throughout the review process.',
            'Avoid derogatory or personal comments.',
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
    num: '12',
    title: 'Responsibilities of Editors',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Editors are responsible for:
        </p>
        <div className="space-y-2.5">
          {[
            'Selecting qualified reviewers.',
            'Ensuring an impartial review process.',
            'Maintaining confidentiality.',
            'Preventing conflicts of interest.',
            'Making decisions based solely on scholarly merit.',
            'Handling ethical concerns fairly and promptly.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          Editorial decisions are independent of commercial, institutional, or personal considerations.
        </p>
      </>
    ),
  },
  {
    num: '13',
    title: 'Ethical Standards',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          IJSPAST does not tolerate:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'Plagiarism.',
            'Duplicate publication.',
            'Data fabrication or falsification.',
            'Citation manipulation.',
            'Fake peer review.',
            'Undisclosed conflicts of interest.',
            'Inappropriate authorship practices.',
          ].map((pt, i) => (
            <div key={i} className="flex items-center space-x-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="text-xs font-medium text-red-800">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          Suspected ethical violations will be investigated in accordance with the journal's Publication Ethics Policy.
        </p>
      </>
    ),
  },
];

const timelineRows = [
  { stage: 'Initial Editorial Screening', target: '5–7 days' },
  { stage: 'Reviewer Assignment', target: '3–5 days' },
  { stage: 'Peer Review', target: '2–4 weeks' },
  { stage: 'Author Revision', target: '1–3 weeks' },
  { stage: 'Final Editorial Decision', target: '1 week after receipt' },
];

export default function PeerReviewPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      <PageHero
        title="Peer Review Policy"
        subtitle="IJSPAST's complete peer review framework — covering the double-blind model, editorial workflow, reviewer responsibilities, ethical standards, and timelines."
        badge="Editorial Standards & Policy"
        breadcrumbs={[
          { name: 'Peer Review Policy' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-left">

        {/* Policy Sections */}
        {sections.map((sec) => (
          <div
            key={sec.num}
            className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden"
          >
            {/* Top accent bar */}
            <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${
              sec.color === 'amber'
                ? 'bg-gradient-to-r from-amber-400 to-amber-600'
                : 'bg-gradient-to-r from-blue-600 to-[#0f4a85]'
            }`} />

            <div className="flex items-center space-x-3">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${
                sec.color === 'amber'
                  ? 'bg-amber-50 border-amber-200 text-amber-700'
                  : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}>
                {sec.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 block">SECTION {sec.num}</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">{sec.title}</h3>
              </div>
            </div>

            <div className="pl-0 sm:pl-14">
              {sec.content}
            </div>
          </div>
        ))}

        {/* Section 14 — Review Timeline */}
        <div className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
          <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-blue-600 to-[#0f4a85]" />

          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 block">SECTION 14</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">Review Timeline</h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed pl-0 sm:pl-14">
            The journal aims to complete the review process as efficiently as possible. Typical timelines are:
          </p>

          <div className="pl-0 sm:pl-14 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0f4a85] text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl text-xs font-bold uppercase tracking-wider">Stage</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl text-xs font-bold uppercase tracking-wider">Target Time</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-xs font-medium text-slate-700 border-b border-slate-100">{row.stage}</td>
                    <td className="px-4 py-3 text-xs font-bold text-[#0f4a85] border-b border-slate-100">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-400 italic mt-3">
              These timelines are indicative and may vary depending on reviewer availability and manuscript complexity.
            </p>
          </div>
        </div>

        {/* Section 15 — Appeals */}
        <div className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-amber-400 to-amber-600" />
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 block">SECTION 15</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">Appeals</h3>
            </div>
          </div>
          <div className="pl-0 sm:pl-14 space-y-3">
            <p className="text-sm text-slate-600 leading-relaxed">
              Authors who disagree with an editorial decision may submit a written appeal to the Editor-in-Chief <span className="font-semibold text-[#0f4a85]">within 30 days</span> of the decision. Appeals should include:
            </p>
            <div className="space-y-2.5">
              {[
                'The manuscript reference number.',
                'A detailed justification.',
                'Supporting evidence, where applicable.',
              ].map((pt, i) => (
                <div key={i} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{pt}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic">
              The Editorial Board will review the appeal, and its decision will be final.
            </p>
          </div>
        </div>

        {/* Section 16 — Post-Publication Review */}
        <div className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-blue-600 to-[#0f4a85]" />
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 block">SECTION 16</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">Post-Publication Review</h3>
            </div>
          </div>
          <div className="pl-0 sm:pl-14 space-y-3">
            <p className="text-sm text-slate-600 leading-relaxed">
              If credible concerns arise after publication regarding the validity, ethics, or integrity of a published article, IJSPAST may initiate a post-publication review. Depending on the outcome, the journal may issue:
            </p>
            <div className="space-y-2">
              {[
                { label: 'A Correction (Erratum or Corrigendum).', color: 'blue' },
                { label: 'An Expression of Concern.', color: 'amber' },
                { label: 'A Retraction.', color: 'red' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl border text-xs font-semibold ${
                  item.color === 'blue' ? 'bg-blue-50 border-blue-200 text-blue-800' :
                  item.color === 'amber' ? 'bg-amber-50 border-amber-200 text-amber-800' :
                  'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <span className="font-bold w-4 text-center">{i + 1}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic">
              Any such action will be taken transparently to preserve the integrity of the scholarly record.
            </p>
          </div>
        </div>

        {/* Section 17 — Transparency */}
        <div className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-amber-400 to-amber-600" />
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 block">SECTION 17</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">Transparency and Continuous Improvement</h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed pl-0 sm:pl-14">
            IJSPAST is committed to continuously improving its peer review process through periodic review of editorial policies, reviewer guidance, and ethical practices. The journal encourages constructive feedback from authors, reviewers, and readers to strengthen the quality, fairness, and efficiency of peer review.
          </p>
        </div>

        {/* CTA Strip */}
        <div className="academic-card rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0f4a85] to-[#0f4a85] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Ready to submit your research?</h4>
            <p className="text-xs text-slate-300">All submissions are processed through our rigorous double-blind peer review for rapid international publication.</p>
          </div>
          <Link
            to="/submit"
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow shrink-0 transition-all flex items-center space-x-2"
          >
            <span>Submit Manuscript</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
