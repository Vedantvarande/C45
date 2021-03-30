const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ball,paddle1,paddle2;
var screw1,screw2;

function preload()
{

}

function setup()
{
    createCanvas(450,700);

    engine = Engine.create();
    world = engine.world;
    
    ball = new Ball(400,550);
    paddle1 = new Paddle(100,670,130,40,1);
    screw1 = new Screw(paddle1.body,{x:40,y:670},1,0,-65);
    paddle2 = new Paddle(305,670,130,40,0);
    screw2 = new Screw(paddle2.body,{x:365,y:670},1,0,+65);
}

function draw()
{
    background("black");
    Engine.update(engine);

    ball.display();
    paddle1.display();
    paddle2.display();

    fill("white");
    textAlign(CENTER);
    textSize(30);
    text("FANTASTIC PINBALL",225,40);
    textSize(15);
    text("HIT SPACE TO RESET",225,60);
}