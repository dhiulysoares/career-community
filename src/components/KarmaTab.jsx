import { useState } from 'react';
import { karmaData } from '../data/mockData';

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

function KarmaTab() {
  const maxWeekly = Math.max(...karmaData.weeklyData);
  const progressPercent = (karmaData.nextLevel.current / karmaData.nextLevel.required) * 100;
  const [hoveredBadge, setHoveredBadge] = useState(null);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Main karma card + ranking */}
      <div className="card p-6 text-center">
        <div className="mb-2">
          <span className="text-6xl font-bold text-primary-400">{karmaData.total}</span>
        </div>
        <p className="text-dark-400 text-lg font-medium">Pontos de Contribuição</p>
        <p className="text-sm text-dark-500 mt-1">⚡ Continue contribuindo para subir de nível!</p>

        {/* Ranking position */}
        <div className="mt-4 inline-flex items-center gap-2 bg-dark-700/50 border border-dark-600 rounded-full px-4 py-2">
          <span className="text-primary-400 font-bold">#42</span>
          <span className="text-xs text-dark-400">no ranking da comunidade</span>
        </div>
      </div>

      {/* Weekly chart */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-white mb-5">Evolução Semanal</h2>
        
        <div className="flex items-end justify-between gap-2 h-40 px-2">
          {karmaData.weeklyData.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-dark-400 font-medium">+{value}</span>
              <div className="w-full flex justify-center">
                <div
                  className="w-8 rounded-t-md bg-primary-500 hover:bg-primary-400 transition-all duration-200 hover:scale-105"
                  style={{ height: `${(value / maxWeekly) * 100}%`, minHeight: '8px' }}
                />
              </div>
              <span className="text-xs text-dark-500">{weekDays[index]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress to next level */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-white">Próximo Nível</h2>
          <span className="text-sm text-primary-400 font-medium">
            {karmaData.nextLevel.name}
          </span>
        </div>

        <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-700 to-primary-400 transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-dark-400">{karmaData.nextLevel.current} pts</span>
          <span className="text-dark-500">{karmaData.nextLevel.required} pts necessários</span>
        </div>
      </div>

      {/* Badges grid with tooltips and progress */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-white mb-5">Conquistas</h2>

        <div className="grid grid-cols-2 gap-4">
          {karmaData.badges.map((badge) => (
            <div
              key={badge.name}
              className={`relative bg-dark-700/50 border border-dark-600 rounded-xl p-4 text-center transition-all duration-200 hover:scale-[1.02] cursor-pointer ${
                !badge.unlocked ? 'opacity-60' : 'hover:border-primary-500/40'
              }`}
              onMouseEnter={() => setHoveredBadge(badge.name)}
              onMouseLeave={() => setHoveredBadge(null)}
            >
              <span className="text-3xl block mb-2">{badge.emoji}</span>
              <h3 className="font-semibold text-dark-100 text-sm mb-1">{badge.name}</h3>
              <p className="text-xs text-dark-400">{badge.description}</p>

              {/* Mini progress bar for locked badges */}
              {!badge.unlocked && (
                <div className="mt-3">
                  <div className="w-full h-1.5 bg-dark-600 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-primary-500/60 w-[35%]" />
                  </div>
                  <span className="text-[10px] text-dark-500 mt-1 block">35% concluído</span>
                </div>
              )}

              {/* Tooltip on hover for locked badges */}
              {!badge.unlocked && hoveredBadge === badge.name && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 shadow-xl z-10 whitespace-nowrap">
                  <p className="text-xs text-primary-400 font-medium">
                    🔓 Ajude 5 pessoas para desbloquear
                  </p>
                </div>
              )}

              {badge.unlocked && (
                <span className="absolute top-2 right-2 text-xs text-emerald-400">✓</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-white mb-5">Atividade Recente</h2>

        <div className="space-y-3">
          {karmaData.history.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2.5 border-b border-dark-700/50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-sm text-primary-400">
                  ⚡
                </span>
                <div>
                  <p className="text-sm text-dark-200">{item.description}</p>
                  <p className="text-xs text-dark-500">
                    {new Date(item.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
              <span className="text-sm font-semibold text-emerald-400">+{item.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KarmaTab;
