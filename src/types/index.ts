export type VagaStatus = 'aberta' | 'pausada' | 'fechada';
export type CandidatoStatus = 'novo' | 'triagem' | 'avaliacao' | 'entrevista' | 'aprovado' | 'reprovado' | 'contratado';
export type Prioridade = 'alta' | 'media' | 'baixa';

export interface Vaga {
  id: string;
  titulo: string;
  departamento: string;
  localizacao: string;
  tipo: 'CLT' | 'PJ' | 'Estágio' | 'Temporário';
  status: VagaStatus;
  prioridade: Prioridade;
  dataAbertura: string;
  quantidadeVagas: number;
  salarioMin?: number;
  salarioMax?: number;
  descricao: string;
  requisitos: string[];
  beneficios: string[];
  knockoutQuestions?: KnockoutQuestion[];
  candidatosCount: number;
}

export interface KnockoutQuestion {
  id: string;
  pergunta: string;
  respostaCorreta: string;
  tipo: 'boolean' | 'choice' | 'number';
  opcoes?: string[];
  eliminatoria: boolean;
}

export interface Candidato {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  vagaId: string;
  vagaTitulo: string;
  status: CandidatoStatus;
  fonte: 'linkedin' | 'site' | 'indicacao' | 'chatbot' | 'Indeed' | 'Catho';
  dataAplicacao: string;
  curriculo?: string;
  notaTriagem?: number;
  notaAvaliacao?: number;
  dataUltimaAtualizacao: string;
  consentimentoLGPD: boolean;
  dataConsentimento?: string;
  observacoes?: string;
  etapaAtual: string;
  proximoPasso?: string;
}

export interface ConsentimentoLGPD {
  id: string;
  candidatoId: string;
  candidatoNome: string;
  email: string;
  dataConsentimento: string;
  finalidades: string[];
  ipOrigem: string;
  userAgent: string;
  ativo: boolean;
  dataRevogacao?: string;
}

export interface LogTratamento {
  id: string;
  timestamp: string;
  candidatoId: string;
  candidatoNome: string;
  acao: 'acesso' | 'modificacao' | 'exclusao' | 'exportacao' | 'consentimento' | 'revogacao';
  usuario: string;
  detalhes: string;
  ipOrigem: string;
}

export interface Agendamento {
  id: string;
  candidatoId: string;
  candidatoNome: string;
  vagaId: string;
  vagaTitulo: string;
  tipo: 'triagem' | 'tecnica' | 'comportamental' | 'final';
  data: string;
  horario: string;
  duracao: number; // minutos
  entrevistador: string;
  status: 'agendado' | 'confirmado' | 'realizado' | 'cancelado' | 'remarcado';
  linkVideoconferencia?: string;
  observacoes?: string;
}

export interface Avaliacao {
  id: string;
  candidatoId: string;
  candidatoNome: string;
  vagaId: string;
  tipo: 'teste-tecnico' | 'teste-logica' | 'teste-ingles' | 'teste-personalidade' | 'video-entrevista';
  status: 'pendente' | 'em-andamento' | 'concluido' | 'expirado';
  dataEnvio: string;
  dataLimite: string;
  dataConclusao?: string;
  nota?: number;
  linkAvaliacao: string;
  observacoes?: string;
}

export interface OnboardingTask {
  id: string;
  titulo: string;
  descricao: string;
  categoria: 'documentacao' | 'treinamento' | 'setup' | 'integracao';
  status: 'pendente' | 'em-andamento' | 'concluida';
  prazo: string;
  responsavel: string;
  obrigatoria: boolean;
}

export interface NovoContratado {
  id: string;
  candidatoId: string;
  nome: string;
  email: string;
  cargo: string;
  departamento: string;
  dataInicio: string;
  gestor: string;
  status: 'pre-admissao' | 'em-onboarding' | 'concluido';
  progresso: number; // 0-100
  tasks: OnboardingTask[];
}

export interface ChatMessage {
  id: string;
  tipo: 'bot' | 'user';
  mensagem: string;
  timestamp: string;
  opcoes?: string[];
  metadata?: any;
}

export interface ChatSession {
  id: string;
  candidatoNome?: string;
  candidatoEmail?: string;
  canal: 'web' | 'whatsapp' | 'telegram';
  status: 'ativo' | 'finalizado';
  dataInicio: string;
  dataFim?: string;
  mensagens: ChatMessage[];
  contexto: {
    etapa?: string;
    vagaInteresse?: string;
    consentimentoColetado?: boolean;
  };
}
