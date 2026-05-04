import { useState, useEffect, useRef } from 'react';
import { Hexagon, Briefcase, Lightbulb, Code, Mail, X, Terminal, User, Award, Sparkles, Brain, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Sidebar.module.css';
import { getLogoUrl } from '../lib/supabase';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, recruiterMode, setRecruiterMode, lightMode, setLightMode }) => {
  const [logoState, setLogoState] = useState('portal'); // portal, monogram, complete
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // URLs dos Logos
  const logoUrls = {
    monogram: lightMode 
      ? getLogoUrl('Monograma-Oficial-ColorLigth.svg') 
      : getLogoUrl('Monograma-Oficial-ColorDark.svg'),
    complete: lightMode 
      ? getLogoUrl('Logo-Oficial-ColorLight.svg') 
      : getLogoUrl('Logo-Oficial-ColorDark.svg')
  };

  const menuItems = [
    { name: 'INÍCIO', icon: <Hexagon size={18} />, href: '#home' },
    { name: 'PROJETOS', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'CRIAÇÃO', icon: <Brain size={18} />, href: '#criacao' },
    { name: 'FRAMEWORK', icon: <Lightbulb size={18} />, href: '#framework' },
    { name: 'LAB', icon: <Code size={18} />, href: '#lab' },
    { name: 'SOBRE', icon: <User size={18} />, href: '#about' },
    { name: 'EXPERIÊNCIA', icon: <Award size={18} />, href: '#experience' },
    { name: 'DIFERENCIAL', icon: <Sparkles size={18} />, href: '#diferencial' },
    { name: 'CONTATO', icon: <Mail size={18} />, href: '#contact' },
  ];

  // Sequência de Evolução Inicial
  useEffect(() => {
    const sequence = async () => {
      setLogoState('portal');
      await new Promise(r => setTimeout(r, 1000));
      setLogoState('monogram');
      await new Promise(r => setTimeout(r, 1000));
      setLogoState('complete');
      await new Promise(r => setTimeout(r, 3000));
      
      // Só volta para monograma se não estiver no topo/hero
      if (hasScrolled || !isHeroVisible) {
        setLogoState('monogram');
      }
    };
    sequence();
  }, []);

  // Monitorar Scroll e Visibilidade do Hero
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
        // Só transiciona se a sequência inicial já terminou
        if (entry.isIntersecting) {
          setLogoState('complete');
        } else {
          setLogoState('monogram');
        }
      },
      { threshold: 0.1 }
    );

    const heroElement = document.querySelector('#home');
    if (heroElement) observer.observe(heroElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
    };
  }, [isHeroVisible, hasScrolled, logoState]);

  return (
    <>
      {/* Sidebar Principal - Contém logotipo e navegação principal */}
      <div className={`${styles.sidebar} ${isMobileOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.brandWrapper}>
            <div 
              className={`${styles.brandContainer} ${styles['state' + logoState.charAt(0).toUpperCase() + logoState.slice(1)]}`}
              onClick={() => setLogoState(logoState === 'complete' ? 'monogram' : 'complete')}
            >
              <div className={styles.logoPortal}>
                <div className={`${styles.portalCorner} ${styles.tl}`}></div>
                <div className={`${styles.portalCorner} ${styles.tr}`}></div>
                <div className={`${styles.portalCorner} ${styles.bl}`}></div>
                <div className={`${styles.portalCorner} ${styles.br}`}></div>
                
                <AnimatePresence mode="wait">
                  {(logoState === 'monogram' || logoState === 'portal') ? (
                    <motion.img 
                      key="monogram"
                      src={logoUrls.monogram}
                      className={styles.monogramImg}
                      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  ) : (
                    <motion.img 
                      key="complete"
                      src={logoUrls.complete}
                      className={styles.completeLogoImg}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </div>

              {logoState === 'monogram' && (
                <div className={styles.brandText}>
                  <motion.h1 
                    className={styles.logoName}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    Lucas Lima
                  </motion.h1>
                </div>
              )}
            </div>

            <AnimatePresence>
              {logoState === 'complete' && (
                <motion.p 
                  className={styles.logoSubtitle}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="dot-pulse"></span>
                  Sistemas & Produtos Digitais
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <button 
            className={styles.mobileClose}
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Links de navegação para as seções da página */}
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
            >
              <div className="hitech-border-glow"></div>
              <Terminal size={18} />
              <span className={styles.btnLabel}>Recrutador</span>
            </button>

            <button 
              onClick={() => setLightMode(!lightMode)}
              className={`${styles.footerBtn} ${lightMode ? styles.active : ''}`}
              title="Alternar Tema"
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
      
      {/* Overlay para escurecer o fundo no mobile quando o menu está aberto */}
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
