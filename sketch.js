// Sketch last updated: 01/13/2023 — added jewelFilter colors & logic


// CUSTOMIZE: Canvas width and height, number of characters in text
const canvasWidth = 1920;    
const canvasHeight = 1536;
const numTiles = 182;       


// LETTER GROUPINGS
let letterGroup1 = ['a', 'c', 'r', 'p', 'y', 'z'];
let letterGroup2 = ['e', 'd', 's', 'f', 'v'];
let letterGroup3 = ['i', 'l', 't', 'j', 'w'];
let letterGroup4 = ['o', 'm', 'g', 'k', 'x'];
let letterGroup5 = ['u', 'n', 'h', 'b', 'q'];
let letterGroup6 = ['.', ',', '-', '/', ' '];


// COLOR CODES
const blue = '#0000ff';
const red = '#ff0000';
const pink = '#fa8ce9';
const white = '#ffffff';
const green = '#07D060';
const orange = '#FF7910';
const gray = '#d0d0d0';
const yellow = '#FDD907';
const brown = '#634c46';
const gold = '#fcc00a';
const purple = '#A13EF5';
const black = '#000000';

// COLOR VARIABLES
let color1;
let color2;
let color3;
let color4;
let color5;

// ----------------------------


// ALPHA AND GLOBAL COLOR VARIABLE (Do not assign value here)
const a = 30;       
let colorValue;


// CANVAS AREA FORMULA
const canvasArea = canvasWidth*canvasHeight; 


// MORE GLOBAL VARIABLES
let x, y, s, minS, maxS, r, spacingVar;


// EMPTY ARRAY FOR STORING TYPES MESSAGE
let typedNote = [];


// BUTTONS
let compileButton;
let saveButton;


// CUSTOMIZE: Color scheme and background color
const colorScheme = 'jewelFilter' // 'primary' || 'secondary' || 'greyscale' || 'custom' || 'jewelFilter'

const bkgColor = "white" // 'black' || 'white'


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noStroke();
  
  colorValue = color(255, 0);

  // TILE SIZE FORMULA
  s = sqrt(canvasArea/numTiles);
  spacingVar = s/20;
  minS = s-spacingVar;
  maxS = s+spacingVar;
  
  // TILE 0 STARTING POSITION
  x = -s;
  y = spacingVar;
  
  compileButton = createButton("Compile Letter");
  compileButton.mousePressed(compileNote);
  
  saveButton = createButton("Download");
  saveButton.mousePressed(downloadPic);
  
  console.log(s); // will log the size of each tile according to equation above
}

function draw() {
  
  fill(colorValue);
  rect(x, y, s, s);
  
  s = random(minS, maxS);

  
  if (colorScheme == "primary") {
    color1 = red;
    color2 = yellow;
    color3 = blue;
    color4 = white;
    color5 = black;
  }
  
  if (colorScheme == "secondary") {
    color1 = orange;
    color2 = green;
    color3 = purple;
    color4 = gray;
    color5 = black;
  }
  
  if (colorScheme == "greyscale") {
    color1 = '#000000';
    color2 = '#5A5A5A';
    color3 = '#d0d0d0';
    color4 = '#f0f0f0';
    color5 = '#ffffff';
  }
  
  if (colorScheme == "custom") {   
    
    color1 = '#3F51B5';
    color2 = '#FF5722';
    color3 = '#FF9800';
    color4 = '#2196F3';
    color5 = '#D0D0D0';
    
// list of our preset color variables: blue, red, pink, white, green, orange, yellow, gray, brown, gold, purple, black.
    
// type as: color1 = green;
    
  }
  
  if (colorScheme == "jewelFilter") {
    color1 = '#5a5a5a';
    color2 = '#d0d0d0';
    color3 = '#E5E5E5';
    color4 = '#f0f0f0';
    color5 = '#f7f7f7';
    
  }
}


function keyTyped() {
  
  r = random(-5,5);
  
  for(let i = 0; i < letterGroup1.length; i++) {
    if(key == letterGroup1[i]) {
      colorValue = color1+a;
    }
  }
  
  for(let i = 0; i < letterGroup2.length; i++) {
    if(key == letterGroup2[i]) {
      colorValue = color2+a;
    }
  }
  
  for(let i = 0; i < letterGroup3.length; i++) {
    if(key == letterGroup3[i]) {
      colorValue = color3+a;
    }
  }
  
  for(let i = 0; i < letterGroup4.length; i++) {
    if(key == letterGroup4[i]) {
      colorValue = color4+a;
    }
  }
  
  for(let i = 0; i < letterGroup5.length; i++) {
    if(key == letterGroup5[i]) {
      colorValue = color5+a;
    }
  }
  
 for(let i = 0; i < letterGroup6.length; i++) {
    if(key == letterGroup6[i]) {
      if(bkgColor === 'black') {
      colorValue = color(0, a);
      } else {
        colorValue = color(255, a);
      }
    }
  }
  
  append(typedNote, key);
}


function keyPressed() { 
  
  r = random(-spacingVar*4, spacingVar*4);
  x += random(minS, maxS);

  
  if(x >= width-s/2) {
    x = r;
    y+=s+r;
  }
  
  if(y >= height-s/2) {
    x = r;
    y = r;
  }
}


function compileNote() {
  let note = typedNote.toString().split(",").join("");
  
  console.log(note);  
}

function downloadPic() {
   saveCanvas('myCanvas', 'png');
}
  
