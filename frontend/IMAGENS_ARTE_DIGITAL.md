# Guia para Adicionar Arte Digital de Armas

O sistema já está configurado para aceitar imagens! Atualmente usando imagens temporárias do Unsplash.

## Como Substituir as Imagens

### Opção 1: Usar URLs de Arte Digital Gratuita

**Sites recomendados para arte digital de armas:**

1. **OpenGameArt.org**
   - URL: https://opengameart.org
   - Licença: Creative Commons / Public Domain
   - Busque por: "weapon", "gun", "pistol", "rifle"

2. **Itch.io Assets**
   - URL: https://itch.io/game-assets/free
   - Filtrar por: "Weapons", "2D", "Top-down" ou "Pixel Art"
   - Muitos assets gratuitos para jogos

3. **Kenney.nl**
   - URL: https://www.kenney.nl/assets
   - Todos os assets são CC0 (domínio público)
   - Procure por "Weapon Pack", "Top-Down Shooter"

4. **Craftpix.net**
   - URL: https://craftpix.net/freebies/
   - Assets 2D gratuitos
   - Seção de armas e equipamentos

5. **Game-Icons.net**
   - URL: https://game-icons.net
   - Ícones SVG gratuitos
   - Busque: weapons, armor, vehicles

### Opção 2: Criar Arte Pixel Art

**Ferramentas gratuitas:**
- **Piskel** (https://www.piskelapp.com/) - Editor online
- **Aseprite** - Editor profissional (pago, mas vale a pena)
- **LibreSprite** - Fork gratuito do Aseprite

### Opção 3: Gerar com IA

**Ferramentas de geração:**
- **Midjourney** - "weapon icon, game asset, top view, flat design"
- **DALL-E 3** - "tactical weapon icon, digital art, game asset"
- **Stable Diffusion** - Gratuito e local

## Como Atualizar as Imagens no Código

Abra `src/pages/Play.jsx` e substitua as URLs na propriedade `image`:

```javascript
{
  id: 1,
  nome: 'Pistola .38',
  icon: '🔫',
  image: 'SUA_URL_AQUI', // ← Coloque a URL da sua imagem aqui
  preco: 500,
  // ...
}
```

### Usar Imagens Locais

1. Crie a pasta: `src/assets/weapons/`
2. Coloque suas imagens lá (PNG, JPG, ou WebP)
3. Importe no componente:

```javascript
// No topo do arquivo Play.jsx
import pistola38 from '../assets/weapons/pistola-38.png'
import ar15 from '../assets/weapons/ar-15.png'
// etc...

// Depois use nos dados:
{
  id: 1,
  nome: 'Pistola .38',
  image: pistola38, // ← Usa a imagem importada
  // ...
}
```

## Recomendações de Estilo

Para manter consistência visual:
- **Tamanho:** 400x300px ou 800x600px
- **Formato:** WebP (melhor compressão) ou PNG
- **Estilo:** Mantenha o mesmo estilo em todas (pixel art, realista, cartoon, etc)
- **Fundo:** Transparente ou uniforme
- **Ângulo:** Visão de cima (top-down) ou lateral consistente

## Paleta de Cores Sugerida

Para combinar com o tema do jogo:
- Vermelho: #DC2626 (Facção Vermelha)
- Azul: #2563EB (Facção Azul)
- Cinza escuro: #1F2937 (Armas)
- Dourado: #F59E0B (Recursos/Dinheiro)

## Sistema de Fallback

O código já tem um sistema de fallback:
- Se a imagem não carregar, mostra o emoji automático ✅
- Garante que o usuário sempre veja algo

## Exemplo de Busca

No OpenGameArt ou Itch.io, busque por:
- "top down weapon sprite"
- "game weapon asset pack"
- "2d gun icons"
- "tactical equipment sprites"
