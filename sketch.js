const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(145,400,50,50);
    box2 = new Box(270,211,50,50);
    box3 = new Box(208,90,50,50);
    box4 = new Box(150,300,50,50);
    box5 = new Box(369,330,50,50);
    ground=new Ground(200,390,600,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();

}