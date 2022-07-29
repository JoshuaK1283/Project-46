var ship;
var shipImg;
var bgImg;
var obstacle, obstacle2;
var obstacleImg, obstacle2Img;
var laser, laserImg;


function preload(){
  shipImg = loadImage("assets/spaceship.png");
  obstacleImg = loadImage("assets/meteor1.webp");
  obstacle2Img = loadImage("assets/meteor2.gif");
  laserImg = loadImage("assets/laser.png");
}

function setup(){
  createCanvas(600, 600);
  ship = createSprite(200, 300); 
  ship.addImage(shipImg);
  ship.scale = 0.3;
}

function draw() {
  background('black');
  if(keyDown(UP_ARROW)){
    ship.y -= 10;
  }
  if(keyDown(DOWN_ARROW)){
    ship.y += 10;
  }
  if(keyDown(LEFT_ARROW)){
    ship.x -= 10;
  }
  if(keyDown(RIGHT_ARROW)){
    ship.x += 10;
  }
  if(keyDown("SPACE")){
    shoot();
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 80 == 0){
  obstacle = createSprite(610, random(10,590), 20, 20);
  //obstacle.addImage(obstacleImg);
  //obstacle.scale = 0.3;
  obstacle.velocityX = -10;
  obstacle.lifetime = 500;
    
  var rand = Math.round(random(1,2))
  console.log(rand);
  switch(rand){
    case 1: obstacle.addImage(obstacleImg);
    obstacle.scale = 0.3;
    break;
    case 2: obstacle.addImage(obstacle2Img);
    obstacle.scale = 0.3;
    break;
  }
}
}

function shoot(){
  if(frameCount % 10 == 0){
  laser = createSprite(ship.x+20, ship.y, 10, 10);
  laser.addImage(laserImg);
  laser.velocityX = 10
  laser.lifetime = 700;
  laser.scale = 0.15
  }
}