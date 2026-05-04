import { useState, useEffect, lazy, Suspense } from 'react';
import { Menu } from 'lucide-react';
import { MotionConfig } from 'framer-motion';
import './index.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Logo from './components/Logo';
import SectionSkeleton from './components/SectionSkeleton';
import JSONLD from './components/JSONLD';
import ErrorBoundary from './components/ErrorBoundary';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// --- COMPONENTES NÃO-CRÍTICOS (Lazy Loading para Otimização) ---
const About = lazy(() => import('./components/About'));
const Creation = lazy(() => import('./components/Creation'));
const Framework = lazy(() => import('./components/Framework'));
const Experience = lazy(() => import('./components/Experience'));
const Lab = lazy(() => import('./components/Lab'));
const Contact = lazy(() => import('./components/Contact'));
const Diferencial = lazy(() => import('./components/Diferencial'));

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 !== scrolled) {
        setScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <MotionConfig reducedMotion={recruiterMode ? "always" : "user"}>
      <div className={`app-container ${recruiterMode ? 'recruiter-mode' : ''} ${lightMode ? 'light-mode' : ''}`}>
        <JSONLD />
        <div className="bg-noise" />
        
        <Sidebar 
          isMobileOpen={isMobileOpen} 
          setIsMobileOpen={setIsMobileOpen} 
          recruiterMode={recruiterMode}
          setRecruiterMode={setRecruiterMode}
          lightMode={lightMode}
          setLightMode={setLightMode}
        />
        
        <div className={`mobile-header ${scrolled ? 'scrolled' : ''}`}>
          <div className="mobile-brand">
            <span className="mobile-brand-name">LUCAS LIMA</span>
            <span className="mobile-brand-status">DIGITAL PRODUCT BUILDER</span>
          </div>
          <button onClick={() => setIsMobileOpen(true)} className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
  
        <main className="main-content">
          <ErrorBoundary componentName="HERO_CORE">
            <Hero />
          </ErrorBoundary>

          <ErrorBoundary componentName="PROJECT_ENGINE">
            <Projects recruiterMode={recruiterMode} lightMode={lightMode} />
          </ErrorBoundary>
          
          <ErrorBoundary componentName="LAZY_MODULES">
            <Suspense fallback={<SectionSkeleton />}>
              <Creation />
              <Framework />
              <Lab recruiterMode={recruiterMode} />
              <About />
              <Experience />
              <Diferencial />
              <Contact />
            </Suspense>
          </ErrorBoundary>
          
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-line"></div>
              <p>© {new Date().getFullYear()} Lucas Lima. Otimizado para alta performance e experiência imersiva.</p>
            </div>
          </footer>
        </main>
        
        <Analytics />
        <SpeedInsights />
      </div>
    </MotionConfig>
  );
}

export default App;

