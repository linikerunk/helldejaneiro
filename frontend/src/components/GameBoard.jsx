function GameBoard({ tiles, flippedTiles, onTileClick }) {
  return (
    <div className="bg-black/40 p-6 md:p-8 rounded-xl border-2 border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mx-auto max-w-2xl">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            onClick={() => onTileClick(tile.id)}
            className={`game-tile ${
              tile.isFlipped || tile.isMatched ? 'selected' : ''
            } ${tile.isMatched ? 'matched' : ''}`}
          >
            <span className={tile.isFlipped || tile.isMatched ? '' : 'opacity-0'}>
              {tile.isFlipped || tile.isMatched ? tile.symbol : '?'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameBoard
