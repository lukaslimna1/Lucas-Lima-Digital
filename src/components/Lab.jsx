import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, BrainCircuit, Sparkles, MousePointer2, Cpu, ArrowUpRight, TrendingUp, Layout, Zap } from 'lucide-react';
import { labExperiments } from '../data/labExperiments';
import styles from './Lab.module.css';

// Componente de Carrossel Individual para cada Setor
const SectorCarousel = ({ experiments, category, catIdx, iconMap }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (experiments.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [experiments.length]);

  const exp = experiments[currentIndex];

  return (
    <div className={styles.labSector}>
      <div className={styles.sectorHeader}>
        <div className={styles.sectorTag}>
          <span className={styles.sectorPulse}></span>
          SECTOR_0{catIdx + 1} // {category}
        </div>
        <div className={styles.sectorIndicator}>
          {experiments.map((_, i) => (
            <span 
              key={i} 
              className={`${styles.indicatorDot} ${i === currentIndex ? styles.activeDot : ''}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={exp.id}
            className={styles.carouselSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`hitech-card glass-panel ${styles.labCard}`}>
              <div className="hitech-asymmetric-aura"></div>
              <div className="hitech-artistic-fusion"></div>
              <div className="hitech-artistic-grain"></div>
              <div className="hitech-border-glow"></div>
              
              <div className="corner-decor top-left"></div>
              <div className="corner-decor top-right"></div>
              <div className="corner-decor bottom-left"></div>
              <div className="corner-decor bottom-right"></div>

              <div className={styles.cardInternal}>
                <div className={styles.cardHeader}>
                  <div className={styles.expId}>EXP_ID_00{exp.id}</div>
                  <div className={`${styles.statusBadge} ${styles[exp.status?.toLowerCase()]}`}>
                    {exp.statusLabel}
                  </div>
                </div>

                <div className={styles.titleRow}>
                  <div className={styles.iconBox}>
                    {exp.icon && iconMap[exp.icon] ? (
                      (() => {
                        const IconComponent = iconMap[exp.icon];
                        return <IconComponent size={20} />;
                      })()
                    ) : (
                      <FlaskConical size={20} />
                    )}
                  </div>
                  <h3 className={styles.labTitle}>{exp.title}</h3>
                </div>

                <p className={styles.labDesc}>{exp.description}</p>

                <div className={styles.cardFooter}>
                  <div className={styles.techTelemetry}>
                    <span>BIT_RATE: 2.4ghz</span>
                    <span>CPU_LOAD: 12%</span>
                  </div>
                  {exp.link && (
                    <a href={exp.link} className={styles.exploreLink}>
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Lab = () => {
  const [showAll, setShowAll] = useState(false);
  
  const iconMap = {
    BrainCircuit, Sparkles, MousePointer2, Cpu, TrendingUp, Layout, Zap
  };

  const categories = ['EXPERIMENTOS', 'APRENDIZADO', 'EVOLUÇÃO'];

  return (
    <section id="lab" className={`section hitech ${styles.labSection}`}>
      <div className="hitech-grid-overlay"></div>
      
      <div className="section-header">
        <h2 className="section-title">Laboratório de Sistemas e IA</h2>
        <p className="section-subtitle">
          P&D: Pesquisa, desenvolvimento e exploração de novas fronteiras em produtos digitais.
        </p>
      </div>

      <div className={styles.labHorizontalLayout}>
        {categories.map((cat, catIdx) => (
          <SectorCarousel 
            key={cat}
            category={cat}
            catIdx={catIdx}
            experiments={labExperiments.filter(exp => exp.group === cat)}
            iconMap={iconMap}
          />
        ))}
      </div>

      <div className={styles.viewMoreContainer}>
        <button 
          className={`btn-secondary hitech ${styles.labActionBtn}`}
          onClick={() => setShowAll(!showAll)}
        >
          <div className="hitech-border-glow"></div>
          <span style={{ position: 'relative', zIndex: 1 }}>
            {showAll ? 'CLOSE_LAB_DATABASE' : 'EXPAND_FULL_RESEARCH'}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Lab;
