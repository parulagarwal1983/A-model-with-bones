const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
   
    createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,30);

    head = new Head(width/4,height/2-20,40,40);
    body1 = new Body(width/4,height/2,60,80);
    handL = new leftHand(width/4-20,height/2,40,130);
    handR = new rightHand(width/4+20,height/2,40,130);
    low = new LowerBody(width/4,height/2+20,60,30);
    legL = new leftLeg(width/4-10,height/2+40,40,130);
    legR = new Leg(width/4+10,height/2+40,40,130);

    slingshot = new SlingShot(low.body,legL.body);
}

function draw(){

    background("black");

    Engine.update(engine);

    ground.display();

    head.display();
    body1.display();
    handL.display();
    handR.display();
    low.display();
    legL.display();
    legR.display();

    slingshot.display();
}