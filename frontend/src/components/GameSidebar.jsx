function GameSidebar() {
  const instructions = [
    'Click "Start Game" to begin',
    'Click tiles to reveal symbols',
    'Match pairs of identical symbols',
    'Clear all tiles to win'
  ]

  const scoring = [
    { label: 'Match Found', value: '+100', color: 'amber' },
    { label: 'Time Bonus', value: '+10/sec', color: 'purple' },
    { label: 'Perfect Game', value: '+1000', color: 'amber' }
  ]

  const leaderboard = [
    { rank: '🥇', name: 'DragonSlayer', score: 2450, color: 'amber' },
    { rank: '🥈', name: 'NeonNinja', score: 2180, color: 'gray' },
    { rank: '🥉', name: 'SambaKing', score: 1950, color: 'gray' }
  ]

  return (
    <div className="w-full lg:w-80 space-y-6">
      {/* Instructions */}
      <div className="card-purple">
        <h3 className="text-2xl font-bold font-cinzel text-purple-300 mb-4">
          How to Play
        </h3>
        <ol className="space-y-3 text-gray-300">
          {instructions.map((instruction, index) => (
            <li key={index} className="flex items-start">
              <span className="text-amber-400 font-bold mr-2">{index + 1}.</span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Scoring */}
      <div className="card-gold">
        <h3 className="text-2xl font-bold font-cinzel text-amber-300 mb-4">
          Scoring
        </h3>
        <div className="space-y-2 text-gray-300">
          {scoring.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{item.label}</span>
              <span className={`font-bold ${
                item.color === 'amber' ? 'text-amber-400' : 'text-purple-400'
              }`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="card-purple">
        <h3 className="text-2xl font-bold font-cinzel text-purple-300 mb-4">
          Top Players
        </h3>
        <div className="space-y-3">
          {leaderboard.map((player, index) => (
            <div
              key={index}
              className={`flex justify-between items-center ${
                player.color === 'amber' ? 'text-amber-400' : 'text-gray-300'
              }`}
            >
              <span>{player.rank} {player.name}</span>
              <span className="font-bold">{player.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameSidebar
