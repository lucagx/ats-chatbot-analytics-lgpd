import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

export function Timeline() {
  const phases = [
    {
      phase: 'Fase 1',
      title: 'Levantamento e Análise',
      duration: 'Mês 1-2',
      status: 'completed',
      activities: [
        'Mapeamento do processo AS-IS',
        'Entrevistas com stakeholders (RH, TI, Jurídico)',
        'Análise de requisitos funcionais e não-funcionais',
        'Benchmarking de mercado',
        'Identificação de pontos críticos LGPD'
      ],
      deliverables: [
        'Diagrama BPMN AS-IS',
        'Documento de requisitos',
        'Análise de gaps'
      ]
    },
    {
      phase: 'Fase 2',
      title: 'Desenho da Solução',
      duration: 'Mês 3-4',
      status: 'completed',
      activities: [
        'Modelagem do processo TO-BE',
        'Definição de arquitetura de sistemas (C4)',
        'Especificação de integrações',
        'Desenho de fluxos de chatbot',
        'Definição de métricas e KPIs',
        'Políticas de privacidade e retenção'
      ],
      deliverables: [
        'Diagrama BPMN TO-BE',
        'Arquitetura C4 (níveis 1 e 2)',
        'Especificação técnica',
        'Matriz de conformidade LGPD'
      ]
    },
    {
      phase: 'Fase 3',
      title: 'Prototipagem',
      duration: 'Mês 5-7',
      status: 'completed',
      activities: [
        'Desenvolvimento de protótipo funcional',
        'Configuração do ATS core',
        'Implementação do chatbot omnicanal',
        'Integração com parsing de CVs',
        'Criação de dashboards analíticos',
        'Geração de dados simulados'
      ],
      deliverables: [
        'Protótipo navegável',
        'Base de dados mock',
        'Documentação técnica'
      ]
    },
    {
      phase: 'Fase 4',
      title: 'Validação e Testes',
      duration: 'Mês 8',
      status: 'completed',
      activities: [
        'Testes de usabilidade com equipe RH',
        'Avaliação heurística de interfaces',
        'Simulação de cenários end-to-end',
        'Validação de conformidade LGPD',
        'Análise de performance',
        'Coleta de feedback dos stakeholders'
      ],
      deliverables: [
        'Relatório de testes',
        'Lista de ajustes',
        'Certificado de conformidade'
      ]
    },
    {
      phase: 'Fase 5',
      title: 'Análise de Resultados',
      duration: 'Mês 9',
      status: 'completed',
      activities: [
        'Consolidação de métricas comparativas',
        'Análise de impacto (tempo, custo, qualidade)',
        'Documentação de lições aprendidas',
        'Preparação de material de apresentação',
        'Elaboração do artigo científico'
      ],
      deliverables: [
        'Tabelas comparativas',
        'Gráficos de resultados',
        'Apresentação final',
        'Artigo para publicação'
      ]
    },
    {
      phase: 'Fase 6',
      title: 'Próximos Passos (Futuro)',
      duration: 'Mês 10+',
      status: 'planned',
      activities: [
        'Integração com sistemas de folha de pagamento',
        'Implementação de verificação de antecedentes',
        'Experimentos A/B controlados',
        'Auditoria algorítmica de fairness',
        'Extensão para métricas de onboarding (90 dias)',
        'Pilot em ambiente de produção'
      ],
      deliverables: [
        'Roadmap de evolução',
        'Plano de implementação piloto',
        'Proposta de pesquisa continuada'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-600" />;
      case 'planned':
        return <Clock className="w-6 h-6 text-slate-400" />;
      default:
        return <Circle className="w-6 h-6 text-blue-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <Badge className="tag tag-green">
            Concluído
          </Badge>
        );
      case 'planned':
        return (
          <Badge className="tag tag-gray">
            Planejado
          </Badge>
        );
      default:
        return (
          <Badge className="tag tag-blue">
            Em Andamento
          </Badge>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Linha do Tempo do Projeto</CardTitle>
        <CardDescription>
          Cronologia das fases de desenvolvimento e validação do modelo integrado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-600 mb-1">Fases Concluídas</div>
              <div className="text-2xl text-green-900">5 / 6</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-600 mb-1">Duração Total</div>
              <div className="text-2xl text-blue-900">9 meses</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-purple-600 mb-1">Entregáveis</div>
              <div className="text-2xl text-purple-900">15+</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {phases.map((item, index) => (
                <div key={index} className="relative pl-20">
                  {/* Icon */}
                  <div className="absolute left-5 top-0 bg-white">
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content Card */}
                  <div className={`bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
                    item.status === 'completed' ? 'border-green-200' :
                    item.status === 'planned' ? 'border-slate-200' :
                    'border-blue-200'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <Badge className="tag tag-gray">{item.phase}</Badge>
                          {getStatusBadge(item.status)}
                        </div>
                        <h3 className="text-slate-900 text-lg mt-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm mt-1">{item.duration}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {/* Activities */}
                      <div>
                        <h4 className="text-slate-900 mb-2">Atividades</h4>
                        <ul className="space-y-1">
                          {item.activities.map((activity, i) => (
                            <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-slate-900 mb-2">Entregáveis</h4>
                        <div className="space-y-2">
                          {item.deliverables.map((deliverable, i) => (
                            <div key={i} className={`rounded-lg p-2 text-sm ${
                              item.status === 'completed' ? 'bg-green-50 text-green-900 border border-green-200' :
                              item.status === 'planned' ? 'bg-slate-50 text-slate-700 border border-slate-200' :
                              'bg-blue-50 text-blue-900 border border-blue-200'
                            }`}>
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6 mt-8">
            <h3 className="text-blue-900 mb-4">Principais Marcos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="text-blue-600 mb-1">Mês 2</div>
                <div className="text-slate-900">Requisitos Aprovados</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="text-blue-600 mb-1">Mês 4</div>
                <div className="text-slate-900">Arquitetura Definida</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="text-blue-600 mb-1">Mês 7</div>
                <div className="text-slate-900">Protótipo Funcional</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="text-blue-600 mb-1">Mês 9</div>
                <div className="text-slate-900">Validação Completa</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
