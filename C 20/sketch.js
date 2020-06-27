var fixedRect
var movingRect
var rect1
var rect2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(200, 300, 50, 50);
  movingRect.shapeColor = "green";
  rect1 = createSprite(200, 100, 30, 30);
  rect2 = createSprite(600, 100, 30, 30);

  rect1.velocityX = 1;
  rect2.velocityX = -2;
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "yellow";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }
if (rect2.x - rect1.x < rect1.width/2 + rect2.width/2 && rect1.x - rect2.x < rect1.width/2 + rect2.width/2)
  {
rect1.velocityX = -1 * rect1.velocityX;
rect2.velocityX = -1 * rect2.velocityX;
  }
  if (rect2.y - rect1.y < rect1.height/2 + rect2.height/2 && rect1.y - rect2.y < rect1.height/2 + rect2.height/2)
  {
rect1.velocityY = -1 * rect1.velocityY;
rect2.velocityY = -1 * rect2.velocityY;
  }
  drawSprites();
}