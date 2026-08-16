// ============================================================
// Mock Data - Community Hub Platform
// ============================================================

// 1. Usuária logada
export const currentUser = {
  id: 'user-001',
  name: 'Maria Silva',
  avatar: 'MS',
  semester: '2º semestre',
  course: 'Sistemas de Informação',
  karma: 120,
  tags: ['tecnologia', 'iniciante', 'mulheres-na-tech'],
  learningStyle: 'Prático + Social',
  joinedAt: '2026-03-10',
};

// 2. Comunidades
export const communities = [
  {
    id: 'comm-001',
    name: 'Empresa Júnior',
    emoji: '🚀',
    members: 127,
    rating: 4.8,
    description:
      'Comunidade para membros e interessados em Empresa Júnior. Compartilhe projetos, editais e experiências de gestão e desenvolvimento.',
    tags: ['empreendedorismo', 'projetos', 'gestão', 'networking'],
  },
  {
    id: 'comm-002',
    name: 'Mulheres na Tech',
    emoji: '👩‍💻',
    members: 89,
    rating: 4.9,
    description:
      'Espaço seguro para mulheres na tecnologia trocarem experiências, se apoiarem e crescerem juntas na carreira.',
    tags: ['diversidade', 'tecnologia', 'carreira', 'empoderamento'],
  },
  {
    id: 'comm-003',
    name: 'Transição de Carreira',
    emoji: '🔄',
    members: 64,
    rating: 4.7,
    description:
      'Para quem está migrando de área e quer trocar experiências, dicas e apoio durante a transição para tecnologia.',
    tags: ['transição', 'carreira', 'recomeço', 'apoio'],
  },
  {
    id: 'comm-004',
    name: 'Dados & Analytics',
    emoji: '📊',
    members: 52,
    rating: 4.6,
    description:
      'Discussões sobre ciência de dados, análise, visualização, machine learning e oportunidades na área.',
    tags: ['dados', 'analytics', 'machine-learning', 'python'],
  },
  {
    id: 'comm-005',
    name: 'UX/UI Design',
    emoji: '🎨',
    members: 43,
    rating: 4.5,
    description:
      'Comunidade para entusiastas e profissionais de UX/UI. Compartilhe portfólios, estudos de caso e feedbacks.',
    tags: ['design', 'ux', 'ui', 'figma', 'usabilidade'],
  },
  {
    id: 'comm-006',
    name: 'Concursos Públicos',
    emoji: '📚',
    members: 91,
    rating: 4.8,
    description:
      'Grupo de estudos e apoio para quem está se preparando para concursos públicos na área de TI e afins.',
    tags: ['concursos', 'estudos', 'editais', 'preparação'],
  },
];

// 3. Posts do Feed (Home)
export const feedPosts = [
  {
    id: 'post-001',
    author: {
      name: 'Maria Silva',
      avatar: 'MS',
      semester: '2º semestre',
      karma: 120,
      tags: ['tecnologia', 'iniciante', 'mulheres-na-tech'],
      role: 'Membro',
    },
    content:
      'Oi pessoal! Sou caloura de SI e estou perdida sobre qual linguagem começar a estudar por fora. Python ou JavaScript? Alguém tem dicas de por onde iniciar? 🙏',
    likes: 14,
    comments: 8,
    timeAgo: '2h atrás',
    community: 'Mulheres na Tech',
  },
  {
    id: 'post-002',
    author: {
      name: 'Pedro Henrique',
      avatar: 'PH',
      semester: '7º semestre',
      karma: 890,
      tags: ['backend', 'java', 'mentor'],
      role: 'Mentor',
    },
    content:
      'Dica para quem está começando: não tente aprender tudo ao mesmo tempo. Escolha UMA linguagem e foque nos fundamentos por pelo menos 3 meses. Lógica de programação é universal — o resto você adapta depois. 💡',
    likes: 42,
    comments: 15,
    timeAgo: '4h atrás',
    community: 'Empresa Júnior',
  },
  {
    id: 'post-003',
    author: {
      name: 'Agente de Eventos',
      avatar: '🤖',
      semester: null,
      karma: null,
      tags: ['bot', 'eventos'],
      role: 'Bot IA',
    },
    content:
      '📢 Evento detectado! Workshop "Introdução a Git e GitHub" — dia 22/08 às 19h, Lab 3. Vagas limitadas! Inscrição pelo link na bio da @ej.computacao. Relevante para: #iniciante #tecnologia',
    likes: 27,
    comments: 5,
    timeAgo: '5h atrás',
    community: 'Empresa Júnior',
  },
  {
    id: 'post-004',
    author: {
      name: 'Ana Beatriz',
      avatar: 'AB',
      semester: '3º semestre',
      karma: 310,
      tags: ['transição', 'dados', 'mulheres-na-tech'],
      role: 'Membro',
    },
    content:
      'Gente, vim do Direito e hoje completei meu primeiro projeto de análise de dados! 🎉 Usei Python + Pandas pra analisar dados públicos do TJMG. Nunca imaginei que ia conseguir. Obrigada a todos que me apoiaram aqui! ❤️',
    likes: 63,
    comments: 22,
    timeAgo: '6h atrás',
    community: 'Transição de Carreira',
  },
  {
    id: 'post-005',
    author: {
      name: 'Lucas Fernandes',
      avatar: 'LF',
      semester: '8º semestre',
      karma: 1250,
      tags: ['fullstack', 'mentor', 'ej'],
      role: 'Moderador Start',
    },
    content:
      'Dica de ouro para entrevistas técnicas: pratiquem explicar seu raciocínio em voz alta enquanto resolvem problemas. Recrutadores avaliam tanto o processo quanto o resultado. Quem quiser simular uma entrevista mock, me chama no chat! 🎯',
    likes: 38,
    comments: 11,
    timeAgo: '8h atrás',
    community: 'Empresa Júnior',
  },
  {
    id: 'post-006',
    author: {
      name: 'Rafaela Costa',
      avatar: 'RC',
      semester: '5º semestre',
      karma: 540,
      tags: ['frontend', 'ej', 'react'],
      role: 'Diretora de Projetos',
    },
    content:
      'Projeto novo na EJ! 🚀 Vamos desenvolver o site de uma ONG da cidade usando React + Node. Precisamos de 2 devs front e 1 designer. Quem tiver interesse, o edital está aberto até sexta. É uma ótima chance de ganhar experiência real!',
    likes: 51,
    comments: 19,
    timeAgo: '10h atrás',
    community: 'Empresa Júnior',
  },
];

// 4. Posts internos da comunidade Empresa Júnior
export const communityPosts = [
  {
    id: 'cpost-001',
    author: {
      name: 'Lucas Fernandes',
      avatar: 'LF',
      semester: '8º semestre',
      karma: 1250,
      tags: ['fullstack', 'mentor', 'ej'],
      role: 'Moderador Start',
    },
    content:
      'Resultado do processo seletivo saiu! Parabéns aos 12 novos membros 🎉 Amanhã tem reunião de integração às 18h no Discord. Não faltem!',
    likes: 34,
    comments: 9,
    timeAgo: '1h atrás',
    community: 'Empresa Júnior',
  },
  {
    id: 'cpost-002',
    author: {
      name: 'Rafaela Costa',
      avatar: 'RC',
      semester: '5º semestre',
      karma: 540,
      tags: ['frontend', 'ej', 'react'],
      role: 'Diretora de Projetos',
    },
    content:
      'Atualização do projeto ONG: finalizamos o wireframe e o cliente aprovou! Próximo passo é componentização no Figma. Time de design, bora alinhar amanhã? 🎨',
    likes: 22,
    comments: 7,
    timeAgo: '3h atrás',
    community: 'Empresa Júnior',
  },
  {
    id: 'cpost-003',
    author: {
      name: 'Gabriel Santos',
      avatar: 'GS',
      semester: '4º semestre',
      karma: 280,
      tags: ['backend', 'node', 'ej'],
      role: 'Dev Backend',
    },
    content:
      'Galera, subi a API do projeto no ambiente de staging. Endpoint de autenticação está funcionando. Documentação no Notion atualizada. Testem e me avisem se encontrarem bugs! 🐛',
    likes: 18,
    comments: 5,
    timeAgo: '5h atrás',
    community: 'Empresa Júnior',
  },
  {
    id: 'cpost-004',
    author: {
      name: 'Maria Silva',
      avatar: 'MS',
      semester: '2º semestre',
      karma: 120,
      tags: ['tecnologia', 'iniciante', 'mulheres-na-tech'],
      role: 'Membro',
    },
    content:
      'Acabei de entrar na EJ e estou super animada! Alguém pode me indicar materiais para estudar React? Quero contribuir no projeto o mais rápido possível 💪',
    likes: 29,
    comments: 12,
    timeAgo: '7h atrás',
    community: 'Empresa Júnior',
  },
  {
    id: 'cpost-005',
    author: {
      name: 'Pedro Henrique',
      avatar: 'PH',
      semester: '7º semestre',
      karma: 890,
      tags: ['backend', 'java', 'mentor'],
      role: 'Mentor',
    },
    content:
      'Workshop interno confirmado: "Deploy com Docker e CI/CD" na próxima quarta às 20h. Vou mostrar o pipeline que usamos no projeto atual. Tragam notebook com Docker instalado! 🐳',
    likes: 41,
    comments: 14,
    timeAgo: '12h atrás',
    community: 'Empresa Júnior',
  },
];

// 5. Mensagens do Chat (Comunidade Empresa Júnior)
export const chatMessages = [
  {
    id: 'msg-001',
    author: {
      name: '@maria.caloura',
      avatar: 'MS',
      role: 'Membro',
      badge: null,
    },
    content:
      'Oii pessoal! Me chamo Maria, sou do 2º semestre de SI. Acabei de entrar na EJ e tô muito empolgada! Quero aprender tudo que puder 😊',
    timestamp: '2026-08-15T14:30:00',
  },
  {
    id: 'msg-002',
    author: {
      name: '@pedro.veterano',
      avatar: 'PH',
      role: 'Mentor',
      badge: '⭐',
    },
    content:
      'Seja bem-vinda, Maria! 🎉 Aqui a galera é muito receptiva. Qualquer dúvida pode mandar aqui no chat ou me chamar no privado. Mentoria é pra isso!',
    timestamp: '2026-08-15T14:32:00',
  },
  {
    id: 'msg-003',
    author: {
      name: '@ana.transicao',
      avatar: 'AB',
      role: 'Membro',
      badge: null,
    },
    content:
      'Maria, eu também era novata há 6 meses e a EJ mudou minha vida! Aproveita cada oportunidade. Se precisar de ajuda com algo, conta comigo também ❤️',
    timestamp: '2026-08-15T14:35:00',
  },
  {
    id: 'msg-004',
    author: {
      name: '@lucas.mentor',
      avatar: 'LF',
      role: 'Moderador Start',
      badge: '🛡️',
    },
    content:
      'Bem-vinda, Maria! 📋 Informo que o edital do novo projeto (site ONG) está aberto até sexta. É um ótimo primeiro projeto pra quem tá começando. Requisitos: HTML/CSS básico e vontade de aprender!',
    timestamp: '2026-08-15T14:38:00',
  },
  {
    id: 'msg-005',
    author: {
      name: '@maria.caloura',
      avatar: 'MS',
      role: 'Membro',
      badge: null,
    },
    content:
      'Que incrível! Vou me inscrever sim! Tenho conhecimento básico de HTML e CSS do primeiro semestre. Posso contar com vocês se travar em algo? 🙏',
    timestamp: '2026-08-15T14:40:00',
  },
  {
    id: 'msg-006',
    author: {
      name: '@pedro.veterano',
      avatar: 'PH',
      role: 'Mentor',
      badge: '⭐',
    },
    content:
      'Com certeza! Vou te adicionar no grupo de estudos de React. Toda terça tem sessão de pair programming. Bora! 💻',
    timestamp: '2026-08-15T14:42:00',
  },
  {
    id: 'msg-007',
    author: {
      name: '@agente.eventos',
      avatar: '🤖',
      role: 'Bot',
      badge: '⚡',
    },
    content:
      '📅 Evento detectado: Workshop "Deploy com Docker e CI/CD" — Quarta, 20/08, 20h. Responsável: @pedro.veterano. Local: Discord da EJ. Pré-requisito: Docker instalado.',
    timestamp: '2026-08-15T15:00:00',
  },
  {
    id: 'msg-008',
    author: {
      name: '@lucas.mentor',
      avatar: 'LF',
      role: 'Moderador Start',
      badge: '🛡️',
    },
    content:
      'Lembrem que amanhã tem reunião de integração dos novos membros às 18h! Preparem uma breve apresentação de vocês (nome, semestre, o que querem aprender). Vai ser bem tranquilo 😄',
    timestamp: '2026-08-15T15:10:00',
  },
  {
    id: 'msg-009',
    author: {
      name: '@ana.transicao',
      avatar: 'AB',
      role: 'Membro',
      badge: null,
    },
    content:
      'Eu vou estar na integração também! Posso ajudar a receber o pessoal novo. Vai ser legal rever essa energia de início 💫',
    timestamp: '2026-08-15T15:15:00',
  },
  {
    id: 'msg-010',
    author: {
      name: '@agente.moderador',
      avatar: '🤖',
      role: 'Bot',
      badge: '📊',
    },
    content:
      '📊 Resumo do dia na EJ:\n• 12 novos membros aprovados no processo seletivo\n• 1 projeto em andamento (site ONG)\n• 1 workshop agendado (Docker + CI/CD)\n• 3 vagas abertas no projeto\n• Karma total da comunidade: +47 hoje\nÓtimo dia, galera! 🚀',
    timestamp: '2026-08-15T18:00:00',
  },
];

// 6. Editais e Vagas
export const editais = [
  {
    id: 'edital-001',
    title: 'Estágio Data Science',
    company: 'TechCorp Brasil',
    matchPercent: 94,
    deadline: '2026-08-30',
    requirements: [
      { name: 'Python básico', status: 'has' },
      { name: 'Estatística', status: 'develop' },
      { name: 'SQL', status: 'has' },
      { name: 'Machine Learning', status: 'develop' },
      { name: 'Pandas/NumPy', status: 'has' },
    ],
    type: 'estagio',
    saved: true,
  },
  {
    id: 'edital-002',
    title: 'Concurso TJMG - Analista de Sistemas',
    company: 'Tribunal de Justiça de Minas Gerais',
    matchPercent: 78,
    deadline: '2026-09-15',
    requirements: [
      { name: 'Lógica de Programação', status: 'has' },
      { name: 'Banco de Dados', status: 'has' },
      { name: 'Direito Administrativo', status: 'develop' },
      { name: 'Redes de Computadores', status: 'develop' },
      { name: 'Segurança da Informação', status: 'develop' },
    ],
    type: 'concurso',
    saved: false,
  },
  {
    id: 'edital-003',
    title: 'Trainee Desenvolvedor Full Stack',
    company: 'StartupMG',
    matchPercent: 88,
    deadline: '2026-08-25',
    requirements: [
      { name: 'JavaScript', status: 'has' },
      { name: 'React', status: 'develop' },
      { name: 'Node.js', status: 'develop' },
      { name: 'Git/GitHub', status: 'has' },
      { name: 'API REST', status: 'has' },
    ],
    type: 'trainee',
    saved: true,
  },
  {
    id: 'edital-004',
    title: 'Processo Seletivo EJ - Membro Desenvolvedor',
    company: 'EJ Computação UFMG',
    matchPercent: 95,
    deadline: '2026-08-22',
    requirements: [
      { name: 'HTML/CSS', status: 'has' },
      { name: 'Lógica de Programação', status: 'has' },
      { name: 'Trabalho em equipe', status: 'has' },
      { name: 'Versionamento (Git)', status: 'has' },
      { name: 'Framework front-end', status: 'develop' },
    ],
    type: 'ej',
    saved: true,
  },
  {
    id: 'edital-005',
    title: 'Estágio UX/UI Designer',
    company: 'DesignLab Digital',
    matchPercent: 72,
    deadline: '2026-09-05',
    requirements: [
      { name: 'Figma', status: 'develop' },
      { name: 'Pesquisa com usuários', status: 'develop' },
      { name: 'Prototipação', status: 'develop' },
      { name: 'Design System', status: 'develop' },
      { name: 'Noções de front-end', status: 'has' },
    ],
    type: 'estagio',
    saved: false,
  },
];

// 7. Dados de Karma
export const karmaData = {
  total: 120,
  weeklyData: [8, 12, 5, 18, 22, 15, 10],
  badges: [
    {
      name: 'Primeiro Post',
      emoji: '✍️',
      description: 'Publicou seu primeiro post na comunidade',
      unlocked: true,
    },
    {
      name: 'Colaboradora',
      emoji: '🤝',
      description: 'Ajudou 5 pessoas com respostas úteis',
      unlocked: true,
    },
    {
      name: 'Exploradora',
      emoji: '🧭',
      description: 'Participou de 3 comunidades diferentes',
      unlocked: true,
    },
    {
      name: 'Mentora Rising',
      emoji: '🌟',
      description: 'Alcance 500 pontos de karma',
      unlocked: false,
    },
  ],
  nextLevel: {
    name: 'Contribuidora Ativa',
    required: 200,
    current: 120,
  },
  history: [
    {
      description: 'Post curtido por 10 pessoas',
      points: 10,
      date: '2026-08-15',
    },
    {
      description: 'Resposta marcada como útil',
      points: 15,
      date: '2026-08-14',
    },
    {
      description: 'Participou do workshop de Git',
      points: 25,
      date: '2026-08-13',
    },
    {
      description: 'Entrou na comunidade Empresa Júnior',
      points: 10,
      date: '2026-08-12',
    },
    {
      description: 'Completou perfil e persona',
      points: 20,
      date: '2026-08-10',
    },
  ],
};

// 8. Dados de Persona
export const personaData = {
  tags: ['tecnologia', 'iniciante', 'mulheres-na-tech'],
  learningStyle: 'Prático + Social',
  seniority: 'Iniciante',
  recommendations: [
    {
      communityName: 'Empresa Júnior',
      matchPercent: 95,
      reasons: [
        'Ambiente prático com projetos reais — ideal para seu estilo de aprendizado',
        'Comunidade acolhedora com mentores ativos para iniciantes',
        'Oportunidade de networking e experiência profissional desde o 2º semestre',
      ],
    },
    {
      communityName: 'Mulheres na Tech',
      matchPercent: 92,
      reasons: [
        'Match direto com sua tag #mulheres-na-tech',
        'Rede de apoio com mulheres em diferentes estágios da carreira',
        'Eventos e mentorias focados em crescimento profissional feminino na tecnologia',
      ],
    },
  ],
};
