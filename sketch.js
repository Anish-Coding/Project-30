const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	
	hexagon = new Hexagon(100, 650, 10);
	slingshot = new Slingshot(hexagon.body, {x:100, y:400});

	//This is for the 4 layer (1 top + 3 layer) tower
	//1st layer
	block1 = new Block1(480,390,40,60);  
	
	//2nd layer
	block2 = new Block2(440,420,40,60);  
	block3 = new Block2(480,420,40,60);  
	block4 = new Block4(520,420,40,60);  
	
	//3rd layer
	block5 = new Block3(400,480,40,60);  
	block6 = new Block3(440,480,40,60);  
	block7 = new Block3(480,480,40,60);  
	block8 = new Block3(520,480,40,60);  
	block9 = new Block3(560,480,40,60);

	//4th layer
	block10 = new Block4(370,530,40,60);  
	block11 = new Block4(410,530,40,60);  
	block12 = new Block4(440,530,40,60);  
	block13 = new Block4(480,530,40,60);  
	block14 = new Block4(530,530,40,60);  
	block15 = new Block4(570,530,40,60);  
	block16 = new Block4(600,530,40,60);

	//This is the second tower
	//1st layer
	block17 = new Block3(900,240,40,60);  

	//2nd layer
	block18 = new Block2(860,270,40,60);  
	block19 = new Block2(900,270,40,60);  
	block20 = new Block2(940,270,40,60);

	//3rd layer
	block21 = new Block4(820,300,40,60);  
	block22 = new Block4(860,300,40,60);  
	block23 = new Block4(900,300,40,60);
 	block24 = new Block4(940,300,40,60);  
	block25 = new Block4(980,300,40,60);

	//Ground and bases of tower
    ground = new Ground(600,695,1200,20);
	base1 = new Ground(900,400,250,10);
	base2 = new Ground(480,600,350,10);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	textSize(30);
	text("Press space for another chance :)", 500,100)

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();
	block17.display();
	block18.display();
	block19.display();
	block20.display();
	block21.display();
	block22.display();
	block23.display();
	block24.display();
	block25.display();

	ground.display();
	base1.display();
	base2.display();

	hexagon.display();
	slingshot.display();
}

function mouseDragged() {
	Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}


function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(hexagon.body)
    }
}