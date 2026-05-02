import { motion } from 'framer-motion';
import { User, Target, Zap, TrendingUp } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const qualities = [
    {
      title: 'Visão de Produto',
      desc: 'Pensamento focado na jornada do usuário e no valor de negócio, indo além de simples telas.',
      icon: <Target className={styles.qualityIcon} size={24} />
    },
    {
      title: 'Execução Técnica',
      desc: 'Domínio de tecnologias modernas para construir sistemas robustos, performantes e escaláveis.',
      icon: <Zap className={styles.qualityIcon} size={24} />
    },
    {
      title: 'Mentalidade Estratégica',
      desc: 'Baseada em experiências reais na operação de empresas, antecipando gargalos e otimizando processos.',
      icon: <TrendingUp className={styles.qualityIcon} size={24} />
    }
  ];

  return (
    <section id="about" className={`section hitech ${styles.aboutSection}`}>
      <div className="hitech-grid-overlay"></div>
      
      <div className={`section-header ${styles.aboutHeader}`}>
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Sobre <span className="text-gradient">Lucas Lima</span>
        </motion.h2>
      </div>

      <div className={styles.aboutContentWrapper}>
        <div className={`${styles.aboutMainCard} glass-panel hitech`}>
          <div className="hitech-border-glow"></div>
          
          <div className={styles.aboutTextMain}>
            <p className={`${styles.aboutParagraph} ${styles.highlight}`}>
              Profissional multidisciplinar com formação em Análise e Desenvolvimento de Sistemas, 
              atuando na interseção entre tecnologia, design e estratégia.
            </p>
            <div className={styles.aboutSeparator}></div>
            <p className={styles.aboutParagraph}>
              Minha experiência vai além do digital. Atuei diretamente na operação de negócios, 
              envolvendo financeiro, administrativo, marketing e atendimento, o que me deu uma visão 
              prática de como empresas funcionam no dia a dia.
            </p>
            <p className={styles.aboutParagraph}>
              Hoje, aplico esse conhecimento na construção de soluções digitais mais eficientes, 
              intuitivas e orientadas a resultado.
            </p>
          </div>

          <div className="corner-decor top-right"></div>
          <div className="corner-decor bottom-left"></div>
        </div>

        <div className={styles.qualitiesGrid}>
          {qualities.map((q, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${styles.qualityCard} glass-panel hitech`}
            >
              <div className="hitech-border-glow"></div>
              <div className="hitech-grid-overlay"></div>
              <div className={styles.qualityIconWrapper}>{q.icon}</div>
              <h3 className={styles.qualityTitle}>{q.title}</h3>
              <p className={styles.qualityDesc}>{q.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
