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

const bottomNavItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'comunidades', label: 'Comunidades', icon: '🏘️' },
  { id: 'chat', label: 'Chat', icon: '💬' },
  { id: 'perfil', label: 'Perfil', icon: '🧠' },
];

const moreMenuItems = [
  { id: 'editais', label: 'Editais', icon: '📋' },
  { id: 'pontuacao', label: 'Pontuação', icon: '🏆' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isVeterano, setIsVeterano] = useState(false);
  const [showPublicProfile, setShowPublicProfile] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [toast, setToast] = useState(null);

  const userDisplay = {
    ...currentUser,
    semester: isVeterano ? '6º semestre' : currentUser.semester,
    karma: isVeterano ? 890 : currentUser.karma,
    tags: isVeterano
      ? ['fullstack', 'mentor', 'ej', 'react']
      : currentUser.tags,
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const getPageTitle = () => {
    if (showPublicProfile) return 'Perfil Público';
    const tab = tabs.find((t) => t.id === activeTab);
    return tab ? tab.label : 'Home';
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
        return <HomeFeed isVeterano={isVeterano} showToast={showToast} />;
      case 'perfil':
        return <PersonaTab userDisplay={userDisplay} />;
      case 'comunidades':
        return <CommunitiesTab showToast={showToast} />;
      case 'editais':
        return <EditaisTab isVeterano={isVeterano} showToast={showToast} />;
      case 'chat':
        return <ChatTab />;
      case 'pontuacao':
        return <KarmaTab />;
      default:
        return <HomeFeed isVeterano={isVeterano} showToast={showToast} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-dark-50 flex">
      {/* Toast notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-[100] animate-slide-in">
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg border backdrop-blur-sm ${
              toast.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : toast.type === 'info'
                ? 'bg-primary-500/10 border-primary-500/30 text-primary-400'
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}
          >
            <span className="text-sm font-medium">{toast.message}</span>
            <button
              onClick={() => setToast(null)}
              className="ml-2 text-dark-400 hover:text-dark-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* More menu overlay (mobile) */}
      {showMoreMenu && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setShowMoreMenu(false)}
        />
      )}

      {/* Sidebar - Collapsible on desktop */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-dark-900 border-r border-dark-700 flex flex-col transform transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'
        } ${sidebarCollapsed ? 'lg:w-[72px]' : 'lg:w-64'}`}
      >
        {/* Logo / Brand */}
        <div className={`p-4 border-b border-dark-700 ${sidebarCollapsed ? 'flex justify-center' : ''}`}>
          <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-dark-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-lg font-bold text-primary-400">Tamo Junto</h1>
                <p className="text-xs text-dark-400 font-medium">por UNIASSELVI</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar nav */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowPublicProfile(false);
                setSidebarOpen(false);
              }}
              title={sidebarCollapsed ? tab.label : undefined}
              className={`w-full flex items-center gap-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                sidebarCollapsed ? 'justify-center px-2 py-3' : 'px-4 py-2.5'
              } ${
                activeTab === tab.id && !showPublicProfile
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                  : 'text-dark-300 hover:bg-dark-800 hover:text-dark-100'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {!sidebarCollapsed && <span>{tab.label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden lg:block px-2 py-2 border-t border-dark-700">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-dark-400 hover:text-dark-200 hover:bg-dark-800 transition-colors text-sm"
            title={sidebarCollapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${sidebarCollapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            {!sidebarCollapsed && <span>Recolher</span>}
          </button>
        </div>

        {/* Avatar compacto no fundo */}
        <div className={`p-3 border-t border-dark-700 ${sidebarCollapsed ? 'flex justify-center' : ''}`}>
          <button
            onClick={() => {
              setShowPublicProfile(true);
              setSidebarOpen(false);
            }}
            className={`flex items-center gap-3 rounded-lg hover:bg-dark-800 transition-colors ${
              sidebarCollapsed ? 'p-1' : 'p-2 w-full'
            }`}
            title="Ver perfil"
          >
            <div className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center text-sm font-bold text-dark-950 shrink-0">
              {currentUser.avatar}
            </div>
            {!sidebarCollapsed && (
              <div className="text-left min-w-0">
                <p className="text-sm font-medium text-dark-100 truncate">{userDisplay.name}</p>
                <p className="text-xs text-dark-500">⚡ {userDisplay.karma} pts</p>
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* Main area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top header - contextual */}
        <header className="sticky top-0 z-30 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
          <div className="flex items-center px-4 py-3 lg:px-6 gap-3">
            {/* Hamburger mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-dark-800 text-dark-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Brand mobile */}
            <span className="lg:hidden text-primary-400 font-bold text-base">Tamo Junto</span>

            {/* Page title (desktop) */}
            <h2 className="hidden lg:block text-lg font-semibold text-white">
              {getPageTitle()}
            </h2>

            {/* Search bar */}
            <div className="hidden sm:flex items-center flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar na comunidade..."
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg pl-10 pr-4 py-2 text-sm text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-all"
                />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-dark-200 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
              </button>

              {/* Toggle Calouro/Veterano */}
              <button
                onClick={() => setIsVeterano(!isVeterano)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  isVeterano
                    ? 'bg-primary-500/20 text-primary-400 border-primary-500/30'
                    : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                }`}
              >
                <span>{isVeterano ? '🏅' : '🎓'}</span>
                <span className="hidden sm:inline">{isVeterano ? 'Veterano' : 'Calouro'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 pb-20 md:pb-6">
          {renderTab()}
        </div>

        {/* Bottom nav mobile - 4 items + More */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-dark-900 border-t border-dark-700 px-2 py-1">
          <div className="flex items-center justify-around">
            {bottomNavItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowPublicProfile(false);
                  setShowMoreMenu(false);
                }}
                className={`flex flex-col items-center py-2 px-2 rounded-lg text-xs transition-colors ${
                  activeTab === tab.id && !showPublicProfile
                    ? 'text-primary-400'
                    : 'text-dark-500'
                }`}
              >
                <span className="text-lg mb-0.5">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}

            {/* More button */}
            <div className="relative">
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className={`flex flex-col items-center py-2 px-2 rounded-lg text-xs transition-colors ${
                  showMoreMenu || moreMenuItems.some((i) => i.id === activeTab)
                    ? 'text-primary-400'
                    : 'text-dark-500'
                }`}
              >
                <span className="text-lg mb-0.5">•••</span>
                <span>Mais</span>
              </button>

              {/* More dropdown */}
              {showMoreMenu && (
                <div className="absolute bottom-full right-0 mb-2 w-44 bg-dark-800 border border-dark-700 rounded-xl shadow-xl overflow-hidden">
                  {moreMenuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setShowPublicProfile(false);
                        setShowMoreMenu(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                        activeTab === item.id
                          ? 'bg-primary-500/20 text-primary-400'
                          : 'text-dark-300 hover:bg-dark-700'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default App;
