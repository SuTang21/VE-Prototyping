var compass;
var instructions;
var MorseCode;
var directions;

var circleX=940;
var circleY=425;
var userText = ''; 
var value=0;


//images

function preload(){
    
    compass = loadImage('Assets/Compass_2.png');
    instructions = loadImage('Assets/Instructions.png');
    MorseCode = loadImage('Assets/MorseCode_5.png');
    directions = loadImage('Assets/Direction.png');
    
}


function setup() {
  // put setup code here
  var canv = createCanvas(1880,850);
  textSize(30);
  

    
  // make div#canvas-container the parent of the created canvas
}



function draw() {
background(0);
text(userText,50,50);
    
image(compass,760,240);
image(instructions,1480,550);
image(MorseCode,1480,80);
image(directions,830,50);
    
//Circle
fill(value);
strokeWeight(2);
stroke(255);
circle(circleX,circleY,40);

if (keyIsPressed === true) {
    value=255;
  } else {
    value=0;
  }
    
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
  
