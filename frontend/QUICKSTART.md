# Hell de Janeiro - Quick Start Guide 🎮🔥

## Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
cd frontend
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open Your Browser
The app will automatically open at `http://localhost:3000`

---

## 🎯 What You'll See

### Home Page (`/`)
- Immersive hero section with glowing title
- Animated game preview tiles
- About sections explaining the game
- Features grid
- Call-to-action buttons

### Game Page (`/play`)
- Interactive memory matching game
- Real-time score tracking
- Timer and move counter
- Game instructions and leaderboard
- Victory modal on completion

---

## 🎮 How to Play

1. Click **"Start Game"** button
2. Click on tiles to reveal symbols
3. Match pairs of identical symbols
4. Clear all tiles to win
5. Try to beat your high score!

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool (super fast!)
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Custom Hooks** - Game logic (`useGame`)

---

## 📂 Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Page components (Home, Play)
├── hooks/          # Custom hooks (useGame)
└── utils/          # Utility functions
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize purple and gold shades:
```javascript
colors: {
  'hell-purple': { ... },
  'hell-gold': { ... }
}
```

### Components
All components use Tailwind utility classes. Custom classes defined in `src/index.css`:
- `.btn-primary` - Purple button
- `.btn-secondary` - Gold button
- `.card-purple` - Purple card
- `.card-gold` - Gold card
- `.game-tile` - Game tile

---

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

---

## 📚 Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🐛 Troubleshooting

### Port already in use?
Edit `vite.config.js` and change the port:
```javascript
server: {
  port: 3001 // Change to any available port
}
```

### Dependencies not installing?
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind styles not working?
Make sure `index.css` is imported in `main.jsx`:
```javascript
import './index.css'
```

---

## 🎉 Have Fun!

Enjoy building and playing Hell de Janeiro!

**© 2025 Serpens Studios — Coded with love and fire** 🔥
