import { karmaData } from '../data/mockData';

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

function KarmaTab() {
  const maxWeekly = Math.max(...karmaData.weeklyData);
  const progressPercent = (karmaData.nextLevel.current / karmaData.nextLevel.required) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Main karma card */}
      <div className="card p-6 text-center">
        <div className="mb-2">
          <span className="text-6xl font-bold text-primary-400">{karmaData.total}</span>
        </div>
        <p className="text-dark-400 text-lg font-medium">Karma Points</p>
        <p className="text-sm text-dark-500 mt-1">⚡ Continue contribuindo para subir de nível!</p>
      </div>

      {/* Weekly chart */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-dark-50 mb-5">Evolução Semanal</h2>
        
        <div className="flex items-end justify-between gap-2 h-40 px-2">
          {karmaData.weeklyData.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              {/* Value */}
              <span className="text-xs text-dark-400 font-medium">+{value}</span>
              {/* Bar */}
              <div className="w-full flex justify-center">
                <div
                  className="w-8 rounded-t-md bg-primary-600 hover:bg-primary-500 transition-all duration-200 hover:scale-105"
                  style={{ height: `${(value / maxWeekly) * 100}%`, minHeight: '8px' }}
                />
              </div>
              {/* Day label */}
              <span className="text-xs text-dark-500">{weekDays[index]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress to next level */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-dark-50">Próximo Nível</h2>
          <span className="text-sm text-primary-400 font-medium">
            {karmaData.nextLevel.name}
          </span>
        </div>

        <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-600 to-primary-400 transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-dark-400">{karmaData.nextLevel.current} pts</span>
          <span className="text-dark-500">{karmaData.nextLevel.required} pts necessários</span>
        </div>
      </div>

      {/* Badges grid */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-dark-50 mb-5">Conquistas</h2>

        <div className="grid grid-cols-2 gap-4">
          {karmaData.badges.map((badge) => (
            <div
              key={badge.name}
              className={`bg-dark-700/50 border border-dark-600 rounded-xl p-4 text-center transition-all duration-200 hover:scale-[1.02] ${
                !badge.unlocked ? 'opacity-40 grayscale' : 'hover:border-primary-600/40'
              }`}
            >
              <span className="text-3xl block mb-2">{badge.emoji}</span>
              <h3 className="font-semibold text-dark-100 text-sm mb-1">{badge.name}</h3>
              <p className="text-xs text-dark-400">{badge.description}</p>
              {!badge.unlocked && (
                <span className="inline-block mt-2 text-xs text-dark-500 bg-dark-700 px-2 py-0.5 rounded-full">
                  🔒 Bloqueada
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-dark-50 mb-5">Atividade Recente</h2>

        <div className="space-y-3">
          {karmaData.history.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2.5 border-b border-dark-700/50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary-600/20 flex items-center justify-center text-sm text-primary-400">
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
