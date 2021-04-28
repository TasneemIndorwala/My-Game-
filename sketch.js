var girl,girlImg;
var bg , invsprite ;
var ptImg1,ptImg2;
var inv1;





function preload(){
  girlImg= loadAnimation("Images/g1.png","Images/g2.png","Images/g4.png","Images/g3.png","Images/g4.png");
  bg=loadImage("Images/bg1.png");
ptImg1 =loadImage("Images/P2.png");
ptImg2= loadImage("Images/p1.png");
}


function setup() {
  createCanvas(1600,800);
  bg1=createSprite(600,400,1200,800);
  bg1.scale=2.5;
  bg1.addImage(bg);
  bg1.velocityX = -4;
  invsprite= createSprite(800,700,1600,20);
  invsprite.visible = true ; 
  inv1= createSprite(800,100,1600,20);
  inv1.visible = true ; 
 
  p1= createSprite(800,470,20,20)
  p1.addImage(ptImg2);
  p2= createSprite(530,430,20,20)
  p2.addImage(ptImg2);
  
  
  girl=createSprite(100, 620, 50, 50);
  girl.addAnimation("gir",girlImg);
  }

function draw() {
  background(255,255,255);  
  if(bg1.x<500){
    bg1.x = bg1.width/2; 
  }
  if(keyDown("space")){
    girl.velocityY = -10 ; }
    girl.velocityY = girl.velocityY+1;
  girl.collide(invsprite);
if(p1.isTouching(inv1)){
p1.bounceOff(inv1);}
p2.bounceOff(invsprite);
p1.bounceOff(invsprite);
p2.bounceOff(inv1);

p1.velocityY = -8;
p2.velovityY = -8;
 


  spawnPlatform();
  drawSprites();
}

function spawnPlatform(){
if(frameCount % 200 === 0){
var platform = createSprite(1800,Math.round(random(200,400)),20,20);

platform.velocityX = -4;
platform.scale=1;
var rand = Math.round(random(1,2))
switch(rand){
  case 1: platform.addImage(ptImg2);
  break
  case 2 : platform.addImage(ptImg2);
  break

}

}
} 

