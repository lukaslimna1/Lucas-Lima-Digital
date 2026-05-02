import { motion } from 'framer-motion';
import { Settings, Compass, Layout, Code, RefreshCw, Cpu, BarChart3 } from 'lucide-react';
import styles from './Process.module.css';

const Process = () => {
  const steps = [
    { 
      title: 'Imersão & Contexto', 
      icon: <Compass size={28} />,
      desc: 'Entendimento profundo do problema, usuário e objetivos do negócio.',
      color: 'var(--hitech-blue)'
    },
    { 
      title: 'Definição do Sistema', 
      icon: <Cpu size={28} />,
      desc: 'Estruturação do produto, lógica e fluxos principais.',
      color: 'var(--accent-purple)'
    },
    { 
      title: 'Experiência & Interface', 
      icon: <Layout size={28} />,
      desc: 'Criação da jornada e interfaces focadas em clareza e usabilidade.',
      color: 'var(--hitech-blue)'
    },
    { 
      title: 'Engenharia & Implementação', 
      icon: <Code size={28} />,
      desc: 'Construção técnica com foco em performance e escalabilidade.',
      color: 'var(--accent-purple)'
    },
    { 
      title: 'Validação & Métricas', 
      icon: <BarChart3 size={28} />,
      desc: 'Análise de comportamento real e uso do produto.',
      color: 'var(--hitech-blue)'
    },
    { 
      title: 'Evolução Contínua', 
      icon: <RefreshCw size={28} />,
      desc: 'Iteração constante baseada em dados e feedback real.',
      color: 'var(--accent-purple)'
    }
  ];

  return (
    <motion.section 
      id="framework"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`section ${styles.processSection}`}
    >
      {/* Cabeçalho Operacional */}
      <div className="section-header">
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Framework de <span className="text-gradient">Construção</span>
        </motion.h2>
        <p className={`section-subtitle ${styles.processSubtitle}`}>
          Metodologia prática para transformar problemas em produtos funcionais, combinando product sense, design e engenharia.
        </p>
      </div>

      {/* Grid Hi-Tech intercalado em 2 linhas de 3 */}
      <div className={styles.processGrid}>
        {steps.map((step, i) => {
          const isBlue = i % 2 === 0;
          const bg = isBlue ? 'rgba(59, 130, 246, 0.1)' : 'rgba(168, 85, 247, 0.1)';
          const shadow = `${step.color}15`; // hex + opacity simplificado
          const border = `${step.color}30`;
          
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="hitech-card-wrapper"
              style={{
                "--step-color": step.color,
                "--step-bg": bg,
                "--step-shadow": shadow,
                "--step-border": border
              }}
            >
              <div className={`hitech-card glass-panel ${styles.capCard}`}>
                <div className="hitech-asymmetric-aura"></div>
                <div className="hitech-artistic-fusion"></div>
                <div className="hitech-artistic-grain"></div>
                <div className="hitech-border-glow"></div>
                
                {/* Bordas em L */}
                <div className="corner-decor top-left"></div>
                <div className="corner-decor top-right"></div>
                <div className="corner-decor bottom-left"></div>
                <div className="corner-decor bottom-right"></div>
                
                <div className={styles.cardHeader}>
                  <div className={styles.capCategory}>
                    <span className={styles.categoryDot}></span>
                    MÓDULO_0{i+1}
                  </div>
                  
                  <div className={styles.iconTitleRow}>
                    <div className={styles.capIcon}>
                      {step.icon}
                    </div>
                    <h3 className={styles.capTitle}>{step.title}</h3>
                  </div>
                  
                  <div className={styles.cardMain}>
                    <p className={styles.capDesc}>{step.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  );
};

export default Process;
