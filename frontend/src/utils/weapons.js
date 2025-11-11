// 🔫 Arsenal de Armas - Hell de Janeiro
// Armas disponíveis no Depósito de Armas

export const weapons = [
  {
    id: 1,
    name: "Faca Peixeira",
    icon: "🔪",
    price: 150,
    damage: 15,
    type: "Branca",
    description: "Lâmina afiada e discreta. Perfeita para o combate corpo a corpo.",
    rarity: "Comum"
  },
  {
    id: 2,
    name: "Revólver .38",
    icon: "🔫",
    price: 500,
    damage: 35,
    type: "Pistola",
    description: "Arma clássica das ruas. Confiável e letal.",
    rarity: "Comum"
  },
  {
    id: 3,
    name: "Pistola 9mm",
    icon: "🔫",
    price: 800,
    damage: 45,
    type: "Pistola",
    description: "Semi-automática moderna. Boa capacidade de munição.",
    rarity: "Incomum"
  },
  {
    id: 4,
    name: "Desert Eagle",
    icon: "🔫",
    price: 1500,
    damage: 70,
    type: "Pistola",
    description: "Pistola poderosa. Causa dano massivo por disparo.",
    rarity: "Raro"
  },
  {
    id: 5,
    name: "Metralhadora UZI",
    icon: "🔫",
    price: 2000,
    damage: 55,
    type: "Submetralhadora",
    description: "Alta cadência de tiro. Perfeita para confrontos próximos.",
    rarity: "Raro"
  },
  {
    id: 6,
    name: "MP5",
    icon: "🔫",
    price: 2500,
    damage: 60,
    type: "Submetralhadora",
    description: "Precisão e poder. Usada por forças especiais.",
    rarity: "Raro"
  },
  {
    id: 7,
    name: "AK-47",
    icon: "🔫",
    price: 3500,
    damage: 85,
    type: "Rifle de Assalto",
    description: "O clássico fuzil de guerra. Robusto e mortal.",
    rarity: "Épico"
  },
  {
    id: 8,
    name: "M4A1",
    icon: "🔫",
    price: 4000,
    damage: 90,
    type: "Rifle de Assalto",
    description: "Rifle tático avançado. Precisão e letalidade.",
    rarity: "Épico"
  },
  {
    id: 9,
    name: "Shotgun 12",
    icon: "🔫",
    price: 1800,
    damage: 95,
    type: "Espingarda",
    description: "Devastadora a curta distância. Um tiro, game over.",
    rarity: "Incomum"
  },
  {
    id: 10,
    name: "Rifle de Precisão",
    icon: "🔫",
    price: 5000,
    damage: 120,
    type: "Sniper",
    description: "Elimine alvos a longa distância com precisão cirúrgica.",
    rarity: "Épico"
  },
  {
    id: 11,
    name: "Lança-Chamas",
    icon: "🔥",
    price: 6000,
    damage: 150,
    type: "Especial",
    description: "Queime tudo em seu caminho. Causa dano em área.",
    rarity: "Lendário"
  },
  {
    id: 12,
    name: "Granada",
    icon: "💣",
    price: 800,
    damage: 100,
    type: "Explosivo",
    description: "Explosivo de mão. Use com cautela.",
    rarity: "Incomum"
  },
  {
    id: 13,
    name: "Molotov",
    icon: "🍾🔥",
    price: 300,
    damage: 65,
    type: "Incendiário",
    description: "Coquetel incendiário caseiro. Barato e efetivo.",
    rarity: "Comum"
  },
  {
    id: 14,
    name: "C4",
    icon: "💣",
    price: 3000,
    damage: 200,
    type: "Explosivo",
    description: "Explosivo plástico. Detonação controlada.",
    rarity: "Épico"
  },
  {
    id: 15,
    name: "RPG-7",
    icon: "🚀",
    price: 10000,
    damage: 250,
    type: "Lançador",
    description: "Lançador de foguetes. Destruição total garantida.",
    rarity: "Lendário"
  },
  {
    id: 16,
    name: "Taco de Baseball",
    icon: "⚾",
    price: 100,
    damage: 20,
    type: "Branca",
    description: "Simples mas efetivo. Ótimo para intimidação.",
    rarity: "Comum"
  },
  {
    id: 17,
    name: "Katana",
    icon: "⚔️",
    price: 2000,
    damage: 80,
    type: "Branca",
    description: "Espada samurai. Cortes letais e elegantes.",
    rarity: "Raro"
  },
  {
    id: 18,
    name: "Machado",
    icon: "🪓",
    price: 400,
    damage: 50,
    type: "Branca",
    description: "Ferramenta e arma. Causa dano brutal.",
    rarity: "Incomum"
  },
  {
    id: 19,
    name: "Taser",
    icon: "⚡",
    price: 600,
    damage: 10,
    type: "Não-Letal",
    description: "Paralise inimigos temporariamente. Ideal para capturas.",
    rarity: "Incomum"
  },
  {
    id: 20,
    name: "Arco e Flecha",
    icon: "🏹",
    price: 1000,
    damage: 55,
    type: "Distância",
    description: "Silencioso e mortal. Para assassinos discretos.",
    rarity: "Raro"
  },
  {
    id: 21,
    name: "Besta",
    icon: "🏹",
    price: 1500,
    damage: 75,
    type: "Distância",
    description: "Mais poderosa que o arco. Penetra armaduras.",
    rarity: "Raro"
  },
  {
    id: 22,
    name: "Coronhada Infernal",
    icon: "🔨",
    price: 250,
    damage: 30,
    type: "Branca",
    description: "Martelo pesado. Atordoa e machuca.",
    rarity: "Comum"
  },
  {
    id: 23,
    name: "Soco Inglês",
    icon: "👊",
    price: 200,
    damage: 25,
    type: "Branca",
    description: "Aumente o poder dos seus socos. Discreto e eficaz.",
    rarity: "Comum"
  },
  {
    id: 24,
    name: "Escopeta Dupla",
    icon: "🔫",
    price: 2200,
    damage: 110,
    type: "Espingarda",
    description: "Dois canos, dobro da destruição. Clássica do oeste.",
    rarity: "Raro"
  },
  {
    id: 25,
    name: "Metralhadora Pesada",
    icon: "🔫",
    price: 7000,
    damage: 140,
    type: "Suporte",
    description: "Poder de fogo massivo. Supressão total do inimigo.",
    rarity: "Épico"
  },
  {
    id: 26,
    name: "Veneno",
    icon: "☠️",
    price: 1200,
    damage: 40,
    type: "Químico",
    description: "Elimine alvos discretamente. Morte lenta e silenciosa.",
    rarity: "Raro"
  },
  {
    id: 27,
    name: "Gás Lacrimogêneo",
    icon: "💨",
    price: 500,
    damage: 5,
    type: "Não-Letal",
    description: "Controle de multidões. Causa desorientação.",
    rarity: "Incomum"
  },
  {
    id: 28,
    name: "Mina Terrestre",
    icon: "💣",
    price: 1500,
    damage: 180,
    type: "Armadilha",
    description: "Defenda seu território. Explosão sob pressão.",
    rarity: "Épico"
  },
  {
    id: 29,
    name: "Lança-Granadas",
    icon: "🚀",
    price: 8000,
    damage: 220,
    type: "Lançador",
    description: "Dispare múltiplas granadas. Devastação em área.",
    rarity: "Lendário"
  },
  {
    id: 30,
    name: "Arma Nuclear Portátil",
    icon: "☢️",
    price: 50000,
    damage: 999,
    type: "Apocalíptico",
    description: "A arma definitiva. Use apenas em desespero extremo.",
    rarity: "Mítico"
  }
];

export const getRarityColor = (rarity) => {
  switch(rarity) {
    case "Comum": return "text-gray-400 border-gray-500";
    case "Incomum": return "text-green-400 border-green-500";
    case "Raro": return "text-blue-400 border-blue-500";
    case "Épico": return "text-purple-400 border-purple-500";
    case "Lendário": return "text-amber-400 border-amber-500";
    case "Mítico": return "text-red-400 border-red-500";
    default: return "text-gray-400 border-gray-500";
  }
};

export default weapons;
