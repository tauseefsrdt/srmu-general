import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Globe, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Award, 
  Send, 
  Download, 
  Sparkles, 
  Layers,
  ArrowRight,
  HelpCircle,
  Mail,
  Building2,
  Calendar,
  Search
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo, generalInfoCards } from '../data/journalDocData';

export default function PublicationDetails() {
  const generalInfo = generalInfoCards.find(c => c.id === 'general-info') || generalInfoCards[1];

  const publicationFacts = [
    { label: "Journal Acronym", value: journalInfo.acronym, icon: Award, desc: "International standard identifier" },
    { label: "Publication Type", value: "International Peer-Reviewed Journal", icon: BookOpen, desc: "Multidisciplinary academic journal" },
    { label: "Publisher", value: journalInfo.publisher, icon: Building2, desc: "Barabanki, Lucknow, Uttar Pradesh, India" },
    { label: "Online Identifier", value: "E-ISSN: 2582-8800", icon: Sparkles, desc: "Indexed & verifiable online" },
    { label: "Publication Frequency", value: "Quarterly Issues (Continuous Fast-Track)", icon: Calendar, desc: "Immediate online assignment upon acceptance" },
    { label: "Review Mechanism", value: "Double-Blind Peer Review", icon: ShieldCheck, desc: "At least two independent domain reviewers" },
    { label: "Access Paradigm", value: "100% Immediate Open Access", icon: Globe, desc: "Unrestricted global dissemination under CC BY 4.0" },
    { label: "Citation & Reference Standard", value: "IEEE Referencing Style", icon: FileText, desc: "Strict numeric bracket referencing [1], [2]" },
    { label: "Plagiarism Tolerance", value: "< 10% Overall Similarity Benchmark", icon: CheckCircle2, desc: "Verified via industry standard screening tools" }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Initial Editorial Screening",
      desc: "Checking manuscript scope conformity, language accuracy, plagiarism benchmark (<10%), and adherence to camera-ready template formatting."
    },
    {
      step: "02",
      title: "Double-Blind Peer Review",
      desc: "Manuscript is anonymized and assigned to minimum two independent subject matter specialists for rigorous technical evaluation."
    },
    {
      step: "03",
      title: "Editorial Revision & Decision",
      desc: "Reviewers submit feedback categorized as Accept, Minor Revision, Major Revision, or Reject. Authors submit revised manuscripts alongside response sheets."
    },
    {
      step: "04",
      title: "Typesetting & Proofreading",
      desc: "Final camera-ready formatting, DOI registration, layout proof verification by corresponding author, and author licensing agreement."
    },
    {
      step: "05",
      title: "Continuous Online Publication",
      desc: "Immediate global open-access publication with indexing dispatch, downloadable PDF, and digital citation metadata."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* Page Hero */}
      <PageHero
        title="Publication Details & Journal Specifications"
        subtitle="Complete institutional publication framework, review mechanisms, publication frequency, and academic mandate of IJMAR."
        badge="Official Journal Details"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Publication Details" }
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Core Summary Overview Card */}
        <div className="academic-card rounded-3xl p-6 sm:p-10 text-left relative overflow-hidden bg-white">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f4a85] via-blue-600 to-amber-500"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Peer-Reviewed & Open Access</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f4a85] tracking-tight">
                {journalInfo.fullName} ({journalInfo.acronym})
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {generalInfo.summary}
              </p>
              <div className="space-y-2 pt-2">
                {generalInfo.points.map((pt, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-center sm:text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Submission Portal
              </h4>
              <div className="space-y-2 text-xs text-slate-600">
                <p>Ready to submit your original applied science manuscript?</p>
                <p className="font-semibold text-slate-800">Review time average: 3-5 Weeks</p>
              </div>
              <div className="space-y-2 pt-2">
                <Link
                  to="/submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Manuscript Online</span>
                </Link>
                <Link
                  to="/template"
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#0f4a85] bg-white hover:bg-slate-100 border border-slate-300 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-amber-600" />
                  <span>View .DOC Template Specs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 9-Point Key Publication Metrics Grid */}
        <div className="space-y-6 text-left">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Official Publication Specifications
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Standardized metadata and operational parameters governing IJMAR issues and articles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {publicationFacts.map((fact, idx) => {
              const IconComp = fact.icon;
              return (
                <div 
                  key={idx}
                  className="academic-card rounded-2xl p-5 flex items-start space-x-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-amber-100 text-[#0f4a85] group-hover:text-amber-900 flex items-center justify-center shrink-0 transition-colors border border-blue-100/80">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      {fact.label}
                    </span>
                    <h4 className="text-sm font-bold text-[#0f4a85] leading-snug">
                      {fact.value}
                    </h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      {fact.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-Stage Editorial Peer Review Workflow */}
        <div className="space-y-6 text-left">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f4a85]">
              Editorial & Peer Review Workflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Stage-wise procedure ensuring double-blind integrity, original screening, and rapid publication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((ws, idx) => (
              <div 
                key={idx}
                className="academic-card rounded-2xl p-5 flex flex-col justify-between space-y-3 relative group"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-extrabold text-amber-500 block">
                    STAGE {ws.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#0f4a85] group-hover:text-blue-700 transition-colors leading-snug">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <div className="w-full h-1 rounded-full bg-slate-100 group-hover:bg-amber-400 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Journal Mandate Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          <div className="academic-card rounded-2xl p-6 space-y-3">
            <div className="flex items-center space-x-2 font-bold text-[#0f4a85] text-base">
              <Globe className="w-5 h-5 text-amber-500" />
              <span>Open Access & Copyright Policy</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              IJMAR provides immediate open access to published research papers under the Creative Commons Attribution 4.0 International License (CC BY 4.0). Readers worldwide are permitted to read, download, copy, distribute, print, search, or link to full texts of all articles without prior subscription barriers.
            </p>
          </div>

          <div className="academic-card rounded-2xl p-6 space-y-3">
            <div className="flex items-center space-x-2 font-bold text-[#0f4a85] text-base">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span>Editorial Office & Institutional Governance</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All correspondence regarding manuscript submission, reviewer assignment, special issues, and publication certifications is managed through the Editorial Office of IJMAR at Shri Ramswaroop Memorial University, Lucknow-Deva Road, Barabanki, Uttar Pradesh, India.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
