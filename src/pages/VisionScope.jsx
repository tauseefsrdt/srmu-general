import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Compass,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { generalInfoCards } from '../data/journalDocData';

export default function VisionScope() {
  const missionCard = generalInfoCards.find(c => c.id === 'mission') || generalInfoCards[0];
  const visionCard = generalInfoCards.find(c => c.id === 'vision') || generalInfoCards[2];

  const peerReviewSteps = [
    { step: 1, title: "Manuscript Submission", desc: "Author submits the manuscript through the official submission portal." },
    { step: 2, title: "Initial Editorial Screening", desc: "Editor-in-Chief reviews the manuscript for scope, formatting, and completeness." },
    { step: 3, title: "Plagiarism Check", desc: "Manuscript is screened using plagiarism detection software; similarity must be below 10%." },
    { step: 4, title: "Assignment to Associate Editor", desc: "Manuscript is assigned to a relevant Associate Editor based on the subject domain." },
    { step: 5, title: "Double-Blind Peer Review", desc: "At least two independent expert reviewers evaluate the manuscript anonymously." },
    { step: 6, title: "Editorial Decision", desc: "Editorial decision is communicated: Accept, Minor Revision, Major Revision, or Reject." },
    { step: 7, title: "Author Revision", desc: "Authors address reviewer comments and submit a revised manuscript with a response letter." },
    { step: 8, title: "Final Acceptance", desc: "Revised manuscript is reviewed and formally accepted for publication." },
    { step: 9, title: "Copyediting", desc: "Accepted manuscript undergoes professional copyediting for language and formatting." },
    { step: 10, title: "Proofreading", desc: "Final proofreading is carried out; authors review the galley proof for approval." },
    { step: 11, title: "Online Publication", desc: "Manuscript is published online and made available as open access globally." },
    { step: 12, title: "DOI Assignment", desc: "A unique Digital Object Identifier (DOI) is assigned for permanent citation and indexing." },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* Page Hero */}
      <PageHero
        title="Vision & Scope of the Journal"
        subtitle="Discover the mission, vision, and editorial workflow of the International Journal of Multidisciplinary Advanced Research."
        badge="Academic Scope & Mandate"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Vision & Scope" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 text-left">

        {/* Vision & Mission 2-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Vision Card */}
          <div className="academic-card rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden bg-white">
            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-blue-600 to-[#0f4a85]"></div>

            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block">SCHOLARLY FUTURE</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">{visionCard.title}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {visionCard.summary}
            </p>

            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              {visionCard.points.map((pt, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 italic pt-2">
              {visionCard.details}
            </p>
          </div>

          {/* Mission Card */}
          <div className="academic-card rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden bg-white">
            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-amber-400 to-amber-600"></div>

            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block">OUR PURPOSE</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">{missionCard.title}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {missionCard.summary}
            </p>

            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              {missionCard.points.map((pt, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 italic pt-2">
              {missionCard.details}
            </p>
          </div>

        </div>

        {/* Peer Review Process Section */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#0f4a85] text-xs font-bold border border-blue-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Editorial Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f4a85]">
              Peer Review Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              IJMAR follows a rigorous, structured editorial process to ensure the highest standards of scholarly integrity and scientific quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {peerReviewSteps.map((item) => (
              <div
                key={item.step}
                className="academic-card bg-white rounded-2xl p-5 flex items-start space-x-4 group hover:border-blue-200 transition-all"
              >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f4a85] to-blue-500 text-white flex items-center justify-center text-xs font-extrabold shadow-sm group-hover:from-amber-500 group-hover:to-amber-400 transition-all">
                  {item.step}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#0f4a85] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="academic-card rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0f4a85] to-[#0f4a85] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Have a manuscript that fits our scope?</h4>
            <p className="text-xs text-slate-300">Submit your work today for double-blind peer review and rapid international publication.</p>
          </div>
          <Link
            to="/submit"
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow shrink-0 transition-all"
          >
            Submit Manuscript Online
          </Link>
        </div>

      </div>
    </div>
  );
}
