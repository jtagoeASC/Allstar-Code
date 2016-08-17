//var imageSprite;
//var img = loadImage("basketball-309539_640");
function setup(){
	createCanvas(600,600);
	}
function draw(){
//fill(255,69,0)
//ellipse (300,500,95,95);
background(84,84,84);
fill(255,255,255);
rect(175,75,250,150);
fill(255,0,0);
rect(230,130,140,15);
rect(220,130,15,95);
rect(365,130,15,95);
rect(250,200,100,5);
textAlign(CENTER);
text("Click to Start", width/2, height/2);
//imageSprite = createSprite(300, 500);
//imageSprite.addImage(img);
drawSprites()
//var s = createSprite(mouseX, mouseY, 30, 30);
}


function mousePressed() {
//imageSprite = createSprite(300, 500);
//imageSprite.addImage(img);
var s = createSprite(300,400,50,50);
//s.velocity.x = random(-5, 5);
s.velocity.y = random(0, -5);
}
 
