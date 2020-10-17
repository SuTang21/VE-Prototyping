var circleX=960;
var circleY=540;
var userText = ''; 

//images
var compass;
var instructions;
var MorseCode;

function preload(){
    
    compass = loadImage('Assets/compass_2.png');
    instructions = loadImage('Assets/instructions_2.png');
    MorseCode = loadImage('Assets/MorseCode.png');
    
}


function setup() {
  // put setup code here
  var canv = createCanvas(1880,850);

  fill(255);
  textSize(30);
    
  // make div#canvas-container the parent of the created canvas
}


function draw() {
background(0);
    
image(compass,1600,50);
image(instructions,1540,400);
image(MorseCode,50,50);
  circle(circleX,circleY,40);
    
  if(keyIsDown(RIGHT_ARROW)){
      circleX++;  
  }
    

 if(keyIsDown(LEFT_ARROW)){
      circleX--;  
  }
    
    
if(keyIsDown(UP_ARROW)){
    circleY--;
}
    
    
if(keyIsDown(DOWN_ARROW)){
    circleY++; 
} 

text(userText,50,500,1530,500);

  }



function keyTyped() {
  if (key === '-') {
    userText = userText + key;
  }
  if (key === '.') {
    userText = userText + key;
  }
}



  // put drawing code here
  
