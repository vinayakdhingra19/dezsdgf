const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,log,chain;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ball1 = new Ellipse(400,200,30);
  log = new Log(400,100,400,50);
  chain = new Chain(log.body,ball1.body);
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);

  ball1.display();
  log.display();
  chain.display();

}

function keyPressed(){

  if(keyCode === 32){
    Matter.Body.setPosition(ball1.body,{x: mouseX, y:mouseY});
  }
}