# FIT.AI - Frontend

Aplicacao frontend moderna para acompanhamento de treino com foco em consistencia, rotina e orientacao com IA.

> Este projeto foi desenvolvido como parte de portfolio e representa uma implementacao real de produto: autenticacao, onboarding, consumo de API tipada, chat com IA, fluxo de treino e dashboard de progresso.

<div align="center">
  <img src="./public/img_treino_frontend.jfif" alt="FIT.AI - Preview da aplicacao" width="920" />
</div>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Auth-Better_Auth-111827)](https://www.better-auth.com/)
[![Vercel AI SDK](https://img.shields.io/badge/AI-Vercel_AI_SDK-000000)](https://sdk.vercel.ai/)

---

## Sobre o Projeto

O **FIT.AI** e uma experiencia de treino orientada por dados e assistencia de IA.

O frontend foi construido com **Next.js App Router**, combinando:

- renderizacao no servidor para rotas protegidas;
- componentes client para interacoes em tempo real;
- consumo tipado de API via geracao automatica com Orval;
- fluxo de onboarding guiado por chat;
- acompanhamento de consistencia e progresso.

## Principais Funcionalidades

- **Autenticacao social com Google** via Better Auth.
- **Controle de sessao no servidor** com redirecionamento automatico para `/auth`.
- **Onboarding inteligente** com chat embutido para iniciar a jornada do usuario.
- **Home com foco em aderencia**: streak atual, consistencia por dia e treino do dia.
- **Plano de treino semanal** com ordenacao por dia da semana e cards de descanso.
- **Execucao de treino** com acoes para iniciar e concluir sessoes.
- **Assistente Coach AI** (modal global e modo embutido no onboarding).
- **Estatisticas** com heatmap mensal, taxa de conclusao e tempo total treinado.
- **Perfil do usuario** com metricas corporais e logout.
- **Navegacao mobile-first** com barra inferior fixa.

---

## 🚀 Tecnologias e Bibliotecas

### 🧩 Core

| Tecnologia | Versao | Uso no projeto                   |
| ---------- | ------ | -------------------------------- |
| Next.js    | 16.1.6 | App Router, SSR, rotas dinamicas |
| React      | 19.2.3 | UI e interatividade              |
| TypeScript | 5.x    | Tipagem estatica                 |

### 🎨 UI, Estilo e UX

| Biblioteca               | Versao        | Uso                      |
| ------------------------ | ------------- | ------------------------ |
| Tailwind CSS             | 4.x           | Estilizacao utilitaria   |
| shadcn/ui                | 4.0.5         | Base de componentes      |
| Radix UI                 | 1.4.3         | Primitivos acessiveis    |
| Lucide React             | 0.577.0       | Iconografia              |
| tw-animate-css           | 1.4.0         | Animacoes utilitarias    |
| class-variance-authority | 0.7.1         | Variantes de componentes |
| clsx + tailwind-merge    | 2.1.1 / 3.5.0 | Composicao de classes    |

### 📊 Dados, Formulario e Validacao

| Biblioteca          | Versao  | Uso                        |
| ------------------- | ------- | -------------------------- |
| react-hook-form     | 7.71.2  | Estado de formularios      |
| zod                 | 4.3.6   | Validacao de schema        |
| @hookform/resolvers | 5.2.2   | Integracao Zod + RHF       |
| dayjs               | 1.11.19 | Datas e periodos           |
| nuqs                | 2.8.8   | Estado sincronizado na URL |

### 🔐 Autenticacao, API e IA

| Biblioteca         | Versao          | Uso                             |
| ------------------ | --------------- | ------------------------------- |
| better-auth        | 1.4.18          | Login social e sessao           |
| orval              | 8.1.0           | Geracao de cliente API tipado   |
| ai + @ai-sdk/react | 6.0.49 / 3.0.51 | Chat com streaming              |
| streamdown         | 2.2.0           | Renderizacao markdown em stream |

### 🛠️ Tooling

| Ferramenta                     | Uso                                        |
| ------------------------------ | ------------------------------------------ |
| ESLint 9 + eslint-config-next  | Qualidade de codigo                        |
| Prettier                       | Formatacao                                 |
| PostCSS + @tailwindcss/postcss | Pipeline CSS                               |
| pnpm                           | Gerenciador de pacotes (lockfile presente) |

---

## 🏗️ Arquitetura do Projeto

```txt
src/
├── 📁 app/                           # App Router (paginas e rotas)
│   ├── 📁 _components/               # Componentes globais (chat, nav, cards)
│   ├── 📁 _lib/                      # Cliente auth, fetch custom e API gerada
│   │   ├── 📁 api/
│   │   │   └── 📁 fetch-generated/   # Cliente API gerado pelo Orval
│   │   ├── auth-client.ts            # Cliente Better Auth (client-side)
│   │   ├── fetch.ts                  # Mutator custom com cookies
│   │   └── get-session-server.ts     # Sessao no servidor
│   ├── 📁 auth/                      # Tela de autenticacao
│   ├── 📁 onboarding/                # Onboarding com chat embutido
│   ├── 📁 profile/                   # Perfil e logout
│   ├── 📁 stats/                     # Dashboard de desempenho
│   └── 📁 workout-plans/[id]/days/[dayId]/
│                                    # Fluxo de treino diario + server actions
├── 📁 components/
│   └── 📁 ui/                        # Design system base (shadcn)
├── 📁 lib/                           # Utilitarios gerais
└── 📁 public/                        # Assets estaticos
```

### Padroes adotados

- **Server Components por padrao** nas paginas para proteger dados e sessao.
- **Client Components** apenas onde ha estado/interacao (chat, form, botoes de acao).
- **Server Actions** para mutacoes de sessao de treino.
- **API fortemente tipada** por codigo gerado do Swagger.
- **Mutator unico de fetch** para compartilhar base URL e cookies.

---

## Fluxos de Produto

### 1. Autenticacao e sessao

1. Usuario acessa o app.
2. O server verifica sessao em `/api/auth/get-session` via cookie.
3. Sem sessao: redireciona para `/auth`.
4. Com sessao: continua para os fluxos de treino.

### 2. Gate de onboarding

1. Ao entrar no app, frontend consulta `/home/{date}` e `/me/`.
2. Se nao houver plano ativo ou dados de treino, redireciona para `/onboarding`.
3. O onboarding abre o Coach AI em modo embutido com mensagem inicial.

### 3. Execucao de treino

1. Usuario abre o plano e escolhe o dia.
2. Botao **Iniciar Treino** dispara server action com `POST /sessions`.
3. Botao **Marcar como concluido** envia `PATCH /sessions/{sessionId}` com `completedAt`.
4. A rota e revalidada para atualizar estado da tela.

### 4. Chat contextual

- O chat pode ser aberto globalmente (botao na bottom nav).
- Em exercicios, o chat abre com prompt contextual: como executar o exercicio corretamente.

---

## Integracao com API

O cliente e gerado em `app/_lib/api/fetch-generated/index.ts` com **Orval** a partir de:

- `NEXT_PUBLIC_API_URL/swagger.json`

### Endpoints principais consumidos

| Metodo | Endpoint                                                | Finalidade                                          |
| ------ | ------------------------------------------------------- | --------------------------------------------------- |
| GET    | `/home/{date}`                                          | Dados da home (streak, consistencia, treino do dia) |
| GET    | `/me/`                                                  | Dados de treino do usuario                          |
| PUT    | `/me/`                                                  | Upsert de dados de treino                           |
| GET    | `/stats/?from=&to=`                                     | Estatisticas do periodo                             |
| GET    | `/workout-plans/{id}`                                   | Detalhes do plano                                   |
| GET    | `/workout-plans/{id}/days/{dayId}`                      | Detalhes do treino do dia                           |
| POST   | `/workout-plans/{id}/days/{dayId}/sessions`             | Inicia sessao                                       |
| PATCH  | `/workout-plans/{id}/days/{dayId}/sessions/{sessionId}` | Conclui/atualiza sessao                             |
| POST   | `/ai/`                                                  | Chat com assistente de treino                       |

---

## Variaveis de Ambiente

Use o arquivo `.env.example` como base.

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Descricao

- `NEXT_PUBLIC_API_URL`: URL base da API backend (inclui auth, treino, stats e IA).
- `NEXT_PUBLIC_BASE_URL`: URL do frontend usada no callback de login social.

---

## Como Rodar Localmente

### Pre-requisitos

- Node.js 20+
- pnpm (recomendado) ou npm
- Backend da API em execucao

### 1. Clonar e instalar dependencias

```bash
git clone <url-do-repositorio>
cd treinos-frontend
pnpm install
# alternativa
# npm install
```

### 2. Configurar ambiente

```bash
cp .env.example .env
# Windows PowerShell
# Copy-Item .env.example .env
```

Preencha os valores conforme seu ambiente.

### 3. Executar em desenvolvimento

```bash
pnpm dev
```

Aplicacao disponivel em `http://localhost:3000`.

---

## 📝 Scripts Disponiveis

```bash
pnpm dev      # Sobe o servidor de desenvolvimento
pnpm build    # Gera build de producao
pnpm start    # Inicia app em modo producao
pnpm lint     # Roda lint com config do Next.js
```

### Geracao do cliente de API (Orval)

Como nao existe script dedicado no `package.json`, execute manualmente:

```bash
npx orval --config orval.config.ts
```

Isso atualiza o cliente em `app/_lib/api/fetch-generated/index.ts`.

---

## UX e Design System

- Tema com variaveis CSS em `app/globals.css` (cores, radius, tipografia).
- Fontes: Geist, Geist Mono, Inter Tight e Anton via `next/font`.
- Biblioteca de componentes reutilizaveis em `components/ui`.
- Foco em layout mobile-first e navegacao de toque.

---

## Qualidade e Boas Praticas

- ESLint com regras `core-web-vitals` e TypeScript do Next.
- Alias de import `@/*` no TypeScript.
- Separacao clara entre UI, regras de pagina e camada de dados.
- Tratamento explicito de erros de API em rotas criticas.

---

## 🚀 Deploy

O frontend pode ser publicado na Vercel ou em qualquer ambiente Node compativel.

### Build de producao

```bash
pnpm build
pnpm start
```

Configure as mesmas variaveis de ambiente do `.env` no provedor de deploy.

---

## Observacoes Importantes

- Este repositorio e o frontend da solucao. Ele depende de uma API backend ativa.
- As chamadas autenticadas utilizam cookies e `credentials: include`.
- A configuracao de imagens externas permite host `https://*.ufs.sh`.

---

## 📄 Licenca

Este projeto esta sob a licenca MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Lucas Sarasa**

- 🌐 GitHub: [@lucasarasa](https://github.com/lucasarasa)
- 💼 LinkedIn: [Lucas Sarasa](https://www.linkedin.com/in/lucassarasa/)
- ✉️ Email: lucasmsarasa@gmail.com
