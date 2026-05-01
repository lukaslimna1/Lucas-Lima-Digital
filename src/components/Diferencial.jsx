import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Diferencial = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      {/* Painel destacado contendo o diferencial de mercado */}
      <div className="glass-panel highlight-block" style={{ 
        padding: '5rem 3rem', 
        textAlign: 'center', 
        borderColor: 'rgba(139, 92, 246, 0.4)', 
        position: 'relative', 
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(139, 92, 246, 0.1)'
      }}>
        
        {/* Glow animado no background */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', backgroundColor: 'var(--accent-purple)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}
        ></motion.div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <Sparkles color="var(--accent-purple)" size={20} /> O que me diferencia
          </h2>
          
          {/* Posicionamento forte / Copywriting focado em conversão */}
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'white', maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.3', letterSpacing: '-0.02em' }}>
            Eu não entrego apenas <span style={{ opacity: 0.5, textDecoration: 'line-through' }}>código solto</span>. Entrego um <span className="text-gradient">produto digital completo</span>.
          </h3>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
            Minha abordagem une engenharia de software rigorosa, design de interface obsessivo e visão de produto focada em métricas reais. É assim que transformo ideias complexas em experiências fluidas e lucrativas.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Diferencial;
