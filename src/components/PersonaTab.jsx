import { useState } from 'react';
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

const learningStyles = ['Visual', 'Prático', 'Teórico', 'Social'];

function PersonaTab({ userDisplay }) {
  const [subTab, setSubTab] = useState('perfil');
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    area: 'Tecnologia',
    momento: 'Primeira graduação',
    objetivo: 'Primeiro emprego',
    estilos: ['Prático', 'Social'],
    experiencia: '',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleEstilo = (estilo) => {
    setFormData((prev) => ({
      ...prev,
      estilos: prev.estilos.includes(estilo)
        ? prev.estilos.filter((e) => e !== estilo)
        : [...prev.estilos, estilo],
    }));
  };

  const displayTags = userDisplay?.tags || personaData.tags;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Sub-tab navigation */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSubTab('perfil')}
          className={subTab === 'perfil' ? 'btn-primary' : 'btn-secondary'}
        >
          🧠 Meu Perfil
        </button>
        <button
          onClick={() => setSubTab('editar')}
          className={subTab === 'editar' ? 'btn-primary' : 'btn-secondary'}
        >
          ✏️ Editar Respostas
        </button>
      </div>

      {/* Sub-tab: Meu Perfil */}
      {subTab === 'perfil' && (
        <>
          {/* Persona Card */}
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🧠</span>
              <h2 className="text-xl font-bold text-white">Seu Perfil IA</h2>
            </div>

            {/* Tags - moved here from sidebar */}
            <div className="mb-5">
              <h3 className="text-sm text-dark-400 mb-2 font-medium">Suas Tags</h3>
              <div className="flex flex-wrap gap-2">
                {displayTags.map((tag) => (
                  <span key={tag} className="badge badge-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning style + Seniority */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-dark-700/50 rounded-lg p-4">
                <p className="text-xs text-dark-500 uppercase tracking-wider mb-1">
                  Estilo de Aprendizagem
                </p>
                <p className="text-lg font-semibold text-primary-400">
                  {personaData.learningStyle}
                </p>
              </div>
              <div className="bg-dark-700/50 rounded-lg p-4">
                <p className="text-xs text-dark-500 uppercase tracking-wider mb-1">
                  Nível de Senioridade
                </p>
                <p className="text-lg font-semibold text-primary-400">
                  {personaData.seniority}
                </p>
              </div>
            </div>
          </div>

          {/* How AI built your profile */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-white mb-6">
              Como a IA construiu seu perfil
            </h2>

            {/* Timeline/Stepper */}
            <div className="relative">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-4 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-lg shrink-0">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-primary-500/30 mt-2" />
                    )}
                  </div>
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
            <h2 className="text-lg font-bold text-white mb-5">
              Comunidades Recomendadas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personaData.recommendations.map((rec) => (
                <div
                  key={rec.communityName}
                  className="bg-dark-700/50 border border-dark-600 rounded-xl p-5 hover:border-primary-500/40 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-dark-100">
                      {rec.communityName}
                    </h3>
                    <span className="text-2xl font-bold text-primary-400">
                      {rec.matchPercent}%
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {rec.reasons.map((reason, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-dark-300"
                      >
                        <span className="text-primary-400 shrink-0 mt-0.5">✓</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <button className="btn-primary text-sm flex-1">Aceitar</button>
                    <button className="btn-secondary text-sm flex-1">
                      Explorar outras
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Sub-tab: Editar Respostas */}
      {subTab === 'editar' && (
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">✏️</span>
            <div>
              <h2 className="text-xl font-bold text-white">Editar Respostas</h2>
              <p className="text-sm text-dark-400">
                Atualize suas respostas do formulário de onboarding para refinar as
                recomendações da IA.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Área de Interesse */}
            <div>
              <label className="text-sm font-medium text-dark-300 mb-1.5 block">
                Área de Interesse
              </label>
              <select
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-dark-100 focus:border-primary-500 focus:outline-none w-full"
              >
                <option value="Tecnologia">Tecnologia</option>
                <option value="Saúde">Saúde</option>
                <option value="Gestão">Gestão</option>
                <option value="Educação">Educação</option>
                <option value="Design">Design</option>
                <option value="Direito">Direito</option>
              </select>
            </div>

            {/* Momento de Vida */}
            <div>
              <label className="text-sm font-medium text-dark-300 mb-1.5 block">
                Momento de Vida
              </label>
              <select
                value={formData.momento}
                onChange={(e) =>
                  setFormData({ ...formData, momento: e.target.value })
                }
                className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-dark-100 focus:border-primary-500 focus:outline-none w-full"
              >
                <option value="Primeira graduação">Primeira graduação</option>
                <option value="Transição de carreira">Transição de carreira</option>
                <option value="Mãe/Pai universitário(a)">
                  Mãe/Pai universitário(a)
                </option>
                <option value="Retorno aos estudos">Retorno aos estudos</option>
                <option value="Pós-graduando">Pós-graduando</option>
              </select>
            </div>

            {/* Objetivo Principal */}
            <div>
              <label className="text-sm font-medium text-dark-300 mb-1.5 block">
                Objetivo Principal
              </label>
              <select
                value={formData.objetivo}
                onChange={(e) =>
                  setFormData({ ...formData, objetivo: e.target.value })
                }
                className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-dark-100 focus:border-primary-500 focus:outline-none w-full"
              >
                <option value="Primeiro emprego">Primeiro emprego</option>
                <option value="Estágio">Estágio</option>
                <option value="Concurso público">Concurso público</option>
                <option value="Empreender">Empreender</option>
                <option value="Networking">Networking</option>
              </select>
            </div>

            {/* Estilo de Aprendizagem */}
            <div>
              <label className="text-sm font-medium text-dark-300 mb-2 block">
                Estilo de Aprendizagem
              </label>
              <div className="flex flex-wrap gap-3">
                {learningStyles.map((estilo) => (
                  <label
                    key={estilo}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer transition-all duration-200 ${
                      formData.estilos.includes(estilo)
                        ? 'bg-primary-500/20 border-primary-500 text-primary-400'
                        : 'bg-dark-800 border-dark-600 text-dark-300 hover:border-dark-500'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.estilos.includes(estilo)}
                      onChange={() => toggleEstilo(estilo)}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded border flex items-center justify-center text-xs ${
                        formData.estilos.includes(estilo)
                          ? 'bg-primary-500 border-primary-500 text-dark-950'
                          : 'border-dark-500'
                      }`}
                    >
                      {formData.estilos.includes(estilo) && '✓'}
                    </span>
                    <span className="text-sm font-medium">{estilo}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experiência Prévia */}
            <div>
              <label className="text-sm font-medium text-dark-300 mb-1.5 block">
                Experiência Prévia
              </label>
              <textarea
                value={formData.experiencia}
                onChange={(e) =>
                  setFormData({ ...formData, experiencia: e.target.value })
                }
                placeholder="Conte brevemente sobre suas experiências profissionais, projetos pessoais ou atividades relevantes..."
                rows={4}
                className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-dark-100 focus:border-primary-500 focus:outline-none w-full resize-none placeholder:text-dark-500"
              />
            </div>

            {/* Botão Salvar */}
            <div className="pt-2">
              <button
                onClick={handleSave}
                className={`btn-primary w-full sm:w-auto transition-all duration-200 ${
                  saved ? 'bg-emerald-600 hover:bg-emerald-600' : ''
                }`}
              >
                {saved ? '✅ Salvo!' : 'Salvar Alterações'}
              </button>
              {saved && (
                <p className="text-sm text-emerald-400 mt-2">
                  Suas respostas foram atualizadas. A IA recalculará suas
                  recomendações.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonaTab;
