var bullet,wall
var speed,weight
var thickness


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 20);
  bullet.shapeColor="white"
  wall=createSprite(1200,200,60,200);
  wall.shapeColor=color(80,80,80)
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed;
  thickness=random(23,83)
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
}

function draw() {
  background(0);  
  if(hascollided(bullet,wall))
  {
  bullet.velocityX=0
  if(damage>10){
    wall.shapeColor="green"
  }
  if(damage<10){
    wall.shapeColor="red"
  }
  }





  drawSprites();
}
  function hascollided(lbullet,lwall)
  {
  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  else{
    return false
  }
  
  }













