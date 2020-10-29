
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone, mango;
function preload()
{
backgroundImg	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone(350,400,30,30);
mango=new Mango()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  mango.display();
  drawSprites();
 
}
function mouseReleased(){
	stone.fly();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

