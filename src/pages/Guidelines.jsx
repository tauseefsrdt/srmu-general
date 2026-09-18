import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
  Bot,
  HelpCircle,
  ExternalLink,
  Layers,
  Sparkles,
  Info,
  Check
} from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Guidelines() {
  const handleDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = '/13. Template.doc';
    link.download = 'IJMAR_Manuscript_Template.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* Page Hero */}
      <PageHero
        title="Authors Guidelines"
        subtitle="Complete guidelines and instructions for preparing and submitting manuscripts to the International Journal of Multidisciplinary Advanced Research (IJMAR)."
        badge="Official Author Instructions"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Authors Guidelines" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 text-left">

        {/* Journal Introduction Note Card */}
        <div className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Publication Scope & Overview
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            International Journal of Multidisciplinary Advanced Research (IJMAR) is an international, peer-reviewed, open-access journal dedicated to publishing high-quality original research, review articles, in all areas of science, engineering, and emerging technologies.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Authors are encouraged to submit manuscripts that present novel contributions, practical applications, innovative methodologies, and interdisciplinary research.
          </p>
        </div>

        {/* 1. Manuscript Preparation */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Manuscript Preparation
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Manuscripts must be written in clear, concise, and grammatically correct English.
          </p>

          {/* File Format */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0f4a85]">
              File Format
            </h3>
            <p className="text-sm text-slate-700">Submit manuscripts in:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 pl-2">
              <li>Microsoft Word (.doc/.docx)</li>
              <li>PDF (for review purposes)</li>
            </ul>

            <div className="pt-2">
              <span className="text-sm font-bold text-[#0f4a85]">Template Format </span>
              <button
                onClick={handleDownloadTemplate}
                className="px-6 py-3.5 rounded-xl mt-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow shrink-0 flex items-center space-x-2 cursor-pointer transition-all"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download .DOC Template</span>
              </button>
              {/* <button
                onClick={handleDownloadTemplate}
                className="text-sm font-semibold text-blue-700 hover:text-[#0f4a85] underline cursor-pointer inline-flex items-center gap-1"
              >
                (link for template)
              </button> */}
            </div>
          </div>

          {/* Manuscript Structure */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-base sm:text-lg font-bold text-[#0f4a85]">
              Manuscript Structure
            </h3>
            <p className="text-sm text-slate-700">The manuscript should be organized in the following order:</p>

            {/* Title */}
            <div className="space-y-1.5 pl-3 border-l-2 border-amber-400">
              <h4 className="text-sm font-bold text-[#0f4a85]">Title</h4>
              <p className="text-sm text-slate-700">The title should be concise, informative, and accurately reflect the content of the paper.</p>
              <p className="text-sm text-slate-700">Avoid abbreviations and unnecessary words.</p>
            </div>

            {/* Authors */}
            <div className="space-y-1.5 pl-3 border-l-2 border-amber-400">
              <h4 className="text-sm font-bold text-[#0f4a85]">Authors</h4>
              <p className="text-sm text-slate-700">Provide:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 pl-2">
                <li>Full name of each author</li>
                <li>Affiliation</li>
                <li>Department</li>
                <li>Institution</li>
                <li>City</li>
                <li>Country</li>
                <li>Email address</li>
                <li>ORCID ID (recommended)</li>
              </ul>
              <p className="text-sm text-slate-700 pt-1">Clearly identify the corresponding author.</p>
            </div>

            {/* Abstract */}
            <div className="space-y-1.5 pl-3 border-l-2 border-amber-400">
              <h4 className="text-sm font-bold text-[#0f4a85]">Abstract</h4>
              <p className="text-sm text-slate-700">The abstract should:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 pl-2">
                <li>Be between 150–250 words</li>
                <li>State the objective</li>
                <li>Briefly describe methodology</li>
                <li>Present major findings</li>
                <li>Highlight the significance of the work</li>
              </ul>
              <p className="text-sm text-slate-700 pt-1">Do not include references, equations, or undefined abbreviations.</p>
            </div>

            {/* Keywords */}
            <div className="space-y-1.5 pl-3 border-l-2 border-amber-400">
              <h4 className="text-sm font-bold text-[#0f4a85]">Keywords</h4>
              <p className="text-sm text-slate-700">Provide 4–8 keywords that best describe the manuscript.</p>
            </div>

            {/* Main Text */}
            <div className="space-y-2 pl-3 border-l-2 border-amber-400">
              <h4 className="text-sm font-bold text-[#0f4a85]">Main Text</h4>
              <p className="text-sm text-slate-700">For research papers, use the following structure:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 pl-2">
                <li>Introduction</li>
                <li>Literature Review</li>
                <li>Materials and Methods (or Methodology)</li>
                <li>Results</li>
                <li>Discussion</li>
                <li>Conclusion</li>
                <li>Future Scope (optional)</li>
                <li>Acknowledgements (if applicable)</li>
                <li>Funding Information</li>
                <li>Conflict of Interest</li>
                <li>Author Contributions (recommended)</li>
                <li>References</li>
              </ul>
              <p className="text-sm text-slate-700 pt-1">Alternative structures may be used where appropriate for review articles or other article types.</p>
            </div>

            {/* Figures and Tables */}
            <div className="space-y-1.5 pl-3 border-l-2 border-amber-400">
              <h4 className="text-sm font-bold text-[#0f4a85]">Figures and Tables</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 pl-2">
                <li>Number figures and tables consecutively.</li>
                <li>Every figure and table must have a caption.</li>
                <li>Figures should be high resolution (minimum 300 dpi).</li>
                <li>Cite all figures and tables in the text.</li>
                <li>Do not duplicate information in both tables and figures.</li>
              </ul>
            </div>

            {/* Equations */}
            <div className="space-y-1.5 pl-3 border-l-2 border-amber-400">
              <h4 className="text-sm font-bold text-[#0f4a85]">Equations</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 pl-2">
                <li>Number equations consecutively.</li>
                <li>Use standard mathematical notation.</li>
                <li>Define all symbols at first use.</li>
              </ul>
            </div>

            {/* Units */}
            <div className="space-y-1.5 pl-3 border-l-2 border-amber-400">
              <h4 className="text-sm font-bold text-[#0f4a85]">Units</h4>
              <p className="text-sm text-slate-700">Use the International System of Units (SI Units).</p>
            </div>
          </div>
        </section>

        {/* 2. References */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              References
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700">
            IJMAR recommends the IEEE Referencing Style.
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wide">Journal Article</h4>
              <p className="text-xs sm:text-sm font-mono text-slate-800">
                Author(s), "Title," Journal Name, vol. x, no. x, pp. xx–xx, Year.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wide">Conference Paper</h4>
              <p className="text-xs sm:text-sm font-mono text-slate-800">
                Author(s), "Paper Title," Conference Name, Location, Year, pp. xx–xx.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wide">Book</h4>
              <p className="text-xs sm:text-sm font-mono text-slate-800">
                Author(s), Book Title. Publisher, Year.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wide">Website</h4>
              <p className="text-xs sm:text-sm font-mono text-slate-800">
                Author, "Title," Website, URL, Accessed Month Year.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-700 pt-1">
            Authors are responsible for ensuring the accuracy and completeness of all references.
          </p>
        </section>

        {/* 3. Ethical Requirements */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Ethical Requirements
            </h2>
          </div>

          <p className="text-sm text-slate-700">Authors must ensure that:</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pl-2">
            <li>The manuscript is original.</li>
            <li>The work has not been published elsewhere.</li>
            <li>The manuscript is not under consideration by another journal.</li>
            <li>All sources are properly cited.</li>
            <li>Necessary permissions have been obtained.</li>
            <li>Human and animal studies include appropriate ethical approval, where applicable.</li>
          </ul>
        </section>

        {/* 4. Plagiarism Policy */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Plagiarism Policy
            </h2>
          </div>

          <p className="text-sm text-slate-700">
            All manuscripts are screened using plagiarism detection software.
          </p>

          <div className="space-y-2 pt-1">
            <p className="text-sm font-semibold text-slate-800">General editorial guidance:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 pl-2">
              <li>Similarity below 10% is normally acceptable after editorial assessment.</li>
              <li>Higher similarity may require revision or rejection depending on the source and nature of the overlap.</li>
            </ul>
          </div>

          <p className="text-sm text-slate-700 pt-1">
            Plagiarism, duplicate publication, fabricated data, and falsification are considered serious ethical violations.
          </p>
        </section>

        {/* 5. Artificial Intelligence (AI) Policy */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Artificial Intelligence (AI) Policy
            </h2>
          </div>

          <p className="text-sm text-slate-700">
            Authors may use AI tools for language editing or drafting assistance provided that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pl-2">
            <li>Authors remain fully responsible for the manuscript.</li>
            <li>AI tools are not listed as authors.</li>
            <li>Any required disclosure of AI use is provided in accordance with journal policy.</li>
            <li>All AI-generated content is carefully verified.</li>
          </ul>
        </section>

        {/* 6. Peer Review */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Peer Review
            </h2>
          </div>

          <p className="text-sm text-slate-700">
            IJMAR follows a Double-Blind Peer Review process.
          </p>
          <p className="text-sm text-slate-700">
            Each manuscript is evaluated by at least two independent reviewers.
          </p>

          <div className="space-y-2 pt-1">
            <p className="text-sm font-semibold text-slate-800">Editorial decisions include:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 pl-2">
              <li>Accept</li>
              <li>Minor Revision</li>
              <li>Major Revision</li>
              <li>Reject</li>
            </ul>
          </div>

          <p className="text-sm text-slate-700 pt-1">
            The Editor-in-Chief makes the final decision.
          </p>
        </section>

        {/* 7. Submission Checklist */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Submission Checklist
            </h2>
          </div>

          <p className="text-sm text-slate-700">
            Before submission, ensure that:
          </p>

          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Manuscript follows the journal template.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Title page is complete.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Abstract and keywords are included.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>References are complete and correctly formatted.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Figures and tables are properly numbered.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>All citations are included.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Conflict of interest statement is provided.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Funding information is disclosed.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Authors have approved the final manuscript.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Similarity has been checked.</span>
            </div>
          </div>
        </section>

        {/* 8. Copyright */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Copyright
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Upon acceptance, authors may be required to complete the journal's copyright or licensing agreement before publication.
          </p>
        </section>

        {/* 9. Open Access Policy */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Open Access Policy
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            IJMAR provides immediate open access to published articles to promote the global dissemination of scientific knowledge.
          </p>
        </section>

        {/* 10. Publication Charges */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Publication Charges
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            The applicable Article Processing Charges (APCs) will be applicable as per journal Policy.
          </p>
        </section>

        {/* 11. Correspondence */}
        <section className="academic-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Correspondence
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            All correspondence regarding manuscript submission, peer review, and publication should be addressed to the Editorial Office of the International Journal of Multidisciplinary Advanced Research (IJSPSAT) through the journal's official submission system or designated editorial email.
          </p>
        </section>

      </div>
    </div>
  );
}
