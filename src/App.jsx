import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import SearchModal from './components/SearchModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PublicationDetails from './pages/PublicationDetails';
import VisionScope from './pages/VisionScope';
import PatronsAdvisory from './pages/PatronsAdvisory';
import Guidelines from './pages/Guidelines';
import Template from './pages/Template';
import ReferencingStyle from './pages/ReferencingStyle';
import EthicsPolicy from './pages/EthicsPolicy';
import Papers from './pages/Papers';
import Submit from './pages/Submit';
import EditorialBorad from './pages/EditorialBorad';
import PeerReviewPolicy from './pages/PeerReviewPolicy';


// Scroll to top on route change component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  React.useEffect(() => {
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
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-amber-400 selection:text-slate-950 font-sans flex flex-col justify-between">
      {/* Background Particle Network */}
      <ParticlesBackground />

      {/* Global Navigation Header */}
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Routed Content Area */}
      <main className="relative flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publication-details" element={<PublicationDetails />} />
          <Route path="/vision-scope" element={<VisionScope />} />
          <Route path="/patrons-advisory" element={<PatronsAdvisory />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/template" element={<Template />} />
          <Route path="/referencing-style" element={<ReferencingStyle />} />
          <Route path="/ethics-policy" element={<EthicsPolicy />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/editorial-borad" element={<EditorialBorad />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/peer-review-policy" element={<PeerReviewPolicy />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Search Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(article) => {
          setIsSearchOpen(false);
          window.location.href = '/papers';
        }}
        onOpenGuidelines={() => {
          setIsSearchOpen(false);
          window.location.href = '/guidelines';
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout />
    </BrowserRouter>
  );
}
