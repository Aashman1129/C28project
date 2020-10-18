class Boy{
constructor(){
var options={
isStatc:true
}
this.bodybottom= Bodies.rectangle(200,350,50,20,options);
  this.width1=50;
  this.height1=20;
  
  this.bodyleft= Bodies.rectangle(150,350,20,100,options);
  this.width2=20;
  this.height2=100;
      
  this.bodyright= Bodies.rectangle(250,350,20,100,options);
  this.width3=20;
  this.height3=100;

  this.image=loadImage("boy.png");

World.add(world,this.bodybottom);
World.add(world,this.bodyleft);
World.add(world,this.bodyright);
}
display(){
    var bottom=this.bodybottom.position;
    var boyLeft=this.bodyleft.position;
    var boyRight=this.bodyright.position;
    imageMode(CENTER);
    
    image(this.image,bottom.x,bottom.y,100,160);
}
}

