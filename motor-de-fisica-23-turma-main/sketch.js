
//motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;


//variaveis
var engine;
var world;

var solo, parado;

var bola;
var bola002;
var bola003;

function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;
    

    //CRIAR CORPOS
    //1º passo: definir as props do corpo


    //2º passo: criar o corpo

    //3º passo: adicionar no mundo


    //props da bola
 prop1={
    frictionAir:0.9
}
prop2={
    frictionAir:0.001
}
 soloprop={
 isStatic:true
}
    solo = Bodies.rectangle(300,390,600,20,soloprop);
    //cria o corpo da bola
    bola = Bodies.circle(300,100,30,prop1);

    bola002 = Bodies.circle(340,100,30,prop2);

    bola003 = Bodies.circle(460,100,69);
    //adiciona ela no mundo
    World.add(mundo,bola);

    World.add(mundo,bola002);

    World.add(mundo,bola003);

    World.add(mundo,solo);


    //define o tamanho da ellipse pelo raio
    ellipseMode(RADIUS)
    //posiciona o retângulo a partir do centro
    rectMode(CENTER);
}


function draw() {
    background("cyan");
    
    //atualizar o motor
    Engine.update(motor);

    //colore o solo de marrom
    fill(0)
    //desenha um retângulo na posição do solo
    rect (solo.position.x,solo.position.y,600,20);

    //define a cor do desenho
   
    //desenha uma ellipse na posição da bola
    fill ("lime")
    ellipse(bola.position.x,bola.position.y,30);
    fill ("blue")
    ellipse(bola002.position.x,bola002.position.y,30);
    fill ("red")
    ellipse(bola003.position.x,bola003.position.y,69);



}
