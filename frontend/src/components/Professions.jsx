import { useState } from 'react'

const professions = [
  {
    id: 1,
    nome: 'Aviaozinho',
    icon: '🏃',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=300&fit=crop',
    salario: 200,
    nivel: 'Iniciante',
    raridade: 'Comum',
    cor: 'blue',
    habilidadeEspecial: 'Role 1 dado extra em qualquer jogada',
    habilidades: [
      'Pode mover-se 2 casas extras no tabuleiro',
      'Conhece rotas secretas entre territórios',
      'Pode escapar de confrontos com sucesso em 4+'
    ],
    descricao: 'O aviaozinho é o mensageiro da facção. Rápido e conhecedor de cada beco do morro. Sua agilidade no tabuleiro é incomparável.',
    vantagens: [
      'Role 1 dado extra em movimentação',
      'Não gasta turno ao passar por territórios neutros',
      'Pode entregar recursos sem estar no mesmo território'
    ],
    desvantagens: [
      'Salário base de apenas 200 por turno',
      'Perde em confronto direto (precisa de 5+ para vencer)',
      'Não pode comandar outros jogadores'
    ],
    requisitos: 'Nenhum requisito. Profissão inicial.',
    promocao: 'Após controlar 3 territórios, pode se tornar Gerente ou Soldado.',
    custo: 'Gratuito (profissão inicial)'
  },
  {
    id: 2,
    nome: 'Pastor',
    icon: '📿',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    salario: 800,
    nivel: 'Intermediário',
    raridade: 'Rara',
    cor: 'purple',
    habilidadeEspecial: 'Receba +100 de dízimo por cada igreja controlada',
    habilidades: [
      'Imune a cartas de "Investigação Policial"',
      'Pode construir igrejas em territórios neutros',
      'Lava dinheiro: converte recursos ilegais em legais'
    ],
    descricao: 'O Pastor é o estrategista financeiro. Opera nas sombras usando a fé como escudo e a igreja como ferramenta de poder econômico.',
    vantagens: [
      'Recebe +100 por turno para cada igreja no tabuleiro',
      'Pode hipotecar igrejas para ganhar 500 instantaneamente',
      'Cartas de polícia não afetam o Pastor',
      'Pode negociar com qualquer facção sem penalidade'
    ],
    desvantagens: [
      'Não pode participar de combates armados',
      'Perde 2 pontos de reputação ao construir cada igreja',
      'Precisa de 1.000 em dinheiro para construir uma igreja'
    ],
    requisitos: 'Ter 5.000 em dinheiro e controlar 2 territórios',
    promocao: 'Pode se tornar Bispo (controla múltiplas igrejas) ou Conselheiro.',
    custo: '3.000'
  },
  {
    id: 3,
    nome: 'Chefe da Boca',
    icon: '👑',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=300&fit=crop',
    salario: 2500,
    nivel: 'Avançado',
    raridade: 'Épica',
    cor: 'red',
    habilidadeEspecial: '20% de desconto em compras na Cidade do Rio',
    habilidades: [
      'Recruta soldados por 300 ao invés de 500',
      'Controla até 3 territórios ao mesmo tempo',
      '+2 em todos os dados de combate',
      'Pode declarar guerra sem custo de carta'
    ],
    descricao: 'O Chefe da Boca é o rei de seu território. Comanda operações, soldados e tem conexões que garantem preços especiais em armamento.',
    vantagens: [
      '20% de desconto em todas as compras (armas, soldados, recursos)',
      'Ganha +500 por turno para cada território controlado',
      'Pode mover soldados aliados no tabuleiro',
      'Adiciona +2 em qualquer dado de combate'
    ],
    desvantagens: [
      'Alvo prioritário: facções rivais ganham +1 ao atacar você',
      'Custo de manutenção: pague 300 por turno aos soldados',
      'Se perder um território, perde 1.000 de reputação'
    ],
    requisitos: 'Controlar 5 territórios e ter 15.000 em dinheiro',
    promocao: 'Pode se tornar Dono do Morro (controla uma região inteira).',
    custo: '8.000'
  },
  {
    id: 4,
    nome: 'Gerente',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop',
    salario: 1200,
    nivel: 'Intermediário',
    raridade: 'Incomum',
    cor: 'blue',
    habilidadeEspecial: 'Colete taxa de 10% de todos os negócios no território',
    habilidades: [
      'Gerencia pontos de venda: +200 por ponto controlado',
      'Pode fazer 2 ações de comércio por turno',
      'Negocia com desconto de 15%'
    ],
    descricao: 'O Gerente é o administrador dos negócios da facção. Especialista em comércio e gestão de território.',
    vantagens: [
      'Recebe 10% de todas as transações no seu território',
      'Pode comprar e vender no mesmo turno',
      'Dobra a renda de "Pontos de Venda"'
    ],
    desvantagens: [
      'Fraco em combate: -1 em dados de confronto',
      'Precisa de proteção de soldados',
      'Se o território for invadido, perde metade do dinheiro'
    ],
    requisitos: 'Ter 3.000 em dinheiro e 1 ponto de venda',
    promocao: 'Pode virar Gerente Regional (controla múltiplos gerentes).',
    custo: '2.500'
  },
  {
    id: 5,
    nome: 'Soldado',
    icon: '⚔️',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop',
    salario: 600,
    nivel: 'Intermediário',
    raridade: 'Comum',
    cor: 'red',
    habilidadeEspecial: 'Role 2 dados em combate e escolha o melhor resultado',
    habilidades: [
      'Especialista em combate: +3 em ataques',
      'Pode defender territórios aliados',
      'Intimida rivais: inimigos precisam de 5+ para atacar você'
    ],
    descricao: 'O Soldado é a força bruta da facção. Treinado para combate e defesa territorial.',
    vantagens: [
      'Role 2 dados em combate e fique com o melhor',
      '+3 de bônus em qualquer confronto armado',
      'Pode proteger territórios: inimigos precisam derrotá-lo primeiro'
    ],
    desvantagens: [
      'Não pode fazer ações econômicas',
      'Perde -1 em negociações',
      'Salário fixo (não ganha bônus de território)'
    ],
    requisitos: 'Ter uma arma e 2.000 em dinheiro',
    promocao: 'Pode se tornar Tenente ou Chefe de Segurança.',
    custo: '1.800'
  },
  {
    id: 6,
    nome: 'Olheiro',
    icon: '👁️',
    image: 'https://images.unsplash.com/photo-1574021970755-b7d6e0fcf032?w=400&h=300&fit=crop',
    salario: 400,
    nivel: 'Iniciante',
    raridade: 'Comum',
    cor: 'blue',
    habilidadeEspecial: 'Veja as 3 próximas cartas do baralho de eventos',
    habilidades: [
      'Revela movimentos de jogadores vizinhos',
      'Pode espionar um território inimigo por turno',
      'Avisa sobre invasões: role +2 em defesa se for alertado'
    ],
    descricao: 'O Olheiro é os olhos e ouvidos da facção. Antecipa ameaças e oportunidades.',
    vantagens: [
      'Pode ver as próximas 3 cartas de evento antes de comprar',
      'Revela a mão de um oponente (1x por jogo)',
      'Recebe informação sobre ataques antes que aconteçam'
    ],
    desvantagens: [
      'Fraco em combate: -2 em confrontos',
      'Salário baixo',
      'Se for capturado, revela informações da sua facção'
    ],
    requisitos: 'Controlar 1 território em região estratégica',
    promocao: 'Pode se tornar Chefe de Inteligência.',
    custo: '800'
  }
]

function Professions() {
  const [profissaoSelecionada, setProfissaoSelecionada] = useState(professions[0])

  const getCorProfissao = (cor) => {
    switch(cor) {
      case 'blue': return 'from-blue-900/40 to-blue-950 border-blue-500/40'
      case 'purple': return 'from-purple-900/40 to-purple-950 border-purple-500/40'
      case 'red': return 'from-red-900/40 to-red-950 border-red-500/40'
      default: return 'from-gray-900/40 to-black border-gray-500/40'
    }
  }

  const getCorTexto = (cor) => {
    switch(cor) {
      case 'blue': return 'text-blue-400'
      case 'purple': return 'text-purple-400'
      case 'red': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold animate-glow mb-4">
            Profissões da Facção
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Escolha sua profissão e suba na hierarquia. Cada caminho tem suas vantagens, riscos e oportunidades.
          </p>
        </div>

        {/* Seletor de Profissões */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {professions.map(prof => (
            <button
              key={prof.id}
              onClick={() => setProfissaoSelecionada(prof)}
              className={`px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                profissaoSelecionada.id === prof.id
                  ? `bg-gradient-to-r ${getCorProfissao(prof.cor)} shadow-[0_0_20px_rgba(220,38,38,0.8)] scale-105`
                  : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 hover:scale-105'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{prof.icon}</span>
                <div className="text-left">
                  <div className={profissaoSelecionada.id === prof.id ? getCorTexto(prof.cor) : 'text-gray-300'}>
                    {prof.nome}
                  </div>
                  <div className="text-xs text-gray-500">{prof.nivel}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Card Detalhado da Profissão Selecionada */}
        <div className={`bg-gradient-to-br ${getCorProfissao(profissaoSelecionada.cor)} p-8 rounded-2xl border-2`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Coluna Esquerda - Imagem e Info Básica */}
            <div>
              {/* Imagem */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden mb-6">
                <img
                  src={profissaoSelecionada.image}
                  alt={profissaoSelecionada.nome}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-6xl">{profissaoSelecionada.icon}</span>
                      <div>
                        <h3 className={`text-3xl font-cinzel font-bold ${getCorTexto(profissaoSelecionada.cor)}`}>
                          {profissaoSelecionada.nome}
                        </h3>
                        <span className="text-sm text-gray-400">{profissaoSelecionada.nivel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Salário e Raridade */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 p-4 rounded-lg border border-green-500/30">
                  <div className="text-sm text-gray-400 mb-1">Salário por Turno</div>
                  <div className="text-2xl font-bold text-green-400">💰 {profissaoSelecionada.salario}</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-amber-500/30">
                  <div className="text-sm text-gray-400 mb-1">Raridade</div>
                  <div className={`text-2xl font-bold ${getCorTexto(profissaoSelecionada.cor)}`}>
                    {profissaoSelecionada.raridade}
                  </div>
                </div>
              </div>

              {/* Habilidade Especial */}
              <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 p-4 rounded-lg border-2 border-amber-500/50">
                <h4 className="text-lg font-semibold text-amber-400 mb-2 flex items-center gap-2">
                  ⭐ Habilidade Especial
                </h4>
                <p className="text-amber-200 font-bold text-lg">
                  {profissaoSelecionada.habilidadeEspecial}
                </p>
              </div>

              {/* Custo */}
              <div className="bg-black/30 p-4 rounded-lg border border-green-500/30">
                <h4 className="text-lg font-semibold text-green-400 mb-2">💰 Custo para Adquirir</h4>
                <p className="text-2xl font-bold text-green-300">
                  {profissaoSelecionada.custo}
                </p>
              </div>
            </div>

            {/* Coluna Direita - Detalhes */}
            <div className="space-y-6">
              {/* Descrição */}
              <div>
                <h4 className="text-xl font-semibold text-gray-200 mb-3 font-cinzel">Sobre</h4>
                <p className="text-gray-300 leading-relaxed">
                  {profissaoSelecionada.descricao}
                </p>
              </div>

              {/* Habilidades */}
              <div>
                <h4 className="text-xl font-semibold text-gray-200 mb-3 font-cinzel">Habilidades</h4>
                <ul className="space-y-2">
                  {profissaoSelecionada.habilidades.map((hab, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">{hab}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vantagens */}
              <div>
                <h4 className="text-xl font-semibold text-green-400 mb-3 font-cinzel">Vantagens</h4>
                <ul className="space-y-2">
                  {profissaoSelecionada.vantagens.map((vant, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-400">+</span>
                      <span className="text-gray-300 text-sm">{vant}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desvantagens */}
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-3 font-cinzel">Desvantagens</h4>
                <ul className="space-y-2">
                  {profissaoSelecionada.desvantagens.map((desv, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-400">-</span>
                      <span className="text-gray-300 text-sm">{desv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requisitos */}
              <div className="bg-amber-900/20 border border-amber-500/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">Requisitos</h4>
                <p className="text-gray-300 text-sm">{profissaoSelecionada.requisitos}</p>
              </div>

              {/* Promoção */}
              <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Próximo Nível</h4>
                <p className="text-gray-300 text-sm">{profissaoSelecionada.promocao}</p>
              </div>

              {/* Botão Selecionar */}
              <button className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] hover:scale-105">
                Escolher {profissaoSelecionada.nome}
              </button>
            </div>
          </div>
        </div>

        {/* Comparação Rápida */}
        <div className="mt-12 bg-gray-900/50 p-6 rounded-xl border border-gray-700/30">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-200">Comparação de Profissões</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-3 text-gray-400">Profissão</th>
                  <th className="p-3 text-gray-400">Nível</th>
                  <th className="p-3 text-gray-400">Salário/Turno</th>
                  <th className="p-3 text-gray-400">Custo</th>
                  <th className="p-3 text-gray-400">Habilidade Especial</th>
                </tr>
              </thead>
              <tbody>
                {professions.map((prof) => (
                  <tr key={prof.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{prof.icon}</span>
                        <span className={getCorTexto(prof.cor)}>{prof.nome}</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">{prof.nivel}</td>
                    <td className="p-3 text-green-400 font-bold">💰 {prof.salario}</td>
                    <td className="p-3 text-amber-400 font-semibold">{prof.custo}</td>
                    <td className="p-3 text-gray-300 text-sm max-w-md">{prof.habilidadeEspecial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Professions
