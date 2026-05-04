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

const StackTools = ({ lightMode, recruiterMode }) => {
  
  const renderIcon = (tool) => {
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
        return <FontAwesomeIcon icon={brandIcons[tool.icon]} />;
      }
      return <Code size={16} />;
    }

    const lucideIcons = {
      'terminal': <Terminal size={16} />,
      'database': <Database size={16} />,
      'triangle': <Triangle size={16} />,
      'server': <Server size={16} />,
      'layout': <Layout size={16} />,
      'pen-tool': <PenTool size={16} />,
      'image': <Image size={16} />,
      'mouse-pointer': <MousePointer size={16} />,
      'layers': <Layers size={16} />,
      'award': <Award size={16} />,
      'bar-chart-3': <BarChart3 size={16} />,
      'table': <Table size={16} />,
      'pie-chart': <PieChart size={16} />,
      'search': <Search size={16} />,
      'trending-up': <TrendingUp size={16} />,
      'target': <Target size={16} />,
      'share-2': <Share2 size={16} />,
      'type': <Type size={16} />,
      'megaphone': <Megaphone size={16} />,
      'smile': <Smile size={16} />,
      'wrench': <Wrench size={16} />,
      'settings': <Settings size={16} />,
      'activity': <Activity size={16} />,
      'zap': <Zap size={16} />,
      'headphones': <Headphones size={16} />,
      'clipboard-list': <ClipboardList size={16} />,
      'users': <Users size={16} />,
      'clock': <Clock size={16} />,
      'file-text': <FileText size={16} />,
      'cpu': <Cpu size={16} />,
      'code': <Code size={16} />
    };

    return lucideIcons[tool.icon] || <Code size={16} />;
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
      className={`${styles.stackSection} ${lightMode ? styles.light : ''} ${recruiterMode ? styles.recruiter : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div 
            className={styles.headerLine}
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            transition={{ duration: 1 }}
          />
          <h2 className={styles.title}>STACK & FERRAMENTAS</h2>
          <h3 className={styles.subtitle}>
            Ferramentas, linguagens e sistemas que conectam tecnologia, design, dados, marketing e operação.
          </h3>
          <p className={styles.description}>
            Minha atuação combina recursos técnicos, criativos e analíticos para transformar ideias, processos e marcas em soluções digitais funcionais.
          </p>
        </div>

        <div className={styles.grid}>
          {stackData.map((group, idx) => (
            <motion.div 
              key={idx}
              className={`${styles.stackCard} ${getTypeClass(group.type)}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardId}>{group.id}</span>
                <h4 className={styles.areaTitle}>{group.area}</h4>
              </div>
              
              <div className={styles.toolsGrid}>
                {group.tools.map((tool, tIdx) => (
                  <div key={tIdx} className={styles.toolItem}>
                    <div className={styles.toolIcon}>
                      {renderIcon(tool)}
                    </div>
                    <span className={styles.toolName}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackTools;
