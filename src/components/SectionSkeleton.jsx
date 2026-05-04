import { motion } from 'framer-motion';
import styles from './SectionSkeleton.module.css';

const SectionSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className="section-header">
        {/* Título Skeleton */}
        <div className={styles.titleSkeleton}>
          <motion.div 
            className={styles.shimmer}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        {/* Subtítulo Skeleton */}
        <div className={styles.subtitleSkeleton}>
          <motion.div 
            className={styles.shimmer}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.2 }}
          />
        </div>
      </div>

      <div className={styles.contentSkeleton}>
        {/* Grid de Cards Fake (Blueprint Style) */}
        <div className={styles.blueprintGrid}>
          {[1, 2].map(i => (
            <div key={i} className={styles.blueprintCard}>
              <div className={styles.cardLines}>
                <div className={styles.lineX}></div>
                <div className={styles.lineY}></div>
              </div>
              <div className={styles.blueprintHeader}></div>
              <div className={styles.blueprintBody}></div>
              <div className={styles.blueprintFooter}></div>
              
              {/* Pontos de ancoragem nos cantos */}
              <div className={styles.anchorDot}></div>
              <div className={styles.anchorDot}></div>
              <div className={styles.anchorDot}></div>
              <div className={styles.anchorDot}></div>
            </div>
          ))}
        </div>
        
        {/* Régua técnica lateral */}
        <div className={styles.ruler}>
          {[...Array(10)].map((_, i) => (
            <div key={i} className={styles.rulerMark}></div>
          ))}
        </div>
      </div>
      
      {/* Label de Carregamento Industrial */}
      <div className={styles.statusLabel}>
        <span className={styles.blinkingDot}></span>
        LOADING_SYSTEM_MODULE...
      </div>
    </div>
  );
};

export default SectionSkeleton;
