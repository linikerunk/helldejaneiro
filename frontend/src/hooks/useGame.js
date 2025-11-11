import { useState, useEffect, useCallback } from 'react'

const symbols = ['🎭', '🏰', '🌙', '⚡', '🎸', '🗡️', '🌴', '🔮']

function useGame() {
  const [tiles, setTiles] = useState([])
  const [flippedTiles, setFlippedTiles] = useState([])
  const [matches, setMatches] = useState(0)
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  // Initialize game tiles
  const initializeTiles = useCallback(() => {
    const gameTiles = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        isFlipped: false,
        isMatched: false
      }))
    setTiles(gameTiles)
  }, [])

  // Start game
  const startGame = useCallback(() => {
    setGameActive(true)
    initializeTiles()
  }, [initializeTiles])

  // Reset game
  const resetGame = useCallback(() => {
    setGameActive(false)
    setFlippedTiles([])
    setMatches(0)
    setMoves(0)
    setScore(0)
    setTimer(0)
    setIsGameOver(false)
    initializeTiles()
  }, [initializeTiles])

  // Handle tile click
  const handleTileClick = useCallback((tileId) => {
    if (!gameActive) return
    if (flippedTiles.length >= 2) return

    const tile = tiles.find(t => t.id === tileId)
    if (!tile || tile.isMatched || flippedTiles.includes(tileId)) return

    setFlippedTiles(prev => [...prev, tileId])
    setTiles(prev => prev.map(t =>
      t.id === tileId ? { ...t, isFlipped: true } : t
    ))
  }, [gameActive, flippedTiles, tiles])

  // Check for matches
  useEffect(() => {
    if (flippedTiles.length === 2) {
      setMoves(prev => prev + 1)

      const [firstId, secondId] = flippedTiles
      const firstTile = tiles.find(t => t.id === firstId)
      const secondTile = tiles.find(t => t.id === secondId)

      if (firstTile.symbol === secondTile.symbol) {
        // Match found
        setTimeout(() => {
          setTiles(prev => prev.map(t =>
            t.id === firstId || t.id === secondId
              ? { ...t, isMatched: true, isFlipped: false }
              : t
          ))
          setMatches(prev => prev + 1)
          setScore(prev => prev + 100)
          setFlippedTiles([])
        }, 600)
      } else {
        // No match
        setTimeout(() => {
          setTiles(prev => prev.map(t =>
            t.id === firstId || t.id === secondId
              ? { ...t, isFlipped: false }
              : t
          ))
          setFlippedTiles([])
        }, 1000)
      }
    }
  }, [flippedTiles, tiles])

  // Check for game over
  useEffect(() => {
    if (gameActive && matches === symbols.length) {
      setGameActive(false)
      // Calculate time bonus
      const timeBonus = Math.max(0, 180 - timer) * 10
      setScore(prev => prev + timeBonus)
      setTimeout(() => setIsGameOver(true), 500)
    }
  }, [matches, gameActive, timer])

  // Timer
  useEffect(() => {
    let interval
    if (gameActive) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameActive])

  // Initialize tiles on mount
  useEffect(() => {
    initializeTiles()
  }, [initializeTiles])

  const closeModal = useCallback(() => {
    setIsGameOver(false)
  }, [])

  return {
    tiles,
    flippedTiles,
    matches,
    moves,
    score,
    timer,
    gameActive,
    isGameOver,
    handleTileClick,
    startGame,
    resetGame,
    closeModal
  }
}

export default useGame
