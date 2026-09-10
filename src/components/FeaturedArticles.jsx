import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  ArrowRight, 
  FileText 
} from 'lucide-react';
import { featuredTemplateArticles } from '../data/journalDocData';
import ArticleCard from './ArticleCard';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedArticles() {
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
        { y: 20, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      gsap.fromTo('.article-card', 
        { y: 25, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
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
      className="py-12 md:py-18 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="articles-header flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="space-y-2.5 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Current Issue • Volume 01, Issue 1 (2026)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f4a85] tracking-tight">
              Featured Research Publications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Peer-reviewed high-impact papers formatted according to official IJSPAST template specifications. Published under open-access IEEE referencing standards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0f4a85] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid with Direct Routing to Dedicated Article Pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
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

        {/* Template Download Banner */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="flex items-center space-x-3.5 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0f4a85] flex items-center justify-center font-bold shrink-0 border border-blue-100">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Preparing a manuscript for submission?</p>
                <p className="text-[11px] sm:text-xs text-slate-500">Download the official camera-ready reference file (`13. Template.doc`) with Helvetica & Times New Roman typography rules.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <Link
                to="/template"
                className="inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0f4a85] hover:bg-blue-800 shadow-xs transition-colors"
              >
                <span>View Template Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
