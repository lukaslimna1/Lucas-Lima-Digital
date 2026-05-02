import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, BrainCircuit, Sparkles, MousePointer2, Cpu, ArrowUpRight, TrendingUp, Layout, Zap } from 'lucide-react';
import { labExperiments } from '../data/labExperiments';
import styles from './Lab.module.css';
import { useMousePosition } from '../utils/useMousePosition';

const SectorCarousel = ({ experiments, category, catIdx, iconMap }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const { handleMouseMove } = useMousePosition();

  // Ordem Estratégica: Azul (Estratégia/Contexto) -> Ciano (Técnica/Construção) -> Verde (Resultados/Futuro)
  const sectorColors = [styles.colorBlue, styles.colorCyan, styles.colorGreen];
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
          <div className={styles.sectorId}>AREA_0{catIdx + 1}</div>
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
            <div className={`hitech-card-wrapper ${styles.hitechCardWrapper} ${isCompleted ? styles.isCompleted : ''}`}
                 onMouseMove={handleMouseMove}
                 style={{ 
                   '--step-color': `var(--sector-color)`,
                   '--step-shadow': `rgba(var(--sector-color-rgb), 0.15)`,
                   '--step-border': `rgba(var(--sector-color-rgb), 0.3)`
                 }}>
              <div className={`hitech-card glass-panel ${styles.hitechCardContent}`}>
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
                  EXP_ID_{exp.id.toString().padStart(3, '0')}
                  <span className={`${styles.statusLabel} ${styles[exp.status?.toLowerCase()]}`}>
                    [ {exp.statusLabel.toUpperCase()} ]
                  </span>
                </div>
                
                <div className={styles.iconTitleRow}>
                  <div className={styles.capIcon}>
                    {exp.icon && iconMap[exp.icon] ? (
                      (() => {
                        const IconComponent = iconMap[exp.icon];
                        return <IconComponent size={24} strokeWidth={1.5} />;
                      })()
                    ) : (
                      <FlaskConical size={24} strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className={styles.capTitle}>{exp.title}</h3>
                </div>

                <div className={styles.cardMain}>
                  <p className={styles.capDesc}>{exp.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.clickHint}>
                    <MousePointer2 size={12} />
                    SYNC_COMMAND &gt;&gt;
                  </div>
                  <div className={styles.techTelemetry}>
                    {(() => {
                      let statusText = 'EM DESENVOLVIMENTO';
                      if (exp.status === 'RESEARCH') statusText = 'EM PESQUISA';
                      if (exp.status === 'CONSTRUCTION') statusText = 'EM CONSTRUÇÃO';
                      if (exp.status === 'COMPLETED') statusText = 'CONCLUÍDO';
                      if (exp.status === 'EXPERIMENT') statusText = 'EM EXPERIMENTO';
                      if (exp.status === 'ACTIVE') statusText = 'EM EVOLUÇÃO';
                      if (exp.status === 'NOT_STARTED') statusText = 'NÃO INICIADO';

                      return (
                        <>
                          <span>STATUS: {statusText}</span>
                          <span>MODO: {exp.modo || 'ESTUDO'}</span>
                          <span>PROGRESSO: {exp.progresso || '0%'}</span>
                        </>
                      );
                    })()}
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
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          LABORATÓRIO DE <span className="text-gradient">SISTEMAS & IA</span>
        </motion.h2>
        <p className="section-subtitle">
          Onde ideias viram testes, testes viram sistemas e sistemas evoluem em produção.
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
