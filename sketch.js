
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree;
var stone;
var boy;
var mango1,mago2,mango3,mango4,mango5;
var rope;
function preload()
{

}

function setup() {
    createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,570,1500,50);
	tree= new Tree();
	stone=new Stone();
  boy=new Boy();
mango1=new Mango(750,300,5);
mango2=new Mango(850,350,5);
mango3=new Mango(730,360,5);
mango4=new Mango(800,400,5);
mango5=new Mango(700,400,5);
rope=new Chain(boy.body,stone.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  stone.display();
  boy.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
rope.display();

detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
detectcollision(stone,mango5);



  drawSprites();
 
}
function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y.mangoBodyPoaition.x,mango.Body.position.y)
  if(distance<-lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
  }

}



