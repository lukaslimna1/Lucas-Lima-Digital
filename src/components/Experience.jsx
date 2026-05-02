import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMousePosition } from "../utils/useMousePosition";
import ExperienceModal from "./ExperienceModal";
import { ChevronRight } from "lucide-react";
import styles from "./Experience.module.css";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const { handleMouseMove } = useMousePosition();

  const experiences = [
    {
      id: "divino",
      number: "01",
      title: "OPERAÇÃO REAL NA PRÁTICA",
      context: "OPERAÇÃO REAL",
      envType: "NEGÓCIO FÍSICO",
      envName: "DIVINO SAPORE",
      chronology: "2024 — 2026",
      impacts: [
        "ORGANIZAÇÃO OPERACIONAL",
        "CONTROLE FINANCEIRO",
        "EFICIÊNCIA NO DIA A DIA"
      ],
      insight: "Sistemas não começam no código. Começam no entendimento do negócio.",
      color: "#00f2ff", // Ciano Tech
      modalSteps: [
        { id: "01", label: "CONTEXTO", content: "Atuação direta na operação do negócio, passando por financeiro, atendimento, marketing, sistemas e processos." },
        { id: "02", label: "O PROBLEMA REAL", content: "⚠️ Caixa desorganizado, falhas de comunicação, processos manuais e decisões sem base." },
        { id: "03", label: "AÇÃO", content: "Estruturei rotinas, organizei o fluxo financeiro, padronizei processos e reduzi dependência de tarefas manuais." },
        { id: "04", label: "IMPACTO", content: "Mais controle financeiro, operação mais previsível e redução de retrabalho. Base estruturada para crescimento." },
        { id: "05", label: "INSIGHT", content: "💡 Sistemas não começam no código. Começam no entendimento do negócio." }
      ]
    },
    {
      id: "pereirao",
      number: "02",
      title: "TECNOLOGIA NA PRÁTICA",
      context: "TECNOLOGIA NA PRÁTICA",
      envType: "VAREJO & LOGÍSTICA",
      envName: "LOJÃO DO PEREIRÃO",
      chronology: "2022 — 2024",
      impacts: [
        "ESTABILIDADE OPERACIONAL",
        "INFRAESTRUTURA ORGANIZADA",
        "SUPORTE TÉCNICO ÁGIL"
      ],
      insight: "Tecnologia invisível é a que sustenta tudo sem ninguém perceber.",
      color: "#00ffaa", // Verde Matrix
      modalSteps: [
        { id: "01", label: "CONTEXTO", content: "Atuação no coração técnico de uma grande operação de varejo e logística, garantindo a estabilidade dos sistemas críticos." },
        { id: "02", label: "O PROBLEMA REAL", content: "⚠️ Infraestrutura vulnerável, interrupções frequentes e falta de processos claros de manutenção preventiva." },
        { id: "03", label: "AÇÃO", content: "Organizei a infraestrutura de TI, padronizei o suporte técnico e implementei rotinas de manutenção preventiva." },
        { id: "04", label: "IMPACTO", content: "Disponibilidade contínua dos sistemas, redução de downtime e suporte técnico profissionalizado." },
        { id: "05", label: "INSIGHT", content: "💡 Tecnologia invisível é a que sustenta tudo sem ninguém perceber." }
      ]
    },
    {
      id: "varejo",
      number: "03",
      title: "BASE COMERCIAL & HUMANA",
      context: "BASE COMERCIAL & HUMANA",
      envType: "ATENDIMENTO & VENDAS",
      envName: "FRONT-END REAL",
      chronology: "2020 — 2022",
      impacts: [
        "EMPATIA REAL COM O USUÁRIO",
        "RESOLUÇÃO DE PROBLEMAS",
        "VISÃO COMERCIAL"
      ],
      insight: "Se você não entende quem usa, você não deveria construir nada.",
      color: "#0088ff", // Azul Cobalt
      modalSteps: [
        { id: "01", label: "CONTEXTO", content: "Experiência no atendimento direto ao cliente, compreendendo as dores reais de quem utiliza serviços e produtos." },
        { id: "02", label: "O PROBLEMA REAL", content: "⚠️ Atritos na jornada de compra e falhas na comunicação de valor para o cliente final." },
        { id: "03", label: "AÇÃO", content: "Desenvolvi escuta ativa e técnicas de resolução de problemas focadas na satisfação e retenção do usuário." },
        { id: "04", label: "IMPACTO", content: "Domínio da psicologia do usuário, comunicação assertiva e visão comercial estratégica." },
        { id: "05", label: "INSIGHT", content: "💡 Se você não entende quem usa, você não deveria construir nada." }
      ]
    },
    {
      id: "origem",
      number: "04",
      title: "ORIGEM DA CONSTRUÇÃO",
      context: "ORIGEM DA CONSTRUÇÃO",
      envType: "COMUNIDADE & CULTURA",
      envName: "EVENTOS INDEPENDENTES",
      chronology: "2018 — 2020",
      impacts: [
        "LIDERANÇA NA PRÁTICA",
        "EXECUÇÃO DO ZERO",
        "CRIAÇÃO DE EXPERIÊNCIAS"
      ],
      insight: "Criar sem recurso ensina mais do que qualquer teoria.",
      color: "#aa00ff", // Purple Tech
      modalSteps: [
        { id: "01", label: "CONTEXTO", content: "Organização e execução de projetos independentes, onde a liderança e a execução eram fundamentais para o sucesso." },
        { id: "02", label: "O PROBLEMA REAL", content: "⚠️ Necessidade de entregar experiências de alto impacto com recursos financeiros e humanos limitados." },
        { id: "03", label: "AÇÃO", content: "Gerenciei projetos do zero, desde a logística até a coordenação de equipes para entrega final." },
        { id: "04", label: "IMPACTO", content: "Desenvolvimento de resiliência, liderança prática e capacidade de abstração para resolver problemas complexos." },
        { id: "05", label: "INSIGHT", content: "💡 Criar sem recurso ensina mais do que qualquer teoria." }
      ]
    }
  ];

  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      <div className={`section-header ${styles.experienceHeader}`}>
        <motion.h2 
          className="section-title"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          EXPERIÊNCIA <span className="text-gradient">PROFISSIONAL</span>
        </motion.h2>
        <p className="section-subtitle">
          A construção de uma visão sistêmica através da prática real.
        </p>
      </div>

      <div className={styles.experienceGrid}>
        {experiences.map((exp, index) => (
          <div key={exp.id} className={styles.experienceItem}>
            <motion.div
              className="hitech-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseMove={handleMouseMove}
              onClick={() => setSelectedExp(exp)}
              style={{ height: '100%' }}
            >
              <div 
                className="hitech-card glass-panel"
                style={{ "--step-color": exp.color }}
              >
                {/* Elementos de Decoração Hi-Tech (Copiados de Projects.jsx) */}
                <div className="hitech-asymmetric-aura"></div>
                <div className="hitech-artistic-fusion"></div>
                <div className="hitech-artistic-grain"></div>
                <div className="hitech-border-glow"></div>

                <div className={styles.cardContent2x2}>
                  <div className={styles.cardBgNumber}>{exp.number}</div>
                  
                  {/* Linha 01: Contexto e Ambiente */}
                  <div className={styles.gridRow}>
                    <div className={styles.gridCell}>
                      <span className={styles.cellLabel}>
                        <span className={styles.labelDot}></span> CONTEXTO
                      </span>
                      <h3 className={styles.cellValue} style={{ color: exp.color, whiteSpace: 'pre-line' }}>
                        {exp.context.replace(' ', '\n')}
                      </h3>
                    </div>
                    <div className={styles.gridCell}>
                      <span className={styles.cellLabel}>
                        <span className={styles.labelDot}></span> AMBIENTE
                      </span>
                      <div className={styles.envContainer}>
                        <span className={styles.envType}>{exp.envType}</span>
                        <span className={styles.envName}>{exp.envName}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.gridDivider}></div>

                  {/* Linha 02: Impactos e Insight */}
                  <div className={styles.gridRowSecondary}>
                    <div className={styles.gridCell}>
                      <span className={styles.cellLabel}>
                        <span className={styles.labelDot}></span> IMPACTO GERADO
                      </span>
                      <div className={styles.impactList}>
                        {exp.impacts.map((impact, i) => (
                          <p key={i} className={styles.impactItem}>• {impact}</p>
                        ))}
                      </div>
                    </div>
                    <div className={styles.gridCell}>
                      <span className={styles.cellLabel}>
                        <span className={styles.labelDot}></span> INSIGHT
                      </span>
                      <p className={styles.cellValueInsight}>"{exp.insight}"</p>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <button className="btn-outline" style={{ width: '100%' }}>
                      <span>VER JORNADA COMPLETA</span>
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Cantoneiras Decorativas */}
                <div className="corner-decor top-left"></div>
                <div className="corner-decor top-right"></div>
                <div className="corner-decor bottom-left"></div>
                <div className="corner-decor bottom-right"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedExp && (
          <ExperienceModal 
            experience={selectedExp} 
            onClose={() => setSelectedExp(null)} 
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Experience;
