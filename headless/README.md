# Bliss Glow — Storefront Headless (Next.js + Wix)

Frontend próprio da Bliss Glow rodando sobre o **site Wix BlissGlow** como
motor de comércio (Wix Headless). O site Wix continua dono do catálogo,
carrinho, checkout (Stripe), pedidos e DSers — este projeto é a vitrine.

## O que já está pronto

- ✅ **OAuth app criado no Wix** — "BlissGlow Headless Frontend"
  (client ID `9eaa6d35-f0b7-4b54-b913-5c7e2dc55d34`, já embutido como padrão)
- ✅ Home com hero + best sellers **puxados ao vivo do Wix Stores** (fotos e preços reais)
- ✅ Página `/shop` com todos os produtos
- ✅ Página de produto `/product/[slug]` com "Add to basket"
- ✅ Carrinho `/cart` usando o carrinho REAL do Wix (currentCart)
- ✅ Checkout: redireciona para o **checkout seguro hospedado pelo Wix**
  (Stripe, Apple Pay, cupons GLOW10/WELCOME15 funcionam lá) e volta ao site
- ✅ Design System oficial (Rose #E8B4C7, Playfair Display + Inter)
- ✅ Chat com IA avançada (Claude Opus 4.8) — ver seção abaixo
- ✅ Build de produção passando (`next build`)

## 💬 Chat com IA avançada (Claude)

O site tem um chat próprio ("Ana from BlissGlow") movido pelo **Claude Opus 4.8**,
o modelo mais avançado da Anthropic:

- Conhece o catálogo REAL da loja (puxa os produtos do Wix a cada 5 min)
- Sabe as políticas: frete grátis UK, devolução 30 dias, cupons GLOW10/WELCOME15
- Responde em inglês britânico (ou no idioma do cliente), 24/7
- Nunca dá conselho médico; encaminha para e-mail quando não sabe
- Sem a chave configurada, mostra uma mensagem educada (o site nunca quebra)

### Para ativar

1. Crie uma conta em https://console.anthropic.com e gere uma **API key**
   (paga por uso: centavos por conversa).
2. Na Vercel: *Project → Settings → Environment Variables* → adicione
   `ANTHROPIC_API_KEY = sk-ant-...` e faça redeploy.

## Como rodar localmente

```bash
cd headless
npm install
npm run dev        # abre http://localhost:3000
```

## Deploy na Vercel (passo a passo — ~10 minutos)

1. Entre em https://vercel.com e faça login com a conta do **GitHub**
   (andreylespaul10-oss).
2. **Add New → Project** → importe o repositório `Ambrujomi`.
3. Em **Root Directory**, clique em *Edit* e selecione a pasta **`headless`**.
4. Framework: Next.js (detectado sozinho). Não precisa mudar nada.
5. (Opcional) Em *Environment Variables*, adicione
   `NEXT_PUBLIC_WIX_CLIENT_ID = 9eaa6d35-f0b7-4b54-b913-5c7e2dc55d34`
   — se não adicionar, o valor padrão embutido já funciona.
6. **Deploy**. Em ~2 minutos você recebe uma URL pública
   (`https://….vercel.app`) para testar de qualquer celular, sem login.

### Ligar o domínio blissglow.store (quando aprovar o site novo)

1. Na Vercel: *Project → Settings → Domains* → adicione `blissglow.store`
   e `www.blissglow.store`.
2. No painel Wix: *Domains → blissglow.store → Advanced/DNS* → aponte o
   registro **A** e o **CNAME (www)** para os valores que a Vercel mostrar.
3. Aguarde a propagação (minutos até algumas horas).
4. **Reversível**: para voltar ao site Wix, basta restaurar o DNS original
   no mesmo painel. Nada é perdido — plano premium, domínio e a loja Wix
   continuam intactos.

## Roadmap (fases internacionais)

- **Fase 1 — UK (£)**: este projeto, como está.
- **Fase 2 — Irlanda (€)**: adicionar seletor de moeda (conversão no front;
  checkout Wix cobra em GBP até ativar multi-moeda no plano).
- **Fase 3 — Europa**: Wix Multilingual para traduções gerenciadas no painel
  (EN/DE/FR/ES/IT) + IOSS para IVA da UE. O protótipo
  `site-teste-design-oficial.html` na raiz do repo demonstra a experiência.

## Estrutura

```
headless/
├── app/
│   ├── layout.js            # header/footer, announce bar
│   ├── globals.css          # Design System oficial (tokens Ch.3/Ch.4)
│   ├── page.js              # home (hero + best sellers do Wix)
│   ├── shop/page.js         # todos os produtos
│   ├── product/[slug]/page.js
│   └── cart/page.js         # carrinho Wix + redirect p/ checkout
├── components/
│   ├── ProductCard.js
│   └── AddToCart.js
└── lib/
    ├── wix.js               # cliente server (catálogo) + client ID
    ├── wix-browser.js       # cliente browser (carrinho, tokens persistidos)
    └── catalog.js           # mapeamento produto Wix → shape simples
```
