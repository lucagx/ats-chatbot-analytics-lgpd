import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// Using unified .tag classes instead of Badge
import { Check, X, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';

export function ComparativeTable() {
  const metrics = [
    {
      category: 'Tempo de Processo',
      before: '30 dias',
      after: '18 dias',
      improvement: '-40%',
      trend: 'down',
      icon: '⏱️'
    },
    {
      category: 'Triagem Manual',
      before: '8h por vaga',
      after: '45min por vaga',
      improvement: '-90%',
      trend: 'down',
      icon: '📋'
    },
    {
      category: 'Taxa de Resposta',
      before: '45%',
      after: '82%',
      improvement: '+82%',
      trend: 'up',
      icon: '💬'
    },
    {
      category: 'Candidatos por Recrutador',
      before: '25/mês',
      after: '65/mês',
      improvement: '+160%',
      trend: 'up',
      icon: '👥'
    },
    {
      category: 'Custo por Contratação',
      before: 'R$ 4.200',
      after: 'R$ 2.100',
      improvement: '-50%',
      trend: 'down',
      icon: '💰'
    },
    {
      category: 'No-show em Entrevistas',
      before: '28%',
      after: '8%',
      improvement: '-71%',
      trend: 'down',
      icon: '📅'
    },
    {
      category: 'Qualidade de Contratação (90 dias)',
      before: '68%',
      after: '85%',
      improvement: '+25%',
      trend: 'up',
      icon: '⭐'
    },
    {
      category: 'Satisfação do Candidato (NPS)',
      before: '32',
      after: '67',
      improvement: '+109%',
      trend: 'up',
      icon: '😊'
    }
  ];

  const features = [
    {
      feature: 'Triagem Automática com IA',
      before: false,
      after: true,
      impact: 'Alto'
    },
    {
      feature: 'Chatbot Omnicanal',
      before: false,
      after: true,
      impact: 'Alto'
    },
    {
      feature: 'Vídeo Entrevista Assíncrona',
      before: false,
      after: true,
      impact: 'Médio'
    },
    {
      feature: 'Agendamento Automático',
      before: false,
      after: true,
      impact: 'Médio'
    },
    {
      feature: 'Dashboard Analytics',
      before: false,
      after: true,
      impact: 'Alto'
    },
    {
      feature: 'Conformidade LGPD Automatizada',
      before: false,
      after: true,
      impact: 'Crítico'
    },
    {
      feature: 'Assinatura Eletrônica',
      before: false,
      after: true,
      impact: 'Médio'
    },
    {
      feature: 'Onboarding Digital',
      before: false,
      after: true,
      impact: 'Alto'
    },
    {
      feature: 'Rastreabilidade Completa',
      before: false,
      after: true,
      impact: 'Alto'
    },
    {
      feature: 'Parsing de Currículos',
      before: false,
      after: true,
      impact: 'Médio'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Comparativa - Antes vs Depois</CardTitle>
          <CardDescription>
            Dados simulados baseados em benchmarks de mercado (LinkedIn Talent Solutions, 2023)
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Metrics Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Métricas de Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 text-slate-900">Métrica</th>
                  <th className="text-center p-4 text-slate-900">Processo Atual (AS-IS)</th>
                  <th className="text-center p-4 text-slate-900"></th>
                  <th className="text-center p-4 text-slate-900">Processo Proposto (TO-BE)</th>
                  <th className="text-center p-4 text-slate-900">Melhoria</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((metric, i) => (
                  <tr key={i} className="border-b hover:bg-accent dark:hover:bg-accent/60 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{metric.icon}</span>
                        <span className="text-foreground font-medium">{metric.category}</span>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-block py-2 px-4 rounded-lg bg-muted border border-border">
                        <span className="text-foreground">{metric.before}</span>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-block py-2 px-4 rounded-lg bg-card border border-border">
                        <span className="text-foreground">{metric.after}</span>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="flex items-center justify-center gap-2">
                        {metric.trend === 'down' ? (
                          <TrendingDown className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        )}
                        <span className="tag tag-green">{metric.improvement}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Features Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades e Recursos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 text-slate-900">Funcionalidade</th>
                  <th className="text-center p-4 text-slate-900">AS-IS</th>
                  <th className="text-center p-4 text-slate-900">TO-BE</th>
                  <th className="text-center p-4 text-slate-900">Impacto</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                    <td className="p-4 text-slate-900">{item.feature}</td>
                    <td className="text-center p-4">
                      {item.before ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full tag tag-green">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full tag tag-red">
                          <X className="w-4 h-4" />
                        </div>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {item.after ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full tag tag-green">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full tag tag-red">
                          <X className="w-4 h-4" />
                        </div>
                      )}
                    </td>
                    <td className="text-center p-4">
                      <span className={`tag tag-${
                        item.impact === 'Crítico' ? 'red' :
                        item.impact === 'Alto' ? 'blue' : 'purple'
                      }`}>{item.impact}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card className="bg-card border">
        <CardHeader>
          <CardTitle className="text-foreground">Resumo do Impacto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="text-blue-600 mb-2">Eficiência Operacional</div>
              <div className="text-2xl text-blue-900 mb-1">+156%</div>
              <p className="text-slate-600 text-sm">Aumento na capacidade de processamento por recrutador</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="text-green-600 mb-2">Redução de Custos</div>
              <div className="text-2xl text-green-900 mb-1">-50%</div>
              <p className="text-slate-600 text-sm">Economia no custo total por contratação</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="text-purple-600 mb-2">Experiência do Candidato</div>
              <div className="text-2xl text-purple-900 mb-1">+109%</div>
              <p className="text-slate-600 text-sm">Melhoria no Net Promoter Score (NPS)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
