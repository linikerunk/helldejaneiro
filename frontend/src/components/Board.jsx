import { useState } from 'react'

// Dados das casas do tabuleiro (30 casas como Banco Imobiliário)
const boardSpaces = [
  // Lado inferior (0-7)
  { id: 0, nome: 'INÍCIO', tipo: 'inicio', cor: 'green', icon: '🏁', evento: 'Receba 200 ao passar' },
  { id: 1, nome: 'Morro do Alemão', tipo: 'territorio', cor: 'red', icon: '🏔️', preco: 600, renda: 50, description: "Rode um dado se cair mais de 6 você deve 200 reias para o chefe da boca." },
  { id: 2, nome: 'Cofre da Facção', tipo: 'evento', cor: 'amber', icon: '💰', evento: 'Pegue uma carta' },
  { id: 3, nome: 'Rocinha', tipo: 'territorio', cor: 'red', icon: '🏘️', preco: 600, renda: 50 },
  { id: 4, nome: 'Complexo do Alemão', tipo: 'territorio', cor: 'red', icon: '🏚️', preco: 800, renda: 70 },
  { id: 5, nome: 'Boca de Fumo', tipo: 'especial', cor: 'purple', icon: '💊', evento: 'Pague taxa de 150' },
  { id: 6, nome: 'Vidigal', tipo: 'territorio', cor: 'blue', icon: '🌊', preco: 1000, renda: 90 },
  { id: 7, nome: 'Chance', tipo: 'chance', cor: 'orange', icon: '❓', evento: 'Pegue uma carta de Chance' },

  // Lado direito (8-14)
  { id: 8, nome: 'DELEGACIA', tipo: 'prisao', cor: 'gray', icon: '🚔', evento: 'Preso! Perca 1 turno' },
  { id: 9, nome: 'Cidade de Deus', tipo: 'territorio', cor: 'blue', icon: '🏙️', preco: 1200, renda: 100 },
  { id: 10, nome: 'Depósito de Armas', tipo: 'especial', cor: 'red', icon: '🔫', evento: 'Compre armas' },
  { id: 11, nome: 'Jacarezinho', tipo: 'territorio', cor: 'blue', icon: '🐊', preco: 1400, renda: 110 },
  { id: 12, nome: 'Maré', tipo: 'territorio', cor: 'blue', icon: '🌊', preco: 1600, renda: 120 },
  { id: 13, nome: 'Cofre da Facção', tipo: 'evento', cor: 'amber', icon: '💰', evento: 'Pegue uma carta' },
  { id: 14, nome: 'Providência', tipo: 'territorio', cor: 'purple', icon: '⛪', preco: 1800, renda: 140 },

  // Lado superior (15-22)
  { id: 15, nome: 'IGREJA', tipo: 'igreja', cor: 'purple', icon: '⛪', evento: 'Lave dinheiro aqui' },
  { id: 16, nome: 'Complexo da Penha', tipo: 'territorio', cor: 'purple', icon: '🏔️', preco: 2000, renda: 150 },
  { id: 17, nome: 'Chance', tipo: 'chance', cor: 'orange', icon: '❓', evento: 'Pegue uma carta de Chance' },
  { id: 18, nome: 'Salgueiro', tipo: 'territorio', cor: 'purple', icon: '🎭', preco: 2200, renda: 160 },
  { id: 19, nome: 'Mangueira', tipo: 'territorio', cor: 'green', icon: '🎵', preco: 2400, renda: 170 },
  { id: 20, nome: 'Rota de Fuga', tipo: 'especial', cor: 'blue', icon: '🏃', evento: 'Mova-se 3 casas extras' },
  { id: 21, nome: 'Beija-Flor', tipo: 'territorio', cor: 'green', icon: '🐦', preco: 2600, renda: 180 },
  { id: 22, nome: 'Cofre da Facção', tipo: 'evento', cor: 'amber', icon: '💰', evento: 'Pegue uma carta' },

  // Lado esquerdo (23-29)
  { id: 23, nome: 'CONFRONTO', tipo: 'confronto', cor: 'red', icon: '⚔️', evento: 'Guerra de facções!' },
  { id: 24, nome: 'Copacabana', tipo: 'territorio', cor: 'green', icon: '🏖️', preco: 3000, renda: 200 },
  { id: 25, nome: 'Boca de Fumo', tipo: 'especial', cor: 'purple', icon: '💊', evento: 'Pague taxa de 200' },
  { id: 26, nome: 'Ipanema', tipo: 'territorio', cor: 'green', icon: '🌴', preco: 3200, renda: 220 },
  { id: 27, nome: 'Leblon', tipo: 'territorio', cor: 'green', icon: '💎', preco: 3500, renda: 250 },
  { id: 28, nome: 'Chance', tipo: 'chance', cor: 'orange', icon: '❓', evento: 'Pegue uma carta de Chance' },
  { id: 29, nome: 'Barra da Tijuca', tipo: 'territorio', cor: 'green', icon: '🏢', preco: 4000, renda: 300 },
]

// Profissões disponíveis para os jogadores
const professions = [
  { id: 1, nome: 'Aviaozinho', icon: '🏃', cor: 'blue' },
  { id: 2, nome: 'Pastor', icon: '📿', cor: 'purple' },
  { id: 3, nome: 'Chefe da Boca', icon: '👑', cor: 'red' },
  { id: 4, nome: 'Policial', icon: '👮', cor: 'gray' }
]

function Board() {
  const [diceRolling, setDiceRolling] = useState(false)
  const [dice1, setDice1] = useState(1)
  const [dice2, setDice2] = useState(1)
  const [selectedSpace, setSelectedSpace] = useState(null)
  const [players, setPlayers] = useState([
    { id: 1, profissao: professions[0], position: 0 },
    { id: 2, profissao: professions[1], position: 0 },
    { id: 3, profissao: professions[2], position: 0 },
    { id: 4, profissao: professions[3], position: 0 }
  ])
  const [currentPlayer, setCurrentPlayer] = useState(0)

  const rollDice = () => {
    setDiceRolling(true)

    // Animação de rolagem dos dados
    const interval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1)
      setDice2(Math.floor(Math.random() * 6) + 1)
    }, 100)

    // Para após 1 segundo
    setTimeout(() => {
      clearInterval(interval)
      const finalDice1 = Math.floor(Math.random() * 6) + 1
      const finalDice2 = Math.floor(Math.random() * 6) + 1
      setDice1(finalDice1)
      setDice2(finalDice2)

      // Move o jogador atual
      const totalMoves = finalDice1 + finalDice2
      setPlayers(prevPlayers => {
        const newPlayers = [...prevPlayers]
        const player = newPlayers[currentPlayer]
        player.position = (player.position + totalMoves) % 30

        // Verifica se caiu na prisão (casa 8)
        if (player.position === 8) {
          player.preso = true
          player.turnosPreso = 2
        }

        return newPlayers
      })

      // Próximo jogador
      setCurrentPlayer((currentPlayer + 1) % 4)
      setDiceRolling(false)
    }, 1000)
  }

  const getSpaceColor = (cor) => {
    switch(cor) {
      case 'red': return 'bg-red-700 border-red-500'
      case 'blue': return 'bg-blue-700 border-blue-500'
      case 'green': return 'bg-green-700 border-green-500'
      case 'purple': return 'bg-purple-700 border-purple-500'
      case 'amber': return 'bg-amber-600 border-amber-500'
      case 'orange': return 'bg-orange-600 border-orange-500'
      case 'gray': return 'bg-gray-700 border-gray-500'
      default: return 'bg-gray-800 border-gray-600'
    }
  }

  const getPlayerColor = (cor) => {
    switch(cor) {
      case 'blue': return 'bg-blue-500 border-blue-300'
      case 'purple': return 'bg-purple-500 border-purple-300'
      case 'red': return 'bg-red-500 border-red-300'
      case 'gray': return 'bg-gray-500 border-gray-300'
      case 'green': return 'bg-green-500 border-green-300'
      default: return 'bg-gray-500 border-gray-300'
    }
  }

  const renderSpace = (space, position) => {
    const isCorner = space.id === 0 || space.id === 8 || space.id === 15 || space.id === 23
    const playersInSpace = players.filter(p => p.position === space.id)

    return (
      <div
        key={space.id}
        onClick={() => setSelectedSpace(space)}
        className={`
          ${isCorner ? 'col-span-1 row-span-1 w-32 h-32' : 'w-24 h-32'}
          ${getSpaceColor(space.cor)}
          border-2 cursor-pointer
          flex flex-col items-center justify-center
          hover:scale-105 transition-all duration-300
          hover:shadow-[0_0_20px_rgba(220,38,38,0.8)]
          relative overflow-hidden
          ${position}
        `}
      >
        {/* Brilho animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>

        {/* Nome da casa */}
        <div className="text-white font-bold text-xs text-center px-1 leading-tight mb-1">
          {space.nome}
        </div>

        {/* Preço/Info */}
        {space.preco && (
          <div className="text-amber-300 text-[10px] font-semibold">
            💰 {space.preco}
          </div>
        )}

        {/* Jogadores nesta casa */}
        {playersInSpace.length > 0 && (
          <div className="absolute bottom-1 flex gap-1 flex-wrap justify-center px-1">
            {playersInSpace.map(player => (
              <div
                key={player.id}
                className={`
                  w-8 h-8 rounded-full ${getPlayerColor(player.profissao.cor)}
                  border-2 flex items-center justify-center text-lg
                  shadow-lg animate-bounce-slow
                  ${player.id - 1 === currentPlayer ? 'ring-2 ring-amber-400' : ''}
                `}
                title={player.profissao.nome}
              >
                {player.profissao.icon}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-cinzel font-bold animate-glow mb-2">
            Tabuleiro de Guerra
          </h1>
          <p className="text-gray-300 text-lg">
            Conquiste territórios, forme alianças e domine o Rio
          </p>
        </div>

        {/* Container do Tabuleiro */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border-2 border-red-500/30 shadow-2xl">

          {/* Grid do Tabuleiro */}
          <div className="relative">
            <div className="grid grid-cols-[repeat(9,1fr)] grid-rows-[repeat(9,1fr)] gap-0">

              {/* Canto inferior esquerdo - INÍCIO */}
              <div className="col-start-1 row-start-9">
                {renderSpace(boardSpaces[0])}
              </div>

              {/* Lado inferior (1-6) */}
              {boardSpaces.slice(1, 7).map((space, idx) => (
                <div key={space.id} className="col-start-[var(--col)] row-start-9" style={{'--col': idx + 2}}>
                  {renderSpace(space)}
                </div>
              ))}

              {/* Chance - posição 7 */}
              <div className="col-start-8 row-start-9">
                {renderSpace(boardSpaces[7])}
              </div>

              {/* Canto inferior direito - DELEGACIA */}
              <div className="col-start-9 row-start-9">
                {renderSpace(boardSpaces[8])}
              </div>

              {/* Lado direito (9-14) */}
              {boardSpaces.slice(9, 15).map((space, idx) => (
                <div key={space.id} className="col-start-9" style={{'--row': 8 - idx, gridRow: `${8 - idx}`}}>
                  {renderSpace(space)}
                </div>
              ))}

              {/* Canto superior direito - IGREJA */}
              <div className="col-start-9 row-start-1">
                {renderSpace(boardSpaces[15])}
              </div>

              {/* Lado superior (16-22) */}
              {boardSpaces.slice(16, 23).map((space, idx) => (
                <div key={space.id} className="row-start-1" style={{'--col': 8 - idx, gridColumn: `${8 - idx}`}}>
                  {renderSpace(space)}
                </div>
              ))}

              {/* Canto superior esquerdo - CONFRONTO */}
              <div className="col-start-1 row-start-1">
                {renderSpace(boardSpaces[23])}
              </div>

              {/* Lado esquerdo (24-29) */}
              {boardSpaces.slice(24, 30).map((space, idx) => (
                <div key={space.id} className="col-start-1" style={{'--row': idx + 2, gridRow: `${idx + 2}`}}>
                  {renderSpace(space)}
                </div>
              ))}

              {/* Centro - Dados e Info */}
              <div className="col-start-2 col-span-7 row-start-2 row-span-7 flex items-center justify-center">
                <div className="text-center">

                  {/* Logo do Jogo */}
                  <div className="mb-6">
                    <h2 className="text-4xl font-cinzel font-bold text-red-400 mb-2">
                      HELL de Janeiro
                    </h2>
                    <p className="text-gray-400 text-sm">Domine o Rio</p>
                  </div>

                  {/* Dados */}
                  <div className="flex gap-6 justify-center mb-6">
                    <div className={`
                      w-20 h-20 bg-white rounded-xl shadow-2xl
                      flex items-center justify-center text-4xl font-bold text-gray-900
                      ${diceRolling ? 'animate-spin' : 'animate-pulse'}
                      border-4 border-red-500
                    `}>
                      {dice1}
                    </div>
                    <div className={`
                      w-20 h-20 bg-white rounded-xl shadow-2xl
                      flex items-center justify-center text-4xl font-bold text-gray-900
                      ${diceRolling ? 'animate-spin' : 'animate-pulse'}
                      border-4 border-blue-500
                    `}>
                      {dice2}
                    </div>
                  </div>

                  {/* Resultado */}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-amber-400">
                      Total: {dice1 + dice2}
                    </div>
                  </div>

                  {/* Botão de Rolar */}
                  <button
                    onClick={rollDice}
                    disabled={diceRolling}
                    className={`
                      px-8 py-4 rounded-lg font-bold text-lg
                      transition-all duration-300
                      ${diceRolling
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] hover:scale-105'
                      }
                    `}
                  >
                    {diceRolling ? '🎲 Rolando...' : '🎲 Rolar Dados'}
                  </button>

                  {/* Instruções */}
                  <div className="mt-6 text-gray-400 text-sm max-w-md">
                    Clique nas casas para ver detalhes dos territórios
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Painel de Informações da Casa Selecionada */}
        {selectedSpace && (
          <div className="mt-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-xl border-2 border-amber-500/50 animate-slideIn">
            <div className="flex items-start gap-4">
              <div className="text-6xl">{selectedSpace.icon}</div>
              <div className="flex-1">
                <h3 className="text-3xl font-cinzel font-bold text-amber-400 mb-2">
                  {selectedSpace.nome}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Tipo:</span> {selectedSpace.tipo.toUpperCase()}
                  </p>
                  {selectedSpace.preco && (
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Preço:</span> 💰 {selectedSpace.preco}
                    </p>
                  )}
                  {selectedSpace.renda && (
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Renda por turno:</span> 💵 {selectedSpace.renda}
                    </p>
                  )}
                  <p className="text-amber-200 italic mt-3">
                    ⚡ {selectedSpace.description || 'Nenhuma descrição adicional disponível.'}
                  </p>
                  <p className="text-amber-200 italic mt-3">
                    {selectedSpace.evento}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpace(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Legenda */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-red-900/30 border border-red-500/30 p-3 rounded-lg">
            <div className="text-red-400 font-semibold mb-1">🏔️ Território CV</div>
            <div className="text-gray-400 text-sm">Comando Vermelho</div>
          </div>
          <div className="bg-blue-900/30 border border-blue-500/30 p-3 rounded-lg">
            <div className="text-blue-400 font-semibold mb-1">🌊 Território TC</div>
            <div className="text-gray-400 text-sm">Terceiro Comando</div>
          </div>
          <div className="bg-green-900/30 border border-green-500/30 p-3 rounded-lg">
            <div className="text-green-400 font-semibold mb-1">🏖️ Território ADA</div>
            <div className="text-gray-400 text-sm">Amigos dos Amigos</div>
          </div>
          <div className="bg-purple-900/30 border border-purple-500/30 p-3 rounded-lg">
            <div className="text-purple-400 font-semibold mb-1">⛪ Especiais</div>
            <div className="text-gray-400 text-sm">Igreja, Boca, etc</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
