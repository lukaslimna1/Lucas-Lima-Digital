/**
 * @typedef {Object} RoadmapItem
 * @property {string} week - A semana ou etapa do desenvolvimento (ex: 'Semana 1').
 * @property {string} task - A descrição da tarefa realizada.
 */

/**
 * @typedef {Object} Projeto
 * @property {string} id - Identificador único do projeto.
 * @property {string} title - Título exibido do projeto.
 * @property {string} description - Descrição detalhada do projeto.
 * @property {string} category - Categoria (ex: 'Fullstack', 'IA').
 * @property {string[]} tech - Array de strings com as tecnologias utilizadas.
 * @property {string} thumbnail - Caminho da imagem de capa (local ou Supabase).
 * @property {string[]} gallery - Array de caminhos para as imagens da galeria.
 * @property {string} repo - Link para o repositório no GitHub.
 * @property {string} demo - Link para a versão ao vivo.
 * @property {RoadmapItem[]} roadmap - Histórico de desenvolvimento.
 */

/** @type {Projeto} */
export const trampoFacil = {
  id: 1,
  title: 'Trampo Fácil — Descoberta Inteligente',
  category: 'Fullstack & AI Engineering',
  short: 'Revolução do recrutamento com arquitetura ZAX, motor Gemini 1.5 e integração Stripe.',
  tech: ['React 19', 'Supabase Realtime', 'Gemini 1.5 Flash', 'Stripe SDK'],
  manifesto: 'O Trampo Fácil não é apenas uma lista de vagas. É um ecossistema inteligente que analisa, conecta e humaniza cada interação entre talentos e empresas.',
  problem: 'Plataformas tradicionais sofrem com alto atrito (cadastros longos), falta de feedback inteligente e UX fria. O resultado é tempo perdido e decisões de contratação ruins.',
  solution: 'Criação de uma plataforma baseada na arquitetura Zero-Account Experience (ZAX) e no motor Trampo IA. Implementação de Score de Performance em tempo real e Interface Humana Dinâmica.',
  pillars: [
    { title: 'ZAX Architecture', desc: 'Redução de 95% no atrito operacional através de acesso sem contas e Link-Tokens de segurança.' },
    { title: 'Session Intelligence', desc: 'IA contextual que aprende com a sessão do usuário para oferecer soluções proativas via Gemini.' },
    { title: 'Social Tech Design', desc: 'UI inspirada em redes de alta performance com Glassmorphism e micro-interações de elite.' }
  ],
  results: 'Consolidação de um ecossistema B2B/B2C escalável com Boost de Visibilidade via Stripe e análise preditiva de benchmark salarial.',
  thumbnail: 'logo.png',
  images: [
    { src: 'logo.png', alt: 'Logo e Identidade Visual do Projeto', title: 'Brand Identity' },
    { src: 'trampoAI.jpg', alt: 'Motor Trampo IA e Command Hub', title: 'Trampo IA Core' },
    { src: 'SortiesEBarradePesquisa.png', alt: 'Home com Stories de Vagas e Busca Inteligente', title: 'Home & Engagement' },
    { src: 'carddeVagas.png', alt: 'Visualização de Cards de Vagas Premium', title: 'Job Cards UI' },
    { src: 'SmartDetailsdasVagas.png', alt: 'Detalhes Inteligentes da Vaga', title: 'Smart Details' }
  ],
  roadmap: ['Match Preditivo', 'Auto-Otimização de Descrições', 'Expansão Global']
};
