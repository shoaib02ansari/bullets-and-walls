var  wall,thickness;
var  bullet,speed,weight;

function setup() 
{

thickness=random(22,83)
speed=random(223,321);
weight=random(30,52);


  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 50);

  wall = createSprite(1200, 200, thickness, height/2);
  wall (80,80,80);

  //wall.velocityX = 5;
  bullet.velocityX = speed;

}

function draw() 
{
  background(0);  

//car.x = mouseX;
//car.y =mouseY;
edges = createEdgeSprites();

bullet.bounceOff(edges[0]);
wall.bounceOff(edges[1]);
//moving.bounceOff(edges[1]);
//fixed.bounceOff(edges[1]);

if (wall.x-bullet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22509;

if (deformation>180)
{
bullet.shapeColor=color(255,0,0);
}

if (deformation<180 && deformation>100)
{
bulllet.shapeColor=color(230,230,0);
}

if (deformation<100)
{
bullet.shapeColor=color(0,255,0);
}


}

  drawSprites();
}