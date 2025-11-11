function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-red-500/30 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-gray-400 font-cinzel text-lg">
            © 2025 Serpens Studios — Feito com dedicação e estratégia
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-red-400 transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Termos de Serviço</a>
            <span>|</span>
            <a href="#" className="hover:text-red-400 transition-colors">Contato</a>
          </div>
          <div className="flex justify-center space-x-4 text-2xl">
            <a href="#" className="hover:text-red-400 transition-all duration-300 hover:scale-125">🏔️</a>
            <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:scale-125">🏖️</a>
            <a href="#" className="hover:text-red-400 transition-all duration-300 hover:scale-125">🎯</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
