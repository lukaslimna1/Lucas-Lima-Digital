import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { resolveImagePath } from '../lib/supabase';
import { projectsData } from '../data';
import { PillIcon } from '../utils/pillIcons';
import styles from './Projects.module.css';
import { useMousePosition } from '../utils/useMousePosition';

const Projects = () => {
  const { handleMouseMove } = useMousePosition();
  const [activeProject, setActiveProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const projects = projectsData;

  // Lógica de Carrossel Infinito
  const [displayProjects, setDisplayProjects] = useState([]);
  
  useEffect(() => {
    // Triplicamos a lista para garantir um scroll infinito suave em ambas as direções
    setDisplayProjects([...projects, ...projects, ...projects]);
    // Começamos no meio para poder ir para trás também
    setCurrentIndex(projects.length);
  }, [projects]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  // Reseta a posição sem animação quando chega nas extremidades para criar a ilusão de infinito
  useEffect(() => {
    const total = projects.length;
    if (currentIndex >= total * 2) {
      setTimeout(() => {
        setCurrentIndex(total);
      }, 300); // Espera a animação terminar
    } else if (currentIndex < total) {
      setTimeout(() => {
        setCurrentIndex(total * 2 - 1);
      }, 300);
    }
  }, [currentIndex, projects.length]);

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
          Projetos em <span className="text-gradient">Destaque</span>
        </motion.h2>
        <p className="section-subtitle">
          Soluções digitais de alta performance, onde engenharia robusta encontra design imersivo.
        </p>
      </div>

      <div className={styles.projectsCarouselContainer}>
        <div className={styles.carouselTrackWrapper}>
          <motion.div 
            className={styles.carouselTrack}
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {displayProjects.map((project, idx) => (
              <div 
                key={`${project.id}-${idx}`} 
                className={styles.carouselItem}
                style={{ flex: `0 0 ${100 / itemsPerView}%`, padding: '0 12px' }}
              >
                <motion.div 
                  className="hitech-card-wrapper"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  onMouseMove={handleMouseMove}
                  onClick={() => setActiveProject(project)}
                >
                  <div className="hitech-card glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                    <div className="hitech-asymmetric-aura"></div>
                    <div className="hitech-artistic-fusion"></div>
                    <div className="hitech-artistic-grain"></div>
                    <div className="hitech-border-glow"></div>
                    <div className={styles.cardHeader}>
                      <div className={styles.projectCategory}>
                        <span className={styles.categoryDot}></span>
                        {project.category}
                      </div>

                      
                      <div className={styles.titleWrapper}>
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
                        {project.tech.slice(0,3).map(t => (
                          <span key={t} className={`hitech ${styles.techTag}`}>
                            <PillIcon name={t} />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                      <div className={`hitech ${styles.projectLink}`}>
                        <span className={styles.linkText}>
                          {project.isFuture ? project.results : 'Explorar Case'}
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
          <button className={`carousel-btn hitech ${styles.carouselBtn}`} onClick={prevSlide}>
            <div className="hitech-border-glow"></div>
            <ChevronLeft size={24} style={{ position: 'relative', zIndex: 1 }} />
          </button>
          
          <div className={styles.carouselIndicators}>
            {projects.map((_, idx) => (
              <div 
                key={idx} 
                className={`indicator hitech ${styles.indicator} ${(currentIndex % projects.length) === idx ? styles.active : ''}`}
                onClick={() => setCurrentIndex(projects.length + idx)}
              />
            ))}
          </div>

          <button className={`carousel-btn hitech ${styles.carouselBtn}`} onClick={nextSlide}>
            <div className="hitech-border-glow"></div>
            <ChevronRight size={24} style={{ position: 'relative', zIndex: 1 }} />
          </button>
        </div>
      </div>

      {activeProject && (
        <div 
          className={styles.modalBackdrop}
          onClick={() => setActiveProject(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.hitechModalHeader}>
              <button 
                onClick={() => setActiveProject(null)}
                className={`hitech ${styles.modalClose}`}
              >
                <X size={20} />
                <span>Voltar</span>
              </button>
            </div>
            
            <div className={styles.modalBodyContent}>
              <div className={`hitech ${styles.projectCategory}`}>
                <span className={styles.categoryDot}></span>
                {activeProject.category}
              </div>
              
              {activeProject.title.includes(' — ') ? (
                <>
                  <h2 className={`hitech ${styles.modalTitle}`}>{activeProject.title.split(' — ')[0]}</h2>
                  <p className={styles.modalSubtitle}>{activeProject.title.split(' — ')[1]}</p>
                </>
              ) : (
                <h2 className={`hitech ${styles.modalTitle}`}>{activeProject.title}</h2>
              )}
              
              <div className={`${styles.techTags} ${styles.mbLarge}`}>
                {activeProject.tech.map(t => (
                  <span key={t} className={`hitech ${styles.techTag} highlight`}>
                    <PillIcon name={t} />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
              
              {activeProject.manifesto && (
                <div className={`hitech glass-panel ${styles.modalManifesto} ${styles.mbLarge}`}>
                  <p>"{activeProject.manifesto}"</p>
                </div>
              )}

              {/* Estruturação Narrativa do Case */}
              <div className={styles.modalSections}>
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${styles.blue}`}></span> 
                    <span className={styles.sectionNumber}>[01]</span> ANÁLISE DO PROBLEMA
                  </h4>
                  <p className={styles.modalSectionDesc}>{activeProject.problem}</p>
                </div>
                
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${styles.cyan}`}></span> 
                    <span className={styles.sectionNumber}>[02]</span> ENGENHARIA DA SOLUÇÃO
                  </h4>
                  <p className={styles.modalSectionDesc}>{activeProject.solution}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${styles.green}`}></span> 
                    <span className={styles.sectionNumber}>[03]</span> MÉTRICAS E RESULTADOS
                  </h4>
                  <div className={styles.resultBox}>
                    <p>{activeProject.results}</p>
                  </div>
                </div>

                {activeProject.pillars && (
                  <div className={styles.modalSection}>
                    <h4 className={styles.modalSectionTitle}>
                      <span className={`${styles.bullet} ${styles.cyan}`}></span> ARQUITETURA DO SISTEMA
                    </h4>
                    <div className={styles.pillarsGrid}>
                      {activeProject.pillars.map((pillar, idx) => (
                        <div key={idx} className={styles.pillarItem}>
                          <div className={styles.pillarTitle}>{pillar.title}</div>
                          <div className={styles.pillarDesc}>{pillar.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {activeProject.roadmap && (
                <div className={`${styles.modalSection} ${styles.mbLarge}`} style={{ marginTop: '4rem' }}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${styles.blue}`}></span> 
                    <span className={styles.sectionNumber}>[04]</span> ROADMAP DE P&D (LAB)
                  </h4>
                  <div className={styles.roadmapGrid}>
                    {activeProject.roadmap.map(item => (
                      <div key={item} className={styles.roadmapItem}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Galeria de Imagens do Projeto */}
            {activeProject.images && activeProject.images.length > 0 && (
              <div className={styles.modalGallery}>
                <h4 className={`${styles.modalSectionTitle} ${styles.mbMedium}`}>
                  <span className={`${styles.bullet} ${styles.purple}`}></span> Showcase do Produto
                </h4>
                <div className={styles.galleryGrid}>
                  {activeProject.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`glass-panel ${styles.galleryItem}`}
                      onClick={() => setZoomedImage(resolveImagePath(img.src))}
                    >
                      <img 
                        src={resolveImagePath(img.src)} 
                        alt={img.alt} 
                        className={styles.galleryImg} 
                        loading="lazy"
                      />
                      <div className={styles.galleryCaption}>{img.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            </div>
          </motion.div>
        </div>
      )}
      {/* Overlay de Zoom da Imagem */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.imageZoomOverlay}
            onClick={() => setZoomedImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={zoomedImage} 
              alt="Zoomed Project View" 
              className={styles.zoomedImage} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
