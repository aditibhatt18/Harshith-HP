var harry, harryImg; 

function preload(){
  harryImg = loadImage("sprites/harry1.png"); 
}

function setup(){
  createCanvas(400,400);   
  harry = createSprite(200,200,10,10); 
  harry.addImage(harryImg);
}

function draw(){
  drawSprites(); 
}