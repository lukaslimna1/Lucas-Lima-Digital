import { motion } from 'framer-motion';
import { Hexagon, Code, Layout, Share2 } from 'lucide-react';

const Solutions = () => {
  // Lista dos serviços/soluções principais oferecidas
  const solutions = [
    { icon: <Code size={24} />, title: 'Desenvolvimento Web', desc: 'Construção de sistemas modernos, rápidos e escaláveis, focados em performance e experiência.' },
    { icon: <Layout size={24} />, title: 'UX/UI Design', desc: 'Interfaces intuitivas e design systems que melhoram a usabilidade e aumentam conversão.' },
    { icon: <Share2 size={24} />, title: 'Marketing Digital', desc: 'Estratégias digitais orientadas a dados para posicionamento, crescimento e resultados reais.' },
  ];

  return (
    <motion.section 
      id="solutions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      {/* Cabeçalho */}
      <div className="section-header">
        <h2 className="section-title">
          <Hexagon className="title-icon blue" /> Soluções
        </h2>
        <p className="section-subtitle">
          Um pacote completo de habilidades para impulsionar seu produto digital do início ao fim.
        </p>
      </div>

      {/* Grid de Cards de Soluções com bordas levemente coloridas para contraste */}
      <div className="solutions-grid">
        {solutions.map((sol, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`glass-panel solution-card ${i === 1 ? 'border-purple' : 'border-blue'}`}
          >
            <div className="solution-icon">
              {sol.icon}
            </div>
            <h3 className="solution-title">{sol.title}</h3>
            <p className="solution-desc">{sol.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Solutions;
