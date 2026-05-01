import { motion } from 'framer-motion';
import { Mail, Share2, Code } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section contact-section"
    >
      {/* Área centralizada de contato no estilo Mini Dashboard */}
      <div className="contact-container" style={{ maxWidth: '900px' }}>
        
        <div className="glass-panel" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          
          <div className="glow-orb blue-orb" style={{ top: '-10%', right: '-10%', opacity: 0.15 }}></div>
          <div className="glow-orb purple-orb" style={{ bottom: '-10%', left: '-10%', opacity: 0.1 }}></div>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '999px', marginBottom: '2rem' }}>
            <span className="dot-pulse" style={{ backgroundColor: '#10b981', width: '6px', height: '6px' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#10b981', letterSpacing: '0.05em' }}>DISPONÍVEL PARA NOVOS PROJETOS</span>
          </div>

          <h2 className="contact-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Pronto para <span className="text-gradient">inovar?</span></h2>
          <p className="contact-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            Transforme sua visão em um produto digital escalável, rápido e com experiência premium. Vamos conversar sobre o seu próximo desafio.
          </p>
          
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '700px' }}>
            <a href="mailto:lucas@example.com" className="btn-primary" style={{ flex: '1', minWidth: '250px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <Mail size={28} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', opacity: 0.8, fontWeight: '500' }}>Inicie uma conversa</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>lucas@example.com</div>
              </div>
            </a>
            
            <div style={{ display: 'flex', flex: '1', minWidth: '250px', gap: '16px' }}>
              <a href="#" className="btn-outline" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '20px', justifyContent: 'center' }}>
                <Share2 size={24} color="var(--accent-blue)" />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>LinkedIn</span>
              </a>
              <a href="#" className="btn-outline" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '20px', justifyContent: 'center' }}>
                <Code size={24} color="var(--accent-purple)" />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
