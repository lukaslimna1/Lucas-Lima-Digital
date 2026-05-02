import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import styles from './Diferencial.module.css';

const Diferencial = () => {
  return (
    <motion.section 
      id="diferencial"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`section ${styles.diferencialSection}`}
    >
      <div className="section-header">
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          O QUE ME <span className="text-gradient">DIFERENCIA</span>
        </motion.h2>
      </div>

      {/* Painel destacado contendo o diferencial de mercado */}
      <div className={`hitech-card-wrapper ${styles.highlightBlock}`}>
        <div className={`hitech-card glass-panel ${styles.diferencialCard}`}>
          <div className="hitech-grid-overlay"></div>
          <div className="hitech-border-glow"></div>
          
          <div className={styles.cardContent}>
            <h3 className={styles.diferencialTitle}>
              Eu não entrego apenas <span className={styles.strikeText}>código solto</span>. Entrego um <span className="text-gradient">produto digital completo</span>.
            </h3>
            
            <p className={styles.diferencialDesc}>
              Minha abordagem une engenharia de software rigorosa, design de interface obsessivo e visão de produto focada em métricas reais. É assim que transformo ideias complexas em experiências fluidas e lucrativas.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Diferencial;
