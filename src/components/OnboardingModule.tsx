import { useState } from 'react';
import { UserPlus, CheckCircle, Circle, Clock, FileText, GraduationCap, Settings, Users as UsersIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { mockNovoContratados } from '../lib/mockData';
import { NovoContratado } from '../types';

export function OnboardingModule() {
  const [novosContratados, setNovosContratados] = useState<NovoContratado[]>(mockNovoContratados);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      'pre-admissao': 'tag tag-blue',
      'em-onboarding': 'tag tag-yellow',
      'concluido': 'tag tag-green'
    };
    const labels: Record<string, string> = {
      'pre-admissao': 'Pré-Admissão',
      'em-onboarding': 'Em Onboarding',
      'concluido': 'Concluído'
    };
    return <Badge className={styles[status]}>{labels[status]}</Badge>;
  };

  const getTaskStatusIcon = (status: string) => {
    switch (status) {
      case 'concluida':
        return <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'em-andamento':
        return <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground dark:text-muted-foreground" />;
    }
  };

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case 'documentacao':
        return <FileText className="w-4 h-4" />;
      case 'treinamento':
        return <GraduationCap className="w-4 h-4" />;
      case 'setup':
        return <Settings className="w-4 h-4" />;
      case 'integracao':
        return <UsersIcon className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  const toggleTaskStatus = (contratadoId: string, taskId: string) => {
        setNovosContratados(prev => prev.map(contratado => {
      if (contratado.id === contratadoId) {
        const updatedTasks = contratado.tasks.map(task => {
          if (task.id === taskId) {
            let newStatus: 'pendente' | 'em-andamento' | 'concluida';
            if (task.status === 'concluida') {
              newStatus = 'pendente';
            } else if (task.status === 'pendente') {
              newStatus = 'em-andamento';
            } else {
              newStatus = 'concluida';
            }
            return { ...task, status: newStatus };
          }
          return task;
        });

        const completedTasks = updatedTasks.filter(t => t.status === 'concluida').length;
        const progresso = Math.round((completedTasks / updatedTasks.length) * 100);

        return {
          ...contratado,
          tasks: updatedTasks,
          progresso,
          status: progresso === 100 ? 'concluido' : progresso > 30 ? 'em-onboarding' : 'pre-admissao'
        };
      }
      return contratado;
    }))
  };

  const totalContratados = novosContratados.length;
  const emOnboarding = novosContratados.filter(c => c.status === 'em-onboarding').length;
  const concluidos = novosContratados.filter(c => c.status === 'concluido').length;

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Onboarding de Novos Colaboradores</h1>
        <p className="text-muted-foreground">{totalContratados} novo(s) colaborador(es) em processo</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted">
                <UserPlus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalContratados}</p>
                <p className="text-sm text-muted-foreground">Total de Novos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted">
                <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{emOnboarding}</p>
                <p className="text-sm text-muted-foreground">Em Onboarding</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{concluidos}</p>
                <p className="text-sm text-muted-foreground">Concluídos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Novos Contratados */}
      <div className="space-y-6">
        {novosContratados.map((contratado) => (
          <Card key={contratado.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle>{contratado.nome}</CardTitle>
                    {getStatusBadge(contratado.status)}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Cargo</p>
                      <p className="text-foreground font-medium">{contratado.cargo}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Departamento</p>
                      <p className="text-foreground font-medium">{contratado.departamento}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Data de Início</p>
                      <p className="text-foreground font-medium">
                        {new Date(contratado.dataInicio).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className='cursor-pointer hover:bg-gray-400/40'>Ver Todos os Detalhes</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto ">
                    <DialogHeader>
                      <DialogTitle>Onboarding - {contratado.nome}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Nome</p>
                          <p className="text-foreground font-medium">{contratado.nome}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Email</p>
                          <p className="text-foreground font-medium">{contratado.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Cargo</p>
                          <p className="text-foreground font-medium">{contratado.cargo}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Departamento</p>
                          <p className="text-foreground font-medium">{contratado.departamento}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Gestor</p>
                          <p className="text-foreground font-medium">{contratado.gestor}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Data de Início</p>
                          <p className="text-foreground font-medium">
                            {new Date(contratado.dataInicio).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Progresso Geral</p>
                        <div className="flex items-center gap-3">
                          <Progress value={contratado.progresso} className="flex-1" />
                          <span className="text-sm text-foreground font-medium">{contratado.progresso}%</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-3">Tarefas de Onboarding</h4>
                        <div className="space-y-2">
                          {contratado.tasks.map((task) => {
                            const statusColor = task.status === 'concluida' ? 'green' : task.status === 'em-andamento' ? 'yellow' : 'gray';
                            const statusLabel = task.status === 'concluida' ? 'Concluída' : task.status === 'em-andamento' ? 'Em Andamento' : 'Pendente';
                            return (
                              <div key={task.id} className="p-4 border rounded-lg bg-muted">
                                <div className="flex items-start gap-3">
                                  <button
                                    onClick={() => toggleTaskStatus(contratado.id, task.id)}
                                    className="shrink-0 mt-0.5 cursor-pointer"
                                  >
                                    {getTaskStatusIcon(task.status)}
                                  </button>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-1">
                                      <h5 className="text-sm font-medium text-foreground">{task.titulo}</h5>
                                      <div className="flex items-center gap-2">
                                        <span className={`tag tag-${statusColor} text-xs`}>{statusLabel}</span>
                                        {task.obrigatoria && (
                                          <Badge variant="outline" className="text-xs ml-2">
                                            Obrigatória
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{task.descricao}</p>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                      <div className="flex items-center gap-1">
                                        {getCategoriaIcon(task.categoria)}
                                        <span className="capitalize">{task.categoria}</span>
                                      </div>
                                      <span>Responsável: {task.responsavel}</span>
                                      <span>Prazo: {new Date(task.prazo).toLocaleDateString('pt-BR')}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Progress Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progresso</span>
                  <span className="text-sm text-gray-900">{contratado.progresso}%</span>
                </div>
                <Progress value={contratado.progresso} />
              </div>

              {/* Tasks Summary */}
              <div className="grid grid-cols-4 gap-4">
                {['documentacao', 'setup', 'treinamento', 'integracao'].map((categoria) => {
                  const tasksByCategory = contratado.tasks.filter(t => t.categoria === categoria);
                  const completedTasks = tasksByCategory.filter(t => t.status === 'concluida').length;
                  
                  const labels: Record<string, string> = {
                    documentacao: 'Documentação',
                    setup: 'Setup',
                    treinamento: 'Treinamento',
                    integracao: 'Integração'
                  };

                  return (
                    <div key={categoria} className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        {getCategoriaIcon(categoria)}
                        <p className="text-xs text-gray-600">{labels[categoria]}</p>
                      </div>
                      <p className="text-lg text-gray-900">
                        {completedTasks}/{tasksByCategory.length}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Next Tasks */}
              <div>
                <h4 className="text-sm text-gray-900 mb-3">Próximas Tarefas</h4>
                <div className="space-y-2">
                  {contratado.tasks
                    .filter(t => t.status !== 'concluida')
                    .slice(0, 3)
                    .map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start gap-3 p-3 border-2 border-border rounded-lg hover:bg-gray-400/20 hover:border-accent hover:shadow-md transition-colors"
                      >
                        <button
                          onClick={() => toggleTaskStatus(contratado.id, task.id)}
                          className="shrink-0 mt-0.5 cursor-pointer"
                        >
                          {getTaskStatusIcon(task.status)}
                        </button>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <p className="text-sm text-foreground font-medium">{task.titulo}</p>
                            {task.obrigatoria && (
                              <Badge variant="default" className="text-xs ml-2">Obrigatória</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{task.descricao}</p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>Responsável: {task.responsavel}</span>
                            <span>•</span>
                            <span>Prazo: {new Date(task.prazo).toLocaleDateString('pt-BR')}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {novosContratados.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <UserPlus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg text-gray-900 mb-2">Nenhum novo colaborador em onboarding</h3>
            <p className="text-sm text-gray-600">
              Quando houver aprovações de candidatos, eles aparecerão aqui para o processo de admissão.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
