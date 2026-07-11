// Carrinho da Anbrujomi — salvo no navegador via localStorage.
// Configurar antes de publicar: número do WhatsApp com DDI+DDD, ex.: 5511999999999
var WHATSAPP = "5500000000000";

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
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function render() {
  var lista = document.getElementById("lista");
  if (!lista) return; // não estamos na página do carrinho

  var itens = lerCarrinho();
  lista.innerHTML = "";

  if (itens.length === 0) {
    lista.innerHTML = '<li class="vazio">Seu carrinho está vazio. Volte à página de produtos para adicionar itens.</li>';
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
    menos.setAttribute("aria-label", "Diminuir quantidade de " + item.nome);
    menos.onclick = function () { alterarQtd(item.nome, -1); };
    var num = document.createElement("span");
    num.textContent = item.qtd;
    var mais = document.createElement("button");
    mais.textContent = "+";
    mais.setAttribute("aria-label", "Aumentar quantidade de " + item.nome);
    mais.onclick = function () { alterarQtd(item.nome, 1); };
    qtd.appendChild(menos);
    qtd.appendChild(num);
    qtd.appendChild(mais);

    var valor = document.createElement("span");
    valor.className = "valor";
    valor.textContent = "R$ " + formatar(item.preco * item.qtd);

    li.appendChild(nome);
    li.appendChild(qtd);
    li.appendChild(valor);
    lista.appendChild(li);
  });

  var frete = itens.length > 0 ? Number(document.getElementById("estado").value) : 0;
  var total = subtotal + frete;

  document.getElementById("subtotal").textContent = formatar(subtotal);
  document.getElementById("frete").textContent = formatar(frete);
  document.getElementById("total").textContent = formatar(total);

  var zap = document.getElementById("zap");
  if (zap) {
    var linhas = itens.map(function (i) {
      return "- " + i.qtd + "x " + i.nome + " (R$ " + formatar(i.preco * i.qtd) + ")";
    });
    var msg = "Olá! Quero finalizar meu pedido:\n" + linhas.join("\n") +
      "\nFrete: R$ " + formatar(frete) +
      "\nTotal: R$ " + formatar(total);
    zap.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
  }
}

atualizarBadge();
render();
