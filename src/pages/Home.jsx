import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GeneralInfo from '../components/GeneralInfo';
import PatronsSection from '../components/PatronsSection';
import FeaturedArticles from '../components/FeaturedArticles';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import SubmitModal from '../components/SubmitModal';
import GuidelinesModal from '../components/GuidelinesModal';
import ArticleModal from '../components/ArticleModal';
import SearchModal from '../components/SearchModal';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  const [guidelinesTab, setGuidelinesTab] = useState('guidelines');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openGuidelinesWithTab = (tab = 'guidelines') => {
    setGuidelinesTab(tab);
    setIsGuidelinesOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-amber-400 selection:text-slate-900">
      {/* Dynamic Background */}
      <ParticlesBackground />

      {/* Header */}
      <Header 
        onOpenContact={() => setIsSubmitOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenGuidelines={openGuidelinesWithTab}
      />

      {/* Main Content Sections (matching handwritten wireframe structure) */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenContact={() => setIsSubmitOpen(true)}
          onOpenGuidelines={openGuidelinesWithTab}
        />

        {/* 2. General Information Section (Mission, Scope, Vision) */}
        <GeneralInfo 
          onOpenGuidelines={openGuidelinesWithTab}
        />

        {/* Patrons & Co-Patrons Leadership Section (matching theme.png wireframe) */}
        <PatronsSection />

        {/* 3. Featured Articles Section (4-Card Grid) */}
        <FeaturedArticles 
          onSelectArticle={(article) => setSelectedArticle(article)}
          onOpenGuidelines={openGuidelinesWithTab}
        />

        {/* 4. Submission Callout Section */}
        <CtaSection 
          onOpenContact={() => setIsSubmitOpen(true)}
          onOpenGuidelines={openGuidelinesWithTab}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenGuidelines={openGuidelinesWithTab}
        onOpenContact={() => setIsSubmitOpen(true)}
      />

      {/* Modals & Dialogs */}
      <SubmitModal 
        isOpen={isSubmitOpen} 
        onClose={() => setIsSubmitOpen(false)} 
        onOpenGuidelines={openGuidelinesWithTab}
      />

      <GuidelinesModal 
        isOpen={isGuidelinesOpen} 
        initialTab={guidelinesTab}
        onClose={() => setIsGuidelinesOpen(false)} 
      />

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(article) => setSelectedArticle(article)}
        onOpenGuidelines={openGuidelinesWithTab}
      />
    </div>
  );
}
