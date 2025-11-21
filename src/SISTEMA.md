# Sistema ATS - Automatização de Processos de Recrutamento

Sistema integrado de recrutamento automatizado conforme modelo proposto no artigo acadêmico **"Automatização de Processos de Recrutamento: Modelo Integrado com ATS, Chatbots e Analytics sob a LGPD"**.

## Visão Geral

Este é um sistema funcional e demonstrativo que implementa os principais componentes de um ATS (Applicant Tracking System) moderno, integrando:

- **ATS Central**: Gerenciamento completo do funil de recrutamento
- **Chatbot Omnicanal**: Triagem automatizada e coleta de consentimento
- **Analytics**: Métricas e indicadores em tempo real
- **Conformidade LGPD**: Gestão de consentimentos e logs de auditoria
- **Avaliações Online**: Testes técnicos e vídeo-entrevistas
- **Agendamento Automático**: Gestão de entrevistas
- **Onboarding Digital**: Acompanhamento de novos contratados

## Módulos do Sistema

### 1. Dashboard
Visão consolidada com:
- KPIs principais (vagas abertas, candidatos ativos, tempo médio, taxa de conversão)
- Funil visual de candidatos
- Vagas prioritárias
- Próximos agendamentos
- Alertas e ações necessárias
- Status de conformidade LGPD

### 2. Gestão de Vagas
- Criação e edição de vagas
- Perguntas eliminatórias (knockout questions)
- Requisitos e benefícios
- Acompanhamento de candidatos por vaga
- Filtros por status e departamento

### 3. Gestão de Candidatos
- **Visualização Kanban**: Funil visual com drag-and-drop conceitual
- **Visualização em Lista**: Tabela detalhada com filtros
- Detalhamento completo do candidato
- Timeline de atividades
- Histórico de avaliações
- Controle de status e próximos passos

### 4. Chatbot de Recrutamento
- Interface de conversação em tempo real
- Múltiplos canais (web, WhatsApp, Telegram)
- Coleta automatizada de consentimento LGPD
- Triagem inicial de candidatos
- Histórico de conversas
- Respostas automáticas e opções rápidas

### 5. Avaliações e Testes
- Testes técnicos
- Testes de lógica
- Testes de idiomas
- Vídeo-entrevistas assíncronas
- Acompanhamento de prazos
- Notas e feedback estruturado

### 6. Agendamento de Entrevistas
- Timeline visual de agendamentos
- Múltiplos tipos de entrevista (triagem, técnica, comportamental, final)
- Integração com videoconferência
- Confirmação e reagendamento
- Notificações automáticas

### 7. Analytics
Visualizações incluem:
- **Funil de Conversão**: Gráfico de barras com percentuais por etapa
- **Tempo por Etapa**: Comparação com metas estabelecidas
- **Fontes de Recrutamento**: Distribuição e taxa de conversão
- **Tendência Mensal**: Evolução de candidaturas e aprovações
- **Performance por Vaga**: Análise comparativa de resultados

### 8. Conformidade LGPD
- **Consentimentos**: Registro completo com IP, data/hora, finalidades
- **Logs de Auditoria**: Rastreamento de todas as operações com dados pessoais
- **Políticas de Retenção**: Prazos definidos por tipo de candidato
- **Medidas de Segurança**: Documentação de controles implementados
- **Exercício de Direitos**: Gestão de solicitações dos titulares

### 9. Onboarding
- Checklist de tarefas por categoria:
  - Documentação
  - Setup de equipamentos
  - Treinamentos
  - Integração com equipe
- Progresso visual
- Prazos e responsáveis
- Status por contratado

## Principais Funcionalidades

### Automação do Funil
- Parsing automático de CVs (conceitual)
- Triagem com perguntas eliminatórias
- Scoring automático de candidatos
- Movimentação pelo pipeline

### Comunicação Automatizada
- Chatbot para primeira interação
- Notificações de status
- Lembretes de agendamento
- Envio automático de avaliações

### Conformidade e Governança
- Consentimento explícito e rastreável
- Logs imutáveis de auditoria
- Políticas de retenção configuráveis
- Controles de acesso

### Métricas e Insights
- Tempo médio por etapa
- Taxa de conversão global e por fonte
- Performance por vaga
- Tendências históricas
- Gargalos identificados

## Tecnologias Utilizadas

- **React + TypeScript**: Framework principal
- **Tailwind CSS**: Estilização
- **shadcn/ui**: Componentes de interface
- **Recharts**: Visualizações de dados
- **Lucide React**: Ícones

## Dados Demonstrativos

O sistema utiliza dados simulados (mock data) que representam cenários realistas:
- 4 vagas abertas (Tecnologia, BI, Produto, Design)
- 6 candidatos em diferentes etapas
- 3 consentimentos LGPD registrados
- 5 logs de auditoria
- 4 agendamentos de entrevista
- 5 avaliações (concluídas e pendentes)
- 1 novo contratado em onboarding

## Benefícios do Modelo Proposto

### Operacionais
- ⏱️ **Redução de 30-40% no tempo de contratação**
- 📊 **Padronização de critérios e processos**
- 🤖 **Automação de tarefas repetitivas**
- 📈 **Visibilidade completa do funil**

### Experiência do Candidato
- 💬 **Comunicação proativa e transparente**
- ⚡ **Respostas rápidas via chatbot**
- 📱 **Acesso self-service**
- 🎯 **Feedback estruturado**

### Conformidade
- ✅ **100% de consentimentos registrados**
- 🔍 **Auditoria completa de operações**
- 🔒 **Segurança e privacidade by design**
- 📋 **Políticas documentadas**

### Estratégicos
- 📊 **Decisões baseadas em dados**
- 🎯 **Identificação de melhores fontes**
- 💡 **Insights sobre gargalos**
- 🔄 **Melhoria contínua do processo**

## Próximos Passos (Trabalhos Futuros)

1. **Integrações**
   - Sistemas de verificação de antecedentes
   - Folha de pagamento
   - Sistemas de gestão de talentos

2. **IA e Machine Learning**
   - Ranking automático de candidatos
   - Predição de fit cultural
   - Auditoria de vieses algorítmicos

3. **Analytics Avançado**
   - Predição de tempo de contratação
   - Análise de retenção (primeiros 90 dias)
   - ROI por fonte de recrutamento

4. **Experiência do Candidato**
   - Portal self-service
   - Aplicativo mobile
   - Feedback em tempo real

## Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (React)                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │Dashboard │ │  Vagas   │ │Candidatos│ │ Chatbot  │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │Analytics │ │   LGPD   │ │Avaliações│ │Onboarding│      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Mock Data (Demonstrativo)
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Camada de Dados                           │
│  • Vagas            • Candidatos      • Consentimentos       │
│  • Agendamentos     • Avaliações      • Logs de Auditoria    │
│  • Onboarding       • Chat Sessions                          │
└─────────────────────────────────────────────────────────────┘
```

## Considerações sobre LGPD

O sistema implementa os seguintes princípios:

1. **Finalidade**: Consentimento específico para cada uso
2. **Necessidade**: Apenas dados essenciais são coletados
3. **Transparência**: Políticas claras e acessíveis
4. **Segurança**: Medidas técnicas documentadas
5. **Limitação de Retenção**: Prazos definidos por categoria

Todas as operações com dados pessoais são registradas em logs imutáveis para auditoria.

---

**Sistema desenvolvido como demonstração funcional do modelo proposto no artigo acadêmico sobre automatização de processos de recrutamento.**
