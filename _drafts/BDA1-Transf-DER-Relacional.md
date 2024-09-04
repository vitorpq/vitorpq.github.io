---
layout: single
title:  "Transformação DER-Modelo Relacional"
header:
  teaser: "unsplash-gallery-image-2-th.jpg"
categories: 
  - Jekyll
tags:
  - edge case
---

Converter um modelo Entidade-Relacionamento (ER) para um Modelo Relacional é um processo importante na concepção de bancos de dados. 
Sete estão passos que pode-se utilizar para a transformação.

### 1. **Converter Entidades Fortes em Tabelas:**
   - **Entidades Simples**: Cada entidade forte no modelo ER se torna uma tabela no modelo relacional.
   - **Atributos**: Os atributos da entidade se tornam colunas na tabela. O identificador único da entidade (ou chave primária) será a chave primária da tabela.

### 2. **Converter Relacionamentos Binários 1:1:**
   - **Chave Estrangeira**: Em um relacionamento 1:1, uma das tabelas envolvidas (pode ser escolhida com base em critérios de otimização ou conveniência) receberá a chave primária da outra tabela como uma chave estrangeira.
   - **Combinação de Tabelas**: Alternativamente, pode-se combinar as duas entidades em uma única tabela se fizer sentido no contexto do negócio.

### 3. **Converter Relacionamentos Binários 1:N:**
   - **Chave Estrangeira**: No relacionamento 1:N, a chave primária da entidade do lado “1” é adicionada como chave estrangeira na tabela do lado “N”.
   - **Atributos do Relacionamento**: Se o relacionamento tiver atributos, esses são adicionados como colunas na tabela do lado “N”.

### 4. **Converter Relacionamentos Binários N:N:**
   - **Tabela Associativa**: Um relacionamento N:N é convertido em uma tabela associativa, que conterá como chaves estrangeiras as chaves primárias das duas entidades envolvidas. Essas duas chaves estrangeiras juntas formam a chave primária da nova tabela.
   - **Atributos do Relacionamento**: Se o relacionamento tiver atributos, eles se tornam colunas adicionais na tabela associativa.

### 5. **Converter Relacionamentos Ternários (ou N-Arios):**
   - **Tabela Associativa**: Um relacionamento ternário ou de maior aridade é representado por uma tabela que inclui as chaves primárias de todas as entidades participantes como chaves estrangeiras. Essas chaves estrangeiras juntas compõem a chave primária da nova tabela.
   - **Atributos**: Atributos específicos do relacionamento se tornam colunas na tabela associativa.

### 6. **Converter Entidades Fracas em Tabelas:**
   - **Tabela Dependente**: Cada entidade fraca se torna uma tabela, que inclui sua chave parcial (ou discriminador) e a chave primária da entidade forte a que está associada como chave estrangeira.
   - **Chave Primária Composta**: A chave primária da tabela da entidade fraca é geralmente composta pela combinação da chave parcial e da chave estrangeira da entidade forte.

### 7. **Incorporar Herança/Generalização:**
   - **Estratégia de Tabela Única**: Criar uma única tabela que incorpora todos os atributos das entidades da hierarquia, adicionando uma coluna extra para diferenciar o tipo de cada entidade.
   - **Estratégia de Tabelas Separadas**: Criar uma tabela para a entidade pai e tabelas separadas para cada entidade filha. As tabelas das entidades filhas incluirão a chave primária da entidade pai como chave estrangeira.
