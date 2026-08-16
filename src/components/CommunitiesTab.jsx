import { useState } from 'react';
import { communities, communityPosts } from '../data/mockData';

const subNavItems = ['Feed', 'Projetos', 'Membros', 'Chat'];

const avatarColors = {
  LF: 'bg-amber-600',
  RC: 'bg-cyan-600',
  GS: 'bg-indigo-600',
  MS: 'bg-primary-600',
  PH: 'bg-emerald-600',
};

function getRoleBadgeClass(role) {
  if (role === 'Mentor') return 'badge badge-mentor';
  if (role === 'Moderador Start') return 'badge badge-moderador';
  return 'badge';
}

function CommunitiesTab() {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [activeSubNav, setActiveSubNav] = useState('Feed');

  // Grid View
  if (!selectedCommunity) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-dark-50 mb-6">Comunidades</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {communities.map((community) => (
            <div
              key={community.id}
              className="card p-5 hover:border-primary-600/40 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              {/* Emoji + Name */}
              <div className="text-center mb-4">
                <span className="text-4xl block mb-2">{community.emoji}</span>
                <h3 className="font-semibold text-dark-100 text-lg">{community.name}</h3>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center gap-4 mb-4 text-sm text-dark-400">
                <span className="flex items-center gap-1">
                  👥 {community.members}
                </span>
                <span className="flex items-center gap-1">
                  ⭐ {community.rating}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-dark-400 text-center mb-4 line-clamp-2">
                {community.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {community.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="badge badge-tag text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={() => {
                  setSelectedCommunity(community);
                  setActiveSubNav('Feed');
                }}
                className="btn-primary w-full text-sm"
              >
                Entrar
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Internal View
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setSelectedCommunity(null)}
          className="p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-dark-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-2xl">{selectedCommunity.emoji}</span>
        <h1 className="text-xl font-bold text-dark-50">{selectedCommunity.name}</h1>
        <span className="text-sm text-dark-400 ml-auto">👥 {selectedCommunity.members} membros</span>
      </div>

      {/* Sub-navigation */}
      <div className="flex items-center gap-1 mb-6 border-b border-dark-700 pb-3">
        {subNavItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveSubNav(item)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
              activeSubNav === item
                ? 'bg-primary-600/20 text-primary-400 border border-primary-600/30'
                : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Feed content */}
      {activeSubNav === 'Feed' && (
        <div className="space-y-4">
          {communityPosts.map((post) => (
            <article
              key={post.id}
              className="card p-5 transition-all duration-200 hover:border-primary-600/30"
            >
              {/* Author */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 ${
                    avatarColors[post.author.avatar] || 'bg-primary-600'
                  }`}
                >
                  {post.author.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-dark-100 text-sm">
                      {post.author.name}
                    </span>
                    {post.author.role !== 'Membro' && (
                      <span className={getRoleBadgeClass(post.author.role)}>
                        {post.author.role}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-dark-500 mt-0.5">
                    <span>{post.author.semester}</span>
                    <span>• ⚡{post.author.karma}</span>
                  </div>
                </div>

                <span className="text-xs text-dark-500 shrink-0">{post.timeAgo}</span>
              </div>

              {/* Content */}
              <p className="text-dark-200 text-sm leading-relaxed mb-4">
                {post.content}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-6 pt-3 border-t border-dark-700/50">
                <div className="flex items-center gap-1.5 text-dark-400 hover:text-primary-400 transition-colors cursor-pointer">
                  <span className="text-sm">▲</span>
                  <span className="text-sm font-medium">{post.likes}</span>
                  <span className="text-sm">▼</span>
                </div>
                <div className="flex items-center gap-1.5 text-dark-400 hover:text-primary-400 transition-colors cursor-pointer">
                  <span>💬</span>
                  <span className="text-sm font-medium">{post.comments}</span>
                </div>
                <button className="ml-auto text-dark-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Placeholder for other sub-navs */}
      {activeSubNav === 'Projetos' && (
        <div className="card p-8 text-center">
          <span className="text-4xl block mb-3">🚧</span>
          <p className="text-dark-400">Seção de projetos em construção</p>
        </div>
      )}
      {activeSubNav === 'Membros' && (
        <div className="card p-8 text-center">
          <span className="text-4xl block mb-3">👥</span>
          <p className="text-dark-400">Lista de membros em breve</p>
        </div>
      )}
      {activeSubNav === 'Chat' && (
        <div className="card p-8 text-center">
          <span className="text-4xl block mb-3">💬</span>
          <p className="text-dark-400">Chat da comunidade disponível na aba Chat</p>
        </div>
      )}
    </div>
  );
}

export default CommunitiesTab;
