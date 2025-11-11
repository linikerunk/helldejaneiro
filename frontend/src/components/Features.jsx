function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Estratégia Tática',
      description: 'Mecânicas baseadas em grid com decisões estratégicas em tempo real',
      color: 'red'
    },
    {
      icon: '🏔️',
      title: 'Territórios Realistas',
      description: 'Explore morros, favelas e zonas sul baseadas no Rio de Janeiro',
      color: 'blue'
    },
    {
      icon: '👥',
      title: 'Sistema de Facções',
      description: 'Forme alianças, traia rivais e construa seu império',
      color: 'red'
    },
    {
      icon: '💰',
      title: 'Economia Dinâmica',
      description: 'Gerencie recursos, controle pontos de venda e expanda seu domínio',
      color: 'blue'
    },
    {
      icon: '⚔️',
      title: 'Combate Intenso',
      description: 'Batalhas táticas pelo controle de territórios estratégicos',
      color: 'red'
    },
    {
      icon: '📊',
      title: 'Progressão Profunda',
      description: 'Evolua sua facção, recrute soldados e domine o mapa',
      color: 'blue'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12 title-glow">
          Funcionalidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={feature.color === 'red' ? 'card-purple' : 'card-gold'}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                feature.color === 'red' ? 'text-red-300' : 'text-blue-300'
              }`}>
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
