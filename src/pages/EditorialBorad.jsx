import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

export default function EditorialBorad() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        affiliation: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* Page Hero */}
      <PageHero
        title="Contact Editorial Office & Editorial Board"
        subtitle="Get in touch with the editorial team of the International Journal of Scientific Progress in Applied Science and Technology (IJSPAST)."
        badge="Editorial Office & Support"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Contact Us" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-left space-y-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Contact Details & Editorial Desk (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            <div className="academic-card p-6 rounded-3xl bg-white space-y-4">
              <h3 className="text-lg font-bold text-[#0f4a85] border-b border-slate-100 pb-2.5">
                Editorial Office Address
              </h3>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0f4a85] flex items-center justify-center shrink-0 border border-blue-100">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Published by:</span>
                    <span>{journalInfo.publisher}</span>
                    <p className="text-slate-500 mt-0.5">Lucknow-Deva Road, Barabanki, Uttar Pradesh - 225003, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                    <Mail className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Editorial Queries:</span>
                    <a href="mailto:editorial.office@ijspast.org" className="text-blue-700 hover:underline">
                      editorial.office@ijspast.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Peer Review Desk:</span>
                    <span>Double-blind review communication desk</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Office Hours:</span>
                    <span>Monday – Friday: 9:30 AM – 5:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note from Doc */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 space-y-1.5">
              <span className="font-bold block text-amber-900">Official Correspondence Protocol:</span>
              <p className="leading-relaxed">
                All correspondence regarding manuscript submission, peer review, and publication should be addressed to the Editorial Office of the International Journal of Scientific Progress in Applied Science and Technology through the official submission system.
              </p>
            </div>

          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#0f4a85]">
                  Send a Message to the Editorial Office
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in the form below and our editorial secretariat will respond within 1-2 business days.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-emerald-950 text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-800">Thank you for reaching out. The editorial desk will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="johndoe@university.edu"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700">Institutional Affiliation</label>
                      <input
                        type="text"
                        value={formData.affiliation}
                        onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                        placeholder="Department / University"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-slate-700">Subject / Nature of Inquiry</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white text-slate-700 font-medium"
                      >
                        <option>General Inquiry</option>
                        <option>Manuscript Status Check</option>
                        <option>Reviewer Invitation</option>
                        <option>Special Track Proposal</option>
                        <option>Copyright & Licensing</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Your Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your query with full manuscript ID if applicable..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white leading-relaxed"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Send Message to Editorial Desk</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
