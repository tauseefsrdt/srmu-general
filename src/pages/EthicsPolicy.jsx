import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Bot,
  CheckCircle2,
  Scale,
  AlertTriangle,
  FileSearch,
  UserCheck,
  BookOpen,
  RefreshCw,
  ArrowUpRight,
  Lock,
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
          <span className="font-bold text-slate-800">International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)</span> is committed to maintaining the highest standards of academic integrity and publication ethics. The journal publishes only original research that has not been plagiarized, fabricated, falsified, or previously published without proper acknowledgment.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          IJSPAST follows internationally accepted publication ethics and editorial best practices. All submitted manuscripts are screened for plagiarism before they are considered for peer review. Suspected cases of plagiarism are handled in accordance with internationally recognized publication ethics guidelines.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'Definition of Plagiarism',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Plagiarism is the presentation of another person's ideas, words, figures, tables, data, algorithms, software, or research findings as one's own without proper acknowledgment. It includes, but is not limited to:
        </p>
        <div className="space-y-2.5">
          {[
            'Copying text without appropriate citation.',
            "Paraphrasing another author's work without proper attribution.",
            'Copying figures, tables, images, or illustrations without permission or citation.',
            "Using another researcher's ideas or methodologies without acknowledgment.",
            "Submitting another person's work under one's own name.",
            'Translation plagiarism (translating published work without attribution).',
            'Mosaic plagiarism (combining copied passages from multiple sources).',
            'Self-plagiarism or text recycling without proper citation.',
            'Duplicate or redundant publication.',
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
    title: 'Originality Requirement',
    icon: <FileSearch className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Authors submitting manuscripts to IJSPAST certify that:
        </p>
        <div className="space-y-2.5">
          {[
            'The manuscript is original.',
            'The work has not been published previously.',
            'The manuscript is not under consideration by another journal.',
            'All borrowed material has been properly cited.',
            'Necessary permissions have been obtained for copyrighted material.',
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
    title: 'Similarity Screening',
    icon: <FileSearch className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Every submitted manuscript is screened using recognized plagiarism detection software such as:
        </p>
        <div className="space-y-2 mb-4">
          {['iThenticate', 'Turnitin', 'Crossref Similarity Check (where available)'].map((tool, i) => (
            <div key={i} className="flex items-center space-x-2.5 px-3 py-2 bg-blue-50 border border-blue-200 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-[#0f4a85] shrink-0" />
              <span className="text-sm font-semibold text-[#0f4a85]">{tool}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          The similarity report is evaluated by the editorial office before peer review. Editorial decisions are based on both the overall similarity score and the nature of the overlapping content rather than on the percentage alone. Excluded sections may include references, properly quoted material, and commonly used methodological descriptions.
        </p>
      </>
    ),
  },
  {
    num: '05',
    title: 'Similarity Thresholds',
    icon: <Scale className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          IJSPAST generally applies the following guidelines:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0f4a85] text-white">
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-tl-xl">Overall Similarity Index (Normal and AI)</th>
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-tr-xl">Editorial Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { range: 'Below 15%', action: 'Normally acceptable, subject to editorial evaluation.', color: 'emerald' },
                { range: '15%–25%', action: 'Returned to the author for revision and reduction of similarity.', color: 'amber' },
                { range: 'Above 25%', action: 'Normally rejected due to excessive similarity.', color: 'red' },
                { range: 'Any single source exceeding 5%–10%', action: 'May require explanation or revision, depending on context.', color: 'orange' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-4 py-3 border-b border-slate-100">
                    <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                      row.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                      row.color === 'amber' ? 'bg-amber-100 text-amber-800' :
                      row.color === 'red' ? 'bg-red-100 text-red-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>{row.range}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-700 border-b border-slate-100">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 italic mt-3">
          The Editor-in-Chief retains the discretion to make the final decision regardless of the numerical similarity index.
        </p>
      </>
    ),
  },
  {
    num: '06',
    title: 'Self-Plagiarism',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Authors should avoid substantial reuse of their own previously published material without appropriate citation. Acceptable reuse includes:
        </p>
        <div className="space-y-2.5 mb-4">
          {[
            'Properly cited conference papers expanded into journal articles.',
            'Reuse of standard methodology descriptions where unavoidable.',
            'Use of preprints where permitted by journal policy.',
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic">
          Authors must clearly disclose any overlap with previous publications.
        </p>
      </>
    ),
  },
  {
    num: '07',
    title: 'Responsibilities of Authors',
    icon: <UserCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">Authors are responsible for:</p>
        <div className="space-y-2.5">
          {[
            'Ensuring originality.',
            'Providing accurate citations.',
            'Obtaining copyright permissions where required.',
            'Checking manuscripts using plagiarism detection software before submission.',
            'Disclosing related publications and preprints.',
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
    num: '08',
    title: 'Editorial Procedure',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">If plagiarism is suspected:</p>
        <div className="space-y-2.5">
          {[
            'The editorial office reviews the similarity report.',
            'The corresponding author may be asked to provide an explanation.',
            'Minor overlap may require revision.',
            'Major plagiarism results in immediate rejection.',
            "Serious misconduct may be reported to the authors' institution or funding agency when appropriate.",
            "The Editorial Board's decision is final.",
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <div className="shrink-0 w-5 h-5 rounded-full bg-[#0f4a85] text-white flex items-center justify-center text-[10px] font-bold mt-0.5">{i + 1}</div>
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '09',
    title: 'Post-Publication Plagiarism',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          If plagiarism is identified after publication, IJSPAST may:
        </p>
        <div className="space-y-2">
          {[
            { label: 'Publish a correction.', color: 'blue' },
            { label: 'Issue an Expression of Concern.', color: 'amber' },
            { label: 'Retract the article.', color: 'red' },
            { label: 'Notify indexing services.', color: 'slate' },
            { label: "Inform the authors' institution where appropriate.", color: 'slate' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl border text-xs font-semibold ${
              item.color === 'blue' ? 'bg-blue-50 border-blue-200 text-blue-800' :
              item.color === 'amber' ? 'bg-amber-50 border-amber-200 text-amber-800' :
              item.color === 'red' ? 'bg-red-50 border-red-200 text-red-800' :
              'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic mt-4">
          The journal will maintain a transparent record of any corrections or retractions.
        </p>
      </>
    ),
  },
  {
    num: '10',
    title: 'Reviewer Responsibilities',
    icon: <UserCheck className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">Reviewers should:</p>
        <div className="space-y-2.5">
          {[
            'Report suspected plagiarism.',
            'Identify duplicate publications where possible.',
            'Maintain confidentiality.',
            'Avoid using unpublished manuscript content for personal research.',
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
    num: '11',
    title: 'Editorial Responsibilities',
    icon: <Lock className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">Editors shall:</p>
        <div className="space-y-2.5">
          {[
            'Ensure impartial investigation of plagiarism allegations.',
            'Preserve confidentiality throughout investigations.',
            'Follow established publication ethics procedures.',
            'Avoid conflicts of interest.',
            'Take timely corrective action when misconduct is confirmed.',
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
    title: 'Artificial Intelligence (AI) and Plagiarism',
    icon: <Bot className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          The use of Artificial Intelligence tools (such as ChatGPT or other generative AI systems) for language improvement is permitted only if:
        </p>
        <div className="space-y-2.5 mb-4">
          {[
            'Authors remain fully responsible for the manuscript.',
            'AI-generated content is carefully verified.',
            'AI is not listed as an author.',
            "Any required disclosure regarding AI use is provided in accordance with the journal's author guidelines.",
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700">{pt}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic">
          AI-generated material must not reproduce copyrighted or unattributed content.
        </p>
      </>
    ),
  },
  {
    num: '13',
    title: 'Consequences of Plagiarism',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Confirmed plagiarism may result in one or more of the following actions:
        </p>
        <div className="space-y-2">
          {[
            'Manuscript rejection.',
            'Immediate withdrawal from review.',
            'Retraction of published articles.',
            'Temporary submission ban (typically 2–5 years, depending on severity).',
            "Notification to the authors' institution or funding body.",
            'Removal of the article from journal databases where appropriate.',
          ].map((pt, i) => (
            <div key={i} className="flex items-center space-x-2.5 px-3 py-2 bg-red-50 border border-red-200 rounded-xl">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="text-xs font-medium text-red-800">{pt}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '14',
    title: 'Appeals',
    icon: <Scale className="w-5 h-5" />,
    color: 'amber',
    content: (
      <p className="text-sm text-slate-600 leading-relaxed">
        Authors may appeal editorial decisions related to plagiarism by submitting a written explanation, supporting documentation, and evidence within{' '}
        <span className="font-bold text-[#0f4a85]">30 days of notification</span>. The appeal will be reviewed by the Editor-in-Chief and, where appropriate, members of the Editorial Board. The decision on the appeal shall be final.
      </p>
    ),
  },
  {
    num: '15',
    title: 'Policy Review',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'blue',
    content: (
      <p className="text-sm text-slate-600 leading-relaxed">
        This policy is reviewed periodically to ensure alignment with evolving international standards in research integrity, publication ethics, and scholarly communication.
      </p>
    ),
  },
];

export default function EthicsPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      <PageHero
        title="Plagiarism Policy"
        subtitle="IJSPAST's complete plagiarism policy — covering similarity thresholds, screening tools, author responsibilities, editorial procedures, and consequences of misconduct."
        badge="Publication Ethics & Integrity"
        breadcrumbs={[
          { name: 'Plagiarism Policy' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-left">

        {sections.map((sec) => (
          <div
            key={sec.num}
            className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden"
          >
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

        {/* CTA Strip */}
        <div className="academic-card rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0f4a85] to-[#0f4a85] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Need to review author guidelines?</h4>
            <p className="text-xs text-slate-300">View complete formatting guidelines, manuscript structure, and camera-ready reference templates.</p>
          </div>
          <Link
            to="/guidelines"
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow shrink-0 transition-all flex items-center space-x-2"
          >
            <span>Author Guidelines</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
