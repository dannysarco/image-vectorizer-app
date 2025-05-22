🖼️ Image Vectorizer Web App

A simple single-page web application that allows users to:
- Upload an image (.jpg, .jpeg, .png, or .gif)
- Convert it to SVG format using the Vectorizer.ai API
- Automatically download the resulting SVG file

---

🚀 Features
- Drag & drop or browse image file upload
- File validation (type & size)
- Live thumbnail preview
- API integration with Vectorizer.ai
- Auto-download converted SVG with original filename
- Responsive and accessible UI
- Graceful error handling

---

🧰 Tech Stack
- Frontend: React + Tailwind CSS
- Backend (optional): Node.js (Express) or Vercel Serverless Functions
- Deployment: Vercel (or any static host)

---

🛠️ Getting Started

1. Clone the Repository

```bash
git clone https://github.com/dannysarco/image-vectorizer-app.git
cd image-vectorizer-app
```

2. Install Dependencies

```bash
npm install
```

3. Set Up Environment Variables

Create a .env file based on .env.example:

```bash
cp .env.example .env
```

Add your Vectorizer.ai API key (if required):

```
VECTORIZER_API_KEY=your_api_key_here
```

4. Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000

---

📦 Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── api.ts
│   └── utils.ts
├── .env.example
├── package.json
└── README.md
```


---

🧪 TODO / Enhancements
- Add loading animation during conversion
- Improve error messaging UX
- Add support for mobile drag-and-drop
- Optional history of recent conversions

---

📄 License

MIT License

---

🙏 Credits
- Vectorizer.ai for the API
- React & Tailwind CSS

---

Author: Danny Sarco

Happy vectorizing!
