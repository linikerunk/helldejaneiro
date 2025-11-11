// 🎲 Baralho de Chance - Hell de Janeiro
// 30 cartas de eventos aleatórios do submundo carioca

export const chanceCards = [
  {
    id: 1,
    title: "Esquema no Morro",
    description: "Você fez um bico lucrativo no morro. Receba $500.",
    type: "money",
    value: 500,
    effect: "gain"
  },
  {
    id: 2,
    title: "Blitz Infernal",
    description: "A polícia do inferno te pegou. Pague $300 de suborno.",
    type: "money",
    value: -300,
    effect: "lose"
  },
  {
    id: 3,
    title: "Sorte Grande na Sinuca",
    description: "Você ganhou uma partida importante. Receba $800.",
    type: "money",
    value: 800,
    effect: "gain"
  },
  {
    id: 4,
    title: "Briga de Galo",
    description: "Seu galo perdeu a luta. Perca $400.",
    type: "money",
    value: -400,
    effect: "lose"
  },
  {
    id: 5,
    title: "Achado das Trevas",
    description: "Você encontrou uma carteira perdida. Ganhe $250.",
    type: "money",
    value: 250,
    effect: "gain"
  },
  {
    id: 6,
    title: "Aposta no Jogo do Bicho",
    description: "Seu número deu! Receba $1000.",
    type: "money",
    value: 1000,
    effect: "gain"
  },
  {
    id: 7,
    title: "Multa da Guarda Sombria",
    description: "Você foi multado por andar nas sombras. Pague $200.",
    type: "money",
    value: -200,
    effect: "lose"
  },
  {
    id: 8,
    title: "Encontro com o Diabo",
    description: "O Diabo te ofereceu um trato. Ganhe $1500.",
    type: "money",
    value: 1500,
    effect: "gain"
  },
  {
    id: 9,
    title: "Roubo no Beco",
    description: "Você foi assaltado na viela escura. Perca $600.",
    type: "money",
    value: -600,
    effect: "lose"
  },
  {
    id: 10,
    title: "Proteção Divina",
    description: "Saia da prisão gratuitamente. Guarde esta carta.",
    type: "special",
    value: 0,
    effect: "jail_free"
  },
  {
    id: 11,
    title: "Show no Boteco",
    description: "Você tocou no bar e fez sucesso. Ganhe $350.",
    type: "money",
    value: 350,
    effect: "gain"
  },
  {
    id: 12,
    title: "Dívida com Agiota",
    description: "O agiota veio cobrar. Pague $700.",
    type: "money",
    value: -700,
    effect: "lose"
  },
  {
    id: 13,
    title: "Corrida de Caveira",
    description: "Você venceu a corrida mortal! Receba $900.",
    type: "money",
    value: 900,
    effect: "gain"
  },
  {
    id: 14,
    title: "Imposto das Sombras",
    description: "Pague 10% de tudo que você tem às autoridades do inferno.",
    type: "percentage",
    value: -10,
    effect: "lose_percent"
  },
  {
    id: 15,
    title: "Carnaval Eterno",
    description: "Você participou da festa e ganhou prêmios! Receba $450.",
    type: "money",
    value: 450,
    effect: "gain"
  },
  {
    id: 16,
    title: "Vá para a Prisão",
    description: "Direto para a Cela Infernal. Não passe pelo início.",
    type: "special",
    value: 0,
    effect: "go_to_jail"
  },
  {
    id: 17,
    title: "Herança Maldita",
    description: "Um parente distante te deixou uma herança. Ganhe $2000.",
    type: "money",
    value: 2000,
    effect: "gain"
  },
  {
    id: 18,
    title: "Reparos na Quebrada",
    description: "Sua casa precisa de reformas urgentes. Pague $500.",
    type: "money",
    value: -500,
    effect: "lose"
  },
  {
    id: 19,
    title: "Presente do Padrinho",
    description: "O chefe da facção te presenteou. Receba $1200.",
    type: "money",
    value: 1200,
    effect: "gain"
  },
  {
    id: 20,
    title: "Roleta Russa Lucrativa",
    description: "Você sobreviveu e ganhou! Receba $1800.",
    type: "money",
    value: 1800,
    effect: "gain"
  },
  {
    id: 21,
    title: "Traição no Morro",
    description: "Alguém te dedurou. Pague $800 para resolver.",
    type: "money",
    value: -800,
    effect: "lose"
  },
  {
    id: 22,
    title: "Avance 3 Casas",
    description: "O vento das trevas te empurra para frente.",
    type: "movement",
    value: 3,
    effect: "advance"
  },
  {
    id: 23,
    title: "Volte 2 Casas",
    description: "As sombras te puxam de volta.",
    type: "movement",
    value: -2,
    effect: "retreat"
  },
  {
    id: 24,
    title: "Coleta de Cada Jogador",
    description: "Todos te devem respeito. Receba $100 de cada jogador.",
    type: "special",
    value: 100,
    effect: "collect_all"
  },
  {
    id: 25,
    title: "Festa para Todos",
    description: "Você organizou uma festa. Pague $50 para cada jogador.",
    type: "special",
    value: -50,
    effect: "pay_all"
  },
  {
    id: 26,
    title: "Bênção de Exu",
    description: "Exu abençoou sua jornada. Ganhe $600.",
    type: "money",
    value: 600,
    effect: "gain"
  },
  {
    id: 27,
    title: "Tempestade Infernal",
    description: "Suas propriedades foram danificadas. Pague $400.",
    type: "money",
    value: -400,
    effect: "lose"
  },
  {
    id: 28,
    title: "Vá para o Início",
    description: "As forças místicas te levam de volta. Passe pelo início e colete $200.",
    type: "special",
    value: 0,
    effect: "go_to_start"
  },
  {
    id: 29,
    title: "Negócio das Trevas",
    description: "Você fechou um ótimo negócio. Receba $1100.",
    type: "money",
    value: 1100,
    effect: "gain"
  },
  {
    id: 30,
    title: "Aniversário da Facção",
    description: "É dia de festa! Receba $150 de cada jogador.",
    type: "special",
    value: 150,
    effect: "birthday"
  }
];

export default chanceCards;
