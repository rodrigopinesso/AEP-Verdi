# 🌱 Verdi

Verdi é um sistema web interativo para registro, visualização e acompanhamento de denúncias ambientais. Com foco em usabilidade, mobilidade e transparência, o projeto permite que usuários denunciem irregularidades ambientais, visualizem os casos em um mapa interativo e acompanhem o status de suas denúncias.

---

## 🧠 Autores & Contribuições

Este projeto foi desenvolvido por Rodrigo Pinesso RA: 22014201-2, Murilo Varoto RA: 22215190-2, Gustavo Arnoni RA: 22014037-2

---

## Link do vídeo
- https://www.youtube.com/watch?v=peKZiO8TwXs&ab_channel=RodrigoPinesso
---
## 📌 Funcionalidades Principais

* Autenticação com JWT (login e registro de usuários)
* Registro de novas denúncias com geolocalização (via clique no mapa)
* Mapa interativo com todos os pontos denunciados
* Lista detalhada de denúncias
* Tema escuro com alternância dinâmica
* Interface responsiva e com animações suaves

---

## 🖼️ Tecnologias Utilizadas

### Frontend (React + TailwindCSS)

* React 18
* React Router DOM
* TailwindCSS
* Axios
* React Leaflet + Leaflet

### Backend (Node.js + Express + MongoDB)

* Express.js
* MongoDB + Mongoose
* JWT para autenticação
* CORS e middleware de segurança

---

## 💻 Instalação (Ambiente Local)

### Requisitos

* Node.js
* MongoDB local ou remoto

### Backend

```bash
cd backend
npm install
```

Crie o arquivo `.env` com as seguintes variáveis:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/verdi
JWT_SECRET=sua_chave_secreta_segura
```

Inicie o servidor:

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📁 Estrutura de Pastas

```bash
verdi/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/api.js
│   │   └── App.jsx
│   ├── index.css
│   └── vite.config.js
```

---
