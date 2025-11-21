import { useState } from 'react';
import { Plus, Search, Filter, MapPin, Building, Users, Calendar, DollarSign, Edit, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { mockVagas } from '../lib/mockData';
import { Vaga } from '../types';

export function VagasModule() {
  const [vagas] = useState<Vaga[]>(mockVagas);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('todas');
  const [selectedVaga, setSelectedVaga] = useState<Vaga | null>(null);
  const [showNewVagaDialog, setShowNewVagaDialog] = useState(false);

  const filteredVagas = vagas.filter(vaga => {
    const matchesSearch = vaga.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vaga.departamento.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'todas' || vaga.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      aberta: 'tag tag-green',
      pausada: 'tag tag-yellow',
      fechada: 'tag tag-gray'
    };
    const labels = {
      aberta: 'Aberta',
      pausada: 'Pausada',
      fechada: 'Fechada'
    };
    return <Badge className={styles[status as keyof typeof styles]}>{labels[status as keyof typeof labels]}</Badge>;
  };

  const getPrioridadeBadge = (prioridade: string) => {
    const styles = {
      alta: 'tag tag-red',
      media: 'tag tag-orange',
      baixa: 'tag tag-blue'
    };
    const labels = {
      alta: 'Alta',
      media: 'Média',
      baixa: 'Baixa'
    };
    return <Badge className={styles[prioridade as keyof typeof styles]}>{labels[prioridade as keyof typeof labels]}</Badge>;
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Gestão de Vagas</h1>
          <p className="text-muted-foreground">{vagas.length} vagas cadastradas</p>
        </div>
        <Dialog open={showNewVagaDialog} onOpenChange={setShowNewVagaDialog}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Nova Vaga
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Criar Nova Vaga</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Título da Vaga</Label>
                  <Input placeholder="Ex: Desenvolvedor Full Stack" />
                </div>
                <div className="space-y-2">
                  <Label>Departamento</Label>
                  <Input placeholder="Ex: Tecnologia" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tipo de Contratação</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CLT">CLT</SelectItem>
                      <SelectItem value="PJ">PJ</SelectItem>
                      <SelectItem value="Estágio">Estágio</SelectItem>
                      <SelectItem value="Temporário">Temporário</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Prioridade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alta">Alta</SelectItem>
                      <SelectItem value="media">Média</SelectItem>
                      <SelectItem value="baixa">Baixa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Localização</Label>
                <Input placeholder="Ex: São Paulo, SP - Híbrido" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Salário Mínimo (R$)</Label>
                  <Input type="number" placeholder="8000" />
                </div>
                <div className="space-y-2">
                  <Label>Salário Máximo (R$)</Label>
                  <Input type="number" placeholder="12000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Descrição da Vaga</Label>
                <Textarea
                  placeholder="Descreva as responsabilidades e o perfil desejado..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Requisitos (separados por vírgula)</Label>
                <Textarea
                  placeholder="React, Node.js, TypeScript, 5+ anos de experiência"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Benefícios (separados por vírgula)</Label>
                <Textarea
                  placeholder="Vale refeição, Plano de saúde, Home office flexível"
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1">Criar Vaga</Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowNewVagaDialog(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar por título ou departamento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas</SelectItem>
                <SelectItem value="aberta">Abertas</SelectItem>
                <SelectItem value="pausada">Pausadas</SelectItem>
                <SelectItem value="fechada">Fechadas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Vagas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredVagas.map((vaga) => (
          <Card key={vaga.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="mb-2">{vaga.titulo}</CardTitle>
                  <div className="flex items-center gap-2 flex-wrap">
                    {getStatusBadge(vaga.status)}
                    {getPrioridadeBadge(vaga.prioridade)}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="w-4 h-4" />
                  <span>{vaga.departamento}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{vaga.tipo}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(vaga.dataAbertura).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{vaga.candidatosCount} candidatos</span>
                </div>
              </div>

              {vaga.salarioMin && vaga.salarioMax && (
                <div className="flex items-center gap-2 text-sm text-gray-700 p-3 bg-muted rounded-lg border border-border">
                  <DollarSign className="w-4 h-4" />
                  <span>
                    R$ {vaga.salarioMin.toLocaleString()} - R$ {vaga.salarioMax.toLocaleString()}
                  </span>
                </div>
              )}

              <p className="text-sm text-gray-600 line-clamp-2">{vaga.descricao}</p>

              <div className="flex gap-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 gap-2"
                      onClick={() => setSelectedVaga(vaga)}
                    >
                      <Eye className="w-4 h-4" />
                      Ver Detalhes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{vaga.titulo}</DialogTitle>
                    </DialogHeader>
                    {selectedVaga && (
                      <div className="space-y-6 py-4">
                        <div className="flex gap-2">
                          {getStatusBadge(selectedVaga.status)}
                          {getPrioridadeBadge(selectedVaga.prioridade)}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Departamento</p>
                            <p className="text-gray-900">{selectedVaga.departamento}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Localização</p>
                            <p className="text-gray-900">{selectedVaga.localizacao}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Tipo</p>
                            <p className="text-gray-900">{selectedVaga.tipo}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Data de Abertura</p>
                            <p className="text-gray-900">
                              {new Date(selectedVaga.dataAbertura).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                        </div>

                        {selectedVaga.salarioMin && selectedVaga.salarioMax && (
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Faixa Salarial</p>
                            <p className="text-gray-900">
                              R$ {selectedVaga.salarioMin.toLocaleString()} - R$ {selectedVaga.salarioMax.toLocaleString()}
                            </p>
                          </div>
                        )}

                        <div>
                          <p className="text-sm text-gray-600 mb-2">Descrição</p>
                          <p className="text-gray-700">{selectedVaga.descricao}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 mb-2">Requisitos</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedVaga.requisitos.map((req, index) => (
                              <Badge key={index} variant="outline">{req}</Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 mb-2">Benefícios</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedVaga.beneficios.map((ben, index) => (
                              <Badge
                                key={index}
                                className="tag tag-blue"
                              >
                                {ben}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {selectedVaga.knockoutQuestions && selectedVaga.knockoutQuestions.length > 0 && (
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Perguntas Eliminatórias</p>
                            <div className="space-y-2">
                              {selectedVaga.knockoutQuestions.map((kq) => (
                                <div key={kq.id} className="p-3 bg-muted rounded-lg border border-border">
                                  <p className="text-sm text-gray-900">{kq.pergunta}</p>
                                  {kq.eliminatoria && (
                                    <Badge className="mt-2 tag tag-red text-xs">
                                      Eliminatória
                                    </Badge>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="bg-muted p-4 rounded-lg border border-border">
                          <p className="text-sm text-gray-700">
                            <strong>{selectedVaga.candidatosCount}</strong> candidatos aplicados para esta vaga
                          </p>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="gap-2">
                  <Edit className="w-4 h-4" />
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
