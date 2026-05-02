import { Hexagon, Briefcase, Lightbulb, Code, Mail, X, Terminal, User, Award, Sparkles, Brain } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, recruiterMode, setRecruiterMode }) => {
  const menuItems = [
    { name: 'Início', icon: <Hexagon size={18} />, href: '#home' },
    { name: 'Projetos', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'Criação', icon: <Brain size={18} />, href: '#criacao' },
    { name: 'Framework', icon: <Lightbulb size={18} />, href: '#framework' },
    { name: 'Lab', icon: <Code size={18} />, href: '#lab' },
    { name: 'Sobre', icon: <User size={18} />, href: '#about' },
    { name: 'Experiência', icon: <Award size={18} />, href: '#experience' },
    { name: 'Diferencial', icon: <Sparkles size={18} />, href: '#diferencial' },
    { name: 'Contato', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <>
      {/* Sidebar Principal - Contém logotipo e navegação principal */}
      <div className={`${styles.sidebar} ${isMobileOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <div>
            <h1 className={styles.logoName}>Lucas Lima</h1>
            <p className={styles.logoSubtitle}>
              <span className="dot-pulse"></span>
              Construtor Digital
            </p>
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

        {/* Rodapé com controle do Modo Recrutador */}
        <div className={styles.sidebarFooter}>
          <button 
            onClick={() => setRecruiterMode(!recruiterMode)}
            className={`${styles.recruiterBtn} ${recruiterMode ? styles.active : ''}`}
          >
            <div className="hitech-border-glow"></div>
            <Terminal size={18} className={styles.footerIcon} />
            <span className={styles.footerText}>Modo Recrutador</span>
          </button>
          <p className={styles.recruiterDesc}>
            {recruiterMode ? 'Visual simplificado' : 'Experiência imersiva'}
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
