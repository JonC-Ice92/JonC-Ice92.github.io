function setup() {
  createCanvas(1000, 800);
}

function draw() {
  translate(mouseX, mouseY);
  r = random(255); 
  g = random(255); 
  b = random(255);
  a = random(230,255); 
  fill(r,g,b,a)
  arc(0, 0, 80, 80, radians(180), radians(180),);
  translate(35, 10);
  arc(0, 0, 80, 80, radians(180), radians(180),);
}