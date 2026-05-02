import { trampoFacil } from './projects/trampoFacil';
import { dashboardSaaS } from './ProjetosDestaque/dashboardSaaS';
import { headlessEcommerce } from './ProjetosDestaque/headlessEcommerce';

export const projectsData = [
  trampoFacil,
  dashboardSaaS,
  headlessEcommerce,
  // Novos projetos podem ser importados e adicionados aqui
];

export const processData = [
  { num: '01', title: 'Imersão & Contexto', desc: 'Mergulho profundo no problema do usuário e nos objetivos reais do negócio.' },
  { num: '02', title: 'Arquitetura & UX', desc: 'Definição da stack tecnológica ideal e design de fluxos de navegação sem fricção.' },
  { num: '03', title: 'Design System Premium', desc: 'Criação de interface UI de alta fidelidade com estética tech e foco em microinterações.' },
  { num: '04', title: 'Engenharia Fullstack', desc: 'Código modular, escalável e de alta performance, materializando o design em produto.' },
  { num: '05', title: 'Entrega & Iteração', desc: 'Lançamento com acompanhamento de métricas para evolução contínua baseada em dados.' },
];
