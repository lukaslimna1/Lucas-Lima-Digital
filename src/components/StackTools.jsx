import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Database, Triangle, Server, Layout, PenTool, Image, 
  MousePointer, Layers, Award, BarChart3, Table, PieChart, Search, 
  TrendingUp, Target, Share2, Type, Megaphone, Smile, Wrench, 
  Settings, Activity, Zap, Headphones, ClipboardList, Users, 
  Clock, FileText, Cpu, Code
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faGithub, faFigma 
} from '@fortawesome/free-brands-svg-icons';
import { stackData } from '../data/stack';
import styles from './StackTools.module.css';
import { useMousePosition } from '../utils/useMousePosition';

const StackTools = ({ lightMode, recruiterMode }) => {
  const { handleMouseMove } = useMousePosition();
  
  const renderIcon = (tool, color) => {
    // Custom SVGs for high-fidelity branding
    const customSvgs = {
      'typescript': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill={color} rx="2" fillOpacity="0.1" />
          <text x="18" y="20" fill={color} fontFamily="Arial" fontWeight="bold" fontSize="10" textAnchor="middle">TS</text>
        </svg>
      ),
      'vscode': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 17L18.5 21L9 16L4 20L0.5 18V6L4 4L9 8L18.5 3L23.5 7V17Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M18.5 3V21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9 8V16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      'supabase': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.44 2.5L4.5 14H11.5L10.56 21.5L19.5 10H12.5L13.44 2.5Z" fill={color}/>
        </svg>
      ),
      'vercel': (
        <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      ),
      'mongodb': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c-.3 0-.6.1-.8.4C10.5 3.5 8 8.5 8 12.5c0 4 2.5 9.5 3.2 11.1.2.3.5.4.8.4.3 0 .6-.1.8-.4.7-1.6 3.2-7.1 3.2-11.1 0-4-2.5-9-3.2-10.1-.2-.3-.5-.4-.8-.4z" fill={color}/>
        </svg>
      ),
      'adobexd': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill={color} fillOpacity="0.1"/>
          <text x="50%" y="65%" fill={color} fontFamily="var(--font-heading)" fontWeight="900" fontSize="10" textAnchor="middle">Xd</text>
          <rect x="1" y="1" width="22" height="22" rx="3" stroke={color} strokeWidth="0.5" opacity="0.3" />
        </svg>
      ),
      'photoshop': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill={color} fillOpacity="0.1"/>
          <text x="50%" y="65%" fill={color} fontFamily="var(--font-heading)" fontWeight="900" fontSize="10" textAnchor="middle">Ps</text>
          <rect x="1" y="1" width="22" height="22" rx="3" stroke={color} strokeWidth="0.5" opacity="0.3" />
        </svg>
      ),
      'illustrator': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill={color} fillOpacity="0.1"/>
          <text x="50%" y="65%" fill={color} fontFamily="var(--font-heading)" fontWeight="900" fontSize="10" textAnchor="middle">Ai</text>
          <rect x="1" y="1" width="22" height="22" rx="3" stroke={color} strokeWidth="0.5" opacity="0.3" />
        </svg>
      ),
      'powerbi': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H20V22H18V2ZM14 8H16V22H14V8ZM10 14H12V22H10V14Z" fill={color}/>
        </svg>
      ),
      'excel': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill={color} fillOpacity="0.1"/>
          <path d="M8 8L16 16M16 8L8 16" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    };

    if (customSvgs[tool.icon]) {
      return <div className={styles.toolIconSvg}>{customSvgs[tool.icon]}</div>;
    }

    if (tool.iconType === 'brand') {
      const brandIcons = {
        'html5': faHtml5,
        'css3-alt': faCss3Alt,
        'js': faJs,
        'react': faReact,
        'node-js': faNodeJs,
        'git-alt': faGitAlt,
        'github': faGithub,
        'figma': faFigma
      };
      
      if (brandIcons[tool.icon]) {
        return <FontAwesomeIcon icon={brandIcons[tool.icon]} style={{ color }} size="2x" />;
      }
      return <Code size={32} color={color} />;
    }

    const lucideIcons = {
      'terminal': <Terminal size={32} color={color} />,
      'database': <Database size={32} color={color} />,
      'triangle': <Triangle size={32} color={color} />,
      'server': <Server size={32} color={color} />,
      'layout': <Layout size={32} color={color} />,
      'pen-tool': <PenTool size={32} color={color} />,
      'image': <Image size={32} color={color} />,
      'mouse-pointer': <MousePointer size={32} color={color} />,
      'layers': <Layers size={32} color={color} />,
      'award': <Award size={32} color={color} />,
      'bar-chart-3': <BarChart3 size={32} color={color} />,
      'table': <Table size={32} color={color} />,
      'pie-chart': <PieChart size={32} color={color} />,
      'search': <Search size={32} color={color} />,
      'trending-up': <TrendingUp size={32} color={color} />,
      'target': <Target size={32} color={color} />,
      'share-2': <Share2 size={32} color={color} />,
      'type': <Type size={32} color={color} />,
      'megaphone': <Megaphone size={32} color={color} />,
      'smile': <Smile size={32} color={color} />,
      'wrench': <Wrench size={32} color={color} />,
      'settings': <Settings size={32} color={color} />,
      'activity': <Activity size={32} color={color} />,
      'zap': <Zap size={32} color={color} />,
      'headphones': <Headphones size={32} color={color} />,
      'clipboard-list': <ClipboardList size={32} color={color} />,
      'users': <Users size={32} color={color} />,
      'clock': <Clock size={32} color={color} />,
      'file-text': <FileText size={32} color={color} />,
      'cpu': <Cpu size={32} color={color} />,
      'code': <Code size={32} color={color} />
    };

    return lucideIcons[tool.icon] || <Code size={32} color={color} />;
  };

  const getCategoryIcon = (area) => {
    switch (area) {
      case 'Desenvolvimento': return <Code size={24} />;
      case 'Design & UX/UI': return <PenTool size={24} />;
      case 'Dados & BI': return <BarChart3 size={24} />;
      case 'Marketing & Marca': return <Target size={24} />;
      case 'Infraestrutura & Hardware': return <Cpu size={24} />;
      case 'Gestão & Operações': return <ClipboardList size={24} />;
      default: return <Terminal size={24} />;
    }
  };

  const getTypeClass = (type) => {
    switch (type) {
      case 'estrategia': return styles.typeAzul;
      case 'tecnica': return styles.typeCiano;
      case 'futuro': return styles.typeVerde;
      default: return '';
    }
  };

  return (
    <section 
      id="stack" 
      className={`section hitech ${styles.stackSection} ${lightMode ? styles.light : ''} ${recruiterMode ? styles.recruiter : ''}`}
    >
      <div className="hitech-grid-overlay"></div>
      <div className="section-header">
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          STACK & <span className="text-gradient">FERRAMENTAS</span>
        </motion.h2>
        <p className="section-subtitle">
          Minha atuação combina recursos técnicos, criativos e analíticos para transformar ideias, processos e marcas em soluções digitais funcionais.
        </p>
      </div>

      <div className={styles.grid}>
        {stackData.map((group, idx) => {
          const groupColor = `var(--category-${group.type})`;
          return (
            <motion.div 
              key={idx} 
              className={`hitech-card-wrapper ${styles.stackCardWrapper}`}
              onMouseMove={handleMouseMove}
              style={{
                '--step-color': groupColor,
                '--step-shadow': `${groupColor}15`,
                '--step-border': `${groupColor}30`
              }}
            >
              <motion.div 
                className={`hitech-card glass-panel ${styles.stackCard}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
              <div className="hitech-asymmetric-aura"></div>
              <div className="hitech-artistic-fusion"></div>
              <div className="hitech-artistic-grain"></div>
              <div className="hitech-border-glow"></div>
              
              {/* Bordas em L */}
              <div className="corner-decor top-left"></div>
              <div className="corner-decor top-right"></div>
              <div className="corner-decor bottom-left"></div>
              <div className="corner-decor bottom-right"></div>

              <div className={styles.cardHeader}>
                <div className={styles.iconTitleRow}>
                  <div className={styles.headerIcon}>
                    {getCategoryIcon(group.area)}
                  </div>
                  <h3 className={styles.categoryTitle}>{group.area}</h3>
                </div>
              </div>

              <div className={styles.cardMain}>
                <div className={styles.toolsGrid}>
                  {group.tools.map((tool, tIdx) => (
                    <motion.div 
                      key={tIdx}
                      whileHover={{ scale: 1.05 }}
                      className={styles.toolItem}
                    >
                      <div className={styles.toolIcon}>
                        {renderIcon(tool, groupColor)}
                      </div>
                      <span className={styles.toolName}>{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )})}
      </div>
    </section>
  );
};

export default StackTools;
