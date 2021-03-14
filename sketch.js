var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 50);
  thickness = random(22, 83);
  speed = random(223, 321)
  weight = random(30, 52)
  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor=color(80, 80, 80)
 

  bullet.velocityX = speed;
}
function hasCollided(bullet, wall ){
  bulletRightedge = bullet.x + bullet.width;
  wallleftedge = wall.x;
  if(bulletRightedge=wallleftedge||bulletRightedge>wallleftedge) {
    return true
  }
    return false
}

function draw() {
 
  background(255,255,255); 
  
  if(hasCollided(bullet, wall)){
    bullet.velocity = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(255,0,0);
    }
  }

  drawSprites();
}              