import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Layers,
  Compass,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalScopeTopics, generalInfoCards } from '../data/journalDocData';

export default function VisionScope() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const missionCard = generalInfoCards.find(c => c.id === 'mission') || generalInfoCards[0];
  const visionCard = generalInfoCards.find(c => c.id === 'vision') || generalInfoCards[2];

  const categories = ['All', 'Computing & AI', 'Electronics & Comm', 'Core Engineering', 'Energy & Materials', 'Applied Sciences', 'Automation & Robotics', 'Interdisciplinary'];

  const filteredTopics = journalScopeTopics.filter(topic => {
    const matchesCat = selectedCategory === 'All' || topic.category === selectedCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* Page Hero */}
      <PageHero
        title="Vision & Scope of the Journal"
        subtitle="Explore the 23+ interdisciplinary scientific, engineering, and technological domains covered by the International Journal of Scientific Progress in Applied Science and Technology."
        badge="Academic Scope & Mandate"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Vision & Scope" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 text-left">

        {/* Mission & Vision 2-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

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

        </div>

        {/* 23+ Submission Scope Interactive Section */}
        <div className="space-y-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#0f4a85] text-xs font-bold border border-blue-200 mb-2">
                <Layers className="w-3.5 h-3.5 text-amber-500" />
                <span>Extracted from Scope of the Journal.docx</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f4a85]">
                23+ Interdisciplinary Submission Areas
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                IJSPAST welcomes submissions in, but not limited to, the following core and emerging engineering & applied science areas:
              </p>
            </div>

            {/* Live Search Filter */}
            <div className="relative w-full sm:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search research topics..."
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-blue-600 text-slate-800"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${selectedCategory === cat
                    ? 'bg-[#0f4a85] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="academic-card bg-white p-4 rounded-2xl flex items-start space-x-3 group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 group-hover:bg-amber-100 text-[#0f4a85] group-hover:text-amber-800 flex items-center justify-center shrink-0 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#0f4a85] transition-colors leading-snug">
                    {topic.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                    {topic.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">No research topics match your search.</p>
            </div>
          )}

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
