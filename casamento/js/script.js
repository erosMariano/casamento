const produtos = [
  {
    "titulo": "Aparelho de Jantar e Chá 30 Peças Ryo Maresia",
    "url": "https://www.oxfordporcelanas.com.br/ryo-maresia/p?pecas=30&quantidade=1&giftlist=true",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Aparelho de Jantar e Chá 30 Peças Ryo Maresia"
  },
  {
    "titulo": "Boleira Flat 26 Cm Chuvisco",
    "url": "https://www.oxfordporcelanas.com.br/boleira-flat-chuvisco/p?pecas=1&quantidade=1&giftlist=true&gr=576",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Boleira Flat 26 Cm Chuvisco"
  },
  {
    "titulo": "Conjunto de 3 Travessas Refratária Bake Cool Grey",
    "url": "https://www.oxfordporcelanas.com.br/conjunto-3-travessas-bake-cool-grey/p?pecas=3&quantidade=1&giftlist=true&gr=576",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Conjunto de 3 Travessas Refratária Bake Cool Grey"
  },
  {
    "titulo": "Batedeira Planetária Oster OBAT640 4L 800W - Preto",
    "url": "https://www.magazineluiza.com.br/batedeira-planetaria-oster-obat640-4l-800w-preto/p/kfb85d725j/ep/btdc/",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Batedeira Planetária Oster OBAT640 4L 800W - Preto"
  },
  {
    "titulo": "Cooktop 4 Bocas Brastemp Preto a Gás GLP - Automático Grades Piatina Ative BDD61AE",
    "url": "https://www.magazineluiza.com.br/cooktop-4-bocas-brastemp-preto-a-gas-glp-automatico-grades-piatina-ative-bdd61ae/p/201098400/ed/ck4b/",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Cooktop 4 Bocas Brastemp Preto a Gás GLP - Automático Grades Piatina Ative BDD61AE"
  },
  {
    "titulo": "Fritadeira Elétrica Sem Óleo Oster 1500W 4,6 Litros 220V OFRT520-220",
    "url": "https://www.magazineluiza.com.br/fritadeira-eletrica-sem-oleo-oster-1500w-46-litros-220v-ofrt520-220/p/hf2jfc66e8/ep/efso/",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Fritadeira Elétrica Sem Óleo Oster 1500W 4,6 Litros 220V OFRT520-220"
  },
  {
    "titulo": "Jogo de Banho 5 Peças Fio Penteado Lumina Ivory/Ferrugem",
    "url": "https://www.karsten.com.br/jogo-de-banho-5-pecas-fio-penteado-lumina-ivoryferrugem-3973052/p",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Jogo de Banho 5 Peças Fio Penteado Lumina Ivory/Ferrugem"
  },
  {
    "titulo": "Colchão indiana Molas Ensacadas 28cm American sleep - Queen Size | 1,58 x 1,98 m",
    "url": "https://www.sleephouse.com.br/col-indiana-ens-28cm---american-sleep-078-x-188-m-am0561_1045/p?idsku=47068&utm_source=blue&utm_medium=rev&utm_campaign=retargetingblue",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Colchão indiana Molas Ensacadas 28cm American sleep - Queen Size | 1,58 x 1,98 m"
  },
  {
    "titulo": "Jogo de 6 Copos Conjunto de Peças de Vidro Transparente Linha 423ml para Suco e Água",
    "url": "https://www.amazon.com.br/gp/product/B0DJ6DRH9J/ref=ox_sc_act_title_1?smid=A2EP5EALWX03LX&psc=1",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Jogo de 6 Copos Conjunto de Peças de Vidro Transparente Linha 423ml para Suco e Água"
  },
  {
    "titulo": "Tramontina JOGO FACAS INOX 4PC PLENUS PRE, Preto",
    "url": "https://www.amazon.com.br/gp/product/B09XFD2YMF/ref=ox_sc_act_title_2?smid=A1ZZFT5FULY4LN&psc=1",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Tramontina JOGO FACAS INOX 4PC PLENUS PRE, Preto"
  },
  {
    "titulo": "Faqueiro em Aço Inox Búzios com 24 Peças",
    "url": "https://www.amazon.com.br/gp/product/B0789M146B/ref=ox_sc_act_title_3?smid=A2RIPBD5K76UDS&psc=1",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Faqueiro em Aço Inox Búzios com 24 Peças"
  },
  {
    "titulo": "Oster Ferro de Passar a Vapor Oster Antiaderente Verde, GCSTBS5002, 127V",
    "url": "https://www.amazon.com.br/gp/product/B09LNKQYND/ref=ox_sc_act_title_4?smid=A1LG6OVV9I6PPI&th=1",
    "imagem": "img/whenwhere/produto3.png",
    "descricao": "Oster Ferro de Passar a Vapor Oster Antiaderente Verde, GCSTBS5002, 127V"
  }
]


const container = document.querySelector(".container-present");

function criarDivItem(produto) {
  return `
    <div class="item box-shadow-extra-large">
      <div class="img">
        <img src="${produto.imagem}" class="img-fluid" alt="${produto.titulo}" />
      </div>
      <div class="flex-column cont">
        <div class="cont-hover">
          <div class="title">${produto.titulo}</div>
          <p>${produto.descricao}</p>
          <a href="${produto.url}" class="button_present">
            <i class="fa-light fa-paper-plane"></i> Send message
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderizarProdutos(produtos) {
  const totalProdutos = produtos.length;
  let currentDiv = null;

  produtos.forEach((produto, index) => {
    if (index % 3 === 0) {
      // Cria um novo container para cada grupo de 3 produtos
      currentDiv = document.createElement("div");
      currentDiv.classList.add("col-12", "when-where");
      container.appendChild(currentDiv);
    }

    // Adiciona o item atual à div corrente
    if (currentDiv) {
      currentDiv.innerHTML += criarDivItem(produto);
    }
  });
}

// Renderiza os produtos na página
renderizarProdutos(produtos);