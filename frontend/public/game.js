// Game Configuration
const symbols = ['🎭', '🏰', '🌙', '⚡', '🎸', '🗡️', '🌴', '🔮', '🦇', '🎆', '👑', '🌟'];
let gameActive = false;
let flippedTiles = [];
let matchedPairs = 0;
let moves = 0;
let score = 0;
let timer = 0;
let timerInterval;

// DOM Elements
const gameBoard = document.getElementById('gameBoard');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const scoreEl = document.getElementById('score');
const movesEl = document.getElementById('moves');
const matchesEl = document.getElementById('matches');
const timerEl = document.getElementById('timer');
const gameOverModal = document.getElementById('gameOverModal');
const playAgainBtn = document.getElementById('playAgainBtn');
const shareBtn = document.getElementById('shareBtn');

// Initialize Game
function initGame() {
    gameBoard.innerHTML = '';
    gameActive = false;
    flippedTiles = [];
    matchedPairs = 0;
    moves = 0;
    score = 0;
    timer = 0;

    updateStats();
    clearInterval(timerInterval);

    // Create tile pairs
    const gameTiles = [...symbols.slice(0, 8), ...symbols.slice(0, 8)]
        .sort(() => Math.random() - 0.5);

    gameTiles.forEach((symbol, index) => {
        const tile = createTile(symbol, index);
        gameBoard.appendChild(tile);
    });
}

// Create Tile Element
function createTile(symbol, index) {
    const tile = document.createElement('div');
    tile.className = 'tile game-tile text-5xl';
    tile.dataset.symbol = symbol;
    tile.dataset.index = index;
    tile.innerHTML = '<span class="opacity-0">?</span>';

    tile.addEventListener('click', () => handleTileClick(tile));

    return tile;
}

// Handle Tile Click
function handleTileClick(tile) {
    if (!gameActive) return;
    if (tile.classList.contains('matched')) return;
    if (flippedTiles.includes(tile)) return;
    if (flippedTiles.length >= 2) return;

    // Reveal tile
    tile.innerHTML = `<span>${tile.dataset.symbol}</span>`;
    tile.classList.add('selected');
    flippedTiles.push(tile);

    // Check for match
    if (flippedTiles.length === 2) {
        moves++;
        movesEl.textContent = moves;
        movesEl.classList.add('score-pop');
        setTimeout(() => movesEl.classList.remove('score-pop'), 300);

        setTimeout(checkMatch, 600);
    }
}

// Check for Match
function checkMatch() {
    const [tile1, tile2] = flippedTiles;

    if (tile1.dataset.symbol === tile2.dataset.symbol) {
        // Match found
        tile1.classList.add('matched');
        tile2.classList.add('matched');
        tile1.classList.remove('selected');
        tile2.classList.remove('selected');

        matchedPairs++;
        score += 100;

        matchesEl.textContent = matchedPairs;
        scoreEl.textContent = score;

        scoreEl.classList.add('score-pop');
        matchesEl.classList.add('score-pop');
        setTimeout(() => {
            scoreEl.classList.remove('score-pop');
            matchesEl.classList.remove('score-pop');
        }, 300);

        // Check for win
        if (matchedPairs === 8) {
            endGame();
        }
    } else {
        // No match
        tile1.innerHTML = '<span class="opacity-0">?</span>';
        tile2.innerHTML = '<span class="opacity-0">?</span>';
        tile1.classList.remove('selected');
        tile2.classList.remove('selected');
    }

    flippedTiles = [];
}

// Start Game
function startGame() {
    gameActive = true;
    startBtn.textContent = 'Playing...';
    startBtn.disabled = true;
    startBtn.classList.add('opacity-50', 'cursor-not-allowed');

    // Start timer
    timerInterval = setInterval(() => {
        timer++;
        const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
        const seconds = (timer % 60).toString().padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

// End Game
function endGame() {
    gameActive = false;
    clearInterval(timerInterval);

    // Calculate bonus
    const timeBonus = Math.max(0, 180 - timer) * 10;
    score += timeBonus;

    // Show game over modal
    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalMoves').textContent = moves;
    document.getElementById('finalTime').textContent = timerEl.textContent;

    setTimeout(() => {
        gameOverModal.classList.remove('hidden');
    }, 500);
}

// Update Stats
function updateStats() {
    scoreEl.textContent = score;
    movesEl.textContent = moves;
    matchesEl.textContent = matchedPairs;
    timerEl.textContent = '00:00';
}

// Event Listeners
startBtn.addEventListener('click', startGame);

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    initGame();
    startBtn.textContent = 'Start Game';
    startBtn.disabled = false;
    startBtn.classList.remove('opacity-50', 'cursor-not-allowed');
});

playAgainBtn.addEventListener('click', () => {
    gameOverModal.classList.add('hidden');
    initGame();
    startBtn.textContent = 'Start Game';
    startBtn.disabled = false;
    startBtn.classList.remove('opacity-50', 'cursor-not-allowed');
});

shareBtn.addEventListener('click', () => {
    const text = `I scored ${score} points in Hell de Janeiro! Can you beat my score? 🎮🔥`;

    if (navigator.share) {
        navigator.share({
            title: 'Hell de Janeiro',
            text: text,
            url: window.location.href
        }).catch(err => console.log('Share failed', err));
    } else {
        // Fallback for browsers that don't support Web Share API
        alert(text);
    }
});

// Initialize on load
initGame();
