import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import GeneralInfo from '../components/GeneralInfo';
import FeaturedArticles from '../components/FeaturedArticles';
import CtaSection from '../components/CtaSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero 
        onOpenContact={() => {}}
        onOpenGuidelines={() => {}}
      />

      {/* 2. General Information Section (Mission, Scope, Vision) */}
      <GeneralInfo 
        onOpenGuidelines={() => {}}
      />

      {/* 3. Featured Articles Section */}
      <FeaturedArticles 
        onSelectArticle={() => {}}
        onOpenGuidelines={() => {}}
      />

      {/* 5. Submission Callout Section */}
      <CtaSection 
        onOpenContact={() => {}}
        onOpenGuidelines={() => {}}
      />
    </div>
  );
}
