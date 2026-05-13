import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const logs = [
  "INITIALIZING_CORE_SYSTEM...",
  "ESTABLISHING_DATA_LINK_SUPABASE...",
  "LOADING_VISUAL_ASSETS...",
  "DECODING_INDUSTRIAL_INTERFACE...",
  "MOUNTING_PRODUCT_ENGINE...",
  "SYNCING_USER_ENVIRONMENT...",
  "BOOT_SEQUENCE_COMPLETE."
];

const Preloader = ({ onComplete }) => {
  const [currentLog, setCurrentLog] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setCurrentLog(prev => {
        if (prev < logs.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 450);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(progressInterval);
        return prev;
      });
    }, 30);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && currentLog === logs.length - 1) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 800);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, currentLog, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div 
          className={styles.preloaderOverlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className={styles.content}>
            {/* BRACKET PORTALS DESIGN */}
            <div className={styles.bracketContainer}>
              <div className={`${styles.bracket} ${styles.tl}`}></div>
              <div className={`${styles.bracket} ${styles.tr}`}></div>
              <div className={`${styles.bracket} ${styles.bl}`}></div>
              <div className={`${styles.bracket} ${styles.br}`}></div>
              
              <div className={styles.logoMark}>
                <span className={styles.monogram}>LL</span>
                <div className={styles.pulseRing}></div>
              </div>
            </div>

            <div className={styles.telemetry}>
              <div className={styles.statusRow}>
                <span className={styles.systemId}>SYSTEM_BOOT_SEQUENCE</span>
                <span className={styles.percent}>{progress}%</span>
              </div>
              
              <div className={styles.progressBar}>
                <motion.div 
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>

              <div className={styles.logContainer}>
                <span className={styles.logText}>
                  <span className={styles.prompt}>&gt;</span> {logs[currentLog]}
                </span>
                <div className={styles.glitchBar}></div>
              </div>
            </div>
          </div>

          <div className={styles.gridOverlay}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
