class Ellipse{
    constructor(x,y,radius){

    this.body = Bodies.circle(x,y,radius);
    World.add(world, this.body);
    this.width = radius;
}

    display(){
    
        push();
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        translate(pos.x,pos.y);
        ellipse(pos.x,pos.y,this.width);
        pop();
    
    }
    
    


}


