var track;
var runner;

var track1;
var invisibleboundary;
var runner2;
function preload(){
  //pre-load images
  track = loadImage("./path.png")
  runner = loadAnimation("Runner-1.png","Runner-2.png")
}


function setup(){
  createCanvas(400,400);
  //create sprites here
    track1 = createSprite(200,200);
    track1.addImage("track2",track);
    track1.velocityY = 4;
    track1.scale=1.2;
  
   runner2 = createSprite(300,300);
   runner2.addAnimation("runner3",runner);
   runner2.scale=0.1;

   InvisibleBoundary = createSprite(300,300,500,20);
   InvisibleBoundary.visible = false;


    

}

function draw() {
  background(0);
  drawSprites()
     //code to reset the background
     if(track1.y > 400){
      track1.y = height/2;

      runner2.collide(InvisibleBoundary);
      
      runner2.x = World.mouseX;

     }






















}
