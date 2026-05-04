import React from 'react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Server, 
  Layers, 
  Search,
  PenTool,
  Frame,
  Database,
  Cloud,
  Terminal,
  Activity,
  Wind,
  Briefcase
} from 'lucide-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faPython, 
  faNodeJs, 
  faDocker, 
  faAws, 
  faGithub, 
  faFigma,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';

import { 
  faCube, 
  faMicrochip, 
  faRocket,
  faBrain
} from '@fortawesome/free-solid-svg-icons';

/**
 * Biblioteca de Ícones Dinâmica (PillIcons)
 * Estrutura de fallback em cascata para garantir que uma Pill sempre tenha um ícone.
 */
export const iconMap = {
  // --- DESIGN & FRONTEND ---
  'React': [
    { type: 'fa', icon: faReact, color: '#61DAFB' },
    { type: 'lucide', icon: Code2 }
  ],
  'React 19': [
    { type: 'fa', icon: faReact, color: '#61DAFB' },
    { type: 'lucide', icon: Zap }
  ],
  'Figma': [
    { type: 'fa', icon: faFigma, color: '#F24E1E' },
    { type: 'lucide', icon: PenTool }
  ],
  'Illustrator': [
    { type: 'fa', icon: faFigma, color: '#FF9A00' }, // Usando Figma como fallback visual de design
    { type: 'lucide', icon: PenTool }
  ],
  'Photoshop': [
    { type: 'fa', icon: faFigma, color: '#31A8FF' },
    { type: 'lucide', icon: Layers }
  ],
  'UI/UX Design': [
    { type: 'lucide', icon: Layout, color: '#F472B6' },
    { type: 'fa', icon: faCube }
  ],
  'UI/UX': [
    { type: 'lucide', icon: Layout },
    { type: 'fa', icon: faCube }
  ],
  'Design': [
    { type: 'lucide', icon: PenTool },
    { type: 'fa', icon: faFigma }
  ],
  'React & Node': [
    { type: 'fa', icon: faReact, color: '#61DAFB' },
    { type: 'fa', icon: faNodeJs }
  ],

  // --- BACKEND & INFRA ---
  'Node.js': [
    { type: 'fa', icon: faNodeJs, color: '#339933' },
    { type: 'lucide', icon: Server }
  ],
  'Supabase': [
    { type: 'lucide', icon: Database, color: '#3ECF8E' },
    { type: 'fa', icon: faCube }
  ],
  'Supabase Realtime': [
    { type: 'lucide', icon: Activity, color: '#3ECF8E' },
    { type: 'lucide', icon: Database }
  ],
  'Python': [
    { type: 'fa', icon: faPython, color: '#3776AB' },
    { type: 'lucide', icon: Terminal }
  ],
  'AWS': [
    { type: 'fa', icon: faAws, color: '#FF9900' },
    { type: 'lucide', icon: Cloud }
  ],
  'Docker': [
    { type: 'fa', icon: faDocker, color: '#2496ED' },
    { type: 'lucide', icon: Layers }
  ],

  // --- AI & INNOVATION ---
  'AI Engineering': [
    { type: 'fa', icon: faBrain, color: '#FF5733' },
    { type: 'lucide', icon: Cpu }
  ],
  'Gemini 1.5 Flash': [
    { type: 'fa', icon: faGoogle, color: '#4285F4' },
    { type: 'fa', icon: faBrain }
  ],
  'Machine Learning': [
    { type: 'fa', icon: faMicrochip },
    { type: 'lucide', icon: Cpu }
  ],
  'ZAX Architecture': [
    { type: 'lucide', icon: ShieldCheck, color: '#FFD700' },
    { type: 'fa', icon: faCube }
  ],

  // --- BUSINESS & OTHER ---
  'Stripe': [
    { type: 'lucide', icon: Zap, color: '#635BFF' },
    { type: 'lucide', icon: Globe }
  ],
  'Plataforma AI': [
    { type: 'fa', icon: faBrain, color: '#FFD700' },
    { type: 'lucide', icon: Cpu }
  ],
  'IA Assistiva': [
    { type: 'fa', icon: faBrain, color: '#FCD34D' },
    { type: 'lucide', icon: Cpu }
  ],
  'MVP Concluído': [
    { type: 'lucide', icon: ShieldCheck, color: '#34D399' },
    { type: 'fa', icon: faRocket }
  ],
  'Gestão B2B': [
    { type: 'lucide', icon: Briefcase, color: '#60A5FA' },
    { type: 'lucide', icon: Globe }
  ],
  'Escalável': [
    { type: 'fa', icon: faRocket, color: '#F87171' },
    { type: 'lucide', icon: Wind }
  ],
  'Branding': [
    { type: 'lucide', icon: PenTool, color: '#F472B6' },
    { type: 'fa', icon: faFigma }
  ],
  'Recrutamento': [
    { type: 'lucide', icon: Search, color: '#818CF8' },
    { type: 'lucide', icon: Briefcase }
  ],
  'B2B/B2C': [
    { type: 'lucide', icon: Layers },
    { type: 'lucide', icon: Globe }
  ],
  'Escalabilidade': [
    { type: 'fa', icon: faRocket },
    { type: 'lucide', icon: Wind }
  ],
  'Engenharia': [
    { type: 'lucide', icon: Terminal },
    { type: 'fa', icon: faMicrochip }
  ]
};

// Fallbacks Genéricos por Categoria
export const genericFallbacks = {
  design: { type: 'lucide', icon: PenTool },
  code: { type: 'lucide', icon: Code2 },
  infra: { type: 'lucide', icon: Server },
  ai: { type: 'fa', icon: faBrain }
};

/**
 * Componente PillIcon
 * Tenta renderizar o ícone em cascata baseada no nome da Pill.
 */
export const PillIcon = ({ name, color }) => {
  const providers = iconMap[name] || [genericFallbacks.code];

  // Tenta o primeiro provider, se falhar ou não existir, o React apenas não renderiza
  // Aqui estamos definindo a prioridade na iconMap acima.
  const primary = providers[0];

  if (primary.type === 'fa') {
    return (
      <FontAwesomeIcon 
        icon={primary.icon} 
        style={{ color: color || primary.color || 'inherit', fontSize: '0.9em' }} 
      />
    );
  }

  const LucideIcon = primary.icon;
  return (
    <LucideIcon 
      size={14} 
      strokeWidth={2.5} 
      color={color || primary.color || 'currentColor'} 
    />
  );
};
