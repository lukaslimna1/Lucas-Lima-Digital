import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, BrainCircuit, Sparkles, MousePointer2, Cpu, ArrowUpRight, TrendingUp, Layout, Zap } from 'lucide-react';
import { labExperiments } from '../data/labExperiments';
import styles from './Lab.module.css';

const SectorCarousel = ({ experiments, category, catIdx, iconMap }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % experiments.length);
  }, [experiments.length]);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 15000); // 15 segundos: Padrão Research
  }, [nextSlide]);

  useEffect(() => {
    if (experiments.length <= 1) return;
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, [experiments.length, startTimer]);

  const handleCardClick = () => {
    if (experiments.length <= 1) return;
    nextSlide();
    startTimer(); // Reinicia o timer após o clique manual
  };

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
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div 
              className={`hitech-card glass-panel ${styles.capCard}`}
              onClick={handleCardClick}
              style={{ cursor: 'pointer' }}
            >
              <div className="hitech-asymmetric-aura"></div>
              <div className="hitech-artistic-fusion"></div>
              <div className="hitech-artistic-grain"></div>
              <div className="hitech-border-glow"></div>
              
              <div className="corner-decor top-left"></div>
              <div className="corner-decor top-right"></div>
              <div className="corner-decor bottom-left"></div>
              <div className="corner-decor bottom-right"></div>

              <div className={styles.capCategory}>
                <span className={styles.categoryDot}></span>
                EXP_ID_00{exp.id} 
                <span className={`${styles.statusLabel} ${styles[exp.status?.toLowerCase()]}`}>
                  [{exp.statusLabel}]
                </span>
              </div>
              
              <div className={styles.iconTitleRow}>
                <div className={styles.capIcon}>
                  {exp.icon && iconMap[exp.icon] ? (
                    (() => {
                      const IconComponent = iconMap[exp.icon];
                      return <IconComponent size={20} />;
                    })()
                  ) : (
                    <FlaskConical size={20} />
                  )}
                </div>
                <h3 className={styles.capTitle}>{exp.title}</h3>
              </div>
              
              <div className={styles.cardMain}>
                <p className={styles.capDesc}>{exp.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.techTelemetry}>
                  <span>BIT_RATE: 2.4ghz</span>
                  <span>CPU_LOAD: 12%</span>
                </div>
                {exp.link && (
                  <a href={exp.link} className={styles.exploreLink} onClick={(e) => e.stopPropagation()}>
                    <ArrowUpRight size={16} />
                  </a>
                )}
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
