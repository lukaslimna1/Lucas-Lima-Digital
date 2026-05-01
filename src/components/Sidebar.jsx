import { Hexagon, Briefcase, Lightbulb, Layout, Code, Mail, X, Terminal } from 'lucide-react';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, recruiterMode, setRecruiterMode }) => {
  const menuItems = [
    { name: 'Início', icon: <Hexagon size={18} />, href: '#home' },
    { name: 'Projetos', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'Como penso', icon: <Lightbulb size={18} />, href: '#process' },
    { name: 'Soluções', icon: <Layout size={18} />, href: '#solutions' },
    { name: 'Lab', icon: <Code size={18} />, href: '#lab' },
    { name: 'Contato', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <>
      {/* Sidebar Principal - Contém logotipo e navegação principal */}
      <div className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div>
            <h1 className="logo-name">Lucas Lima</h1>
            <p className="logo-subtitle">
              <span className="dot-pulse"></span>
              Construtor Digital
            </p>
          </div>
          <button 
            className="mobile-close"
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Links de navegação para as seções da página */}
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="nav-item"
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Rodapé com controle do Modo Recrutador */}
        <div className="sidebar-footer">
          <button 
            onClick={() => setRecruiterMode(!recruiterMode)}
            className={`recruiter-btn ${recruiterMode ? 'active' : ''}`}
          >
            <Terminal size={16} />
            <span>Modo Recrutador</span>
          </button>
          <p className="recruiter-desc">
            {recruiterMode ? 'Visual simplificado' : 'Experiência imersiva'}
          </p>
        </div>
      </div>
      
      {/* Overlay para escurecer o fundo no mobile quando o menu está aberto */}
      {isMobileOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
