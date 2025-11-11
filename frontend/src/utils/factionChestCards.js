// 🏴‍☠️ Baralho de Cofre da Facção - Hell de Janeiro
// 30 cartas do tesouro do submundo carioca

export const factionChestCards = [
  {
    id: 1,
    title: "Salário da Semana",
    description: "Você recebeu seu pagamento semanal. Ganhe $200.",
    type: "money",
    value: 200,
    effect: "gain"
  },
  {
    id: 2,
    title: "Resgate do Cofre",
    description: "Você abriu o cofre da facção! Receba $1000.",
    type: "money",
    value: 1000,
    effect: "gain"
  },
  {
    id: 3,
    title: "Taxa de Proteção",
    description: "Pague a taxa mensal de proteção. $150.",
    type: "money",
    value: -150,
    effect: "lose"
  },
  {
    id: 4,
    title: "Prêmio de Lealdade",
    description: "Sua lealdade foi recompensada. Ganhe $500.",
    type: "money",
    value: 500,
    effect: "gain"
  },
  {
    id: 5,
    title: "Erro Médico",
    description: "Gastos com curandeiro. Pague $100.",
    type: "money",
    value: -100,
    effect: "lose"
  },
  {
    id: 6,
    title: "Tesouro Enterrado",
    description: "Você encontrou um baú enterrado! Receba $800.",
    type: "money",
    value: 800,
    effect: "gain"
  },
  {
    id: 7,
    title: "Contribuição da Facção",
    description: "É hora de contribuir. Pague $200.",
    type: "money",
    value: -200,
    effect: "lose"
  },
  {
    id: 8,
    title: "Carta de Liberdade",
    description: "Saia da prisão gratuitamente. Guarde esta carta.",
    type: "special",
    value: 0,
    effect: "jail_free"
  },
  {
    id: 9,
    title: "Recompensa da Missão",
    description: "Você completou uma missão importante. Ganhe $700.",
    type: "money",
    value: 700,
    effect: "gain"
  },
  {
    id: 10,
    title: "Imposto da Guilda",
    description: "Pague sua parte ao sindicato. $250.",
    type: "money",
    value: -250,
    effect: "lose"
  },
  {
    id: 11,
    title: "Bônus do Chefe",
    description: "O líder da facção te deu um bônus! Receba $600.",
    type: "money",
    value: 600,
    effect: "gain"
  },
  {
    id: 12,
    title: "Rendimentos da Boca",
    description: "Seus investimentos deram lucro. Ganhe $400.",
    type: "money",
    value: 400,
    effect: "gain"
  },
  {
    id: 13,
    title: "Multa por Atraso",
    description: "Você se atrasou para a reunião. Pague $50.",
    type: "money",
    value: -50,
    effect: "lose"
  },
  {
    id: 14,
    title: "Saque Bem Sucedido",
    description: "O assalto foi perfeito! Receba $1500.",
    type: "money",
    value: 1500,
    effect: "gain"
  },
  {
    id: 15,
    title: "Despesas com Armas",
    description: "Você precisou comprar equipamento. Pague $300.",
    type: "money",
    value: -300,
    effect: "lose"
  },
  {
    id: 16,
    title: "Dividendos do Território",
    description: "Seu território gerou renda. Receba $550.",
    type: "money",
    value: 550,
    effect: "gain"
  },
  {
    id: 17,
    title: "Seguro da Vida Loka",
    description: "Pague o seguro mensal. $100.",
    type: "money",
    value: -100,
    effect: "lose"
  },
  {
    id: 18,
    title: "Recompensa por Captura",
    description: "Você capturou um inimigo. Ganhe $900.",
    type: "money",
    value: 900,
    effect: "gain"
  },
  {
    id: 19,
    title: "Extorsão do Rival",
    description: "Rivais te extorquiram. Perca $350.",
    type: "money",
    value: -350,
    effect: "lose"
  },
  {
    id: 20,
    title: "Investimento Certeiro",
    description: "Sua grana rendeu bem! Ganhe 15% do seu total.",
    type: "percentage",
    value: 15,
    effect: "gain_percent"
  },
  {
    id: 21,
    title: "Doação para o Santo",
    description: "Você fez uma oferenda. Pague $75.",
    type: "money",
    value: -75,
    effect: "lose"
  },
  {
    id: 22,
    title: "Contrabando Lucrativo",
    description: "A carga passou! Receba $1200.",
    type: "money",
    value: 1200,
    effect: "gain"
  },
  {
    id: 23,
    title: "Manutenção da Base",
    description: "A base precisa de reparos. Pague $400.",
    type: "money",
    value: -400,
    effect: "lose"
  },
  {
    id: 24,
    title: "Prêmio de Aniversário",
    description: "É seu aniversário no crime! Receba $100 de cada jogador.",
    type: "special",
    value: 100,
    effect: "birthday"
  },
  {
    id: 25,
    title: "Suborno Necessário",
    description: "Você precisou subornar autoridades. Pague $500.",
    type: "money",
    value: -500,
    effect: "lose"
  },
  {
    id: 26,
    title: "Herança do Padrinho",
    description: "Seu mentor te deixou algo. Ganhe $2500.",
    type: "money",
    value: 2500,
    effect: "gain"
  },
  {
    id: 27,
    title: "Conserto de Veículo",
    description: "Seu carro foi baleado. Pague $300 de conserto.",
    type: "money",
    value: -300,
    effect: "lose"
  },
  {
    id: 28,
    title: "Venda de Informação",
    description: "Você vendeu uma informação valiosa. Receba $650.",
    type: "money",
    value: 650,
    effect: "gain"
  },
  {
    id: 29,
    title: "Imposto de Rua",
    description: "Pague sua parte ao dono da área. $200.",
    type: "money",
    value: -200,
    effect: "lose"
  },
  {
    id: 30,
    title: "Jackpot Infernal",
    description: "Você ganhou na loteria das trevas! Receba $3000.",
    type: "money",
    value: 3000,
    effect: "gain"
  }
];

export default factionChestCards;
