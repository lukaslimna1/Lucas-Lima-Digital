import React from "react";
import { motion } from "framer-motion";
import { X, Calendar, MapPin, ArrowRight } from "lucide-react";
import styles from "./ExperienceModal.module.css";

const ExperienceModal = ({ experience, onClose }) => {
  if (!experience) return null;

  // Extraímos as seções para mapear no modelo de projetos
  const problemStep = experience.modalSteps.find(s => s.type === 'problem');
  const actionStep = experience.modalSteps.find(s => s.type === 'action');
  const impactStep = experience.modalSteps.find(s => s.type === 'impact');

  return (
    <motion.div 
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={styles.modalContent}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header HUD idêntico ao de Projetos */}
        <div className={styles.hitechModalHeader}>
          <button className={styles.modalClose} onClick={onClose}>
            <X size={20} />
            <span>Voltar</span>
          </button>
        </div>

        <div className={styles.modalBodyContent}>
          {/* Categoria / Contexto */}
          <div className={styles.projectCategory}>
            <span className={styles.categoryDot}></span>
            {experience.context} • {experience.envType}
          </div>
          
          {/* Título Massivo */}
          <h2 className={styles.modalTitle}>{experience.modalHeadline}</h2>
          
          {/* Subtítulo Mono */}
          <p className={styles.modalSubtitle}>
            {experience.modalLocation} • {experience.modalPeriod}
          </p>
          
          {/* Manifesto / Insight - Opcional se for redundante com o passo 05, mas mantido para impacto */}
          {experience.insight && (
            <div className={styles.modalManifesto}>
              <p>"{experience.insight}"</p>
            </div>
          )}

          <div className={styles.modalSections}>
            {experience.modalSteps.map((step, idx) => {
              // Cores cíclicas para os bullets
              const bulletColors = [styles.blue, styles.cyan, styles.green];
              const currentColor = bulletColors[idx % bulletColors.length];

              return (
                <div className={styles.modalSection} key={idx}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${currentColor}`}></span> 
                    <span className={styles.sectionIndex}>[{step.label || (idx + 1).toString().padStart(2, '0')}]</span> {step.title}
                  </h4>
                  
                  {Array.isArray(step.content) ? (
                    <div className={styles.resultBox}>
                      <ul className={styles.bulletList}>
                        {step.content.map((item, i) => (
                          <li key={i} className={styles.bulletItem}>
                            <div className={styles.bulletDot}></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className={styles.modalSectionDesc}>{step.content}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Fechamento */}
          <div className={`${styles.modalSection} ${styles.modalClosure}`}>
            <div className={styles.modalFooter}>
              <button className={styles.footerButton} onClick={onClose}>
                EXPLORAR OUTRAS EXPERIÊNCIAS
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceModal;
