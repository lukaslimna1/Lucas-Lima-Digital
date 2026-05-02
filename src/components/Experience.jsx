import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, MapPin } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Divino Sapore',
      role: 'Auxiliar Administrativo',
      period: '2024 – 2026',
      desc: 'Atuação completa na operação do negócio, envolvendo gestão financeira, processos administrativos, RH e marketing. Responsável por controle de caixa, emissão de notas fiscais, gestão de equipe e organização de processos internos.',
      highlight: 'Visão prática de negócio e tomada de decisão.'
    },
    {
      company: 'Lojão do Pereirão',
      role: 'Auxiliar de TI',
      period: '2024',
      desc: 'Suporte técnico, organização de infraestrutura e padronização de processos tecnológicos durante período temporário.',
      highlight: 'Estabilização de infraestrutura crítica.'
    },
    {
      company: 'Comercial & Atendimento',
      role: 'Operações e Relacionamento',
      period: 'Anterior',
      desc: 'Experiência em vendas, atendimento e operação, desenvolvendo comunicação, visão comercial e relacionamento direto com o cliente final.',
      highlight: 'Desenvolvimento de inteligência emocional e comercial.'
    }
  ];

  return (
    <section id="experience" className={`section ${styles.experienceSection}`}>
      <div className="section-header">
        <h2 className="section-title">
          <Briefcase className="title-icon blue" /> EXPERIÊNCIA PROFISSIONAL
        </h2>
        <p className="section-subtitle">
          Uma trajetória que une a técnica da engenharia com a realidade prática do mercado.
        </p>
      </div>

      <div className={styles.experienceTimeline}>
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={styles.experienceItem}
          >
            <div className={`hitech-card-wrapper ${styles.experienceItemWrapper}`} style={{ width: '100%' }}>
              <div className="hitech-card glass-panel">
                <div className="hitech-grid-overlay"></div>
                <div className="hitech-border-glow"></div>
                
                <div className="card-content">
                  <div className={styles.experienceHeader}>
                    <div className={styles.experienceMainInfo}>
                      <h3 className={styles.experienceRole}>{exp.role}</h3>
                      <div className={styles.experienceCompanyInfo}>
                        <Building2 size={14} className={styles.iconSub} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className={styles.experiencePeriod}>
                      <Calendar size={14} className={styles.iconSub} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className={styles.experienceDesc}>{exp.desc}</p>
                  
                  <div className={styles.experienceHighlight}>
                    <span className={styles.highlightLabel}>Foco:</span>
                    <span className={styles.highlightText}>{exp.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
