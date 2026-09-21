import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Database,
  FileCode2,
  Share2,
  Copy,
  Check,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Users,
  Eye,
  FileSpreadsheet,
  Layers,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
  Archive,
  BookOpen,
  Scale
} from 'lucide-react';
import PageHero from '../components/PageHero';

function CopyableStatement({ title, text, badge }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 space-y-2.5 relative group shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-bold text-amber-400 font-mono uppercase tracking-wider">{title}</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-sans border border-slate-700">{badge}</span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all cursor-pointer"
          title="Copy statement template"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-950" /> : <Copy className="w-3.5 h-3.5 text-slate-950" />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <p className="text-xs text-amber-100 font-mono leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
        "{text}"
      </p>
    </div>
  );
}

const sections = [
  {
    num: '01',
    title: 'Policy Statement',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed">
          The <span className="font-bold text-slate-800">International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)</span> is committed to promoting transparency, reproducibility, open science, and integrity in scientific research.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          Authors are strongly encouraged to make the data supporting their research findings available to readers and peer reviewers whenever possible, while respecting ethical, legal, privacy, and intellectual property requirements.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'Manuscript Scope & Applicability',
    icon: <Layers className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          This policy applies to all manuscript types submitted to IJSPAST:
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Original Research Articles</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Review Articles (with datasets)</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Technical Notes & Reports</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Applied Case Studies</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Short Communications</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Interdisciplinary Papers</div>
        </div>
      </>
    ),
  },
  {
    num: '03',
    title: 'Definition of Research Data',
    icon: <Database className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Research data includes all digital and empirical assets required to interpret, verify, and replicate results:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
          {[
            'Experimental measurements',
            'Observational & survey data',
            'Simulation output logs',
            'Statistical datasets',
            'Software code & scripts',
            'Algorithms & workflows',
            'Machine learning models',
            'Images & multimedia files',
            'Protocols & lab notes',
            'Supplementary tables',
            'Instrument telemetry',
            'Metadata documentation'
          ].map((item, i) => (
            <div key={i} className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium">
              {item}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '04',
    title: 'Mandatory Data Availability Statement',
    icon: <FileSpreadsheet className="w-5 h-5" />,
    color: 'amber',
    isWide: true,
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Every manuscript must contain a mandatory <strong>Data Availability Statement</strong> located immediately before the References section. Authors can select and adapt one of the standardized templates below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CopyableStatement
            title="Option 1: Open Repository"
            badge="Recommended"
            text="Data Availability Statement: The datasets generated and analyzed during this study are publicly available in the [Repository Name, e.g., Zenodo / Figshare] repository at: https://doi.org/[DOI-OR-URL]."
          />
          <CopyableStatement
            title="Option 2: Upon Request"
            badge="Standard"
            text="Data Availability Statement: The datasets generated during this study are available from the corresponding author upon reasonable academic request."
          />
          <CopyableStatement
            title="Option 3: In Article & Supplementary"
            badge="Direct Access"
            text="Data Availability Statement: All data supporting the findings of this study are included within the article and its supplementary materials."
          />
          <CopyableStatement
            title="Option 4: Restricted / Proprietary"
            badge="Exceptions"
            text="Data Availability Statement: The data are not publicly available due to confidential, commercial, or ethical restrictions. Access may be granted upon reasonable request, subject to non-disclosure agreements."
          />
        </div>
      </>
    ),
  },
  {
    num: '05',
    title: 'Data Sharing & Repositories',
    icon: <Share2 className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors are encouraged to deposit datasets in recognized open-access repositories that provide persistent DOIs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-bold text-[#0f4a85] block mb-1">General Repositories</span>
            <span>Zenodo, Figshare, Dryad, Harvard Dataverse, Mendeley Data.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-bold text-[#0f4a85] block mb-1">Domain-Specific</span>
            <span>NCBI/GenBank, IEEE DataPort, Protein Data Bank (PDB), PANGAEA.</span>
          </div>
        </div>
      </>
    ),
  },
  {
    num: '06',
    title: 'Software, Code & Computational Reproducibility',
    icon: <FileCode2 className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Where novel software code, scripts, or machine learning algorithms are central to the study:
        </p>
        <div className="space-y-2 text-xs text-slate-700">
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>Deposit code in public version control repositories (e.g., GitHub, GitLab, Code Ocean, Zenodo).</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>Explicitly state the programming languages, library versions, and execution environments.</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>Provide detailed instructions and sample input parameters for reproducibility.</span>
          </div>
        </div>
      </>
    ),
  },
  {
    num: '07',
    title: 'Ethical, Legal & Privacy Safeguards',
    icon: <Lock className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Data should <strong>not</strong> be publicly shared where disclosure would:
        </p>
        <ul className="space-y-1.5 text-xs text-slate-700">
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span>Violate human subject privacy or compromise confidentiality.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span>Breach IRB or institutional ethics approval terms.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span>Infringe patent rights, commercial IP, or national security laws.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-500 mt-2.5">
          All justifiable restrictions must be explicitly explained in the Data Availability Statement.
        </p>
      </>
    ),
  },
  {
    num: '08',
    title: 'Human Participant Data & Anonymization',
    icon: <Users className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          For studies involving human participants:
        </p>
        <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-amber-950 space-y-1.5">
          <p>• All personal identifying information must be strictly anonymized or de-identified prior to sharing.</p>
          <p>• Informed consent for potential public data release must have been obtained from subjects.</p>
          <p>• If anonymization cannot prevent re-identification, data must not be openly posted.</p>
        </div>
      </>
    ),
  },
  {
    num: '09',
    title: 'Peer Review Verification & Access',
    icon: <Eye className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Editors and peer reviewers may request confidential access to raw supporting datasets during the double-blind review process to verify methodological rigor and statistical claims.
        </p>
        <p className="text-xs text-slate-500 italic">
          Reviewers are strictly bound to keep all privileged manuscript datasets confidential and must never utilize them for personal or competitive research.
        </p>
      </>
    ),
  },
  {
    num: '10',
    title: 'Formal Data Citation Guidelines',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Datasets deposited in public repositories should be formally cited in the manuscript Reference list:
        </p>
        <div className="p-3 bg-slate-900 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 space-y-1.5">
          <span className="text-amber-400 font-bold block">// Format:</span>
          <p className="text-slate-300">[1] Authors, "Dataset Title", Repository Name, Version X, Year. DOI / URL.</p>
        </div>
      </>
    ),
  },
  {
    num: '11',
    title: 'Research Integrity & Data Manipulation',
    icon: <Scale className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors are solely responsible for ensuring that all data presented are genuine, accurate, and completely free of fabrication, falsification, or unauthorized selective editing.
        </p>
        <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200 text-xs text-rose-950">
          <strong>Misconduct Sanctions:</strong> Suspected data fabrication or manipulation triggers formal investigations under COPE guidelines and may lead to manuscript rejection or article retraction.
        </div>
      </>
    ),
  },
  {
    num: '12',
    title: 'Long-Term Preservation & Policy Review',
    icon: <Archive className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Authors are urged to use long-term preservation repositories guaranteeing permanent accessibility (minimum 10 years).
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          This Data Availability Policy is reviewed periodically to ensure continuous alignment with global <strong>FAIR (Findable, Accessible, Interoperable, and Reusable)</strong> data principles and Open Science standards.
        </p>
      </>
    ),
  },
];

export default function DataAvailabilityPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        title="Data Availability Policy"
        subtitle="Promoting transparency, reproducibility, and open scientific discovery across all research published in IJSPAST."
        badge="FAIR Data & Open Science"
        breadcrumbs={[
          { name: 'Policies', path: '/peer-review-policy' },
          { name: 'Data Availability', path: null },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0f4a85]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>FAIR Principles & Reproducible Research</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Enhancing Research Verification, Reuse & Scientific Progress
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Open scientific data accelerates innovation and enables robust verification of research findings. IJSPAST requires all submissions to state clearly how supporting datasets and source codes can be accessed.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <Link
                to="/guidelines"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-[#0f4a85] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
              >
                <span>Author Guidelines</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/open-access-policy"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
              >
                <span>Open Access Policy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Policy Grid */}
        <div className="space-y-6 text-left">
          {/* Main Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.filter(s => !s.isWide).map((sec, idx) => (
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

          {/* Wide Section for Data Availability Statement Examples */}
          {sections.filter(s => s.isWide).map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm bg-amber-100 text-amber-900 border border-amber-200">
                  {sec.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Section {sec.num}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {sec.title}
                  </h3>
                </div>
              </div>
              <div className="pt-2">{sec.content}</div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0f4a85] to-[#09325c] text-white rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-lg font-bold text-white">Have questions regarding data repository deposits?</h3>
            <p className="text-xs text-slate-200 max-w-xl">
              Our editorial support team can assist authors in choosing appropriate open data repositories and properly formulating data availability statements.
            </p>
          </div>
          <Link
            to="/guidelines"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-all shadow-sm shrink-0"
          >
            <span>Read Submission Guidelines</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
