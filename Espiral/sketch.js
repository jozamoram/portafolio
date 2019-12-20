let angle = 10;
  let r = -5;
let spin = 0.1;
let grow = spin * 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  blendMode(DIFFERENCE);
  noCursor();
}

function draw() {
  
  let x = cos(angle)*r;
  let y = sin(angle)*r;
  
  r = r + grow; 
  angle += spin;
  
  translate(width / 2, height / 2);
  randomColor = color(random(255),random(255), random(255));
  fill(randomColor)
  noStroke();
  rect(x, y, 20, 20);
  
}