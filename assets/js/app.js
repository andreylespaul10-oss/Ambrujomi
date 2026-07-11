// ============================================================
// BLISS GLOW — Storefront application (prototype)
// Shared components (header/footer/mini-cart), cart & wishlist
// state in localStorage, and per-page renderers.
// ============================================================

/* ---------- Helpers ---------- */
const fmt = v => "£" + v.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => [...el.querySelectorAll(s)];
const getProduct = id => BG_PRODUCTS.find(p => p.id === id);
const getCategory = id => BG_CATEGORIES.find(c => c.id === id);
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function store(key, val) {
  try {
    if (val === undefined) return JSON.parse(localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) { return null; }
}

/* ---------- State ---------- */
let cart = store("bg_cart") || [];         // [{id, variant, qty}]
let wishlist = store("bg_wishlist") || []; // [id]

const cartCount = () => cart.reduce((s, i) => s + i.qty, 0);
const cartSubtotal = () => cart.reduce((s, i) => s + getProduct(i.id).price * i.qty, 0);

function saveCart() { store("bg_cart", cart); updateBadges(); renderMiniCart(); }
function saveWishlist() { store("bg_wishlist", wishlist); updateBadges(); }

function addToCart(id, variant = null, qty = 1, openDrawer = true) {
  const line = cart.find(i => i.id === id && i.variant === variant);
  if (line) line.qty += qty;
  else cart.push({ id, variant, qty });
  saveCart();
  toast(`Added to bag — ${getProduct(id).name}`, "success");
  if (openDrawer) openMiniCart();
}

function setQty(id, variant, delta) {
  const line = cart.find(i => i.id === id && i.variant === variant);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter(i => i !== line);
  saveCart();
  if (document.body.dataset.page === "cart") renderCartPage();
  if (document.body.dataset.page === "checkout") renderCheckoutSummary();
}

function removeLine(id, variant) {
  cart = cart.filter(i => !(i.id === id && i.variant === variant));
  saveCart();
  toast("Item removed", "");
  if (document.body.dataset.page === "cart") renderCartPage();
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    toast("Removed from wishlist", "");
  } else {
    wishlist.push(id);
    toast("Saved to wishlist ♥", "success");
  }
  saveWishlist();
  qsa(`[data-wish="${id}"]`).forEach(b => b.textContent = wishlist.includes(id) ? "♥" : "♡");
  if (document.body.dataset.page === "wishlist") renderWishlistPage();
}

/* ---------- Toast ---------- */
function toast(msg, type = "") {
  let wrap = qs(".toast-wrap");
  if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
  const t = document.createElement("div");
  t.className = "toast " + type;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}

/* ---------- Shared components ---------- */
function renderChrome() {
  const page = document.body.dataset.page || "";
  const headerHost = qs("#site-header");
  if (headerHost) headerHost.innerHTML = `
    <div class="announce" id="announce">
      Free UK delivery on orders over <b>£40</b> &nbsp;•&nbsp; Use code <b>GLOW10</b> for 10% off
      <button class="announce-close" aria-label="Dismiss announcement" onclick="this.parentElement.remove()">×</button>
    </div>
    <header class="site-header">
      <div class="header-inner">
        <button class="icon-btn menu-toggle" aria-label="Open menu" onclick="qs('.main-nav').classList.toggle('open')">☰</button>
        <a class="logo" href="index.html">Bliss<em>Glow</em></a>
        <nav class="main-nav" aria-label="Main navigation">
          <a href="index.html" ${page === "home" ? 'class="active"' : ""}>Home</a>
          <a href="shop.html" ${page === "shop" ? 'class="active"' : ""}>Shop</a>
          <a href="shop.html?category=skincare">Skincare</a>
          <a href="shop.html?category=beauty-tools">Beauty Tools</a>
          <a href="shop.html?category=wellness">Wellness</a>
          <a href="shop.html?sort=new">New In</a>
        </nav>
        <div class="header-actions">
          <button class="icon-btn" aria-label="Search" onclick="openSearch()">⌕</button>
          <a class="icon-btn" href="account.html" aria-label="My account">👤</a>
          <a class="icon-btn" href="wishlist.html" aria-label="Wishlist">♡<span class="count-badge" data-badge="wish">0</span></a>
          <button class="icon-btn" aria-label="Shopping bag" onclick="openMiniCart()">👜<span class="count-badge" data-badge="cart">0</span></button>
        </div>
      </div>
    </header>`;

  const footerHost = qs("#site-footer");
  if (footerHost) footerHost.innerHTML = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <div class="f-logo">Bliss<em>Glow</em></div>
          <p>Premium beauty and wellness essentials, delivered across the United Kingdom.</p>
          <p style="margin-top:14px">hello@blissglow.co.uk</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="shop.html">All products</a></li>
            <li><a href="shop.html?category=skincare">Skincare</a></li>
            <li><a href="shop.html?category=beauty-tools">Beauty tools</a></li>
            <li><a href="shop.html?category=wellness">Wellness</a></li>
            <li><a href="shop.html?category=hair-body">Hair &amp; body</a></li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li><a href="account.html">My account</a></li>
            <li><a href="account.html#orders">Track my order</a></li>
            <li><a href="index.html#faq">Delivery &amp; returns</a></li>
            <li><a href="index.html#faq">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Bliss Glow</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Returns policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Bliss Glow. All prices include VAT.</span>
        <div class="pay-icons"><span>VISA</span><span>MC</span><span>AMEX</span><span>PayPal</span><span>Apple&nbsp;Pay</span><span>G&nbsp;Pay</span></div>
      </div>
    </footer>

    <div class="drawer-overlay" onclick="closeMiniCart()"></div>
    <aside class="mini-cart" aria-label="Shopping bag">
      <div class="mc-head"><h3>Your bag</h3><button class="icon-btn" aria-label="Close bag" onclick="closeMiniCart()">✕</button></div>
      <div class="mc-items" id="mc-items"></div>
      <div class="mc-foot">
        <div class="mc-sub"><span>Subtotal</span><span id="mc-subtotal">£0.00</span></div>
        <p class="mc-note">Delivery and discounts calculated at checkout.</p>
        <a class="btn btn-primary btn-block" href="cart.html">View bag &amp; checkout</a>
      </div>
    </aside>

    <div class="search-overlay" id="search-overlay" onclick="if(event.target===this)closeSearch()">
      <div class="search-panel">
        <input type="search" id="search-input" placeholder="Search products…" aria-label="Search products" oninput="runSearch(this.value)">
        <ul class="search-results" id="search-results"></ul>
      </div>
    </div>`;

  updateBadges();
  renderMiniCart();
}

function updateBadges() {
  qsa('[data-badge="cart"]').forEach(b => b.textContent = cartCount());
  qsa('[data-badge="wish"]').forEach(b => b.textContent = wishlist.length);
}

/* ---------- Mini cart ---------- */
function openMiniCart() { qs(".mini-cart")?.classList.add("open"); qs(".drawer-overlay")?.classList.add("open"); }
function closeMiniCart() { qs(".mini-cart")?.classList.remove("open"); qs(".drawer-overlay")?.classList.remove("open"); }

function renderMiniCart() {
  const host = qs("#mc-items");
  if (!host) return;
  if (cart.length === 0) {
    host.innerHTML = `<div class="mc-empty"><div class="big">👜</div><p>Your bag is empty.</p><a class="btn btn-secondary" href="shop.html">Start shopping</a></div>`;
  } else {
    host.innerHTML = cart.map(line => {
      const p = getProduct(line.id);
      return `
      <div class="mc-row">
        <div class="mc-thumb ${p.g}">${p.emoji}</div>
        <div class="mc-info">
          <h4>${esc(p.name)}</h4>
          <div class="mc-meta">${line.variant ? esc(line.variant) + " · " : ""}${fmt(p.price)}</div>
          <div class="mc-qty">
            <button aria-label="Decrease quantity" onclick="setQty('${p.id}',${line.variant ? `'${esc(line.variant)}'` : null},-1)">−</button>
            <span>${line.qty}</span>
            <button aria-label="Increase quantity" onclick="setQty('${p.id}',${line.variant ? `'${esc(line.variant)}'` : null},1)">+</button>
          </div>
        </div>
        <div class="mc-price">${fmt(p.price * line.qty)}</div>
      </div>`;
    }).join("");
  }
  const sub = qs("#mc-subtotal");
  if (sub) sub.textContent = fmt(cartSubtotal());
}

/* ---------- Search ---------- */
function openSearch() { qs("#search-overlay").classList.add("open"); qs("#search-input").focus(); }
function closeSearch() { qs("#search-overlay").classList.remove("open"); }
function runSearch(q) {
  const host = qs("#search-results");
  q = q.trim().toLowerCase();
  if (!q) { host.innerHTML = ""; return; }
  const hits = BG_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || getCategory(p.category).name.toLowerCase().includes(q)
  ).slice(0, 6);
  host.innerHTML = hits.length
    ? hits.map(p => `<li><a href="product.html?id=${p.id}">
        <span class="search-thumb ${p.g}">${p.emoji}</span>
        <span>${esc(p.name)}</span><span class="sr-price">${fmt(p.price)}</span></a></li>`).join("")
    : `<li style="padding:14px;color:var(--grey)">No products found for “${esc(q)}”.</li>`;
}
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeSearch(); closeMiniCart(); } });

/* ---------- Product card (reusable) ---------- */
function productCard(p) {
  const wished = wishlist.includes(p.id);
  const badge = p.badge ? `<span class="pc-badge ${p.badge === "Sale" ? "sale" : ""}">${p.badge}</span>` : "";
  return `
  <article class="product-card">
    <a class="pc-media ${p.g}" href="product.html?id=${p.id}" aria-label="${esc(p.name)}">${p.emoji}${badge}</a>
    <button class="pc-wish" data-wish="${p.id}" aria-label="Toggle wishlist" onclick="toggleWishlist('${p.id}')">${wished ? "♥" : "♡"}</button>
    <div class="pc-body">
      <span class="pc-cat">${getCategory(p.category).name}</span>
      <h3><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
      <span class="pc-rating">${stars(p.rating)} <span class="rcount">(${p.reviews})</span></span>
      <div class="pc-price">
        <span class="now">${fmt(p.price)}</span>
        ${p.oldPrice ? `<span class="was">${fmt(p.oldPrice)}</span>` : ""}
      </div>
      <button class="btn btn-primary pc-add" onclick="addToCart('${p.id}', ${p.variants ? `'${esc(p.variants.options[0])}'` : null})">Add to bag</button>
    </div>
  </article>`;
}

/* ============================================================
   PAGE RENDERERS
   ============================================================ */

/* ---------- Home ---------- */
function initHome() {
  qs("#home-categories").innerHTML = BG_CATEGORIES.map(c => `
    <a class="cat-card ${c.g}" href="shop.html?category=${c.id}">
      <span class="cat-emoji">${c.emoji}</span>
      <span class="cat-info"><h3>${c.name}</h3><p>${c.desc}</p></span>
    </a>`).join("");

  const best = BG_PRODUCTS.filter(p => p.badge === "Best Seller" || p.reviews > 150).slice(0, 4);
  qs("#home-best").innerHTML = best.map(productCard).join("");

  const news = BG_PRODUCTS.filter(p => p.badge === "New").concat(BG_PRODUCTS.filter(p => !p.badge)).slice(0, 4);
  qs("#home-new").innerHTML = news.map(productCard).join("");

  qs("#home-reviews").innerHTML = BG_TESTIMONIALS.map(t => `
    <div class="review-card">
      <div class="stars">${"★".repeat(t.stars)}</div>
      <blockquote>“${esc(t.text)}”</blockquote>
      <div class="who"><b>${esc(t.name)}</b>, ${t.where} · <span class="verified">✓ Verified purchase</span></div>
    </div>`).join("");

  qs("#home-faq").innerHTML = BG_FAQS.map(f => `
    <details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
}

/* ---------- Shop ---------- */
function initShop() {
  const params = new URLSearchParams(location.search);
  const state = {
    category: params.get("category") || "",
    sort: params.get("sort") || "featured",
    onSale: false, inStock: false
  };

  qs("#filter-cats").innerHTML = BG_CATEGORIES.map(c => `
    <label><input type="radio" name="cat" value="${c.id}" ${state.category === c.id ? "checked" : ""}> ${c.name}</label>`
  ).join("") + `<label><input type="radio" name="cat" value="" ${!state.category ? "checked" : ""}> All products</label>`;

  qs("#sort-select").value = state.sort === "new" ? "newest" : state.sort;

  function apply() {
    let list = [...BG_PRODUCTS];
    if (state.category) list = list.filter(p => p.category === state.category);
    if (state.onSale) list = list.filter(p => p.oldPrice);
    if (state.inStock) list = list.filter(p => p.stock === "in");
    const sort = qs("#sort-select").value;
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sort === "newest") list.sort((a, b) => (b.badge === "New") - (a.badge === "New"));

    const cat = getCategory(state.category);
    qs("#shop-title").textContent = cat ? cat.name : "All Products";
    qs("#shop-desc").textContent = cat ? cat.desc : "Every Bliss Glow essential, in one place.";
    qs("#crumb-here").textContent = cat ? cat.name : "Shop";
    qs("#result-count").textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;

    qs("#shop-grid").innerHTML = list.length
      ? list.map(productCard).join("")
      : `<div class="empty-state" style="grid-column:1/-1"><div class="big">🔍</div>
          <h3>No products match your filters</h3><p>Try removing a filter or browse the full collection.</p>
          <button class="btn btn-secondary" onclick="location.href='shop.html'">Reset filters</button></div>`;
  }

  qsa('input[name="cat"]').forEach(r => r.addEventListener("change", e => { state.category = e.target.value; apply(); }));
  qs("#f-sale").addEventListener("change", e => { state.onSale = e.target.checked; apply(); });
  qs("#f-stock").addEventListener("change", e => { state.inStock = e.target.checked; apply(); });
  qs("#sort-select").addEventListener("change", apply);
  apply();
}

/* ---------- Product ---------- */
function initProduct() {
  const id = new URLSearchParams(location.search).get("id");
  const p = getProduct(id) || BG_PRODUCTS[0];
  let variant = p.variants ? p.variants.options[0] : null;
  let qty = 1;

  document.title = `${p.name} | Bliss Glow`;
  const cat = getCategory(p.category);
  qs("#pd-crumbs").innerHTML = `
    <a href="index.html">Home</a><span class="sep">›</span>
    <a href="shop.html">Shop</a><span class="sep">›</span>
    <a href="shop.html?category=${cat.id}">${cat.name}</a><span class="sep">›</span> ${esc(p.name)}`;

  qs("#pd-main").className = `pd-gallery-main ${p.g}`;
  qs("#pd-main").textContent = p.emoji;
  const thumbEmojis = [p.emoji, "🌸", "💫"];
  qs("#pd-thumbs").innerHTML = thumbEmojis.map((e, i) =>
    `<button class="${p.g} ${i === 0 ? "active" : ""}" aria-label="Image ${i + 1}"
      onclick="qsa('#pd-thumbs button').forEach(b=>b.classList.remove('active'));this.classList.add('active');qs('#pd-main').textContent='${e}'">${e}</button>`).join("");

  qs("#pd-cat").textContent = cat.name;
  qs("#pd-name").textContent = p.name;
  qs("#pd-rating").innerHTML = `${stars(p.rating)} <span class="rcount">${p.rating} · ${p.reviews} reviews</span>`;
  qs("#pd-price").innerHTML = `
    <span class="now">${fmt(p.price)}</span>
    ${p.oldPrice ? `<span class="was">${fmt(p.oldPrice)}</span><span class="save">Save ${fmt(p.oldPrice - p.price)}</span>` : ""}`;
  qs("#pd-short").textContent = p.short;
  qs("#pd-stock").innerHTML = p.stock === "low"
    ? `<span class="stock-low">● Low stock — order soon</span>`
    : `<span class="stock-ok">● In stock, ships within 24h</span>`;

  const vhost = qs("#pd-variants");
  if (p.variants) {
    vhost.innerHTML = `<div class="variant-label">${p.variants.label}</div>
      <div class="variant-opts">${p.variants.options.map((o, i) =>
        `<button class="${i === 0 ? "active" : ""}" data-variant="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
    qsa("[data-variant]").forEach(b => b.addEventListener("click", () => {
      qsa("[data-variant]").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      variant = b.dataset.variant;
    }));
  } else vhost.innerHTML = "";

  const qtyEl = qs("#pd-qty");
  qs("#qty-minus").onclick = () => { if (qty > 1) qty--; qtyEl.textContent = qty; };
  qs("#qty-plus").onclick = () => { qty++; qtyEl.textContent = qty; };
  qs("#pd-add").onclick = () => addToCart(p.id, variant, qty);
  qs("#pd-buy").onclick = () => { addToCart(p.id, variant, qty, false); location.href = "checkout.html"; };
  const wishBtn = qs("#pd-wish");
  wishBtn.dataset.wish = p.id;
  wishBtn.textContent = wishlist.includes(p.id) ? "♥" : "♡";
  wishBtn.onclick = () => toggleWishlist(p.id);

  qs("#tab-description").innerHTML = `<p>${esc(p.short)}</p><ul>${p.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>`;
  qs("#tab-specs").innerHTML = `<table class="spec-table">${Object.entries(p.specs).map(([k, v]) =>
    `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join("")}</table>`;
  const reviews = BG_REVIEWS[p.id] || BG_REVIEWS._default;
  qs("#tab-reviews").innerHTML = reviews.map(r => `
    <div class="review-item"><span class="stars">${"★".repeat(r.stars)}</span>
      <p>“${esc(r.text)}”</p><span class="who"><b>${esc(r.name)}</b> · <span class="verified">✓ Verified purchase</span></span></div>`).join("");
  qs("#tab-delivery").innerHTML = `
    <ul><li><b>Standard delivery</b> — 3–5 working days, £3.99 (free over £40)</li>
    <li><b>Express delivery</b> — 1–2 working days, £7.99</li>
    <li><b>Returns</b> — free 30-day returns, no questions asked</li></ul>`;

  qsa(".pd-tab-buttons button").forEach(b => b.addEventListener("click", () => {
    qsa(".pd-tab-buttons button").forEach(x => x.classList.remove("active"));
    qsa(".pd-tab-panel").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    qs("#tab-" + b.dataset.tab).classList.add("active");
  }));

  const related = BG_PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  qs("#pd-related").innerHTML = related.map(productCard).join("");
}

/* ---------- Cart page ---------- */
function cartTotals() {
  const subtotal = cartSubtotal();
  const coupon = store("bg_coupon");
  const discount = coupon && BG_COUPONS[coupon] ? subtotal * BG_COUPONS[coupon] : 0;
  const deliveryId = store("bg_delivery") || "standard";
  const opt = BG_DELIVERY.options.find(o => o.id === deliveryId);
  let delivery = cart.length ? opt.price : 0;
  const freeStandard = deliveryId === "standard" && subtotal - discount >= BG_DELIVERY.freeOver;
  if (freeStandard) delivery = 0;
  return { subtotal, discount, delivery, freeStandard, deliveryId, total: subtotal - discount + delivery, coupon };
}

function renderCartPage() {
  const host = qs("#cart-body");
  if (cart.length === 0) {
    host.innerHTML = `<div class="empty-state"><div class="big">👜</div>
      <h3>Your bag is empty</h3><p>Discover our best sellers and start your glow ritual.</p>
      <a class="btn btn-primary" href="shop.html">Start shopping</a></div>`;
    return;
  }
  const t = cartTotals();
  host.innerHTML = `
  <div class="cart-layout">
    <div class="cart-items">
      ${cart.map(line => { const p = getProduct(line.id); return `
        <div class="cart-row">
          <a class="cart-thumb ${p.g}" href="product.html?id=${p.id}">${p.emoji}</a>
          <div class="cart-info">
            <h3><a href="product.html?id=${p.id}" style="color:inherit">${esc(p.name)}</a></h3>
            ${line.variant ? `<div class="variant">${esc(line.variant)}</div>` : ""}
            <div class="unit">${fmt(p.price)} each</div>
            <div class="mc-qty" style="margin-top:8px">
              <button aria-label="Decrease" onclick="setQty('${p.id}',${line.variant ? `'${esc(line.variant)}'` : null},-1)">−</button>
              <span>${line.qty}</span>
              <button aria-label="Increase" onclick="setQty('${p.id}',${line.variant ? `'${esc(line.variant)}'` : null},1)">+</button>
            </div>
          </div>
          <div class="cart-line-total">${fmt(p.price * line.qty)}</div>
          <button class="cart-remove" aria-label="Remove item" onclick="removeLine('${p.id}',${line.variant ? `'${esc(line.variant)}'` : null})">🗑</button>
        </div>`; }).join("")}
    </div>
    <div class="summary-card">
      <h3>Order summary</h3>
      <div class="delivery-opts">
        ${BG_DELIVERY.options.map(o => `
          <label><span><input type="radio" name="delivery" value="${o.id}" ${t.deliveryId === o.id ? "checked" : ""}
            onchange="store('bg_delivery',this.value);renderCartPage()"> ${o.name}<small>${o.eta}</small></span>
            <span class="d-price">${fmt(o.price)}</span></label>`).join("")}
      </div>
      <div class="coupon-row">
        <input id="coupon-input" placeholder="Discount code" value="${t.coupon || ""}" aria-label="Discount code">
        <button class="btn btn-secondary" onclick="applyCoupon()">Apply</button>
      </div>
      <div class="coupon-msg" id="coupon-msg"></div>
      <div class="sum-row"><span>Subtotal</span><span>${fmt(t.subtotal)}</span></div>
      ${t.discount ? `<div class="sum-row"><span>Discount (${t.coupon})</span><span>−${fmt(t.discount)}</span></div>` : ""}
      <div class="sum-row"><span>Delivery</span><span>${t.delivery === 0 && cart.length ? "FREE" : fmt(t.delivery)}</span></div>
      <div class="sum-note">${t.freeStandard ? "✓ You've unlocked free standard delivery" :
        t.deliveryId === "standard" && t.subtotal - t.discount < BG_DELIVERY.freeOver ?
        `Spend ${fmt(BG_DELIVERY.freeOver - (t.subtotal - t.discount))} more for free standard delivery` : ""}</div>
      <div class="sum-row total"><span>Total</span><span>${fmt(t.total)}</span></div>
      <a class="btn btn-primary btn-block mt-2" href="checkout.html">Secure checkout →</a>
      <p class="mc-note text-center" style="margin-top:12px">🔒 SSL encrypted · 30-day free returns</p>
    </div>
  </div>
  <section class="section">
    <div class="section-head"><div><span class="eyebrow">Complete the ritual</span><h2>You may also like</h2></div></div>
    <div class="product-grid">${BG_PRODUCTS.filter(p => !cart.some(l => l.id === p.id)).slice(0, 4).map(productCard).join("")}</div>
  </section>`;
}

function applyCoupon() {
  const code = qs("#coupon-input").value.trim().toUpperCase();
  const msg = qs("#coupon-msg");
  if (!code) { store("bg_coupon", null); renderCartPage(); return; }
  if (BG_COUPONS[code]) {
    store("bg_coupon", code);
    renderCartPage();
    setTimeout(() => { const m = qs("#coupon-msg"); if (m) { m.textContent = `✓ Code ${code} applied — ${BG_COUPONS[code] * 100}% off`; m.className = "coupon-msg ok"; } }, 0);
  } else {
    msg.textContent = "✕ This code is invalid or has expired.";
    msg.className = "coupon-msg err";
  }
}

/* ---------- Checkout ---------- */
function renderCheckoutSummary() {
  const t = cartTotals();
  qs("#co-items").innerHTML = cart.map(l => {
    const p = getProduct(l.id);
    return `<li><span><span class="q">${l.qty}×</span> ${esc(p.name)}${l.variant ? ` <span class="q">(${esc(l.variant)})</span>` : ""}</span><span>${fmt(p.price * l.qty)}</span></li>`;
  }).join("");
  qs("#co-subtotal").textContent = fmt(t.subtotal);
  qs("#co-delivery").textContent = t.delivery === 0 ? "FREE" : fmt(t.delivery);
  qs("#co-discount-row").style.display = t.discount ? "flex" : "none";
  if (t.discount) qs("#co-discount").textContent = "−" + fmt(t.discount);
  qs("#co-total").textContent = fmt(t.total);
}

function initCheckout() {
  if (cart.length === 0) { location.href = "cart.html"; return; }
  renderCheckoutSummary();
  qs("#checkout-form").addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;
    qsa("#checkout-form [required]").forEach(f => {
      const err = f.closest(".field")?.querySelector(".err-msg");
      const bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
      f.classList.toggle("invalid", bad);
      if (err) err.textContent = bad ? (f.type === "email" && f.value ? "Please enter a valid email address" : "This field is required") : "";
      if (bad) valid = false;
    });
    if (!qs("#terms").checked) { toast("Please accept the terms to continue", "error"); valid = false; }
    if (!valid) { toast("Please review the highlighted fields", "error"); return; }

    const btn = qs("#place-order");
    btn.disabled = true;
    btn.textContent = "Processing payment…";
    setTimeout(() => {
      const t = cartTotals();
      const order = {
        number: "BG-" + Math.floor(10000 + Math.random() * 89999),
        date: new Date().toISOString(),
        items: cart, total: t.total,
        name: qs("#f-first").value + " " + qs("#f-last").value,
        email: qs("#f-email").value,
        delivery: t.deliveryId, status: "processing"
      };
      const orders = store("bg_orders") || [];
      orders.unshift(order);
      store("bg_orders", orders);
      cart = []; store("bg_coupon", null); saveCart();
      location.href = "confirmation.html?order=" + order.number;
    }, 1400);
  });
}

/* ---------- Confirmation ---------- */
function initConfirmation() {
  const no = new URLSearchParams(location.search).get("order");
  const orders = store("bg_orders") || [];
  const order = orders.find(o => o.number === no) || orders[0];
  if (order) {
    qs("#conf-number").textContent = order.number;
    qs("#conf-email").textContent = order.email || "your email";
    qs("#conf-items").innerHTML = order.items.map(l => {
      const p = getProduct(l.id);
      return `<li><span><span class="q">${l.qty}×</span> ${esc(p.name)}</span><span>${fmt(p.price * l.qty)}</span></li>`;
    }).join("") + `<li style="font-weight:800"><span>Total paid</span><span>${fmt(order.total)}</span></li>`;
  }
}

/* ---------- Wishlist ---------- */
function renderWishlistPage() {
  const host = qs("#wishlist-grid");
  const items = wishlist.map(getProduct).filter(Boolean);
  host.innerHTML = items.length
    ? items.map(productCard).join("")
    : `<div class="empty-state" style="grid-column:1/-1"><div class="big">♡</div>
        <h3>Your wishlist is empty</h3><p>Tap the heart on any product to save it for later.</p>
        <a class="btn btn-primary" href="shop.html">Browse products</a></div>`;
}

/* ---------- Account ---------- */
function initAccount() {
  const user = store("bg_user");
  const authView = qs("#auth-view"), dashView = qs("#dash-view");

  function showDash() {
    authView.classList.add("hidden");
    dashView.classList.remove("hidden");
    qs("#dash-name").textContent = store("bg_user").name;
    const orders = store("bg_orders") || [];
    qs("#orders-list").innerHTML = orders.length
      ? orders.map(o => `
        <div class="order-line">
          <span><b>${o.number}</b><br><small style="color:var(--grey)">${new Date(o.date).toLocaleDateString("en-GB")}</small></span>
          <span>${o.items.reduce((s, i) => s + i.qty, 0)} item(s)</span>
          <span style="font-weight:700">${fmt(o.total)}</span>
          <span class="status-pill ${o.status}">${o.status}</span>
        </div>`).join("")
      : `<div class="empty-state"><div class="big">📦</div><h3>No orders yet</h3><p>Your orders will appear here after checkout.</p><a class="btn btn-primary" href="shop.html">Start shopping</a></div>`;
  }

  if (user) showDash();

  qs("#login-form")?.addEventListener("submit", e => {
    e.preventDefault();
    const email = qs("#login-email").value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) { toast("Please enter a valid email", "error"); return; }
    store("bg_user", { name: email.split("@")[0].replace(/^./, c => c.toUpperCase()), email });
    toast("Welcome back!", "success");
    showDash();
  });

  qs("#logout-btn")?.addEventListener("click", () => {
    store("bg_user", null);
    dashView.classList.add("hidden");
    authView.classList.remove("hidden");
    toast("You've been signed out", "");
  });

  qsa(".account-nav button").forEach(b => b.addEventListener("click", () => {
    qsa(".account-nav button").forEach(x => x.classList.remove("active"));
    qsa(".account-panel").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    qs("#panel-" + b.dataset.panel).classList.add("active");
  }));

  if (location.hash === "#orders") qs('[data-panel="orders"]')?.click();
}

/* ---------- Newsletter ---------- */
function initNewsletter() {
  qsa(".newsletter form").forEach(f => f.addEventListener("submit", e => {
    e.preventDefault();
    const input = f.querySelector("input");
    if (!/^\S+@\S+\.\S+$/.test(input.value)) { toast("Please enter a valid email address", "error"); return; }
    input.value = "";
    toast("You're on the list! Check your inbox for 15% off ✨", "success");
  }));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initNewsletter();
  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "shop") initShop();
  if (page === "product") initProduct();
  if (page === "cart") renderCartPage();
  if (page === "checkout") initCheckout();
  if (page === "confirmation") initConfirmation();
  if (page === "wishlist") renderWishlistPage();
  if (page === "account") initAccount();
});
