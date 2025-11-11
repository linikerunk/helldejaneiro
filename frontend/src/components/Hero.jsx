import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>

      <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-cinzel font-bold animate-glow animate-[fade-in-up_1s_ease-out]">
          HELL de Janeiro
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-red-400 font-cinzel animate-[fade-in-up_1s_ease-out_0.1s_both]">
          Territórios em Disputa
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-[fade-in-up_1s_ease-out_0.2s_both]">
          Domine os morros do Rio de Janeiro. Comande sua facção, expanda seu território e
          sobreviva na guerra pelo controle da Cidade Maravilhosa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in-up_1s_ease-out_0.3s_both]">
          <Link to="/play" className="btn-primary inline-block text-center">
            Entrar no Jogo
          </Link>
          <button className="btn-secondary">
            Ver Trailer
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
