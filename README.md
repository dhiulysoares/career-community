# 🏘️ Community & Career Hub

Plataforma EAD integrada ao AVA (Ambiente Virtual de Aprendizagem) universitário, voltada para unir alunos de Ensino a Distância através de **comunidades hiper-segmentadas impulsionadas por IA**. Utiliza um sistema gamificado de reputação (Karma) e agentes autônomos para conectar alunos ao mercado de trabalho e a projetos reais.

## 🎯 Visão Geral

O Community Hub é acessado como um módulo/plugin dentro do AVA institucional (Moodle, Blackboard, Canvas). O aluno não precisa criar conta separada — o login é feito via **SSO (Single Sign-On)** com as credenciais universitárias.

### Principais Funcionalidades

- **🧠 Persona IA** — Motor de IA que constrói o perfil do aluno com base em dados acadêmicos e interesses declarados, recomendando comunidades com % de match
- **🏘️ Comunidades** — Grupos hiper-segmentados (Empresa Júnior, Mulheres na Tech, Transição de Carreira, etc.) com feed, chat e projetos
- **📋 Editais** — Agente de IA que rastreia vagas, estágios e concursos, cruzando com o perfil do aluno
- **💬 Chat em Tempo Real** — Comunicação dentro das comunidades com moderação por IA
- **🏆 Karma Engine** — Sistema de reputação gamificado com badges, níveis e benefícios
- **🚀 Hub de Projetos (EJ 2.0)** — Projetos reais de empresas parceiras executados por alunos

## 👥 Perfis de Usuário

| Perfil | Descrição |
|--------|-----------|
| **Calouro** (1º-3º sem) | Foco em acolhimento, pertencimento e descoberta |
| **Veterano** (4º+ sem) | Foco em liderança, mercado de trabalho e mentoria |
| **Mentor** | Perfil desbloqueável — pode guiar calouros e moderar discussões |
| **Representante Corporativo** | Portal B2B para submeter desafios e projetos reais |

## 🤖 Ecossistema de Agentes de IA

| Agente | Função |
|--------|--------|
| Agente de Persona | Constrói e recalcula o perfil do aluno a cada semestre |
| Agente de Eventos | Scraping de workshops/meetups e posta no feed da comunidade |
| Agente de Empregabilidade | Rastreia vagas/concursos e notifica alunos com match |
| Agente Moderador | Detecta conteúdo tóxico e resume atividades |

## 🛠️ Stack Tecnológica

- **React 19** — UI/componentes
- **Vite 8** — Build tool e dev server com HMR
- **Tailwind CSS 3** — Estilização utilitária
- **OxLint** — Linting

## 📁 Estrutura do Projeto

```
community-hub/
├── public/              # Assets estáticos (favicon, ícones)
├── src/
│   ├── assets/          # Imagens e SVGs
│   ├── components/      # Componentes React
│   │   ├── HomeFeed.jsx
│   │   ├── PersonaTab.jsx
│   │   ├── CommunitiesTab.jsx
│   │   ├── EditaisTab.jsx
│   │   ├── ChatTab.jsx
│   │   ├── KarmaTab.jsx
│   │   └── PublicProfile.jsx
│   ├── data/            # Dados mockados (mockData.js)
│   ├── App.jsx          # Componente principal com navegação por abas
│   ├── main.jsx         # Entry point
│   └── index.css        # Estilos globais + Tailwind
├── spec.md              # Especificação completa do produto
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## 📖 Navegação da Plataforma

A interface é organizada em abas:

```
🏠 Home  │  🧠 Minha Persona  │  🏘️ Comunidades  │  📋 Editais  │  💬 Chat  │  🏆 Karma
```

A visualização adapta-se automaticamente conforme o perfil do aluno (Calouro vs Veterano).

## 📄 Documentação

Para detalhes completos sobre o produto, fluxos, algoritmo de matching e sistema de Karma, consulte o arquivo [spec.md](./spec.md).
