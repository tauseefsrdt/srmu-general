import React, { useState } from 'react';
import { useLenis } from '../hooks/useLenis';
import ParticlesBackground from '../components/ParticlesBackground';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GeneralInfo from '../components/GeneralInfo';
import FeaturedArticles from '../components/FeaturedArticles';
import Footer from '../components/Footer';
import ArticleModal from '../components/ArticleModal';
import SubmitModal from '../components/SubmitModal';
import SearchModal from '../components/SearchModal';

export default function Home() {
  // Initialize Lenis smooth scroll synchronized with GSAP
  useLenis();

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden font-sans">
      {/* Dynamic Subtle Particle Network */}
      <ParticlesBackground />

      {/* Sticky Header with Navigation Dropdowns */}
      <Header 
        onOpenSubmit={() => setIsSubmitOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections strictly following Wireframe structure */}
      <main className="relative z-10">
        {/* 1. Hero / Introductory Section */}
        <Hero 
          onOpenSubmit={() => setIsSubmitOpen(true)}
          onOpenArticle={(art) => setSelectedArticle(art)}
        />

        {/* 2. General Information Section: [ Mission ] [ General Information ] [ Vision ] */}
        <GeneralInfo />

        {/* 3. Featured Articles Section: 4 Cards Responsive Grid */}
        <FeaturedArticles 
          onSelectArticle={(art) => setSelectedArticle(art)}
        />
      </main>

      {/* 4. Footer Section */}
      <Footer />

      {/* Interactive Modals */}
      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />

      <SubmitModal 
        isOpen={isSubmitOpen} 
        onClose={() => setIsSubmitOpen(false)} 
      />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />
    </div>
  );
}
