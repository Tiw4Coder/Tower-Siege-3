const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, sling, box;
var canvas;
var score = 0;




function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,380,820,25);
  ball = new Ball(100,200,30);
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(385,235,30,40);
  box4 = new Box(420,105,30,40);
  box5 = new Box(450,105,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  box9 = new Box(390,235,30,40);
  box10 = new Box(435,80,30,40);
  platform = new Platform(350,250,120,20);
  platform2 = new Platform(435,115,120,20)
  sling = new Slingshot(ball.body,{x:100, y:50})

  

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  text("SCORE:"+score,730,40);
  ground.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box10.display();
  box10.score();
  platform.display();
  platform2.display();
  ball.display();
  sling.display();

}

function mouseDragged() {
Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  sling.fly()
}

function keyPressed() {
  if(keyCode===32) {
    sling.attach(ball.body)
  }
}