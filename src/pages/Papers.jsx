import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Calendar, 
  Quote, 
  ArrowUpRight, 
  Download, 
  FileText,
  Layers,
  Filter
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { featuredTemplateArticles } from '../data/journalDocData';
import ArticleCard from '../components/ArticleCard';

export default function Papers() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Wireless & 5G/6G', 'Energy & Materials', 'Cyber & Networks', 'Applied Physics'];

  const filteredArticles = featuredTemplateArticles.filter(art => {
    const matchesCat = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.authors.some(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* Page Hero */}
      <PageHero
        title="Journal Papers & Research Publications"
        subtitle="Explore peer-reviewed open-access articles and special tracks formatted according to official IEEE referencing specifications."
        badge="Current Issue · Volume 01 (2026)"
        breadcrumbs={[
          { name: "Papers", path: "/papers" },
          { name: "Current Issue & Archives" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 text-left">
        
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0f3b6c] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, author, DOI..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-blue-600 text-slate-800"
            />
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredArticles.map((article) => (
            <Link 
              key={article.id} 
              to={`/articles/${article.id}`}
              className="block"
            >
              <ArticleCard 
                article={article} 
                onSelect={() => {}}
              />
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-sm text-slate-500">No research articles match your search criteria.</p>
          </div>
        )}

        {/* Template Banner */}
        <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0f3b6c] flex items-center justify-center font-bold shrink-0 border border-blue-100">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">Publishing in IJSPAST</h4>
              <p className="text-xs text-slate-500">Download the camera-ready template (`13. Template.doc`) with Times New Roman & Helvetica formatting rules.</p>
            </div>
          </div>
          <Link
            to="/template"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0f3b6c] hover:bg-blue-800 transition-colors shrink-0"
          >
            View Template Specs
          </Link>
        </div>

      </div>
    </div>
  );
}
