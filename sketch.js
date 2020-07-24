var bullet,wall;
var speed,weight,damage,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 40, 30);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white")
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80)


}

function draw() {
  background(0); 
  
   console.log(damage)

if(hasCollided(bullet,wall)){
  
   damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

   bullet.velocityX = 0;
   
   if(damage<10){
     wall.shapeColor = color(0,255,0)
     
   }
   if(damage>10){
     wall.shapeColor = color(255,0,0)
     
   }
   else{
     damage = 0;
     bullet.velocityX = speed;
     bullet.shapeColor = (80,80,80)
 }
}

  drawSprites();
}