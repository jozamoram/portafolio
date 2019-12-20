let bg, mancha1, mancha2;

function preload() {
  bg = loadImage('zorrillo.jpg');
}

function setup() {
 cursor('bomba.png');
  createCanvas(1000, 800);
  background(bg);

  mancha1 = loadImage('mancha1.png');
  mancha2 = loadImage('mancha2.png');
 
}

function draw() {}

function stamp(x, y) {

  push();
  imageMode (CENTER);
  image(mancha, x, y, 100, 100);
  pop();
}

function mousePressed() {
  manchas = [mancha1, mancha2];
  mancha = random(manchas);
  
  stamp(mouseX, mouseY);

}