// Bliss Glow cart — stored in the browser via localStorage.
// Configure before launch: WhatsApp number with country code, e.g. 447700900000
var WHATSAPP = "440000000000";
var FREE_DELIVERY_OVER = 40;
var STANDARD_DELIVERY = 3.99;

function lerCarrinho() {
  try {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
  } catch (e) {
    return [];
  }
}

function salvarCarrinho(itens) {
  localStorage.setItem("carrinho", JSON.stringify(itens));
  atualizarBadge();
}

function atualizarBadge() {
  var badge = document.getElementById("badge");
  if (!badge) return;
  var total = lerCarrinho().reduce(function (s, i) { return s + i.qtd; }, 0);
  badge.textContent = total;
}

function add(nome, preco) {
  var itens = lerCarrinho();
  var existente = itens.find(function (i) { return i.nome === nome; });
  if (existente) {
    existente.qtd += 1;
  } else {
    itens.push({ nome: nome, preco: preco, qtd: 1 });
  }
  salvarCarrinho(itens);
}

function alterarQtd(nome, delta) {
  var itens = lerCarrinho();
  var item = itens.find(function (i) { return i.nome === nome; });
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) {
    itens = itens.filter(function (i) { return i.nome !== nome; });
  }
  salvarCarrinho(itens);
  render();
}

function formatar(valor) {
  return valor.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function render() {
  var lista = document.getElementById("lista");
  if (!lista) return; // not on the cart page

  var itens = lerCarrinho();
  lista.innerHTML = "";

  if (itens.length === 0) {
    lista.innerHTML = '<li class="vazio">Your cart is empty. Head back to the shop to add products.</li>';
  }

  var subtotal = 0;
  itens.forEach(function (item) {
    subtotal += item.preco * item.qtd;
    var li = document.createElement("li");

    var nome = document.createElement("span");
    nome.className = "nome";
    nome.textContent = item.nome;

    var qtd = document.createElement("span");
    qtd.className = "qtd";
    var menos = document.createElement("button");
    menos.textContent = "−";
    menos.setAttribute("aria-label", "Decrease quantity of " + item.nome);
    menos.onclick = function () { alterarQtd(item.nome, -1); };
    var num = document.createElement("span");
    num.textContent = item.qtd;
    var mais = document.createElement("button");
    mais.textContent = "+";
    mais.setAttribute("aria-label", "Increase quantity of " + item.nome);
    mais.onclick = function () { alterarQtd(item.nome, 1); };
    qtd.appendChild(menos);
    qtd.appendChild(num);
    qtd.appendChild(mais);

    var valor = document.createElement("span");
    valor.className = "valor";
    valor.textContent = "£" + formatar(item.preco * item.qtd);

    li.appendChild(nome);
    li.appendChild(qtd);
    li.appendChild(valor);
    lista.appendChild(li);
  });

  var seletor = document.getElementById("estado");
  var frete = itens.length > 0 ? Number(seletor.value) : 0;

  // Free standard delivery over the threshold
  var nota = document.getElementById("nota-frete");
  var freteGratis = subtotal >= FREE_DELIVERY_OVER && Number(seletor.value) === STANDARD_DELIVERY;
  if (freteGratis) frete = 0;
  if (nota) {
    if (itens.length === 0) {
      nota.textContent = "";
    } else if (freteGratis) {
      nota.textContent = "You've unlocked free standard delivery!";
    } else if (subtotal < FREE_DELIVERY_OVER) {
      nota.textContent = "Spend £" + formatar(FREE_DELIVERY_OVER - subtotal) + " more for free standard delivery.";
    } else {
      nota.textContent = "";
    }
  }

  var total = subtotal + frete;

  document.getElementById("subtotal").textContent = formatar(subtotal);
  document.getElementById("frete").textContent = formatar(frete);
  document.getElementById("total").textContent = formatar(total);

  var zap = document.getElementById("zap");
  if (zap) {
    var linhas = itens.map(function (i) {
      return "- " + i.qtd + "x " + i.nome + " (£" + formatar(i.preco * i.qtd) + ")";
    });
    var msg = "Hi! I'd like to place an order:\n" + linhas.join("\n") +
      "\nDelivery: £" + formatar(frete) +
      "\nTotal: £" + formatar(total);
    zap.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
  }
}

atualizarBadge();
render();
