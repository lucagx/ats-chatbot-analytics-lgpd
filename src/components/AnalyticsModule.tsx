import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Users, Clock, Target, Award } from 'lucide-react';
import { mockCandidatos, mockVagas } from '../lib/mockData';
import { useState } from 'react';

export function AnalyticsModule() {
  // Índice ativo para destaque no funil
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Dados do funil
  const funnelData = [
    { etapa: 'Aplicações', quantidade: mockCandidatos.length, percentual: 100 },
    { etapa: 'Triagem', quantidade: mockCandidatos.filter(c => ['triagem', 'avaliacao', 'entrevista', 'aprovado'].includes(c.status)).length, percentual: 83 },
    { etapa: 'Avaliação', quantidade: mockCandidatos.filter(c => ['avaliacao', 'entrevista', 'aprovado'].includes(c.status)).length, percentual: 50 },
    { etapa: 'Entrevista', quantidade: mockCandidatos.filter(c => ['entrevista', 'aprovado'].includes(c.status)).length, percentual: 33 },
    { etapa: 'Aprovados', quantidade: mockCandidatos.filter(c => c.status === 'aprovado').length, percentual: 17 },
  ];

  // Tempo médio por etapa
  const timeByStageData = [
    { etapa: 'Triagem', dias: 2, meta: 3 },
    { etapa: 'Avaliação', dias: 5, meta: 7 },
    { etapa: 'Entrevista', dias: 7, meta: 10 },
    { etapa: 'Proposta', dias: 4, meta: 5 },
  ];

  // Fontes de recrutamento
  const sourceData = [
    { fonte: 'LinkedIn', candidatos: mockCandidatos.filter(c => c.fonte === 'linkedin').length, conversao: 25 },
    { fonte: 'Site', candidatos: mockCandidatos.filter(c => c.fonte === 'site').length, conversao: 33 },
    { fonte: 'Indicação', candidatos: mockCandidatos.filter(c => c.fonte === 'indicacao').length, conversao: 50 },
    { fonte: 'Chatbot', candidatos: mockCandidatos.filter(c => c.fonte === 'chatbot').length, conversao: 20 },
    { fonte: 'Indeed', candidatos: mockCandidatos.filter(c => c.fonte === 'Indeed').length, conversao: 15 },
  ];

  // Taxa de conversão por vaga
  const conversionByJobData = mockVagas.filter(v => v.status === 'aberta').map(vaga => {
    const totalCandidatos = mockCandidatos.filter(c => c.vagaId === vaga.id).length;
    const aprovados = mockCandidatos.filter(c => c.vagaId === vaga.id && c.status === 'aprovado').length;
    const taxaConversao = totalCandidatos > 0 ? (aprovados / totalCandidatos) * 100 : 0;

    return {
      vaga: vaga.titulo.substring(0, 20) + '...',
      taxa: Number(taxaConversao.toFixed(1)),
      candidatos: totalCandidatos
    };
  });

  // Tendência mensal
  const monthlyTrendData = [
    { mes: 'Jan', candidaturas: 42, aprovacoes: 8 },
    { mes: 'Fev', candidaturas: 38, aprovacoes: 6 },
    { mes: 'Mar', candidaturas: 52, aprovacoes: 10 },
    { mes: 'Abr', candidaturas: 45, aprovacoes: 9 },
    { mes: 'Mai', candidaturas: 58, aprovacoes: 12 },
    { mes: 'Jun', candidaturas: 61, aprovacoes: 11 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-foreground mb-2">Analytics de Recrutamento</h1>
        <p className="text-muted-foreground">Métricas e indicadores do processo seletivo</p>
      </div>

      {/* KPIs (simplificados, removendo wrappers duplicados e cores fortes em claro) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted border border-border">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl text-foreground font-semibold">{mockCandidatos.length}</p>
              <p className="text-sm text-muted-foreground">Total de Candidatos</p>
              <div className="flex items-center gap-1 text-xs text-green-700 dark:text-green-300 mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+12% vs mês anterior</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted border border-border">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl text-foreground font-semibold">{((mockCandidatos.filter(c => c.status === 'aprovado').length / mockCandidatos.length) * 100).toFixed(1)}%</p>
              <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
              <div className="flex items-center gap-1 text-xs text-green-700 dark:text-green-300 mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+1.2% vs mês anterior</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted border border-border">
              <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl text-foreground font-semibold">18</p>
              <p className="text-sm text-muted-foreground">Dias p/ Contratar</p>
              <div className="flex items-center gap-1 text-xs text-red-700 dark:text-red-300 mt-1">
                <TrendingDown className="w-3 h-3" />
                <span>-3 dias vs mês anterior</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted border border-border">
              <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl text-foreground font-semibold">87</p>
              <p className="text-sm text-muted-foreground">Nota Média</p>
              <div className="flex items-center gap-1 text-xs text-green-700 dark:text-green-300 mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+2 pts vs mês anterior</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Tabs defaultValue="funil" className="space-y-6">
        <TabsList className="gap-4">
          <TabsTrigger value="funil" className='hover:bg-gray-400/30 cursor-pointer p-5'>Funil de Conversão</TabsTrigger>
          <TabsTrigger value="tempo" className='hover:bg-gray-400/30 cursor-pointer p-5'>Tempo por Etapa</TabsTrigger>
          <TabsTrigger value="fontes" className='hover:bg-gray-400/30 cursor-pointer p-5'>Fontes de Recrutamento</TabsTrigger>
          <TabsTrigger value="tendencia" className='hover:bg-gray-400/30 cursor-pointer p-5'>Tendência</TabsTrigger>
        </TabsList>

        <TabsContent value="funil" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Funil de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={funnelData}
                  layout="vertical"
                  onMouseMove={(state: any) => {
                    if (state && typeof state.activeTooltipIndex === 'number') {
                      setActiveIndex(state.activeTooltipIndex);
                    }
                  }}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="etapa" type="category" width={100} />
                  <Tooltip />
                  <Legend />
                  {/* Barra principal com highlight desenhado atrás via CustomShape */}
                  <Bar
                    dataKey="quantidade"
                    name="Candidatos"
                    radius={[4, 4, 4, 4]}
                    shape={(props: any) => {
                      const { x, y, width, height, index } = props;
                      return (
                        <g>
                          {index === activeIndex && (
                            <rect
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              rx={4}
                              fill="rgba(59,130,246,0.25)"
                            />
                          )}
                          <rect
                            x={x}
                            y={y}
                            width={width}
                            height={height}
                            rx={4}
                            fill="#3b82f6"
                          />
                        </g>
                      );
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-5 gap-4 mt-6">
                {funnelData.map((item, index) => (
                  <div key={index} className="text-center rounded-lg p-3 transition-colors hover:bg-accent/20">
                    <p className="text-sm text-gray-600 mb-2">{item.etapa}</p>
                    <p className="text-2xl text-gray-900 mb-1">{item.quantidade}</p>
                    <p className="text-sm text-gray-500">{item.percentual}%</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tempo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tempo Médio por Etapa (dias)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={timeByStageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="etapa" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="dias" fill="#3b82f6" name="Tempo Real" />
                  <Bar dataKey="meta" fill="#e5e7eb" name="Meta" />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-6 p-4 bg-card border border-border rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-300">
                  <strong>Insight:</strong> Todas as etapas estão dentro da meta estabelecida. Tempo médio total de contratação 18 dias (meta 21).
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fontes" className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Fonte</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sourceData}
                      dataKey="candidatos"
                      nameKey="fonte"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Taxa de Conversão por Fonte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sourceData.map((source, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">{source.fonte}</span>
                        <span className="text-sm text-gray-900">{source.conversao}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${source.conversao}%`,
                            backgroundColor: COLORS[index % COLORS.length]
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Insight:</strong> Indicações lideram a conversão (50%), seguidas por site (33%).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tendencia" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tendência Mensal</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="candidaturas"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Candidaturas"
                  />
                  <Line
                    type="monotone"
                    dataKey="aprovacoes"
                    stroke="#10b981"
                    strokeWidth={2}
                    name="Aprovações"
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Média de Candidaturas</p>
                  <p className="text-2xl text-foreground font-semibold">49.3/mês</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Média de Aprovações</p>
                  <p className="text-2xl text-foreground font-semibold">9.3/mês</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Taxa Conversão Média</p>
                  <p className="text-2xl text-foreground font-semibold">18.9%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Performance por Vaga */}
      <Card>
        <CardHeader>
          <CardTitle>Performance por Vaga</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Vaga</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Candidatos</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Taxa Conversão</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {conversionByJobData.map((job, index) => (
                  <tr key={index} className="hover:bg-muted transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{job.vaga}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{job.vaga}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{job.candidatos}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[100px]">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[100px]">
                            <div
                              className="h-full bg-blue-500"
                              style={{ width: `${job.taxa}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-900 w-12">{job.taxa}%</span>
                          <span className="text-sm text-foreground w-12">{job.taxa}%</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs border ${job.taxa >= 20
                        ? 'tag tag-green'
                        : job.taxa >= 10
                          ? 'tag tag-yellow'
                          : 'tag tag-red'
                        }`}>
                        {job.taxa >= 20 ? 'Excelente' : job.taxa >= 10 ? 'Bom' : 'Atenção'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
