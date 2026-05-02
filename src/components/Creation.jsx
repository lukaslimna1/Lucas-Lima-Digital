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
import styles from './Creation.module.css';
import { useMousePosition } from '../utils/useMousePosition';

const Creation = () => {
  const { handleMouseMove } = useMousePosition();
  
  const capabilities = [
    { 
      id: 'PROD',
      icon: <Cpu size={24} />, 
      title: 'PRODUTOS DIGITAIS', 
      desc: 'Construção de sistemas e plataformas com foco em funcionamento real, escalabilidade e experiência de uso.',
      color: '#22D3EE' // Ciano
    },
    { 
      id: 'DESIGN',
      icon: <Palette size={24} />, 
      title: 'UX, UI & EXPERIÊNCIA', 
      desc: 'Design guiado por comportamento, clareza e redução de fricção na jornada do usuário.',
      color: '#22D3EE' // Ciano
    },
    { 
      id: 'GROWTH',
      icon: <BarChart3 size={24} />, 
      title: 'GROWTH & ESTRATÉGIA', 
      desc: 'Decisões baseadas em dados, percepção de valor e comportamento real de mercado.',
      color: '#3B82F6' // Azul
    },
    { 
      id: 'OPS',
      icon: <Settings size={24} />, 
      title: 'OPERAÇÕES & PROCESSOS', 
      desc: 'Organização de fluxos, automação e estrutura para execução eficiente no dia a dia.',
      color: '#3B82F6' // Azul
    },
    { 
      id: 'BRAND',
      icon: <Users size={24} />, 
      title: 'MARCAS & COMUNIDADES', 
      desc: 'Construção de identidade, conexão com pessoas e experiências que vão além do digital.',
      color: '#34D399' // Verde
    },
    { 
      id: 'DATA',
      icon: <FlaskConical size={24} />, 
      title: 'DADOS & EXPERIMENTAÇÃO', 
      desc: 'Uso de dados, IA e testes para evoluir produtos e explorar novas possibilidades.',
      color: '#34D399' // Verde
    }
  ];

  const philosophySteps = [
    { icon: <Target size={20} />, text: 'Qual é o problema real?' },
    { icon: <Settings size={20} />, text: 'Como funciona na prática?' },
    { icon: <Search size={20} />, text: 'Quem realmente vai usar?' },
    { icon: <MessageSquare size={20} />, text: 'O que essas pessoas enfrentam no dia a dia?' },
    { icon: <TrendingUp size={20} />, text: 'Onde estão os gargalos?' },
    { icon: <CheckCircle2 size={20} />, text: 'Onde está o impacto de verdade?' }
  ];

  return (
    <motion.section 
      id="criacao"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`section ${styles.creationSection}`}
    >
      {/* Cabeçalho Principal */}
      <div className={`section-header ${styles.sectionHeader}`}>
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          MEU PROCESSO DE <span className="text-gradient">CRIAÇÃO</span>
        </motion.h2>
        <p className={`section-subtitle ${styles.sectionSubtitle}`}>
          Eu não trabalho com áreas isoladas. Eu construo sistemas completos de produto — conectando engenharia, design, estratégia e operação para gerar impacto real.
        </p>
      </div>

      <div className={styles.creationContainer}>
        
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
              style={{ 
                '--step-color': cap.color,
                '--step-shadow': `${cap.color}15`,
                '--step-border': `${cap.color}30`
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
                  <h3 className={styles.mindsetTitle}>MINDSET DE PRODUTO</h3>
                </div>
                
                <p className={styles.mindsetDesc}>
                  Antes de construir qualquer solução, eu busco entender o sistema como um todo.
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
                    Só depois disso a solução começa a fazer sentido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fechamento da Seção - Card Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.creationFooter}
        >
          <div className="hitech-card-wrapper" style={{ width: '100%' }}>
            <div className={`hitech-card glass-panel ${styles.footerCard}`}>
              <div className="hitech-grid-overlay"></div>
              <div className="hitech-border-glow"></div>
              
              <div className={styles.cardContent}>
                <p className={styles.footerQuote}>
                  Construir sem entender é só <span className={styles.dimText}>execução.</span><br />
                  Construir com visão é o que transforma <span className="text-gradient">produto em resultado.</span>
                </p>
              </div>

              {/* Detalhes de Decoração */}
              <div className="corner-decor top-left"></div>
              <div className="corner-decor bottom-right"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Creation;
