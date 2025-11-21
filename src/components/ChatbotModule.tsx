import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageSquare, Check, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
// Replaced Badge usages with .tag system
import { ScrollArea } from './ui/scroll-area';
import { mockChatSessions } from '../lib/mockData';
import { ChatMessage, ChatSession } from '../types';

export function ChatbotModule() {
  const [sessions] = useState<ChatSession[]>(mockChatSessions);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(mockChatSessions[0]);
  const [currentMessages, setCurrentMessages] = useState<ChatMessage[]>(
    mockChatSessions[0]?.mensagens || []
  );
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentMessages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      tipo: 'user',
      mensagem: inputMessage,
      timestamp: new Date().toISOString()
    };

    setCurrentMessages([...currentMessages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: `msg-${Date.now()}-bot`,
        tipo: 'bot',
        mensagem: getBotResponse(inputMessage),
        timestamp: new Date().toISOString()
      };
      setCurrentMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userMsg: string): string => {
    const msg = userMsg.toLowerCase();
    
    if (msg.includes('vaga') || msg.includes('oportunidade')) {
      return 'Temos algumas vagas abertas! Você gostaria de saber sobre vagas em Tecnologia, Business Intelligence, Produto ou Design?';
    }
    if (msg.includes('tecnologia') || msg.includes('dev')) {
      return 'Excelente! Temos a vaga de Desenvolvedor Full Stack Sênior. Para prosseguir com sua candidatura, preciso coletar seu consentimento para tratamento de dados pessoais conforme a LGPD. Você concorda?';
    }
    if (msg.includes('sim') || msg.includes('concordo')) {
      return 'Ótimo! Vou registrar seu consentimento. Por favor, me informe seu nome completo:';
    }
    return 'Obrigado pela sua mensagem! Como posso ajudá-lo hoje?';
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    handleSendMessage();
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-gray-900 mb-2">Chatbot de Recrutamento</h1>
        <p className="text-gray-600">Conversações e triagem automatizada</p>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Sessions List */}
        <div className="col-span-3">
          <Card className="h-full flex flex-col bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Conversas Ativas</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
              <div className="space-y-1 p-4">
                {sessions.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => {
                      setSelectedSession(session);
                      setCurrentMessages(session.mensagens);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedSession?.id === session.id
                        ? 'bg-muted border border-border'
                        : 'hover:bg-accent border border-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm text-foreground font-medium truncate flex-1">
                        {session.candidatoNome || 'Visitante Anônimo'}
                      </p>
                      <span className={`ml-2 tag tag-${session.status === 'ativo' ? 'green' : 'gray'}`}>{session.status}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {session.mensagens[session.mensagens.length - 1]?.mensagem}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="tag tag-blue text-xs">{session.canal}</span>
                      <span className="text-xs text-gray-400">
                        {new Date(session.dataInicio).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="col-span-9">
          <Card className="h-full flex flex-col bg-card">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">
                    {selectedSession?.candidatoNome || 'Selecione uma conversa'}
                  </CardTitle>
                  {selectedSession && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="tag tag-blue text-xs">{selectedSession.canal}</span>
                      {selectedSession.candidatoEmail && (
                        <span className="text-xs text-gray-500">
                          {selectedSession.candidatoEmail}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                {selectedSession?.contexto.consentimentoColetado && (
                  <span className="tag tag-green flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Consentimento LGPD
                  </span>
                )}
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              {/* Messages */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {currentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.tipo === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.tipo === 'bot'
                            ? 'bg-blue-100'
                            : 'bg-gray-200'
                        }`}
                      >
                        {message.tipo === 'bot' ? (
                          <Bot className="w-4 h-4 text-blue-600" />
                        ) : (
                          <User className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                      
                      <div className={`flex-1 max-w-[70%] ${
                        message.tipo === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        <div
                          className={`inline-block px-4 py-3 rounded-2xl ${
                            message.tipo === 'bot'
                              ? 'bg-muted text-foreground'
                              : 'bg-blue-600 text-white'
                          }`}
                        >
                          <p className="text-sm">{message.mensagem}</p>
                        </div>
                        <p className="text-xs text-gray-400 mt-1 px-2">
                          {new Date(message.timestamp).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                        
                        {message.opcoes && message.opcoes.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {message.opcoes.map((opcao, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuickReply(opcao)}
                                className="text-xs"
                              >
                                {opcao}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-3">
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="gap-2">
                    <Send className="w-4 h-4" />
                    Enviar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{sessions.length}</p>
                <p className="text-sm text-gray-600">Conversas Totais</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">
                  {sessions.filter(s => s.contexto.consentimentoColetado).length}
                </p>
                <p className="text-sm text-gray-600">Consentimentos Coletados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">
                  {sessions.filter(s => s.status === 'ativo').length}
                </p>
                <p className="text-sm text-gray-600">Conversas Ativas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
