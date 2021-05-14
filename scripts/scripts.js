// Atribuindo elementos do HTML a variaveis

let minhaDiv = document.getElementById("textoAqui");
let body = document.getElementsByTagName("body")[0];
let variavelContador = document.getElementById("contador");

// Definindo a lista de palavras
let minhaListinha = [
  "duração",
  "presente",
  "passado",
  "futuro",
  "período",
  "ciclo",
  "etapa",
  "semanas",
  "dias",
  "horas",
  "clima",
  "abismo",
  "acidez",
  "acuado",
  "adeus",
  "importante",
  "problema",
  "necessidade",
  "processo",
  "objetivo",
  "desenvolvimento",
  "realizar",
  "conhecimento",
  "relação",
  "trabalho",
  "sentimentos",
  "máscara",
  "escolha",
  "confiança",
  "refazer",
  "reconfigurar",
  "lembrar",
  "esquecer",
  "pesquise",
  "descubra",
];

const listaDeFontes = ['minhafonteAnton', 'minhafonteAntonio', 'minhafonteFreckle', 'minhafonteJomhuria', 'minhafonteLuckiest', 'minhafonteNew', 'minhafonteOpen', 'minhafonteOrelega', 'minhafonteReleway', 'minhafonteUnlock'];


// Função para gerar numeros aleatorios (de 0 até o limite maximo -1)
function geraNum(limiteMaximo) {
  return Math.floor(Math.random() * limiteMaximo);
}

// Gerar <span>
function geraSpan() {
  return `
  <span 
  class="${listaDeFontes[geraNum(listaDeFontes.length)]}"
  style="
    position: absolute;
    top: ${geraNum(100)}vh;
    left: ${geraNum(100)}vw; font-size: ${geraNum(50)}px;
    color: #${geraNum(16777215).toString(16)};
  ">${minhaListinha[geraNum(35)]}</span>`;
}

// Adiciona um <span> gerado dentro do body do HTML
function addElemento() {
  minhaDiv.innerHTML += geraSpan();
}

// Pega o valor atual do contador e subrai se for < 0
function subtraiContador() {
  let valorQueJaTem = Number(variavelContador.innerText);
  if (valorQueJaTem > 0) {
    variavelContador.innerText = valorQueJaTem - 1;
  }
}

// Captura o evento de click (onclick) no body do html
body.onclick = () => {
  addElemento();
  addElemento();
  addElemento();
  addElemento();
  subtraiContador();
};

//Criando uma variavel para fonte
//const listaDeFontes = ['minhafonteAnton', minhafonteAntonio];

//let elemento = '<span class= "$`{listaDeFontes[geraNum(listaDeFonte.legth)]}">