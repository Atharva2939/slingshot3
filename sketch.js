const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var ground;
var peak1;
var string;
var box1;
var score=0;
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;

    
    // var options={
    //   'isStatic':true
      
    // }
  
   // stick1= new Stick(400,100,50,200)
    // stick2=new Stick(500,100,50,150)
    // stick3=new Stick(450,100,50,150)
    // stick4= new Stick(550,100,50,200)
   // stick5 = new Stick(500,100,200,50,options)
    ground = new Ground(1000,590,500,20)
    ground1 = new Ground(1000,300,500,20)
  ball=new Bob(100,500);
  string=new String(ball.body,{x:100,y:500})
  box1=new Obstacles(1000,550,30,30) 
  box2=new Obstacles(975,550,30,30) 
  box3=new Obstacles(1025,550,30,30)
  box4=new Obstacles(1050,550,30,30)
  box5=new Obstacles(950,550,30,30)
  box6= new Obstacles(990,500,30,30)
  box7=new Obstacles(965,500,30,30);
  box8=new Obstacles(1015,500,30,30)
  box9=new Obstacles(1040,500,30,30)
  box10=new Obstacles(1000,450,30,30)
  box11=new Obstacles(980,450,30,30)
  box12=new Obstacles(1020,450,30,30)
  box13=new Obstacles(990,400,30,30)
  box14=new Obstacles(1010,400,30,30)
  box15=new Obstacles(1000,350,30,30)
  box16=new Obstacles(990,260,30,30)
  box17=new Obstacles(965,260,30,30) 
  box18=new Obstacles(1015,260,30,30)
  box19=new Obstacles(1040,260,30,30)
  box20= new Obstacles(1005,210,30,30)
  box21=new Obstacles(980,210,30,30);
  box22=new Obstacles(1030,210,30,30)
  box23=new Obstacles(995,160,30,30)
  box24=new Obstacles(1020,160,30,30)
  box25=new Obstacles(1005,110,30,30)
  //peak1= new Peak(400,100,420,80,440,100)
    //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  // stick1.display();
  // stick2.display();
  // stick3.display();
  // stick4.display();
  //stick5.display();
  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
  ground.display();
  ground1.display();
  ball.display();
  string.display();
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
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  // if(keyCode===32){
  //   ball.body.position.x=mouseX
  //   ball.body.position.y=mouseY
  // }
  // if(keyCode===ENTER){
  //   ball.body.position.x=600
  //   ball.body.position.y=200
  // }
  //fill("blue")
  // triangle(380,180,400,120,420,180)
  // triangle(530,180,550,120,570,180)
  //display();
  //peak1.display();
  //drawSprites();
}

// function mouseDragged(){
//  // if(keyCode===32){
//     Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
//   //}
// }
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  //console.log(ball.body.speed)
  string.fly();
}