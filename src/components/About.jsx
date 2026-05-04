import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, User } from 'lucide-react';
import styles from './About.module.css';
import { useMousePosition } from '../utils/useMousePosition';

const qualities = [
  {
    title: 'VISÃO DE PRODUTO',
    desc: 'Não começo pela tela. Começo pelo problema, pelo usuário e pelo impacto real no negócio.',
    icon: <Target size={24} />,
    color: '#3B82F6' // Azul - Estratégia
  },
  {
    title: 'EXECUÇÃO TÉCNICA',
    desc: 'Transformo ideias em sistemas funcionais, com arquitetura sólida, performance e organização.',
    icon: <Zap size={24} />,
    color: '#22D3EE' // Ciano - Técnica
  },
  {
    title: 'MENTALIDADE ESTRATÉGICA',
    desc: 'Experiência prática em operação me permite enxergar gargalos, tomar decisões e construir com visão de longo prazo.',
    icon: <TrendingUp size={24} />,
    color: '#34D399' // Verde - Resultados/Operação
  }
];

const About = () => {
  const { handleMouseMove } = useMousePosition();

  return (
    <section id="about" className={`section hitech ${styles.aboutSection}`}>
      <div className="hitech-grid-overlay"></div>
      
      <div className={`section-header ${styles.aboutHeader}`}>
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          SOBRE <span className="text-gradient">LUCAS LIMA</span>
        </motion.h2>
      </div>

      <div className={styles.aboutContentWrapper}>
        <div className={`hitech-card-wrapper ${styles.mainCardWrapper}`}
             onMouseMove={handleMouseMove}
             style={{ 
               '--step-color': '#22D3EE',
               '--step-shadow': 'rgba(34, 211, 238, 0.15)',
               '--step-border': 'rgba(34, 211, 238, 0.3)'
             }}
        >
          <div className={`${styles.aboutMainCard} hitech-card glass-panel`}>
            <div className="hitech-asymmetric-aura"></div>
            <div className="hitech-artistic-fusion"></div>
            <div className="hitech-artistic-grain"></div>
            <div className="hitech-border-glow"></div>
            
            <div className={styles.aboutTextMain}>
              <div className={styles.mainCardHeader}>
                <div className={styles.userIconWrapper}>
                  <User size={32} color="var(--accent-cyan)" />
                </div>
                <div className={styles.headerText}>
                  <h3 className={styles.mainCardTitle}>EU CRESCI JUNTO COM A TECNOLOGIA.</h3>
                  <p className={`${styles.aboutParagraph} ${styles.highlight}`}>
                    Antes de estudar sistemas, eu já desmontava computadores, explorava softwares e tentava entender como tudo funcionava por trás.
                  </p>
                </div>
              </div>

              <div className={styles.aboutSeparator}></div>
              
              <div className={styles.textGrid}>
                <div className={styles.textColumn}>
                  <p className={styles.aboutParagraph}>
                    Sempre fui movido por curiosidade — não só usar, mas entender, melhorar e recriar. Enquanto muita gente via tecnologia como ferramenta, eu via como um sistema inteiro para ser explorado.
                  </p>
                  <p className={styles.aboutParagraph}>
                    Com o tempo, isso evoluiu. Passei por design, desenvolvimento, marketing e operação real de negócios.
                  </p>
                </div>
                <div className={styles.textColumn}>
                  <p className={styles.aboutParagraph}>
                    Atuava diretamente no dia a dia de empresa — financeiro, atendimento, processos e gestão — entendendo na prática onde as coisas quebram. <strong>Hoje, eu junto tudo isso.</strong>
                  </p>
                  <p className={styles.aboutParagraph}>
                    Não trabalho só com código ou interface. Penso em como o produto funciona de verdade: do usuário até a operação, da ideia até a execução. Meu foco é construir soluções que fazem sentido na vida real.
                  </p>
                </div>
              </div>
            </div>

            {/* Cantos Hitech */}
            <div className="corner-decor top-left"></div>
            <div className="corner-decor top-right"></div>
            <div className="corner-decor bottom-left"></div>
            <div className="corner-decor bottom-right"></div>
          </div>
        </div>

        <div className={styles.qualitiesGrid}>
          {qualities.map((q, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseMove={handleMouseMove}
              className={`hitech-card-wrapper ${styles.qualityCardWrapper}`}
              style={{ 
                '--step-color': q.color,
                '--step-shadow': `${q.color}15`,
                '--step-border': `${q.color}30`
              }}
            >
              <div className={`${styles.qualityCard} hitech-card glass-panel`}>
                <div className="hitech-asymmetric-aura"></div>
                <div className="hitech-artistic-fusion"></div>
                <div className="hitech-artistic-grain"></div>
                <div className="hitech-border-glow"></div>
                
                <div className={styles.qualityIconWrapper} style={{ color: q.color }}>
                  {q.icon}
                </div>
                <h3 className={styles.qualityTitle}>{q.title}</h3>
                <p className={styles.qualityDesc}>{q.desc}</p>

                {/* Cantos Hitech */}
                <div className="corner-decor top-left"></div>
                <div className="corner-decor bottom-right"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frase de Fechamento */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.aboutFooter}
        >
          <div className={`hitech-card-wrapper ${styles.footerCardWrapper}`}
               onMouseMove={handleMouseMove}
               style={{ 
                 '--step-color': '#3B82F6',
                 '--step-shadow': 'rgba(59, 130, 246, 0.15)',
                 '--step-border': 'rgba(59, 130, 246, 0.3)'
               }}
          >
            <div className={`${styles.aboutFooterCard} hitech-card glass-panel`}>
              <div className="hitech-asymmetric-aura"></div>
              <div className="hitech-artistic-fusion"></div>
              <div className="hitech-artistic-grain"></div>
              <div className="hitech-border-glow"></div>
              
              <p className={styles.footerPhrase}>
                Eu não sigo apenas processos. <br />
                Eu construo <span className="text-gradient">sistemas que resolvem problemas de verdade.</span>
              </p>

              {/* Cantos Hitech */}
              <div className="corner-decor top-left"></div>
              <div className="corner-decor bottom-right"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(About);
