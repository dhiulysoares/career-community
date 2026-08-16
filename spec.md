# Plataforma EAD "Community & Career Hub"

## 1. Visão Geral do Produto

Uma plataforma integrada ao AVA (Ambiente Virtual de Aprendizagem) da universidade, voltada para a união de alunos de Ensino a Distância através de comunidades hiper-segmentadas, impulsionadas por IA. Utiliza um sistema gamificado de reputação (Karma) e agentes autônomos para conectar alunos ao mercado de trabalho e a projetos reais.

**Acesso:** A plataforma é acessada como um módulo/plugin dentro do AVA institucional (ex: Moodle, Blackboard, Canvas). O aluno não precisa criar conta separada — o login é feito via SSO (Single Sign-On) com as credenciais universitárias.

---

## 2. Integração com o AVA da Universidade

### 2.1 Como o aluno acessa

- O aluno faz login normalmente no AVA da universidade
- No menu lateral do AVA, aparece a seção **"Community Hub"**
- Ao clicar, o aluno é direcionado para a plataforma já autenticado
- Dados acadêmicos (semestre, curso, disciplinas) são puxados automaticamente via API do AVA

### 2.2 Dados importados do AVA

| Dado | Uso na plataforma |
|------|-------------------|
| Semestre atual | Classificar como Calouro (1º-3º) ou Veterano (4º+) |
| Curso matriculado | Pré-filtro de comunidades relevantes |
| Disciplinas cursadas | Mapeamento de habilidades técnicas |
| Notas/aprovações | Componente do Karma acadêmico |
| Histórico de participação | Indicador de engajamento |

---

## 3. Estrutura de Navegação (Abas Principais)

A plataforma é organizada em abas dentro do painel do aluno. A visualização muda conforme o perfil (Calouro vs Veterano).

### Navegação Geral (todas as abas visíveis):

```
┌─────────────────────────────────────────────────────────────────────────┐
│  🏠 Home  │  🧠 Minha Persona  │  🏘️ Comunidades  │  📋 Editais  │  💬 Chat  │  🏆 Karma  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Aba "Minha Persona" — Como a IA Constrói o Perfil do Aluno

Esta aba é a **vitrine do motor de IA**. Ela mostra ao aluno, de forma transparente, como a plataforma entende quem ele é e por que recomenda determinada comunidade.

### 4.1 Fluxo de Construção da Persona (Onboarding)

**Etapa 1 — Coleta Inicial (Primeiro acesso)**
- Formulário rápido (3-5 min): interesses, momento de vida, experiências prévias
- Dados importados do AVA são exibidos como "já preenchidos"

**Etapa 2 — Processamento pela IA**
- A IA cruza:
  - Dados declarados (formulário)
  - Dados acadêmicos (AVA)
  - Comportamento dentro da plataforma (após primeiras interações)
- Gera um **Perfil de Persona** com:
  - Tags primárias (ex: "Tecnologia", "Gestão", "Saúde")
  - Tags secundárias (ex: "Transição de carreira", "Primeira graduação", "Mãe universitária")
  - Nível de senioridade estimado (Iniciante / Intermediário / Avançado)
  - Estilo de aprendizagem (Visual / Prático / Teórico / Social)

**Etapa 3 — Recomendação de Comunidades**
- Com base na persona, a IA sugere **no máximo 2 comunidades** (evita sobrecarga)
- A aba mostra visualmente o "por quê" da recomendação:

```
┌─────────────────────────────────────────────────────┐
│  🧠 Sua Persona                                     │
│                                                     │
│  Tags: #tecnologia #mulheres-na-tech #iniciante     │
│  Estilo: Prático + Social                           │
│                                                     │
│  ─── Comunidades Recomendadas ───                   │
│                                                     │
│  ✅ Mulheres na Tech (92% match)                    │
│     Motivo: gênero + área + interesse declarado     │
│                                                     │
│  ✅ Empresa Júnior - Dev (87% match)                │
│     Motivo: habilidade técnica + busca por          │
│     experiência prática                             │
│                                                     │
│  [Aceitar sugestões]  [Explorar outras]             │
└─────────────────────────────────────────────────────┘
```

### 4.2 Evolução Contínua da Persona

- A persona **não é estática**. A cada semestre, a IA recalcula:
  - Novas disciplinas cursadas → novas competências
  - Interações nas comunidades → refinamento de interesses
  - Karma acumulado → atualização de senioridade
- O aluno pode visualizar o histórico de evolução da persona (timeline)

---

## 5. Fluxo Diferenciado: Calouro vs Veterano

### 5.1 Visão do Calouro (1º ao 3º semestre)

**Foco:** Acolhimento, pertencimento e descoberta

| Aba | O que vê |
|-----|----------|
| Home | Feed da comunidade + dicas de integração + "Alunos como você" |
| Minha Persona | Formulário de onboarding + resultado da IA + sugestão de comunidades |
| Comunidades | Lista das comunidades recomendadas + preview de cada uma |
| Editais | *Visibilidade reduzida* — só vê editais de estágio/trainee compatíveis com 1º-3º sem. |
| Chat | Chat da comunidade + sugestões de conexão P2P pela IA |
| Karma | Painel de pontuação + badges iniciais desbloqueáveis |

### 5.2 Visão do Veterano (4º semestre em diante)

**Foco:** Liderança, mercado de trabalho e mentoria

| Aba | O que vê |
|-----|----------|
| Home | Feed + projetos da Empresa Júnior + convites para mentoria |
| Minha Persona | Persona completa + evolução ao longo dos semestres + competências validadas |
| Comunidades | Comunidades atuais + opção de fundar nova (se Karma permitir) |
| **Editais** | **Aba expandida** — editais de emprego, concursos, processos seletivos com match de IA |
| Chat | Chat + moderação (se for Mentor) + canal de liderança da EJ |
| Karma | Painel completo + métricas de impacto + certificados gerados |

### 5.3 Aba "Editais" (Detalhe para Veteranos)

A IA busca automaticamente editais relevantes e apresenta assim:

```
┌─────────────────────────────────────────────────────┐
│  📋 Editais para Você                                │
│                                                     │
│  🔥 Estágio em Data Science — Empresa X             │
│     Match: 94% | Prazo: 20/09/2026                  │
│     Requisitos: Python, SQL, Estatística            │
│     ✅ Você tem: Python, SQL                         │
│     ⚠️ Desenvolver: Estatística avançada             │
│     [Ver edital completo] [Salvar] [Me preparar]    │
│                                                     │
│  📌 Concurso Público — Analista de TI (TJMG)        │
│     Match: 78% | Prazo: 15/10/2026                  │
│     [Ver edital completo] [Salvar]                  │
└─────────────────────────────────────────────────────┘
```

---

## 6. Aba "Comunidades" — Navegação e Estrutura

### 6.1 Lista de Comunidades (Grid de Cards)

```
┌──────────────────────────────────────────────────────────────┐
│  🏘️ Comunidades                                              │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ 🚀 Empresa   │  │ 👩‍💻 Mulheres │  │ 🔄 Transição │       │
│  │    Júnior    │  │   na Tech    │  │  de Carreira │       │
│  │              │  │              │  │              │       │
│  │ 127 membros  │  │ 89 membros   │  │ 64 membros   │       │
│  │ ⭐ 4.8       │  │ ⭐ 4.9       │  │ ⭐ 4.7       │       │
│  │              │  │              │  │              │       │
│  │ [Entrar]     │  │ [Entrar]     │  │ [Entrar]     │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ 📊 Dados &   │  │ 🎨 UX/UI    │  │ 📚 Concursos │       │
│  │   Analytics  │  │   Design     │  │   Públicos   │       │
│  │              │  │              │  │              │       │
│  │ 52 membros   │  │ 43 membros   │  │ 91 membros   │       │
│  │ ⭐ 4.6       │  │ ⭐ 4.5       │  │ ⭐ 4.8       │       │
│  │              │  │              │  │              │       │
│  │ [Entrar]     │  │ [Entrar]     │  │ [Entrar]     │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└──────────────────────────────────────────────────────────────┘
```

### 6.2 Dentro de uma Comunidade (Exemplo: Empresa Júnior)

Ao clicar em "Empresa Júnior", abre a visão interna da comunidade:

```
┌─────────────────────────────────────────────────────────────────────────┐
│  🚀 Comunidade: Empresa Júnior                                          │
│  ───────────────────────────────────────────────────────────────────     │
│  │ Feed │ Projetos │ Membros │ Chat │ Editais EJ │                      │
│  ───────────────────────────────────────────────────────────────────     │
│                                                                         │
│  📌 Post Fixado — Moderador Start (@lucas.mentor)                        │
│  "Bem-vindos! Regras da comunidade e processo seletivo da EJ aberto..." │
│  👍 42  💬 18  │  há 2 dias                                              │
│                                                                         │
│  ─── Feed ───                                                           │
│                                                                         │
│  @maria.caloura (Karma: 120 | 2º sem | Tags: #python #dados)           │
│  "Galera, alguém pode me ajudar com essa query SQL? Tô travada no       │
│   projeto da disciplina de BD..."                                        │
│  👍 8  💬 5  │  há 30 min                                                │
│                                                                         │
│  @pedro.veterano (Karma: 890 | 6º sem | Tags: #fullstack #mentor)       │
│  "Maria, olha esse artigo que explica JOINs de um jeito visual:         │
│   [link]. Se precisar, chama no privado que te ajudo!"                   │
│  👍 15  💬 2  │  há 22 min                                               │
│                                                                         │
│  @ana.transicao (Karma: 340 | 3º sem | Tags: #gestao #carreira-nova)    │
│  "Pessoal, acabei de ser aprovada no processo seletivo da EJ! 🎉        │
│   Vou atuar como PM no projeto da Empresa X. Dicas?"                     │
│  👍 31  💬 12  │  há 1 hora                                              │
│                                                                         │
│  🤖 Bot IA (@agente.eventos)                                             │
│  "📅 Evento detectado: Workshop de APIs REST — gratuito, online          │
│   Data: 22/08 às 19h | Compatível com 85% dos membros desta comunidade" │
│  👍 24  💬 6  │  há 3 horas                                              │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Simulação do Chat em Tempo Real (Dentro da Comunidade)

O chat simula a interação entre perfis diversos dentro da comunidade:

```
┌─────────────────────────────────────────────────────┐
│  💬 Chat — Empresa Júnior                            │
│  ─────────────────────────────────────────────────   │
│                                                     │
│  [19:01] @maria.caloura                             │
│  Oi gente! Sou nova aqui, a IA me indicou essa     │
│  comunidade. Tô no 2º semestre de SI, curto muito  │
│  programação mas nunca trabalhei na área 😅         │
│                                                     │
│  [19:02] @pedro.veterano 🏅 Mentor                  │
│  Bem-vinda Maria! Tá no lugar certo. A EJ é a      │
│  melhor forma de ganhar experiência real sem        │
│  precisar de experiência prévia kk                  │
│                                                     │
│  [19:03] @ana.transicao                             │
│  Maria, eu tava na mesma situação semestre passado! │
│  Entrei na EJ e já tô liderando um projeto. Vale   │
│  muito a pena se candidatar.                        │
│                                                     │
│  [19:04] @lucas.mentor 🏅 Moderador Start           │
│  Pessoal, lembrando que o edital do próximo         │
│  processo seletivo da EJ sai segunda-feira!         │
│  Fiquem ligados na aba "Editais EJ" 📋             │
│                                                     │
│  [19:05] 🤖 @agente.moderador                       │
│  ℹ️ Resumo: 4 novos membros hoje. Tópico mais       │
│  discutido: "Processo seletivo EJ". Nenhuma         │
│  violação detectada.                                │
│                                                     │
│  ┌─────────────────────────────────────────┐        │
│  │ Digite sua mensagem...            [📎] [➤]│      │
│  └─────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────┘
```

### 7.1 Perfis Simulados no Chat (Diversidade de Personas)

| Perfil | Semestre | Persona | Comportamento no chat |
|--------|----------|---------|----------------------|
| @maria.caloura | 2º | Iniciante, curiosa, sem experiência | Faz perguntas, pede ajuda |
| @pedro.veterano | 6º | Fullstack, mentor ativo | Responde dúvidas, indica recursos |
| @ana.transicao | 3º | Transição de carreira, 35 anos | Compartilha vivências, incentiva |
| @lucas.mentor | 5º | Moderador Start da comunidade | Organiza, informa, modera |
| @carlos.concurseiro | 4º | Foco em concurso público | Compartilha editais, estuda em grupo |
| 🤖 @agente.eventos | — | Bot de IA | Posta eventos e vagas automaticamente |
| 🤖 @agente.moderador | — | Bot de IA | Modera e resume atividades |

---

## 8. Perfis de Usuários (Roles e Permissões)

* **Calouro/Aluno Padrão (1º-3º sem):** Acesso básico às comunidades alocadas pela IA. Pode consumir conteúdo, votar em interações e se candidatar a projetos da Empresa Júnior.
* **Mentor (Perfil Desbloqueável):** Permissão para palestrar, guiar calouros e moderar discussões.
  * Critérios de desbloqueio (basta 1):
    1. Estar matriculado a partir do 4º semestre
    2. Validação de mercado (currículo/LinkedIn comprovando experiência na área)
* **Representante Corporativo (B2B):** Portal parceiro para submeter desafios e projetos reais para a Empresa Júnior.

---

## 9. Motor de Onboarding e Matchmaking (IA) — Detalhamento Técnico

### 9.1 Pipeline de Dados

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐     ┌──────────────┐
│  Login SSO  │ ──▶ │  API do AVA  │ ──▶ │  Formulário IA  │ ──▶ │  Persona     │
│  (AVA)      │     │  (dados      │     │  (interesses,   │     │  Engine      │
│             │     │   acadêmicos)│     │   momento vida) │     │  (matching)  │
└─────────────┘     └──────────────┘     └─────────────────┘     └──────────────┘
                                                                        │
                                                                        ▼
                                                                 ┌──────────────┐
                                                                 │  Sugestão de │
                                                                 │  Comunidades │
                                                                 │  (máx 2)    │
                                                                 └──────────────┘
```

### 9.2 Algoritmo de Matching (Simplificado)

1. **Vetorização do perfil:** Transforma tags, interesses e dados acadêmicos em embedding vetorial
2. **Similaridade com comunidades:** Calcula cosine similarity entre vetor do aluno e vetor de cada comunidade
3. **Ranqueamento:** Ordena por % de match
4. **Restrição:** Retorna top 2 com match > 70%
5. **Diversidade:** Se ambas sugestões forem do mesmo cluster, força uma segunda de cluster diferente

---

## 10. Sistema de Reputação: "Karma Engine"

* **Upvotes (+):** Respostas úteis, resoluções de dúvidas, materiais de qualidade
* **Downvotes (-):** Spam, toxicidade, respostas irrelevantes
* **Bônus acadêmico:** Notas boas e participação em aulas ao vivo

**Níveis de Benefícios:**
* *Nível 1:* Badges no perfil público ("Top Contribuidor de Janeiro")
* *Nível 2:* Karma alto → pode fundar nova comunidade (vira Moderador Start)
* *Nível 3:* Karma alto acelera aprovação para Mentor mesmo em semestres iniciais

---

## 11. Ecossistema de Agentes de IA

| Agente | Função | Onde atua |
|--------|--------|-----------|
| **Agente de Eventos** | Scraping de workshops, webinars, meetups → cruza com perfil da comunidade → posta no feed | Feed da comunidade |
| **Agente de Empregabilidade** | Rastreia vagas/concursos → NLP no edital → notifica alunos com match | Aba Editais |
| **Agente Moderador** | Detecta conteúdo tóxico → sugere ocultamento → deduz Karma | Chat e Feed |
| **Agente de Persona** | Recalcula perfil a cada semestre → sugere novas comunidades | Aba Minha Persona |

---

## 12. Hub de Projetos Práticos (Empresa Júnior 2.0)

* **Mural Corporativo:** Empresas cadastradas inserem escopo de projeto real
* **Visibilidade:** Todos veem, mas só aprovados no processo seletivo executam
* **Karma como critério:** Desempate no processo seletivo usa Karma
* **Certificação:** Veteranos/Mentores que lideram projetos recebem certificados assinados digitalmente pela instituição + empresa parceira

---

## 13. Resumo da Experiência por Perfil

### Calouro entra pela primeira vez:
1. Faz login no AVA → clica em "Community Hub"
2. Vê aba "Minha Persona" → preenche formulário rápido
3. IA processa → mostra persona + 2 comunidades recomendadas com % de match
4. Aceita → entra na comunidade → vê feed + chat com alunos interagindo
5. Começa a acumular Karma participando

### Veterano acessa a plataforma:
1. Faz login no AVA → clica em "Community Hub"
2. Vê aba "Editais" com vagas e concursos filtrados pela IA
3. Pode acessar comunidades, moderar, mentorar calouros
4. Pode liderar projetos da EJ e ganhar certificados
5. Persona atualizada mostra evolução ao longo dos semestres