import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridOverlay}></div>
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.errorHeader}>
          <div className={styles.errorCode}>
            <span className={styles.bracket}>[</span>
            <span className={styles.codeText}>404</span>
            <span className={styles.bracket}>]</span>
          </div>
          <div className={styles.statusBadge}>
            <AlertTriangle size={14} className={styles.alertIcon} />
            SYSTEM_ERROR_CRITICAL
          </div>
        </div>

        <h1 className={styles.title}>PATH_NOT_RESOLVED</h1>
        
        <p className={styles.description}>
          A rota solicitada não foi encontrada no servidor local ou no link de dados remoto. 
          O recurso pode ter sido movido ou desativado.
        </p>

        <div className={styles.terminalBox}>
          <div className={styles.terminalLine}>
            <span className={styles.prompt}>&gt;</span> GET /requested_resource
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.error}>ERROR:</span> 0x000404_NOT_FOUND
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.prompt}>&gt;</span> SUGGESTION: RETURN_TO_HOME
          </div>
        </div>

        <div className={styles.actions}>
          <button 
            onClick={() => window.location.href = '/'}
            className={styles.btnPrimary}
          >
            <Home size={18} />
            REBOOT_SYSTEM
          </button>
          
          <button 
            onClick={() => window.location.reload()}
            className={styles.btnSecondary}
          >
            <RefreshCcw size={18} />
            RETRY_SYNC
          </button>
        </div>
      </motion.div>

      <div className={styles.scanline}></div>
    </div>
  );
};

export default NotFound;
