import { Hexagon, Briefcase, Lightbulb, Code, Mail, X, Terminal, User, Award, Sparkles, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Sidebar.module.css';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, recruiterMode, setRecruiterMode }) => {
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

  return (
    <>
      {/* Sidebar Principal - Contém logotipo e navegação principal */}
      <div className={`${styles.sidebar} ${isMobileOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.brandContainer}>
            <motion.div 
              className={styles.logoPortal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className={`${styles.portalCorner} ${styles.tl}`}
                initial={{ x: 10, y: 10 }}
                animate={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.div>
              <motion.div 
                className={`${styles.portalCorner} ${styles.tr}`}
                initial={{ x: -10, y: 10 }}
                animate={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.div>
              <motion.div 
                className={`${styles.portalCorner} ${styles.bl}`}
                initial={{ x: 10, y: -10 }}
                animate={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.div>
              <motion.div 
                className={`${styles.portalCorner} ${styles.br}`}
                initial={{ x: -10, y: -10 }}
                animate={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.div>
              
              <motion.div 
                className={styles.monogram}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className={styles.letterL}>L</span>
                <span className={styles.letterL}>L</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.brandText}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <h1 className={styles.logoName}>
                <span className={styles.letterL}>L</span>ucas <span className={styles.letterL}>L</span>ima
              </h1>
              <p className={styles.logoSubtitle}>
                <span className="dot-pulse"></span>
                SISTEMAS DIGITAIS
              </p>
            </motion.div>
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
