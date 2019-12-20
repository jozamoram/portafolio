
function setup() {
  createCanvas(555, 800);
noCursor();
}

function draw() {
  background(255);
  noStroke();
    
for(var x = 30; x <= width; x+=45){
     for(var y = 30; y <= height; y+=65){ 
    fill(random(255), random(255),(255));
    rect(x, y, 30, 30);
    }
}
    }