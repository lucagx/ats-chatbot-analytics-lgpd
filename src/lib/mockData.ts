import { Vaga, Candidato, ConsentimentoLGPD, LogTratamento, Agendamento, Avaliacao, NovoContratado, ChatSession } from '../types';

export const mockVagas: Vaga[] = [
  {
    id: '1',
    titulo: 'Desenvolvedor Full Stack Sênior',
    departamento: 'Tecnologia',
    localizacao: 'São Paulo, SP - Híbrido',
    tipo: 'CLT',
    status: 'aberta',
    prioridade: 'alta',
    dataAbertura: '2025-01-15',
    quantidadeVagas: 2,
    salarioMin: 12000,
    salarioMax: 18000,
    descricao: 'Buscamos desenvolvedor full stack experiente para atuar em projetos de grande escala.',
    requisitos: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', '5+ anos de experiência'],
    beneficios: ['Vale refeição', 'Plano de saúde', 'Home office flexível', 'Auxílio educação'],
    knockoutQuestions: [
      {
        id: 'kq1',
        pergunta: 'Você possui ao menos 3 anos de experiência com React?',
        respostaCorreta: 'sim',
        tipo: 'boolean',
        eliminatoria: true
      },
      {
        id: 'kq2',
        pergunta: 'Qual seu nível de inglês?',
        respostaCorreta: 'Avançado',
        tipo: 'choice',
        opcoes: ['Básico', 'Intermediário', 'Avançado', 'Fluente'],
        eliminatoria: false
      }
    ],
    candidatosCount: 45
  },
  {
    id: '2',
    titulo: 'Analista de Dados',
    departamento: 'Business Intelligence',
    localizacao: 'Remoto',
    tipo: 'CLT',
    status: 'aberta',
    prioridade: 'media',
    dataAbertura: '2025-02-01',
    quantidadeVagas: 1,
    salarioMin: 8000,
    salarioMax: 12000,
    descricao: 'Profissional para análise de dados e criação de dashboards estratégicos.',
    requisitos: ['SQL', 'Python', 'Power BI', 'Estatística'],
    beneficios: ['100% Remoto', 'Horário flexível', 'Plano de saúde'],
    candidatosCount: 28
  },
  {
    id: '3',
    titulo: 'Gerente de Produto',
    departamento: 'Produto',
    localizacao: 'Rio de Janeiro, RJ',
    tipo: 'CLT',
    status: 'aberta',
    prioridade: 'alta',
    dataAbertura: '2025-01-20',
    quantidadeVagas: 1,
    salarioMin: 15000,
    salarioMax: 22000,
    descricao: 'Liderar estratégia e roadmap de produtos digitais.',
    requisitos: ['Product Management', 'Metodologias ágeis', 'Data-driven', '7+ anos experiência'],
    beneficios: ['Bônus anual', 'Stock options', 'Plano de saúde premium'],
    candidatosCount: 19
  },
  {
    id: '4',
    titulo: 'UX/UI Designer',
    departamento: 'Design',
    localizacao: 'São Paulo, SP - Híbrido',
    tipo: 'CLT',
    status: 'pausada',
    prioridade: 'baixa',
    dataAbertura: '2025-01-10',
    quantidadeVagas: 1,
    salarioMin: 7000,
    salarioMax: 11000,
    descricao: 'Designer para criar experiências incríveis para nossos usuários.',
    requisitos: ['Figma', 'Design System', 'User Research', 'Prototipagem'],
    beneficios: ['Vale refeição', 'Plano de saúde', 'Day off aniversário'],
    candidatosCount: 12
  }
];

export const mockCandidatos: Candidato[] = [
  {
    id: 'c1',
    nome: 'Ana Paula Silva',
    email: 'ana.silva@email.com',
    telefone: '(11) 98765-4321',
    vagaId: '1',
    vagaTitulo: 'Desenvolvedor Full Stack Sênior',
    status: 'entrevista',
    fonte: 'linkedin',
    dataAplicacao: '2025-02-10',
    notaTriagem: 92,
    notaAvaliacao: 88,
    dataUltimaAtualizacao: '2025-02-14',
    consentimentoLGPD: true,
    dataConsentimento: '2025-02-10',
    etapaAtual: 'Entrevista Final',
    proximoPasso: 'Aguardando feedback do gestor'
  },
  {
    id: 'c2',
    nome: 'Carlos Eduardo Santos',
    email: 'carlos.santos@email.com',
    telefone: '(11) 97654-3210',
    vagaId: '1',
    vagaTitulo: 'Desenvolvedor Full Stack Sênior',
    status: 'avaliacao',
    fonte: 'site',
    dataAplicacao: '2025-02-12',
    notaTriagem: 85,
    dataUltimaAtualizacao: '2025-02-13',
    consentimentoLGPD: true,
    dataConsentimento: '2025-02-12',
    etapaAtual: 'Teste Técnico',
    proximoPasso: 'Completar avaliação técnica até 18/02'
  },
  {
    id: 'c3',
    nome: 'Mariana Costa',
    email: 'mariana.costa@email.com',
    telefone: '(21) 99876-5432',
    vagaId: '2',
    vagaTitulo: 'Analista de Dados',
    status: 'triagem',
    fonte: 'chatbot',
    dataAplicacao: '2025-02-14',
    notaTriagem: 78,
    dataUltimaAtualizacao: '2025-02-14',
    consentimentoLGPD: true,
    dataConsentimento: '2025-02-14',
    etapaAtual: 'Triagem Automática',
    proximoPasso: 'Análise de currículo pelo recrutador'
  },
  {
    id: 'c4',
    nome: 'Roberto Oliveira',
    email: 'roberto.oliveira@email.com',
    telefone: '(11) 96543-2109',
    vagaId: '1',
    vagaTitulo: 'Desenvolvedor Full Stack Sênior',
    status: 'aprovado',
    fonte: 'indicacao',
    dataAplicacao: '2025-02-08',
    notaTriagem: 95,
    notaAvaliacao: 93,
    dataUltimaAtualizacao: '2025-02-15',
    consentimentoLGPD: true,
    dataConsentimento: '2025-02-08',
    etapaAtual: 'Aprovado - Proposta',
    proximoPasso: 'Envio de proposta comercial'
  },
  {
    id: 'c5',
    nome: 'Juliana Ferreira',
    email: 'juliana.ferreira@email.com',
    telefone: '(21) 95432-1098',
    vagaId: '3',
    vagaTitulo: 'Gerente de Produto',
    status: 'novo',
    fonte: 'Indeed',
    dataAplicacao: '2025-02-15',
    dataUltimaAtualizacao: '2025-02-15',
    consentimentoLGPD: true,
    dataConsentimento: '2025-02-15',
    etapaAtual: 'Novo Candidato',
    proximoPasso: 'Iniciar triagem'
  },
  {
    id: 'c6',
    nome: 'Pedro Henrique Lima',
    email: 'pedro.lima@email.com',
    telefone: '(11) 94321-0987',
    vagaId: '2',
    vagaTitulo: 'Analista de Dados',
    status: 'reprovado',
    fonte: 'site',
    dataAplicacao: '2025-02-11',
    notaTriagem: 45,
    dataUltimaAtualizacao: '2025-02-12',
    consentimentoLGPD: true,
    dataConsentimento: '2025-02-11',
    etapaAtual: 'Reprovado na Triagem',
    observacoes: 'Não atende requisitos mínimos de experiência com SQL'
  }
];

export const mockConsentimentos: ConsentimentoLGPD[] = [
  {
    id: 'cons1',
    candidatoId: 'c1',
    candidatoNome: 'Ana Paula Silva',
    email: 'ana.silva@email.com',
    dataConsentimento: '2025-02-10T14:30:00',
    finalidades: [
      'Processo seletivo para vaga de Desenvolvedor Full Stack Sênior',
      'Banco de talentos por 12 meses',
      'Comunicações sobre processos seletivos futuros'
    ],
    ipOrigem: '177.12.45.67',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    ativo: true
  },
  {
    id: 'cons2',
    candidatoId: 'c2',
    candidatoNome: 'Carlos Eduardo Santos',
    email: 'carlos.santos@email.com',
    dataConsentimento: '2025-02-12T09:15:00',
    finalidades: [
      'Processo seletivo para vaga de Desenvolvedor Full Stack Sênior',
      'Banco de talentos por 12 meses'
    ],
    ipOrigem: '177.12.45.68',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    ativo: true
  },
  {
    id: 'cons3',
    candidatoId: 'c3',
    candidatoNome: 'Mariana Costa',
    email: 'mariana.costa@email.com',
    dataConsentimento: '2025-02-14T16:45:00',
    finalidades: [
      'Processo seletivo para vaga de Analista de Dados'
    ],
    ipOrigem: '177.12.45.69',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X)',
    ativo: true
  }
];

export const mockLogs: LogTratamento[] = [
  {
    id: 'log1',
    timestamp: '2025-02-15T10:30:00',
    candidatoId: 'c1',
    candidatoNome: 'Ana Paula Silva',
    acao: 'acesso',
    usuario: 'recrutador@empresa.com',
    detalhes: 'Visualização de currículo e histórico do candidato',
    ipOrigem: '192.168.1.100'
  },
  {
    id: 'log2',
    timestamp: '2025-02-15T11:15:00',
    candidatoId: 'c2',
    candidatoNome: 'Carlos Eduardo Santos',
    acao: 'modificacao',
    usuario: 'sistema-ats',
    detalhes: 'Atualização de status: triagem → avaliacao',
    ipOrigem: '10.0.0.1'
  },
  {
    id: 'log3',
    timestamp: '2025-02-14T16:45:00',
    candidatoId: 'c3',
    candidatoNome: 'Mariana Costa',
    acao: 'consentimento',
    usuario: 'chatbot-sistema',
    detalhes: 'Coleta de consentimento via chatbot',
    ipOrigem: '177.12.45.69'
  },
  {
    id: 'log4',
    timestamp: '2025-02-14T09:20:00',
    candidatoId: 'c4',
    candidatoNome: 'Roberto Oliveira',
    acao: 'exportacao',
    usuario: 'gestor@empresa.com',
    detalhes: 'Exportação de dados para análise de fit cultural',
    ipOrigem: '192.168.1.105'
  },
  {
    id: 'log5',
    timestamp: '2025-02-13T14:00:00',
    candidatoId: 'c6',
    candidatoNome: 'Pedro Henrique Lima',
    acao: 'acesso',
    usuario: 'recrutador@empresa.com',
    detalhes: 'Análise de perfil durante triagem',
    ipOrigem: '192.168.1.100'
  }
];

export const mockAgendamentos: Agendamento[] = [
  {
    id: 'ag1',
    candidatoId: 'c1',
    candidatoNome: 'Ana Paula Silva',
    vagaId: '1',
    vagaTitulo: 'Desenvolvedor Full Stack Sênior',
    tipo: 'final',
    data: '2025-02-18',
    horario: '14:00',
    duracao: 60,
    entrevistador: 'Diretor de Tecnologia',
    status: 'confirmado',
    linkVideoconferencia: 'https://meet.google.com/abc-defg-hij',
    observacoes: 'Entrevista final com apresentação de case'
  },
  {
    id: 'ag2',
    candidatoId: 'c2',
    candidatoNome: 'Carlos Eduardo Santos',
    vagaId: '1',
    vagaTitulo: 'Desenvolvedor Full Stack Sênior',
    tipo: 'tecnica',
    data: '2025-02-19',
    horario: '10:00',
    duracao: 90,
    entrevistador: 'Tech Lead',
    status: 'agendado',
    linkVideoconferencia: 'https://meet.google.com/xyz-abcd-efg'
  },
  {
    id: 'ag3',
    candidatoId: 'c3',
    candidatoNome: 'Mariana Costa',
    vagaId: '2',
    vagaTitulo: 'Analista de Dados',
    tipo: 'triagem',
    data: '2025-02-17',
    horario: '15:30',
    duracao: 30,
    entrevistador: 'Recrutador Sênior',
    status: 'agendado',
    linkVideoconferencia: 'https://meet.google.com/mno-pqrs-tuv'
  },
  {
    id: 'ag4',
    candidatoId: 'c4',
    candidatoNome: 'Roberto Oliveira',
    vagaId: '1',
    vagaTitulo: 'Desenvolvedor Full Stack Sênior',
    tipo: 'comportamental',
    data: '2025-02-13',
    horario: '11:00',
    duracao: 45,
    entrevistador: 'RH',
    status: 'realizado',
    observacoes: 'Excelente fit cultural, comunicação clara'
  }
];

export const mockAvaliacoes: Avaliacao[] = [
  {
    id: 'av1',
    candidatoId: 'c1',
    candidatoNome: 'Ana Paula Silva',
    vagaId: '1',
    tipo: 'teste-tecnico',
    status: 'concluido',
    dataEnvio: '2025-02-11',
    dataLimite: '2025-02-14',
    dataConclusao: '2025-02-12',
    nota: 88,
    linkAvaliacao: 'https://platform.teste.com/assessment/tech-001',
    observacoes: 'Ótimo desempenho em algoritmos, boas práticas de código'
  },
  {
    id: 'av2',
    candidatoId: 'c2',
    candidatoNome: 'Carlos Eduardo Santos',
    vagaId: '1',
    tipo: 'teste-tecnico',
    status: 'em-andamento',
    dataEnvio: '2025-02-14',
    dataLimite: '2025-02-17',
    linkAvaliacao: 'https://platform.teste.com/assessment/tech-002'
  },
  {
    id: 'av3',
    candidatoId: 'c1',
    candidatoNome: 'Ana Paula Silva',
    vagaId: '1',
    tipo: 'video-entrevista',
    status: 'concluido',
    dataEnvio: '2025-02-10',
    dataLimite: '2025-02-12',
    dataConclusao: '2025-02-11',
    nota: 92,
    linkAvaliacao: 'https://platform.video.com/interview/001',
    observacoes: 'Respostas bem estruturadas, demonstrou liderança'
  },
  {
    id: 'av4',
    candidatoId: 'c3',
    candidatoNome: 'Mariana Costa',
    vagaId: '2',
    tipo: 'teste-logica',
    status: 'pendente',
    dataEnvio: '2025-02-15',
    dataLimite: '2025-02-18',
    linkAvaliacao: 'https://platform.teste.com/assessment/logic-003'
  },
  {
    id: 'av5',
    candidatoId: 'c4',
    candidatoNome: 'Roberto Oliveira',
    vagaId: '1',
    tipo: 'teste-tecnico',
    status: 'concluido',
    dataEnvio: '2025-02-09',
    dataLimite: '2025-02-12',
    dataConclusao: '2025-02-10',
    nota: 93,
    linkAvaliacao: 'https://platform.teste.com/assessment/tech-004',
    observacoes: 'Excelente conhecimento de arquitetura e padrões de projeto'
  }
];

export const mockNovoContratados: NovoContratado[] = [
  {
    id: 'nc1',
    candidatoId: 'c4',
    nome: 'Roberto Oliveira',
    email: 'roberto.oliveira@email.com',
    cargo: 'Desenvolvedor Full Stack Sênior',
    departamento: 'Tecnologia',
    dataInicio: '2025-03-01',
    gestor: 'Diretor de Tecnologia',
    status: 'pre-admissao',
    progresso: 35,
    tasks: [
      {
        id: 't1',
        titulo: 'Envio de documentação pessoal',
        descricao: 'RG, CPF, comprovante de residência, título de eleitor',
        categoria: 'documentacao',
        status: 'concluida',
        prazo: '2025-02-20',
        responsavel: 'Candidato',
        obrigatoria: true
      },
      {
        id: 't2',
        titulo: 'Exame médico admissional',
        descricao: 'Agendar e realizar exame médico ocupacional',
        categoria: 'documentacao',
        status: 'em-andamento',
        prazo: '2025-02-25',
        responsavel: 'Candidato',
        obrigatoria: true
      },
      {
        id: 't3',
        titulo: 'Assinatura de contrato',
        descricao: 'Assinar contrato de trabalho e documentos complementares',
        categoria: 'documentacao',
        status: 'pendente',
        prazo: '2025-02-28',
        responsavel: 'RH',
        obrigatoria: true
      },
      {
        id: 't4',
        titulo: 'Setup de equipamentos',
        descricao: 'Recebimento de notebook, acessos e credenciais',
        categoria: 'setup',
        status: 'pendente',
        prazo: '2025-03-01',
        responsavel: 'TI',
        obrigatoria: true
      },
      {
        id: 't5',
        titulo: 'Treinamento de integração',
        descricao: 'Participar do programa de integração de novos colaboradores',
        categoria: 'treinamento',
        status: 'pendente',
        prazo: '2025-03-05',
        responsavel: 'RH',
        obrigatoria: true
      },
      {
        id: 't6',
        titulo: 'Conhecer a equipe',
        descricao: 'Reunião de apresentação com o time',
        categoria: 'integracao',
        status: 'pendente',
        prazo: '2025-03-01',
        responsavel: 'Gestor',
        obrigatoria: false
      }
    ]
  }
];

export const mockChatSessions: ChatSession[] = [
  {
    id: 'chat1',
    candidatoNome: 'Mariana Costa',
    candidatoEmail: 'mariana.costa@email.com',
    canal: 'web',
    status: 'finalizado',
    dataInicio: '2025-02-14T16:30:00',
    dataFim: '2025-02-14T16:50:00',
    mensagens: [
      {
        id: 'm1',
        tipo: 'bot',
        mensagem: 'Olá! Sou o assistente virtual de recrutamento. Como posso ajudá-lo hoje?',
        timestamp: '2025-02-14T16:30:00'
      },
      {
        id: 'm2',
        tipo: 'user',
        mensagem: 'Gostaria de me candidatar a uma vaga',
        timestamp: '2025-02-14T16:31:00'
      },
      {
        id: 'm3',
        tipo: 'bot',
        mensagem: 'Ótimo! Temos algumas vagas abertas. Qual área te interessa?',
        timestamp: '2025-02-14T16:31:15',
        opcoes: ['Tecnologia', 'Business Intelligence', 'Produto', 'Design']
      },
      {
        id: 'm4',
        tipo: 'user',
        mensagem: 'Business Intelligence',
        timestamp: '2025-02-14T16:32:00'
      },
      {
        id: 'm5',
        tipo: 'bot',
        mensagem: 'Perfeito! Temos a vaga de Analista de Dados aberta. Para prosseguir, preciso do seu consentimento para tratamento de dados pessoais conforme a LGPD. Seus dados serão utilizados exclusivamente para este processo seletivo e banco de talentos por 12 meses. Você concorda?',
        timestamp: '2025-02-14T16:32:30'
      },
      {
        id: 'm6',
        tipo: 'user',
        mensagem: 'Sim, concordo',
        timestamp: '2025-02-14T16:33:00'
      },
      {
        id: 'm7',
        tipo: 'bot',
        mensagem: 'Obrigado! Por favor, informe seu nome completo:',
        timestamp: '2025-02-14T16:33:15'
      },
      {
        id: 'm8',
        tipo: 'user',
        mensagem: 'Mariana Costa',
        timestamp: '2025-02-14T16:34:00'
      }
    ],
    contexto: {
      etapa: 'cadastro-concluido',
      vagaInteresse: '2',
      consentimentoColetado: true
    }
  }
];
