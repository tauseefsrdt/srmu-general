import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle,
  Download,
  Info
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalScopeTopics, authorGuidelinesData } from '../data/journalDocData';

export default function Submit() {
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    affiliation: '',
    department: '',
    city: '',
    country: '',
    orcid: '',
    title: '',
    category: 'Artificial Intelligence and Machine Learning',
    abstract: '',
    keywords: '',
    manuscriptFile: null,
    coAuthors: '',
    conflictInterest: 'No conflict of interest declared',
    fundingInfo: 'None',
    acknowledgedChecklist: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acknowledgedChecklist) {
      alert('Please acknowledge that you have reviewed the pre-submission checklist.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* Page Hero */}
      <PageHero
        title="Submit Your Manuscript"
        subtitle="Upload your original research or review manuscript for double-blind peer review and fast-track open-access publishing."
        badge="Online Submission Portal"
        breadcrumbs={[
          { name: "Submission", path: "/submit" },
          { name: "Manuscript Portal" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-left">
        
        {submitted ? (
          <div className="academic-card p-8 sm:p-12 rounded-3xl bg-white text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0f3b6c]">
              Manuscript Successfully Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Your paper <strong>"{formData.title}"</strong> has been logged with manuscript ID <strong>IJSPAST-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>. A confirmation email has been dispatched to <strong>{formData.email}</strong>.
            </p>
            <div className="pt-4 flex justify-center space-x-3">
              <Link
                to="/"
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#0f3b6c] text-white hover:bg-blue-800 transition-colors"
              >
                Return to Homepage
              </Link>
              <Link
                to="/papers"
                className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Browse Current Issue
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Quick Template Download Reminder */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-xs text-amber-950">
                <Info className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Ensure your paper conforms to the official <strong>`13. Template.doc`</strong> structure and IEEE citation rules.</span>
              </div>
              <Link
                to="/template"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#0f3b6c] border border-amber-300 hover:bg-amber-100 shrink-0 transition-colors"
              >
                View Template
              </Link>
            </div>

            {/* Section 1: Corresponding Author Details */}
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-[#0f3b6c] border-b border-slate-100 pb-2.5">
                1. Corresponding Author Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.authorName}
                    onChange={(e) => setFormData({...formData, authorName: e.target.value})}
                    placeholder="Prof. (Dr.) Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Email Address (Institutional preferred) *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="author@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Institution / University *</label>
                  <input
                    type="text"
                    required
                    value={formData.affiliation}
                    onChange={(e) => setFormData({...formData, affiliation: e.target.value})}
                    placeholder="Shri Ramswaroop Memorial University"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Department</label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    placeholder="Dept. of Computer Science & Engineering"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">City & Country *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    placeholder="Lucknow, India"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">ORCID ID (Recommended)</label>
                  <input
                    type="text"
                    value={formData.orcid}
                    onChange={(e) => setFormData({...formData, orcid: e.target.value})}
                    placeholder="0000-0002-1825-0097"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Manuscript Metadata */}
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-[#0f3b6c] border-b border-slate-100 pb-2.5">
                2. Manuscript Metadata
              </h3>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Manuscript Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Concise, informative, and free of unnecessary abbreviations..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Primary Subject Domain *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                  >
                    {journalScopeTopics.map(t => (
                      <option key={t.id} value={t.title}>{t.title} ({t.category})</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Abstract (150–250 words) *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.abstract}
                    onChange={(e) => setFormData({...formData, abstract: e.target.value})}
                    placeholder="State objective, brief methodology, major findings, and significance without citations..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Keywords (4–8 keywords separated by commas) *</label>
                  <input
                    type="text"
                    required
                    value={formData.keywords}
                    onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                    placeholder="Metamaterials, 5G Networks, Optimization, Machine Learning"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: File Upload */}
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-4 text-xs">
              <h3 className="text-base sm:text-lg font-bold text-[#0f3b6c] border-b border-slate-100 pb-2.5">
                3. File Upload (.doc / .docx / .pdf)
              </h3>

              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-blue-500 transition-colors bg-slate-50/50">
                <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <p className="font-bold text-slate-700">Choose manuscript file to upload</p>
                <p className="text-[11px] text-slate-500 mt-1">Accepted formats: .doc, .docx, .pdf (Max size 25MB)</p>
                <input
                  type="file"
                  required
                  accept=".doc,.docx,.pdf"
                  onChange={(e) => setFormData({...formData, manuscriptFile: e.target.files[0]})}
                  className="mt-3 text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#0f3b6c] file:text-white hover:file:bg-blue-800 cursor-pointer"
                />
              </div>
            </div>

            {/* Section 4: Submission Confirmation Checklist */}
            <div className="academic-card p-6 rounded-3xl bg-white space-y-3 text-xs">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.acknowledgedChecklist}
                  onChange={(e) => setFormData({...formData, acknowledgedChecklist: e.target.checked})}
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-700 leading-relaxed font-medium">
                  I confirm that this manuscript is original, not published elsewhere, formatted according to IJSPAST IEEE guidelines, verified under the 10% similarity benchmark, and approved by all co-authors.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 px-10 py-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Manuscript for Review</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
