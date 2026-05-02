import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, BrainCircuit, Sparkles, MousePointer2, Cpu, ArrowUpRight, TrendingUp, Layout, Zap } from 'lucide-react';
import { labExperiments } from '../data/labExperiments';
import styles from './Lab.module.css';

const SectorCarousel = ({ experiments, category, catIdx, iconMap }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  const sectorColors = [styles.colorCyan, styles.colorGreen, styles.colorBlue];
  const activeColorClass = sectorColors[catIdx];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % experiments.length);
  }, [experiments.length]);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 20000);
  }, [nextSlide]);

  useEffect(() => {
    if (experiments.length <= 1) return;
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, [experiments.length, startTimer]);

  const handleCardClick = () => {
    if (experiments.length <= 1) return;
    nextSlide();
    startTimer();
  };

  const exp = experiments[currentIndex];
  const isCompleted = exp.status === 'COMPLETED';

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 30 : -30, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 30 : -30, opacity: 0 })
  };

  return (
    <div className={`${styles.labSector} ${activeColorClass}`}>
      <div className={styles.sectorHeader}>
        <div className={styles.sectorMainTitle}>
          <div className={styles.sectorId}>ÁREA_0{catIdx + 1}</div>
          <div className={styles.sectorName}>// {category}</div>
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
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={exp.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
            className={styles.carouselSlide}
            onClick={handleCardClick}
          >
            <div className={`${styles.hitechCardWrapper} ${isCompleted ? styles.isCompleted : ''}`}>
              <div className={styles.cardCornerDecor + ' ' + styles.tl}></div>
              <div className={styles.cardCornerDecor + ' ' + styles.tr}></div>
              <div className={styles.cardCornerDecor + ' ' + styles.bl}></div>
              <div className={styles.cardCornerDecor + ' ' + styles.br}></div>
              
              <div className={styles.hitechCardContent}>
                <div className={styles.capCategory}>
                  <span className={styles.categoryDot}></span>
                  EXP_ID_00{exp.id} 
                  <span className={`${styles.statusLabel} ${styles[exp.status?.toLowerCase()]}`}>
                    [ {exp.statusLabel.toUpperCase()} ]
                  </span>
                </div>
                
                <div className={styles.cardBody}>
                  <div className={styles.iconTitleRow}>
                    <div className={styles.capIcon}>
                      {exp.icon && iconMap[exp.icon] ? (
                        (() => {
                          const IconComponent = iconMap[exp.icon];
                          return <IconComponent size={26} />;
                        })()
                      ) : (
                        <FlaskConical size={26} />
                      )}
                    </div>
                    <h3 className={styles.capTitle}>{exp.title}</h3>
                  </div>
                  
                  <div className={styles.cardMain}>
                    <p className={styles.capDesc}>{exp.description}</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.clickHint}>
                    <MousePointer2 size={12} />
                    CLIQUE PARA SINCRONIZAR
                  </div>
                  <div className={styles.techTelemetry}>
                    {isCompleted ? (
                      <>
                        <span className={styles.statusSuccess}>SITUAÇÃO: CONCLUÍDO</span>
                        <span className={styles.statusSuccess}>PROGRESSO: 100%</span>
                      </>
                    ) : (
                      <>
                        <span>FLUXO_DADOS: ATIVO</span>
                        <span>CARGA_CPU: {Math.floor(Math.random() * 20) + 15}%</span>
                      </>
                    )}
                  </div>
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
    </section>
  );
};

export default Lab;
