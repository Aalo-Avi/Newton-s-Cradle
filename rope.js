class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);   
    }

    display()
    {
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;

        strokeWeight(3);
        stroke("lightBlue")
        line(posA.x,posA.y,posB.x,posB.y);
    }
}