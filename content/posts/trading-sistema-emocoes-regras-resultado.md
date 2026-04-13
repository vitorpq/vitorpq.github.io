---
title: "Meu sistema de trading: como registro emoções, regras e resultado em cada operação"
date: 2026-04-19
draft: true
tags:
  - trading
  - psicologia
  - sistema
  - disciplina
---

A maioria dos traders registra resultado. Poucos registram o que estava sentindo quando apertou o botão.

Depois de perder dinheiro em trades que "tecnicamente" estavam certos mas eu executei errado — saída antecipada por medo, entrada adiantada por ansiedade, operação em ativo que eu mesmo havia descartado — decidi que precisava de um sistema que rastreasse não só o que aconteceu, mas **por que** aconteceu.

Aqui está o que uso hoje.

---

## A ESTRUTURA: 5 SEÇÕES POR TRADE

Cada operação recebe um arquivo próprio com frontmatter YAML e cinco seções. O frontmatter é a parte que permite filtrar, agregar e analisar depois — com Dataview no Obsidian ou qualquer ferramenta de análise.

Os campos principais:

```yaml
symbol: GOLD
direction: short
timeframe_exec: 5m
timeframe_ctx_1: 15m
timeframe_ctx_2: 60m
market_regime:
entry_type:
signal_quality:
rule_adherence:        # nota de 0 a 100
mistake: false
mistake_tags: []
emotion_before:
emotion_during:
emotion_after:
pnl_R:                 # resultado em R (múltiplos do risco)
```

O resultado em dinheiro importa menos do que `pnl_R` e `rule_adherence`. Um trade com `pnl_R: 2` e `rule_adherence: 40` é um trade ruim que deu certo. Um trade com `pnl_R: -1` e `rule_adherence: 95` é um bom trade que não funcionou. A distinção muda como você avalia sua evolução.

---

## AS 5 SEÇÕES DO DIÁRIO

### 1. CONTEXTO (BROOKS)
Anoto o que o mercado está fazendo em três timeframes — 60m, 15m e 5m — antes de entrar. Regime de mercado, tipo de entrada, qualidade do sinal, localização no gráfico.

Isso força a leitura top-down antes de agir. Sem isso, é fácil olhar só para o 5m e entrar em uma tendência contrária ao 60m.

### 2. PLANO (ANTES DA ENTRADA)
Tese em 1–2 frases. Entrada, stop técnico, alvo, e — o mais importante — **o que invalidaria a tese**. Se não consigo definir a invalidação, não entro.

### 3. EXECUÇÃO
Respondo a uma pergunta simples: executei como planejado? Sim ou não, e por quê. Registro a gestão (parcial, trail, breakeven) e o resultado final.

### 4. PÓS-ANÁLISE
Aqui é onde o sistema ganha profundidade:

- **Aderência às regras:** nota de 0 a 100
- **Error?** campo booleano + tags de tipo de error (`Adiantado`, `Saída antecipada`, `Ativo fora do plano`, etc.)
- O que foi bem e merece reforço
- Um único ajuste objetivo para o próximo trade

A taxonomia de errors é o que permite ver padrões ao longo do tempo. Se `Saída antecipada` aparece toda semana, não é azar — é um problema de gestão de medo que precisa set trabalhado.

### 5. EVIDÊNCIAS
Screenshots do setup e da execução. Sem imagem, o registro perde contexto depois de algumas semanas.

---

## O QUE OS LOGS REVELAM NA PRÁTICA

**07/01/2026 — GOLD SHORT**

Queria comprar. Meu viés era long. Mas olhei e vi que só seria compra acima da MA200. O mercado estava em range com dois topos — a falha da barra de reversão foi a confirmação. Entrei short.

A saída foi conservadora: sai antes do alvo porque "já tinha ganhado o suficiente" e a região de suporte à frente já havia segurado antes.

O que registrei: *"Para mim, foi uma vitória. Mas não era para operar GOLD pela análise dos meus resultados — o BRA50 não deu trade hoje e fui buscar setup em outro ativo."*

`rule_adherence` ficou baixo não pelo resultado, mas pelo processo: operei um ativo fora do plano.

**08/04/2026 — WIN**

Trade bem planejado, 1R:2R estabelecido antes da entrada. Fiz parciais por medo de reversão e sai antes do alvo.

Resultado final: igual ao que eu havia projetado inicialmente. Se tivesse mantido a posição conforme o plano, teria 1R:4R — o dobro.

O registro ficou: *"medo de voltar e ter feito parciais — no fim das contas ganhei o mesmo que tinha olhado inicialmente. Mantendo a mão eu teria ganhado o dobro."*

Esse é o tipo de dado que um simples "trade ganho ✓" nunca capturaria.

---

## POR QUE REGISTRAR EMOÇÕES IMPORTA

Emoção antes, durante e depois da operação parece excessivo até você perceber os padrões.

Ansiedade antes → entrada adiantada → stop levado → loss que não deveria existir.

Euforia depois de um win → próxima entrada sem critério → devolução do lucro.

Esses ciclos são invisíveis se você só olha para o P&L. Ficam óbvios quando estão documentados.

---

## O SISTEMA EM UMA LINHA

> Rastrear aderência e emoção é mais valioso do que rastrear resultado — porque resultado é consequência, e você só melhora o que consegue medir na causa.

Se você opera e não tem um sistema de registro assim, o próximo passo não é estudar mais setups. É construir o espelho.
