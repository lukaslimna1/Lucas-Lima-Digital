import { useState, useEffect, memo, useMemo } from 'react'; // HMR Trigger
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronRight, ChevronLeft, X, ShieldCheck } from 'lucide-react';
import { resolveImagePath } from '../lib/supabase';
import { projectsData } from '../data';
import { PillIcon } from '../utils/pillIcons';
import styles from './Projects.module.css';
import { useMousePosition } from '../utils/useMousePosition';
import CaseStudyModal from './CaseStudyModal';
import OpportunityModal from './OpportunityModal';


const Projects = memo(({ recruiterMode }) => {
  const { handleMouseMove } = useMousePosition();
  const [activeProject, setActiveProject] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const [filter, setFilter] = useState('All');
  
  // Extrair tags únicas dinamicamente
  const ALL_TAGS = useMemo(() => {
    return ['All', ...new Set(projectsData.flatMap(p => p.filterTags || []))];
  }, [projectsData]);

  // Filtrar projetos baseados na tag selecionada usando useMemo
  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? projectsData 
      : projectsData.filter(p => p.filterTags?.includes(filter));
  }, [filter, projectsData]);

  const [displayProjects, setDisplayProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isManual, setIsManual] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);

  // Responsividade do carrossel otimizada
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsPerView(1.2); 
      else if (width < 1024) setItemsPerView(1.5); 
      else setItemsPerView(2); 
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lógica de Carrossel Infinito - Sincronização
  useEffect(() => {
    const total = filteredProjects.length;
    if (total === 0) {
      setDisplayProjects([]);
      setCurrentIndex(0);
      return;
    }

    // Garantir que temos itens suficientes para não mostrar o fundo vazio
    // Precisamos de pelo menos total * 3, mas para segurança com itemsPerView fracionário, usamos mais
    const multiplier = Math.max(5, Math.ceil(20 / total));
    const newDisplay = [];
    for(let i = 0; i < multiplier; i++) newDisplay.push(...filteredProjects);
    
    setDisplayProjects(newDisplay);
    
    // Começamos no Set 3 (meio do buffer)
    setCurrentIndex(total * 2);
    
    setIsResetting(true);
    const timer = setTimeout(() => setIsResetting(false), 50);
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  const nextSlide = (manual = false) => {
    if (filteredProjects.length === 0) return;
    if (manual) setLastInteraction(Date.now());
    setIsManual(manual);
    setIsResetting(false);
    
    // Trava de segurança: não deixa passar do buffer total
    setCurrentIndex(prev => {
      const maxIndex = displayProjects.length - Math.ceil(itemsPerView) - 1;
      return prev < maxIndex ? prev + 1 : prev;
    });
  };

  const prevSlide = (manual = false) => {
    if (filteredProjects.length === 0) return;
    if (manual) setLastInteraction(Date.now());
    setIsManual(manual);
    setIsResetting(false);
    
    setCurrentIndex(prev => prev > 0 ? prev - 1 : 0);
  };

  // Reset sutil sem animação brusca
  useEffect(() => {
    const total = filteredProjects.length;
    if (total === 0) return;
    
    // Com 5 sets, o "porto seguro" é do index total*2 até total*3
    if (currentIndex >= total * 4 || currentIndex <= total * 1) {
      const animationDuration = isManual ? 600 : 2500;
      const buffer = 50; 
      
      const timer = setTimeout(() => {
        setIsResetting(true); 
        // Reposiciona para o Set 3 mantendo o deslocamento relativo
        if (currentIndex >= total * 4) {
          setCurrentIndex(prev => prev - (total * 2));
        } else if (currentIndex <= total * 1) {
          setCurrentIndex(prev => prev + (total * 2));
        }
      }, animationDuration + buffer);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, filteredProjects.length, isManual]);

  // Retomar Auto-play após 10 segundos de inatividade
  useEffect(() => {
    if (!isManual) return;
    
    const checkInactivity = setInterval(() => {
      if (!isManual || activeProject || recruiterMode) return;
      
      if (Date.now() - lastInteraction > 10000) {
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
    }, 12000);

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

        <div className={styles.filterContainer}>
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`${styles.filterBtn} ${filter === tag ? styles.activeFilter : ''}`}
            >
              {filter === tag && (
                <motion.div 
                  layoutId="activeFilter"
                  className={styles.activeFilterBg}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={styles.filterLabel}>{tag === 'All' ? 'Todos' : tag}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectsCarouselContainer}>
        <div className={styles.carouselTrackWrapper}>
          <motion.div 
            className={styles.carouselTrack}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragEnd={(e, info) => {
              const swipeThreshold = 50;
              if (info.offset.x < -swipeThreshold) {
                nextSlide(true);
              } else if (info.offset.x > swipeThreshold) {
                prevSlide(true);
              }
            }}
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
                  layout
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
          <button 
            className={`carousel-btn hitech ${styles.carouselBtn}`} 
            onClick={() => prevSlide(true)}
            aria-label="Projeto anterior"
          >
            <div className="hitech-border-glow"></div>
            <ChevronLeft size={24} style={{ position: 'relative', zIndex: 1 }} />
          </button>
          
          <div className={styles.carouselIndicators}>
            {filteredProjects.map((_, idx) => (
              <div 
                key={idx} 
                className={`${styles.indicator} ${(currentIndex % (filteredProjects.length || 1)) === idx ? styles.active : ''}`}
              ></div>
            ))}
          </div>

          <button 
            className={`carousel-btn hitech ${styles.carouselBtn}`} 
            onClick={() => nextSlide(true)}
            aria-label="Próximo projeto"
          >
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
            onClick={(e) => {
              if (e.target === e.currentTarget) setZoomImage(null);
            }}
          >
            <motion.img 
              src={zoomImage}
              className={styles.zoomedImage}
              alt="Visualização ampliada do projeto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
});

export default Projects;
