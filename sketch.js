const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  

}
function setup() {
    createCanvas(900,400);

      engine = Engine.create();
      world = engine.world;
      Engine.run(engine);


  ground = new Ground();
  stand1 = new Stand(370,300,270,10);
  stand2 = new Stand(700,200,200,10);

  //level one
  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  //level two
  block8 = new Block(310,235,30,40);
  block9 = new Block(340,235,30,40);
  block10 = new Block(370,235,30,40);
  block11 = new Block(400,235,30,40);
  block12 = new Block(430,235,30,40);
  //level three
  block13 = new Block(340,195,30,40);
  block14 = new Block(370,195,30,40);
  block15 = new Block(399,195,30,40);
  block16 = new Block(370,155,30,40);
  
  //second 
  //level one
  blocks1 = new Block(640,175,30,40); 
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two 
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //level three 
  blocks9 = new Block(700,95,30,40);
  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}
function draw() {
  background(56,44,44); 
  Engine.update(engine);
  
    fill("lightyellow");
    ground.display();
    stand1.display();
    stand2.display();
                    
    strokeWeight(3);
    stroke(15);

  fill("cyan");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");  
  strokeWeight(3);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("skyblue");
  strokeWeight(3); 
  block13.display();
  block14.display();
  block15.display();

  fill("grey");    
  strokeWeight(3); 
  block16.display();
 
  fill("grey");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();

    fill("pink");
    blocks9.display();

    slingShot.display();
    ellipse(ball.position.x,ball.position.y,20);

    }

    function mouseDragged(){
        Matter.Body.setPosition(this.ball,{x: mouseX,y: mouseY});

    }

    function mouseRealeased(){
        SlingShot.fly();

    }
