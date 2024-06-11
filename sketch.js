//variaveis da bolinha
let xbolinha = 100;
let ybolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;
let raquetecomprimento = 10;
let raquetealtura = 90;

//variaveis da raquete
let xraquete = 5;
let yraquete = 150;

//variáveis do oponente
let xraqueteoponente = 585;
let yraqueteoponente = 150;
let velocidadeyoponente;

let colidiu = false;

//placar do jogo
let meupontos = 0;
let pontosoponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0); 
  mostrabolinha();
  movimentabolinha();
  verificacolisaoborda();
  mostraraquete(xraquete, yraquete);
  movimentaMinharaquete();
  //verificacolisaoraquete();
  verificaColisaoraquete(xraquete, yraquete);
  mostraraqueteoponente(xraqueteoponente, yraqueteoponente);
  movimentaraqueteoponente();
  verificaColisaoraquete(xraqueteoponente, yraqueteoponente);
  incluiplacar();
  marcaponto();
}
  
function mostrabolinha(){ 
  circle(xbolinha, ybolinha, diametro);
}
function movimentabolinha() {
   xbolinha += velocidadexbolinha;
   ybolinha += velocidadeybolinha;
}
    
function verificacolisaoborda() {
    if (xbolinha + raio > width || xbolinha - raio < 0) {
        velocidadexbolinha *= -1;
    }
    if (ybolinha + raio > height || ybolinha - raio < 0) {
        velocidadeybolinha *= -1;
    }
}

function mostraraquete(){
  rect(xraquete, yraquete, raquetecomprimento, raquetealtura);
}

function movimentaMinharaquete(){
  if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
}
 if (keyIsDown(DOWN_ARROW)){
   yraquete += 10;
 }
}
 
function verificacolisaoraquete() {
    if (xbolinha - raio < xraquete + raquetecomprimento && ybolinha - raio < yraquete + raquetealtura && ybolinha + raio > yraquete) {
        velocidadexbolinha *= -1;
       raquetada.play();
  }
}
    
function verificaColisaoraquete(x, y) {
    colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
    if (colidiu) {
        velocidadexbolinha *= -1;
       raquetada.play();
    }
}

function mostraraqueteoponente() {
    rect(xraqueteoponente, yraqueteoponente, raquetecomprimento, raquetealtura);
}

function movimentaraqueteoponente(){
    if (keyIsDown(87)){
        yraqueteoponente -= 10;
    }
    if (keyIsDown(83)){
        yraqueteoponente += 10;
    }

}

function incluiplacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meupontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosoponente, 470, 26);
}


function marcaponto() {
    if (xbolinha > 590) {
        meupontos += 1;
      ponto.play();
    }
    if (xbolinha < 10) {
        pontosoponente += 1;
       ponto.play();
    }
}



