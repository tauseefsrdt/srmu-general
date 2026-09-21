import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
  FileText,
  Server,
  Scale,
  Cookie,
  Globe2,
  BellRing,
  HelpCircle,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  KeyRound,
  FileSpreadsheet
} from 'lucide-react';
import PageHero from '../components/PageHero';

const sections = [
  {
    num: '01',
    title: 'Scope of Policy',
    icon: <Globe2 className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          This Privacy Policy applies to all individuals interacting with the <span className="font-bold text-slate-800">International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)</span>, including:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            'Website Visitors',
            'Authors & Co-Authors',
            'Corresponding Authors',
            'Peer Reviewers',
            'Editors & Board Members',
            'Academic Readers',
            'Journal Subscribers',
            'Inquiry Correspondents'
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '02',
    title: 'Information We Collect',
    icon: <Database className="w-5 h-5" />,
    color: 'amber',
    content: (
      <div className="space-y-3.5">
        <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100">
          <div className="text-xs font-bold text-[#0f4a85] mb-1 flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>Personal Information</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Full name, institutional affiliation, department, professional designation, official email address, postal address, phone number (optional), ORCID iD, country, and academic profiles.
          </p>
        </div>

        <div className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-100">
          <div className="text-xs font-bold text-amber-900 mb-1 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Manuscript & Editorial Information</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Article title, abstracts, keywords, co-author details, peer reviewer evaluations, editorial correspondence, publication history, grant funding disclosures, and conflict declarations.
          </p>
        </div>

        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
          <div className="text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
            <Server className="w-4 h-4 text-slate-600" />
            <span>Technical & Device Information</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            IP addresses, browser type, device identifiers, operating system, referring URLs, access timestamps, and aggregated website usage analytics.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Purpose of Data Collection',
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Personal information is collected exclusively for legitimate scholarly publishing and administrative functions:
        </p>
        <div className="space-y-2">
          {[
            'Processing and evaluating submitted manuscripts.',
            'Conducting double-blind peer review and managing reviewer assignments.',
            'Communicating formal editorial decisions and revision requests.',
            'Publishing accepted articles and preserving the permanent scholarly record.',
            'Registering Digital Object Identifiers (DOIs) and metadata with indexing agencies.',
            'Responding to author inquiries and editorial correspondence.',
            'Ensuring website security, preventing fraudulent activity, and ethical compliance.'
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0f4a85] mt-2 shrink-0"></div>
              <span className="text-xs text-slate-700 leading-relaxed">{pt}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '04',
    title: 'Legal Basis for Processing',
    icon: <Scale className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          IJSPAST processes personal data on recognized lawful bases under international data protection regulations:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { title: 'User Consent', desc: 'Freely given consent during registration and submission.' },
            { title: 'Performance of Contract', desc: 'Delivering publishing, peer-review, and editorial services.' },
            { title: 'Legal Obligations', desc: 'Compliance with regulatory, tax, or legal requirements.' },
            { title: 'Legitimate Interests', desc: 'Operating, optimizing, and securing the academic journal portal.' },
            { title: 'Research Integrity', desc: 'Protecting publication ethics and investigating misconduct.' }
          ].map((item, i) => (
            <div key={i} className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80">
              <div className="font-bold text-xs text-[#0f4a85] mb-0.5">{item.title}</div>
              <div className="text-[11px] text-slate-600 leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '05',
    title: 'Use & Sharing of Information',
    icon: <KeyRound className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <div className="p-3 bg-rose-50/80 rounded-xl border border-rose-200 text-xs font-semibold text-rose-900 mb-3">
          🚫 Strict Commitment: IJSPAST does not sell, rent, commercialize, or trade personal information with third parties.
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-2">
          Data is disclosed strictly on a need-to-know basis solely for:
        </p>
        <ul className="space-y-1.5 text-xs text-slate-700">
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>Editorial processing and Double-Blind peer review.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>Production, XML typesetting, and final publication.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>Crossref DOI registration and digital archiving repositories (LOCKSS/Portico).</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>Abstracting and indexing databases.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: '06',
    title: 'Peer Review Confidentiality',
    icon: <Lock className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          IJSPAST operates a strictly confidential <span className="font-bold text-slate-800">Double-Blind Peer Review</span> system:
        </p>
        <div className="space-y-2 text-xs text-slate-700">
          <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/70">
            <strong>Reviewer Anonymity:</strong> Reviewer identities and institutional affiliations are never disclosed to authors or unauthorized third parties.
          </div>
          <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/70">
            <strong>Author Concealment:</strong> Author identities are redacted during external reviewer evaluation.
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong>Unpublished Materials:</strong> Editors and reviewers are legally bound never to cite, share, or exploit unpublished manuscript data.
          </div>
        </div>
      </>
    ),
  },
  {
    num: '07',
    title: 'Publication of Author Information',
    icon: <FileSpreadsheet className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Upon final acceptance and publication, only information necessary for the public scholarly record is displayed:
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Author Full Names</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Institutional Affiliations</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Corresponding Author Email</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• ORCID iD (if supplied)</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Funding & Grant Details</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Conflict Declarations</div>
        </div>
      </>
    ),
  },
  {
    num: '08',
    title: 'Cookies & Analytics',
    icon: <Cookie className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Our website uses standard session cookies and analytics tools to optimize reader experience:
        </p>
        <ul className="space-y-1.5 text-xs text-slate-700">
          <li className="flex items-start space-x-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>Maintain secure login sessions for authors and reviewers.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>Analyze article download and reading trends.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>Enhance page responsiveness and navigation security.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-500 mt-2.5 italic">
          Users can adjust or disable cookie settings in their web browsers; basic article viewing remains fully functional.
        </p>
      </>
    ),
  },
  {
    num: '09',
    title: 'Data Security Standards',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          IJSPAST implements robust administrative, cryptographic, and technical safeguards:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs font-semibold">
          <div className="p-2.5 bg-blue-50 text-blue-900 rounded-lg border border-blue-100">SSL/TLS 256-Bit Encryption</div>
          <div className="p-2.5 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-100">Role-Based Access</div>
          <div className="p-2.5 bg-amber-50 text-amber-900 rounded-lg border border-amber-100">Encrypted Backups</div>
          <div className="p-2.5 bg-slate-100 text-slate-800 rounded-lg border border-slate-200">Intrusion Prevention</div>
          <div className="p-2.5 bg-purple-50 text-purple-900 rounded-lg border border-purple-100">Audit Logging</div>
          <div className="p-2.5 bg-teal-50 text-teal-900 rounded-lg border border-teal-100">Confidential Cloud</div>
        </div>
      </>
    ),
  },
  {
    num: '10',
    title: 'Data Retention & Scholarly Record',
    icon: <Database className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Personal data is retained only for the period necessary to manage editorial processing, resolve disputes, and maintain scholarly records.
        </p>
        <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-amber-950">
          <strong>Permanent Academic Record:</strong> Published article metadata, author bylines, and citations are retained permanently in international academic archives as an immutable record of scientific discovery.
        </div>
      </>
    ),
  },
  {
    num: '11',
    title: 'Trusted Third-Party Service Providers',
    icon: <Server className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          The journal engages trusted scholarly technology partners under strict data protection terms for:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Online Manuscript Submission Portals</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Crossref DOI Minting & Indexing</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Automated Plagiarism Checking Systems</div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">• Digital Preservation & Archival Repositories</div>
        </div>
      </>
    ),
  },
  {
    num: '12',
    title: 'Individual User Rights',
    icon: <UserCheck className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Under applicable privacy and data protection frameworks, users hold specific rights regarding their personal data:
        </p>
        <div className="space-y-1.5 text-xs text-slate-700">
          {[
            'Right to access personal information held by the journal.',
            'Right to request correction of incomplete or inaccurate data.',
            'Right to request deletion of non-published personal accounts.',
            'Right to restrict or object to certain non-essential processing.',
            'Right to withdraw consent where processing is consent-based.'
          ].map((r, i) => (
            <div key={i} className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>{r}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Requests can be submitted directly to our Editorial Office and are fulfilled in accordance with applicable laws.
        </p>
      </>
    ),
  },
  {
    num: '13',
    title: 'Children’s Privacy & Global Transfers',
    icon: <Globe2 className="w-5 h-5" />,
    color: 'blue',
    content: (
      <>
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">Target Audience</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              IJSPAST is exclusively intended for researchers, academicians, and higher education scholars. We do not knowingly collect personal information from individuals under 18 years of age.
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-bold text-xs text-[#0f4a85] block mb-1">Cross-Border Data Transfers</span>
            <span className="text-xs text-slate-600 leading-relaxed">
              Where editorial evaluation, indexing, or hosting requires international data transfers, IJSPAST ensures all appropriate contractual and security safeguards are enforced.
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    num: '14',
    title: 'Policy Updates & Contact Desk',
    icon: <BellRing className="w-5 h-5" />,
    color: 'amber',
    content: (
      <>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          This Privacy Policy is periodically reviewed to reflect updates in legal standards and best scholarly publishing practices. The latest version is always accessible on our official web portal.
        </p>
        <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-200/80 text-xs text-blue-950">
          <strong>Privacy Inquiries:</strong> Direct any privacy-related requests or data inquiries to the Editorial Office at{' '}
          <a href="mailto:editorial.office@ijspast.org" className="text-[#0f4a85] font-bold underline hover:text-blue-800">
            editorial.office@ijspast.org
          </a>.
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageHero
        title="Privacy Policy"
        subtitle="Transparent guidelines on how personal data, manuscript records, and reviewer confidentiality are protected at IJSPAST."
        badge="Data Protection & Privacy"
        breadcrumbs={[
          { name: 'Policies', path: '/peer-review-policy' },
          { name: 'Privacy Policy', path: null },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0f4a85]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Scholarly Confidentiality & GDPR/Data Protection Compliant</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Protecting User Privacy & Manuscript Confidentiality
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The International Journal of Scientific Progress in Applied Science and Technology (IJSPAST) is committed to protecting the privacy, personal data, and confidentiality of our authors, reviewers, editors, and readers.
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
                to="/peer-review-policy"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
              >
                <span>Peer Review Policy</span>
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

        {/* Contact Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0f4a85] to-[#09325c] text-white rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-lg font-bold text-white">Have questions about your personal data or privacy rights?</h3>
            <p className="text-xs text-slate-200 max-w-xl">
              Contact our Data Protection and Editorial Desk with any requests regarding data access, corrections, or confidentiality.
            </p>
          </div>
          <a
            href="mailto:editorial.office@ijspast.org"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-all shadow-sm shrink-0"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Email Editorial Office</span>
          </a>
        </div>
      </div>
    </div>
  );
}
