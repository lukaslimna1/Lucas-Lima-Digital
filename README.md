![Lucas Lima Portfolio Banner](public/assets/banner.png)

# 🏛️ LUCAS LIMA | DIGITAL SYSTEMS & PRODUCTS ENGINEER
### `INDUSTRIAL STANDARD V6.0.3` • `HYBRID EXPERIENCE ARCHITECTURE`

> **"Sistemas não começam no código. Começam no entendimento do negócio."**
> A engenharia digital de alta performance é a arte de transformar caos operacional em estrutura, controle e resultado mensurável.

---

## 🛰️ VISÃO GERAL DO ECOSSISTEMA
Este não é apenas um portfólio. É um **Dashboard de Engenharia** projetado para demonstrar a fusão entre arquitetura de software escalável, UX estratégica e uma estética de "Autoridade Industrial". Cada componente foi desenvolvido sob a premissa de que a interface deve respirar precisão e clareza técnica.

| CATEGORIA | TECNOLOGIA | PROPÓSITO INDUSTRIAL |
| :--- | :--- | :--- |
| **ENGINE** | `React 19 + Vite` | Ciclo de renderização otimizado e build-time ultra-reduzido. |
| **STORAGE** | `Supabase Storage` | Gestão centralizada de assets com carregamento dinâmico e seguro. |
| **BRANDING** | `SVG Dynamic Sync` | Logos e monogramas oficiais (v6.0.3) sincronizados via bucket dedicado. |
| **INTELLIGENCE** | `Gemini AI + Custom Hook` | Processamento semântico e suporte à decisão em tempo real. |
| **TYPOGRAPHY** | `Fluid CSS (clamp)` | Escaneabilidade perfeita e ausência de cortes de texto em qualquer device. |
| **HYBRID CAROUSEL** | `Framer Motion + Adaptive Logic` | Navegação contínua/infinita com transição suave entre modos Manual e Auto. |
| **THEME ENGINE** | `Light/Dark 2.0` | Sistema de contraste adaptativo com degradês premium e acessibilidade auditada. |
| **ICONOGRAPHY** | `PillIcon Dynamic System` | Abstração de ícones (Lucide + FontAwesome) com mapeamento semântico por categoria. |

---

## 🏛️ ARQUITETURA DE SISTEMA (S.A.P - SEMANTIC ARCHITECTURE PATTERN)

Abaixo, o fluxo de dados que garante a integridade e a escalabilidade do sistema:

```mermaid
graph TD
    A[CORE APP - React 19] --> B[VISUAL MODULES]
    A --> C[SUPABASE DATA LAYER]
    A --> E[THEME & MODE CONTROLLER]
    
    subgraph B [Visual Command Center]
        B1[HERO - High Impact]
        B2[LAB - Experimental]
        B3[EXPERIENCE - War Dashboard]
        B4[PROJECTS - Hybrid Carousel]
    end
    
    subgraph E [Global State]
        E1[Light/Dark Mode]
        E2[Recruiter Mode - Zero Animation]
    end
    
    B --> D[GLOBAL DESIGN SYSTEM]
    D --> D1[3-Category Pill System]
    D --> D2[Fluid Gradient Typography]
    D --> D3[Scrollable Gallery Captions]
```

---

## 🎨 FILOSOFIA DE DESIGN: "DASHBOARD DE GUERRA 2.0"
O sistema visual evoluiu para suportar múltiplos contextos de leitura sem perder a **Autoridade**.

*   **[ 🔄 ] Hybrid Infinite Carousel**: Rolagem fluida de 15-25s que respeita a interação do usuário, pausando sob demanda e retomando de forma inteligente.
*   **[ 🎯 ] Recruiter Mode (Zero Friction)**: Uma trava de segurança global que congela todas as animações e transições, transformando o dashboard em um documento estático de alta legibilidade.
*   **[ 🏰 ] Official Branding v6.0.3**: Integração de logos e monogramas em SVG de alta fidelidade, com suporte dinâmico para temas Light e Dark.
*   **[ 🌊 ] Fluid Layouts & Typography**: Uso extensivo de `clamp()` para garantir que títulos monumentais de 5.5rem se ajustem perfeitamente a telas mobile sem clipping.
*   **[ 🖼️ ] Dynamic Asset Resolution**: Utilização de `resolveImagePath` para sincronizar caminhos do banco de dados com URLs públicas do Supabase em tempo real.
*   **[ 🏷️ ] 3-Category Pills**: Cada projeto agora é classificado em 3 eixos: **Stack Técnica**, **Domínio de Negócio** e **Status/Valor**, facilitando a leitura rápida por recrutadores.

---

## 📈 EVOLUÇÃO E ROADMAP (V6.0.0 - HYBRID ENGINE & THEME OVERHAUL)

### 📅 CHANGELOG TÉCNICO

*   **v6.0.3 (ATUAL)**:
    *   `OFFICIAL_BRANDING_INTEGRATION`: Substituição de logos textuais por ativos SVG oficiais (Monograma e Logo Completo) carregados dinamicamente do bucket `LucasLimaLogo`.
    *   `DYNAMIC_THEME_BRANDING`: Sincronização automática entre as variantes de logo (Light/Dark/Oficial) e o tema atual do portal.
    *   `FAVICON_OVERHAUL`: Atualização do Favicon do sistema para o monograma oficial em alta fidelidade.
    *   `RESPONSIVE_BRAND_LOGIC`: Implementação de lógica de transição de logo na Sidebar baseada em scroll e estado do hero.
*   **v6.0.2**: 
    *   `SUPABASE_ASSET_SYNC`: Integração completa com o utilitário `resolveImagePath` para carregamento dinâmico de assets via Supabase Storage.
    *   `FLUID_TYPOGRAPHY_SYSTEM`: Implementação de `clamp()` em todos os títulos e métricas, garantindo responsividade sem quebras ou cortes de texto.
    *   `UX_GALLERY_OVERFLOW`: Legendas de imagem com scroll vertical inteligente e scrollbar minimalista para descrições detalhadas.
*   **v6.0.1**: Correção de importação crítica em `data/index.js` e estabilização de ícones em `pillIcons.jsx`.
*   **v6.0.0**: Lançamento do Motor Híbrido de Carrossel e revisão de contraste Light Mode 2.0.
*   **v5.3.1**: Badge de acesso com Red Pulse e otimizações de footer.
*   **v5.3.0**: Implementação do `SYSTEM_ACCESS` com grid assimétrico e Panoramic Terminal.
*   **v5.2.0**: Overhaul da seção de Experiência com modais `Problem/Action/Impact`.
*   **v3.0.0**: Migração para React 19 e orquestração de animações.
*   **v1.0.0**: Lançamento da estrutura modular original.

---

## 🚀 EXECUÇÃO DO AMBIENTE

Para rodar este ecossistema localmente e observar a arquitetura em tempo real:

```powershell
# 1. Clonar o Repositório de Elite
git clone https://github.com/lukaslimna1/Lucas-Lima-Digital.git

# 2. Inicializar Dependências
npm install

# 3. Disparar o Motor de Desenvolvimento
npm run dev
```

---

> **DESENVOLVIDO COM RIGOR TÉCNICO E VISÃO ESTRATÉGICA.**
> *Lucas Lima — Digital Systems Engineer*
