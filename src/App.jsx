import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import './index.css';

// --- COMPONENTES MODULARIZADOS ---
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Process from './components/Process';
import Diferencial from './components/Diferencial';
import Solutions from './components/Solutions';
import Contact from './components/Contact';

function App() {
  // Controle de estado para exibição do menu no formato mobile
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Controle do Modo Recrutador (Feature focada em acessibilidade/leitura rápida)
  const [recruiterMode, setRecruiterMode] = useState(false);
  
  // Detecta se a página rolou para alterar o estilo do header
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // A classe recruiter-mode injetada no body container altera as variáveis de CSS no index.css
    <div className={`app-container ${recruiterMode ? 'recruiter-mode' : ''}`}>
      
      <Sidebar 
        isMobileOpen={isMobileOpen} 
        setIsMobileOpen={setIsMobileOpen} 
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
      />
      
      {/* Header visível apenas na versão responsiva (Mobile) */}
      <div className={`mobile-header ${scrolled ? 'scrolled' : ''}`}>
        <span className="mobile-logo">LUCAS LIMA</span>
        <button onClick={() => setIsMobileOpen(true)} className="mobile-menu-btn">
          <Menu size={24} />
        </button>
      </div>

      {/* Container Principal onde os componentes são injetados */}
      <main className="main-content">
        <Hero />
        <Projects />
        <Process />
        <Diferencial />
        <Solutions />
        <Contact />
        
        {/* Rodapé fixo */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Lucas Lima. Construído com foco em experiência, performance e diferenciação real.</p>
        </footer>
      </main>
      
    </div>
  );
}

export default App;
