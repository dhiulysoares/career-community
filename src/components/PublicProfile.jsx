import { karmaData, feedPosts, communities } from '../data/mockData';

function PublicProfile({ user, isVeterano, onBack }) {
  const unlockedBadges = karmaData.badges.filter((b) => b.unlocked);
  const userPosts = feedPosts
    .filter((p) => p.author.name === user.name)
    .slice(0, 3);

  const userCommunities = isVeterano
    ? communities.filter((c) => c.id === 'comm-001' || c.id === 'comm-004')
    : communities.filter((c) => c.id === 'comm-001' || c.id === 'comm-002');

  const bio = isVeterano
    ? 'Desenvolvedor fullstack com experiência em projetos da Empresa Júnior. Mentor ativo, ajudando calouros a trilharem seu caminho na tecnologia. Apaixonado por código limpo e boas práticas.'
    : 'Estudante de Sistemas de Informação apaixonada por tecnologia e inovação. Buscando minha primeira experiência profissional e querendo contribuir com a comunidade acadêmica.';

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Botão Voltar */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
      >
        <span className="text-lg">←</span>
        <span className="text-sm font-medium">Voltar</span>
      </button>

      {/* Header do perfil */}
      <div className="card p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          {/* Avatar grande */}
          <div className="w-24 h-24 rounded-full bg-primary-500 text-3xl font-bold text-dark-950 flex items-center justify-center shrink-0">
            {user.avatar}
          </div>

          {/* Info */}
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-1">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              {isVeterano && (
                <span className="badge badge-mentor">🏅 Mentor</span>
              )}
            </div>
            <p className="text-dark-400 mb-1">
              {user.semester} — Sistemas de Informação
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-primary-400">
              <span className="text-lg font-bold">⚡ {user.karma}</span>
              <span className="text-sm text-dark-400">pontos de contribuição</span>
            </div>
            <p className="text-sm text-dark-500 mt-1">
              Membro desde março de 2026
            </p>
          </div>
        </div>
      </div>

      {/* Sobre */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span>📝</span> Sobre
        </h2>
        <p className="text-dark-300 text-sm leading-relaxed">{bio}</p>
      </div>

      {/* Tags */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span>🏷️</span> Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          {user.tags.map((tag) => (
            <span key={tag} className="badge badge-tag text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Comunidades */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>🏘️</span> Comunidades ({userCommunities.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {userCommunities.map((comm) => (
            <div
              key={comm.id}
              className="bg-dark-700/50 border border-dark-600 rounded-xl p-4 hover:border-primary-500/40 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{comm.emoji}</span>
                <div>
                  <h3 className="font-semibold text-dark-100 text-sm">
                    {comm.name}
                  </h3>
                  <p className="text-xs text-dark-500">
                    {comm.members} membros • ⭐ {comm.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conquistas */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>🏆</span> Conquistas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {unlockedBadges.map((badge) => (
            <div
              key={badge.name}
              className="bg-dark-700/50 border border-dark-600 rounded-xl p-3 text-center hover:border-primary-500/40 transition-all duration-200"
            >
              <span className="text-2xl block mb-1">{badge.emoji}</span>
              <h3 className="font-medium text-dark-100 text-xs">{badge.name}</h3>
              <p className="text-xs text-dark-500 mt-0.5">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contribuições Recentes */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>📰</span> Contribuições Recentes
        </h2>
        {userPosts.length > 0 ? (
          <div className="space-y-3">
            {userPosts.map((post) => (
              <div
                key={post.id}
                className="bg-dark-700/50 border border-dark-600 rounded-lg p-4"
              >
                <p className="text-sm text-dark-200 mb-2">{post.content}</p>
                <div className="flex items-center gap-4 text-xs text-dark-500">
                  <span>👍 {post.likes}</span>
                  <span>💬 {post.comments}</span>
                  <span>{post.timeAgo}</span>
                  <span className="ml-auto badge badge-tag">{post.community}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <span className="text-4xl block mb-3">📝</span>
            <p className="text-sm text-dark-400 mb-4">
              Nenhuma contribuição pública ainda.
            </p>
            <button className="btn-primary text-sm">Fazer primeiro post</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicProfile;
