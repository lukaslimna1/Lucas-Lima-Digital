import { memo } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mail, Terminal } from 'lucide-react';
import styles from './Hero.module.css';
import { useMousePosition } from '../utils/useMousePosition';

const Hero = memo(() => {
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
            <span className={styles.badgeText}>PORTAL_ONLINE // CORE: ACTIVE</span>
          </div>

          {/* Título de impacto */}
          <h1 className={styles.heroTitle}>
            Construção de <br />
            <span className="text-gradient">Sistemas & Produtos Digitais</span> <br />
            <span className={styles.heroTitleSub}>com foco em impacto real</span>
          </h1>
          
          {/* Posicionamento profissional */}
          <p className={styles.heroSubtitle}>
            Eu não apenas desenvolvo interfaces. Entendo o problema, conecto tecnologia, design e operação, e projeto soluções digitais robustas que funcionam na vida real.
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
                {">"} ./abrir_portal_lucas_lima
              </div>
              <p className={styles.terminalText}>
                <span className={styles.terminalSuccess}>SUCCESS:</span> Sistema de identidade carregado. <br />
                <span style={{ opacity: 0.9 }}>Do portal ao produto. Da ideia ao sistema. Do sistema ao impacto.</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className={styles.heroRightCol}>
          {/* Métricas Reais em Mini Cards Hi-Tech - Agora com Assimetria Visual */}
          <div className={styles.heroStatsGrid}>
            {[
              { label: 'Experiência', value: '+5 anos criando', span: 'square' },
              { label: 'Projetos & Estudos', value: '+10 construções experimentais', span: 'tall' },
              { label: 'Pipeline Atual', value: '2 projetos em desenvolvimento', span: 'tall' },
              { label: 'Aplicação Real', value: '1 sistema em uso', span: 'square' },
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
              Explorar Projetos
              <Briefcase size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Iniciar Projeto
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default Hero;
