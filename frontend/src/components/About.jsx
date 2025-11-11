function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-red-900/10 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center mb-12 title-glow">
          Sobre o Jogo
        </h2>

        <div className="bg-gradient-to-br from-red-900/30 via-gray-900/50 to-blue-900/30 p-8 md:p-12 rounded-xl border-2 border-red-500/20 shadow-2xl">
          <div className="space-y-6 text-gray-200">
            <p className="text-xl md:text-2xl font-cinzel font-semibold text-center text-red-300 mb-8">
              Um Jogo de Tabuleiro Estratégico de Facção Contra Facção
            </p>

            <div className="space-y-4 leading-relaxed text-lg">
              <p>
                No submundo do Rio de Janeiro, onde o asfalto encontra o morro, três facções poderosas disputam
                o controle absoluto da cidade. <span className="text-red-400 font-semibold">O Comando Vermelho</span> domina
                a zona norte com mão de ferro, <span className="text-blue-400 font-semibold">a Terceiro Comando</span> controla
                estrategicamente a zona oeste, e <span className="text-amber-400 font-semibold">os Amigos dos Amigos</span> mantêm
                sua influência nas comunidades da zona sul.
              </p>

              <p>
                Cada facção começou como um pequeno grupo, mas através de <strong>estratégia, território e influência</strong>,
                expandiram seu domínio. Agora, o equilíbrio de poder está em disputa. Novos líderes emergem,
                antigos territórios mudam de mãos, e alianças são forjadas e quebradas a cada jogada.
              </p>

              <p className="text-amber-300 font-semibold italic text-center py-4 border-y border-red-500/30">
                Você será o próximo a comandar uma facção rumo ao domínio total?
              </p>

              <p>
                <strong className="text-red-300">HELL de Janeiro</strong> é um jogo de tabuleiro tático onde você
                comanda uma das facções em busca do controle da cidade. O tabuleiro representa os territórios
                do Rio divididos em <strong>morros, favelas, pontos estratégicos e zonas de comércio</strong>.
              </p>

              <p>
                Em cada turno, você deve tomar decisões cruciais: <strong className="text-blue-300">expandir seu território</strong>,
                <strong className="text-red-300"> recrutar soldados</strong>, <strong className="text-amber-300">formar alianças temporárias</strong>,
                ou atacar facções rivais. Gerencie seus recursos com sabedoria - dinheiro, soldados e influência
                são limitados, e um movimento em falso pode significar o fim de seu império.
              </p>

              <p>
                Controle pontos-chave como <strong>bocas de fumo, rotas de fuga, depósitos de armas e
                territórios neutros</strong>. Cada território conquistado aumenta seu poder, mas também
                atrai a atenção de seus rivais. Traição, negociação e combate tático são as ferramentas
                para a vitória.
              </p>

              <p className="text-center text-2xl font-bold text-red-400 pt-6">
                Domine o tabuleiro. Conquiste o Rio. Seja o rei do morro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
