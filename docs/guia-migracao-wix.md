# 🗺️ Guia de Migração — Bliss Glow para o Wix

O protótipo (neste repositório) é o **gabarito**. A loja real vai rodar no
site **"BlissGlow"** que já existe na conta Wix, usando o **Wix Stores**.

Legenda: 🤖 = o Claude faz pela integração · 👤 = você faz no painel do Wix

---

## ETAPA 1 — Catálogo de produtos 🤖

O Claude cria direto no site BlissGlow, pela integração:

- Os 13 produtos (nome, preço em £, descrição, variantes)
- As 4 coleções: Skincare, Beauty Tools, Wellness, Hair & Body
- Cupons: GLOW10 (10%) e WELCOME15 (15%)

**Você só confere:** painel Wix → **Catalog → Products**

## ETAPA 2 — Fotos reais 👤 (com ajuda 🤖)

1. Escolha os produtos no AliExpress/DSers
2. Baixe as fotos dos fornecedores (ou peça melhores por mensagem)
3. Suba nos produtos: **Products → (produto) → Add Media**
   (o Claude também consegue subir imagens pela integração se você enviar
   os arquivos no chat)

## ETAPA 3 — Visual das páginas 👤 (com receita 🤖)

Abra o **Editor do Wix** e monte usando o protótipo como referência.
Receita de identidade visual (Site Design → Theme):

| Elemento | Valor |
|---|---|
| Cor primária (botões/links) | `#B76E79` (rose gold) |
| Fundo | `#FAF7F2` (ivory) |
| Acento premium (badges/detalhes) | `#C6A15B` (champagne) |
| Texto | `#221D1A` (quase preto) |
| Título | Serifada (Playfair Display ou Cormorant) |
| Corpo | Sem serifa (Avenir, Helvetica ou Poppins) |
| Botões | Cantos totalmente arredondados (pill) |

Ordem das seções da home (copiar do protótipo):
anúncio → herói → benefícios → categorias → best sellers → banner
promocional → novidades → depoimentos → newsletter → FAQ → rodapé

## ETAPA 4 — Pagamentos 👤

Painel → **Settings → Accept Payments**:

1. **Wix Payments** (cartões UK) — precisa de dados da empresa/banco UK
2. **PayPal** — conectar sua conta PayPal
3. Apple Pay / Google Pay — ativam junto com o Wix Payments

## ETAPA 5 — Frete e impostos 👤

- **Settings → Shipping & Fulfilment** → região United Kingdom:
  - Standard: £3.99 (3–5 dias) — regra "grátis acima de £40"
  - Express: £7.99 (1–2 dias)
- **Settings → Tax** → UK VAT 20%, preços com imposto incluído

## ETAPA 6 — DSers (dropshipping) 👤

1. Criar conta em dsers.com
2. **Wix App Market → buscar "DSers" → Add to Site**
3. Conectar DSers ↔ AliExpress
4. Vincular os produtos importados aos produtos do catálogo
5. Pedidos passam a ser enviados ao fornecedor automaticamente

## ETAPA 7 — Velo / Wix dev 🤖 (só o fino)

Onde código customizado entra (o Claude escreve, você cola):

- Barra de anúncios rotativa
- Micro-animações e efeitos de hover
- Comportamentos que o editor não cobre

Ativar: Editor → **Dev Mode → Turn on Dev Mode**

## ETAPA 8 — Lançamento 👤

Checklist final (Parte 24 da especificação):

- [ ] Domínio conectado (ex.: blissglow.co.uk) — Settings → Domains
- [ ] SSL ativo (automático no Wix)
- [ ] Pedido de teste completo (compra → DSers → rastreio)
- [ ] Políticas: devolução (30 dias), privacidade (UK GDPR), termos
- [ ] E-mails automáticos revisados (confirmação, envio)
- [ ] Google Analytics / Meta Pixel — Settings → Marketing Integrations
- [ ] Teste no celular

---

## Resumo do fluxo

```
Protótipo (GitHub) ──► Catálogo no Wix (🤖 integração)
                   ──► Visual no Editor (👤 com receita)
                   ──► Pagamentos + frete + VAT (👤 painel)
                   ──► DSers conectado (👤 app market)
                   ──► Velo p/ detalhes (🤖 código pronto)
                   ──► Lançamento ✨
```
