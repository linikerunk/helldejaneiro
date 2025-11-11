# 🚀 Deploy no Render - Hell de Janeiro

Este guia explica como fazer o deploy da aplicação Hell de Janeiro no Render.

## 📋 Pré-requisitos

1. Conta no [Render](https://render.com) (gratuita)
2. Conta no GitHub
3. Repositório Git do projeto (já criado)

## 🔧 Preparação

O projeto já está configurado com o arquivo `render.yaml` na raiz, que configura automaticamente o deploy.

## 📤 Passo a Passo

### 1. Enviar código para o GitHub

Se ainda não enviou o código para o GitHub:

```bash
git add .
git commit -m "Preparar deploy para Render"
git push origin main
```

### 2. Conectar ao Render

1. Acesse [render.com](https://render.com)
2. Faça login ou crie uma conta
3. Clique em "New +" no dashboard
4. Selecione "Blueprint"

### 3. Conectar o Repositório

1. Conecte sua conta do GitHub ao Render
2. Selecione o repositório `helldejaneiro`
3. Dê um nome ao projeto (sugestão: `helldejaneiro`)
4. Clique em "Apply"

### 4. Configuração Automática

O Render detectará o arquivo `render.yaml` e configurará automaticamente:

- **Tipo de serviço**: Static Site
- **Build Command**: `cd frontend && npm install && npm run build`
- **Publish Directory**: `frontend/dist`
- **Rotas**: Configuradas para SPA (Single Page Application)

### 5. Deploy

1. O Render iniciará o build automaticamente
2. Aguarde a conclusão (geralmente 2-5 minutos)
3. Quando concluir, você receberá uma URL como:
   ```
   https://helldejaneiro.onrender.com
   ```

## ⚙️ Configuração Manual (Alternativa)

Se preferir não usar o Blueprint:

1. Clique em "New +" → "Static Site"
2. Conecte o repositório GitHub
3. Configure:
   - **Name**: `helldejaneiro`
   - **Root Directory**: deixe em branco
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`
4. Clique em "Create Static Site"

## 🔄 Atualizações Automáticas

Após o primeiro deploy, qualquer push para a branch `main` do GitHub acionará automaticamente um novo deploy no Render.

```bash
# Fazer alterações no código
git add .
git commit -m "Suas alterações"
git push origin main
# Deploy automático será iniciado!
```

## 🌐 Domínio Customizado (Opcional)

Para usar um domínio próprio:

1. Vá em "Settings" do seu serviço no Render
2. Clique em "Custom Domain"
3. Adicione seu domínio
4. Configure os registros DNS conforme instruído

## 📊 Monitoramento

No dashboard do Render você pode:
- Ver logs do build e deploy
- Monitorar tráfego e performance
- Configurar variáveis de ambiente
- Ver histórico de deploys

## 🆓 Plano Gratuito

O plano gratuito do Render inclui:
- ✅ 100 GB de largura de banda/mês
- ✅ Deploy automático via Git
- ✅ SSL/HTTPS gratuito
- ✅ CDN global
- ✅ Domínio `.onrender.com`

## 🐛 Troubleshooting

### Build falhou?

Verifique os logs no Render dashboard. Causas comuns:
- Dependências faltando no `package.json`
- Erro de sintaxe no código
- Versão incompatível do Node.js

### Site não carrega?

- Verifique se o `Publish Directory` está correto: `frontend/dist`
- Confirme que o build gerou os arquivos em `frontend/dist`
- Verifique as rotas no `render.yaml`

### Página 404 em rotas?

O arquivo `render.yaml` já está configurado com rewrite de rotas para SPA. Se ainda houver problemas, adicione na configuração manual:

```
Rewrite Rules:
Source: /*
Destination: /index.html
```

## 📞 Suporte

- [Documentação Render](https://render.com/docs)
- [Community Forum](https://community.render.com)
- [Status Page](https://status.render.com)

## ✅ Checklist Final

- [ ] Código enviado para o GitHub
- [ ] Conta criada no Render
- [ ] Repositório conectado ao Render
- [ ] Blueprint aplicado (ou configuração manual feita)
- [ ] Build concluído com sucesso
- [ ] Site acessível na URL fornecida
- [ ] Rotas do React funcionando corretamente

---

**Pronto!** 🎉 Seu Hell de Janeiro está no ar!

Deploy realizado por: Liniker
Data: 2025
