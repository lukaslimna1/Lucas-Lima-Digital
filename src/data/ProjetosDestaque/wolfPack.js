export const wolfPack = {
  id: 2,
  title: 'Wolf Pack — Management System',
  category: 'Fullstack & Architecture',
  filterTags: ['Software'],
  short: 'Sistema de gestão estratégica focado em eficiência operacional.',
  tech: ['React & Node', 'Gestão B2B', 'Escalável', 'PostgreSQL', 'Tailwind'],
  sections: [
    {
      index: '01',
      title: 'O CONTEXTO',
      type: 'text',
      content: 'O Wolf Pack foi concebido como uma solução de gestão estratégica de alto nível, focada em empresas que demandam precisão cirúrgica no acompanhamento de metas e produtividade de equipes.',
      bulletColor: 'blue'
    },
    {
      index: '02',
      title: 'O DESAFIO ESTRATÉGICO',
      type: 'text',
      content: 'A fragmentação de dados e processos manuais impedia o crescimento escalável. O desafio era unificar múltiplos fluxos de trabalho em uma interface intuitiva e performática.',
      bulletColor: 'cyan'
    },
    {
      index: '03',
      title: 'A SOLUÇÃO',
      type: 'pillars',
      items: [
        { title: 'Centralização de Dados', desc: 'Um único ponto de verdade para todas as métricas da operação.' },
        { title: 'Automação de Fluxos', desc: 'Redução drástica em tarefas repetitivas e erros manuais.' },
        { title: 'Visualização Real-time', desc: 'Dashboards dinâmicos para tomada de decisão imediata.' }
      ],
      bulletColor: 'green'
    },
    {
      index: '04',
      title: 'RESULTADOS OBTIDOS',
      type: 'results',
      content: 'Redução no tempo de resposta operacional e aumento na clareza estratégica. A plataforma permitiu uma visão 360º de cada projeto, otimizando a alocação de recursos.',
      bulletColor: 'blue'
    },
    {
      title: 'SHOWCASE VISUAL',
      type: 'images',
      fullWidth: true,
      items: [
        { src: 'wolfpack/dashboard.jpg', alt: 'Dashboard', title: 'Painel de Controle' }
      ],
      bulletColor: 'cyan'
    },
    {
      index: '05',
      title: 'EXPLORAR PROJETO',
      type: 'links',
      footerNote: 'Projeto de arquitetura fullstack com foco em performance B2B.',
      items: [
        { label: 'Visualizar Repositório', url: '#' },
        { label: 'Acessar Plataforma', url: '#' }
      ],
      bulletColor: 'blue'
    }
  ]
};
