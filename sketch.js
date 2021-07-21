 var character;
 function preload(){
   bg =loadImage("snow1.");
//   c2 = loadImage("snow5.webp");
 }

 function setup() {
   createCanvas(800,400);
   createSprite(400, 200, 50, 50);
   character = createSprite(400,200,50,50);
 
 }

 function draw() {
   background(bg);
  // background(255,255,255);  

  character.x = World.mouseX;
   drawSprites();


 }

