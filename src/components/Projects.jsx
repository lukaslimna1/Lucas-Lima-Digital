import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight, X } from 'lucide-react';
import { projectsData } from '../data';

const Projects = () => {
  // Gerencia qual projeto está ativo no Modal de Detalhes
  const [activeProject, setActiveProject] = useState(null);

  // Estado para controlar se mostra todos os projetos ou apenas os de destaque
  const [showAll, setShowAll] = useState(false);

  // Os dados agora são importados do src/data.js para facilitar a edição e escalar o projeto
  const projects = projectsData;
  const featuredProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      {/* Cabeçalho da Seção */}
      <div className="section-header">
        <h2 className="section-title">
          <Briefcase className="title-icon blue" /> Projetos em Destaque
        </h2>
        <p className="section-subtitle">
          Uma seleção de soluções digitais criadas para resolver problemas reais e gerar impacto mensurável.
        </p>
      </div>

      {/* Grid de Cards de Projeto */}
      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -10 }}
            onClick={() => setActiveProject(project)}
            className="glass-panel project-card"
          >
            {/* Efeito de brilho acionado por hover no CSS */}
            <div className="card-glow"></div>
            
            <div className="project-category">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.short}</p>
            
            <div className="tech-tags">
              {project.tech.slice(0,3).map(t => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-link">
              Ver detalhes <ChevronRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botão Ver Mais (Só aparece se houver mais de 3 projetos) */}
      {projects.length > 3 && (
        <div className="view-more-container">
          <button 
            className="btn-secondary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Ver Menos' : 'Ver Todos os Projetos'}
          </button>
        </div>
      )}

      {/* Modal de Case de Sucesso (Abre ao clicar no projeto) */}
      {activeProject && (
        <div className="modal-backdrop">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="modal-content"
          >
            <button 
              onClick={() => setActiveProject(null)}
              className="modal-close"
            >
              <X size={20} />
            </button>

            <div className="project-category">{activeProject.category}</div>
            <h2 className="modal-title">{activeProject.title}</h2>
            
            <div className="tech-tags mb-large">
              {activeProject.tech.map(t => (
                <span key={t} className="tech-tag highlight">
                  {t}
                </span>
              ))}
            </div>
            
            {activeProject.manifesto && (
              <div className="modal-manifesto glass-panel mb-large">
                <p>"{activeProject.manifesto}"</p>
              </div>
            )},

            {/* Estruturação Narrativa do Case */}
            <div className="modal-sections">
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <span className="bullet red"></span> O Problema
                </h4>
                <p className="modal-section-desc">{activeProject.problem}</p>
              </div>
              
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <span className="bullet blue"></span> A Solução
                </h4>
                <p className="modal-section-desc">{activeProject.solution}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">
                  <span className="bullet green"></span> Resultado
                </h4>
                <div className="result-box">
                  <p>{activeProject.results}</p>
                </div>
              </div>

              {activeProject.pillars && (
                <div className="modal-section">
                  <h4 className="modal-section-title">
                    <span className="bullet blue"></span> Pilares Tecnológicos
                  </h4>
                  <div className="pillars-grid">
                    {activeProject.pillars.map((pillar, idx) => (
                      <div key={idx} className="pillar-item">
                        <div className="pillar-title">{pillar.title}</div>
                        <div className="pillar-desc">{pillar.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {activeProject.roadmap && (
              <div className="modal-section mb-large">
                <h4 className="modal-section-title">
                  <span className="bullet purple"></span> Roadmap de Laboratório (P&D)
                </h4>
                <div className="roadmap-tags">
                  {activeProject.roadmap.map(item => (
                    <span key={item} className="tech-tag roadmap">
                      🧪 {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Galeria de Imagens do Projeto */}
            {activeProject.images && activeProject.images.length > 0 && (
              <div className="modal-gallery">
                <h4 className="modal-section-title mb-medium">
                  <span className="bullet purple"></span> Showcase do Produto
                </h4>
                <div className="gallery-grid">
                  {activeProject.images.map((img, idx) => (
                    <div key={idx} className="gallery-item glass-panel">
                      <img src={img.src} alt={img.alt} className="gallery-img" />
                      <div className="gallery-caption">{img.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-footer">
              <button className="btn-primary" onClick={() => setActiveProject(null)}>
                Fechar Case
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
