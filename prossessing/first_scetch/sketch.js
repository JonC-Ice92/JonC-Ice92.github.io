var x = [];
var speed = .5
function setup() {
  createCanvas(1000, 800);
  noStroke();
  fill(255, 200);
  for (var i = 0; i < 3000; i++) {
    x[i] = random(-1000, 200);
  }
}

function draw() {
  
  background(50);
  for (var i = 0; i < x.length; i++) {
    x[i] += 5;
    var y = i * 0.4;
    arc(x[i], y, 12, 12, 0.52, 5.76);
    stroke(random(0,255))
    fill(random(0,255))
    
  }
  
}