import { useState } from 'react';
import { Search, Filter, Mail, Phone, Calendar, Award, Eye, UserCheck, UserX, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
// Badge replaced by unified .tag system
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { mockCandidatos } from '../lib/mockData';
import { Candidato, CandidatoStatus } from '../types';

export function CandidatosModule() {
  const [candidatos] = useState<Candidato[]>(mockCandidatos);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('todos');
  const [filterVaga, setFilterVaga] = useState<string>('todas');
  const [selectedCandidato, setSelectedCandidato] = useState<Candidato | null>(null);
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');

  const filteredCandidatos = candidatos.filter(candidato => {
    const matchesSearch = candidato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          candidato.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'todos' || candidato.status === filterStatus;
    const matchesVaga = filterVaga === 'todas' || candidato.vagaId === filterVaga;
    return matchesSearch && matchesStatus && matchesVaga;
  });

  const getStatusBadge = (status: CandidatoStatus) => {
    const color: Record<CandidatoStatus, string> = {
      novo: 'gray',
      triagem: 'blue',
      avaliacao: 'yellow',
      entrevista: 'orange',
      aprovado: 'green',
      reprovado: 'red',
      contratado: 'purple'
    };
    const labels: Record<CandidatoStatus, string> = {
      novo: 'Novo',
      triagem: 'Triagem',
      avaliacao: 'Avaliação',
      entrevista: 'Entrevista',
      aprovado: 'Aprovado',
      reprovado: 'Reprovado',
      contratado: 'Contratado'
    };
    return <span className={`tag tag-${color[status]}`}>{labels[status]}</span>;
  };

  const getFonteBadge = (fonte: string) => {
    const color: Record<string, string> = {
      linkedin: 'blue',
      site: 'green',
      indicacao: 'purple',
      chatbot: 'orange',
      Indeed: 'amber',
      Catho: 'pink'
    };
    return <span className={`tag tag-${color[fonte] || 'gray'}`}>{fonte}</span>;
  };

  const statusColumns: CandidatoStatus[] = ['novo', 'triagem', 'avaliacao', 'entrevista', 'aprovado'];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Gestão de Candidatos</h1>
          <p className="text-muted-foreground">{candidatos.length} candidatos no funil</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'kanban' ? 'default' : 'outline'}
            onClick={() => setViewMode('kanban')}
          >
            Funil
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            onClick={() => setViewMode('list')}
          >
            Lista
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterVaga} onValueChange={setFilterVaga}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as vagas</SelectItem>
                <SelectItem value="1">Desenvolvedor Full Stack Sênior</SelectItem>
                <SelectItem value="2">Analista de Dados</SelectItem>
                <SelectItem value="3">Gerente de Produto</SelectItem>
              </SelectContent>
            </Select>
            {viewMode === 'list' && (
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="novo">Novos</SelectItem>
                  <SelectItem value="triagem">Em Triagem</SelectItem>
                  <SelectItem value="avaliacao">Em Avaliação</SelectItem>
                  <SelectItem value="entrevista">Em Entrevista</SelectItem>
                  <SelectItem value="aprovado">Aprovados</SelectItem>
                  <SelectItem value="reprovado">Reprovados</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {statusColumns.map((status) => {
              const columnCandidatos = filteredCandidatos.filter(c => c.status === status);
              const labels: Record<CandidatoStatus, string> = {
                novo: 'Novos',
                triagem: 'Triagem',
                avaliacao: 'Avaliação',
                entrevista: 'Entrevista',
                aprovado: 'Aprovados',
                reprovado: 'Reprovados',
                contratado: 'Contratados'
              };

              return (
                <div key={status} className="w-80 flex-shrink-0">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{labels[status]}</CardTitle>
                        <span className="tag tag-gray">{columnCandidatos.length}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {columnCandidatos.map((candidato) => (
                        <Card 
                          key={candidato.id}
                          className="p-4 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500"
                        >
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm text-foreground mb-1">{candidato.nome}</h4>
                              <p className="text-xs text-muted-foreground truncate">{candidato.vagaTitulo}</p>
                            </div>

                            <div className="flex items-center justify-between">
                              {getFonteBadge(candidato.fonte)}
                              {candidato.notaTriagem && (
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Award className="w-3 h-3" />
                                  <span>{candidato.notaTriagem}</span>
                                </div>
                              )}
                            </div>

                            <div className="text-xs text-muted-foreground">
                              {new Date(candidato.dataAplicacao).toLocaleDateString('pt-BR')}
                            </div>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full gap-2"
                                  onClick={() => setSelectedCandidato(candidato)}
                                >
                                  <Eye className="w-3 h-3" />
                                  Ver detalhes
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                {selectedCandidato && (
                                  <CandidatoDetails candidato={selectedCandidato} />
                                )}
                              </DialogContent>
                            </Dialog>
                          </div>
                        </Card>
                      ))}
                      {columnCandidatos.length === 0 && (
                        <p className="text-sm text-muted-foreground text-center py-8">
                          Nenhum candidato
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Candidato</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Vaga</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Status</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Fonte</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Nota</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Data</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCandidatos.map((candidato) => (
                    <tr key={candidato.id} className="hover:bg-accent transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm text-foreground">{candidato.nome}</p>
                          <p className="text-xs text-muted-foreground">{candidato.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground max-w-xs truncate">
                          {candidato.vagaTitulo}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(candidato.status)}
                      </td>
                      <td className="px-6 py-4">
                        {getFonteBadge(candidato.fonte)}
                      </td>
                      <td className="px-6 py-4">
                        {candidato.notaTriagem ? (
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm text-foreground">{candidato.notaTriagem}</span>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-muted-foreground">
                          {new Date(candidato.dataAplicacao).toLocaleDateString('pt-BR')}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedCandidato(candidato)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                            {selectedCandidato && (
                              <CandidatoDetails candidato={selectedCandidato} />
                            )}
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
      )}
    </div>
  );
}

function CandidatoDetails({ candidato }: { candidato: Candidato }) {
  const getStatusBadge = (status: CandidatoStatus) => {
    const color: Record<CandidatoStatus, string> = {
      novo: 'gray',
      triagem: 'blue',
      avaliacao: 'yellow',
      entrevista: 'orange',
      aprovado: 'green',
      reprovado: 'red',
      contratado: 'purple'
    };
    const labels: Record<CandidatoStatus, string> = {
      novo: 'Novo',
      triagem: 'Triagem',
      avaliacao: 'Avaliação',
      entrevista: 'Entrevista',
      aprovado: 'Aprovado',
      reprovado: 'Reprovado',
      contratado: 'Contratado'
    };
    return <span className={`tag tag-${color[status]}`}>{labels[status]}</span>;
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>{candidato.nome}</DialogTitle>
      </DialogHeader>
      
      <Tabs defaultValue="informacoes" className="py-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="informacoes">Informações</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
        </TabsList>

        <TabsContent value="informacoes" className="space-y-6">
          <div className="flex gap-2">
            {getStatusBadge(candidato.status)}
            {candidato.consentimentoLGPD && (
              <span className="tag tag-green">✓ LGPD</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <div className="flex items-center gap-2 text-gray-900">
                <Mail className="w-4 h-4" />
                <span>{candidato.email}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Telefone</p>
              <div className="flex items-center gap-2 text-gray-900">
                <Phone className="w-4 h-4" />
                <span>{candidato.telefone}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Vaga de Interesse</p>
              <p className="text-gray-900">{candidato.vagaTitulo}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Fonte</p>
              <p className="text-gray-900">{candidato.fonte}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Data de Aplicação</p>
              <div className="flex items-center gap-2 text-gray-900">
                <Calendar className="w-4 h-4" />
                <span>{new Date(candidato.dataAplicacao).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Última Atualização</p>
              <span className="text-gray-900">
                {new Date(candidato.dataUltimaAtualizacao).toLocaleDateString('pt-BR')}
              </span>
            </div>
          </div>

          {candidato.notaTriagem && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Nota de Triagem</p>
              <div className="flex items-center gap-3">
                <Progress value={candidato.notaTriagem} className="flex-1" />
                <span className="text-sm text-gray-900">{candidato.notaTriagem}/100</span>
              </div>
            </div>
          )}

          {candidato.notaAvaliacao && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Nota de Avaliação</p>
              <div className="flex items-center gap-3">
                <Progress value={candidato.notaAvaliacao} className="flex-1" />
                <span className="text-sm text-gray-900">{candidato.notaAvaliacao}/100</span>
              </div>
            </div>
          )}

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Etapa Atual:</strong> {candidato.etapaAtual}
            </p>
            {candidato.proximoPasso && (
              <p className="text-sm text-gray-700 mt-2">
                <strong>Próximo Passo:</strong> {candidato.proximoPasso}
              </p>
            )}
          </div>

          {candidato.observacoes && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Observações</p>
              <p className="text-sm text-muted-foreground p-3 bg-muted rounded-lg">
                {candidato.observacoes}
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <Button className="flex-1 gap-2">
              <UserCheck className="w-4 h-4" />
              Aprovar
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <UserX className="w-4 h-4" />
              Reprovar
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Currículo
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <div className="space-y-4">
            {[
              { data: candidato.dataAplicacao, evento: 'Candidatura enviada', tipo: 'success' },
              { data: candidato.dataConsentimento, evento: 'Consentimento LGPD coletado', tipo: 'info' },
              { data: candidato.dataUltimaAtualizacao, evento: `Status alterado para ${candidato.status}`, tipo: 'warning' },
            ].map((item, index) => (
              item.data && (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${
                      item.tipo === 'success' ? 'bg-green-500' :
                      item.tipo === 'info' ? 'bg-blue-500' : 'bg-orange-500'
                    }`} />
                    {index < 2 && <div className="w-0.5 h-12 bg-gray-200" />}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm text-gray-900">{item.evento}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(item.data).toLocaleDateString('pt-BR')} às{' '}
                      {new Date(item.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              )
            ))}
          </div>
        </TabsContent>

        <TabsContent value="avaliacoes" className="space-y-4">
          {candidato.notaTriagem && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Triagem Automática</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <Progress value={candidato.notaTriagem} className="flex-1" />
                  <span className="text-sm text-gray-900">{candidato.notaTriagem}/100</span>
                </div>
                <p className="text-sm text-gray-600">
                  Candidato atende {candidato.notaTriagem}% dos requisitos da vaga
                </p>
              </CardContent>
            </Card>
          )}
          
          {candidato.notaAvaliacao && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Teste Técnico</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <Progress value={candidato.notaAvaliacao} className="flex-1" />
                  <span className="text-sm text-gray-900">{candidato.notaAvaliacao}/100</span>
                </div>
                <p className="text-sm text-gray-600">
                  Desempenho acima da média em algoritmos e práticas de código
                </p>
              </CardContent>
            </Card>
          )}

          {!candidato.notaTriagem && !candidato.notaAvaliacao && (
            <div className="text-center py-12 text-gray-400">
              <FileText className="w-12 h-12 mx-auto mb-3" />
              <p>Nenhuma avaliação realizada ainda</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}
