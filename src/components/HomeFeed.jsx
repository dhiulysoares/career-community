import { useState } from 'react';
import { feedPosts } from '../data/mockData';

const filters = ['Recentes', 'Populares', 'Minha Comunidade'];

const avatarColors = {
  MS: 'bg-primary-600',
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

function HomeFeed() {
  const [activeFilter, setActiveFilter] = useState('Recentes');

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-dark-50 mb-4">Seu Feed</h1>
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 text-dark-400 hover:bg-dark-700 hover:text-dark-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Feed posts */}
      <div className="space-y-4">
        {feedPosts.map((post) => (
          <article
            key={post.id}
            className="card p-5 transition-all duration-200 hover:border-primary-600/30"
          >
            {/* Author header */}
            <div className="flex items-start gap-3 mb-3">
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 ${
                  avatarColors[post.author.avatar] || 'bg-primary-600'
                }`}
              >
                {post.author.avatar}
              </div>

              <div className="flex-1 min-w-0">
                {/* Name + badge */}
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
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-dark-500 mt-0.5">
                  {post.author.semester && <span>{post.author.semester}</span>}
                  {post.author.karma && <span>• ⚡{post.author.karma}</span>}
                  {post.author.tags?.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-primary-400">#{tag}</span>
                  ))}
                </div>
              </div>

              {/* Time */}
              <span className="text-xs text-dark-500 shrink-0">{post.timeAgo}</span>
            </div>

            {/* Content */}
            <p className="text-dark-200 text-sm leading-relaxed mb-4">
              {post.content}
            </p>

            {/* Community tag */}
            <div className="mb-3">
              <span className="text-xs text-dark-500 bg-dark-700/50 px-2 py-0.5 rounded-full">
                📌 {post.community}
              </span>
            </div>

            {/* Actions bar */}
            <div className="flex items-center gap-6 pt-3 border-t border-dark-700/50">
              {/* Upvote */}
              <div className="flex items-center gap-1.5 text-dark-400 hover:text-primary-400 transition-colors cursor-pointer">
                <span className="text-sm">▲</span>
                <span className="text-sm font-medium">{post.likes}</span>
                <span className="text-sm">▼</span>
              </div>

              {/* Comments */}
              <div className="flex items-center gap-1.5 text-dark-400 hover:text-primary-400 transition-colors cursor-pointer">
                <span>💬</span>
                <span className="text-sm font-medium">{post.comments}</span>
              </div>

              {/* Bookmark */}
              <button className="ml-auto text-dark-400 hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default HomeFeed;
