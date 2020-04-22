var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
// var option={
// 	restitution:1
// }
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
//  if(keyDown="a") {
// 	 console.log("hi")
  
//  }

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	rect(ground.x,ground.y,ground.width,ground,height)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===DOWN_ARROW){
		// console.log("hi");
		// ellipseMode(RADIUS);
		// ellipse(packageBody.position.x,packageBody.position.y ,5,5,{restituion:1, isStatic:false})
	Matter.Body.setStatic(packageBody,false)
	}
}


