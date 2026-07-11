# Bliss Glow — Loja Virtual

Projeto de e-commerce (dropshipping) em construção. O protótipo é desenvolvido
neste repositório e, quando aprovado, será integrado ao **Wix** (Wix Studio /
Velo) com pagamentos e sincronização de pedidos.

## Estado atual

**Fase 1 — Protótipo visual (em andamento)**

- [x] Vitrine de produtos (`index.html`)
- [x] Carrinho funcional com quantidade e frete por estado (`carrinho.html` + `script.js`)
- [x] Identidade visual Bliss Glow (rosa/vinho + dourado) (`style.css`)
- [ ] Produtos reais (aguardando lista com nomes, preços e fornecedores)
- [ ] Fotos reais dos produtos (hoje são placeholders em gradiente)
- [ ] Páginas extras (sobre, políticas de troca/entrega, contato)

## Próximas fases

**Fase 2 — Conteúdo real**
Substituir os produtos de teste pela lista definitiva (catálogo, preços,
descrições, fotos), com base nos documentos do projeto Bliss Glow.

**Fase 3 — Pagamentos e operação**
- Links reais de Pix e cartão (Mercado Pago)
- Número de WhatsApp da loja (variável `WHATSAPP` no `script.js`)
- Estratégia de dropshipping com DSers + AliExpress

**Fase 4 — Migração para o Wix**
- Recriar a loja no Wix usando o Wix Stores (carrinho, checkout e frete nativos)
- Catálogo de produtos no CMS do Wix
- Pagamentos via provedores do Wix (Mercado Pago disponível no Brasil)
- Lógica customizada com Velo (Wix dev) quando necessário
- Este protótipo serve como referência visual e funcional

## Configurações pendentes (antes de publicar)

| Item | Onde | Status |
|---|---|---|
| Número do WhatsApp | `script.js`, variável `WHATSAPP` | placeholder `5500000000000` |
| Link Pix (Mercado Pago) | `carrinho.html` | placeholder `https://mpago.la/SEU_PIX` |
| Link cartão (Mercado Pago) | `carrinho.html` | placeholder `https://mpago.la/SEU_CARTAO` |
| Fotos dos produtos | `index.html` | gradientes provisórios |

## Como visualizar o protótipo

Abra o arquivo `index.html` em qualquer navegador — não precisa de servidor.
