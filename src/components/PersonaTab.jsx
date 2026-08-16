import { personaData } from '../data/mockData';

const steps = [
  {
    number: 1,
    title: 'Dados do AVA',
    description: 'Coletamos suas disciplinas, notas e frequência da plataforma acadêmica.',
    icon: '📚',
  },
  {
    number: 2,
    title: 'Formulário',
    description: 'Suas respostas sobre interesses, objetivos e estilo de estudo.',
    icon: '📝',
  },
  {
    number: 3,
    title: 'Análise Comportamental',
    description: 'A IA analisa padrões de interação, horários e engajamento.',
    icon: '🧠',
  },
];

function PersonaTab() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Persona Card */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl">🧠</span>
          <h2 className="text-xl font-bold text-dark-50">Sua Persona IA</h2>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <h3 className="text-sm text-dark-400 mb-2 font-medium">Tags de Perfil</h3>
          <div className="flex flex-wrap gap-2">
            {personaData.tags.map((tag) => (
              <span key={tag} className="badge badge-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Learning style + Seniority */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-dark-700/50 rounded-lg p-4">
            <p className="text-xs text-dark-500 uppercase tracking-wider mb-1">Estilo de Aprendizagem</p>
            <p className="text-lg font-semibold text-primary-400">{personaData.learningStyle}</p>
          </div>
          <div className="bg-dark-700/50 rounded-lg p-4">
            <p className="text-xs text-dark-500 uppercase tracking-wider mb-1">Nível de Senioridade</p>
            <p className="text-lg font-semibold text-primary-400">{personaData.seniority}</p>
          </div>
        </div>
      </div>

      {/* How AI built your profile */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-dark-50 mb-6">Como a IA construiu seu perfil</h2>

        {/* Timeline/Stepper */}
        <div className="relative">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-4 mb-8 last:mb-0">
              {/* Line + Circle */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-lg shrink-0">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-primary-600/30 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <h3 className="font-semibold text-dark-100 text-sm">
                  Passo {step.number}: {step.title}
                </h3>
                <p className="text-dark-400 text-sm mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Communities */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-dark-50 mb-5">Comunidades Recomendadas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personaData.recommendations.map((rec) => (
            <div
              key={rec.communityName}
              className="bg-dark-700/50 border border-dark-600 rounded-xl p-5 hover:border-primary-600/40 transition-all duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-dark-100">{rec.communityName}</h3>
                <span className="text-2xl font-bold text-primary-400">
                  {rec.matchPercent}%
                </span>
              </div>

              {/* Reasons */}
              <ul className="space-y-2 mb-5">
                {rec.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-300">
                    <span className="text-primary-400 shrink-0 mt-0.5">✓</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="btn-primary text-sm flex-1">Aceitar</button>
                <button className="btn-secondary text-sm flex-1">Explorar outras</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonaTab;
