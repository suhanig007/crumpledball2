// class Dustbiin {
//     constructor(){
        
    
      
    
// 	// leftrect1=createSprite(300,610,20,100)
// 	// leftrect1.shapeColor="green"
// 	// leftbody=Bodies.rectangle(320,610,20,100,{isStatic:true})
// 	// World.add(world,leftbody)
	
// 	// rightrect1=createSprite(500,610,20,100)
// 	// rightrect1.shapeColor="green"
// 	// rightbody=Bodies.rectangle(480,610,20,100,{isStatic:true})
// 	// World.add(world,rightbody)
	
// 	// bottomrect1=createSprite(400,650,200,20)
// 	// bottomrect1.shapeColor="green"
// 	// bottombody=Bodies.rectangle(400,635,200,20,{isStatic:true})
// 	// World.add(world,bottombody)
//     // }
// }
class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
        this.dustbin1=loadImage("dustbingreen.png")
	     
	}
	display()
	//        image(this.dustbin1,1200,650)
	{
		 
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;
            
	

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			// rect(0,0,this.dustbinWidth, this.wallThickness);
			imageMode (CENTER)
			image(this.dustbin1,0,-this.dustbinHeight/2,this.dustbinWidth+40,this.dustbinHeight+30)
			pop()
			
		
		}

}
