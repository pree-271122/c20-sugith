//3 objects Engine , World, Bodies
//engine create the physic engine eg: galaxy
const Engine = Matter.Engine;
//create artificial world to add bodies eg: earth
const World = Matter.World;
//create physical property eg: human
const Bodies = Matter.Bodies;

//to call the physic engine into setup()
var engine;
var world;
var ground;
var ball;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world=engine.world;

  var groundoptions={
    //gravity
    isStatic : true
  }

  ground = Bodies.rectangle(200, 390, 400, 20,groundoptions);
  World.add(world,ground);

  var balloptions={
    restitution:0.8,
    friction :1.0
  }

  ball = Bodies.circle(200, 200,  20,balloptions);
  World.add(world,ball);
  

}

function draw() 
{
  background(51);
  Engine.update(engine);

  push ();
  rectMode(CENTER);
  fill ("red");
  rect(ground.position.x , ground.position.y,400,20);
  pop ();

  fill ("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);



 
}

