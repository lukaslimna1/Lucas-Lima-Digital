import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './Contact.module.css';

const Contact = () => {
  const contactChannels = [
    { id: 'whatsapp', name: 'WhatsApp', desc: 'Respostas rápidas via chat.', icon: faWhatsapp, link: 'https://wa.me/5514988025296', className: styles.whatsapp },
    { id: 'linkedin', name: 'LinkedIn', desc: 'Conexão profissional.', icon: faLinkedin, link: 'https://linkedin.com/in/lucaslimna/', className: styles.linkedin },
    { id: 'github', name: 'GitHub', desc: 'Arquiteturas e repositórios.', icon: faGithub, link: 'https://github.com/lukaslimna1', className: styles.github },
    { id: 'email', name: 'Email', desc: 'Parcerias e propostas.', icon: null, link: 'mailto:lucasmslima1@gmail.com', className: styles.email }
  ];

  return (
    <section id="contact" className="section">
      <div className={styles.contactContainer}>
        <div className={styles.contactLayout}>
          
          {/* LADO ESQUERDO: TÍTULO EM 3 LINHAS + SUBTÍTULO ABAIXO */}
          <motion.div 
            className={styles.leftCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              OPEN_PORTAL // CONTACT_LAYER
            </div>

            <h2 className={styles.title}>
              PRONTO PARA <br />
              CONSTRUIR <br />
              <span className="text-gradient">ALGO REAL?</span>
            </h2>

            <p className={styles.subtitle}>
              Eu atuo do entendimento do problema até a execução do produto — conectando estratégia, design e engenharia para criar soluções que funcionam no mundo real.
            </p>
          </motion.div>

          {/* LADO DIREITO: CARDS ALINHADOS À ESQUERDA */}
          <motion.div 
            className={styles.rightCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.interfaceTitle}>PORTAL DE CONEXÃO</h3>

            <div className={styles.statsGrid}>
              {contactChannels.map((channel) => (
                <a 
                  key={channel.id}
                  href={channel.link}
                  target={channel.id !== 'email' ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`${styles.statCard} ${channel.className}`}
                >
                  {/* INDICADORES DE CANTO */}
                  <div className={`${styles.corner} ${styles.tl}`}></div>
                  <div className={`${styles.corner} ${styles.tr}`}></div>
                  <div className={`${styles.corner} ${styles.bl}`}></div>
                  <div className={`${styles.corner} ${styles.br}`}></div>

                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>
                      {channel.icon ? (
                        <FontAwesomeIcon icon={channel.icon} className={styles.cardIcon} />
                      ) : (
                        <Mail className={styles.cardIcon} size={22} />
                      )}
                    </div>
                    <span className={styles.cardLabel}>{channel.name}</span>
                  </div>
                  
                  <p className={styles.cardDesc}>{channel.desc}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* BASE: TERMINAL EM LARGURA TOTAL */}
          <motion.div 
            className={styles.fullWidthTerminal}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className={styles.terminalLabel}>&gt; ./OPEN_LUCAS_LIMA_PORTAL</span>
            <div className={styles.terminalPhrase}>
              <span>SUCCESS: Adaptive builder loaded.</span>
              "Construir sem entender é execução. <br />
              Construir com visão é o que transforma produto em resultado."
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
