let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@rasinformática");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de jogar futebol?");
  campoAventura = createCheckbox("Gosta de futebol?");
}

function draw() {
  background("#8BC34A");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(6, 10, 15));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Gabriel ";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Github-Gabriel-1003";          
        } else{
         return "tem muitos jogadores bons";
        }
      } else {
        if (gostaDeFantasia) {
          return "mais outros nem tanto";
        } else {
          return "por falta de treino";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "@rasinformática";
    } else {
      return "todos tem seu inicio";
    }
  }
}
