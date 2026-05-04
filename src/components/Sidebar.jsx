import { useState, useEffect } from 'react';
import { Hexagon, Briefcase, Lightbulb, Code, Mail, X, Terminal, User, Award, Sparkles, Brain, Sun, Moon } from 'lucide-react';
import styles from './Sidebar.module.css';
import Logo from './Logo';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, recruiterMode, setRecruiterMode, lightMode, setLightMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'INÍCIO', icon: <Hexagon size={18} />, href: '#home' },
    { name: 'PROJETOS', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'CRIAÇÃO', icon: <Brain size={18} />, href: '#criacao' },
    { name: 'FRAMEWORK', icon: <Lightbulb size={18} />, href: '#framework' },
    { name: 'STACK', icon: <Cpu size={18} />, href: '#stack' },
    { name: 'LAB', icon: <Code size={18} />, href: '#lab' },
    { name: 'SOBRE', icon: <User size={18} />, href: '#about' },
    { name: 'EXPERIÊNCIA', icon: <Award size={18} />, href: '#experience' },
    { name: 'DIFERENCIAL', icon: <Sparkles size={18} />, href: '#diferencial' },
    { name: 'CONTATO', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <>
      <div className={`${styles.sidebar} ${isMobileOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          {/* Logo Recriado para Integração Perfeita */}
          <div className={styles.brandLink}>
            <Logo 
              type="complete" 
              lightMode={lightMode} 
              recruiterMode={recruiterMode}
              className={scrolled ? 'scrolled' : ''} 
            />
          </div>
          
          <button 
            className={styles.mobileClose}
            onClick={() => setIsMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={styles.navItem}
                >
                  <div className="hitech-border-glow"></div>
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navText}>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.footerControls}>
            <button 
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`${styles.footerBtn} ${recruiterMode ? styles.active : ''}`}
              title="Modo Recrutador"
              aria-label="Alternar Modo Recrutador"
            >
              <div className="hitech-border-glow"></div>
              <Terminal size={18} />
              <span className={styles.btnLabel}>Recrutador</span>
            </button>

            <button 
              onClick={() => setLightMode(!lightMode)}
              className={`${styles.footerBtn} ${lightMode ? styles.active : ''}`}
              title="Alternar Tema"
              aria-label="Alternar Tema Claro/Escuro"
            >
              <div className="hitech-border-glow"></div>
              {lightMode ? <Moon size={18} /> : <Sun size={18} />}
              <span className={styles.btnLabel}>{lightMode ? 'Escuro' : 'Claro'}</span>
            </button>
          </div>
          <p className={styles.recruiterDesc}>
            {recruiterMode ? 'Modo Leitura: Ativo' : (lightMode ? 'Portal: Modo Claro' : 'Portal: Modo Escuro')}
          </p>
        </div>
      </div>
      
      {isMobileOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
