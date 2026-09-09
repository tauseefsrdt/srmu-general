import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  SlidersHorizontal,
  DownloadCloud,
  FileCheck
} from 'lucide-react';
import { featuredArticles } from '../data/data';
import ArticleCard from './ArticleCard';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedArticles({ onSelectArticle }) {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & Robotics', 'Bioscience & Biotech', 'Materials & Energy', 'Quantum & Photonics'];

  const filteredArticles = activeCategory === 'All'
    ? featuredArticles
    : featuredArticles.filter(art => art.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 4)));

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.from('.articles-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });

      gsap.from('.article-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 45,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section 
      id="featured-articles" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="articles-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Current Issue • Volume 12, Issue 4</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3b6c] tracking-tight">
              Featured Research Articles
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Peer-reviewed high-impact papers published in the latest volume of IJSPAST. Freely available under CC BY 4.0 Open Access license.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/90 rounded-xl border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0f3b6c] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid: 4 Cards on Desktop (matching wireframe 4 boxes), 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              onSelect={onSelectArticle}
            />
          ))}
        </div>

        {/* View All Archives CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 border border-slate-200/80 shadow-2xs">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0f3b6c] flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Looking for previous editions and archive volumes?</p>
                <p className="text-[11px] text-slate-500">Explore over 195+ published papers spanning 2018 to 2026.</p>
              </div>
            </div>
            <a
              href="#archives"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0f3b6c] hover:bg-blue-800 shadow-sm transition-colors shrink-0"
            >
              <span>Explore Full Journal Archives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
