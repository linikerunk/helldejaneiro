function GameModal({ isOpen, score, moves, timer, onPlayAgain, onClose }) {
  if (!isOpen) return null

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }

  const handleShare = () => {
    const text = `I scored ${score} points in Hell de Janeiro! Can you beat my score? 🎮🔥`

    if (navigator.share) {
      navigator.share({
        title: 'Hell de Janeiro',
        text: text,
        url: window.location.href
      }).catch(err => console.log('Share failed', err))
    } else {
      alert(text)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-purple-900/90 to-black p-8 rounded-2xl border-2 border-amber-500 max-w-md w-full text-center shadow-[0_0_50px_rgba(217,119,6,0.8)]">
        <h2 className="text-4xl font-bold font-cinzel text-amber-400 mb-4 animate-glow">
          Victory!
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          You've mastered the Dark Harmony
        </p>

        <div className="space-y-3 mb-6 text-left">
          <div className="flex justify-between text-lg">
            <span className="text-gray-400">Final Score:</span>
            <span className="text-purple-400 font-bold">{score}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-gray-400">Total Moves:</span>
            <span className="text-amber-400 font-bold">{moves}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-gray-400">Time:</span>
            <span className="text-purple-400 font-bold">{formatTime(timer)}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button onClick={onPlayAgain} className="flex-1 btn-primary">
            Play Again
          </button>
          <button onClick={handleShare} className="flex-1 btn-secondary">
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameModal
