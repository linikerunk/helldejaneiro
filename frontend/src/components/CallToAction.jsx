import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-cinzel mb-6 animate-glow">
          Pronto para Dominar o Rio?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Junte-se a milhares de jogadores na experiência mais tática de 2025
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/play" className="btn-primary inline-block text-center">
            Jogar Agora
          </Link>
          <button className="btn-secondary">
            Entrar na Lista
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
