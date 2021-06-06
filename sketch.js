var ship, shipImage
var sea, seaImg

function preload(){
  shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImg = loadAnimation("sea.png");

}

function setup(){
  createCanvas(1600,1000);

  sea = createSprite(220, 200, 400, 20);
  sea.addAnimation("sea", seaImg);
  sea.x = sea.width / 2;
  sea.velocityX = -4
  
  ship = createSprite(190, 240, 10, 10);
  ship.addAnimation("shipSail", shipImage);
  ship.scale = 0.5;

  
}


function draw() {
  background("blue");

  console.log;

  drawSprites()
}