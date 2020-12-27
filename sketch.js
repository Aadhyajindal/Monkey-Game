var monkey, monkeyRunning;
var ground;
var banana, bananaImmage, bananaGroup;
var obstacle, obstacleImage, obstacleGroup;
var survivalTime = 0;

function preload(){
   
  monkeyRunning = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
  
  //createCanvas(600,200);
  monkey = createSprite(30,150,5,5);
  monkey.addAnimation("moving",monkeyRunning);
  monkey.scale = 0.1;
  
 
    ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;

  obstacleGroup = createGroup();
  bananaGroup = createGroup();


  
}


function draw() {
  background(220);
  
  if(ground.x<0){
     ground.x = ground.width /2;
     }
    
   if(keyDown("space")&& monkey.y >= 147) {
       monkey.velocityY = 13;
        
    }
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    
    
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
   Bananas();
  obstacles();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time="+ survivalTime, 100, 50);
  
 drawSprites(); 
}



function Bananas(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0) {
    var  obstacle= createSprite(600,120,40,10);
    obstacle.y = 330;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}





