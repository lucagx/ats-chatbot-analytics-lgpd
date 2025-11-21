import { useState } from 'react';
import { Calendar, Clock, Video, User, Check, X, RefreshCw, Plus, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { mockAgendamentos } from '../lib/mockData';
import { Agendamento } from '../types';

export function AgendamentoModule() {
  const [agendamentos] = useState<Agendamento[]>(mockAgendamentos);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('todos');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showNewDialog, setShowNewDialog] = useState(false);

  const filteredAgendamentos = agendamentos.filter(ag => {
    const matchesSearch = ag.candidatoNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ag.vagaTitulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'todos' || ag.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const agendamentosPorData = filteredAgendamentos.reduce((acc, ag) => {
    if (!acc[ag.data]) acc[ag.data] = [];
    acc[ag.data].push(ag);
    return acc;
  }, {} as Record<string, Agendamento[]>);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      agendado: 'tag tag-yellow',
      confirmado: 'tag tag-sky',
      realizado: 'tag tag-gray',
      cancelado: 'tag tag-red',
      remarcado: 'tag tag-purple'
    };
    const labels: Record<string, string> = {
      agendado: 'Agendado',
      confirmado: 'Confirmado',
      realizado: 'Realizado',
      cancelado: 'Cancelado',
      remarcado: 'Remarcado'
    };
    return <Badge className={styles[status]}>{labels[status]}</Badge>;
  };

  const getTipoBadge = (tipo: string) => {
    const styles: Record<string, string> = {
      triagem: 'tag tag-blue',
      tecnica: 'tag tag-purple',
      comportamental: 'tag tag-green',
      final: 'tag tag-orange'
    };
    const labels: Record<string, string> = {
      triagem: 'Triagem',
      tecnica: 'Técnica',
      comportamental: 'Comportamental',
      final: 'Final'
    };
    return <Badge className={styles[tipo]}>{labels[tipo]}</Badge>;
  };

  const statusCounts = {
    agendado: agendamentos.filter(a => a.status === 'agendado').length,
    confirmado: agendamentos.filter(a => a.status === 'confirmado').length,
    realizado: agendamentos.filter(a => a.status === 'realizado').length,
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Agendamento de Entrevistas</h1>
          <p className="text-muted-foreground">{agendamentos.length} entrevistas no sistema</p>
        </div>
        <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Novo Agendamento
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Novo Agendamento</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Candidato</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o candidato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="c1">Ana Paula Silva</SelectItem>
                      <SelectItem value="c2">Carlos Eduardo Santos</SelectItem>
                      <SelectItem value="c3">Mariana Costa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tipo de Entrevista</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="triagem">Triagem</SelectItem>
                      <SelectItem value="tecnica">Técnica</SelectItem>
                      <SelectItem value="comportamental">Comportamental</SelectItem>
                      <SelectItem value="final">Final</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Data</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Horário</Label>
                  <Input type="time" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Duração (minutos)</Label>
                  <Input type="number" placeholder="60" />
                </div>
                <div className="space-y-2">
                  <Label>Entrevistador</Label>
                  <Input placeholder="Nome do entrevistador" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Link de Videoconferência</Label>
                <Input placeholder="https://meet.google.com/..." />
              </div>

              <div className="space-y-2">
                <Label>Observações</Label>
                <Textarea placeholder="Informações adicionais..." rows={3} />
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1">Agendar Entrevista</Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowNewDialog(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted border border-border rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{statusCounts.agendado}</p>
                <p className="text-sm text-gray-600">Agendadas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted border border-border rounded-lg flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{statusCounts.confirmado}</p>
                <p className="text-sm text-gray-600">Confirmadas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted border border-border rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{statusCounts.realizado}</p>
                <p className="text-sm text-gray-600">Realizadas</p>
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
                placeholder="Buscar por candidato ou vaga..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="agendado">Agendados</SelectItem>
                <SelectItem value="confirmado">Confirmados</SelectItem>
                <SelectItem value="realizado">Realizados</SelectItem>
                <SelectItem value="cancelado">Cancelados</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Timeline View */}
      <div className="space-y-6">
        {Object.entries(agendamentosPorData)
          .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
          .map(([data, agendamentosData]) => (
            <Card key={data}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <CardTitle className="text-base">
                    {new Date(data + 'T00:00:00').toLocaleDateString('pt-BR', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </CardTitle>
                  <Badge variant="outline">{agendamentosData.length} entrevistas</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {agendamentosData
                    .sort((a, b) => a.horario.localeCompare(b.horario))
                    .map((agendamento) => (
                      <div
                        key={agendamento.id}
                        className="flex items-start gap-4 p-4 border-2 border-border rounded-lg hover:bg-gray-400/10 hover:border-accent hover:shadow-md transition-colors cursor-pointer"
                      >
                        <div className="flex-shrink-0 text-center">
                          <div className="w-16 h-16 bg-muted rounded-lg flex flex-col items-center justify-center">
                            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-1" />
                            <span className="text-xs text-foreground font-medium">{agendamento.horario}</span>
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-sm text-foreground font-medium mb-1">
                                {agendamento.candidatoNome}
                              </h4>
                              <p className="text-xs text-muted-foreground">{agendamento.vagaTitulo}</p>
                            </div>
                            {getStatusBadge(agendamento.status)}
                          </div>

                          <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              {getTipoBadge(agendamento.tipo)}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{agendamento.entrevistador}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{agendamento.duracao} min</span>
                            </div>
                          </div>

                          {agendamento.linkVideoconferencia && (
                            <div className="flex items-center gap-2 p-2 bg-muted rounded text-xs">
                              <Video className="w-3 h-3 text-blue-600" />
                              <a
                                href={agendamento.linkVideoconferencia}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 truncate"
                              >
                                {agendamento.linkVideoconferencia}
                              </a>
                            </div>
                          )}

                          {agendamento.observacoes && (
                            <p className="text-xs text-gray-600 mt-2 italic">
                              {agendamento.observacoes}
                            </p>
                          )}
                        </div>

                        <div className="flex-shrink-0 flex flex-col gap-2">
                          {agendamento.status === 'agendado' && (
                            <>
                              <Button size="sm" variant="outline" className="gap-1">
                                <Check className="w-3 h-3" />
                                Confirmar
                              </Button>
                              <Button size="sm" variant="outline" className="gap-1">
                                <RefreshCw className="w-3 h-3" />
                                Remarcar
                              </Button>
                              <Button size="sm" variant="outline" className="gap-1 text-red-600 hover:text-red-700">
                                <X className="w-3 h-3" />
                                Cancelar
                              </Button>
                            </>
                          )}
                          {agendamento.status === 'confirmado' && (
                            <Button size="sm" className="gap-1">
                              <Video className="w-3 h-3" />
                              Entrar
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
