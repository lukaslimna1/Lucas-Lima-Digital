import React from "react";
import { motion } from "framer-motion";
import { X, Calendar, MapPin, ArrowRight, AlertTriangle, CheckCircle, Lightbulb, Zap, Info } from "lucide-react";
import styles from "./ExperienceModal.module.css";

const ExperienceModal = ({ experience, onClose }) => {
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
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.modalHeader} style={{ '--accent-modal': experience.color }}>
          <div className={styles.headerTop}>
            <div className={styles.headerLabel}>
              <Zap size={12} className={styles.labelIcon} />
              <span>EXECUTION REPORT</span>
            </div>
            <div className={styles.headerPeriod}>
              <Calendar size={14} />
              <span>{experience.modalPeriod}</span>
            </div>
          </div>
          <h2 className={styles.modalTitle}>{experience.modalHeadline}</h2>
          <p className={styles.modalSubtitle}>{experience.modalSubHeadline}</p>
          
          <div className={styles.locationBadge}>
            <MapPin size={14} />
            <span>{experience.modalLocation}</span>
          </div>
        </div>

        <div className={styles.detailsList}>
          <div className={styles.timelineLine}></div>
          {experience.modalSteps.map((step, index) => (
            <div 
              key={index} 
              className={`${styles.detailBlock} ${styles[step.type]}`}
              style={{ '--step-color': step.type === 'problem' ? '#f59e0b' : (step.type === 'impact' ? '#10b981' : experience.color) }}
            >
              <div className={styles.blockHeader}>
                <div className={styles.iconWrapper}>
                  {step.type === 'context' && <Info size={16} />}
                  {step.type === 'problem' && <AlertTriangle size={16} />}
                  {step.type === 'action' && <Zap size={16} />}
                  {step.type === 'impact' && <CheckCircle size={16} />}
                  {step.type === 'insight' && <Lightbulb size={16} />}
                </div>
                <div className={styles.headerText}>
                  <span className={styles.blockNumber}>{step.label}</span>
                  <h3 className={styles.blockTitle}>{step.title}</h3>
                </div>
              </div>
              
              <div className={styles.blockContent}>
                {step.isList ? (
                  <ul className={styles.bulletList}>
                    {step.content.map((item, i) => (
                      <li key={i} className={styles.bulletItem}>
                        <div className={styles.bulletDot}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.blockText}>{step.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.footerButton} onClick={onClose}>
            EXPLORAR OUTRAS EXPERIÊNCIAS
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceModal;
