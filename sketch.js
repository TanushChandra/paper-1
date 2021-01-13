
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Dustbin(400,690,800,20);
	bin1 = new Dustbin(655,675,100,10);
	bin2 = new Dustbin(700,640,10,80);
	bin3 = new Dustbin(611,640,10,80);
	ball1 = new Ball(115,340,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(mouseX);
  console.log(mouseY);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ball1.display();
  function keyPressed(){
	  if(keyCode === DOWN_ARROW){
		  Matter.body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	  }
  }
  drawSprites();
 
}



