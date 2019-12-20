
let n = 10
let a = 0
let r = 5
function setup() {
  createCanvas(500, 500, WEBGL);
noCursor();
}

function draw() {
  background(255);
  
  let j =100
  let rojo
  for(let i=0;i<9;i++){ 
    rojo = map( sin(millis()/1), -400, 100, 50, 200);
    
    fill(rojo, 250,100,510);
  rotateX(frameCount * 0.00002);
  rotateY(frameCount * 0.002);
  torus(150, 0.0001);
    
      fill(rojo, 250,(100),510);
  rotateX(frameCount * 0.0000004);
  rotateY(frameCount * 0.0002);
  torus(190, 0.1);
  
    fill(rojo,(250), 100,510)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.0001);
  torus(80,0.0001);
    
    fill(rojo,(250), 100,510)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.0001);
  torus(70,0.001);
    
    n = (n/2)*cos(a)+90 // Identidad circular
    n++ // Crecimiento esfera
    a+=0.0004 // Velocidad de crecimiento de la esfera
  }
  push();
  noStroke()
  fill(20, 230, rojo)
  sphere(n) // Dibujo de la esfera
  pop();
}