import { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, BrainCircuit, Sparkles, MousePointer2, Cpu, ArrowUpRight, TrendingUp, Layout, Zap } from 'lucide-react';
import { labExperiments } from '../data/labExperiments';
import styles from './Lab.module.css';

const Lab = () => {
  const [showAll, setShowAll] = useState(false);
  
  const iconMap = {
    BrainCircuit: BrainCircuit,
    Sparkles: Sparkles,
    MousePointer2: MousePointer2,
    Cpu: Cpu,
    TrendingUp: TrendingUp,
    Layout: Layout,
    Zap: Zap
  };

  const categories = ['EXPERIMENTOS', 'APRENDIZADO', 'EVOLUÇÃO'];
  
  const filteredExperiments = showAll 
    ? labExperiments 
    : labExperiments.filter(exp => exp.id <= 4);

  return (
    <section id="lab" className={`section hitech ${styles.labSection}`}>
      <div className="hitech-grid-overlay"></div>
      
      <div className="section-header">
        <h2 className="section-title">
          <FlaskConical className="title-icon purple" /> Laboratório de Sistemas e IA
        </h2>
        <p className="section-subtitle">
          Ideias, estudos e experimentos que exploram o futuro dos produtos digitais.
        </p>
      </div>

      <div className={styles.labCategoriesWrapper}>
        {categories.map(cat => (
          <div key={cat} className={styles.labCategoryGroup}>
            <h3 className={styles.labGroupTitle}>{cat}</h3>
            <div className={styles.experimentsGrid}>
              {filteredExperiments
                .filter(exp => exp.group === cat)
                .map((exp) => (
                  <motion.div 
                    key={exp.id} 
                    className={`hitech-card-wrapper ${styles.labCard}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="hitech-card glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="hitech-grid-overlay"></div>
                      <div className="hitech-border-glow"></div>
                      
                      <div className={styles.labImageContainer}>
                        <img src={exp.image} alt={exp.title} className={styles.labImage} />
                        <div className={styles.labTag}>
                          {exp.tag}
                        </div>
                      </div>

                      <div style={{ position: 'relative', zIndex: 2, padding: '24px' }}>
                        <div className={styles.labHeader}>
                          {exp.icon && iconMap[exp.icon] ? (
                            (() => {
                              const IconComponent = iconMap[exp.icon];
                              return <IconComponent size={24} className={styles.labIcon} />;
                            })()
                          ) : (
                            <FlaskConical size={24} className={styles.labIcon} />
                          )}
                          <h3 className={styles.labTitle}>{exp.title}</h3>
                        </div>
                        <p className={styles.labDesc}>{exp.description}</p>
                        
                        <a href={exp.link} className="btn-secondary hitech" style={{ width: '100%' }}>
                          <div className="hitech-border-glow"></div>
                          <span style={{ position: 'relative', zIndex: 1 }}>Explorar Lab</span>
                          <ArrowUpRight size={18} style={{ position: 'relative', zIndex: 1 }} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewMoreContainer}>
        <button 
          className="btn-secondary hitech"
          onClick={() => setShowAll(!showAll)}
        >
          <div className="hitech-border-glow"></div>
          <span style={{ position: 'relative', zIndex: 1 }}>
            {showAll ? 'Ver Menos Experimentos' : 'Ver Todos no Lab'}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Lab;
