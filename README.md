![Lucas Lima Portfolio Banner](public/assets/banner.png)

# 🏛️ LUCAS LIMA | DIGITAL SYSTEMS & PRODUCTS ENGINEER
### `INDUSTRIAL STANDARD V6.0.5` • `MOBILE ARCHITECTURE OPTIMIZED`

> **"Sistemas não começam no código. Começam no entendimento do negócio."**
> A engenharia digital de alta performance é a arte de transformar caos operacional em estrutura, controle e resultado mensurável.

---

## 🛰️ VISÃO GERAL DO ECOSSISTEMA
Este não é apenas um portfólio. É um **Dashboard de Engenharia** projetado para demonstrar a fusão entre arquitetura de software escalável, UX estratégica e uma estética de "Autoridade Industrial". Cada componente foi desenvolvido sob a premissa de que a interface deve respirar precisão e clareza técnica.

| CATEGORIA | TECNOLOGIA | PROPÓSITO INDUSTRIAL |
| :--- | :--- | :--- |
| **ENGINE** | `React 19 + Vite` | Ciclo de renderização otimizado e build-time ultra-reduzido. |
| **STORAGE** | `Supabase Storage` | Gestão centralizada de assets com carregamento dinâmico e seguro. |
| **BRANDING** | `SVG Dynamic Sync` | Logos e monogramas oficiais (v6.0.4) sincronizados via bucket dedicado. |
| **INTELLIGENCE** | `Gemini AI + Custom Hook` | Processamento semântico e suporte à decisão em tempo real. |
| **TYPOGRAPHY** | `Fluid CSS (clamp)` | Escaneabilidade perfeita e ausência de cortes de texto em qualquer device. |
| **HYBRID CAROUSEL** | `Framer Motion + Discrete Logic` | Transição controlada (8s idle / 1.5s slide) para legibilidade máxima de cases. |
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
        B4[PROJECTS - Discrete Carousel]
    end
    
    subgraph E [Global State]
        E1[Light/Dark Mode]
        E2[Recruiter Mode - Total Lockdown]
    end
    
    B --> D[GLOBAL DESIGN SYSTEM]
    D --> D1[3-Category Pill System]
    D --> D2[Fluid Gradient Typography]
    D --> D3[Scrollable Gallery Captions]
```

---

## 🎨 FILOSOFIA DE DESIGN: "DASHBOARD DE GUERRA 2.0"
O sistema visual evoluiu para suportar múltiplos contextos de leitura sem perder a **Autoridade**.

*   **[ 🎯 ] Recruiter Mode (Zero Friction)**: Uma trava de segurança global que congela 100% das animações, hover effects e transições do logo, transformando o dashboard em um documento estático de legibilidade absoluta.
*   **[ 🔄 ] Discrete Projects Carousel**: Transições calculadas (8s de pausa / 1.5s de slide) para garantir que o conteúdo técnico de cada projeto seja absorvido sem pressa.
*   **[ 🏰 ] Official Branding v6.0.4**: Integração de logos SVG com neutralização de interação em modos de foco (Recruiter Mode).
*   **[ 🌊 ] Fluid Layouts & Typography**: Uso extensivo de `clamp()` para garantir que títulos monumentais de 5.5rem se ajustem perfeitamente a telas mobile sem clipping.
*   **[ 🖼️ ] Dynamic Asset Resolution**: Utilização de `resolveImagePath` para sincronizar caminhos do banco de dados com URLs públicas do Supabase em tempo real.
*   **[ 🏷️ ] 3-Category Pills**: Cada projeto agora é classificado em 3 eixos: **Stack Técnica**, **Domínio de Negócio** e **Status/Valor**, facilitando a leitura rápida por recrutadores.

---

## 📈 EVOLUÇÃO E ROADMAP (V6.0.0 - HYBRID ENGINE & THEME OVERHAUL)

### 📅 CHANGELOG TÉCNICO

*   **v6.0.5 (ATUAL)**:
    *   `MOBILE_ARCH_OPTIMIZATION`: Re-arquitetura total de grids para mobile (Experience & Lab), garantindo empilhamento vertical perfeito.
    *   `FLUID_TYPOGRAPHY_STABILIZATION`: Refinamento global de `clamp()` em títulos de seções para evitar cortes em viewports < 390px.
    *   `UI_OVERFLOW_RESOLUTION`: Supressão absoluta de scroll horizontal via enforcing de `width: 100vw` e `overflow-x: hidden`.
    *   `BRAND_MOBILE_SYNC`: Otimização do brand header mobile para leitura clara em dispositivos ultra-estreitos.
*   **v6.0.4**:
    *   `RECRUITER_MODE_LOCKDOWN`: Implementação de estado estático absoluto para a logo (zero animações de desenho, fade ou rotação).
    *   `CAROUSEL_FLOW_ADJUSTMENT`: Transição de movimento contínuo para slides discretos com 8 segundos de "stop-time" para leitura.
    *   `UI_STABILITY_FIXES`: Resolução de artefatos visuais (hamburger icon) no desktop e correção de encodings CSS que afetavam o build.
    *   `HOVER_NEUTRALIZATION`: Neutralização completa de transformações e cursor pointer no logo em modo recrutador.
*   **v6.0.3**:
    *   `OFFICIAL_BRAND_SVG`: Substituição de logos textuais por ativos SVG oficiais carregados via Supabase.
    *   `DYNAMIC_THEME_SYNC`: Sincronização automática entre variantes de logo e tema atual (Light/Dark).
*   **v6.0.2**: 
    *   `SUPABASE_ASSET_SYNC`: Integração completa com o utilitário `resolveImagePath`.
    *   `FLUID_TYPOGRAPHY_SYSTEM`: Implementação de `clamp()` em todos os títulos monumentais.
*   **v6.0.0**: Lançamento do Motor Híbrido de Carrossel e revisão de contraste Light Mode 2.0.
*   **v5.3.0**: Implementação do `SYSTEM_ACCESS` com grid assimétrico e Panoramic Terminal.
*   **v3.0.0**: Migração para React 19 e orquestração de animações.

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
