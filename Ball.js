class Ball
{
    constructor(x,y)
    {
        var options =
        {
            restitution: 0,
            airFriction: 0,
            density: 0.006
        }
        this.body = Bodies.circle(x,y,10,options);
        this.width = 10;
        World.add(world,this.body);
    }
    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red");
        circle(0,0,this.width);
        pop();
    }
}