export const conectea = {
  id: 4,
  title: 'ConeCTEA — Ecossistema Digital para a Família TEA Bauru',
  category: 'Mobile App, Acessibilidade & Impacto Social',
  filterTags: ['Software', 'Mobile', 'Design System', 'Impacto Social'],
  short: 'Aplicativo mobile-first desenvolvido para apoiar a Família TEA Bauru, reunindo carteirinha digital, painel administrativo, notificações, governança de dados e uma experiência visual pensada para conforto neurodivergente.',
  tech: ['Flutter', 'Supabase', 'OneSignal', 'Dart', 'PostgreSQL', 'RLS', 'Edge Functions', 'GoRouter', 'Google Drive', 'Night Blue'],
  
  sections: [
    {
      index: '01',
      title: 'O CONCEITO',
      type: 'text',
      content: 'O ConeCTEA é um ecossistema mobile-first criado para apoiar a comunidade vinculada à Família TEA Bauru. O projeto nasceu para organizar a identidade digital dos membros, melhorar processos internos e criar uma experiência mais clara para responsáveis, usuários e administradores.',
      bulletColor: 'blue'
    },
    {
      index: '02',
      title: 'O DESAFIO',
      type: 'text',
      content: 'A associação precisava transformar processos fragmentados em uma jornada digital mais organizada, segura e acessível. O desafio era lidar com solicitações, carteirinhas, status, dados sensíveis e comunicação sem perder clareza, privacidade e confiança.',
      bulletColor: 'cyan'
    },
    {
      index: '03',
      title: 'A SOLUÇÃO',
      type: 'text',
      content: 'Foi desenvolvido um aplicativo em Flutter com autenticação, cadastro de membros, solicitação de carteirinha, acompanhamento de status, notificações, painel administrativo, scanner de validação por QR Code e uma Central do Usuário com perfil, segurança, privacidade, ajuda e informações institucionais.',
      bulletColor: 'green'
    },
    {
      index: '04',
      title: 'PILARES DO PRODUTO',
      type: 'pillars',
      items: [
        { title: 'Carteirinha Digital Premium', desc: 'Identidade digital com frente, verso, efeito flip, motion, QR Code e validação administrativa.' },
        { title: 'Central do Usuário', desc: 'Área organizada em cards para Meus Dados, Segurança, Privacidade, Ajuda, Institucional e Aplicativo.' },
        { title: 'Governança de Dados', desc: 'Uso de Supabase, RLS, mensagens seguras e transparência sobre dados sensíveis e consentimentos.' },
        { title: 'Experiência Neurodivergente', desc: 'Design Night Blue Premium com contraste controlado, glassmorphism e foco em conforto visual.' }
      ],
      bulletColor: 'cyan'
    },
    {
      index: '05',
      title: 'ARQUITETURA TÉCNICA',
      type: 'architecture',
      items: [
        { title: 'Mobile Core', desc: 'Aplicativo construído com Flutter e Dart, com prioridade total para Android.' },
        { title: 'Backend & Dados', desc: 'Supabase com PostgreSQL, Auth, Realtime e Row Level Security.' },
        { title: 'Notificações', desc: 'OneSignal para notificações push e comunicação operacional.' },
        { title: 'Fluxos Sensíveis', desc: 'Supabase Edge Functions com Deno para processos seguros, como recuperação de e-mail por CPF.' },
        { title: 'Integrações Operacionais', desc: 'Google Drive e Google Apps Script para apoio documental e organização de arquivos.' }
      ],
      bulletColor: 'blue'
    },
    {
      index: '06',
      title: 'MÓDULOS IMPLEMENTADOS',
      type: 'grid',
      items: [
        { title: 'Auth', desc: 'Login, registro, recuperação de senha e recuperação segura de e-mail.' },
        { title: 'Admin', desc: 'Painel administrativo com gestão de solicitações, usuários e scanner de QR Code.' },
        { title: 'Requests', desc: 'Cadastro de dependentes com validação de CPF e acompanhamento de status.' },
        { title: 'Cards', desc: 'Carteirinha digital modular, com frente, verso, motion, QR Code e estados controlados.' },
        { title: 'Account', desc: 'Central do Usuário com perfil, segurança, privacidade, ajuda e informações institucionais.' },
        { title: 'Notifications', desc: 'Notificações internas e estrutura para comunicação por status.' }
      ],
      bulletColor: 'green'
    },
    {
      index: '07',
      title: 'SEGURANÇA E PRIVACIDADE',
      type: 'text',
      content: 'O projeto passou por um ciclo forte de blindagem de segurança. Mensagens técnicas foram substituídas por feedbacks amigáveis, logs sensíveis foram higienizados e os dados são protegidos com políticas de Row Level Security. CPF e e-mail permanecem bloqueados para edição direta e exigem suporte administrativo.',
      bulletColor: 'blue'
    },
    {
      index: '08',
      title: 'RESULTADO ATUAL',
      type: 'results',
      content: 'O ConeCTEA já possui uma base functional robusta, com autenticação, carteirinha digital, painel administrativo, scanner, notificações, Central do Usuário, fluxo de solicitações e documentação técnica atualizada. O projeto está em fase de refinamento visual, padronização de design system e QA em Android.',
      bulletColor: 'green'
    },
    {
      index: '09',
      title: 'ROADMAP DE EVOLUÇÃO',
      type: 'roadmap',
      items: [
        'Padronização global do Design System.',
        'Refino visual da Home, Header e Navbar.',
        'Melhorias em Solicitações e Notificações.',
        'QA em dispositivos Android reais e emuladores.',
        'Persistência real de consentimentos LGPD.',
        'Suporte interno integrado ao painel Admin.',
        'Módulos futuros de eventos, projetos, parceiros e consultas.',
        'Relatórios estatísticos agregados para apoio à associação.',
        'Integração futura com o projeto Fada do Dente.'
      ],
      bulletColor: 'blue'
    },
    {
      index: '10',
      title: 'OBSERVAÇÃO LEGAL',
      type: 'text',
      content: 'A carteirinha emitida pelo ConeCTEA é um documento interno da Família TEA Bauru, voltado aos projetos, programas e parcerias da associação. Ela não substitui a CIPTEA oficial governamental.',
      bulletColor: 'cyan'
    },
    {
      index: '11',
      title: 'EXPLORAR PROJETO',
      type: 'links',
      footerNote: 'Projeto social em desenvolvimento, criado para apoiar a operação digital da Família TEA Bauru.',
      items: [
        { label: 'GitHub do Projeto', url: 'https://github.com/lukaslimna1/coneCTEA' },
        { label: 'README do Projeto', url: 'https://github.com/lukaslimna1/coneCTEA/blob/main/README.md' },
        { label: 'Documentação Técnica', url: 'https://github.com/lukaslimna1/coneCTEA/blob/main/DOCTecnico.md' }
      ],
      bulletColor: 'blue'
    }
  ]
};
