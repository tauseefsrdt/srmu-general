import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Compass, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  FileText,
  Users,
  Globe,
  BookOpen
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo, generalInfoCards } from '../data/journalDocData';
import { patronsData } from '../data/patronsData';

export default function About() {
  const mission = generalInfoCards.find(c => c.id === 'mission') || generalInfoCards[0];
  const general = generalInfoCards.find(c => c.id === 'general-info') || generalInfoCards[1];
  const vision = generalInfoCards.find(c => c.id === 'vision') || generalInfoCards[2];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* Page Hero */}
      <PageHero
        title="About the Journal & Institutional Mandate"
        subtitle="Discover the mission, editorial governance, open-access principles, and scientific vision of the International Journal of Scientific Progress in Applied Science and Technology."
        badge="About IJSPAST"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Overview" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 text-left">
        
        {/* Executive Summary Card */}
        <div className="academic-card p-6 sm:p-10 rounded-3xl bg-white space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f4a85] via-blue-600 to-amber-500"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Institutional Scholarly Journal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f4a85] tracking-tight">
                {journalInfo.fullName}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {journalInfo.shortDesc}
              </p>
              <div className="space-y-2 pt-2">
                {general.points.map((pt, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Quick Navigation</span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/publication-details" className="text-blue-700 font-semibold hover:underline flex items-center justify-between">
                    <span>Publication Details Page</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link to="/vision-scope" className="text-blue-700 font-semibold hover:underline flex items-center justify-between">
                    <span>Vision & 23+ Research Areas</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link to="/patrons-advisory" className="text-blue-700 font-semibold hover:underline flex items-center justify-between">
                    <span>Patrons & Leadership</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-blue-700 font-semibold hover:underline flex items-center justify-between">
                    <span>Editorial Office & Inquiries</span>
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="academic-card p-6 rounded-3xl bg-white space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0f4a85]">{mission.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{mission.summary}</p>
          </div>

          <div className="academic-card p-6 rounded-3xl bg-white space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0f4a85]">{general.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{general.summary}</p>
          </div>

          <div className="academic-card p-6 rounded-3xl bg-white space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0f4a85]">{vision.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{vision.summary}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
