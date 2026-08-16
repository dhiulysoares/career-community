import { useState } from 'react';
import { currentUser } from './data/mockData';
import HomeFeed from './components/HomeFeed';
import PersonaTab from './components/PersonaTab';
import CommunitiesTab from './components/CommunitiesTab';
import EditaisTab from './components/EditaisTab';
import ChatTab from './components/ChatTab';
import KarmaTab from './components/KarmaTab';

const tabs = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'persona', label: 'Minha Persona', icon: '🧠' },
  { id: 'comunidades', label: 'Comunidades', icon: '🏘️' },
  { id: 'editais', label: 'Editais', icon: '📋' },
  { id: 'chat', label: 'Chat', icon: '💬' },
  { id: 'karma', label: 'Karma', icon: '🏆' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeFeed />;
      case 'persona':
        return <PersonaTab />;
      case 'comunidades':
        return <CommunitiesTab />;
      case 'editais':
        return <EditaisTab />;
      case 'chat':
        return <ChatTab />;
      case 'karma':
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
        <div className="p-6 flex flex-col items-center border-b border-dark-700">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-xl font-bold text-white mb-3">
            {currentUser.avatar}
          </div>
          {/* Nome e info */}
          <h2 className="text-lg font-semibold text-dark-50">{currentUser.name}</h2>
          <p className="text-sm text-dark-400">{currentUser.semester} - SI</p>
          <div className="mt-2 flex items-center gap-1 text-primary-400">
            <span className="text-sm font-medium">⚡ Karma: {currentUser.karma}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="p-4">
          <h3 className="text-xs uppercase text-dark-500 font-semibold mb-3 tracking-wider">Suas Tags</h3>
          <div className="flex flex-wrap gap-2">
            {currentUser.tags.map((tag) => (
              <span key={tag} className="badge badge-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar nav (duplica tabs em mobile) */}
        <nav className="mt-4 px-3 flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 ${
                activeTab === tab.id
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Tabs desktop */}
            <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                    activeTab === tab.id
                      ? 'bg-primary-600/20 text-primary-400 border border-primary-600/30'
                      : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
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
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-2 px-1 rounded-lg text-xs transition-colors ${
                  activeTab === tab.id ? 'text-primary-400' : 'text-dark-500'
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
