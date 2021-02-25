const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies; 

function setup() {
  createCanvas(800,400);
  //create engine
  abEngine=Engine.create();
  //world of abEngine
  abWorld=abEngine.world;
  //create the ground using bodies
  ground = Bodies.rectangle(400,380,800,20,{isStatic:true});
  //add body to world
  World.add(abWorld,ground);

  ball=Bodies.circle(400,200,40,{restitution:0.1});
  World.add(abWorld,ball);
}

function draw() {
  background(0); 
  //update the engine 
  Engine.update(abEngine);
  // render the body using rect
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}