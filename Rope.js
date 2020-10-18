class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght:10
        }
        this.bodyB=bodyB;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
   
    display(){
    if(this.chain.bodyA!==null){
    strokeWeigth(4);
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
   line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
    }
    fly(){
        this.chain.bodyA=null;
    }
}