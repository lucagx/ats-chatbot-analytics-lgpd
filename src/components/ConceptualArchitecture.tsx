import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// Removed Badge usage; using unified .tag classes
import { ArrowRight, Database, Users, MessageSquare, Brain, BarChart, Shield, FileCheck, Calendar, Mail, Video, FileText } from 'lucide-react';

export function ConceptualArchitecture() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Arquitetura Conceitual do Sistema</CardTitle>
        <CardDescription>
          Visão de alto nível dos componentes principais e fluxos de informação
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          
          {/* Main Conceptual Diagram */}
          <div className="bg-card rounded-xl p-8 border border-border">
            
            {/* Input Sources */}
            <div className="mb-8">
              <h3 className="text-center text-slate-700 mb-4">Fontes de Entrada</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border-2 border-blue-300 text-center">
                  <div className="text-2xl mb-1">💼</div>
                  <div className="text-sm text-slate-900">LinkedIn</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border-2 border-blue-300 text-center">
                  <div className="text-2xl mb-1">🌐</div>
                  <div className="text-sm text-slate-900">Site Carreiras</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border-2 border-blue-300 text-center">
                  <div className="text-2xl mb-1">📧</div>
                  <div className="text-sm text-slate-900">E-mail/Indicação</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border-2 border-blue-300 text-center">
                  <div className="text-2xl mb-1">📱</div>
                  <div className="text-sm text-slate-900">Job Boards</div>
                </div>
              </div>
              
              {/* Arrows down */}
              <div className="flex justify-center my-4">
                <div className="text-slate-400 text-2xl">↓</div>
              </div>
            </div>

            {/* Core System - Main Components */}
            <div className="bg-muted rounded-xl p-6 shadow mb-8">
              <h3 className="text-foreground text-center mb-6 text-xl">Sistema Central ATS</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Left Column - Input Processing */}
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="tag tag-blue p-2 rounded-md">
                        <Brain className="w-5 h-5" />
                      </div>
                      <div className="text-slate-900">Triagem Inteligente</div>
                    </div>
                    <div className="text-xs text-slate-600 space-y-1">
                      <div>• Parsing de CVs</div>
                      <div>• Perguntas knockout</div>
                      <div>• Scoring automático</div>
                      <div>• Ranqueamento ML</div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="tag tag-purple p-2 rounded-md">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div className="text-slate-900">Chatbot Omnicanal</div>
                    </div>
                    <div className="text-xs text-slate-600 space-y-1">
                      <div>• Atendimento 24/7</div>
                      <div>• Coleta de informações</div>
                      <div>• Atualização de status</div>
                      <div>• FAQ automatizado</div>
                    </div>
                  </div>
                </div>

                {/* Center Column - Core Workflow */}
                <div className="space-y-4">
                  <div className="bg-accent rounded-lg p-4 shadow text-accent-foreground">
                    <div className="text-center mb-3">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="font-semibold">Gestão do Funil</div>
                    </div>
                    <div className="text-xs space-y-2">
                      <div className="tag tag-green">1. Divulgação</div>
                      <div className="tag tag-green">2. Triagem</div>
                      <div className="tag tag-green">3. Entrevistas</div>
                      <div className="tag tag-green">4. Proposta</div>
                      <div className="tag tag-green">5. Admissão</div>
                      <div className="tag tag-green">6. Onboarding</div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Support & Analytics */}
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="tag tag-purple p-2 rounded-md">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="text-slate-900">Automação</div>
                    </div>
                    <div className="text-xs text-slate-600 space-y-1">
                      <div>• Agendamento inteligente</div>
                      <div>• Notificações automáticas</div>
                      <div>• Lembretes personalizados</div>
                      <div>• Workflows configuráveis</div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="tag tag-amber p-2 rounded-md">
                        <BarChart className="w-5 h-5" />
                      </div>
                      <div className="text-slate-900">Analytics & BI</div>
                    </div>
                    <div className="text-xs text-slate-600 space-y-1">
                      <div>• Dashboards em tempo real</div>
                      <div>• KPIs do funil</div>
                      <div>• ROI por fonte</div>
                      <div>• Insights preditivos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Modules */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card rounded-lg p-4 shadow-sm border">
                <div className="flex items-center gap-2 mb-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  <div className="text-sm text-slate-900">Vídeo Entrevista</div>
                </div>
                <p className="text-xs text-slate-600">Gravação assíncrona e avaliação estruturada</p>
              </div>

              <div className="bg-card rounded-lg p-4 shadow-sm border">
                <div className="flex items-center gap-2 mb-2">
                  <FileCheck className="w-4 h-4 text-green-600" />
                  <div className="text-sm text-slate-900">Testes Online</div>
                </div>
                <p className="text-xs text-slate-600">Avaliações técnicas e comportamentais</p>
              </div>

              <div className="bg-card rounded-lg p-4 shadow-sm border">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-purple-600" />
                  <div className="text-sm text-slate-900">Assinatura Digital</div>
                </div>
                <p className="text-xs text-slate-600">Contratos e documentos eletrônicos</p>
              </div>

              <div className="bg-card rounded-lg p-4 shadow-sm border">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-amber-600" />
                  <div className="text-sm text-slate-900">Onboarding Digital</div>
                </div>
                <p className="text-xs text-slate-600">Integração e acompanhamento inicial</p>
              </div>
            </div>

            {/* LGPD Compliance Layer */}
            <div className="bg-card border rounded-lg p-4 shadow-sm mb-6">
              <div className="flex items-center justify-center gap-3 text-foreground">
                <Shield className="w-6 h-6 text-red-600" />
                <div>
                  <div className="font-semibold">Camada de Conformidade LGPD</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Consentimento Explícito • Logs de Auditoria • Política de Retenção • Criptografia • Anonimização
                  </div>
                </div>
              </div>
            </div>

            {/* Output / Integrations */}
            <div>
              <div className="flex justify-center mb-4">
                <div className="text-slate-400 text-2xl">↓</div>
              </div>
              
              <h3 className="text-center text-slate-700 mb-4">Integrações e Saídas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-card rounded-lg p-3 shadow-sm border text-center">
                  <div className="text-2xl mb-1">📊</div>
                  <div className="text-sm text-slate-900">ERP / Folha</div>
                </div>
                <div className="bg-card rounded-lg p-3 shadow-sm border text-center">
                  <div className="text-2xl mb-1">🔍</div>
                  <div className="text-sm text-slate-900">Background Check</div>
                </div>
                <div className="bg-card rounded-lg p-3 shadow-sm border text-center">
                  <div className="text-2xl mb-1">📧</div>
                  <div className="text-sm text-slate-900">SMTP/SMS</div>
                </div>
                <div className="bg-card rounded-lg p-3 shadow-sm border text-center">
                  <div className="text-2xl mb-1">📈</div>
                  <div className="text-sm text-slate-900">BI/Reports</div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flows */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-slate-900 mb-4">Fluxos de Dados Principais</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="tag tag-blue rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">1</div>
                <div className="flex-1">
                  <div className="text-slate-900 text-sm">Candidato aplica → CV parseado → Triagem automática → Scoring</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="tag tag-green rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">2</div>
                <div className="flex-1">
                  <div className="text-slate-900 text-sm">Chatbot coleta informações → Atualiza perfil → Notifica recrutador</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="tag tag-purple rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">3</div>
                <div className="flex-1">
                  <div className="text-slate-900 text-sm">Mudança de status → Notificação automática → Log LGPD → Dashboard atualizado</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="tag tag-amber rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">4</div>
                <div className="flex-1">
                  <div className="text-slate-900 text-sm">Aprovação → Assinatura digital → Integração ERP → Onboarding iniciado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Characteristics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-foreground mb-4 flex items-center gap-2">
                <Database className="w-5 h-5" />
                Características Arquiteturais
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="tag tag-blue mt-0.5">✓</span>
                  <div>
                    <div className="text-foreground">Modular e Extensível</div>
                    <p className="text-muted-foreground text-xs">Componentes independentes com interfaces bem definidas</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="tag tag-blue mt-0.5">✓</span>
                  <div>
                    <div className="text-foreground">Event-Driven</div>
                    <p className="text-muted-foreground text-xs">Comunicação assíncrona via eventos de domínio</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="tag tag-blue mt-0.5">✓</span>
                  <div>
                    <div className="text-foreground">Cloud-Native</div>
                    <p className="text-muted-foreground text-xs">Escalável horizontalmente, resiliente a falhas</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="tag tag-blue mt-0.5">✓</span>
                  <div>
                    <div className="text-foreground">API-First</div>
                    <p className="text-muted-foreground text-xs">Todas as funcionalidades expostas via APIs REST/GraphQL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Conformidade LGPD Integrada
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="tag tag-red mt-0.5">✓</span>
                  <div>
                    <div className="text-foreground">Consentimento Granular</div>
                    <p className="text-muted-foreground text-xs">Captura e gestão de consentimento por finalidade</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="tag tag-red mt-0.5">✓</span>
                  <div>
                    <div className="text-foreground">Trilha de Auditoria</div>
                    <p className="text-muted-foreground text-xs">Logs imutáveis de todos os tratamentos de dados</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="tag tag-red mt-0.5">✓</span>
                  <div>
                    <div className="text-foreground">Retenção Automatizada</div>
                    <p className="text-muted-foreground text-xs">Políticas configuráveis de purga e anonimização</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="tag tag-red mt-0.5">✓</span>
                  <div>
                    <div className="text-foreground">Direitos do Titular</div>
                    <p className="text-muted-foreground text-xs">Acesso, correção, exclusão e portabilidade de dados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Export Note */}
          <div className="bg-card border rounded-lg p-4">
            <h4 className="text-foreground mb-2">💡 Arquitetura Conceitual vs Arquitetura de Referência</h4>
            <div className="text-muted-foreground text-sm space-y-1">
              <p><strong>Conceitual (este diagrama):</strong> Visão de alto nível focada em <strong>O QUE</strong> o sistema faz, seus componentes principais e fluxos de negócio. Ideal para apresentar a stakeholders não-técnicos.</p>
              <p><strong>Referência (aba "Arquitetura"):</strong> Visão técnica detalhada focada em <strong>COMO</strong> o sistema é construído, com camadas, tecnologias e padrões. Ideal para equipe técnica e documentação.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
