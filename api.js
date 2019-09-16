function httpGet(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send(null);
  return JSON.parse(xhr.responseText);
}

const data = httpGet("https://www.mocky.io/v2/5d6fb6b1310000f89166087b");

var vagasAtivas = data.vagas.filter(function(vaga) {
  return vaga.ativa == true;
});

var vagasTratadas = vagasAtivas.map(function(vaga) {
  if (!vaga.hasOwnProperty("localizacao")) {
    vaga["localizacao"] = "Remoto";
  }
  return vaga;
});

function stringLocalizacao(vaga) {
  if (vaga["localizacao"] == "Remoto") {
    return "Remoto";
  } else {
    bairro = vaga.localizacao.bairro;
    cidade = vaga.localizacao.cidade;
    pais = vaga.localizacao.pais;
    return bairro + " - " + cidade + ", " + pais;
  }
}

function inserirVaga(vaga) {
  var liElement = document.createElement("li");
  var cargo = document.createTextNode(vaga.cargo);
  liElement.appendChild(cargo);
  var cargosElement = document.querySelector("#cargos");
  cargosElement.appendChild(liElement);

  var liElement = document.createElement("li");
  var localizacao = document.createTextNode(stringLocalizacao(vaga));
  liElement.appendChild(localizacao);
  var localizacoesElement = document.querySelector("#localizacoes");
  localizacoesElement.appendChild(liElement);
}

vagasTratadas.forEach(inserirVaga);
