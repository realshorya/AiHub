# 🤖 AiHub - One Hub. Many AIs.

> A modern AI platform that brings multiple powerful AI models together in one place.

🌐 **Use AiHub online:** [Visit the live application](https://ai-hub-sepia.vercel.app)

AiHub is a React-based AI application built with Vite that allows users to interact with different AI models through a single, clean interface. Users can chat with multiple AI models, save their conversations, and access previous chats through the chat history.

## ✨ Features

* 🤖 Access multiple AI models in one platform
* 💬 Chat with different AI assistants
* 🧠 Supports 4 AI models:

  * ChatGPT
  * Claude
  * DeepSeek
  * Gemini
* 📝 Save conversations automatically
* 🕒 View previous chats in chat history
* 🔄 Switch between different AI models
* ⚡ Fast performance with Vite
* 📱 Responsive and modern user interface
* 🌐 Live deployed application

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Build Tool:** Vite
* **Styling:** CSS 
* **AI Models:** ChatGPT, Claude, DeepSeek, and Gemini
* **Deployment:** Deployed on VERCEL

## 📂 Project Structure

```text
AiHub/
├── Backend/
│   ├── init/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── vercel.json
├── Frontend/
│   └── Aihub/
│       ├── public/
│       ├── src/
│       ├── .env
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       ├── README.md
│       ├── vite.config.js
│       └── ...
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### 1. Install backend dependencies

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder with the required environment variables for:

- MongoDB connection string (`DB_LINK`)
- session secret (`SECRET`)
- AI API credentials used by the backend

Then start the API server:

```bash
node server.js
```

You can also run it with nodemon:

```bash
npx nodemon server.js
```

### 2. Install frontend dependencies

```bash
cd ../Frontend/Aihub
npm install
```

Create a `.env` file in `Frontend/Aihub` with:

```env
VITE_API_URL=http://localhost:8080
```

If you are using the deployed backend, replace the value with that production URL.

Then run the frontend:

```bash
npm run dev
```

### 3. Open the app

Once both servers are running, open the local URL shown in the Vite terminal to use AiHub.

## Notes

- The frontend and backend are intentionally separated in different folders.
- The backend handles AI requests, chat persistence, and session logic.
- The frontend handles the UI and calls the backend API for chat history and model responses.

## 🌐 Live Demo

You can use the deployed version of AiHub here:

👉 [Open AiHub](https://ai-hub-sepia.vercel.app)

## 💡 How It Works

1. Open AiHub.
2. Select one of the available AI models.
3. Enter your message or prompt.
4. Receive an AI-generated response.
5. Your conversation is saved automatically.
6. Access previous conversations anytime through the chat history.

## 🧠 Available AI Models

AiHub currently provides access to four AI models:

| AI Model    | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| 🤖 ChatGPT  | Advanced conversational AI for general tasks and assistance   |
| 🧠 Claude   | AI assistant focused on natural and intelligent conversations |
| 🔍 DeepSeek | AI model for reasoning, coding, and problem-solving           |
| ✨ Gemini    | Google's AI model for creative and intelligent assistance     |

## 🔮 Future Features

AiHub is continuously planned for improvement. Future updates may include:

* 🎨 AI Image Generation
* 🎙️ Voice Assistant
* 🔊 Voice-to-Text Interaction
* 🗣️ Text-to-Speech Responses
* 📁 File Upload and AI Analysis
* 🌐 Web Search Integration
* 🧠 More AI Models
* 📊 Improved Chat Management
* 🌙 Dark Mode/Light Mode
* 📱 Improved Mobile Experience

## 🎯 Project Goal

The goal of AiHub is to create a single platform where users can access multiple AI models without switching between different applications.

AiHub aims to make AI tools more accessible, convenient, and easy to use by combining powerful AI assistants into one unified platform.

## 🤝 Contributing

Contributions are welcome!

If you would like to contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add your feature"
```

5. Push to your branch.

```bash
git push origin feature/your-feature
```

6. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**SHORYA**

Built with ❤️ using React and Vite.

---

⭐ If you like this project, consider giving it a star on GitHub!

**AiHub — Multiple AI Models. One Powerful Platform. 🚀**
