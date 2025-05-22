# 🖼️ Image Vectorizer App

A full-stack web app for converting PNG, JPG, and GIF files into SVG vector graphics using the [Vectorizer.ai](https://vectorizer.ai) API.

Built with:

* **Frontend**: React + Vite + Tailwind CSS
* **Backend**: Express + TypeScript + ts-node-dev
* **Tooling**: `concurrently` for full-stack development

---

## 🚀 Quick Start

### 1. Clone the Repo

```bash
git clone your-repo-url
cd image-vectorizer-root
```

### 2. Install Root Tools

```bash
npm install  # installs concurrently
```

### 3. Install Frontend and Backend Dependencies

```bash
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

### 4. Add API Credentials to Backend

Create `backend/.env`:

```env
VECTORIZER_USER=your_api_user
VECTORIZER_PASS=your_api_password
```

> You must have a Vectorizer.ai API subscription. See [pricing](https://vectorizer.ai/pricing).

### 5. Run the App

```bash
npm run dev
```

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend Proxy: [http://localhost:3001/vectorize](http://localhost:3001/vectorize)

---

## 🧪 Development Features

* Hot-reloading frontend via Vite
* Auto-restarting backend with `ts-node-dev`
* File preview, conversion status, and auto-download

---

## 🧯 Troubleshooting

### ❌ Credentials show as undefined

* Ensure `.env` is in `backend/`
* Restart after edits (`npm run dev`)
* Variables must be:

  ```env
  VECTORIZER_USER=...
  VECTORIZER_PASS=...
  ```

### ❌ 401 / 402 errors from API

* 401: Check credentials spelling or syntax
* 402: You need an active API subscription

  * Or append `?mode=test` to the API URL (dev mode only)

### ❌ CORS issues

* You must use the backend proxy. The API does **not** support frontend-origin CORS.

---

## 📦 Project Structure

```
image-vectorizer-app/
├── backend/
│   ├── server.ts          ← Express proxy
│   ├── .env               ← Your API creds
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
├── package.json           ← Runs both with concurrently
└── README.md
```

---

## 📃 License

MIT — Use freely, credit appreciated.

---

Made with ❤️ by \[you].
