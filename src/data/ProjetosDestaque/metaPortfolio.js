export const metaPortfolio = {
  id: 0,
  title: 'LUCAS LIMA DIGITAL — THE ARCHITECTURE',
  category: 'Meta-Portfolio & Digital Architecture',
  filterTags: ['Software', 'Design System', 'IA'],
  short: 'A arquitetura técnica por trás deste ecossistema industrial de alta performance. Uma demonstração prática de engenharia de produto.',
  tech: ['React 19', 'Framer Motion', 'Supabase', 'Vite', 'PWA'],
  
  sections: [
    {
      index: '01',
      title: 'O CONCEITO',
      type: 'text',
      content: 'Este portfólio não é uma vitrine. É um sistema. Foi projetado como um ambiente de demonstração técnica e estratégica, onde cada decisão — de arquitetura, performance e interface — reflete a forma como produtos digitais são construídos na prática. O objetivo não é apenas exibir projetos. É evidenciar capacidade de construção.',
      bulletColor: 'blue'
    },
    {
      index: '02',
      title: 'THE STACK (FUNCIONAL)',
      type: 'pillars',
      items: [
        { title: 'Rendering Layer', desc: 'React 19 como base para renderização otimizada e controle de estado moderno.' },
        { title: 'Interaction Engine', desc: 'Framer Motion como motor de microinterações e fluidez de navegação.' },
        { title: 'Data Infrastructure', desc: 'Supabase estruturando persistência e comunicação com backend.' },
        { title: 'Build System', desc: 'Vite como pipeline de bundling focado em performance e carregamento imediato.' }
      ],
      bulletColor: 'cyan'
    },
    {
      index: '03',
      title: 'DESIGN SYSTEM & UX',
      type: 'grid',
      items: [
        { title: 'Visual Depth System', desc: 'Glassmorphism aplicado para criar hierarquia e leitura em camadas.' },
        { title: 'Responsive Intelligence', desc: 'Tipografia fluida adaptando densidade de informação por contexto de tela.' },
        { title: 'Touch Interaction Model', desc: 'Navegação pensada para comportamento nativo mobile, não apenas adaptação.' },
        { title: 'System Stability Layer', desc: 'Error boundaries e preloaders garantindo consistência de experiência.' }
      ],
      bulletColor: 'green'
    },
    {
      index: '04',
      title: 'SHOWCASE TÉCNICO',
      type: 'images',
      fullWidth: true,
      items: [
        { 
          src: '/assets/meta-architecture.png', 
          alt: 'System Overview', 
          title: 'SYSTEM OVERVIEW', 
          desc: 'Mapa estrutural da aplicação evidenciando fluxo de dados, renderização e interação entre camadas.' 
        }
      ],
      bulletColor: 'cyan'
    },
    {
      index: '05',
      title: 'MÉTRICAS (INTENÇÃO)',
      type: 'grid',
      items: [
        { title: 'Response Time', desc: '< 100ms — priorização de carregamento imediato via bundling otimizado.' },
        { title: 'Visual Fidelity', desc: '100% — consistência entre design e renderização final.' },
        { title: 'Interaction Layer', desc: 'Real-time — resposta instantânea a ações do usuário.' },
        { title: 'System Resilience', desc: 'Gerenciamento de falhas sem impacto na experiência.' }
      ],
      bulletColor: 'green'
    },
    {
      index: '06',
      title: 'EVOLUÇÃO DO SISTEMA',
      type: 'roadmap',
      items: [
        'Migração estratégica para Next.js 15 (Exploração de Server Components)',
        'Dashboard de telemetria em tempo real integrado',
        'Refinamento de contraste absoluto para telas OLED (Mode: Dark Matter)',
        'Documentação OpenAPI para módulos experimentais'
      ],
      bulletColor: 'blue'
    },
    {
      index: '07',
      title: 'EXPLORAR ENGENHARIA',
      type: 'links',
      footerNote: '*Este site é open-source e serve como referência técnica de implementação premium.*',
      items: [
        { label: 'Repositório do Site', url: 'https://github.com/lukaslimna1/Lucas-Lima-Digital' },
        { label: 'Documentação Técnica', url: 'https://github.com/lukaslimna1/Lucas-Lima-Digital#readme' }
      ],
      bulletColor: 'blue'
    }
  ]
};
