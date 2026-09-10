import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Download, 
  FileText 
} from 'lucide-react';
import { featuredTemplateArticles } from '../data/journalDocData';
import ArticleCard from './ArticleCard';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedArticles({ onSelectArticle, onOpenGuidelines }) {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Wireless & 5G/6G', 'Energy & Materials', 'Cyber & Networks', 'Applied Physics'];

  const filteredArticles = activeCategory === 'All'
    ? featuredTemplateArticles
    : featuredTemplateArticles.filter(art => art.category === activeCategory);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.articles-header', 
        { y: 25, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      gsap.fromTo('.article-card', 
        { y: 30, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="featured-articles" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="articles-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Current Issue • Volume 01, Issue 1 (2026)</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3b6c] tracking-tight">
              Featured Research Publications
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Peer-reviewed high-impact papers formatted according to official IJSPAST template specifications. Published under open-access IEEE referencing standards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0f3b6c] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              onSelect={onSelectArticle}
            />
          ))}
        </div>

        {/* Template Download Banner */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0f3b6c] flex items-center justify-center font-bold shrink-0 border border-blue-100">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Preparing a manuscript for submission?</p>
                <p className="text-xs text-slate-500">Download the official camera-ready reference file (`13. Template.doc`) with Helvetica & Times New Roman typography rules.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => onOpenGuidelines?.('template')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#0f3b6c] hover:bg-blue-800 shadow-sm transition-colors cursor-pointer"
              >
                <span>View Template Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
