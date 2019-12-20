function setup() {
  createCanvas(800, 500);
  noCursor();
}

function draw() {
  background(220);
  fill(200, 300, 75,100);
  noStroke();
  let niveles = round(map(mouseX, 0, width, 0, 5));
  recursiveCircle(width/2, height/2, 500, niveles);
  fill(100, 200, 255,100);
  recursiveCircle(width/4, height/2, 500, niveles);
  fill(250, 50, 50,100);
  recursiveCircle(width/8, height/2, 500, niveles);
}

function recursiveCircle(x, y, diam, levels){
  ellipse(x, y, diam);
  if(levels > 1){
    recursiveCircle(x-diam/4, y-diam/4, diam/2, levels-9);
    recursiveCircle(x+diam/4, y, diam/2, levels-1);
    recursiveCircle(x+diam/4, y, diam/2, levels-1);
  }
}