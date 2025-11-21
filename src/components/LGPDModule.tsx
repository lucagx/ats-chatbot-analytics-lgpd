import { useState } from 'react';
import { Shield, FileText, Activity, Search, Download, Trash2, Eye, Check, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
// Removed Badge usage in favor of unified .tag classes
// import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { mockConsentimentos, mockLogs, mockCandidatos } from '../lib/mockData';
import { ConsentimentoLGPD, LogTratamento } from '../types';

export function LGPDModule() {
  const [consentimentos] = useState<ConsentimentoLGPD[]>(mockConsentimentos);
  const [logs] = useState<LogTratamento[]>(mockLogs);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConsentimentos = consentimentos.filter(c =>
    c.candidatoNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLogs = logs.filter(l =>
    l.candidatoNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.detalhes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAcaoBadge = (acao: string) => {
    const color: Record<string, string> = {
      acesso: 'blue',
      modificacao: 'yellow',
      exclusao: 'red',
      exportacao: 'purple',
      consentimento: 'green',
      revogacao: 'orange'
    };
    const labels: Record<string, string> = {
      acesso: 'Acesso',
      modificacao: 'Modificação',
      exclusao: 'Exclusão',
      exportacao: 'Exportação',
      consentimento: 'Consentimento',
      revogacao: 'Revogação'
    };
    return <span className={`tag tag-${color[acao]}`}>{labels[acao]}</span>;
  };

  const totalConsentimentos = consentimentos.length;
  const consentimentosAtivos = consentimentos.filter(c => c.ativo).length;
  const totalLogs = logs.length;
  const candidatosComConsentimento = mockCandidatos.filter(c => c.consentimentoLGPD).length;

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-2">Conformidade LGPD</h1>
        <p className="text-gray-600">Gestão de consentimentos e auditoria de dados</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{consentimentosAtivos}</p>
                <p className="text-sm text-gray-600">Consentimentos Ativos</p>
                <p className="text-xs text-muted-foreground mt-1">100% conformidade</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{totalLogs}</p>
                <p className="text-sm text-gray-600">Registros de Auditoria</p>
                <p className="text-xs text-gray-500 mt-1">Últimos 30 dias</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">
                  {((candidatosComConsentimento / mockCandidatos.length) * 100).toFixed(0)}%
                </p>
                <p className="text-sm text-gray-600">Taxa de Consentimento</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {candidatosComConsentimento} de {mockCandidatos.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">0</p>
                <p className="text-sm text-gray-600">Alertas Pendentes</p>
                <p className="text-xs text-muted-foreground mt-1">Sistema em conformidade</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="consentimentos" className="space-y-6">
        <TabsList className='gap-4'>
          <TabsTrigger value="consentimentos" className='hover:bg-gray-400/30 cursor-pointer p-5'>Consentimentos</TabsTrigger>
          <TabsTrigger value="logs" className='hover:bg-gray-400/30 cursor-pointer p-5'>Logs de Auditoria</TabsTrigger>
          <TabsTrigger value="politicas" className='hover:bg-gray-400/30 cursor-pointer p-5'>Políticas</TabsTrigger>
          <TabsTrigger value="direitos" className='hover:bg-gray-400/30 cursor-pointer p-5'>Exercício de Direitos</TabsTrigger>
        </TabsList>

        <TabsContent value="consentimentos" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Registro de Consentimentos</CardTitle>
                <div className="relative w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar candidato..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs text-muted-foreground font-medium">Candidato</th>
                      <th className="px-6 py-3 text-left text-xs text-muted-foreground font-medium">Email</th>
                      <th className="px-6 py-3 text-left text-xs text-muted-foreground font-medium">Data Consentimento</th>
                      <th className="px-6 py-3 text-left text-xs text-muted-foreground font-medium">Status</th>
                      <th className="px-6 py-3 text-left text-xs text-muted-foreground font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredConsentimentos.map((consentimento) => (
                      <tr key={consentimento.id} className="hover:bg-muted transition-colors">
                        <td className="px-6 py-4 text-sm text-foreground font-medium">
                          {consentimento.candidatoNome}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {consentimento.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(consentimento.dataConsentimento).toLocaleDateString('pt-BR')}
                          {' '}
                          {new Date(consentimento.dataConsentimento).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </td>
                        <td className="px-6 py-4">
                          {consentimento.ativo ? (
                            <span className="tag tag-green flex items-center gap-1">
                              <Check className="w-3 h-3" />
                              Ativo
                            </span>
                          ) : (
                            <span className="tag tag-gray">Revogado</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="cursor-pointer hover:bg-gray-400/30">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Detalhes do Consentimento</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4 py-4">
                                <div>
                                  <p className="text-sm text-gray-600 mb-1">Candidato</p>
                                  <p className="text-gray-900">{consentimento.candidatoNome}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600 mb-1">Email</p>
                                  <p className="text-gray-900">{consentimento.email}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600 mb-2">Finalidades Autorizadas</p>
                                  <ul className="space-y-2">
                                    {consentimento.finalidades.map((finalidade, index) => (
                                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>{finalidade}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-gray-600 mb-1">IP de Origem</p>
                                    <p className="text-sm text-gray-900">{consentimento.ipOrigem}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-600 mb-1">Data/Hora</p>
                                    <p className="text-sm text-gray-900">
                                      {new Date(consentimento.dataConsentimento).toLocaleString('pt-BR')}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600 mb-1">User Agent</p>
                                  <p className="text-xs text-gray-700 font-mono bg-gray-50 p-2 rounded">
                                    {consentimento.userAgent}
                                  </p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Logs de Auditoria</CardTitle>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Exportar Logs
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 pt-1">
                      {getAcaoBadge(log.acao)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm text-gray-900">{log.candidatoNome}</p>
                        <span className="text-xs text-gray-500">
                          {new Date(log.timestamp).toLocaleDateString('pt-BR')} às{' '}
                          {new Date(log.timestamp).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{log.detalhes}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Usuário: {log.usuario}</span>
                        <span>IP: {log.ipOrigem}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="politicas" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Política de Retenção</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-900 mb-2">Candidatos Aprovados</h4>
                  <p className="text-sm text-gray-600">
                    Dados mantidos por 5 anos após o término do contrato de trabalho
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-900 mb-2">Candidatos Não Aprovados</h4>
                  <p className="text-sm text-gray-600">
                    Dados mantidos por 12 meses no banco de talentos (com consentimento)
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-900 mb-2">Logs de Auditoria</h4>
                  <p className="text-sm text-gray-600">
                    Registros mantidos por 6 anos para fins de conformidade
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medidas de Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Criptografia em Trânsito</p>
                    <p className="text-xs text-gray-600">TLS 1.3 para todas as comunicações</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Criptografia em Repouso</p>
                    <p className="text-xs text-gray-600">AES-256 para dados sensíveis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Controle de Acesso</p>
                    <p className="text-xs text-gray-600">Autenticação multi-fator obrigatória</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Auditoria Completa</p>
                    <p className="text-xs text-gray-600">Log de todas as operações com dados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Base Legal do Tratamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="text-sm text-gray-900 mb-1">Consentimento (Art. 7º, I)</h4>
                  <p className="text-sm text-gray-600">
                    Para participação em processos seletivos e inclusão em banco de talentos
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="text-sm text-gray-900 mb-1">Execução de Contrato (Art. 7º, V)</h4>
                  <p className="text-sm text-gray-600">
                    Para gestão do contrato de trabalho de candidatos aprovados
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="text-sm text-gray-900 mb-1">Obrigação Legal (Art. 7º, II)</h4>
                  <p className="text-sm text-gray-600">
                    Para cumprimento de obrigações trabalhistas e fiscais
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="direitos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Solicitações de Exercício de Direitos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Acesso aos Dados</p>
                    <p className="text-2xl text-gray-900">0</p>
                    <p className="text-xs text-gray-500 mt-1">Solicitações pendentes</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Correção de Dados</p>
                    <p className="text-2xl text-gray-900">0</p>
                    <p className="text-xs text-gray-500 mt-1">Solicitações pendentes</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Eliminação de Dados</p>
                    <p className="text-2xl text-gray-900">0</p>
                    <p className="text-xs text-gray-500 mt-1">Solicitações pendentes</p>
                  </div>
                </div>

                <div className="p-6 border-2 border-dashed border-gray-200 rounded-lg text-center">
                  <Shield className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-4">
                    Nenhuma solicitação pendente no momento
                  </p>
                  <p className="text-xs text-gray-500">
                    Sistema em conformidade com todos os direitos do titular (Arts. 17 a 22 LGPD)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
