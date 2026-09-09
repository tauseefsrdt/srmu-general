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
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SubmitModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    track: 'AI & Robotics',
    abstract: '',
    authorName: '',
    email: '',
    affiliation: '',
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
      track: 'AI & Robotics',
      abstract: '',
      authorName: '',
      email: '',
      affiliation: '',
      fileName: null
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
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
              <h3 className="text-base sm:text-lg font-bold text-[#0f3b6c]">
                Submit Manuscript to IJSPAST
              </h3>
              <p className="text-[11px] text-slate-400">
                Online Peer-Review Portal • Shri Ramswaroop Memorial University
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
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
              <h4 className="text-2xl font-bold text-[#0f3b6c]">
                Manuscript Received Successfully!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.authorName || 'Author'}</strong>. Your paper has been submitted to the IJSPAST Editorial Board. An automated tracking token has been sent to <strong>{formData.email || 'your email'}</strong>.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-700">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-500">Tracking Reference:</span>
                  <span className="font-bold text-blue-700">IJSPAST-2026-MS-8429</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Initial Decision:</span>
                  <span className="font-semibold text-slate-800">Within 14 Days</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#0f3b6c] text-white hover:bg-blue-800 transition-colors"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs font-semibold">
                <span className={`flex items-center space-x-1.5 ${step === 1 ? 'text-[#0f3b6c] font-bold' : 'text-slate-400'}`}>
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">1</span>
                  <span>Author Details</span>
                </span>
                <span className={`flex items-center space-x-1.5 ${step === 2 ? 'text-[#0f3b6c] font-bold' : 'text-slate-400'}`}>
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px]">2</span>
                  <span>Manuscript Info</span>
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Corresponding Author Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="authorName"
                        required
                        value={formData.authorName}
                        onChange={handleInputChange}
                        placeholder="e.g. Dr. Rajesh Kumar"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Author Institutional Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. author@university.edu"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      University / Institutional Affiliation *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="affiliation"
                        required
                        value={formData.affiliation}
                        onChange={handleInputChange}
                        placeholder="e.g. Department of Computer Science & Engineering, SRMU"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0f3b6c] text-white hover:bg-blue-800 transition-all"
                    >
                      <span>Next: Manuscript Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Subject Track / Domain *
                    </label>
                    <select
                      name="track"
                      value={formData.track}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    >
                      <option value="AI & Robotics">Applied AI, Robotics & Machine Learning</option>
                      <option value="Bioscience & Biotech">Bioscience, Nanomedicine & Biotechnology</option>
                      <option value="Materials & Energy">Advanced Materials, Photovoltaics & Clean Tech</option>
                      <option value="Quantum & Photonics">Quantum Computing & Applied Photonics</option>
                      <option value="Civil & Environmental">Sustainable Civil & Environmental Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Manuscript Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g. Novel Passivation Kinetics for Perovskite Photovoltaics"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Abstract (Max 300 words) *
                    </label>
                    <textarea
                      name="abstract"
                      rows={3}
                      required
                      value={formData.abstract}
                      onChange={handleInputChange}
                      placeholder="Provide a concise summary of the research questions, methodology, and key experimental findings..."
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                    ></textarea>
                  </div>

                  {/* File Upload Zone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Manuscript Document (.PDF or .DOCX) *
                    </label>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-amber-400 bg-slate-50 hover:bg-amber-50/30 rounded-2xl p-4 cursor-pointer transition-colors">
                      <UploadCloud className="w-8 h-8 text-slate-400 mb-1" />
                      <span className="text-xs font-semibold text-slate-700">
                        {formData.fileName ? formData.fileName : 'Click to select or drag & drop manuscript file'}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">Maximum size 25MB</span>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>

                  {/* Buttons */}
                  <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      ← Back to Author Details
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit for Review</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
