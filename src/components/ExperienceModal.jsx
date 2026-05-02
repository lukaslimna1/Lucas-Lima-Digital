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
          
          {/* Manifesto / Insight - Agora no topo para dar o tom */}
          {experience.insight && (
            <div className={styles.modalManifesto}>
              <p>"{experience.insight}"</p>
            </div>
          )}

          <div className={styles.modalSections}>
            {/* [01] O Problema */}
            {problemStep && (
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}>
                  <span className={`${styles.bullet} ${styles.blue}`}></span> 
                  <span className={styles.sectionIndex}>[01]</span> ANÁLISE DO CENÁRIO
                </h4>
                <p className={styles.modalSectionDesc}>{problemStep.content}</p>
              </div>
            )}
            
            {/* [02] A Execução */}
            {actionStep && (
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}>
                  <span className={`${styles.bullet} ${styles.cyan}`}></span> 
                  <span className={styles.sectionIndex}>[02]</span> EXECUÇÃO E ESTRATÉGIA
                </h4>
                <p className={styles.modalSectionDesc}>{actionStep.content}</p>
              </div>
            )}

            {/* [03] O Impacto */}
            {impactStep && (
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}>
                  <span className={`${styles.bullet} ${styles.green}`}></span> 
                  <span className={styles.sectionIndex}>[03]</span> IMPACTO E RESULTADOS
                </h4>
                <div className={styles.resultBox}>
                  <ul className={styles.bulletList}>
                    {impactStep.content.map((item, i) => (
                      <li key={i} className={styles.bulletItem}>
                        <div className={styles.bulletDot}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
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
