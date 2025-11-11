function GameStats({ score, moves, matches, timer }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }

  const stats = [
    { label: 'Score', value: score, color: 'purple' },
    { label: 'Moves', value: moves, color: 'gold' },
    { label: 'Matches', value: matches, color: 'purple' },
    { label: 'Time', value: formatTime(timer), color: 'gold' }
  ]

  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color === 'purple' ? 'card-purple' : 'card-gold'} text-center`}
          >
            <div className={`text-3xl font-bold ${
              stat.color === 'purple' ? 'text-purple-400' : 'text-amber-400'
            }`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameStats
