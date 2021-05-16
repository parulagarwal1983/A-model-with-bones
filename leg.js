class Leg{
        constructor(x,y,width,height){
            var options ={
                isStatic : false,
                restitution : 0,
                friction : 1.0,
                density : 1.0
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.image = loadImage("leg.png");
            World.add(world,this.body);
        }
        display(){
            push();
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
    }