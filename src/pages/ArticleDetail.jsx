import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Quote, 
  Download, 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  BookOpen, 
  Share2, 
  FileText,
  Building,
  Sparkles
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { featuredTemplateArticles } from '../data/journalDocData';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = featuredTemplateArticles.find(a => a.id === id) || featuredTemplateArticles[0];

  const handleDownloadPdf = () => {
    alert(`Downloading PDF for manuscript: "${article.title}"`);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* Page Hero */}
      <PageHero
        title={article.title}
        badge={article.category}
        breadcrumbs={[
          { name: "Papers", path: "/papers" },
          { name: article.volume, path: "/papers" },
          { name: "Article Details" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header Metadata Card */}
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-6">
              
              {/* Citation & Date Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-3 font-semibold">
                  <span className="flex items-center space-x-1 text-slate-700">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span>{article.date}</span>
                  </span>
                  <span>•</span>
                  <span>{article.volume}</span>
                  <span>•</span>
                  <span>{article.pages}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-bold text-[10px] border border-emerald-200">
                    Open Access CC BY 4.0
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 font-bold text-[10px] border border-blue-200">
                    Peer-Reviewed
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0f4a85] tracking-tight leading-snug">
                {article.title}
              </h2>

              {/* Authors List & Affiliations */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Authors & Institutional Affiliations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {article.authors.map((author, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-0.5">
                      <span className="font-bold text-[#0f4a85] block">{author.name}</span>
                      <span className="text-slate-500 text-[11px] flex items-center space-x-1">
                        <Building className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{author.affiliation}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abstract */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f4a85]">
                  Abstract
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {article.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Index Terms / Keywords
                </span>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((kw, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Simulated Section Content based on Template Structure */}
            <div className="academic-card p-6 sm:p-8 rounded-3xl bg-white space-y-6">
              <h3 className="text-lg font-bold text-[#0f4a85] border-b border-slate-100 pb-3">
                I. Introduction & Theoretical Model
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Artificially engineered materials known as metamaterials have extraordinary capabilities to regulate and modify the behavior of incoming electromagnetic waves. In this paper, stage-wise numerical simulations and equivalent circuit models demonstrate optimal miniaturization and multi-band absorption.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <p className="font-semibold text-slate-800">Citing this paper in IEEE standard:</p>
                <code className="block bg-white p-3 rounded-xl border border-slate-200 text-[#0f4a85] font-mono">
                  {article.authors.map(a => a.name).join(', ')}, "{article.title}," IJMAR, {article.volume}, {article.pages}, 2026. DOI: {article.doi}
                </code>
              </div>
            </div>

          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Download & Access Card */}
            <div className="academic-card p-6 rounded-3xl bg-white space-y-4">
              <h4 className="text-sm font-bold text-[#0f4a85] uppercase tracking-wider">
                Download & Access
              </h4>
              <button
                onClick={handleDownloadPdf}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Full PDF (Open Access)</span>
              </button>

              <div className="space-y-2.5 pt-2 text-xs text-slate-600 border-t border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-400">Digital Object Identifier (DOI):</span>
                  <span className="font-mono font-bold text-blue-700">{article.doi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Citations:</span>
                  <span className="font-bold text-slate-800">{article.citations} Cites</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Reading Time:</span>
                  <span className="font-bold text-slate-800">{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Back to Archive Link */}
            <div className="p-4 rounded-2xl bg-slate-100 text-center">
              <Link
                to="/papers"
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#0f4a85] hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Publications</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
