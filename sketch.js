var fr;
var mr;



function setup() {
  createCanvas(1200,800);
  fr=createSprite(200, 200, 50, 80);
  fr.shapeColor="red";
  
  mr=createSprite(400,200,80,30);
  mr.shapeColor="red";
}

function draw() {
  background("white");  
mr.x=World.mouseX;
mr.y=World.mouseY;
if(mr.x-fr.x<mr.width/2+fr.width/2&&
  fr.x-mr.x<mr.width/2+fr.width/2&&
  fr.y-mr.y<mr.height/2+fr.height/2&&
  mr.y-fr.y<mr.height/2+fr.height/2){
mr.shapeColor="blue";
fr.shapeColor="blue";

}

else{mr.shapeColor="red";
fr.shapeColor="red";
}


console.log(mr.x-fr.x);
  drawSprites();

}