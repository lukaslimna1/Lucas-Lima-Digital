import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight, ShieldCheck } from 'lucide-react';
import { PillIcon } from '../utils/pillIcons';
import styles from './Projects.module.css';

const OpportunityModal = ({ project, onClose }) => {
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
            <span>Fechar</span>
          </button>
        </div>

        <div className={styles.modalBodyContent}>
          <div className={`hitech ${styles.projectCategory}`}>
            <span className={styles.categoryDot}></span>
            {project.category}
          </div>
          
          <h2 className={`hitech ${styles.modalTitle}`}>{project.title.split(' — ')[0]}</h2>
          <p className={styles.modalSubtitle}>{project.title.split(' — ')[1]}</p>
          
          <div className={`${styles.techTags} ${styles.mbLarge}`}>
            {project.tech.map(t => (
              <span key={t} className={`hitech ${styles.techTag} highlight`}>
                <PillIcon name={t} />
                <span>{t}</span>
              </span>
            ))}
          </div>

          <div className={styles.modalSections}>
            {/* [01] COMO EU POSSO AJUDAR */}
            <div className={styles.modalSection}>
              <h4 className={`${styles.modalSectionTitle} ${styles.mbMedium}`}>
                <span className={`${styles.bullet} ${styles.blue}`}></span> 
                <span className={styles.sectionIndex}>[01]</span> COMO EU POSSO AJUDAR
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

            {/* [02] MEU DIFERENCIAL */}
            <div className={styles.modalSection}>
              <h4 className={`${styles.modalSectionTitle} ${styles.mbMedium}`}>
                <span className={`${styles.bullet} ${styles.cyan}`}></span> 
                <span className={styles.sectionIndex}>[02]</span> MEU DIFERENCIAL
              </h4>
              <div className={styles.resultBox} style={{ borderColor: 'rgba(34, 211, 238, 0.2)', background: 'rgba(34, 211, 238, 0.05)' }}>
                <p className={styles.modalSectionDesc}>{project.solution}</p>
              </div>
            </div>

            {/* [03] PROJETOS IDEAIS */}
            <div className={styles.modalSection}>
              <h4 className={`${styles.modalSectionTitle} ${styles.mbMedium}`}>
                <span className={`${styles.bullet} ${styles.green}`}></span> 
                <span className={styles.sectionIndex}>[03]</span> PROJETOS IDEAIS
              </h4>
              <div className={styles.roadmapGrid}>
                {project.roadmap.map(item => (
                  <div key={item} className={styles.roadmapItem} style={{ borderColor: 'rgba(52, 211, 153, 0.2)', background: 'rgba(52, 211, 153, 0.03)' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* [04] FECHAMENTO */}
            <div className={`${styles.modalSection} ${styles.modalClosure}`}>
              <h4 className={styles.modalSectionTitle} style={{ borderLeftColor: 'var(--accent-green)' }}>
                <span className={`${styles.bullet} ${styles.green}`}></span> 
                <span className={styles.sectionIndex}>[04]</span> VAMOS CONSTRUIR O PRÓXIMO?
              </h4>
              
              <div className={styles.centeredContent}>
                <div className={styles.resultBox} style={{ marginBottom: '2rem', textAlign: 'center' }}>
                  <p>{project.results}</p>
                </div>

                {project.footerNote && (
                  <div className={`hitech ${styles.infoBox}`}>
                    <ShieldCheck size={20} className={styles.infoIcon} />
                    <p>{project.footerNote}</p>
                  </div>
                )}

                <div className={styles.modalActions}>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`btn-primary ${styles.actionBtn}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ChevronRight size={16} />
                    <span>{project.customLink || 'Vamos conversar'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OpportunityModal;
