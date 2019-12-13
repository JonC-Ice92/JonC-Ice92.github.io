let img;

function setup() {
  createCanvas(1000, 800, WEBGL);
  img = loadImage('prossessing/babyyoda.jpg');
}

function draw() {
  background(255)
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture (img);
  box(210, 210, 210);
}