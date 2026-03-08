# 🎮 LevelUp — Digital Games Ecommerce

**LevelUp** is a full-stack ecommerce platform for digital games on PC, Xbox, and PlayStation. Users can create accounts, browse and purchase games, write reviews, add friends, join communities, and stay updated with gaming industry news.

🌐 **Live Demo:** [ecommerce-eight-theta-66.vercel.app](https://ecommerce-eight-theta-66.vercel.app)

---

## ✨ Features

- 🔐 **User Authentication** — Create an account and manage your profile
- 🛒 **Game Store** — Browse and buy digital games across PC, Xbox, and PlayStation
- 💬 **Reviews & Comments** — Leave and read comments on game pages
- 👥 **Friends & Network** — Add friends and send messages
- 🌐 **Communities** — Join gaming communities and connect with players
- 📰 **Gaming News** — Read the latest news from the gaming industry
- ❤️ **Wishlist** — Save games for later
- 🔔 **Notifications** — Stay updated on activity

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | Next.js 14+ (App Router)            |
| Language     | TypeScript (97.7%)                  |
| Styling      | Tailwind CSS                        |
| Backend      | Next.js API Routes                  |
| Utilities    | Shell scripts (`setup.sh`)          |
| Deployment   | Vercel                              |

---

## 📁 Project Structure

```
Ecommerce/
├── app/              # App Router — pages, layouts and API routes
├── lib/              # Utility functions, helpers, and shared logic
├── public/           # Static assets (images, icons)
├── .vscode/          # Editor settings
├── setup.sh          # Project setup script
├── tailwind.config.js
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the repository

```bash
git clone https://github.com/YanPrudencio015/Ecommerce.git
cd Ecommerce
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

Or use the provided setup script:

```bash
bash setup.sh
```

### 3. Configure environment variables

Create a `.env.local` file in the root:

```env
# Example — add your actual keys here
NEXT_PUBLIC_API_URL=your_api_url
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧭 Navigation

The app includes the following main sections:

| Section         | Description                                      |
|-----------------|--------------------------------------------------|
| **Home**        | Featured games and upcoming releases             |
| **Store**       | Browse games by category: PC, Xbox, PlayStation  |
| **Your Games**  | Library of purchased games                       |
| **Network**     | Friends, messages, and communities               |
| **Notifications** | Activity and updates                           |
| **Settings**    | Account preferences                              |
| **Support**     | Help center, refunds, and troubleshooting        |

---

## 🚀 Deploy on Vercel

The project is already live on Vercel. To deploy your own instance:

1. Push the repo to GitHub
2. Import it on [Vercel](https://vercel.com/new)
3. Add any required environment variables
4. Deploy 🚀

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 👤 Author

**Yan Prudencio**  
GitHub: [@YanPrudencio015](https://github.com/YanPrudencio015)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
