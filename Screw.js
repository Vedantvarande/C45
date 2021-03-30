class Screw
{
    constructor(bodyA,pointB,length,stiffness,offset)
    {
        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
            length:length,
            stiffness:stiffness,
            pointA:{x:offset,y:0}
        }
        this.screw = Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.screw);        
    }
    display()
    {
        stroke("yellow");
        strokeWeight(4);
        var pointA = this.screw.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}