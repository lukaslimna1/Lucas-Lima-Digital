import { motion } from 'framer-motion';
import { Briefcase, Mail, Terminal } from 'lucide-react';
import styles from './Hero.module.css';
import { useMousePosition } from '../utils/useMousePosition';

const Hero = () => {
  const { handleMouseMove } = useMousePosition();
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.heroSection}
    >
      <div className={styles.heroContentLayout}>
        <div className={styles.heroLeftCol}>
          {/* Badge de status no estilo Sistema / Terminal */}
          <div className={`badge hitech ${styles.heroBadge}`}>
            <span className="dot-pulse"></span>
            <span className={styles.badgeText}>SYSTEM_ONLINE // CORE: ACTIVE</span>
          </div>

          {/* Título de impacto */}
          <h1 className={styles.heroTitle}>
            Engenharia & UX <br />
            <span className={styles.heroTitleSub}>para <span className="text-gradient">Produtos Premium</span></span>
          </h1>
          
          {/* Posicionamento profissional */}
          <p className={styles.heroSubtitle}>
            Eu não crio apenas telas. Arquitetura escalável, design imersivo e performance real para produtos digitais de alto nível.
          </p>

          {/* Caixa de terminal destacando o objetivo */}
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={styles.heroTerminal}
          >
            <div className="hitech-asymmetric-aura"></div>
            <div className="hitech-artistic-fusion" style={{ opacity: 0.3 }}></div>
            <div className="hitech-artistic-grain"></div>
            <div className="hitech-border-glow" style={{ opacity: 0.5 }}></div>
            <div style={{ marginTop: '2px', position: 'relative', zIndex: 1 }}>
              <Terminal size={20} color="var(--accent-cyan)" />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className={styles.terminalHeader}>
                {">"} ./exec_lucas_lima.sh
              </div>
              <p className={styles.terminalText}>
                <span className={styles.terminalSuccess}>SUCCESS:</span> Multidisciplinary system loaded. <br />
                <span style={{ opacity: 0.9 }}>Transformando processos complexos em produtos digitais eficientes, com foco em usabilidade, performance e resultado.</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className={styles.heroRightCol}>
          {/* Métricas Reais em Mini Cards Hi-Tech - Agora com Assimetria Visual */}
          <div className={styles.heroStatsGrid}>
            {[
              { label: 'Experiência', value: 'Desde 2014', span: 'square' },
              { label: 'Expertise Lab', value: '+10 Projetos', span: 'tall' },
              { label: 'Pipeline Ativo', value: '2 Projetos', span: 'tall' },
              { label: 'Produção Real', value: '1 App Ativo', span: 'square' },
            ].map((stat, i) => {
              const isBlue = i % 2 === 0;
              const color = isBlue ? 'var(--hitech-blue)' : 'var(--accent-green)';
              
              return (
                <motion.div 
                  key={i} 
                  className={`hitech-card-wrapper ${styles[stat.span]}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onMouseMove={handleMouseMove}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  style={{
                    "--step-color": color,
                    "--step-border": `${color}30`,
                    "--step-shadow": `${color}15`
                  }}
                >
                  <div className={`hitech-card glass-panel ${styles.miniCard}`}>
                    <div className="hitech-asymmetric-aura"></div>
                    <div className="hitech-artistic-fusion"></div>
                    <div className="hitech-artistic-grain"></div>
                    <div className="hitech-border-glow"></div>
                    <div className="corner-decor top-right"></div>
                    <div className="corner-decor bottom-left"></div>
                    
                    <span className={styles.miniCardLabel}>{stat.label}</span>
                    <span className={styles.miniCardValue}>{stat.value}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Botões de Call to Action - Padronizados com estilo Explorar Case */}
          <div className={styles.heroActions}>
            <a href="#projects" className="btn-primary">
              VER PROJETOS
              <Briefcase size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              ENTRAR EM CONTATO
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
