import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight, ShieldCheck, Briefcase } from 'lucide-react';
import { PillIcon } from '../utils/pillIcons';
import { resolveImagePath } from '../lib/supabase';
import styles from './Projects.module.css';

const CaseStudyModal = ({ project, onClose, onZoomImage }) => {
  if (!project) return null;

  return (
    <motion.div 
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div 
        className={styles.modalContent}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.hitechModalHeader}>
          <button className={styles.modalClose} onClick={onClose}>
            <X size={20} />
            <span>Voltar</span>
          </button>
        </div>

        <div className={styles.modalBodyContent}>
          <div className={`hitech ${styles.projectCategory}`}>
            <span className={styles.categoryDot}></span>
            {project.category}
          </div>
          
          {project.title.includes(' — ') ? (
            <>
              <h2 className={`hitech ${styles.modalTitle}`}>{project.title.split(' — ')[0]}</h2>
              <p className={styles.modalSubtitle}>{project.title.split(' — ')[1]}</p>
            </>
          ) : (
            <h2 className={`hitech ${styles.modalTitle}`}>{project.title}</h2>
          )}
          
          <div className={`${styles.techTags} ${styles.mbLarge}`}>
            {project.tech.map(t => (
              <span key={t} className={`hitech ${styles.techTag} highlight`}>
                <PillIcon name={t} />
                <span>{t}</span>
              </span>
            ))}
          </div>
          
          {project.manifesto && (
            <div className={`hitech glass-panel ${styles.modalManifesto} ${styles.mbLarge}`}>
              <p>"{project.manifesto}"</p>
            </div>
          )}

          <div className={styles.modalSections}>
            {project.sections ? (
              project.sections.map((section, idx) => (
                <div key={idx} className={styles.modalSection} style={section.fullWidth ? { maxWidth: '100%' } : {}}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${styles[section.bulletColor || 'blue']}`}></span> 
                    <span className={styles.sectionIndex}>[{section.index || (idx + 1).toString().padStart(2, '0')}]</span> {section.title}
                  </h4>
                  
                  {section.type === 'text' && (
                    <p className={styles.modalSectionDesc}>{section.content}</p>
                  )}

                  {section.type === 'results' && (
                    <div className={styles.resultBox}>
                      <p>{section.content}</p>
                    </div>
                  )}

                  {(section.type === 'pillars' || section.type === 'architecture' || section.type === 'grid') && (
                    <div className={styles.pillarsGrid}>
                      {section.items.map((item, i) => (
                        <div key={i} className={styles.pillarItem}>
                          <div className={styles.pillarTitle}>{item.title}</div>
                          <div className={styles.pillarDesc}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.type === 'roadmap' && (
                    <div className={styles.roadmapGrid}>
                      {section.items.map((item, i) => (
                        <div key={i} className={styles.roadmapItem}>{item}</div>
                      ))}
                    </div>
                  )}

                  {section.type === 'images' && (
                    <div className={styles.galleryGrid}>
                      {section.items.map((img, i) => (
                        <div key={i} className={styles.galleryItem} onClick={() => onZoomImage(resolveImagePath(img.src))}>
                          <img src={resolveImagePath(img.src)} alt={img.alt || 'Project Image'} className={styles.galleryImg} />
                          {img.title && (
                            <div className={styles.galleryCaption}>
                              <div className={styles.captionTitle}>{img.title}</div>
                              {img.desc && <div className={styles.captionDesc}>{img.desc}</div>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.type === 'links' && (
                    <div className={styles.centeredContent}>
                      {section.footerNote && (
                        <div className={`hitech ${styles.infoBox}`}>
                          <ShieldCheck size={20} className={styles.infoIcon} />
                          <p>{section.footerNote}</p>
                        </div>
                      )}
                      <div className={styles.modalActions}>
                        {section.items.map((link, i) => (
                          <a 
                            key={i}
                            href={link.url === '#' ? undefined : link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${i === 0 ? 'btn-primary' : 'btn-outline'} ${styles.actionBtn} ${link.url === '#' ? styles.disabled : ''}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ChevronRight size={16} />
                            <span>{link.label} {link.url === '#' ? '(Em breve)' : ''}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              // Fallback para projetos que ainda usam a estrutura antiga
              <>
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${styles.blue}`}></span> 
                    <span className={styles.sectionIndex}>[01]</span> ANÁLISE DO PROBLEMA
                  </h4>
                  <p className={styles.modalSectionDesc}>{project.problem}</p>
                </div>
                
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${styles.cyan}`}></span> 
                    <span className={styles.sectionIndex}>[02]</span> ENGENHARIA DA SOLUÇÃO
                  </h4>
                  <p className={styles.modalSectionDesc}>{project.solution}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${styles.green}`}></span> 
                    <span className={styles.sectionIndex}>[03]</span> MÉTRICAS E RESULTADOS
                  </h4>
                  <div className={styles.resultBox}>
                    <p>{project.results}</p>
                  </div>
                </div>

                {project.pillars && (
                  <div className={styles.modalSection}>
                    <h4 className={`${styles.modalSectionTitle} ${styles.mbMedium}`}>
                      <span className={`${styles.bullet} ${styles.cyan}`}></span>
                      <span className={styles.sectionIndex}>[04]</span> DIFERENCIAIS DO PRODUTO
                    </h4>
                    <div className={styles.pillarsGrid}>
                      {project.pillars.map((pillar, idx) => (
                        <div key={idx} className={styles.pillarItem}>
                          <div className={styles.pillarTitle}>{pillar.title}</div>
                          <div className={styles.pillarDesc}>{pillar.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* O Showcase e Links antigos só aparecem se NÃO houver a nova estrutura de sections */}
          {!project.sections && (
            <>
              {project.images && project.images.length > 0 && (
                <div className={styles.modalGallery}>
                  <h4 className={`${styles.modalSectionTitle} ${styles.mbMedium}`}>
                    <span className={`${styles.bullet} ${styles.cyan}`}></span>
                    <span className={styles.sectionIndex}>[07]</span> SHOWCASE DO PRODUTO
                  </h4>
                  <div className={styles.galleryGrid}>
                    {project.images.map((img, idx) => (
                      <div key={idx} className={styles.galleryItem} onClick={() => onZoomImage(resolveImagePath(img.src))}>
                        <img src={resolveImagePath(img.src)} alt={`Preview ${idx}`} className={styles.galleryImg} />
                        {img.title && (
                          <div className={styles.galleryCaption}>
                            <div className={styles.captionTitle}>{img.title}</div>
                            {img.desc && <div className={styles.captionDesc}>{img.desc}</div>}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={`${styles.modalSection} ${styles.modalClosure}`} style={{ marginTop: '5rem' }}>
                <h4 className={styles.modalSectionTitle}>
                  <span className={`${styles.bullet} ${styles.blue}`}></span> 
                  <span className={styles.sectionIndex}>[08]</span> ACESSO & REPOSITÓRIO
                </h4>
                <div className={styles.centeredContent}>
                  {project.footerNote && (
                    <div className={`hitech ${styles.infoBox}`}>
                      <ShieldCheck size={20} className={styles.infoIcon} />
                      <p>{project.footerNote}</p>
                    </div>
                  )}
                  <div className={styles.modalActions}>
                    <a 
                      href={project.demo === '#' ? undefined : project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`btn-primary ${styles.actionBtn} ${project.demo === '#' ? styles.disabled : ''}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ChevronRight size={16} />
                      <span>{project.demo === '#' ? 'Demo (Em breve)' : 'Visualizar Demo'}</span>
                    </a>
                    {project.repo && (
                      <a 
                        href={project.repo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`btn-outline ${styles.actionBtn}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Briefcase size={16} />
                        <span>Ver no GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyModal;
