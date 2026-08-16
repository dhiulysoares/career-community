import { useState, useRef, useEffect } from 'react';
import { chatMessages } from '../data/mockData';

const avatarColors = {
  MS: 'bg-primary-600',
  PH: 'bg-emerald-600',
  AB: 'bg-pink-600',
  LF: 'bg-amber-600',
};

function getRoleBadgeClass(role) {
  if (role === 'Mentor') return 'badge badge-mentor';
  if (role === 'Moderador Start') return 'badge badge-moderador';
  if (role === 'Bot') return 'badge badge-bot';
  return '';
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function ChatTab() {
  const [messages] = useState(chatMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    // Simulação - apenas limpa input
    setInputValue('');
  };

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-12rem)] flex flex-col">
      {/* Chat header */}
      <div className="card px-5 py-3 mb-4 flex items-center justify-between shrink-0">
        <div>
          <h2 className="font-semibold text-dark-100">💬 Chat - Empresa Júnior</h2>
          <p className="text-xs text-dark-500">🟢 23 membros online</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge badge-tag text-xs">🚀 EJ</span>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-4 scrollbar-thin scrollbar-thumb-dark-700">
        {messages.map((msg) => {
          const isBot = msg.author.role === 'Bot';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 p-3 rounded-xl transition-all duration-150 hover:bg-dark-800/50 ${
                isBot ? 'border-l-2 border-blue-500 bg-dark-800/30' : ''
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 ${
                  isBot ? 'bg-blue-600' : avatarColors[msg.author.avatar] || 'bg-primary-600'
                }`}
              >
                {isBot ? '🤖' : msg.author.avatar}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-semibold text-dark-100 text-sm">
                    {msg.author.name}
                  </span>
                  {msg.author.badge && (
                    <span className="text-xs">{msg.author.badge}</span>
                  )}
                  {msg.author.role !== 'Membro' && (
                    <span className={getRoleBadgeClass(msg.author.role)}>
                      {msg.author.role}
                    </span>
                  )}
                  <span className="text-xs text-dark-600 ml-auto shrink-0">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                <p className="text-sm text-dark-200 leading-relaxed whitespace-pre-line">
                  {msg.content}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form onSubmit={handleSend} className="shrink-0 flex items-center gap-2">
        {/* Attach button */}
        <button
          type="button"
          className="p-2.5 rounded-lg bg-dark-800 text-dark-400 hover:text-dark-200 hover:bg-dark-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </button>

        {/* Input */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-1 bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-sm text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-all"
        />

        {/* Send button */}
        <button
          type="submit"
          className="p-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!inputValue.trim()}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatTab;
