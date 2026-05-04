import { memo } from 'react';
import { motion } from 'framer-motion';
import { Settings, Compass, Layout, Code, RefreshCw, Cpu, BarChart3 } from 'lucide-react';
import styles from './Framework.module.css';

const FRAMEWORK_STEPS = [
  { 
    label: '[IMERSÃO]',
    title: 'Imersão Real', 
    icon: <Compass size={28} color="currentColor" />,
    desc: 'Eu não começo pelo “o que fazer”. Eu começo entendendo o problema de verdade — negócio, operação, usuário e onde isso quebra na prática.',
    color: '#3B82F6', // Azul
    status: 'ACTIVE'
  },
  { 
    label: '[SISTEMA]',
    title: 'Leitura do Sistema', 
    icon: <Settings size={28} color="currentColor" />,
    desc: 'Conecto todas as partes, identifico gargalos e entendo o que realmente impacta resultado.',
    color: '#3B82F6', // Azul
    status: 'ACTIVE'
  },
  { 
    label: '[DIREÇÃO]',
    title: 'Direção Estratégica', 
    icon: <Compass size={28} color="currentColor" />,
    desc: 'Definição clara do que deve ser feito, do que não deve e onde está o maior impacto antes de construir.',
    color: '#3B82F6', // Azul
    status: 'ACTIVE'
  },
  { 
    label: '[ARQUITETURA]',
    title: 'Arquitetura do Produto', 
    icon: <Cpu size={28} color="currentColor" />,
    desc: 'Definição da base: estrutura, fluxos e lógica para o sistema funcionar sem depender de improviso.',
    color: '#22D3EE', // Ciano
    status: 'ACTIVE'
  },
  { 
    label: '[UX]',
    title: 'Experiência do Usuário', 
    icon: <Layout size={28} color="currentColor" />,
    desc: 'Transformo estrutura em algo utilizável — fluxos claros, interfaces intuitivas e decisões guiadas por comportamento real.',
    color: '#22D3EE', // Ciano
    status: 'ACTIVE'
  },
  { 
    label: '[BUILD]',
    title: 'Construção & Engenharia', 
    icon: <Code size={28} color="currentColor" />,
    desc: 'Aqui vira produto: código, integrações e automações funcionando de forma escalável e organizada.',
    color: '#22D3EE', // Ciano
    status: 'ACTIVE'
  },
  { 
    label: '[VALIDAÇÃO]',
    title: 'Validação Real', 
    icon: <BarChart3 size={28} color="currentColor" />,
    desc: 'Análise de uso, comportamento e fricções para ajustar o que realmente gera resultado.',
    color: '#34D399', // Verde
    status: 'ACTIVE'
  },
  { 
    label: '[EVOLUÇÃO]',
    title: 'Evolução de Produto', 
    icon: <RefreshCw size={28} color="currentColor" />,
    desc: 'O sistema evolui conforme o uso, o mercado e novas oportunidades surgem.',
    color: '#34D399', // Verde
    status: 'ACTIVE'
  },
  { 
    label: '[EXPANSÃO]',
    title: 'Expansão & Escala', 
    icon: <Cpu size={28} color="currentColor" />,
    desc: 'Depois que o núcleo funciona, é onde escala: novas features, automações e crescimento estruturado.',
    color: '#34D399', // Verde
    status: 'ACTIVE',
    state: 'FULL CYCLE'
  }
];

const Framework = memo(() => {

  return (
    <motion.section 
      id="framework"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`section ${styles.frameworkSection}`}
    >
      {/* Cabeçalho Operacional */}
      <div className="section-header">
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          FRAMEWORK DE <span className="text-gradient">CONSTRUÇÃO</span>
        </motion.h2>
        <p className={`section-subtitle ${styles.frameworkSubtitle}`}>
          Não é um checklist. É um sistema de execução para transformar ideias confusas em produtos funcionais, estruturados e prontos para evoluir.
        </p>
      </div>

      {/* Grid Hi-Tech intercalado em 2 linhas de 3 */}
      <div className={styles.frameworkGrid}>
        {FRAMEWORK_STEPS.map((step, i) => {
          const bg = `${step.color}10`; // Opacidade suave baseada na cor do módulo
          const shadow = `${step.color}15`; 
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
                    <div className={styles.telemetryRow}>
                      <span className={styles.categoryDot}></span>
                      <span className={styles.telemetryLabel}>PORTAL_PHASE:</span>
                      <span className={styles.telemetryValue}>{step.label.replace('[', '').replace(']', '')}</span>
                    </div>
                    <div className={styles.telemetryRow}>
                      <span className={`${styles.categoryDot} ${styles.activeDot}`}></span>
                      <span className={styles.telemetryLabel}>STATUS:</span>
                      <span className={styles.telemetryValue}>{step.status}</span>
                    </div>
                    {step.state && (
                      <div className={styles.telemetryRow}>
                        <span className={styles.categoryDot}></span>
                        <span className={styles.telemetryLabel}>SYSTEM_STATE:</span>
                        <span className={styles.telemetryValue}>{step.state}</span>
                      </div>
                    )}
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
});
export default Framework;
