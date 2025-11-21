import { ArrowUpRight, ArrowDownRight, Users, Briefcase, Clock, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { mockCandidatos, mockVagas, mockAgendamentos } from '../lib/mockData';

interface DashboardProps {
  onNavigate: (module: 'dashboard' | 'vagas' | 'candidatos' | 'chatbot' | 'analytics' | 'lgpd' | 'agendamento' | 'avaliacoes' | 'onboarding') => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  // Cálculos de métricas
  const vagasAbertas = mockVagas.filter(v => v.status === 'aberta').length;
  const totalCandidatos = mockCandidatos.length;
  const candidatosAtivos = mockCandidatos.filter(c => 
    c.status !== 'reprovado' && c.status !== 'contratado'
  ).length;
  const agendamentosHoje = mockAgendamentos.filter(a => 
    a.data === new Date().toISOString().split('T')[0] && a.status === 'agendado'
  ).length;

  const taxaConversao = ((mockCandidatos.filter(c => c.status === 'aprovado' || c.status === 'contratado').length / totalCandidatos) * 100).toFixed(1);
  const tempoMedioContratacao = 18; // dias

  const stats = [
    {
      title: 'Vagas Abertas',
      value: vagasAbertas,
      change: '+2',
      trend: 'up' as const,
      icon: Briefcase,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-muted',
      onClick: () => onNavigate('vagas')
    },
    {
      title: 'Candidatos Ativos',
      value: candidatosAtivos,
      change: '+12',
      trend: 'up' as const,
      icon: Users,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-muted',
      onClick: () => onNavigate('candidatos')
    },
    {
      title: 'Tempo Médio (dias)',
      value: tempoMedioContratacao,
      change: '-3',
      trend: 'down' as const,
      icon: Clock,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-muted',
      onClick: () => onNavigate('analytics')
    },
    {
      title: 'Taxa de Conversão',
      value: `${taxaConversao}%`,
      change: '+1.2%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-muted',
      onClick: () => onNavigate('analytics')
    }
  ];

  const candidatosPorStatus = {
    novo: mockCandidatos.filter(c => c.status === 'novo').length,
    triagem: mockCandidatos.filter(c => c.status === 'triagem').length,
    avaliacao: mockCandidatos.filter(c => c.status === 'avaliacao').length,
    entrevista: mockCandidatos.filter(c => c.status === 'entrevista').length,
    aprovado: mockCandidatos.filter(c => c.status === 'aprovado').length,
  };

  const proximosAgendamentos = mockAgendamentos
    .filter(a => a.status === 'agendado' || a.status === 'confirmado')
    .slice(0, 5);

  const vagasPrioritarias = mockVagas
    .filter(v => v.prioridade === 'alta' && v.status === 'aberta')
    .slice(0, 3);

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral do processo de recrutamento</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;
          
          return (
            <Card 
              key={stat.title} 
              className="cursor-pointer rounded-lg transition-colors transition-shadow transition-transform duration-300 ease-in-out hover:bg-accent dark:hover:bg-accent/60 hover:border-blue-500 hover:shadow-md hover:-translate-y-1"
              onClick={stat.onClick}
            >
              <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl text-foreground font-bold mb-2">{stat.value}</p>
                <div className="flex items-center gap-1 text-sm text-foreground">
                  <TrendIcon className={`w-4 h-4 ${stat.trend === 'up' ? 'text-emerald-600 dark:text-emerald-300' : 'text-red-600 dark:text-red-300'}`} />
                  <span className="px-1 rounded bg-accent text-accent-foreground/90">{stat.change}</span>
                </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Funil de Candidatos */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Funil de Candidatos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(candidatosPorStatus).map(([status, count]) => {
                const labels: Record<string, string> = {
                  novo: 'Novos',
                  triagem: 'Em Triagem',
                  avaliacao: 'Em Avaliação',
                  entrevista: 'Em Entrevista',
                  aprovado: 'Aprovados'
                };
                
                const statusColors: Record<string, string> = {
                  novo: 'var(--status-novo)',
                  triagem: 'var(--status-triagem)',
                  avaliacao: 'var(--status-avaliacao)',
                  entrevista: 'var(--status-entrevista)',
                  aprovado: 'var(--status-aprovado)'
                };
                
                const percentage = (count / totalCandidatos) * 100;
                
                return (
                  <div key={status}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{labels[status]}</span>
                      <span className="text-sm text-card-foreground font-medium">{count} candidatos</span>
                    </div>
                    <div className="h-3 bg-gray-400/30 rounded-full overflow-hidden ">
                      <div
                        className="h-full transition-all duration-500"
                        style={{ width: `${percentage}%`, backgroundColor: statusColors[status] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Vagas Prioritárias */}
        <Card>
          <CardHeader>
            <CardTitle>Vagas Prioritárias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vagasPrioritarias.map((vaga) => (
                <div 
                  key={vaga.id}
                  className="p-4 border-2 border-border rounded-lg hover:bg-accent dark:hover:bg-accent/60 hover:border-blue-500 hover:shadow-xl cursor-pointer transition-colors"
                  onClick={() => onNavigate('vagas')}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm text-card-foreground font-medium">{vaga.titulo}</h4>
                    <span className="px-2 py-1 text-xs rounded font-medium border border-border bg-accent text-accent-foreground/90">
                      Alta
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{vaga.departamento}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    <span>{vaga.candidatosCount} candidatos</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Próximos Agendamentos */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Próximos Agendamentos</CardTitle>
            <button 
              onClick={() => onNavigate('agendamento')}
              className="text-sm text-primary hover:opacity-80 transition-opacity"
            >
              Ver todos
            </button>
          </div>
        </CardHeader>
        <CardContent>
          {proximosAgendamentos.length > 0 ? (
            <div className="space-y-3">
              {proximosAgendamentos.map((agendamento) => (
                <div 
                  key={agendamento.id}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg duration-300 transition-colors transition-shadow transition-transform hover:bg-accent dark:hover:bg-accent/60 hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-card-foreground font-medium truncate">{agendamento.candidatoNome}</p>
                    <p className="text-xs text-muted-foreground">{agendamento.vagaTitulo}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm text-card-foreground">{agendamento.data}</p>
                    <p className="text-xs text-muted-foreground">{agendamento.horario}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-accent text-accent-foreground/90">
                      {agendamento.status === 'confirmado' ? 'Confirmado' : 'Agendado'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-muted" />
              <p>Nenhum agendamento próximo</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Alertas e Ações Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ações Necessárias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-card text-card-foreground border rounded-lg border-border border-l-4 transition-colors transition-shadow transition-transform duration-300 hover:bg-accent dark:hover:bg-accent/60 hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">3 avaliações pendentes de correção</p>
                  <button 
                    onClick={() => onNavigate('avaliacoes')}
                    className="text-xs text-muted-foreground underline transition-all mt-1 cursor-pointer"
                  >
                    Revisar avaliações
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card text-card-foreground border rounded-lg border-border border-l-4 transition-colors transition-shadow transition-transform duration-300 hover:bg-accent dark:hover:bg-accent/60 hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">5 candidatos aguardando feedback</p>
                  <button 
                    onClick={() => onNavigate('candidatos')}
                    className="text-xs text-muted-foreground underline transition-all mt-1 cursor-pointer"
                  >
                    Enviar feedback
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conformidade LGPD</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Consentimentos Ativos</span>
                <span className="text-sm text-foreground font-medium">100%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-full" style={{ backgroundColor: 'var(--status-aprovado)' }} />
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-muted-foreground">Logs de Auditoria</span>
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
              </div>
              <button 
                onClick={() => onNavigate('lgpd')}
                className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent dark:hover:bg-accent/60 hover:border-blue-500 hover:shadow-xl cursor-pointer transition-colors text-sm font-medium border border-border"
              >
                Ver Painel LGPD
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}