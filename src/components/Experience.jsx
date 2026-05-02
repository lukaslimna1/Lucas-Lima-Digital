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
      subHeadline: "Como caos operacional virou estrutura e controle",
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
        { id: "04", label: "IMPACTO", content: "• Mais controle financeiro\n• Operação mais previsível\n• Redução de retrabalho\n• Base estruturada para crescimento" },
        { id: "05", label: "INSIGHT", content: "💡 \"Sistemas não começam no código. Começam no entendimento do negócio.\"" }
      ]
    },
    {
      id: "pereirao",
      number: "02",
      title: "TECNOLOGIA APLICADA NO MUNDO REAL",
      subHeadline: "Infraestrutura invisível que sustenta a operação",
      context: "TECNOLOGIA NA PRÁTICA",
      envType: "VAREJO & LOGÍSTICA",
      envName: "LOJÃO DO PEREIRÃO",
      chronology: "2024",
      impacts: [
        "ESTABILIDADE OPERACIONAL",
        "INFRAESTRUTURA ORGANIZADA",
        "SUPORTE TÉCNICO ÁGIL"
      ],
      insight: "Tecnologia invisível é a que sustenta tudo sem ninguém perceber.",
      color: "#00ffaa", // Verde Matrix
      modalSteps: [
        { id: "01", label: "CONTEXTO", content: "Atuação em ambiente de varejo e logística, lidando com suporte técnico, equipamentos e estrutura de TI." },
        { id: "02", label: "O PROBLEMA REAL", content: "⚠️ Infraestrutura desorganizada, falhas operacionais e dependência constante de suporte reativo." },
        { id: "03", label: "AÇÃO", content: "Organizei equipamentos, padronizei processos técnicos e estabilizei a base de funcionamento da operação." },
        { id: "04", label: "IMPACTO", content: "• Mais estabilidade no dia a dia\n• Redução de falhas técnicas\n• Suporte mais ágil\n• Operação menos dependente de urgência" },
        { id: "05", label: "INSIGHT", content: "💡 \"Tecnologia invisível é a que sustenta tudo sem ninguém perceber.\"" }
      ]
    },
    {
      id: "varejo",
      number: "03",
      title: "COMPORTAMENTO REAL DO USUÁRIO",
      subHeadline: "Onde produto encontra gente de verdade",
      context: "BASE COMERCIAL & HUMANA",
      envType: "ATENDIMENTO & VENDAS",
      envName: "FRONT-END REAL",
      chronology: "2018 — 2024",
      impacts: [
        "EMPATIA REAL COM O USUÁRIO",
        "RESOLUÇÃO DE PROBLEMAS",
        "VISÃO COMERCIAL"
      ],
      insight: "Se você não entende quem usa, você não deveria construir nada.",
      color: "#0088ff", // Azul Cobalt
      modalSteps: [
        { id: "01", label: "CONTEXTO", content: "Atuação direta com clientes em vendas, atendimento e operação, lidando com comportamento real no dia a dia." },
        { id: "02", label: "O PROBLEMA REAL", content: "⚠️ Clientes com necessidades diferentes, comunicação falha e experiências inconsistentes." },
        { id: "03", label: "AÇÃO", content: "Desenvolvi leitura de comportamento, adaptação de abordagem e resolução prática de problemas em tempo real." },
        { id: "04", label: "IMPACTO", content: "• Melhor comunicação com usuários\n• Resolução mais rápida de problemas\n• Visão comercial mais clara\n• Entendimento real da jornada do cliente" },
        { id: "05", label: "INSIGHT", content: "💡 \"Se você não entende quem usa, você não deveria construir nada.\"" }
      ]
    },
    {
      id: "eventos",
      number: "04",
      title: "EXECUÇÃO DO ZERO",
      subHeadline: "Construir sem recurso, aprendendo na prática",
      context: "ORIGEM DA CONSTRUÇÃO",
      envType: "EVENTOS & COMUNIDADE",
      envName: "BASTIDORES",
      chronology: "2011 — 2015",
      impacts: [
        "LIDERANÇA INDEPENDENTE",
        "EXECUÇÃO SOB PRESSÃO",
        "VISÃO DE PROCESSO"
      ],
      insight: "Criar sem recurso ensina mais do que qualquer teoria.",
      color: "#ff3366", // Rosa Choque / Energia
      modalSteps: [
        { id: "01", label: "CONTEXTO", content: "Organização e produção de eventos independentes, envolvendo planejamento, execução e coordenação de equipe." },
        { id: "02", label: "O PROBLEMA REAL", content: "⚠️ Falta de recursos, estrutura limitada e necessidade de fazer tudo acontecer com o que existia." },
        { id: "03", label: "AÇÃO", content: "Organizei eventos, liderei equipes, planejei operações e executei projetos do início ao fim." },
        { id: "04", label: "IMPACTO", content: "• Desenvolvimento de liderança\n• Capacidade de execução sob pressão\n• Criação de experiências reais\n• Visão de organização prática" },
        { id: "05", label: "INSIGHT", content: "💡 \"Criar sem recurso ensina mais do que qualquer teoria.\"" }
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
