var movingrect, fixedrect

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(400, 400, 80, 50);
  
  movingrect.velocityY = -2;
  fixedrect.velocityY = 2;
}

function draw() {
  background("black");  
  
   
  bounceoff(movingrect, fixedrect);

  drawSprites();
}
 
 

 