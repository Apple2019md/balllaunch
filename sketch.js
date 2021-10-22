
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;

var ground;
var backgroundimg;

var stone;

var upBtn;
var downBtn;
var restartBtn;

function preload()
{
  backgroundimg = loadImage("BACKGROUND.png")

  upBtn = loadImage("baloon2.png");
  downBtn = loadImage("balloon.png");


}

function setup() 
{
  createCanvas(800, 1000);
  frameRate(100);


  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,height,width,20);

  stone = Bodies.circle(600, 750, 20);


  upBtn = createImg("baloon2.png");
  upBtn.position(75, 450)
  upBtn.size(80, 80);
  upBtn.mouseClicked(blowUp);

  restartBtn = createButton("Click to Restart");
  restartBtn.position(400, 500);
  restartBtn.isVisible = false;
  //restartBtn.mouseClicked(reset);


  downBtn = createImg("balloon.png");
  downBtn.position(200, 450);
  downBtn.size(80, 80);
  downBtn.mouseClicked(blowLeft);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(45);

  
}


function draw() 
{
  background(51);
  image(backgroundimg, 0, 0, width, height);
  Engine.update(engine);
  ground.show();
  
 /*if(collide(stone, bowl)==true)
  {
   restartBtn.visible = true;
  }*/
  
}

function blowUp()
{
  Matter.Body.applyForce(stone, {x:0, y:0}, {x:0, y:0.05});
}

function blowLeft()
{
  Matter.Body.applyForce(stone, {x:0, y:0}, {x:-0.05, y:0});
}

/*function collide(body, sprite, x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
} */

//function reset() { 
  //Matter.Body.setPosition(stone.body, {x: 600, y:750}) 
//}