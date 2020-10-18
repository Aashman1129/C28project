class Stone{
 constructor(){
var options={
isStatic:false,
restitution:0,
frction:1,
density:1.2
 }
 this.bodybottom= Bodies.rectangle(350,450,200,20,options);
  this.width1=200;
  this.height1=20;
  
  this.bodyleft= Bodies.rectangle(230,400,20,100,options);
  this.width2=20;
  this.height2=100;
      
  this.bodyright= Bodies.rectangle(370,500,20,100,options);
  this.width3=20;
  this.height3=100;

this.image=loadImage("stone.png");

World.add(world,this.bodybottom);
World.add(world,this.bodyleft);
World.add(world,this.bodyright);


 }
  display(){
    var bottom=this.bodybottom.position;
    var stoneLeft=this.bodyleft.position;
    var stoneRight=this.bodyright.position;
    imageMode(CENTER);

    image(this.image,bottom.x,bottom.y,40,30);
  }
 }   
