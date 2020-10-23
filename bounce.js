var movingrect, fixedrect;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(400, 400, 80, 50);
  
  movingrect.velocityY = -5;
  fixedrect.velocityY = 5;
}

function draw() {
  background("black");  
   


   
 
  drawSprites();
}
 function bounceoff(object1, object2){
  if(object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.x - object2.x < object2.width/2 + object1.width/2
    ){
      
        object1.velocityX = object1.velocityX*(-1);
        object2.velocityX = object2.velocityX*(-1);

    } if(object2.y - object1.y < object2.height/2 + object1.height/2
        && object1.y - object2.y < object2.height/2 + object1.height/2){
        
        object1.velocityY = object1.velocityY*(-1);
        object1.velocityY = object1.velocityY*(-1);

    }
}
 

 