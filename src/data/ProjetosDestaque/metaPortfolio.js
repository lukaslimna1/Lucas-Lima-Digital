export const metaPortfolio = {
  id: 0,
  title: 'Lucas Lima Digital — The Architecture',
  category: 'Meta-Portfolio & Digital Architecture',
  filterTags: ['Software', 'Design System', 'IA'],
  short: 'A arquitetura técnica por trás deste ecossistema industrial de alta performance. Uma demonstração prática de engenharia de produto.',
  tech: ['React 19', 'Framer Motion', 'Supabase', 'Vite', 'PWA'],
  
  sections: [
    {
      index: '01',
      title: 'O CONCEITO',
      type: 'text',
      content: 'Este portfólio não é apenas uma vitrine, é um produto digital. Ele foi concebido para demonstrar autoridade técnica em engenharia de sistemas, priorizando performance extrema, design industrial e uma experiência de usuário imersiva que remete a um Command Center.',
      bulletColor: 'blue'
    },
    {
      index: '02',
      title: 'A PILHA TECNOLÓGICA (THE STACK)',
      type: 'architecture',
      items: [
        { title: 'Core Engine', desc: 'Desenvolvido com React 19 para aproveitar as últimas otimizações de renderização e hooks nativos.' },
        { title: 'Visual Motion', desc: 'Framer Motion orquestrando micro-interações e transições de rota fluidas.' },
        { title: 'Data Layer', desc: 'Supabase atuando como BaaS para persistência de dados e ativos de mídia.' },
        { title: 'Performance Bundler', desc: 'Vite configurado com code-splitting agressivo para carregamento quase instantâneo.' }
      ],
      bulletColor: 'cyan'
    },
    {
      index: '03',
      title: 'DESIGN SYSTEM & UX',
      type: 'pillars',
      items: [
        { title: 'Glassmorphism 2.0', desc: 'Uso extensivo de backdrops blur e transparências para profundidade visual.' },
        { title: 'Fluid Typography', desc: 'Escalabilidade harmônica entre dispositivos móveis e desktops de alta resolução.' },
        { title: 'Mobile First Swipe', desc: 'Navegação por gestos integrada para uma experiência nativa em dispositivos touch.' },
        { title: 'System Resilience', desc: 'Implementação de Error Boundaries e Preloaders inteligentes para evitar saltos de layout.' }
      ],
      bulletColor: 'green'
    },
    {
      index: '04',
      title: 'SHOWCASE TÉCNICO',
      type: 'images',
      fullWidth: true,
      items: [
        { src: '/assets/meta-architecture.png', alt: 'Architecture Diagram', title: 'Fluxo de Dados & Componentes', desc: 'Visualização macro da integração entre as camadas de sistema.' }
      ],
      bulletColor: 'cyan'
    },
    {
      index: '05',
      title: 'MÉTRICAS DE SISTEMA (LIVE_METRICS)',
      type: 'grid',
      items: [
        { title: 'Tempo de Resposta', desc: '< 100ms (Otimizado por Vite)' },
        { title: 'Fidelidade Visual', desc: '100% (Padrão Industrial)' },
        { title: 'Interatividade', desc: 'Real-time (Framer Motion Engine)' },
        { title: 'Resiliência', desc: 'Monitoramento por Error Boundaries' }
      ],
      bulletColor: 'green'
    },
    {
      index: '06',
      title: 'ROADMAP DE EVOLUÇÃO',
      type: 'roadmap',
      items: [
        'Migração total para Next.js 15 (Exploração de Server Components)',
        'Integração de dashboards de métricas em tempo real (Vercel Analytics)',
        'Modo "Dark Matter" (Refinamento de contraste em telas OLED)',
        'Documentação OpenAPI para módulos experimentais do Lab'
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
