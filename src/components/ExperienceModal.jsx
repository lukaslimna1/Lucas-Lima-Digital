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
          <h2 className={styles.modalTitle}>{experience.title}</h2>
          
          {/* Subtítulo / Headline de Impacto */}
          <p className={styles.modalSubHeadline}>{experience.subHeadline}</p>
          
          {/* Timeline e Localização */}
          <div className={styles.modalMeta}>
            <Calendar size={14} />
            <span>{experience.chronology}</span>
            <span className={styles.metaDivider}>•</span>
            <MapPin size={14} />
            <span>{experience.envName}</span>
          </div>
          
          {/* Insight de Destaque */}
          {experience.insight && (
            <div className={styles.modalManifesto}>
              <p>{experience.insight}</p>
            </div>
          )}

          <div className={styles.modalSections}>
            {experience.modalSteps.map((step, idx) => {
              // Cores cíclicas para os bullets
              const bulletColors = [styles.cyan, styles.blue, styles.green];
              const currentColor = bulletColors[idx % bulletColors.length];
              
              // Lógica de Caixas Especiais (Highlights)
              const isProblem = step.label.includes("PROBLEMA");
              const isImpact = step.label.includes("IMPACTO");
              const isInsight = step.label.includes("INSIGHT");

              const sectionClass = `
                ${styles.modalSection} 
                ${isProblem ? styles.problemBox : ""} 
                ${isImpact ? styles.impactBox : ""} 
                ${isInsight ? styles.insightBox : ""}
              `.trim();

              return (
                <div className={sectionClass} key={idx}>
                  <h4 className={styles.modalSectionTitle}>
                    <span className={`${styles.bullet} ${currentColor}`}></span> 
                    <span className={styles.sectionIndex}>[{step.id || (idx + 1).toString().padStart(2, '0')}]</span> {step.label}
                  </h4>
                  
                  <div className={styles.modalSectionDesc} style={{ whiteSpace: 'pre-line' }}>
                    {step.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fechamento */}
          <div className={styles.modalClosure}>
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
