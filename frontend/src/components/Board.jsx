import { useState } from 'react'
import { chanceCards } from '../utils/chanceCards'
import { factionChestCards } from '../utils/factionChestCards'
import { weapons, getRarityColor } from '../utils/weapons'

// Dados das casas do tabuleiro (30 casas como Banco Imobiliário)
const boardSpaces = [
  // Lado inferior (0-7)
  { id: 0, nome: 'INÍCIO', tipo: 'inicio', cor: 'green', icon: '🏁', evento: 'Receba 200 ao passar' },
  { id: 1, nome: 'Morro do Alemão', tipo: 'territorio', cor: 'red', icon: '🏔️', preco: 600, renda: 50, description: "Rode um dado se cair mais de 6 você deve 200 reias para o chefe da boca." },
  { id: 2, nome: 'Cofre da Facção', tipo: 'evento', cor: 'amber', icon: '💰', evento: 'Pegue uma carta (30 cartas disponíveis)', deck: 'faction' },
  { id: 3, nome: 'Rocinha', tipo: 'territorio', cor: 'red', icon: '🏘️', preco: 600, renda: 50, description: "A maior favela do Rio! Role um dado: se cair 5 ou 6, receba 100 de pedágio dos visitantes." },
  { id: 4, nome: 'Complexo do Alemão', tipo: 'territorio', cor: 'red', icon: '🏚️', preco: 800, renda: 70, description: "Complexo fortificado. Se outro jogador cair aqui, pague 150 de segurança ou perca 1 turno." },
  { id: 5, nome: 'Boca de Fumo', tipo: 'especial', cor: 'purple', icon: '💊', evento: 'Pague taxa de 150' },
  { id: 6, nome: 'Vidigal', tipo: 'territorio', cor: 'blue', icon: '🌊', preco: 1000, renda: 90, description: "Vista privilegiada! Cobre taxa dupla se você controla também Leblon ou Ipanema." },
  { id: 7, nome: 'Chance', tipo: 'chance', cor: 'orange', icon: '❓', evento: 'Pegue uma carta de Chance (30 cartas disponíveis)', deck: 'chance' },

  // Lado direito (8-14)
  { id: 8, nome: 'DELEGACIA', tipo: 'prisao', cor: 'gray', icon: '🚔', evento: 'Preso! Perca 1 turno' },
  { id: 9, nome: 'Cidade de Deus', tipo: 'territorio', cor: 'blue', icon: '🏙️', preco: 1200, renda: 100, description: "Território disputado. Role 2 dados: se somar 7, evite confronto. Se não, pague 100 ao banco." },
  { id: 10, nome: 'Depósito de Armas', tipo: 'especial', cor: 'red', icon: '🔫', evento: 'Compre armas' },
  { id: 11, nome: 'Jacarezinho', tipo: 'territorio', cor: 'blue', icon: '🐊', preco: 1400, renda: 110, description: "Beco perigoso. Jogadores que caírem aqui pagam 80 de passagem ou recuam 2 casas." },
  { id: 12, nome: 'Maré', tipo: 'territorio', cor: 'blue', icon: '🌊', preco: 1600, renda: 120, description: "Labirinto de vielas. Se você possui 3 territórios azuis, a renda aqui dobra!" },
  { id: 13, nome: 'Cofre da Facção', tipo: 'evento', cor: 'amber', icon: '💰', evento: 'Pegue uma carta (30 cartas disponíveis)', deck: 'faction' },
  { id: 14, nome: 'Providência', tipo: 'territorio', cor: 'purple', icon: '⛪', preco: 1800, renda: 140, description: "Primeira favela do Rio. Receba bônus de 50 ao passar pelo INÍCIO se você controla esta casa." },

  // Lado superior (15-22)
  { id: 15, nome: 'IGREJA', tipo: 'igreja', cor: 'purple', icon: '⛪', evento: 'Lave dinheiro aqui' },
  { id: 16, nome: 'Complexo da Penha', tipo: 'territorio', cor: 'purple', icon: '🏔️', preco: 2000, renda: 150, description: "Fortaleza estratégica. Imune a eventos de 'Chance' enquanto você controla este território." },
  { id: 17, nome: 'Chance', tipo: 'chance', cor: 'orange', icon: '❓', evento: 'Pegue uma carta de Chance (30 cartas disponíveis)', deck: 'chance' },
  { id: 18, nome: 'Salgueiro', tipo: 'territorio', cor: 'purple', icon: '🎭', preco: 2200, renda: 160, description: "Escola de samba famosa. Durante o carnaval (a cada 5 turnos), renda aumenta em 100." },
  { id: 19, nome: 'Mangueira', tipo: 'territorio', cor: 'green', icon: '🎵', preco: 2400, renda: 170, description: "Verde e rosa. Se você controla Salgueiro e Beija-Flor juntos, receba 200 extras por turno." },
  { id: 20, nome: 'Rota de Fuga', tipo: 'especial', cor: 'blue', icon: '🏃', evento: 'Mova-se 3 casas extras' },
  { id: 21, nome: 'Beija-Flor', tipo: 'territorio', cor: 'green', icon: '🐦', preco: 2600, renda: 180, description: "Nilópolis é poder! Role um dado: se tirar 6, escolha qual jogador deve pagar 150 para você." },
  { id: 22, nome: 'Cofre da Facção', tipo: 'evento', cor: 'amber', icon: '💰', evento: 'Pegue uma carta (30 cartas disponíveis)', deck: 'faction' },

  // Lado esquerdo (23-29)
  { id: 23, nome: 'CONFRONTO', tipo: 'confronto', cor: 'red', icon: '⚔️', evento: 'Guerra de facções!' },
  { id: 24, nome: 'Copacabana', tipo: 'territorio', cor: 'green', icon: '🏖️', preco: 3000, renda: 200, description: "Praia nobre. Ganhe 50 extras de cada jogador que cair aqui se você controla Ipanema também." },
  { id: 25, nome: 'Boca de Fumo', tipo: 'especial', cor: 'purple', icon: '💊', evento: 'Pague taxa de 200' },
  { id: 26, nome: 'Ipanema', tipo: 'territorio', cor: 'green', icon: '🌴', preco: 3200, renda: 220, description: "Garota de Ipanema. Turistas pagam dobrado: se outro jogador cai aqui, paga 150 de taxa." },
  { id: 27, nome: 'Leblon', tipo: 'territorio', cor: 'green', icon: '💎', preco: 3500, renda: 250, description: "Bairro mais caro. Todos os jogadores pagam 100 ao banco quando você compra esta propriedade." },
  { id: 28, nome: 'Chance', tipo: 'chance', cor: 'orange', icon: '❓', evento: 'Pegue uma carta de Chance (30 cartas disponíveis)', deck: 'chance' },
  { id: 29, nome: 'Barra da Tijuca', tipo: 'territorio', cor: 'green', icon: '🏢', preco: 4000, renda: 300, description: "Condomínios de luxo. Território mais valioso: a renda dobra se você controla 4 territórios verdes." },
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
  const [selectedCard, setSelectedCard] = useState(null)
  const [showWeapons, setShowWeapons] = useState(false)
  const [chanceCardsDeck, setChanceCardsDeck] = useState([...chanceCards])
  const [factionCardsDeck, setFactionCardsDeck] = useState([...factionChestCards])
  const [players, setPlayers] = useState([
    { id: 1, profissao: professions[0], position: 0 },
    { id: 2, profissao: professions[1], position: 0 },
    { id: 3, profissao: professions[2], position: 0 },
    { id: 4, profissao: professions[3], position: 0 }
  ])
  const [currentPlayer, setCurrentPlayer] = useState(0)

  const drawCard = (deckType) => {
    if (deckType === 'chance' && chanceCardsDeck.length > 0) {
      const randomIndex = Math.floor(Math.random() * chanceCardsDeck.length)
      const card = chanceCardsDeck[randomIndex]
      setSelectedCard(card)
    } else if (deckType === 'faction' && factionCardsDeck.length > 0) {
      const randomIndex = Math.floor(Math.random() * factionCardsDeck.length)
      const card = factionCardsDeck[randomIndex]
      setSelectedCard(card)
    }
  }

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

        // Verifica se caiu em casa de carta
        const landedSpace = boardSpaces[player.position]
        if (landedSpace.deck) {
          setTimeout(() => drawCard(landedSpace.deck), 500)
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

        {/* Modal de Arsenal */}
        {showWeapons && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fadeIn overflow-y-auto p-4" onClick={() => setShowWeapons(false)}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-4 border-red-500 shadow-[0_0_50px_rgba(220,38,38,0.5)] max-w-6xl w-full mx-4 my-8 animate-slideIn" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-4xl font-cinzel font-bold text-red-400 mb-2">
                    🔫 Arsenal de Armas
                  </h2>
                  <p className="text-gray-400">30 armas disponíveis para compra</p>
                </div>
                <button
                  onClick={() => setShowWeapons(false)}
                  className="text-gray-400 hover:text-white text-3xl"
                >
                  ✕
                </button>
              </div>

              {/* Grid de Armas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto pr-2">
                {weapons.map((weapon) => (
                  <div
                    key={weapon.id}
                    className={`
                      bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-4 rounded-xl
                      border-2 ${getRarityColor(weapon.rarity)}
                      hover:scale-105 transition-all duration-300
                      hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]
                      cursor-pointer
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-4xl">{weapon.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {weapon.name}
                        </h3>
                        <div className="text-xs text-gray-400 mb-2">
                          {weapon.type} • {weapon.rarity}
                        </div>
                        <p className="text-sm text-gray-300 mb-3 leading-tight">
                          {weapon.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-3">
                            <span className="text-amber-400 font-bold text-sm">
                              💰 ${weapon.price}
                            </span>
                            <span className="text-red-400 font-bold text-sm">
                              ⚔️ {weapon.damage}
                            </span>
                          </div>
                          <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs font-bold transition-colors">
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legenda de Raridades */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-sm font-bold text-gray-400 mb-3">RARIDADES:</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm text-gray-400">⚪ Comum</span>
                  <span className="text-sm text-green-400">🟢 Incomum</span>
                  <span className="text-sm text-blue-400">🔵 Raro</span>
                  <span className="text-sm text-purple-400">🟣 Épico</span>
                  <span className="text-sm text-amber-400">🟡 Lendário</span>
                  <span className="text-sm text-red-400">🔴 Mítico</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Carta */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn" onClick={() => setSelectedCard(null)}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-4 border-amber-500 shadow-[0_0_50px_rgba(251,191,36,0.5)] max-w-md mx-4 animate-slideIn" onClick={(e) => e.stopPropagation()}>
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {selectedCard.type === 'money' && selectedCard.value > 0 ? '💰' : 
                   selectedCard.type === 'money' && selectedCard.value < 0 ? '💸' :
                   selectedCard.type === 'special' ? '⭐' :
                   selectedCard.type === 'movement' ? '🏃' : '🎲'}
                </div>
                <h3 className="text-3xl font-cinzel font-bold text-amber-400 mb-4">
                  {selectedCard.title}
                </h3>
                <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                  {selectedCard.description}
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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
                  {selectedSpace.deck && (
                    <button
                      onClick={() => drawCard(selectedSpace.deck)}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      🎴 Pegar Carta
                    </button>
                  )}
                  {selectedSpace.id === 10 && (
                    <button
                      onClick={() => setShowWeapons(true)}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      🔫 Ver Arsenal (30 armas)
                    </button>
                  )}
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
