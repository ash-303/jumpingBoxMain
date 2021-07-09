  var fixedRect, movingRect, fixedRect2, fixedRect3, fixedRect4;
  

function setup() {
  createCanvas(1200,650);
  

  movingRect = createSprite(300, 500,50,40);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  
  fixedRect = createSprite(200, 600, 180, 20);
  fixedRect.shapeColor = "yellow";
  //fixedRect.debug = true;
  
  
  fixedRect2 = createSprite(390, 600, 180, 20);
  fixedRect2.shapeColor = "red";
  //fixedRect2.debug=true;

  fixedRect3 = createSprite(580, 600, 180, 20);
  fixedRect3.shapeColor = "blue";
  //fixedRect3.debug= true;

  fixedRect4 = createSprite(770, 600, 180, 20);
  fixedRect4.shapeColor = "orange";
  //fixedRect4.debug = true;

  movingRect.velocityY = +5;
  //fixedRect.velocityY = +5;
}
 


function draw() {
  background(0,0,0);  
  var edges= createEdgeSprites();
  //movingRect.collide(edges);
  movingRect.bounceOff(edges);


  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }


  if (movingRect.x - fixedRect2.x < fixedRect2.width/2 + movingRect.width/2
    && fixedRect2.x - movingRect.x < fixedRect2.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect2.velocityX = fixedRect2.velocityX * (-1);
  }
  if (movingRect.y - fixedRect2.y < fixedRect2.height/2 + movingRect.height/2
  && fixedRect2.y - movingRect.y < fixedRect2.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect2.velocityY = fixedRect2.velocityY * (-1);
  }



  if (movingRect.x - fixedRect3.x < fixedRect3.width/2 + movingRect.width/2
    && fixedRect3.x - movingRect.x < fixedRect3.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect3.velocityX = fixedRect3.velocityX * (-1);
  }
  if (movingRect.y - fixedRect3.y < fixedRect3.height/2 + movingRect.height/2
  && fixedRect3.y - movingRect.y < fixedRect3.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect3.velocityY = fixedRect3.velocityY * (-1);
  }



  if (movingRect.x - fixedRect4.x < fixedRect4.width/2 + movingRect.width/2
    && fixedRect4.x - movingRect.x < fixedRect4.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect4.velocityX = fixedRect4.velocityX * (-1);
  }
  if (movingRect.y - fixedRect4.y < fixedRect4.height/2 + movingRect.height/2
  && fixedRect4.y - movingRect.y < fixedRect4.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect4.velocityY = fixedRect4.velocityY * (-1);
  }


    if(movingRect.isTouching(fixedRect) && movingRect.bounceOff(fixedRect)){

    }

    if(movingRect.isTouching(fixedRect2) && movingRect.bounceOff(fixedRect2)){

    }

    if(movingRect.isTouching(fixedRect3) && movingRect.bounceOff(fixedRect3)){

    }

    if(movingRect.isTouching(fixedRect4) && movingRect.bounceOff(fixedRect4)){
        
    }
    
  drawSprites();
}
