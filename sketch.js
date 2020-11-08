var paper, paperimg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var world;

function preload() {

}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	
	
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new Paper(200,450,70);
ground = Bodies.rectangle(width / 2, 670, width, 20, { isStatic: true });
    World.add(world, ground);
   
	

	

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(260);
 
  
  paperObject.display();
  //console.log(paperObject)
 // groundObject.display();
 push ()
 translate(ground.position.x,ground.position.y);
 rotate(ground.angle)
  rect(0,0,width,20)
 pop ()
 dustbinObj.display();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:300,y:-300});
    
  	}
}

