class SlingShot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
                this.bodyA = bodyA;
                this.bodyB = bodyB;
                strokeWeight(3);
                line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
            }
           
            
}