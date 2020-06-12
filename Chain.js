class Chain{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.07,
            length: 24,
           
        }
        
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
     
    display(){
        strokeWeight(4);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
        fill("brown");
    }
}