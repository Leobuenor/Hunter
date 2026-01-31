jobtrack-pro/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── jobs/
│   │   │   ├── graph/
│   │   │   └── analytics/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── server/                    # Backend Node.js
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── graph/
│   │   └── utils/
│   ├── prisma/
│   └── package.json
├── shared/                    # Código compartilhado
│   └── types.ts
└── docker-compose.yml


# JobTrack Pro - Sistema Inteligente de Gestão de Candidaturas

[![Live Demo](https://img.shields.io/badge/demo-live-green)]()
[![React](https://img.shields.io/badge/React-18-blue)]()
[![Node.js](https://img.shields.io/badge/Node.js-18-green)]()

## 🚀 Funcionalidades
- 📊 Dashboard Kanban interativo
- 🕸️ Grafo de tecnologias em tempo real
- 🤖 Recomendações inteligentes
- 🔔 Notificações WebSocket

## 🛠️ Tecnologias
- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Banco:** PostgreSQL, Prisma ORM
- **Infra:** Docker, Redis, WebSocket

## 📸 Screenshots
![Dashboard](screenshots/dashboard.png)
![Graph Visualization](screenshots/graph.png)

## 🧠 O que aprendi
- Implementação de grafos em aplicação real
- WebSockets para comunicação em tempo real
- Scraping e processamento de dados
- Arquitetura full-stack completa