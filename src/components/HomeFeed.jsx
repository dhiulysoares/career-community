import { useState } from 'react';
import { feedPosts, personaData } from '../data/mockData';

const filters = ['Recentes', 'Populares', 'Minha Comunidade'];

const avatarColors = {
  MS: 'bg-primary-500',
  PH: 'bg-emerald-600',
  AB: 'bg-pink-600',
  LF: 'bg-amber-600',
  RC: 'bg-cyan-600',
  GS: 'bg-indigo-600',
};

function getRoleBadgeClass(role) {
  if (role === 'Mentor') return 'badge badge-mentor';
  if (role === 'Moderador Start') return 'badge badge-moderador';
  if (role === 'Bot IA') return 'badge badge-bot';
  return 'badge';
}

function HomeFeed({ isVeterano, showToast }) {
  const [activeFilter, setActiveFilter] = useState('Recentes');
  const [showWelcome, setShowWelcome] = useState(true);
  const [votedPosts, setVotedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  const profileCompletion = isVeterano ? 95 : 60;

  const handleVote = (postId, direction) => {
    setVotedPosts((prev) => ({
      ...prev,
      [postId]: prev[postId] === direction ? null : direction,
    }));
    if (showToast) {
      showToast(direction === 'up' ? '👍 Voto registrado' : '👎 Voto registrado', 'info');
    }
  };

  const handleSave = (postId) => {
    const wasSaved = savedPosts[postId];
    setSavedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
    if (showToast) {
      showToast(wasSaved ? '🔖 Removido dos salvos' : '🔖 Post salvo!', 'success');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Onboarding - Welcome card (dismissible) */}
      {showWelcome && !isVeterano && (
        <div className="card p-5 mb-6 border-primary-500/30 bg-gradient-to-r from-dark-800 to-dark-800/50">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-1">
                👋 Bem-vinda à Tamo Junto!
              </h2>
              <p className="text-sm text-dark-300 mb-4">
                Esta é sua comunidade acadêmica. Aqui você encontra mentores, participa
                de projetos e cresce junto com outros estudantes.
              </p>
              {/* Profile completion bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-dark-400 font-medium">Completude do perfil</span>
                  <span className="text-xs font-bold text-primary-400">{profileCompletion}%</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-700 to-primary-400 transition-all duration-700"
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-dark-500">Complete seu perfil para recomendações melhores</p>
            </div>
            <button
              onClick={() => setShowWelcome(false)}
              className="text-dark-500 hover:text-dark-300 p-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Recommended communities - horizontal scroll */}
      {!isVeterano && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-dark-300 mb-3 uppercase tracking-wider">
            Recomendado para você
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {personaData.recommendations.map((rec) => (
              <div
                key={rec.communityName}
                className="flex-shrink-0 w-56 bg-dark-800 border border-dark-700 rounded-xl p-4 hover:border-primary-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-dark-100 truncate">{rec.communityName}</h4>
                  <span className="text-xs font-bold text-primary-400">{rec.matchPercent}%</span>
                </div>
                <p className="text-xs text-dark-400 line-clamp-2 mb-3">{rec.reasons[0]}</p>
                <button className="btn-primary text-xs w-full py-1.5">Entrar</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-4">Seu Feed</h1>
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                activeFilter === filter
                  ? 'bg-primary-500 text-dark-950'
                  : 'bg-dark-800 text-dark-400 hover:bg-dark-700 hover:text-dark-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Feed posts - increased spacing */}
      <div className="space-y-6">
        {feedPosts.map((post) => (
          <article
            key={post.id}
            className="card p-5 transition-all duration-200 hover:border-primary-500/30"
          >
            {/* Simplified author header: Avatar + Name + Badge + Time */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-dark-950 shrink-0 ${
                  avatarColors[post.author.avatar] || 'bg-primary-500'
                }`}
              >
                {post.author.avatar}
              </div>

              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="font-semibold text-dark-100 text-sm truncate">
                  {post.author.name}
                </span>
                {post.author.role !== 'Membro' && (
                  <span className={getRoleBadgeClass(post.author.role)}>
                    {post.author.role}
                  </span>
                )}
              </div>

              <span className="text-xs text-dark-500 shrink-0">{post.timeAgo}</span>
            </div>

            {/* Content */}
            <p className="text-dark-200 text-sm leading-relaxed mb-4">
              {post.content}
            </p>

            {/* Footer: Community + Actions */}
            <div className="flex items-center gap-4 pt-3 border-t border-dark-700/50">
              <span className="text-xs text-dark-500 bg-dark-700/50 px-2 py-0.5 rounded-full">
                📌 {post.community}
              </span>

              <div className="flex items-center gap-4 ml-auto">
                {/* Upvote with animation */}
                <button
                  onClick={() => handleVote(post.id, 'up')}
                  className={`flex items-center gap-1 text-sm transition-all duration-200 ${
                    votedPosts[post.id] === 'up'
                      ? 'text-primary-400 scale-110'
                      : 'text-dark-400 hover:text-primary-400'
                  }`}
                >
                  <span>▲</span>
                  <span className="font-medium">{post.likes + (votedPosts[post.id] === 'up' ? 1 : 0)}</span>
                </button>

                {/* Comments */}
                <div className="flex items-center gap-1 text-dark-400 hover:text-primary-400 transition-colors cursor-pointer text-sm">
                  <span>💬</span>
                  <span className="font-medium">{post.comments}</span>
                </div>

                {/* Bookmark with feedback */}
                <button
                  onClick={() => handleSave(post.id)}
                  className={`transition-all duration-200 ${
                    savedPosts[post.id]
                      ? 'text-primary-400 scale-110'
                      : 'text-dark-400 hover:text-primary-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill={savedPosts[post.id] ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default HomeFeed;
