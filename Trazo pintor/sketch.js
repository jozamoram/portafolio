let foto;

function preload() {
  foto = loadImage ("yo.jpg");
  }
  
function setup() {
  createCanvas(foto.width, foto.height);
  rectMode(CENTER);
  noLoop ();
  }


function setup() {
  createCanvas(foto.width, foto.height);
  rectMode(CENTER)
}

let sp = 15;

function draw() {
  //background(foto);
  stroke(255)
  noStroke();

  for (let y = 0; y < height; y += sp) {
    for (let x = 0; x < width; x += sp) {
      let col = foto.get(x, y)
      miLindoTrazo(x, y, col);
    }
  }
}

function miLindoTrazo(x, y, col) {
  let b = brightness(col)
  let n = map(b, 0, 255, 13, 0);
  fill(col)
  rect(x, y, n, n)
}