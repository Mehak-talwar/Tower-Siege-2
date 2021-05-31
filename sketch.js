const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var ground;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    stand1 = new Ground(500,300,200,10);
    stand2 = new Ground(900,200,200,10);

    box1 = new Box(420,280,30,30);
    box2 = new Box(450,280,30,30);
    box3 = new Box(480,280,30,30);
    box4 = new Box(510,280,30,30);
    box5 = new Box(540,280,30,30);
    box6 = new Box(570,280,30,30);

    box7 = new Box(450,250,30,30);
    box8 = new Box(480,250,30,30);
    box9 = new Box(510,250,30,30);
    box10 = new Box(540,250,30,30);

    box11 = new Box(480,220,30,30);
    box12 = new Box(510,220,30,30);

    box13 = new Box(495,190,30,30);

    box14 = new Box(820,180,30,30);
    box15 = new Box(850,180,30,30);
    box16 = new Box(880,180,30,30);
    box17 = new Box(910,180,30,30);
    box18 = new Box(940,180,30,30);
    box19 = new Box(970,180,30,30);

    box20 = new Box(850,150,30,30);
    box21 = new Box(880,150,30,30);
    box22 = new Box(910,150,30,30);
    box23 = new Box(940,150,30,30);

    box24 = new Box(880,120,30,30);
    box25 = new Box(910,120,30,30);

    box26 = new Box(895,90,30,30);

    block = new Block(200,200,60,60);

    slingshot = new SlingShot(block.body,{x:200 , y:200});
}

function draw(){
    background("white");
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display()
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    block.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(block.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(block.body);
    }
}