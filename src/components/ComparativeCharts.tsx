import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export function ComparativeCharts() {
  const timeComparisonData = [
    { phase: 'Divulgação', asis: 3, tobe: 1 },
    { phase: 'Triagem', asis: 8, tobe: 1.5 },
    { phase: 'Entrevista Inicial', asis: 5, tobe: 3 },
    { phase: 'Entrevista Técnica', asis: 6, tobe: 5 },
    { phase: 'Proposta', asis: 4, tobe: 3 },
    { phase: 'Admissão', asis: 4, tobe: 2.5 },
  ];

  const costComparisonData = [
    { metric: 'Triagem Manual', asis: 1200, tobe: 120 },
    { metric: 'Comunicação', asis: 800, tobe: 150 },
    { metric: 'Agendamento', asis: 400, tobe: 50 },
    { metric: 'Documentação', asis: 600, tobe: 100 },
    { metric: 'Onboarding', asis: 1200, tobe: 200 },
  ];

  const qualityMetricsData = [
    { metric: 'Taxa de Conversão (%)', asis: 8.5, tobe: 12.5 },
    { metric: 'Qualidade 90d (%)', asis: 68, tobe: 85 },
    { metric: 'NPS Candidato', asis: 32, tobe: 67 },
    { metric: 'Taxa de Aceitação (%)', asis: 75, tobe: 88 },
  ];

  const productivityData = [
    { month: 'Jan', asis: 18, tobe: 48 },
    { month: 'Fev', asis: 22, tobe: 52 },
    { month: 'Mar', asis: 20, tobe: 58 },
    { month: 'Abr', asis: 25, tobe: 62 },
    { month: 'Mai', asis: 23, tobe: 65 },
    { month: 'Jun', asis: 24, tobe: 68 },
  ];

  const channelDistributionData = [
    { name: 'LinkedIn', value: 38, color: '#0A66C2' },
    { name: 'Indicação', value: 28, color: '#10B981' },
    { name: 'Site Carreiras', value: 22, color: '#6366F1' },
    { name: 'Indeed', value: 12, color: '#F59E0B' },
  ];

  const automationImpactData = [
    { area: 'Triagem de CVs', before: 480, after: 45 },
    { area: 'Agendamentos', before: 240, after: 30 },
    { area: 'Comunicação', before: 360, after: 60 },
    { area: 'Coleta de Docs', before: 180, after: 20 },
    { area: 'Reports', before: 120, after: 10 },
  ];

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Quantitativa - Gráficos Comparativos</CardTitle>
          <CardDescription>
            Visualização de métricas: Antes (AS-IS) vs Depois (TO-BE)
            <br />
            <span className="text-xs text-slate-500">Fonte: Dados simulados baseados em benchmarks de mercado (LinkedIn Talent Solutions, 2023)</span>
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Time Reduction Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Redução de Tempo por Fase (em dias)</CardTitle>
          <CardDescription>
            Comparação do tempo médio gasto em cada etapa do processo seletivo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={timeComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="phase" />
              <YAxis label={{ value: 'Dias', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="asis" name="Processo Atual (AS-IS)" fill="#EF4444" />
              <Bar dataKey="tobe" name="Processo Proposto (TO-BE)" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-card border rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-slate-600 text-sm">Total AS-IS</div>
                <div className="text-2xl text-red-600">30 dias</div>
              </div>
              <div>
                <div className="text-slate-600 text-sm">Total TO-BE</div>
                <div className="text-2xl text-green-600">16 dias</div>
              </div>
              <div>
                <div className="text-slate-600 text-sm">Redução</div>
                <div className="text-2xl text-green-600">-47%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Custo Operacional por Atividade (R$ por vaga)</CardTitle>
          <CardDescription>
            Comparação dos custos de mão de obra em cada atividade do processo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={costComparisonData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" label={{ value: 'Reais (R$)', position: 'insideBottom', offset: -5 }} />
              <YAxis dataKey="metric" type="category" width={120} />
              <Tooltip />
              <Legend />
              <Bar dataKey="asis" name="AS-IS" fill="#F59E0B" />
              <Bar dataKey="tobe" name="TO-BE" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-card border rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-slate-600 text-sm">Custo Total AS-IS</div>
                <div className="text-2xl text-amber-600">R$ 4.200</div>
              </div>
              <div>
                <div className="text-slate-600 text-sm">Custo Total TO-BE</div>
                <div className="text-2xl text-blue-600">R$ 620</div>
              </div>
              <div>
                <div className="text-slate-600 text-sm">Economia</div>
                <div className="text-2xl text-green-600">R$ 3.580</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quality Metrics Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Métricas de Qualidade e Experiência</CardTitle>
          <CardDescription>
            Indicadores de efetividade do processo e satisfação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={qualityMetricsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="asis" name="AS-IS" fill="#94A3B8" />
              <Bar dataKey="tobe" name="TO-BE" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border rounded-lg p-4">
              <div className="text-purple-900 mb-2">💼 Melhoria na Qualidade</div>
              <p className="text-purple-700 text-sm">
                Taxa de permanência após 90 dias aumentou de 68% para 85% (+25%)
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <div className="text-purple-900 mb-2">😊 Experiência do Candidato</div>
              <p className="text-purple-700 text-sm">
                NPS saltou de 32 para 67 pontos (+109%), indicando maior satisfação
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Productivity Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Evolução da Produtividade (Contratações por Recrutador/Mês)</CardTitle>
          <CardDescription>
            Tendência de volume processado ao longo de 6 meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Contratações', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="asis" 
                name="Processo Atual" 
                stroke="#EF4444" 
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="tobe" 
                name="Processo Proposto" 
                stroke="#10B981" 
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-card border rounded-lg p-4">
            <div className="text-green-900 mb-2">📈 Ganho de Escalabilidade</div>
            <p className="text-green-800 text-sm">
              Com automação, cada recrutador passou a processar média de 65 contratações/mês vs 22 no modelo anterior (+195%)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Channel Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Fontes de Talentos</CardTitle>
            <CardDescription>
              Origem dos candidatos contratados no modelo TO-BE
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={channelDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {channelDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {channelDistributionData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                    <span className="text-slate-700 text-sm">{item.name}</span>
                  </div>
                  <span className="text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Impacto da Automação (horas/mês)</CardTitle>
            <CardDescription>
              Tempo economizado por área automatizada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={automationImpactData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="area" type="category" width={110} />
                <Tooltip />
                <Legend />
                <Bar dataKey="before" name="Antes" fill="#DC2626" />
                <Bar dataKey="after" name="Depois" fill="#059669" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 bg-card border rounded-lg p-4 text-center">
              <div className="text-emerald-600 text-sm">Total de Horas Economizadas</div>
              <div className="text-3xl text-emerald-900 mt-1">1.275h/mês</div>
              <div className="text-emerald-700 text-sm mt-1">≈ -89% de esforço manual</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Insights */}
      <Card className="bg-card border">
        <CardHeader>
          <CardTitle className="text-indigo-900">Síntese dos Resultados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-lg p-4 shadow-sm border">
              <div className="text-blue-600 text-sm mb-1">⚡ Agilidade</div>
              <div className="text-2xl text-slate-900 mb-1">-47%</div>
              <p className="text-slate-600 text-xs">Tempo total de contratação</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-sm border">
              <div className="text-green-600 text-sm mb-1">💰 Economia</div>
              <div className="text-2xl text-slate-900 mb-1">-85%</div>
              <p className="text-slate-600 text-xs">Custo operacional por vaga</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-sm border">
              <div className="text-purple-600 text-sm mb-1">📊 Escalabilidade</div>
              <div className="text-2xl text-slate-900 mb-1">+195%</div>
              <p className="text-slate-600 text-xs">Vagas processadas/recrutador</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-sm border">
              <div className="text-amber-600 text-sm mb-1">⭐ Qualidade</div>
              <div className="text-2xl text-slate-900 mb-1">+25%</div>
              <p className="text-slate-600 text-xs">Taxa de retenção 90 dias</p>
            </div>
          </div>

          <div className="mt-6 bg-card border rounded-lg p-4">
            <h4 className="text-indigo-900 mb-3">Principais Conclusões</h4>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5">✓</span>
                <span>A automação integrada reduziu drasticamente handoffs e retrabalho, acelerando o processo em quase 50%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5">✓</span>
                <span>Triagem automática e chatbot liberaram 89% do tempo operacional, permitindo foco em atividades estratégicas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5">✓</span>
                <span>Comunicação estruturada e transparente dobrou a satisfação dos candidatos (NPS +109%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5">✓</span>
                <span>Analytics em tempo real permitiram identificar fontes de talentos de maior ROI e otimizar investimentos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5">✓</span>
                <span>Conformidade LGPD automatizada mitigou riscos regulatórios e facilitou auditorias</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
