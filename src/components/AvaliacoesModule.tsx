import { useState } from 'react';
import { FileText, Clock, CheckCircle, AlertCircle, Eye, Send, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
// Replacing Badge with .tag classes
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { mockAvaliacoes } from '../lib/mockData';
import { Avaliacao } from '../types';

export function AvaliacoesModule() {
  const [avaliacoes] = useState<Avaliacao[]>(mockAvaliacoes);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('todas');
  const [filterTipo, setFilterTipo] = useState<string>('todas');

  const filteredAvaliacoes = avaliacoes.filter(av => {
    const matchesSearch = av.candidatoNome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'todas' || av.status === filterStatus;
    const matchesTipo = filterTipo === 'todas' || av.tipo === filterTipo;
    return matchesSearch && matchesStatus && matchesTipo;
  });

  const getStatusBadge = (status: string) => {
    const color: Record<string, string> = {
      pendente: 'gray',
      'em-andamento': 'blue',
      concluido: 'green',
      expirado: 'red'
    };
    const labels: Record<string, string> = {
      pendente: 'Pendente',
      'em-andamento': 'Em Andamento',
      concluido: 'Concluído',
      expirado: 'Expirado'
    };
    return <span className={`tag tag-${color[status]}`}>{labels[status]}</span>;
  };

  const getTipoBadge = (tipo: string) => {
    const labels: Record<string, string> = {
      'teste-tecnico': 'Teste Técnico',
      'teste-logica': 'Teste de Lógica',
      'teste-ingles': 'Teste de Inglês',
      'teste-personalidade': 'Teste de Personalidade',
      'video-entrevista': 'Vídeo Entrevista'
    };
    return <span className="tag tag-purple">{labels[tipo] || tipo}</span>;
  };

  const statusCounts = {
    pendente: avaliacoes.filter(a => a.status === 'pendente').length,
    emAndamento: avaliacoes.filter(a => a.status === 'em-andamento').length,
    concluido: avaliacoes.filter(a => a.status === 'concluido').length,
    expirado: avaliacoes.filter(a => a.status === 'expirado').length,
  };

  const notaMedia = avaliacoes
    .filter(a => a.nota !== undefined)
    .reduce((acc, a) => acc + (a.nota || 0), 0) / 
    avaliacoes.filter(a => a.nota !== undefined).length || 0;

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-2">Avaliações e Testes</h1>
        <p className="text-gray-600">{avaliacoes.length} avaliações cadastradas</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{statusCounts.pendente}</p>
                <p className="text-sm text-gray-600">Pendentes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{statusCounts.emAndamento}</p>
                <p className="text-sm text-gray-600">Em Andamento</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{statusCounts.concluido}</p>
                <p className="text-sm text-gray-600">Concluídos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{notaMedia.toFixed(0)}</p>
                <p className="text-sm text-gray-600">Nota Média</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar por candidato..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterTipo} onValueChange={setFilterTipo}>
              <SelectTrigger className="w-56">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todos os tipos</SelectItem>
                <SelectItem value="teste-tecnico">Teste Técnico</SelectItem>
                <SelectItem value="teste-logica">Teste de Lógica</SelectItem>
                <SelectItem value="teste-ingles">Teste de Inglês</SelectItem>
                <SelectItem value="video-entrevista">Vídeo Entrevista</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todos os status</SelectItem>
                <SelectItem value="pendente">Pendentes</SelectItem>
                <SelectItem value="em-andamento">Em Andamento</SelectItem>
                <SelectItem value="concluido">Concluídos</SelectItem>
                <SelectItem value="expirado">Expirados</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Avaliações List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredAvaliacoes.map((avaliacao) => (
          <Card key={avaliacao.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted">
                    <FileText className={`w-6 h-6 ${
                      avaliacao.status === 'concluido' ? 'text-green-600' :
                      avaliacao.status === 'em-andamento' ? 'text-blue-600' :
                      avaliacao.status === 'expirado' ? 'text-red-600' : 'text-gray-600'
                    }`} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm text-gray-900 mb-1">{avaliacao.candidatoNome}</h3>
                      <div className="flex items-center gap-2">
                        {getTipoBadge(avaliacao.tipo)}
                        {getStatusBadge(avaliacao.status)}
                      </div>
                    </div>
                    {avaliacao.nota !== undefined && (
                      <div className="text-right">
                        <p className="text-2xl text-gray-900">{avaliacao.nota}</p>
                        <p className="text-xs text-gray-500">Nota</p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Data de Envio</p>
                      <p className="text-gray-900">
                        {new Date(avaliacao.dataEnvio).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Prazo Limite</p>
                      <p className="text-gray-900">
                        {new Date(avaliacao.dataLimite).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    {avaliacao.dataConclusao && (
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Data de Conclusão</p>
                        <p className="text-gray-900">
                          {new Date(avaliacao.dataConclusao).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    )}
                  </div>

                  {avaliacao.nota !== undefined && (
                    <div className="mb-4">
                      <div className="flex items-center gap-3">
                        <Progress value={avaliacao.nota} className="flex-1" />
                        <span className="text-sm text-gray-600">{avaliacao.nota}/100</span>
                      </div>
                    </div>
                  )}

                  {avaliacao.observacoes && (
                    <div className="p-3 bg-muted rounded-lg mb-4">
                      <p className="text-xs text-gray-600 mb-1">Observações</p>
                      <p className="text-sm text-gray-700">{avaliacao.observacoes}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Eye className="w-4 h-4" />
                          Ver Detalhes
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Detalhes da Avaliação</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Candidato</p>
                              <p className="text-gray-900">{avaliacao.candidatoNome}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Tipo</p>
                              {getTipoBadge(avaliacao.tipo)}
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-gray-600 mb-1">Status</p>
                            {getStatusBadge(avaliacao.status)}
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Enviado em</p>
                              <p className="text-gray-900">
                                {new Date(avaliacao.dataEnvio).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Prazo</p>
                              <p className="text-gray-900">
                                {new Date(avaliacao.dataLimite).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                            {avaliacao.dataConclusao && (
                              <div>
                                <p className="text-sm text-gray-600 mb-1">Concluído em</p>
                                <p className="text-gray-900">
                                  {new Date(avaliacao.dataConclusao).toLocaleDateString('pt-BR')}
                                </p>
                              </div>
                            )}
                          </div>

                          {avaliacao.nota !== undefined && (
                            <div>
                              <p className="text-sm text-gray-600 mb-2">Resultado</p>
                              <div className="flex items-center gap-3 mb-2">
                                <Progress value={avaliacao.nota} className="flex-1" />
                                <span className="text-lg text-gray-900">{avaliacao.nota}/100</span>
                              </div>
                              <p className={`text-sm ${
                                avaliacao.nota >= 80 ? 'text-green-600' :
                                avaliacao.nota >= 60 ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                {avaliacao.nota >= 80 ? 'Desempenho Excelente' :
                                 avaliacao.nota >= 60 ? 'Desempenho Satisfatório' : 'Abaixo do Esperado'}
                              </p>
                            </div>
                          )}

                          {avaliacao.observacoes && (
                            <div>
                              <p className="text-sm text-gray-600 mb-2">Observações</p>
                              <p className="text-sm text-muted-foreground p-3 bg-muted rounded-lg">
                                {avaliacao.observacoes}
                              </p>
                            </div>
                          )}

                          <div>
                            <p className="text-sm text-gray-600 mb-2">Link da Avaliação</p>
                            <a
                              href={avaliacao.linkAvaliacao}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:text-blue-700 break-all"
                            >
                              {avaliacao.linkAvaliacao}
                            </a>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {avaliacao.status === 'pendente' && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Send className="w-4 h-4" />
                        Reenviar
                      </Button>
                    )}

                    {avaliacao.status === 'concluido' && avaliacao.linkAvaliacao && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(avaliacao.linkAvaliacao, '_blank')}
                      >
                        Acessar Resultado
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
