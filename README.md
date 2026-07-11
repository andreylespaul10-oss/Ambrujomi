# Bliss Glow — Beauty & Wellness Store (UK)

Projeto de e-commerce (dropshipping) em construção. **Mercado-alvo: Reino
Unido** — site em inglês, preços em libras (GBP). O protótipo é desenvolvido
neste repositório e, quando aprovado, será integrado ao **Wix** (Wix Studio /
Velo) com pagamentos e sincronização de pedidos.

## Decisões do projeto

- **Mercado:** Reino Unido (site 100% em inglês, moeda £)
- **Nicho:** beleza e saúde (beauty & wellness)
- **Frete:** Standard £3.99 / Express £7.99, grátis (standard) acima de £40
- **Pagamentos:** cartão + PayPal (Pix não existe no Reino Unido)
- **Fornecimento:** dropshipping via DSers + AliExpress
- **Plataforma final:** Wix Stores, com customizações em Velo

## Estado atual

**Fase 1 — Protótipo visual (em andamento)**

- [x] Vitrine de produtos em inglês (`index.html`)
- [x] Carrinho com quantidade, frete UK e frete grátis acima de £40 (`cart.html` + `script.js`)
- [x] Identidade visual Bliss Glow (rosa/vinho + dourado) (`style.css`)
- [ ] Produtos reais (aguardando lista com nomes, preços e fornecedores)
- [ ] Fotos reais dos produtos (hoje são placeholders em gradiente)
- [ ] Páginas extras (About, Shipping & Returns, Contact)

## Próximas fases

**Fase 2 — Conteúdo real**
Substituir os produtos de teste pelo catálogo definitivo (nomes, preços em £,
descrições em inglês, fotos), com base nos documentos do projeto Bliss Glow.

**Fase 3 — Pagamentos e operação**
- Checkout com cartão e PayPal (via Wix Payments/Stripe quando migrar)
- Número de WhatsApp da loja (variável `WHATSAPP` no `script.js`, DDI +44)
- Estratégia de dropshipping com DSers + AliExpress (envio para o Reino Unido)

**Fase 4 — Migração para o Wix**
- Recriar a loja no Wix usando o Wix Stores (carrinho, checkout e frete nativos)
- Catálogo de produtos no CMS do Wix
- Moeda GBP e região Reino Unido nas configurações da loja
- Lógica customizada com Velo (Wix dev) quando necessário
- Este protótipo serve como referência visual e funcional

## Configurações pendentes (antes de publicar)

| Item | Onde | Status |
|---|---|---|
| Número do WhatsApp (+44) | `script.js`, variável `WHATSAPP` | placeholder `440000000000` |
| Link de pagamento com cartão | `cart.html` | placeholder `#` |
| Link do PayPal | `cart.html` | placeholder `#` |
| Fotos dos produtos | `index.html` | gradientes provisórios |

## Como visualizar o protótipo

Abra o arquivo `index.html` em qualquer navegador — não precisa de servidor.
