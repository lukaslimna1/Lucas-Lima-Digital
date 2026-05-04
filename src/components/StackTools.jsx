import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Database, Wrench, Circle } from 'lucide-react';
import { stackData } from '../data/stack';
import styles from './StackTools.module.css';

const StackTools = ({ lightMode, recruiterMode }) => {
  const getIcon = (category) => {
    switch (category) {
      case "Frontend Architecture": return <Layout size={20} />;
      case "Backend & Intelligence": return <Database size={20} />;
      case "Product & Design": return <Cpu size={20} />;
      case "Development Tooling": return <Wrench size={20} />;
      default: return <Circle size={20} />;
    }
  };

  return (
    <section 
      id="stack" 
      className={`${styles.stackSection} ${lightMode ? styles.light : ''} ${recruiterMode ? styles.recruiter : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLine}></div>
          <h2 className={styles.title}>STACK & FERRAMENTAS</h2>
          <p className={styles.subtitle}>ESPECIFICAÇÕES TÉCNICAS E ARQUITETURA</p>
        </div>

        <div className={styles.grid}>
          {stackData.map((group, idx) => (
            <motion.div 
              key={idx}
              className={styles.stackGroup}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.groupHeader}>
                <div className={styles.iconBox}>{getIcon(group.category)}</div>
                <h3 className={styles.groupTitle}>{group.category}</h3>
              </div>
              
              <div className={styles.toolsList}>
                {group.tools.map((tool, tIdx) => (
                  <div key={tIdx} className={styles.toolItem}>
                    <span className={styles.toolName}>{tool.name}</span>
                    <div className={styles.levelIndicator}>
                      <span className={styles.levelText}>{tool.level}</span>
                      <div className={styles.barContainer}>
                        <motion.div 
                          className={styles.bar}
                          initial={{ width: 0 }}
                          whileInView={{ 
                            width: tool.level === 'Expert' ? '100%' : 
                                   tool.level === 'Advanced' ? '80%' : 
                                   tool.level === 'Intermediate' ? '60%' : '40%' 
                          }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackTools;
