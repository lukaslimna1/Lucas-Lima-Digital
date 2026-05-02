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
      context: "OPERAÇÃO REAL",
      envType: "NEGÓCIO FÍSICO",
      envName: "DIVINO SAPORE",
      impacts: [
        "• ORGANIZAÇÃO OPERACIONAL",
        "• CONTROLE FINANCEIRO",
        "• EFICIÊNCIA NO DIA A DIA"
      ],
      insight: "Sistemas não começam no código.\nComeçam no entendimento do negócio.",
      color: "#3B82F6",
      
      modalHeadline: "OPERAÇÃO REAL NA PRÁTICA",
      modalSubHeadline: "Como eu saí do caos operacional para estrutura e controle",
      modalLocation: "Divino Sapore",
      modalPeriod: "2024 — 2026",
      modalSteps: [
        { label: "01", title: "CONTEXTO", content: "Entrei para apoiar a operação e rapidamente passei a atuar em todas as áreas críticas: financeiro, atendimento, marketing, sistemas e processos.", type: "context" },
        { label: "02", title: "O PROBLEMA REAL", content: "⚠️ Caixa desorganizado, falhas de comunicação, processos manuais e decisões sem base de dados reais.", type: "problem" },
        { label: "03", title: "AÇÃO", content: "Estruturei processos, organizei o fluxo financeiro, padronizei rotinas operacionais e comecei a transformar atividades manuais em fluxos lógicos.", type: "action" },
        { label: "04", title: "IMPACTO", isList: true, content: ["Controle financeiro rigoroso", "Operação previsível e escalável", "Redução drástica de erros manuais", "Base sólida para expansão do negócio"], type: "impact" },
        { label: "05", title: "INSIGHT", content: "💡 \"Sistemas não começam no código. Começam no entendimento do negócio.\"", type: "insight" }
      ]
    },
    {
      id: "pereirao",
      context: "TECNOLOGIA NA PRÁTICA",
      envType: "VAREJO & LOGÍSTICA",
      envName: "LOJÃO DO PEREIRÃO",
      impacts: [
        "• ESTABILIDADE OPERACIONAL",
        "• INFRAESTRUTURA ORGANIZADA",
        "• SUPORTE TÉCNICO ÁGIL"
      ],
      insight: "Tecnologia invisível é a que sustenta\ntudo sem ninguém perceber.",
      color: "#22D3EE",
      
      modalHeadline: "TECNOLOGIA NA PRÁTICA",
      modalSubHeadline: "Infraestrutura técnica como base de sustentação",
      modalLocation: "Lojão do Pereirão",
      modalPeriod: "2024",
      modalSteps: [
        { label: "01", title: "CONTEXTO", content: "Atuação no coração técnico de uma grande operação de varejo e logística, garantindo que o motor não parasse.", type: "context" },
        { label: "02", title: "O PROBLEMA REAL", content: "⚠️ Infraestrutura vulnerável, interrupções frequentes e falta de processos claros de manutenção preventiva.", type: "problem" },
        { label: "03", title: "AÇÃO", content: "Organizei a infraestrutura de TI, padronizei o suporte técnico e implementei rotinas de estabilidade operacional.", type: "action" },
        { label: "04", title: "IMPACTO", isList: true, content: ["Disponibilidade contínua dos sistemas", "Redução do tempo de downtime", "Suporte técnico profissionalizado", "Equipamentos e redes documentados"], type: "impact" },
        { label: "05", title: "INSIGHT", content: "💡 \"Tecnologia invisível é a que sustenta tudo sem ninguém perceber.\"", type: "insight" }
      ]
    },
    {
      id: "varejo",
      context: "BASE COMERCIAL & HUMANA",
      envType: "ATENDIMENTO & VENDAS",
      envName: "FRONT-END REAL",
      impacts: [
        "• EMPATIA REAL COM O USUÁRIO",
        "• RESOLUÇÃO DE PROBLEMAS",
        "• VISÃO COMERCIAL"
      ],
      insight: "Se você não entende quem usa,\nvocê não deveria construir nada.",
      color: "#34D399",
      
      modalHeadline: "BASE COMERCIAL & HUMANA",
      modalSubHeadline: "Entendendo a jornada do usuário no front-end real",
      modalLocation: "Atendimento & Vendas",
      modalPeriod: "2018 — 2024",
      modalSteps: [
        { label: "01", title: "CONTEXTO", content: "Anos no 'front-end real' (vendas e atendimento), aprendendo como as pessoas tomam decisões e o que as frustra.", type: "context" },
        { label: "02", title: "O PROBLEMA REAL", content: "⚠️ Distância entre o que o sistema oferece e o que o cliente realmente precisa para resolver seu problema.", type: "problem" },
        { label: "03", title: "AÇÃO", content: "Utilizei empatia e visão comercial para mediar conflitos e encontrar soluções práticas que o software muitas vezes ignora.", type: "action" },
        { label: "04", title: "IMPACTO", isList: true, content: ["Fidelização de clientes reais", "Resolução assertiva de problemas", "Visão crítica de UX baseada em pessoas", "Habilidades de negociação e comunicação"], type: "impact" },
        { label: "05", title: "INSIGHT", content: "💡 \"Se você não entende quem usa, você não deveria construir nada.\"", type: "insight" }
      ]
    },
    {
      id: "projetos",
      context: "ORIGEM DA CONSTRUÇÃO",
      envType: "COMUNIDADE & CULTURA",
      envName: "EVENTOS INDEPENDENTES",
      impacts: [
        "• LIDERANÇA NA PRÁTICA",
        "• EXECUÇÃO DO ZERO",
        "• CRIAÇÃO DE EXPERIÊNCIAS"
      ],
      insight: "Criar sem recurso ensina mais\ndo que qualquer teoria.",
      color: "#A855F7",
      
      modalHeadline: "ORIGEM DA CONSTRUÇÃO",
      modalSubHeadline: "Liderança e execução quando não existia nada pronto",
      modalLocation: "Eventos Independentes",
      modalPeriod: "2011 — 2015",
      modalSteps: [
        { label: "01", title: "CONTEXTO", content: "O início de tudo: organizando comunidades e eventos quando os recursos eram escassos e a vontade era a única ferramenta.", type: "context" },
        { label: "02", title: "O PROBLEMA REAL", content: "⚠️ Falta de estrutura, orçamento inexistente e a necessidade de criar algo do absoluto zero.", type: "problem" },
        { label: "03", title: "AÇÃO", content: "Assumi a liderança, coordenei pessoas, gerenciei orçamentos mínimos e executei projetos que impactaram centenas de pessoas.", type: "action" },
        { label: "04", title: "IMPACTO", isList: true, content: ["Nascimento da mentalidade de construtor", "Experiência precoce em liderança", "Capacidade de execução independente", "Resiliência perante o caos"], type: "impact" },
        { label: "05", title: "INSIGHT", content: "💡 \"Criar sem recurso ensina mais do que qualquer teoria.\"", type: "insight" }
      ]
    }
  ];

  return (
    <section id="experience" className={`section ${styles.experienceSection}`}>
      <div className="section-header">
        <h2 className="section-title">
          EXPERIÊNCIA REAL DE <span className="text-gradient">CONSTRUÇÃO</span>
        </h2>
      </div>

      <div className={styles.experienceGrid}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={styles.experienceItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedExp(exp)}
          >
            <div className={`hitech-card-wrapper ${styles.expCardWrapper}`}
                 onMouseMove={handleMouseMove}
                 style={{ 
                   '--step-color': exp.color,
                   '--step-shadow': `${exp.color}15`,
                   '--step-border': `${exp.color}44`
                 }}
            >
              <div className="hitech-card glass-panel">
                <div className="hitech-asymmetric-aura"></div>
                <div className="hitech-artistic-fusion"></div>
                <div className="hitech-artistic-grain"></div>
                <div className="hitech-border-glow"></div>
                
                <div className={styles.cardContent2x2}>
                  <div className={styles.cardBgNumber}>0{index + 1}</div>
                  <div className={styles.cardGridPattern}></div>

                  <div className={styles.gridRow}>
                    <div className={styles.gridCell}>
                      <div className={styles.cellLabel}>
                        <span className={styles.labelDot}></span>
                        CONTEXTO
                      </div>
                      <h4 className={styles.cellValue} style={{ color: exp.color }}>{exp.context}</h4>
                    </div>
                    <div className={styles.gridCell}>
                      <div className={styles.cellLabel}>AMBIENTE</div>
                      <div className={styles.envContainer}>
                        <span className={styles.envType}>{exp.envType}</span>
                        <span className={styles.envName}>{exp.envName}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.gridDivider}></div>

                  <div className={styles.gridRow}>
                    <div className={styles.gridCell}>
                      <div className={styles.cellLabel}>IMPACTO GERADO</div>
                      <div className={styles.impactList}>
                        {exp.impacts.map((impact, i) => (
                          <p key={i} className={styles.impactItem}>{impact}</p>
                        ))}
                      </div>
                    </div>
                    <div className={styles.gridCell}>
                      <div className={styles.cellLabel}>O QUE ISSO ME ENSINOU</div>
                      <p className={styles.cellValueInsight}>{exp.insight}</p>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.projectLink}>
                      <span className={styles.linkText}>VER JORNADA COMPLETA</span>
                      <div className={styles.linkArrow}>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="corner-decor top-left"></div>
                <div className="corner-decor bottom-right"></div>
              </div>
            </div>
          </motion.div>
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
    </section>
  );
};

export default Experience;
