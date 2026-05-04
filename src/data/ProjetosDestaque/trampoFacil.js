export const trampoFacil = {
  id: 1,
  title: 'Trampo Fácil — Plataforma de Recrutamento Inteligente',
  category: 'Produto Digital & Plataforma de Recrutamento',
  filterTags: ['Software', 'IA'],
  short: 'Projeto próprio focado em reduzir fricção no processo de contratação, com uso de automação e IA para melhorar a experiência de candidatos e empresas.',
  tech: ['React 19', 'Recrutamento', 'IA Assistiva', 'Supabase', 'Stripe'],
  
  sections: [
    {
      index: '01',
      title: 'O CONCEITO',
      type: 'text',
      content: 'O objetivo do Trampo Fácil é ir além de listas de vagas. A proposta é criar um sistema mais simples, direto e inteligente, onde a tecnologia ajuda na tomada de decisão — em vez de dificultar o processo.',
      bulletColor: 'blue'
    },
    {
      index: '02',
      title: 'O PROBLEMA',
      type: 'text',
      content: 'Focado em simplificar o processo de contratação, reduzir fricção e criar uma experiência mais clara e eficiente para candidatos e empresas. O desafio era criar um MVP funcional que provasse que o recrutamento pode ser fluido.',
      bulletColor: 'cyan'
    },
    {
      index: '03',
      title: 'A SOLUÇÃO',
      type: 'text',
      content: 'O projeto utiliza inteligência artificial como suporte à experiência: análise de perfil e conteúdo, sugestões de melhoria em tempo real e apoio consultivo na tomada de decisão.',
      bulletColor: 'green'
    },
    {
      index: '04',
      title: 'PILARES ESTRATÉGICOS',
      type: 'pillars',
      items: [
        { title: 'Decisão Apoiada', desc: 'Sistema de avaliação de perfil e vaga para suporte real na escolha.' },
        { title: 'Performance', desc: 'Sugestões automatizadas para melhorar o desempenho do perfil.' },
        { title: 'UX de Baixo Atrito', desc: 'Interface pensada para reduzir etapas desnecessárias.' },
        { title: 'AI-Native', desc: 'Estrutura preparada desde o dia zero para o uso de IA generativa.' }
      ],
      bulletColor: 'cyan'
    },
    {
      index: '05',
      title: 'ARQUITETURA TÉCNICA',
      type: 'architecture',
      items: [
        { title: 'Frontend Stack', desc: 'Interface ultra-rápida construída com React 19 e Vite.' },
        { title: 'BaaS & Realtime', desc: 'Persistência de dados e autenticação utilizando Supabase.' },
        { title: 'AI Integration', desc: 'Camada de inteligência conectada ao Google Gemini 1.5 Flash.' },
        { title: 'Fintech Ready', desc: 'Estrutura preparada para pagamentos via Stripe.' }
      ],
      bulletColor: 'blue'
    },
    {
      index: '06',
      title: 'RESULTADOS',
      type: 'results',
      content: 'MVP entre 90% e 99% concluído. Projeto totalmente funcional em ambiente local, em fase de preparação para publicação e validação real (sujeito a custos de infraestrutura).',
      bulletColor: 'green'
    },
    {
      title: 'GALERIA DO PROJETO',
      type: 'images',
      fullWidth: true,
      items: [
        { src: 'logo.png', alt: 'Branding', title: 'Identidade & Conceito' },
        { src: 'trampoAI.jpg', alt: 'AI Interface', title: 'Inteligência Assistiva' },
        { src: 'SortiesEBarradePesquisa.png', alt: 'Search', title: 'Hub de Descoberta' },
        { src: 'carddeVagas.png', alt: 'Cards', title: 'Arquitetura de Cards' },
        { src: 'SmartDetailsdasVagas.png', alt: 'Details', title: 'InfoJob & Fluxo Contínuo' }
      ],
      bulletColor: 'cyan'
    },
    {
      index: '07',
      title: 'ROADMAP DE EVOLUÇÃO',
      type: 'roadmap',
      items: [
        'Publicação do MVP em ambiente de produção',
        'Testes controlados com usuários reais',
        'Evolução da experiência baseada em feedback',
        'Expansão de funcionalidades do motor de IA'
      ],
      bulletColor: 'blue'
    },
    {
      index: '08',
      title: 'EXPLORAR PROJETO',
      type: 'links',
      footerNote: '*Projeto desenvolvido de forma independente, desde conceito até implementação.*',
      items: [
        { label: 'Repositório GitHub', url: 'https://github.com/lukaslimna1/TrampoFacil' },
        { label: 'Visualizar Demo', url: '#' }
      ],
      bulletColor: 'blue'
    }
  ]
};
