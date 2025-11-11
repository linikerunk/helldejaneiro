# Hell de Janeiro - Frontend

A dark-mode React + TailwindCSS game dashboard inspired by Rio de Janeiro's energy fused with DracoPunk gothic aesthetics.

Built with:
- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎮 React Router

## 🎮 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **TailwindCSS** - Fully customizable with Tailwind utilities
- **Memory Game** - Interactive tile-matching game
- **Dark Theme** - Purple and gold neon accents on dark gradients
- **Smooth Animations** - Glowing text, hover effects, and transitions
- **Custom Components** - Reusable Tailwind classes

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx
│   │   ├── GamePreview.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── CallToAction.jsx
│   │   ├── Footer.jsx
│   │   ├── GameBoard.jsx
│   │   ├── GameStats.jsx
│   │   ├── GameSidebar.jsx
│   │   └── GameModal.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   └── Play.jsx
│   ├── hooks/            # Custom React hooks
│   │   └── useGame.js
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind + custom styles
├── public/               # Static assets
├── dist/                 # Build output (generated)
├── index.html            # HTML template
├── package.json          # NPM dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Your browser will automatically open to:**
   `http://localhost:3000`

## 🛠️ Development

### Development Mode

```bash
npm run dev
```

This starts the Vite dev server with:
- ⚡ Lightning-fast HMR (Hot Module Replacement)
- 🔄 Instant React component updates
- 🎨 Live Tailwind CSS compilation

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deploying.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'hell-purple': {
    // Your purple shades
  },
  'hell-gold': {
    // Your gold shades
  }
}
```

### Fonts

The project uses two Google Fonts:
- **Cinzel** - Elegant serif for titles
- **Inter** - Modern sans-serif for body text

### Custom Components

Reusable Tailwind components are defined in `src/input.css`:

- `.btn-primary` - Purple button
- `.btn-secondary` - Gold button
- `.card-purple` - Purple card container
- `.card-gold` - Gold card container
- `.title-glow` - Glowing gradient text
- `.game-tile` - Interactive game tile

## 📝 Scripts

- `npm run dev` - Start Vite development server with HMR
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally

## 🎯 Game Instructions

1. Click "Start Game" to begin
2. Click on tiles to reveal hidden symbols
3. Match pairs of identical symbols
4. Clear all tiles to win
5. Try to beat your high score!

## 🌟 Scoring

- Match Found: +100 points
- Time Bonus: +10 points per second remaining (under 3 minutes)
- Perfect Game Bonus: +1000 points

## 🎭 Theme

**Hell de Janeiro** combines:
- Rio de Janeiro's vibrant carnival energy
- DracoPunk gothic aesthetics
- Dark fantasy atmosphere
- Neon-lit underworld vibes

## 📄 License

© 2025 Serpens Studios — Coded with love and fire

## 🤝 Contributing

Feel free to fork this project and make it your own!

---

**Enjoy the Dark Harmony!** 🎮🔥
