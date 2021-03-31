//Create variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	, paper ;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	//create engine
	engine = Engine.create();
	world = engine.world;
	
	//Create ground , dustbin and paper
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,450,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  //Display the objects
  groundObject.display();
  dustbinObj.display();
  paper.display();

}

//Add the function to throw the paper into the bin
function keyPressed(){
	if (keyCode== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-155});
	}
}

