import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronRight, ChevronLeft, X, ShieldCheck } from 'lucide-react';
import { resolveImagePath } from '../lib/supabase';
import { projectsData } from '../data';
import { PillIcon } from '../utils/pillIcons';
import styles from './Projects.module.css';
import { useMousePosition } from '../utils/useMousePosition';
import CaseStudyModal from './CaseStudyModal';
import OpportunityModal from './OpportunityModal';

const Projects = ({ recruiterMode }) => {
  const { handleMouseMove } = useMousePosition();
  const [activeProject, setActiveProject] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isManual, setIsManual] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);
  const projects = projectsData;

  // Responsividade do carrossel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1.2); 
      else if (window.innerWidth < 1024) setItemsPerView(1.5); 
      else setItemsPerView(2); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lógica de Carrossel Infinito
  const [displayProjects, setDisplayProjects] = useState([]);
  
  useEffect(() => {
    // Triplicamos a lista para o loop infinito
    setDisplayProjects([...projects, ...projects, ...projects]);
    setCurrentIndex(projects.length);
  }, [projects]);

  const nextSlide = (manual = false) => {
    if (manual) setLastInteraction(Date.now());
    setIsManual(manual);
    setIsResetting(false);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = (manual = false) => {
    if (manual) setLastInteraction(Date.now());
    setIsManual(manual);
    setIsResetting(false);
    setCurrentIndex(prev => prev - 1);
  };

  // Reset sutil sem animação brusca
  useEffect(() => {
    const total = projects.length;
    if (currentIndex >= total * 2 || currentIndex <= 0) {
      // Tempo para a animação atual (lenta ou rápida) terminar
      const timeout = isManual ? 1200 : 20000; 
      
      const timer = setTimeout(() => {
        setIsResetting(true); 
        if (currentIndex >= total * 2) setCurrentIndex(total);
        else if (currentIndex <= 0) setCurrentIndex(total);
      }, timeout);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, projects.length, isManual]);

  // Retomar Auto-play após 10 segundos de inatividade
  useEffect(() => {
    if (!isManual) return;
    
    const checkInactivity = setInterval(() => {
      if (!isManual || activeProject || recruiterMode) return;
      
      if (Date.now() - lastInteraction > 10000) { // 10 segundos
        setIsManual(false);
      }
    }, 1000);

    return () => clearInterval(checkInactivity);
  }, [isManual, lastInteraction, activeProject, recruiterMode]);

  // Auto-play Contínuo e Lento
  useEffect(() => {
    if (activeProject || isManual || recruiterMode) return;
    
    const interval = setInterval(() => {
      nextSlide(false);
    }, 12000); // 12 segundos parado

    return () => clearInterval(interval);
  }, [activeProject, isManual, recruiterMode]);

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      {/* Cabeçalho da Seção */}
      <div className={`section-header ${styles.projectsHeader}`}>
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          PROJETOS EM <span className="text-gradient">DESTAQUE</span>
        </motion.h2>
        <p className="section-subtitle">
          Sistemas, ideias e experiências que estou construindo na prática — conectando tecnologia, design e visão de produto.
        </p>
      </div>

      <div className={styles.projectsCarouselContainer}>
        <div className={styles.carouselTrackWrapper}>
          <motion.div 
            className={styles.carouselTrack}
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ 
              duration: isResetting || recruiterMode ? 0 : (isManual ? 0.6 : 2.5), 
              ease: isResetting || recruiterMode ? "linear" : "easeInOut"
            }}
          >
            {displayProjects.map((project, idx) => (
              <div 
                key={`${project.id}-${idx}`} 
                className={styles.carouselItem}
                style={{ flex: `0 0 ${100 / itemsPerView}%`, padding: '0 12px' }}
              >
                <motion.div 
                  className={`hitech-card-wrapper ${styles.projectsCardWrapper}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  onMouseMove={handleMouseMove}
                  onClick={() => setActiveProject(project)}
                >
                  <div className={`hitech-card glass-panel ${styles.projectsCardContent}`} style={{ cursor: 'pointer' }}>
                    <div className="hitech-asymmetric-aura"></div>
                    <div className="hitech-artistic-fusion"></div>
                    <div className="hitech-artistic-grain"></div>
                    <div className="hitech-border-glow"></div>
                    
                    <div className={styles.cardHeader}>
                      <div className={styles.projectIcon}>
                        {project.title.includes(' — ') ? (
                          <>
                            <h3 className={styles.projectTitle}>{project.title.split(' — ')[0]}</h3>
                            <p className={styles.projectSubtitle}>{project.title.split(' — ')[1]}</p>
                          </>
                        ) : (
                          <h3 className={styles.projectTitle}>{project.title}</h3>
                        )}
                      </div>
                    </div>

                    <div className={styles.cardMain}>
                      <p className={styles.projectDesc}>{project.short}</p>
                    </div>
                    
                    <div className={styles.cardFooter}>
                      <div className={styles.techTags}>
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className={`hitech ${styles.techTag}`}>
                            <PillIcon name={t} />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                      <div className={`hitech ${styles.projectLink}`}>
                        <span className={styles.linkText}>
                          {project.isFuture ? (project.customLink || 'Explorar construção') : 'Explorar Case'}
                        </span>
                        <div className={styles.linkArrow}>
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    </div>
                    <div className="corner-decor top-left"></div>
                    <div className="corner-decor top-right"></div>
                    <div className="corner-decor bottom-left"></div>
                    <div className="corner-decor bottom-right"></div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className={styles.carouselControls}>
          <button className={`carousel-btn hitech ${styles.carouselBtn}`} onClick={() => prevSlide(true)}>
            <div className="hitech-border-glow"></div>
            <ChevronLeft size={24} style={{ position: 'relative', zIndex: 1 }} />
          </button>
          
          <div className={styles.carouselIndicators}>
            {projects.map((_, idx) => (
              <div 
                key={idx} 
                className={`${styles.indicator} ${(currentIndex % projects.length) === idx ? styles.active : ''}`}
              ></div>
            ))}
          </div>

          <button className={`carousel-btn hitech ${styles.carouselBtn}`} onClick={() => nextSlide(true)}>
            <div className="hitech-border-glow"></div>
            <ChevronRight size={24} style={{ position: 'relative', zIndex: 1 }} />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeProject && (
          activeProject.isFuture ? (
            <OpportunityModal 
              project={activeProject} 
              onClose={() => setActiveProject(null)} 
            />
          ) : (
            <CaseStudyModal 
              project={activeProject} 
              onClose={() => setActiveProject(null)}
              onZoomImage={(url) => setZoomImage(url)}
            />
          )
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomImage && (
          <motion.div 
            className={styles.imageZoomOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
          >
            <motion.img 
              src={zoomImage}
              className={styles.zoomedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
