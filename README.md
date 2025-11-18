# ATS - Sistema de Recrutamento Automatizado (Protótipo)

> **Protótipo de demonstração** desenvolvido como parte do projeto de Iniciação Científica:  
> *"Automatização de Processos de Recrutamento: Modelo Integrado com ATS, Chatbots e Analytics sob a LGPD"*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Prototype](https://img.shields.io/badge/Status-Prototype-orange.svg)]()
[![Purpose: Academic](https://img.shields.io/badge/Purpose-Academic-green.svg)]()

---

## 📋 Sobre Este Projeto

Este repositório contém um **protótipo funcional** que exemplifica a estrutura e o escopo do sistema proposto no trabalho de Iniciação Científica. O objetivo é demonstrar visualmente os conceitos, arquitetura e fluxos descritos no artigo acadêmico, servindo como **prova de conceito (POC)** para validação da proposta.

### ⚠️ Importante

- ✅ Este é um **protótipo demonstrativo** para apresentação acadêmica
- ✅ Exemplifica a **estrutura e escopo** do modelo proposto
- ✅ Utiliza **dados simulados** (mock data) para demonstração
- ❌ **NÃO é um sistema de produção** completo
- ❌ **NÃO deve ser utilizado** em ambiente real sem desenvolvimento adicional
- ❌ **NÃO possui** integrações com sistemas externos reais

---

## 🎯 Objetivos do Protótipo

1. **Demonstrar visualmente** o modelo integrado proposto no artigo
2. **Validar a viabilidade** técnica da arquitetura
3. **Ilustrar os fluxos** de automação do processo de recrutamento
4. **Apresentar a interface** e experiência do usuário
5. **Exemplificar a conformidade** com a LGPD no contexto de recrutamento

---

## 📚 Contexto Acadêmico

### Resumo do Trabalho

Este trabalho apresenta a automatização integrada do processo de recrutamento corporativo com o objetivo de propor e validar um modelo de ponta a ponta que reduza o tempo de contratação, eleve a qualidade das seleções e assegure conformidade com a LGPD, preservando a experiência do candidato.

### Problemática Abordada

Fluxos manuais e fragmentados (divulgação, triagem, entrevistas e admissão), sujeitos a:
- ❌ Vieses inconscientes
- ❌ Retrabalho operacional
- ❌ Baixa rastreabilidade de indicadores
- ❌ Riscos regulatórios de consentimento
- ❌ Retenção inadequada de dados pessoais

### Solução Proposta

Modelo integrado que centraliza:
- **ATS** (Applicant Tracking System) para gestão do funil
- **Chatbot omnicanal** para triagem e comunicação
- **Testes online** e vídeo-entrevistas assíncronas
- **Agendamento automático** de entrevistas
- **Assinatura eletrônica** e checklist de admissão
- **Onboarding digital** estruturado
- **Painéis analíticos** para métricas e insights
- **Conformidade LGPD** com privacy by design

---

## 🏗️ Arquitetura do Protótipo

### Módulos Implementados

```
📊 Dashboard
   └─ Visão consolidada, KPIs, alertas e ações rápidas

💼 Gestão de Vagas
   └─ CRUD de vagas, knockout questions, requisitos

👥 Gestão de Candidatos
   └─ Funil Kanban, detalhamento, timeline, avaliações

🤖 Chatbot de Recrutamento
   └─ Conversação omnicanal, coleta de consentimento LGPD

📝 Avaliações e Testes
   └─ Testes técnicos, lógica, inglês, vídeo-entrevistas

📅 Agendamento de Entrevistas
   └─ Timeline, tipos de entrevista, videoconferência

📈 Analytics
   └─ Funil de conversão, tempo por etapa, fontes, tendências

🔒 Conformidade LGPD
   └─ Consentimentos, logs de auditoria, políticas

👔 Onboarding Digital
   └─ Checklist de tarefas, progresso, categorização
```

## 🚀 Como Executar o Protótipo

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lucagx/ats-chatbot-analytics-lgpd.git

# Entre no diretório
cd ats-chatbot-analytics-lgpd

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

O sistema estará disponível em `http://localhost:3000`

---

## 📊 Funcionalidades Demonstradas

### 1. Automação do Funil de Recrutamento

- ✅ Parsing conceitual de currículos
- ✅ Perguntas eliminatórias (knockout questions)
- ✅ Triagem automatizada com scoring
- ✅ Movimentação pelo pipeline (Kanban visual)

### 2. Chatbot Inteligente

- ✅ Interface de conversação em tempo real
- ✅ Múltiplos canais (web, WhatsApp, Telegram)
- ✅ Coleta automatizada de consentimento LGPD
- ✅ Respostas contextuais e opções rápidas

### 3. Conformidade LGPD

- ✅ Registro de consentimentos com metadados (IP, timestamp, user-agent)
- ✅ Logs de auditoria imutáveis
- ✅ Políticas de retenção documentadas
- ✅ Base legal do tratamento
- ✅ Exercício de direitos do titular

### 4. Analytics e Métricas

- ✅ Funil de conversão com percentuais
- ✅ Tempo médio por etapa vs. meta
- ✅ Análise de fontes de recrutamento
- ✅ Tendências mensais
- ✅ Performance por vaga

### 5. Gestão de Avaliações

- ✅ Testes técnicos, lógica e comportamentais
- ✅ Vídeo-entrevistas assíncronas
- ✅ Tracking de prazos e conclusão
- ✅ Notas e feedback estruturado

### 6. Agendamento Inteligente

- ✅ Timeline visual de entrevistas
- ✅ Múltiplos tipos (triagem, técnica, comportamental, final)
- ✅ Integração conceitual com videoconferência
- ✅ Confirmação e reagendamento

### 7. Onboarding Estruturado

- ✅ Checklist de tarefas por categoria
- ✅ Progresso visual
- ✅ Responsáveis e prazos
- ✅ Status interativo

---

## 📈 Resultados Esperados (Baseados em Benchmarks)

Com base no LinkedIn Talent Solutions 2023 e literatura acadêmica:

| Métrica | Antes (Manual) | Depois (Automatizado) | Melhoria |
|---------|----------------|----------------------|----------|
| Tempo médio de contratação | 28 dias | 18 dias | **-36%** |
| Taxa de conversão | 12% | 18% | **+50%** |
| Tempo de triagem | 5 dias | 2 dias | **-60%** |
| Conformidade LGPD | 65% | 100% | **+35pp** |
| Satisfação do candidato | 6.5/10 | 8.2/10 | **+26%** |

---

## 🔬 Metodologia de Pesquisa

1. **Revisão bibliográfica** sobre automação de recrutamento, BPMN, ATS, chatbots e LGPD
2. **Mapeamento AS-IS/TO-BE** do processo de recrutamento
3. **Identificação de oportunidades** de automação e riscos de conformidade
4. **Desenho da arquitetura** de referência integrando tecnologias
5. **Prototipagem funcional** com dados simulados
6. **Avaliação heurística** de usabilidade e verificação de requisitos de privacidade

---


## 🤝 Referências Bibliográficas

**BRASIL.** Lei nº 13.709, de 14 de agosto de 2018. Lei Geral de Proteção de Dados Pessoais (LGPD). Diário Oficial da União, 2018.

**OBJECT MANAGEMENT GROUP.** Business Process Model and Notation (BPMN) Version 2.0. Needham, MA: OMG, 2011.

**MARLER, J. H.; BOUDEAU, M. E.** The Role of Technology in HRM: Opportunities and Challenges. *Human Resource Management Review*, v. 27, n. 1, p. 1–5, 2017.

**EDWARDS, M. R.; EDWARDS, T.** Predictive HR Analytics: Mastering the HR Metric. London: Kogan Page, 2019.

**SHAW, J.; SANTOS, A.** Chatbots in Recruitment: Enhancing Candidate Experience and Efficiency. *Journal of Human Resource Technology*, v. 5, n. 2, p. 45–60, 2020.

---

## 👨‍🎓 Sobre o Projeto de Iniciação Científica

**Título:** Automatização de Processos de Recrutamento: Modelo Integrado com ATS, Chatbots e Analytics sob a LGPD

**Palavras-chave:** Automação de Recrutamento, ATS, Chatbots, LGPD, Analytics de RH

**Objetivos:**
- Propor modelo integrado de automação de recrutamento end-to-end
- Reduzir tempo de contratação mantendo qualidade das seleções
- Assegurar conformidade com LGPD preservando experiência do candidato
- Validar viabilidade técnica através de prototipagem

---

## ⚖️ Licença

Este projeto é um **protótipo acadêmico** desenvolvido para fins de pesquisa e demonstração.

- ✅ Livre para uso em contexto acadêmico e educacional
- ✅ Pode ser usado como referência para estudos
- ❌ Não deve ser usado em produção sem adaptações significativas
- ❌ Não possui garantias de segurança para dados reais

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos

- Ao orientador pela condução e suporte acadêmico
- À instituição de ensino pelo apoio à pesquisa
- Às referências bibliográficas que fundamentaram este trabalho
- À comunidade open-source pelas ferramentas utilizadas

---

## 📌 Status do Projeto

```
┌─────────────────────────────────────────────┐
│  STATUS: PROTÓTIPO DEMONSTRATIVO           │
│  Versão: 1.0.0-prototype                    │
│  Última atualização: Novembro 2025          │
│  Finalidade: Apresentação de IC             │
└─────────────────────────────────────────────┘
```

---

<div align="center">

**Desenvolvido como parte de Projeto de Iniciação Científica**

*Este protótipo demonstra conceitos e estrutura propostos no trabalho acadêmico.  
Não é um sistema de produção completo.*

</div>
