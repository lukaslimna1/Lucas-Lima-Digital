import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Palette, 
  BarChart3, 
  Settings, 
  Users, 
  FlaskConical,
  Target,
  Search,
  MessageSquare,
  TrendingUp,
  Zap,
  CheckCircle2
} from 'lucide-react';
import styles from './Solutions.module.css';
import { useMousePosition } from '../utils/useMousePosition';

const Solutions = () => {
  const { handleMouseMove } = useMousePosition();
  
  const capabilities = [
    { 
      id: 'PROD',
      icon: <Cpu size={24} />, 
      title: 'Produtos Digitais', 
      desc: 'Sistemas e plataformas com foco em performance, escalabilidade e experiência real de uso.' 
    },
    { 
      id: 'DESIGN',
      icon: <Palette size={24} />, 
      title: 'UX, UI & Experiência', 
      desc: 'Design guiado por comportamento humano e redução de fricção na jornada do usuário.' 
    },
    { 
      id: 'GROWTH',
      icon: <BarChart3 size={24} />, 
      title: 'Growth & Estratégia', 
      desc: 'Posicionamento e crescimento baseados em dados, psicologia de consumo e percepção de valor.' 
    },
    { 
      id: 'OPS',
      icon: <Settings size={24} />, 
      title: 'Operações & Processos', 
      desc: 'Estruturação de operações com foco em eficiência, automação e execução prática.' 
    },
    { 
      id: 'BRAND',
      icon: <Users size={24} />, 
      title: 'Marcas & Comunidades', 
      desc: 'Experiências que conectam pessoas e identidade — construindo lealdade do digital ao físico.' 
    },
    { 
      id: 'DATA',
      icon: <FlaskConical size={24} />, 
      title: 'Dados & Experimentação', 
      desc: 'Uso de IA e automação para explorar novos modelos de negócio e otimização de produto.' 
    }
  ];

  const philosophySteps = [
    { icon: <Target size={20} />, text: 'Por que isso existe?' },
    { icon: <Settings size={20} />, text: 'Como funciona na prática?' },
    { icon: <Search size={20} />, text: 'Quem realmente vai usar?' },
    { icon: <MessageSquare size={20} />, text: 'O que essas pessoas sentem?' },
    { icon: <TrendingUp size={20} />, text: 'Onde estão os gargalos?' },
    { icon: <CheckCircle2 size={20} />, text: 'Onde gero impacto real?' }
  ];

  return (
    <motion.section 
      id="criacao"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`section ${styles.solutionsSection}`}
    >
      {/* Cabeçalho Principal */}
      <div className={`section-header ${styles.sectionHeader}`}>
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Meu processo de <span className="text-gradient">criação</span>
        </motion.h2>
        <p className={`section-subtitle ${styles.sectionSubtitle}`}>
          Eu não entrego apenas tecnologia, design ou marketing. Eu construo sistemas completos de produto, conectando engenharia, design e estratégia para gerar soluções orientadas a impacto real.
        </p>
      </div>

      <div className={styles.solutionsContainer}>
        
        {/* Capacidades (Grid) */}
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseMove={handleMouseMove}
              className="hitech-card-wrapper"
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
                    MODULE_{cap.id}
                  </div>
                  <div className={styles.titleWrapper}>
                    <div className={styles.iconTitleRow}>
                      <div className={styles.capIcon}>
                        {cap.icon}
                      </div>
                      <h4 className={styles.capTitle}>{cap.title}</h4>
                    </div>
                  </div>
                </div>

                <div className={styles.cardMain}>
                  <p className={styles.capDesc}>{cap.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mindset de Produto */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          className={styles.philosophyPanel}
        >
          <div className="hitech-card-wrapper">
            <div className={`hitech-card glass-panel ${styles.mindsetCard}`}>
              <div className="hitech-asymmetric-aura"></div>
              <div className="hitech-artistic-fusion"></div>
              <div className="hitech-artistic-grain"></div>
              <div className="hitech-border-glow"></div>
              
              {/* Bordas em L */}
              <div className="corner-decor top-left"></div>
              <div className="corner-decor top-right"></div>
              <div className="corner-decor bottom-left"></div>
              <div className="corner-decor bottom-right"></div>
              
              <div className={styles.cardContent}>
                <div className={styles.mindsetHeader}>
                  <Brain color="var(--accent-blue)" size={32} />
                  <h3 className={styles.mindsetTitle}>Mindset de Produto</h3>
                </div>
                
                <p className={styles.mindsetDesc}>
                  Antes de construir qualquer solução, eu busco entender o sistema inteiro através de um framework analítico rigoroso.
                </p>

                <div className={styles.stepList}>
                  {philosophySteps.map((step, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                      className={styles.stepItem}
                    >
                      <div className={styles.stepIcon}>
                        {step.icon}
                      </div>
                      <h4 className={styles.stepText}>{step.text}</h4>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.impactBox}>
                  <Zap size={24} className={styles.zapIcon} />
                  <p className={styles.impactText}>
                    Visão Sistêmica orientada a resultados e impacto real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Solutions;
