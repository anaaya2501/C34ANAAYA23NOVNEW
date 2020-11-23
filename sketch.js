const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2;
var box3,box,box5,box6;
var box7,box8;
var ball;
var roof;
var rope1;



function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    // creating bodies

    ground = new Ground(600,height,1200,20);
    box1 = new Box(200,100,100,100);
    box2 = new Box(200,200,100,100);
    box3 = new Box(200,200,100,100);
    box4 = new Box(200,400,100,100);
    box5 = new Box(300,100,100,100);
    box6 = new Box(300,200,100,100);
    box7 = new Box(300,200,100,100);
    box8 = new Box(300,400,100,100);
    ball = new Ball(600,100,50);
    roof = new Ground(600,50,400,20);
    rope1 = new Rope(ball.body,{x:600,y:50})
}

function draw(){
background("red");
Engine.update(engine);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
ground.display();
ball.display();
roof.display();
rope1.display();
       
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}