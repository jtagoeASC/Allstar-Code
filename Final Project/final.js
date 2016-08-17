var state = 0;
var bg;
var ag;
var drakeSprite;
var kimSprite;
var x = 300;
var y = 300;
var ballX = 200;
var spun = false;
var ballY = 450;
var ballSprite;
var cg;
var myMusic;
var timer;
var fullscreen = false;
var character;
var score = 0;
var ballXX=630;
var ballYY=370;
var ballXXX=730;
var ballYYY=410;
function setup() {
  createCanvas(1345, 745);
  bg = loadImage("jzbasketballimage2.png");
  ag = loadImage("jzbasketballimage3.jpg");
  cg = loadImage("ball.png");
  var drake = loadImage("Z0W31vu.png");
  drakeSprite = createSprite(250, 400);
  drakeSprite.addImage(drake);
  var kim = loadImage("tumblr_inline_n5ogngUvWI1qaxzsh.png");
  kimSprite = createSprite(1100, 350);
  kimSprite.addImage(kim);
    var acdrake =loadImage("actualdrake.png"); 
    acdrakeSprite = createSprite(x,y, 20, 20);
    acdrakeSprite.addImage(acdrake);
    var ackim =loadImage("actualkim.png"); 
    ackimSprite = createSprite(x,y, 20, 20);
    ackimSprite.addImage(ackim);
    var ball = loadImage("basketball.png");
    ballSprite = createSprite(200,450);
    ballSprite.addImage(ball);
    var jordan =loadImage("drakejordan.png"); 
    jordanSprite = createSprite(x,y, 20, 20);
    jordanSprite.addImage(jordan);
    var lebron =loadImage("kimlebron.png"); 
    lebronSprite = createSprite(x,y, 20, 20);
    lebronSprite.addImage(lebron);
    jordanSprite.position.x=ballXXX;
    jordanSprite.position.y=ballYYY;
    lebronSprite.position.x=ballXX;
    lebronSprite.position.y=ballYY;
}
function mousePressed() {
    console.log(state);
    if (mouseX > 0 && mouseX < 10000 && mouseY > 0 && mouseY < 10000 && state <= 0) {
        var fs = fullscreen();
        fullscreen(!fs);
        fullscreen = true;
        state = 1;
    } 
    else if (mouseX > 350 && mouseX < 500 && mouseY > 550 && mouseY < 600 && state == 1) {
        state = 2;
    }//drake   
    else if (mouseX > 50 && mouseX < 450 && mouseY > 100 && mouseY < 690 && state == 2){
        state=3;
        character = "drake";
    }
    else if (mouseX > 800 && mouseX < 1200 && mouseY > 100 && mouseY < 690 && state == 2){
        state=4;
        character = "kim";
        ballX=340
        ballY=210        
    }
}
function draw() {
    if (state==0){
        background(bg);
        textSize(60);
        fill(255, 255,255);
        text("JZ Celebrity Dunk Contest", 300, 100);
        fill(0,0,0);
        rect(350,550,150,50);
        textSize(20);
        textAlign("LEFT");
        fill(255,255,255);
        text("Start", 365, 585);
        fill(0,0,0);
        rect(600,550,150,50);
        fill(255,255,255);
        textSize(20);
        textAlign("CENTER");
        text("Credits", 650, 585);
        fill(0,0,0);
        rect(850,550,150,50);
        fill(255,255,255)
        textSize(20);
        textAlign("RIGHT");
        text("Link", 870, 585);    
    }
    if (state==2){
        background(ag);
        fill(255,255,255);
        textSize(40);
        textAlign("CENTER");
        text("Choose Your Player", 500, 400);
        drawSprite(drakeSprite);
        drawSprite(kimSprite);
    }    
    if (state==3){

        background(ag);
        fill(255,0,0)
        rect(638,320,70,10);
        if (ballSprite.position.x<750 && ballSprite.position.x>550){
            drawSprite(jordanSprite);
        }
        else{
            drawSprite(acdrakeSprite);
            drawSprite(ballSprite);
        }
        if(keyIsDown(LEFT_ARROW) && x>140){
            x=x-20;
            ballX = ballX-20;
        }
        else if(keyIsDown(RIGHT_ARROW) && x<1300){
            x=x+10;
            ballX = ballX+10;
        }   
        else if(keyIsDown(UP_ARROW) && y>200){
            y=y-20;
            ballY = ballY-20;
        }
        else if(keyIsDown(DOWN_ARROW) && y<600){
            y=y+20;
            ballY = ballY+20;
        }
        if (keyIsDown(32)){
            console.log(acdrakeSprite.rotation);
            spin();      
        }
        acdrakeSprite.position.x = x;
        acdrakeSprite.position.y = y;
        ballSprite.position.x = ballX;
        ballSprite.position.y = ballY;
        
    }

    if (state==4){
        background(ag);
        fill(255,0,0)
        rect(638,320,70,10);
        if (ballSprite.position.x<750 && ballSprite.position.x>550){
            drawSprite(lebronSprite);
        }
        else{
            drawSprite(ackimSprite);
            drawSprite(ballSprite);
        }
        
        if(keyIsDown(LEFT_ARROW) && x>100){
            x=x-20;
            ballX = ballX-20;
       }
        else if(keyIsDown(RIGHT_ARROW) && x<1250){
            x=x+10;
            ballX = ballX+10;
        }   
        else if(keyIsDown(UP_ARROW) && y>200){
            y=y-20;
            ballY = ballY-20;
        }
        else if(keyIsDown(DOWN_ARROW) && y<600){
            y=y+20;
            ballY = ballY+20;
        }
        if (keyIsDown(32)){
            console.log(ackimSprite.rotation);
            spin();   
        }
        ackimSprite.position.x = x;
        ackimSprite.position.y = y;
        ballSprite.position.x = ballX;
        ballSprite.position.y = ballY;
              

    }
}
function spin(){
    if (acdrakeSprite.rotation != 720) {
        acdrakeSprite.rotation += 10;
        ballSprite.rotation += 10;
        ackimSprite.rotation += 10;
        ballSprite.rotation += 10;
    }    
}

