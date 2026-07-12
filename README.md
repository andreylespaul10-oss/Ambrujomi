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

## 🎯 DECISÃO DE ARQUITETURA (11/07/2026)

**Caminho escolhido: Wix Headless + Vercel.**
Frontend em código próprio (base: este protótipo) hospedado no Vercel,
usando o site Wix "BlissGlow" como motor de comércio por trás
(catálogo, carrinho, checkout com Stripe, pedidos e DSers continuam no Wix).
Domínio blissglow.store apontará para o Vercel.

**Atualização (12/07/2026): a Ana quer os DOIS entregáveis** —
(A) o site Wix/Wix-Headless e (B) um site 100% do zero
(Next.js + PostgreSQL na Vercel, seguindo a documentação abaixo).
Este protótipo é a semente do trilho B.

Status: **documentação completa recebida (13 documentos)** — extraída da
conversa do ChatGPT em 12/07/2026 e salva em `docs/`. Aguardando o OK da
Ana para iniciar a implementação.

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

### Documentação complementar (Séries 2+, extraída do ChatGPT em 12/07/2026)

| Pasta | Documento | Capítulos |
|---|---|---|
| `docs/database/` | Database Schema (PostgreSQL) | 15 |
| `docs/api/` | API Documentation (REST) | 15 |
| `docs/design-system/` | Design System | 20 |
| `docs/security-infrastructure/` | Security & Infrastructure | 20 |
| `docs/seo-content-strategy/` | SEO & Content Strategy | 20 |
| `docs/testing-qa/` | Testing & Quality Assurance | 20 |
| `docs/cms/` | CMS & Content Management | 20 |
| `docs/analytics/` | Analytics & Tracking | 20 |
| `docs/marketing-crm/` | Marketing Automation & CRM | 20 |
| `docs/business-rules/` | Business Rules | 20 |
| `docs/devops/` | Deployment & DevOps | 20 |
| `docs/developer-handbook/` | Developer Handbook | 20 |
| `docs/operations-manual/` | Operations Manual | 20 |
| `docs/monitoring-observability/` | Monitoring & Observability | 20 |
| `docs/enterprise-governance/` | Enterprise Governance | 20 |
| `docs/customer-support/` | Customer Support & Success | 20 |
| `docs/data-governance/` | Data Governance | 20 |
| `docs/disaster-recovery/` | Disaster Recovery & Business Continuity | 20 |
| `docs/ai-personalisation/` | AI & Personalisation (v2 expandida) | 20 |
| `docs/dsers-strategy/` | DSers & AliExpress Dropshipping Strategy | 20 |
| `docs/master-index/` | Master Documentation Index | 20 |

Coleção completa: 21 documentos. AI & Personalisation foi expandido
(v2) e a DSers Strategy foi escrita do zero, pois a versão do ChatGPT
era apenas um placeholder dentro de um ZIP.

### Site teste (trilho B — site do zero)

`site-teste-design-oficial.html` — protótipo single-file da loja
seguindo o Design System oficial (Playfair Display + Inter, paleta
Rose #E8B4C7). Loja completa: home, shop com filtros, página de
produto, carrinho com cupons, checkout e confirmação.
