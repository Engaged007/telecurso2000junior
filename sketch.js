var cola;
function setup() {
  createCanvas(1730,850);
  cola = createSprite (200,200,50,50);
}

function draw() 
{
  background("black");
  if (keyIsDown(RIGHT_ARROW)) {
  cola.position.x+=5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    cola.position.x-=5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      cola.position.y+=5;
      }

 if (keyIsDown(UP_ARROW)) {
  cola.position.y-=5;
  }

drawSprites ();
}




