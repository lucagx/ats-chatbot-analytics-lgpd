import { useState } from 'react';
import { Briefcase, Users, MessageSquare, BarChart3, Shield, Calendar, FileCheck, UserPlus, Home } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { VagasModule } from './components/VagasModule';
import { CandidatosModule } from './components/CandidatosModule';
import { ChatbotModule } from './components/ChatbotModule';
import { AnalyticsModule } from './components/AnalyticsModule';
import { LGPDModule } from './components/LGPDModule';
import { AgendamentoModule } from './components/AgendamentoModule';
import { AvaliacoesModule } from './components/AvaliacoesModule';
import { OnboardingModule } from './components/OnboardingModule';

import { ThemeToggle } from './components/ThemeToggle';
type Module = 
  | 'dashboard'
  | 'vagas'
  | 'candidatos'
  | 'chatbot'
  | 'analytics'
  | 'lgpd'
  | 'agendamento'
  | 'avaliacoes'
  | 'onboarding';

export default function App() {
  const [activeModule, setActiveModule] = useState<Module>('dashboard');

  const menuItems = [
    { id: 'dashboard' as Module, label: 'Dashboard', icon: Home },
    { id: 'vagas' as Module, label: 'Vagas', icon: Briefcase },
    { id: 'candidatos' as Module, label: 'Candidatos', icon: Users },
    { id: 'chatbot' as Module, label: 'Chatbot', icon: MessageSquare },
    { id: 'avaliacoes' as Module, label: 'Avaliações', icon: FileCheck },
    { id: 'agendamento' as Module, label: 'Agendamento', icon: Calendar },
    { id: 'onboarding' as Module, label: 'Onboarding', icon: UserPlus },
    { id: 'analytics' as Module, label: 'Analytics', icon: BarChart3 },
    { id: 'lgpd' as Module, label: 'LGPD', icon: Shield },
  ];

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveModule} />;
      case 'vagas':
        return <VagasModule />;
      case 'candidatos':
        return <CandidatosModule />;
      case 'chatbot':
        return <ChatbotModule />;
      case 'analytics':
        return <AnalyticsModule />;
      case 'lgpd':
        return <LGPDModule />;
      case 'agendamento':
        return <AgendamentoModule />;
      case 'avaliacoes':
        return <AvaliacoesModule />;
      case 'onboarding':
        return <OnboardingModule />;
      default:
        return <Dashboard onNavigate={setActiveModule} />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold text-foreground">Sistema ATS</h1>
          <p className="text-sm text-muted-foreground mt-1">Recrutamento Automatizado</p>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                type="button"
                className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'active shadow font-medium' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            Sistema de Recrutamento Integrado
            <br />
            Conforme LGPD
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-background text-foreground">
        {renderModule()}
      </main>
    </div>
  );
}
