import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Professions from '../components/Professions'
import Board from '../components/Board'

// Dados dos itens do jogo
const items = {
  armas: [
    {
      id: 1,
      nome: 'Pistola .38',
      icon: '🔫',
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=300&fit=crop',
      preco: 500,
      dano: 25,
      alcance: 'Curto',
      raridade: 'Comum',
      descricao: 'Arma básica para defesa. Confiável e fácil de conseguir munição.'
    },
    {
      id: 2,
      nome: 'AR-15',
      icon: '🔫',
      image: 'https://images.unsplash.com/photo-1587155416833-c44e19b44ed3?w=400&h=300&fit=crop',
      preco: 3500,
      dano: 75,
      alcance: 'Médio',
      raridade: 'Rara',
      descricao: 'Fuzil de assalto. Alta cadência de tiro e poder de fogo.'
    },
    {
      id: 3,
      nome: 'AK-47',
      icon: '🔫',
      image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&h=300&fit=crop',
      preco: 4000,
      dano: 80,
      alcance: 'Longo',
      raridade: 'Rara',
      descricao: 'A escolha dos veteranos. Resistente e letal.'
    },
    {
      id: 4,
      nome: 'Escopeta',
      icon: '🔫',
      image: 'https://images.unsplash.com/photo-1614223577553-5a37be47a810?w=400&h=300&fit=crop',
      preco: 1200,
      dano: 60,
      alcance: 'Muito Curto',
      raridade: 'Comum',
      descricao: 'Devastadora em combates corpo a corpo.'
    },
    {
      id: 5,
      nome: 'Sniper',
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1606146485740-7cfee9820c47?w=400&h=300&fit=crop',
      preco: 6000,
      dano: 100,
      alcance: 'Muito Longo',
      raridade: 'Épica',
      descricao: 'Para eliminações precisas à distância. Requer habilidade.'
    },
    {
      id: 6,
      nome: 'Granada',
      icon: '💣',
      image: 'https://images.unsplash.com/photo-1586039001882-b31c9284c8e2?w=400&h=300&fit=crop',
      preco: 800,
      dano: 90,
      alcance: 'Área',
      raridade: 'Incomum',
      descricao: 'Explosivo de área. Use com cuidado.'
    }
  ],
  equipamentos: [
    {
      id: 7,
      nome: 'Colete à Prova de Balas',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=300&fit=crop',
      preco: 2000,
      defesa: 50,
      raridade: 'Rara',
      descricao: 'Reduz dano recebido em combates diretos.'
    },
    {
      id: 8,
      nome: 'Kit Médico',
      icon: '🏥',
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=300&fit=crop',
      preco: 300,
      cura: 40,
      raridade: 'Comum',
      descricao: 'Recupera vida dos seus soldados.'
    },
    {
      id: 9,
      nome: 'Rádio Comunicador',
      icon: '📡',
      image: 'https://images.unsplash.com/photo-1530447920184-b88c8872?w=400&h=300&fit=crop',
      preco: 1500,
      coordenacao: '+2',
      raridade: 'Incomum',
      descricao: 'Melhora coordenação entre suas tropas.'
    },
    {
      id: 10,
      nome: 'Binóculo Tático',
      icon: '🔭',
      image: 'https://images.unsplash.com/photo-1574687892650-d3c9c3b8d1ee?w=400&h=300&fit=crop',
      preco: 800,
      visao: '+3',
      raridade: 'Incomum',
      descricao: 'Aumenta alcance de visão no tabuleiro.'
    }
  ],
  veiculos: [
    {
      id: 11,
      nome: 'Moto',
      icon: '🏍️',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=400&h=300&fit=crop',
      preco: 2500,
      mobilidade: 3,
      raridade: 'Comum',
      descricao: 'Movimente-se rapidamente entre territórios.'
    },
    {
      id: 12,
      nome: 'Caminhonete Blindada',
      icon: '🚙',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop',
      preco: 8000,
      mobilidade: 2,
      defesa: 40,
      raridade: 'Épica',
      descricao: 'Transporte seguro com proteção balística.'
    },
    {
      id: 13,
      nome: 'Barco',
      icon: '🚤',
      image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&h=300&fit=crop',
      preco: 5000,
      mobilidade: 2,
      raridade: 'Rara',
      descricao: 'Acesso a territórios costeiros e rotas marítimas.'
    }
  ],
  recursos: [
    {
      id: 14,
      nome: 'Dinheiro',
      icon: '💰',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=300&fit=crop',
      valor: 'Variável',
      raridade: 'Comum',
      descricao: 'Moeda principal do jogo. Use para comprar itens e recrutar.'
    },
    {
      id: 15,
      nome: 'Ponto de Venda',
      icon: '🏘️',
      image: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?w=400&h=300&fit=crop',
      renda: '+500/turno',
      raridade: 'Rara',
      descricao: 'Gera renda passiva a cada turno.'
    },
    {
      id: 16,
      nome: 'Depósito de Armas',
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      capacidade: '+10',
      raridade: 'Incomum',
      descricao: 'Armazena armas extras para sua facção.'
    },
    {
      id: 17,
      nome: 'Base Fortificada',
      icon: '🏰',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop',
      defesa: 100,
      raridade: 'Lendária',
      descricao: 'Quartel-general da facção. Extremamente difícil de conquistar.'
    }
  ]
}

function Play() {
  const [abaSelecionada, setAbaSelecionada] = useState('tabuleiro')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('armas')

  const abas = [
    { id: 'tabuleiro', nome: 'Tabuleiro', icon: '🎲' },
    { id: 'arsenal', nome: 'Arsenal', icon: '🔫' },
    { id: 'profissoes', nome: 'Profissões', icon: '👤' }
  ]

  const categorias = [
    { id: 'armas', nome: 'Armas', icon: '🔫' },
    { id: 'equipamentos', nome: 'Equipamentos', icon: '🛡️' },
    { id: 'veiculos', nome: 'Veículos', icon: '🏍️' },
    { id: 'recursos', nome: 'Recursos', icon: '💰' }
  ]

  const getRaridadeCor = (raridade) => {
    switch(raridade) {
      case 'Comum': return 'text-gray-400 border-gray-500/30'
      case 'Incomum': return 'text-green-400 border-green-500/30'
      case 'Rara': return 'text-blue-400 border-blue-500/30'
      case 'Épica': return 'text-purple-400 border-purple-500/30'
      case 'Lendária': return 'text-amber-400 border-amber-500/30'
      default: return 'text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-cinzel title-glow">
            HELL de Janeiro
          </h1>
          <div className="flex gap-4">
            <Link to="/" className="px-4 py-2 text-gray-300 hover:text-red-400 transition-colors">
              Home
            </Link>
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors">
              Tabuleiro
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tabs Principais */}
          <div className="flex justify-center gap-4 mb-12">
            {abas.map(aba => (
              <button
                key={aba.id}
                onClick={() => setAbaSelecionada(aba.id)}
                className={`px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 ${
                  abaSelecionada === aba.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 shadow-[0_0_30px_rgba(220,38,38,0.8)] scale-110'
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 hover:scale-105'
                }`}
              >
                <span className="mr-2">{aba.icon}</span>
                {aba.nome}
              </button>
            ))}
          </div>

          {/* Conteúdo baseado na aba selecionada */}
          {abaSelecionada === 'tabuleiro' ? (
            <Board />
          ) : abaSelecionada === 'arsenal' ? (
            <>
              {/* Header Arsenal */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-cinzel font-bold animate-glow mb-4">
                  Arsenal e Equipamentos
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Equipe sua facção com armas, veículos e recursos estratégicos para dominar o Rio
                </p>
              </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categorias.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoriaSelecionada(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  categoriaSelecionada === cat.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 shadow-[0_0_20px_rgba(220,38,38,0.8)]'
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.nome}
              </button>
            ))}
          </div>

          {/* Grid de Itens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items[categoriaSelecionada].map(item => (
              <div
                key={item.id}
                className={`bg-gradient-to-br from-gray-900/80 to-black rounded-xl border-2 ${getRaridadeCor(item.raridade)}
                          hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Imagem do Item */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.nome}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center text-6xl hidden">
                    {item.icon}
                  </div>
                  {/* Badge de Raridade */}
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-black/50 ${getRaridadeCor(item.raridade)}`}>
                    {item.raridade}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">

                  {/* Nome */}
                  <h3 className="text-2xl font-cinzel font-bold text-red-300 mb-2">
                    {item.nome}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-400 text-sm mb-4">
                    {item.descricao}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2 mb-4">
                    {item.dano && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Dano:</span>
                        <span className="text-red-400 font-bold">{item.dano}</span>
                      </div>
                    )}
                    {item.alcance && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Alcance:</span>
                        <span className="text-blue-400">{item.alcance}</span>
                      </div>
                    )}
                    {item.defesa && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Defesa:</span>
                        <span className="text-blue-400 font-bold">{item.defesa}</span>
                      </div>
                    )}
                    {item.cura && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Cura:</span>
                        <span className="text-green-400 font-bold">{item.cura}</span>
                      </div>
                    )}
                    {item.coordenacao && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Coordenação:</span>
                        <span className="text-amber-400">{item.coordenacao}</span>
                      </div>
                    )}
                    {item.visao && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Visão:</span>
                        <span className="text-purple-400">{item.visao}</span>
                      </div>
                    )}
                    {item.mobilidade && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Mobilidade:</span>
                        <span className="text-green-400 font-bold">{item.mobilidade}</span>
                      </div>
                    )}
                    {item.renda && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Renda:</span>
                        <span className="text-green-400 font-bold">{item.renda}</span>
                      </div>
                    )}
                    {item.capacidade && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Capacidade:</span>
                        <span className="text-blue-400">{item.capacidade}</span>
                      </div>
                    )}
                    {item.valor && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Valor:</span>
                        <span className="text-amber-400">{item.valor}</span>
                      </div>
                    )}
                  </div>

                  {/* Preço */}
                  {item.preco && (
                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Preço:</span>
                      <span className="text-2xl font-bold text-amber-400">
                        💰 {item.preco}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-red-900/20 to-blue-900/20 rounded-xl border border-red-500/30">
                <h3 className="text-xl font-bold text-red-300 mb-3">💡 Dica Estratégica</h3>
                <p className="text-gray-300">
                  Balance seus gastos entre ataque e defesa. Armas poderosas são inúteis sem soldados para usá-las,
                  e territórios sem proteção são alvos fáceis para facções rivais.
                </p>
              </div>
            </>
          ) : (
            <Professions />
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Play
