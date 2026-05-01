import { motion } from 'framer-motion';
import { Briefcase, Mail, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero-section"
    >
      {/* Elementos de background premium: esferas brilhantes */}
      <div className="glow-orb blue-orb"></div>
      <div className="glow-orb purple-orb"></div>

      {/* Badge de status no estilo Sistema / Terminal */}
      <div className="badge" style={{ border: '1px solid rgba(139, 92, 246, 0.3)', background: 'rgba(139, 92, 246, 0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span className="dot-pulse" style={{ backgroundColor: '#8B5CF6', boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}></span>
        <span style={{ color: '#8B5CF6', fontWeight: '700', letterSpacing: '0.05em' }}>SYSTEM_ONLINE // CORE: ACTIVE</span>
      </div>

      {/* Título de impacto */}
      <h1 className="hero-title">
        Engenharia & UX para <span className="text-gradient">Produtos Premium</span>
      </h1>
      
      {/* Posicionamento profissional */}
      <p className="hero-subtitle">
        Eu não crio apenas telas. Arquitetura escalável, design imersivo e performance real para produtos digitais de alto nível.
      </p>

      {/* Caixa de terminal destacando o objetivo (Premium UX) */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hero-terminal" style={{
        marginTop: '2rem',
        marginBottom: '3rem',
        padding: '1.25rem 1.5rem',
        background: 'rgba(5, 5, 8, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        maxWidth: '650px',
        backdropFilter: 'blur(10px)',
        borderLeft: '3px solid var(--accent-blue)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{ marginTop: '2px' }}>
          <Terminal size={20} color="var(--accent-blue)" />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '6px' }}>
            {">"} ./exec_lucas_lima.sh
          </div>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
            <span style={{ fontWeight: '600', color: '#10b981' }}>SUCCESS:</span> Fullstack skills loaded. <br />
            Transformando complexidade técnica em interfaces invisíveis e conversão real.
          </p>
        </div>
      </motion.div>

      {/* Botões de Call to Action */}
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          <Briefcase size={18} />
          Ver Projetos
        </a>
        <a href="#contact" className="btn-outline">
          <Mail size={18} />
          Entrar em Contato
        </a>
      </div>
      
      {/* Métricas rápidas de autoridade */}
      <div className="hero-stats">
        {[
          { label: 'Anos de Exp.', value: '5+' },
          { label: 'Projetos Entregues', value: '40+' },
          { label: 'Clientes Satisfeitos', value: '100%' },
          { label: 'Linhas de Código', value: '1M+' },
        ].map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
