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
      insight: "Sistemas não começam no código. Começam no entendimento do negócio.",
      color: "#3B82F6",
      
      modalHeadline: "OPERAÇÃO REAL NA PRÁTICA",
      modalSubHeadline: "Como caos operacional virou estrutura e controle",
      modalLocation: "Divino Sapore",
      modalPeriod: "2024 — 2026",
      modalSteps: [
        { label: "01", title: "CONTEXTO", content: "Atuação direta na operação do negócio, passando por financeiro, atendimento, marketing, sistemas e processos.", type: "context" },
        { label: "02", title: "O PROBLEMA REAL", content: "⚠️ Caixa desorganizado, falhas de comunicação, processos manuais e decisões sem base.", type: "problem" },
        { label: "03", title: "AÇÃO", content: "Estruturei rotinas, organizei o fluxo financeiro, padronizei processos e reduzi dependência de tarefas manuais.", type: "action" },
        { label: "04", title: "IMPACTO", content: ["Mais controle financeiro", "Operação mais previsível", "Redução de retrabalho", "Base estruturada para crescimento"], type: "impact" },
        { label: "05", title: "INSIGHT", content: "💡 Sistemas não começam no código. Começam no entendimento do negócio.", type: "insight" }
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
      insight: "Tecnologia invisível é a que sustenta tudo sem ninguém perceber.",
      color: "#22D3EE",
      
      modalHeadline: "TECNOLOGIA NA PRÁTICA",
      modalSubHeadline: "Infraestrutura técnica como base de sustentação",
      modalLocation: "Lojão do Pereirão",
      modalPeriod: "2024",
      modalSteps: [
        { label: "01", title: "CONTEXTO", content: "Atuação no coração técnico de uma grande operação de varejo e logística, garantindo que o motor não parasse.", type: "context" },
        { label: "02", title: "O PROBLEMA REAL", content: "⚠️ Infraestrutura vulnerável, interrupções frequentes e falta de processos claros de manutenção preventiva.", type: "problem" },
        { label: "03", title: "AÇÃO", content: "Organizei a infraestrutura de TI, padronizei o suporte técnico e implementei rotinas de estabilidade operacional.", type: "action" },
        { label: "04", title: "IMPACTO", content: ["Disponibilidade contínua dos sistemas", "Redução do tempo de downtime", "Suporte técnico profissionalizado", "Equipamentos e redes documentados"], type: "impact" },
        { label: "05", title: "INSIGHT", content: "💡 Tecnologia invisível é a que sustenta tudo sem ninguém perceber.", type: "insight" }
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
      insight: "Se você não entende quem usa, você não deveria construir nada.",
      color: "#10B981",
      
      modalHeadline: "BASE COMERCIAL & HUMANA",
      modalSubHeadline: "A experiência do usuário começa no balcão",
      modalLocation: "Front-end Real",
      modalPeriod: "2020 — 2023",
      modalSteps: [
        { label: "01", title: "CONTEXTO", content: "Anos de experiência no 'front-end real': o atendimento direto ao cliente e a linha de frente comercial.", type: "context" },
        { label: "02", title: "O DESAFIO HUMANO", content: "⚠️ Entender necessidades reais por trás de pedidos vagos e gerenciar expectativas em tempo real.", type: "problem" },
        { label: "03", title: "AÇÃO", content: "Desenvolvi escuta ativa, técnicas de negociação e resolução ágil de conflitos focada na satisfação do usuário.", type: "action" },
        { label: "04", title: "IMPACTO", content: ["Fidelização de clientes", "Aumento na conversão de vendas", "Domínio da psicologia do usuário", "Comunicação clara e assertiva"], type: "impact" },
        { label: "05", title: "INSIGHT", content: "💡 Se você não entende quem usa, você não deveria construir nada.", type: "insight" }
      ]
    },
    {
      id: "origem",
      context: "ORIGEM",
      envType: "FORMAÇÃO",
      envName: "SISTEMAS DE INFORMAÇÃO",
      impacts: [
        "• LÓGICA DE PROGRAMAÇÃO",
        "• BANCO DE DADOS",
        "• ENGENHARIA DE SOFTWARE"
      ],
      insight: "O código é apenas a ferramenta. A solução é o pensamento.",
      color: "#8B5CF6",
      
      modalHeadline: "ORIGEM ACADÊMICA",
      modalSubHeadline: "Onde o pensamento lógico foi forjado",
      modalLocation: "Universidade",
      modalPeriod: "Formação",
      modalSteps: [
        { label: "01", title: "FUNDAMENTOS", content: "Imersão profunda em algoritmos, estruturas de dados e a base teórica que sustenta qualquer tecnologia moderna.", type: "context" },
        { label: "02", title: "MODELAGEM", content: "Aprendi que um banco de dados bem modelado vale mais que mil linhas de código improvisado.", type: "problem" },
        { label: "03", title: "FILOSOFIA", content: "A faculdade me ensinou a aprender. Em um mundo onde linguagens morrem, a lógica é eterna.", type: "action" },
        { label: "04", title: "IMPACTO", content: ["Raciocínio analítico apurado", "Base técnica para full-stack", "Capacidade de abstração", "Metodologia científica"], type: "impact" },
        { label: "05", title: "INSIGHT", content: "💡 O código é apenas a ferramenta. A solução é o pensamento.", type: "insight" }
      ]
    }
  ];

  return (
    <section className={styles.experienceSection} onMouseMove={handleMouseMove}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.sectionTag}>Trajetória Profissional</span>
          <h2 className={styles.sectionTitle}>Experiência</h2>
          <p className={styles.sectionSubtitle}>
            A construção de uma visão sistêmica através da prática real.
          </p>
        </motion.div>

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
              <div 
                className={styles.cardWrapper}
                style={{ "--accent-color": exp.color }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.number}>/{exp.number || (index + 1).toString().padStart(2, '0')}</div>
                  <div className={styles.context}>{exp.context}</div>
                </div>

                <div className={styles.envInfo}>
                  <div className={styles.envType}>{exp.envType}</div>
                  <div className={styles.envName}>{exp.envName}</div>
                </div>

                <div className={styles.impactList}>
                  <div className={styles.impactLabel}>IMPACTO GERADO</div>
                  <ul className={styles.impacts}>
                    {exp.impacts.map((impact, i) => (
                      <li key={i}>{impact}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.insightBox}>
                  <div className={styles.insightLabel}>O QUE ISSO ME ENSINOU</div>
                  <p className={styles.insightText}>"{exp.insight}"</p>
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
            </motion.div>
          ))}
        </div>
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
