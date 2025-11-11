# 🔥 Hell de Janeiro

> A dark-mode React game dashboard inspired by Rio de Janeiro's energy fused with DracoPunk gothic aesthetics.

[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

## 🎮 About

**Hell de Janeiro** is an interactive web game that combines Rio de Janeiro's vibrant carnival energy with DracoPunk gothic aesthetics, creating a unique dark fantasy atmosphere with neon-lit underworld vibes.

### Built With

- ⚛️ **React 18** - Modern UI framework
- ⚡ **Vite** - Lightning-fast build tool
- 🎨 **Tailwind CSS** - Utility-first styling
- 🎮 **React Router** - Navigation

## ✨ Features

- 🎲 **Interactive Memory Game** - Tile-matching gameplay
- 🌙 **Dark Theme** - Purple and gold neon accents
- 📱 **Responsive Design** - Works on all devices
- ✨ **Smooth Animations** - Glowing effects and transitions
- 🎯 **Score System** - Track your best performances

## 🚀 Quick Start

### Prerequisites

- Node.js v14 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/liniker/helldejaneiro.git

# Navigate to frontend
cd helldejaneiro/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the app running.

## 📦 Project Structure

```
helldejaneiro/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom hooks
│   │   └── utils/      # Utilities
│   ├── public/         # Static assets
│   └── package.json
├── backend/            # Backend (if needed)
├── render.yaml         # Render deployment config
├── DEPLOY.md          # Deployment guide
└── README.md          # This file
```

## 🎯 Game Instructions

1. Click **"Start Game"** to begin
2. Click on tiles to reveal hidden symbols
3. Match pairs of identical symbols
4. Clear all tiles to win!
5. Try to beat your high score

### Scoring System

- **Match Found**: +100 points
- **Time Bonus**: +10 points per second remaining (under 3 minutes)
- **Perfect Game**: +1000 bonus points

## 🌐 Deploy to Render

This project is configured for easy deployment on Render.

### One-Click Deploy

1. Push your code to GitHub
2. Click the "Deploy to Render" button above
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml` and deploy

### Manual Deploy

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Building for Production

```bash
cd frontend
npm run build
```

The optimized build will be in `frontend/dist/`.

## 🎨 Customization

### Theme Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  'hell-purple': { /* your colors */ },
  'hell-gold': { /* your colors */ }
}
```

### Fonts

The project uses:
- **Cinzel** - Elegant serif for titles
- **Inter** - Modern sans-serif for body

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details

© 2025 Serpens Studios - Coded with love and fire 🔥

## 👤 Author

**Liniker**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Enjoy the Dark Harmony!** 🎮🔥
