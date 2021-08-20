const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bouncyBall,hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    plane = new Plane(600,height,1200,20)
    bouncyBall=new BouncyBall(900,550,70);
    bouncyBall2=new BouncyBall(800,550,70);
    bouncyBall3=new BouncyBall(700,550,70);
    bouncyBall4=new BouncyBall(850,500,70);
    hammer = new Hammer(10,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    hammer.display();
    plane.display();
   
    bouncyBall.display();
    bouncyBall2.display();
    bouncyBall3.display();
    bouncyBall4.display();
}
