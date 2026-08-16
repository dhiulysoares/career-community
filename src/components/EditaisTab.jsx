import { useState } from 'react';
import { editais } from '../data/mockData';

function EditaisTab({ isVeterano, showToast }) {
  const [savedState, setSavedState] = useState(
    editais.reduce((acc, e) => ({ ...acc, [e.id]: e.saved }), {})
  );

  const sortedEditais = [...editais].sort((a, b) => b.matchPercent - a.matchPercent);

  const toggleSave = (id, title) => {
    const wasSaved = savedState[id];
    setSavedState((prev) => ({ ...prev, [id]: !prev[id] }));
    if (showToast) {
      showToast(
        wasSaved ? `📋 "${title}" removido dos salvos` : `📋 "${title}" salvo!`,
        'success'
      );
    }
  };

  const getMatchColor = (percent) => {
    if (percent >= 90) return 'bg-emerald-500';
    if (percent >= 80) return 'bg-primary-500';
    if (percent >= 70) return 'bg-amber-500';
    return 'bg-dark-500';
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-white">Editais para Você</h1>
        <span className="badge bg-primary-500/20 text-primary-400 border border-primary-500/30 px-3 py-1 text-xs font-medium rounded-full">
          ✨ Filtrados por IA
        </span>
      </div>

      {/* Editais list */}
      <div className="space-y-6">
        {sortedEditais.map((edital) => (
          <div
            key={edital.id}
            className="card p-5 hover:border-primary-500/30 transition-all duration-200"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-dark-100 text-lg">{edital.title}</h3>
                <p className="text-sm text-dark-400 mt-0.5">{edital.company}</p>
              </div>
              <button
                onClick={() => toggleSave(edital.id, edital.title)}
                className={`p-2 rounded-lg transition-all duration-200 shrink-0 ${
                  savedState[edital.id]
                    ? 'text-primary-400 hover:text-primary-300 scale-110'
                    : 'text-dark-500 hover:text-dark-300'
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill={savedState[edital.id] ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>

            {/* Match bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-dark-500">Match com seu perfil</span>
                <span className="text-sm font-bold text-primary-400">{edital.matchPercent}%</span>
              </div>
              <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${getMatchColor(edital.matchPercent)}`}
                  style={{ width: `${edital.matchPercent}%` }}
                />
              </div>
            </div>

            {/* Deadline */}
            <div className="flex items-center gap-2 mb-4 text-sm text-dark-400">
              <span>📅</span>
              <span>
                Prazo: {new Date(edital.deadline).toLocaleDateString('pt-BR')}
              </span>
              <span className="badge badge-tag text-xs ml-2">{edital.type}</span>
            </div>

            {/* Requirements */}
            <div className="mb-4">
              <p className="text-xs text-dark-500 mb-2 font-medium">Requisitos:</p>
              <div className="flex flex-wrap gap-2">
                {edital.requirements.map((req, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                      req.status === 'has'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {req.status === 'has' ? '✅' : '⚠️'} {req.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-3 border-t border-dark-700/50">
              <button className="btn-primary text-sm">Ver edital</button>
              <button className="btn-secondary text-sm">Mais detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditaisTab;
