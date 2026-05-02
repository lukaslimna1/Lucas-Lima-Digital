# Lucas Lima | Digital Builder 🚀

> **Um portfólio que não é apenas uma vitrine, mas um produto digital por si só.**

Este repositório contém o código-fonte do meu portfólio pessoal. Projetado do zero para transmitir profissionalismo, domínio técnico e uma experiência de usuário (UX) premium. O foco central não é apenas exibir trabalhos passados, mas demonstrar capacidade de arquitetura de software, design system estruturado e atenção extrema aos detalhes.

---

## 🎯 O Conceito

A maioria dos portfólios são páginas estáticas genéricas. O objetivo aqui foi construir um **Dashboard Interativo** que reflete minha forma de pensar e atuar:
- **Como Desenvolvedor**: Código limpo, componentizado, performático e independente de frameworks pesados de CSS (sim, foi feito em **Vanilla CSS**).
- **Como UX/UI Designer**: Foco em *Glassmorphism*, paleta de cores harmoniosa, contraste profundo (Dark Mode nativo) e hierarquia de informação clara.
- **Como Solucionador de Problemas**: Implementação do **Modo Recrutador**, uma feature focada puramente em acessibilidade e leitura rápida de informações para quem não tem tempo a perder.

## 🛠️ Stack Tecnológica

Optou-se por uma stack enxuta e poderosa para garantir alta performance e manutenibilidade:

- **Core**: React 19 + Vite (Rápido, moderno e confiável).
- **Styling**: **Vanilla CSS**. Nenhuma dependência externa de estilos (como Tailwind ou Bootstrap). Toda a fundação de design tokens, animações avançadas e responsividade foi construída na mão para demonstrar controle total sobre o CSS.
- **Animações**: Framer Motion (Transições de página, *scroll reveals* e *micro-interactions*).
- **Ícones**: Lucide React.

## ✨ Features de Destaque

- **Glow & Glassmorphism**: Painéis translúcidos e efeitos luminosos que reagem ao contexto da página, criando uma sensação de profundidade e produto "AAA".
- **Modo Recrutador**: Um toggle no menu que simplifica a interface instantaneamente. Remove gradientes, desativa sombras complexas e foca 100% no conteúdo textual para uma leitura direta.
- **Painel de Projetos Detalhado**: Em vez de links externos simples, os projetos abrem em modais imersivos que detalham o "Problema", a "Solução" e o "Resultado".
- **Design Responsivo Fluido**: Adaptação perfeita desde monitores ultrawide até telas de dispositivos móveis.

## 🚀 Como Rodar Localmente

Certifique-se de ter o Node.js (versão 20+) instalado na sua máquina.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/lucas-lima-digital.git

# 2. Acesse o diretório do projeto
cd lucas-lima-digital

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

---

## 📈 Histórico de Versões (Changelog)

Este portfólio é um organismo vivo e continuará sendo aprimorado. 

### v1.0.0 - *The Foundation*
- Setup inicial da arquitetura React + Vite.
- Implementação do Design System proprietário em CSS Puro (Variáveis, Glow Effects, Glassmorphism).
- Estrutura completa das seções e lançamento do **Modo Recrutador**.
- Sistema de modais para exibição de *Cases de Sucesso*.

### v1.1.0 - *Premium Copy & Modular Architecture*
- **Modularização de Código**: Separação do `App.jsx` monolítico em componentes modulares dentro da pasta `/src/components`.
- **Visual "Tech Premium"**: Refinamento do *Hero Section*, encapsulando o subtítulo em um bloco estilo Terminal de sistema.
- **Copywriting**: Atualização massiva de textos com foco em diferenciação, performance e conversão de negócios.
- **Nova Seção**: Criação do componente `Diferencial` ("O que me diferencia").

### v1.2.0 - *Ultimate Premium Aesthetic & Full Modularity*
- **Desacoplamento de Dados**: Criação do arquivo `src/data.js` para gerenciar conteúdo dinâmico (projetos, metodologia), separando completamente a lógica de UI dos dados textuais.
- **Micro-Interações**: Implementação de animação flutuante sutil no Terminal do Hero utilizando `framer-motion`.
- **Refinamento Estético Premium**: Melhorias no `.glass-panel` com sombras internas (inset shadows).
- **Tipografia e Background**: Adição da propriedade `text-rendering: optimizeLegibility` e background orgânico (noise filter) direto no CSS.

### v2.0.0 - *The "SaaS Product" Redesign & Real Cases*
- **Transformação Visual**: Migração do conceito de "Landing Page" para "Produto SaaS Interativo". Substituição de seções estáticas por blocos de alta performance visual.
- **Cases Reais (Trampo Fácil & IA)**: Inclusão do ecossistema "Trampo Fácil", detalhando a aplicação do motor de IA e o modelo de segurança "Accountless".
- **Processo Interativo**: Conversão da timeline clássica em um *Stepper Horizontal* animado com `framer-motion`.
- **Contato Dinâmico**: Remodelagem completa da seção de contato para atuar como um painel de disponibilidade em tempo real.

### v2.1.0 - *Visual Showcase & Deep IA Integration*
- **Vitrine Visual Imersiva**: Implementação de uma galeria de alta fidelidade dentro dos modais de projeto.
- **Consolidação de Assets**: Organização estruturada de mídias para os cases de sucesso.
- **Storytelling Visual**: Cada case agora conta com suporte a imagens reais que validam a complexidade técnica das soluções.

### v2.2.0 - *Cloud Infrastructure & Large Screen Optimization*
- **Cloud Media Infrastructure**: Migração estratégica de ativos pesados para o **Supabase Storage**.
- **Otimização para Grandes Formatos (TV 37")**: Refatoração da hierarquia tipográfica para legibilidade cristalina em telas de alta polegada.
- **Arquitetura de Informação Industrial**: Introdução de tópicos numerados `[XX]` e tags de roadmap com estilo de documentação técnica.

### v2.3.0 - *Standardization & GitHub Integration*
- **Repository Professionalization**: Implementação do `CONTRIBUTING.md` estabelecendo diretrizes claras de engenharia.
- **Code Standards**: Padronização de documentação interna via comentários técnicos para manutenibilidade.
- **Clean Architecture**: Remoção de dependências de terceiros não essenciais e otimização do fluxo de trabalho.

### v2.4.0 (Atual) - *Artistic Hi-Tech Framework Standardization*
- **Visual Unification**: Padronização absoluta entre as seções de "Criação" e "Framework", utilizando o mesmo sistema de cards industriais e badges técnicos (MOD_0X).
- **Artistic Fusion Texture System**: Implementação de uma camada tripla de profundidade (Topografia, Digital Mist e Scanlines) para uma estética tátil e não-simétrica.
- **Living Gradient & Asymmetric Aura**: Refatoração do sistema de bordas e iluminação periférica para criar um efeito de "energia pulsante" orgânica.
- **Semantic Evolution**: Transição semântica da seção `#process` para `#framework`, alinhando a navegação com a nova proposta industrial e de engenharia.

---

*Desenvolvido com excelência técnica por Lucas Lima.*
