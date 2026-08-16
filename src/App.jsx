import { useState } from 'react';
import { currentUser } from './data/mockData';
import HomeFeed from './components/HomeFeed';
import PersonaTab from './components/PersonaTab';
import CommunitiesTab from './components/CommunitiesTab';
import EditaisTab from './components/EditaisTab';
import ChatTab from './components/ChatTab';
import KarmaTab from './components/KarmaTab';
import PublicProfile from './components/PublicProfile';

const tabs = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'perfil', label: 'Meu Perfil', icon: '🧠' },
  { id: 'comunidades', label: 'Comunidades', icon: '🏘️' },
  { id: 'editais', label: 'Editais', icon: '📋' },
  { id: 'chat', label: 'Chat', icon: '💬' },
  { id: 'pontuacao', label: 'Pontuação', icon: '🏆' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isVeterano, setIsVeterano] = useState(false);
  const [showPublicProfile, setShowPublicProfile] = useState(false);

  const userDisplay = {
    ...currentUser,
    semester: isVeterano ? '6º semestre' : currentUser.semester,
    karma: isVeterano ? 890 : currentUser.karma,
    tags: isVeterano
      ? ['fullstack', 'mentor', 'ej', 'react']
      : currentUser.tags,
  };

  const renderTab = () => {
    if (showPublicProfile) {
      return (
        <PublicProfile
          user={userDisplay}
          isVeterano={isVeterano}
          onBack={() => setShowPublicProfile(false)}
        />
      );
    }
    switch (activeTab) {
      case 'home':
        return <HomeFeed />;
      case 'perfil':
        return <PersonaTab />;
      case 'comunidades':
        return <CommunitiesTab />;
      case 'editais':
        return <EditaisTab isVeterano={isVeterano} />;
      case 'chat':
        return <ChatTab />;
      case 'pontuacao':
        return <KarmaTab />;
      default:
        return <HomeFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-dark-50 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-dark-900 border-r border-dark-700 flex flex-col transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* User info */}
        <div className="p-6 flex flex-col items-center border-b border-dark-700">
          {/* Avatar - clicável para perfil público */}
          <button
            onClick={() => {
              setShowPublicProfile(true);
              setSidebarOpen(false);
            }}
            className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-xl font-bold text-white mb-3 hover:ring-2 hover:ring-primary-400 transition-all"
            title="Ver perfil público"
          >
            {currentUser.avatar}
          </button>
          <h2 className="text-lg font-semibold text-dark-50">{userDisplay.name}</h2>
          <p className="text-sm text-dark-400">{userDisplay.semester} - SI</p>
          <div className="mt-2 flex items-center gap-1 text-primary-400">
            <span className="text-sm font-medium">⚡ Pontuação: {userDisplay.karma}</span>
          </div>
          {/* Link para perfil público */}
          <button
            onClick={() => {
              setShowPublicProfile(true);
              setSidebarOpen(false);
            }}
            className="mt-3 text-xs text-dark-400 hover:text-primary-400 underline transition-colors"
          >
            Ver perfil público
          </button>
        </div>

        {/* Toggle Calouro/Veterano */}
        <div className="px-4 py-3 border-b border-dark-700">
          <p className="text-xs uppercase text-dark-500 font-semibold mb-2 tracking-wider">
            Visão da Plataforma
          </p>
          <div className="flex items-center bg-dark-800 rounded-lg p-1">
            <button
              onClick={() => setIsVeterano(false)}
              className={`flex-1 text-xs font-medium py-2 px-3 rounded-md transition-all duration-200 ${
                !isVeterano
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-dark-400 hover:text-dark-200'
              }`}
            >
              🎓 Calouro
            </button>
            <button
              onClick={() => setIsVeterano(true)}
              className={`flex-1 text-xs font-medium py-2 px-3 rounded-md transition-all duration-200 ${
                isVeterano
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-dark-400 hover:text-dark-200'
              }`}
            >
              🏅 Veterano
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="p-4">
          <h3 className="text-xs uppercase text-dark-500 font-semibold mb-3 tracking-wider">
            Suas Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {userDisplay.tags.map((tag) => (
              <span key={tag} className="badge badge-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar nav */}
        <nav className="mt-4 px-3 flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowPublicProfile(false);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 ${
                activeTab === tab.id && !showPublicProfile
                  ? 'bg-primary-600/20 text-primary-400 border border-primary-600/30'
                  : 'text-dark-300 hover:bg-dark-800 hover:text-dark-100'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top header */}
        <header className="sticky top-0 z-30 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
          <div className="flex items-center px-4 py-3 lg:px-6">
            {/* Hamburger mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden mr-3 p-2 rounded-lg hover:bg-dark-800 text-dark-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Tabs desktop */}
            <nav className="hidden md:flex items-center gap-1 overflow-x-auto flex-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowPublicProfile(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                    activeTab === tab.id && !showPublicProfile
                      ? 'bg-primary-600/20 text-primary-400 border border-primary-600/30'
                      : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>

            {/* Toggle Calouro/Veterano - header (desktop) */}
            <div className="hidden md:flex items-center gap-2 ml-4">
              <span className="text-xs text-dark-500">Visão:</span>
              <button
                onClick={() => setIsVeterano(!isVeterano)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  isVeterano
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                }`}
              >
                <span>{isVeterano ? '🏅' : '🎓'}</span>
                <span>{isVeterano ? 'Veterano' : 'Calouro'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          {renderTab()}
        </div>

        {/* Bottom nav mobile */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-dark-900 border-t border-dark-700 px-2 py-1">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowPublicProfile(false);
                }}
                className={`flex flex-col items-center py-2 px-1 rounded-lg text-xs transition-colors ${
                  activeTab === tab.id && !showPublicProfile
                    ? 'text-primary-400'
                    : 'text-dark-500'
                }`}
              >
                <span className="text-lg mb-0.5">{tab.icon}</span>
                <span className="truncate max-w-[3.5rem]">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </main>
    </div>
  );
}

export default App;
