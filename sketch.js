var towerImg, tower;

var doorImg, door, doorsGroup;


var climberImg, climber, climbersGroup;


var ghost, ghostImg;


var invisibleBlockGroup, invisibleBlock;


var gameState = "play"

//loads all the images used in the game
function preload(){
  
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  
  
}


function setup(){
  
  createCanvas(600,600);
tower = createSprite(300,300);
tower.addImage(towerImg);
tower.velocityY = 1
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3
  ghost.addImage(ghostImg);
}


function draw(){
  
  //clear the background
  background(0);
if(keyDown("left_arrow")){ 
   ghost.x=ghost.x-3;}       
if(keyDown("right_arrow")){ 
   ghost.x=ghost.x+3;}        
if(keyDown("space")){ ghost.velocityY = -10; } ghost.velocityY = ghost.velocityY + 0.8
if(tower.y > 400){
tower.y = 300
}  
drawSprites()  
  

}

