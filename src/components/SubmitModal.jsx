import React, { useState } from 'react';
import { 
  X, 
  Send, 
  UploadCloud, 
  CheckCircle, 
  FileText, 
  User, 
  Mail, 
  Building, 
  Layers, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { journalScopeTopics } from '../data/journalDocData';

export default function SubmitModal({ isOpen, onClose, onOpenGuidelines }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    track: 'Artificial Intelligence and Machine Learning',
    abstract: '',
    keywords: '',
    authorName: '',
    email: '',
    department: '',
    institution: '',
    city: '',
    country: '',
    orcid: '',
    conflictInterest: 'No',
    fileName: null
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      title: '',
      track: 'Artificial Intelligence and Machine Learning',
      abstract: '',
      keywords: '',
      authorName: '',
      email: '',
      department: '',
      institution: '',
      city: '',
      country: '',
      orcid: '',
      conflictInterest: 'No',
      fileName: null
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-700 flex items-center justify-center">
              <Send className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0f4a85]">
                Submit Manuscript to IJMAR
              </h3>
              <p className="text-[11px] text-slate-400">
                Online Peer-Review Portal • Shri Ramswaroop Memorial University
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#0f4a85] font-serif-title">
                Manuscript Received Successfully!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.authorName || 'Author'}</strong>. Your paper titled <em>"{formData.title || 'Submitted Paper'}"</em> has been forwarded to the Editor-in-Chief for initial plagiarism and scope appraisal.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-700">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-500">Tracking Reference:</span>
                  <span className="font-bold text-blue-700">IJMAR-2026-MS-8429</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Review Process:</span>
                  <span className="font-semibold text-slate-800">Double-Blind (2 Reviewers)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Plagiarism Screening:</span>
                  <span className="font-semibold text-emerald-600">&lt;10% Threshold Check</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#0f4a85] text-white hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs font-semibold">
                <span className={`flex items-center space-x-1.5 ${step === 1 ? 'text-[#0f4a85] font-bold' : 'text-slate-400'}`}>
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">1</span>
                  <span>Author Details</span>
                </span>
                <span className={`flex items-center space-x-1.5 ${step === 2 ? 'text-[#0f4a85] font-bold' : 'text-slate-400'}`}>
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">2</span>
                  <span>Manuscript Info</span>
                </span>
                <span className={`flex items-center space-x-1.5 ${step === 3 ? 'text-[#0f4a85] font-bold' : 'text-slate-400'}`}>
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">3</span>
                  <span>File & Compliance</span>
                </span>
              </div>

              {/* Step 1: Author Details (Matching Author Guidelines doc) */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Corresponding Author Full Name *</label>
                    <input 
                      type="text" 
                      required
                      name="authorName"
                      value={formData.authorName}
                      onChange={handleInputChange}
                      placeholder="e.g., Dr. Rajesh Kumar" 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Author Email Address *</label>
                      <input 
                        type="email" 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="author@institution.edu" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">ORCID ID (Recommended)</label>
                      <input 
                        type="text" 
                        name="orcid"
                        value={formData.orcid}
                        onChange={handleInputChange}
                        placeholder="0000-0002-1825-0097" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Department *</label>
                      <input 
                        type="text" 
                        required
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        placeholder="Dept. of Computer Science & Eng." 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Institution / University *</label>
                      <input 
                        type="text" 
                        required
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        placeholder="Shri Ramswaroop Memorial University" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">City</label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Barabanki / Lucknow" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Country</label>
                      <input 
                        type="text" 
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="India" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Manuscript Info */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Manuscript Title *</label>
                    <input 
                      type="text" 
                      required
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Concise and informative title (avoid abbreviations)" 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Research Domain (Scope of Journal) *</label>
                    <select 
                      name="track"
                      value={formData.track}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700 bg-white"
                    >
                      {journalScopeTopics.map(topic => (
                        <option key={topic.id} value={topic.title}>{topic.title} ({topic.category})</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Abstract (150–250 Words) *</label>
                    <textarea 
                      required
                      name="abstract"
                      rows={4}
                      value={formData.abstract}
                      onChange={handleInputChange}
                      placeholder="State the objective, describe methodology, present major findings and highlight work significance without equations or undefined abbreviations..." 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Keywords (4–8 Keywords separated by commas) *</label>
                    <input 
                      type="text" 
                      required
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleInputChange}
                      placeholder="e.g. Artificial Intelligence, Metamaterials, 5G Networks, Optimization" 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-700"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: File Upload & Ethics Confirmation */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Attach Manuscript File (.DOC, .DOCX, or PDF) *</label>
                    <div className="border-2 border-dashed border-slate-200 hover:border-blue-700 rounded-2xl p-6 text-center transition-colors">
                      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-slate-700">
                        {formData.fileName ? (
                          <span className="text-blue-700 font-bold">{formData.fileName} (Attached)</span>
                        ) : (
                          'Drag & drop manuscript or click to browse'
                        )}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Must follow IJMAR Template Format (Max file size: 25MB)
                      </p>
                      <input 
                        type="file" 
                        accept=".doc,.docx,.pdf"
                        onChange={handleFileUpload}
                        className="hidden" 
                        id="manuscript-file"
                      />
                      <label 
                        htmlFor="manuscript-file"
                        className="inline-block mt-3 px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer transition-colors"
                      >
                        Choose File
                      </label>
                    </div>
                  </div>

                  {/* Ethics Checklist confirmations */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                    <div className="font-bold text-[#0f4a85] flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Author Ethical Confirmation:</span>
                    </div>
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input type="checkbox" required className="mt-0.5" defaultChecked />
                      <span>This work is original, has not been published elsewhere, and is not under consideration by another journal.</span>
                    </label>
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input type="checkbox" required className="mt-0.5" defaultChecked />
                      <span>The manuscript contains similarity under the 10% benchmark and follows IEEE referencing style.</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#0f4a85] text-white hover:bg-blue-800 transition-colors cursor-pointer"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-sm transition-all cursor-pointer"
                  >
                    Submit Final Manuscript
                  </button>
                )}
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
