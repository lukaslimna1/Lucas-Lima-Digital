import { motion } from 'framer-motion';
import { Mail, Share2, Code } from 'lucide-react';
import styles from './Contact.module.css';

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
      <div className={styles.contactContainer}>
        
        <div className="hitech-card-wrapper" style={{ width: '100%' }}>
          <div className={`hitech-card glass-panel ${styles.contactCard}`}>
            <div className="hitech-grid-overlay"></div>
            <div className="hitech-border-glow"></div>
            
            <div className={styles.cardContent}>
              <div className={styles.statusBadge}>
                <span className={`dot-pulse ${styles.pulseDot}`}></span>
                <span className={styles.statusText}>DISPONÍVEL PARA NOVOS PROJETOS</span>
              </div>

              <h2 className={styles.contactTitle}>PRONTO PARA <span className="text-gradient">INOVAR?</span></h2>
              <p className={styles.contactSubtitle}>
                Transforme sua visão em um produto digital escalável, rápido e com experiência premium. Vamos conversar sobre o seu próximo desafio.
              </p>
              
              <div className={styles.actionsContainer}>
                <a href="mailto:lucas@example.com" className={`btn-primary ${styles.emailBtn}`}>
                  <Mail size={28} />
                  <div className={styles.emailTextWrapper}>
                    <div className={styles.emailLabel}>Inicie uma conversa</div>
                    <div className={styles.emailAddress}>lucas@example.com</div>
                  </div>
                </a>
                
                <div className={styles.socialWrapper}>
                  <a href="#" className={`btn-outline ${styles.socialBtn}`}>
                    <Share2 size={24} color="var(--accent-blue)" />
                    <span className={styles.socialLabel}>LinkedIn</span>
                  </a>
                  <a href="#" className={`btn-outline ${styles.socialBtn}`}>
                    <Code size={24} color="var(--accent-purple)" />
                    <span className={styles.socialLabel}>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
