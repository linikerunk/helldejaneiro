# ⚡ Quick Deploy - 5 Minutos

## 🚀 Deploy Rápido no Render

### Passo 1: Preparar o Código
```bash
git add .
git commit -m "Deploy para Render"
git push origin main
```

### Passo 2: Render Setup
1. Acesse: https://dashboard.render.com
2. Clique em **"New +"** → **"Blueprint"**
3. Conecte o GitHub e selecione o repositório **helldejaneiro**
4. Clique em **"Apply"**

### Passo 3: Aguarde
- ⏱️ Build leva ~2-5 minutos
- 🎉 Você receberá uma URL tipo: `https://helldejaneiro.onrender.com`

## 🔧 Configuração Manual (Alternativa)

Se o Blueprint não funcionar:

1. **New +** → **Static Site**
2. Conecte o repositório
3. Configure:
   ```
   Name: helldejaneiro
   Build Command: cd frontend && npm install && npm run build
   Publish Directory: frontend/dist
   ```
4. **Create Static Site**

## ✅ Verificação

Após deploy, teste:
- [ ] Home page carrega
- [ ] Navegação funciona
- [ ] Jogo inicia corretamente
- [ ] Todas as rotas funcionam

## 🔄 Próximos Deploys

Qualquer push para `main` = deploy automático! 🎉

```bash
git add .
git commit -m "Nova feature"
git push
# Deploy automático iniciado!
```

## 📞 Problemas?

Consulte o [DEPLOY.md](./DEPLOY.md) completo ou os logs no Render dashboard.

---

**Feito!** Em 5 minutos seu site está no ar! 🚀
