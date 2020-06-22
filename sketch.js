var helicopterIMG, helicopterSprite, packageSprite,packageIMG,red1,red1sprite,red2,red2sprite,red3,red3sprite;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400, 700-35, 800,10);
	groundSprite.shapeColor=color(255)

	red1sprite=createSprite(400,640,200,20);
	red1sprite.shapeColor="red";

	red2sprite=createSprite(300,550,20,200);
	red2sprite.shapeColor="red";

	red3sprite=createSprite(500,560,20,200);
	red3sprite.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
	 World.add(world, ground);
	red1=Bodies.rectangle(400,640,200,20, {isStatic:true} ) 
		 World.add(world, red1);
	red2=Bodies.rectangle(300,550,20,200,{isStatic:true});
		World.add(world,red2);	 
	red3=Bodies.rectangle(500,560,20,200);
		World.add(world,red3);	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  red1sprite.y=red1.position.y;
  red1sprite.x=red1.position.x;
  red2sprite.x=red2.position.x;
  red2sprite.y=red2.position.y;
  red3sprite.x=red3.position.x;
  red3sprite.y=red3.position.y;
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
 
  }

}


