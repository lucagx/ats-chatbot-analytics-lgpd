import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { MessageCircle, User, FileText, Calendar, CheckCircle2, Clock, Send } from 'lucide-react';

export function MockInterface() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Protótipo do Sistema Integrado</CardTitle>
          <CardDescription>
            Demonstração visual das principais interfaces do modelo proposto
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard RH</TabsTrigger>
          <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
          <TabsTrigger value="ats">ATS - Triagem</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Dashboard RH */}
        <TabsContent value="dashboard">
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <CardTitle className="text-slate-900">Dashboard - Processos Seletivos</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-card border rounded-lg p-4 shadow-sm">
                  <div className="text-slate-600 text-sm mb-1">Vagas Abertas</div>
                  <div className="text-2xl text-slate-900">24</div>
                  <div className="text-green-600 text-xs mt-1">↑ 12% vs mês anterior</div>
                </div>
                <div className="bg-card border rounded-lg p-4 shadow-sm">
                  <div className="text-slate-600 text-sm mb-1">Candidatos Ativos</div>
                  <div className="text-2xl text-slate-900">487</div>
                  <div className="text-blue-600 text-xs mt-1">Em diversas etapas</div>
                </div>
                <div className="bg-card border rounded-lg p-4 shadow-sm">
                  <div className="text-slate-600 text-sm mb-1">Tempo Médio</div>
                  <div className="text-2xl text-slate-900">18 dias</div>
                  <div className="text-green-600 text-xs mt-1">↓ 40% vs processo anterior</div>
                </div>
                <div className="bg-card border rounded-lg p-4 shadow-sm">
                  <div className="text-slate-600 text-sm mb-1">Taxa de Conversão</div>
                  <div className="text-2xl text-slate-900">12.5%</div>
                  <div className="text-green-600 text-xs mt-1">↑ 3.2% vs média</div>
                </div>
              </div>

              <div className="bg-card border rounded-lg">
                <div className="border-b p-4">
                  <h3 className="text-slate-900">Vagas em Andamento</h3>
                </div>
                <div className="divide-y">
                  {[
                    { title: 'Desenvolvedor Full Stack', candidates: 45, stage: 'Triagem Automática', color: 'blue' },
                    { title: 'Product Manager', candidates: 28, stage: 'Vídeo Entrevista', color: 'purple' },
                    { title: 'UX Designer', candidates: 32, stage: 'Entrevista Técnica', color: 'green' },
                    { title: 'Analista de Dados', candidates: 19, stage: 'Proposta', color: 'amber' },
                  ].map((vaga, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-muted transition-colors cursor-pointer">
                      <div className="flex-1">
                        <div className="text-foreground font-medium mb-1">{vaga.title}</div>
                        <div className="text-muted-foreground text-sm">{vaga.candidates} candidatos</div>
                      </div>
                      <Badge variant="outline" className={`tag tag-${vaga.color}`}> 
                        {vaga.stage}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Chatbot */}
        <TabsContent value="chatbot">
          <Card>
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
              <CardTitle className="text-slate-900">Chatbot Omnicanal - Candidato</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex h-[500px]">
                {/* Sidebar */}
                  <div className="w-1/3 border-r bg-card">
                  <div className="p-4 border-b bg-card">
                    <Input placeholder="Buscar conversas..." className="w-full" />
                  </div>
                  <div className="divide-y">
                    {[
                      { name: 'Ana Silva', lastMsg: 'Obrigada! Quando recebo...', time: '10:30', unread: 2 },
                      { name: 'Carlos Santos', lastMsg: 'Já enviei os documentos', time: '09:15', unread: 0 },
                      { name: 'Maria Oliveira', lastMsg: 'Qual o próximo passo?', time: 'Ontem', unread: 1 },
                    ].map((chat, i) => (
                      <div key={i} className={`p-4 hover:bg-card hover:border-l-4 hover:border-l-primary cursor-pointer transition-all ${i === 0 ? 'bg-card border-l-4 border-l-primary' : ''}`}>
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-foreground font-medium text-sm">{chat.name}</span>
                              <span className="text-muted-foreground text-xs">{chat.time}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-slate-600 text-sm truncate">{chat.lastMsg}</p>
                              {chat.unread > 0 && (
                                <Badge className="ml-2 bg-blue-600">{chat.unread}</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-card">
                  <div className="p-4 border-b bg-card">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-slate-900">Ana Silva</div>
                        <div className="text-slate-500 text-sm">Vaga: Desenvolvedor Full Stack</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-4 space-y-4 overflow-auto bg-card">
                    {/* Bot Message */}
                    <div className="flex gap-2">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-card rounded-lg rounded-tl-none p-3 shadow-sm max-w-xs">
                        <p className="text-slate-900 text-sm">Olá Ana! Sua candidatura para Desenvolvedor Full Stack foi aprovada na triagem. 🎉</p>
                        <span className="text-slate-500 text-xs mt-1 block">10:25</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-card rounded-lg rounded-tl-none p-3 shadow-sm max-w-xs">
                        <p className="text-slate-900 text-sm">Próxima etapa: Vídeo entrevista assíncrona. Você pode gravar quando preferir. Link: [app.exemplo.com/video]</p>
                        <span className="text-slate-500 text-xs mt-1 block">10:25</span>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-2 justify-end">
                      <div className="bg-blue-600 rounded-lg rounded-tr-none p-3 shadow-sm max-w-xs">
                        <p className="text-white text-sm">Obrigada! Quando recebo o resultado?</p>
                        <span className="text-blue-100 text-xs mt-1 block">10:30</span>
                      </div>
                    </div>

                    {/* Bot typing */}
                    <div className="flex gap-2">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-card rounded-lg rounded-tl-none p-3 shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t bg-card">
                    <div className="flex gap-2">
                      <Input placeholder="Digite sua mensagem..." className="flex-1" />
                      <Button size="icon">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ATS */}
        <TabsContent value="ats">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <CardTitle className="text-slate-900">ATS - Sistema de Triagem Automática</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-900">Desenvolvedor Full Stack - 45 Candidatos</h3>
                  <Badge className="bg-blue-600">Triagem em Andamento</Badge>
                </div>
                
                <div className="bg-card rounded-lg p-4 mb-4 border border-border">
                  <h4 className="text-slate-900 mb-3">Critérios Knockout Configurados</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Experiência com React', required: 'Sim', weight: 'Eliminatório' },
                      { label: 'Conhecimento em Node.js', required: 'Sim', weight: 'Eliminatório' },
                      { label: 'Inglês intermediário+', required: 'Sim', weight: 'Eliminatório' },
                      { label: 'Experiência com AWS', required: 'Desejável', weight: 'Pontuação +10' },
                    ].map((criterio, i) => (
                      <div key={i} className="flex items-center justify-between bg-card p-3 rounded border">
                        <span className="text-slate-900 text-sm">{criterio.label}</span>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="tag tag-blue">{criterio.required}</Badge>
                          <Badge variant="outline" className={criterio.weight.includes('Eliminatório') ? 'tag tag-red' : 'tag tag-green'}>
                            {criterio.weight}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border rounded-lg">
                  <div className="border-b p-4">
                    <h4 className="text-slate-900">Resultado da Triagem Automática</h4>
                  </div>
                  <div className="divide-y">
                    {[
                      { name: 'Ana Silva', score: 92, match: 'Forte', status: 'Aprovado', skills: ['React', 'Node.js', 'AWS'] },
                      { name: 'Bruno Costa', score: 88, match: 'Forte', status: 'Aprovado', skills: ['React', 'Node.js', 'Docker'] },
                      { name: 'Carla Mendes', score: 85, match: 'Bom', status: 'Aprovado', skills: ['React', 'Node.js', 'TypeScript'] },
                      { name: 'Daniel Souza', score: 45, match: 'Fraco', status: 'Reprovado', skills: ['JavaScript', 'HTML'] },
                    ].map((candidato, i) => (
                      <div key={i} className="p-4 hover:bg-accent dark:hover:bg-accent/80 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{candidato.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-foreground font-medium">{candidato.name}</div>
                              <div className="flex gap-2 mt-1">
                                {candidato.skills.map((skill, j) => (
                                  <Badge key={j} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl text-foreground font-bold mb-1">{candidato.score}</div>
                            <Badge className={candidato.status === 'Aprovado' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}>
                              {candidato.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Preview */}
        <TabsContent value="analytics">
          <Card>
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
              <CardTitle className="text-slate-900">Analytics - Visão Geral</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Funil de Conversão */}
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="text-slate-900 mb-4">Funil de Conversão - Último Mês</h4>
                  <div className="space-y-3">
                    {[
                      { stage: 'Candidaturas', value: 1250, percent: 100, color: 'bg-blue-600' },
                      { stage: 'Triagem Aprovada', value: 375, percent: 30, color: 'bg-blue-500' },
                      { stage: 'Entrevista Inicial', value: 188, percent: 15, color: 'bg-blue-400' },
                      { stage: 'Entrevista Técnica', value: 94, percent: 7.5, color: 'bg-blue-300' },
                      { stage: 'Proposta', value: 63, percent: 5, color: 'bg-green-500' },
                      { stage: 'Contratado', value: 38, percent: 3, color: 'bg-green-600' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-900">{item.stage}</span>
                          <span className="text-slate-600">{item.value} ({item.percent}%)</span>
                        </div>
                        <div className="h-8 bg-slate-100 rounded overflow-hidden">
                          <div 
                            className={`h-full ${item.color} flex items-center justify-end pr-2 text-white text-xs transition-all`}
                            style={{ width: `${item.percent}%` }}
                          >
                            {item.percent > 10 && `${item.percent}%`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fontes de Talentos */}
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="text-slate-900 mb-4">Fontes de Talentos - ROI</h4>
                  <div className="space-y-3">
                    {[
                      { source: 'LinkedIn', candidates: 485, hired: 15, cost: 'R$ 12k', roi: 'Alto', color: 'bg-green-600' },
                      { source: 'Indicação', candidates: 124, hired: 12, cost: 'R$ 3k', roi: 'Muito Alto', color: 'bg-green-700' },
                      { source: 'Site Carreiras', candidates: 356, hired: 8, cost: 'R$ 0', roi: 'Ótimo', color: 'bg-green-600' },
                      { source: 'Indeed', candidates: 285, hired: 3, cost: 'R$ 8k', roi: 'Baixo', color: 'bg-red-600' },
                    ].map((source, i) => (
                      <div key={i} className="bg-card p-3 rounded border border-border">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-slate-900">{source.source}</div>
                            <div className="text-slate-600 text-sm">{source.candidates} candidatos → {source.hired} contratados</div>
                          </div>
                          <Badge className={source.color}>{source.roi}</Badge>
                        </div>
                        <div className="text-slate-600 text-sm">Investimento: {source.cost}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-card border border-border rounded-lg p-4">
                <h4 className="text-blue-900 mb-2">Insights Automáticos</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Tempo médio na etapa "Entrevista Técnica" está 35% acima da meta (8 dias vs 5 dias)</li>
                  <li>• Taxa de conversão de LinkedIn aumentou 12% após ajuste nos critérios de knockout</li>
                  <li>• 85% dos candidatos aprovados têm perfil completo no sistema em menos de 48h</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
