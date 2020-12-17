var r, r2;

function setup() {
  createCanvas(800,400);
 r= createSprite(400, 200, 80, 50);
 r.shapeColor="blue";

 r2=createSprite(400,200,50,80);
r2.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  
  r2.x=World.mouseX
  r2.y= World.mouseY
  console.log(r2.x-r.x);

  if(r2.x-r.x<r2.width/2+r.width/2 &&r.x-r2.x<r2.width/2+r.width/2
    &&r.y-r2.y<r2.height/2+r.height/2 &&r2.y-r.y<r2.height/2+r.height/2){
    r.shapeColor="red";
    r2.shapeColor="blue";
  }
  else{ 
    r.shapeColor="blue";
  r2.shapeColor="red";

  }
  drawSprites();
}