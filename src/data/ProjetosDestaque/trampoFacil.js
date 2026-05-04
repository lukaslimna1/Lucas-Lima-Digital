export const trampoFacil = {
  id: 1,
  title: 'Trampo Fácil — Plataforma de Recrutamento Inteligente',
  category: 'Produto Digital & Plataforma de Recrutamento',
  short: 'Projeto próprio focado em reduzir fricção no processo de contratação, com uso de automação e IA para melhorar a experiência de candidatos e empresas.',
  tech: ['React 19', 'Recrutamento', 'IA Assistiva', 'Supabase', 'Stripe'],
  
  manifesto: 'O objetivo do Trampo Fácil é ir além de listas de vagas. A proposta é criar um sistema mais simples, direto e inteligente, onde a tecnologia ajuda na tomada de decisão — em vez de dificultar o processo.',
  
  problem: 'Projeto próprio em desenvolvimento, com MVP praticamente concluído. Focado em simplificar o processo de contratação, reduzir fricção e criar uma experiência mais clara e eficiente para candidatos e empresas.',
  
  solution: 'O projeto utiliza inteligência artificial como suporte à experiência: Análise de perfil e conteúdo, sugestões de melhoria em tempo real e apoio consultivo na tomada de decisão.',
  
  pillars: [
    { title: 'Decisão Apoiada', desc: 'Sistema de avaliação de perfil e vaga para suporte real na escolha de candidatos e oportunidades.' },
    { title: 'Performance & Visibilidade', desc: 'Sugestões automatizadas para melhorar o desempenho do perfil e aumentar a visibilidade no ecossistema.' },
    { title: 'UX de Baixo Atrito', desc: 'Interface pensada para reduzir etapas desnecessárias e focar no que realmente importa: a conexão.' },
    { title: 'AI-Native Structure', desc: 'Estrutura preparada desde o dia zero para o uso de IA generativa no apoio constante ao usuário.' }
  ],

  architecture: [
    { title: 'Frontend Stack', desc: 'Interface moderna e ultra-rápida construída com React 19 e Vite.' },
    { title: 'BaaS & Realtime', desc: 'Backend as a Service e persistência de dados utilizando Supabase.' },
    { title: 'AI Integration', desc: 'Camada de inteligência conectada ao Google Gemini 1.5 Flash.' },
    { title: 'Fintech Ready', desc: 'Estrutura preparada para monetização e pagamentos via Stripe.' }
  ],

  results: 'MVP entre 90% e 99% concluído. Projeto totalmente funcional em ambiente local, em fase de preparação para publicação e validação real (sujeito a custos de infraestrutura).',
  
  roadmap: ['Publicação do MVP', 'Testes com usuários reais', 'Evolução da experiência', 'Expansão de funcionalidades baseadas em uso'],
  
  footerNote: '*Projeto desenvolvido de forma independente, desde conceito até implementação.*',
  
  thumbnail: 'logo.png',
  repo: 'https://github.com/lukaslimna1/TrampoFacil',
  demo: '#', // Em breve
  
  images: [
    { 
      src: 'logo.png', 
      alt: 'Identidade e Branding do Trampo Fácil', 
      title: 'Identidade & Conceito', 
      desc: 'Branding minimalista focado em clareza e eficiência, refletindo a essência de um recrutamento sem ruído.' 
    },
    { 
      src: 'trampoAI.jpg', 
      alt: 'Interface do Motor Trampo IA', 
      title: 'Inteligência Assistiva', 
      desc: 'O sistema identifica pontos de melhoria no perfil e sugere otimizações em tempo real para aumentar as chances do candidato.' 
    },
    { 
      src: 'SortiesEBarradePesquisa.png', 
      alt: 'Home com Busca Inteligente e Stories', 
      title: 'Hub de Descoberta', 
      desc: 'Fluxo de navegação simplificado com busca inteligente e stories de vagas, reduzindo drasticamente a fricção no processo.' 
    },
    { 
      src: 'carddeVagas.png', 
      alt: 'Design de Cards de Vagas Premium', 
      title: 'Arquitetura de Cards', 
      desc: 'Cards de vagas projetados com hierarquia visual clara, facilitando a leitura rápida dos requisitos essenciais.' 
    },
    { 
      src: 'SmartDetailsdasVagas.png', 
      alt: 'Visualização Lateral InfoJob', 
      title: 'InfoJob & Fluxo Contínuo', 
      desc: 'Experiência sem interrupções: detalhes da vaga abrem lateralmente mantendo a lista visível. Organização clara entre Informações, Benefícios e Sobre a Empresa.' 
    }
  ]
};
