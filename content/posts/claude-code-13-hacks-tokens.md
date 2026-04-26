---
title: Tokens do Claude Code — hacks práticos
date: 2026-04-12
tags:
  - dev
  - ia
  - claude-code
  - produtividade
---

Uso o Claude Code diariamente para construir projetos — SaaS, scripts de automação, pesquisa de doutorado. Depois de algumas semanas pagando mais do que deveria e vendo a qualidade das respostas cair no meio de sessões longas, aprendi a gerenciar contexto de verdade.

Aqui está o que funciona.

---

## O PROBLEMA QUE NINGUÉM TE CONTA

Otimizar tokens não é só sobre economizar dinheiro — é sobre **manter a inteligência do modelo no ápice**. Quanto mais saturada está a janela de contexto, mais o modelo tende a se perder e ignorar detalhes importantes.

A janela de contexto de um LLM não é linear. Cada mensagem nova faz o modelo reler **todo o histórico anterior**. Isso significa que uma sessão de 2 horas de desenvolvimento pode estar consumindo 10x mais tokens do que o necessário — e, pior, a qualidade do output cai porque o modelo começa a ignorar o meio da conversa, focando só no início e no fim.

Antes mesmo da sua primeira mensagem, o Claude já carrega metadados, o `CLAUDE.md`, servidores MCP ativos e configurações. Você pode estar gastando milhares de tokens em overhead antes de digitar uma linha.

---

## HACKS

### 1. NOVA TAREFA = NOVA CONVERSA
Use `/clear` ao começar uma funcionalidade diferente. O histórico do bug anterior é ruído para a próxima feature.

### 2. DESABILITE SERVIDORES MCP QUE VOCÊ NÃO VAI USAR
Com `/mcp` você ativa e desativa integrações (Gmail, Google Drive, etc.). Se não vai usar no projeto atual, desativa. Cada servidor ativo aumenta o overhead inicial da sessão.

### 3. AGRUPE MENSAGENS
Evite a tentação de mandar mensagens pequenas e "picadas". Um prompt bem planejado de 5 parágrafos é mais eficiente do que 10 mensagens curtas de ida e volta.

### 4. USE O PLAN MODE ANTES DE CODAR
`Shift + Tab` ativa o Plan Mode. O Claude mapeia a abordagem inteira antes de tocar em qualquer arquivo. Isso evita o ciclo de gerar código errado → corrigir → gerar de novo, que é onde os tokens realmente somem.

### 5. MONITORE COM `/context`
Verifique a porcentagem da janela ocupada regularmente. Quando está perto de 60%, é hora de agir — não espere travar.

### 6. SEJA CIRÚRGICO NO CONTEXTO
Não cole o arquivo inteiro se o problema está em 20 linhas. Use `@arquivo.py:50-70` para referenciar exatamente o trecho relevante.

### 7. NÃO DEIXE RODAR SOLTO
Em tarefas longas, acompanhe em tempo real. Se o Claude começar a "reinventar a roda" ou perder o fio, interrompa cedo — reverter é mais barato do que deixar continuar.

### 8. `CLAUDE.md` COMO ÍNDICE, NÃO COMO MANUAL
Coloque no `CLAUDE.md` apenas ponteiros para **Skills** (arquivos carregados sob demanda). Instruções longas no `CLAUDE.md` são re-lidas em toda sessão, sempre.

### 9. USE `@` PARA REFERENCIAR ARQUIVOS ESPECÍFICOS
Em vez de "olha lá no projeto como isso funciona", use `@src/services/auth.ts`. Direciona o modelo sem ele precisar varrer o codebase.

### 10. `/compact` AOS 60%
Quando atingir ~60% da janela, use `/compact`. O commando resume a conversa e descarta o histórico que não importa mais, mantendo apenas as decisões tomadas.

### 11. ESCOLHA O MODELO CERTO PARA CADA TAREFA

Usar o modelo mais caro para tudo é como usar uma Ferrari para ir à padaria.

| Tarefa | Modelo | Por quê |
|--------|--------|---------|
| Planejamento de arquitetura complexa | Claude Sonnet / GPT-4o | Melhor raciocínio lógico e entendimento de dependências cruzadas |
| Refatoração de boilerplate / testes unitários | Claude Haiku / GPT-4o mini | Rápidos, baratos, ótimos em tarefas repetitivas e padrões conhecidos |
| Análise de documentação gigantesca (PDFs, logs) | Gemini 1.5 Pro | Janela de contexto massiva (até 2M tokens) — quando você realmente precisa ler tudo |
| Debugging rápido e correções simples | Claude Haiku | Identifica errors de sintaxe e lógica simples quase instantaneamente |
| Decisões críticas de segurança / trade-offs | Claude Opus | Menor taxa de alucinação, visão mais profunda para problemas de alto risco |

### 12. MULTI-AGENTES SÓ QUANDO REALMENTE INDEPENDENTE
Cada agente carrega seu próprio overhead. Use paralelismo quando as tarefas são genuinamente independentes — não como padrão.

### 13. `CLAUDE.md` COMO CONSTITUIÇÃO DO PROJETO
Registre os errors que o Claude já cometeu e as decisões tomadas. Ele não vai repetir o que está documentado. Isso poupa tokens de tentativa e error nas próximas sessões.

---

## O CICLO DE VIDA DE UMA SESSÃO EFICIENTE

Penso em cada sessão em quatro fases:

### 1. FRIO — PLANEJAMENTO
Antes de pedir código, descreva o problema e peça o plano de ação. Em vez de mandar 10 arquivos e pedir "faça x", descreva o problema e peça a arquitetura. Isso evita o ciclo de gerar código errado → corrigir → gerar de novo.

### 2. MORNO — SEGMENTAÇÃO E REFERÊNCIA
Nunca envie a base de código inteira se o error está em uma função. Use `@` para referenciar diretamente o arquivo — e se o arquivo tem 500 linhas mas o error está nas linhas 50–70, cole apenas esse bloco.

### 3. COMPACTAÇÃO — MANUTENÇÃO DE CONTEXTO
Em sessões longas, a "sujeira" de tentativas e errors entope a memória. A cada 15–20 mensagens, use `/compact` ou abra uma nova conversa com o resumo das decisões tomadas. Você começa com 90% menos tokens e 100% de clareza.

### 4. SISTEMA — INSTRUÇÕES PERMANENTES
Em vez de repetir "aja como sênior e use Python" em cada mensagem, configure isso no `CLAUDE.md`. Instruções de sistema são processadas de forma mais eficiente e, nas APIs da Anthropic e do Gemini, podem set **cacheadas** — reduzindo drasticamente o custo de re-processamento em sessões longas.

---

### BÔNUS: PROMPT CACHING

Se você usa a API diretamente, verifique se seu fluxo suporta **Prompt Caching**. Isso mantém partes enormes de contexto (uma documentação inteira, por exemplo) na memória do servidor — você paga uma fração do preço para reutilizá-la em mensagens subsequentes.

---

## QUAL HACK VAI MUDAR MAIS O SEU FLUXO?

Na minha experiência, **Plan Mode + `/compact` no memento certo** são os dois que mais impactam tanto custo quanto qualidade. O resto é refinamento.

Se você já usa Claude Code, qual desses você ainda não adotou?
