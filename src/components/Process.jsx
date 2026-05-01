import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { processData } from '../data';

const Process = () => {
  // Passos da metodologia de trabalho importados de data.js
  const steps = processData;

  return (
    <motion.section 
      id="process"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      {/* Cabeçalho */}
      <div className="section-header">
        <h2 className="section-title">
          <Lightbulb className="title-icon purple" /> Como Penso
        </h2>
        <p className="section-subtitle">
          Metodologia focada em unir product sense com excelência técnica. Um processo estruturado para não apenas entregar código, mas construir produtos com real adequação de mercado.
        </p>
      </div>

      {/* Stepper Horizontal */}
      <div className="process-stepper">
        {steps.map((step, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="step-card glass-panel"
          >
            <div className="step-number-wrapper">
              <span className="step-number">{step.num}</span>
              {i !== steps.length - 1 && <div className="step-connector"></div>}
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Process;
