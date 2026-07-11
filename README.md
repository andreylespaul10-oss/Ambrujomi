# Bliss Glow — Premium Beauty & Wellness Store (UK)

E-commerce premium de beleza e bem-estar. **Mercado-alvo: Reino Unido** —
site em inglês britânico, preços em libras (GBP, com VAT incluído).
Modelo de negócio: dropshipping via **DSers + AliExpress**.
Destino final: **Wix** (Wix Stores + Velo), usando este protótipo como
referência visual e funcional.

## 📁 Estrutura

```
├── index.html          Home (herói, categorias, best sellers, reviews, FAQ...)
├── shop.html           Vitrine com filtros e ordenação (?category=, ?sort=)
├── product.html        Página de produto (?id=) — galeria, variantes, abas
├── cart.html           Sacola completa: cupom, frete, resumo, recomendados
├── checkout.html       Checkout de página única com validação
├── confirmation.html   Confirmação do pedido
├── account.html        Login + painel do cliente (pedidos, dados, preferências)
├── wishlist.html       Lista de desejos
├── assets/
│   ├── css/main.css    Design system (rose gold / ivory / champagne)
│   └── js/
│       ├── data.js     Catálogo (13 produtos, 4 categorias, reviews, FAQs)
│       └── app.js      Motor da loja: carrinho, wishlist, busca, mini-cart
└── docs/               Especificação completa (Partes 1–24 + master prompt)
```

## ✅ O que o protótipo já faz

- Navegação completa entre todas as páginas (menu, breadcrumbs, cards)
- Carrinho persistente (localStorage) com mini-carrinho lateral
- Wishlist persistente com contador no header
- Busca instantânea com miniaturas
- Filtros por categoria/oferta/estoque + 5 ordenações
- Página de produto: galeria, variantes, quantidade, abas (descrição,
  especificações, avaliações, entrega), produtos relacionados
- Cupons: `GLOW10` (10%) e `WELCOME15` (15%)
- Frete UK: Standard £3.99 / Express £7.99 — grátis acima de £40
- Checkout com validação em tempo real e pedido salvo no painel do cliente
- Design responsivo (desktop → mobile), acessibilidade básica (ARIA, foco)

## 🔎 Como visualizar

Abra `index.html` em qualquer navegador — não precisa de servidor.

## 🚧 Próximos passos

1. Fotos reais dos produtos (hoje: gradientes + emoji)
2. Produtos definitivos do AliExpress/DSers (editar `assets/js/data.js`)
3. Migração para o Wix: catálogo → Wix Stores, pagamentos → Wix Payments
   (cartão, PayPal, Apple/Google Pay), impostos → VAT UK 20%
4. Conta real de cliente, e-mails transacionais e rastreamento (nativos no Wix)

## 📚 Especificação

A pasta `docs/` contém a especificação técnica completa em 24 partes
(visão, arquitetura, design system, componentes, páginas, banco de dados,
API, SEO, performance, segurança, integrações DSers/AliExpress, recursos
premium/IA, testes, deploy e checklist de lançamento) + o master prompt
de implementação.
