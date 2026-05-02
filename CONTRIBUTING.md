# Guia de Contribuição - Lucas Lima Digital [V2.3.0]

Bem-vindo ao motor de desenvolvimento do meu portfólio. Este projeto segue padrões rigorosos de engenharia para garantir performance e manutenibilidade.

## 📝 Padrões de Código

### Documentação Técnica
Utilizamos comentários padronizados no código para garantir que a lógica seja clara e autodocumentada.
```javascript
/**
 * Descrição da função
 * @param {Tipo} param - Descrição
 * @returns {Tipo} Descrição
 */
```

### Componentização
Os componentes devem ser criados na pasta `src/components` seguindo o padrão de separação entre lógica (`.jsx`) e estilo (`.module.css`).

## 🚀 Fluxo de Trabalho
1. **Desenvolvimento**: `npm run dev` - Inicia o servidor local.
2. **Build**: `npm run build` - Prepara a versão de produção.
3. **Qualidade**: `npm run lint` - Verifica erros de padronização no código.

## 📡 Integração Supabase
Todos os ativos de mídia (fotos, ícones pesados) devem ser hospedados no Supabase Storage (bucket `trampoFacil`) para otimizar o carregamento. Use a função `resolveImagePath` para referenciá-los.

---
*Este repositório é otimizado para entrega contínua via GitHub.*
