function setup() {
  createCanvas(400, 400); 
  noStroke();
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(0);
  
  rect(190, 100, 20, 200);
  rect(160, 280, 80, 10);
  rect(195, 290, 10, 60);
  ellipse(200, 360, 20, 20);
  
  pop();
}

function draw() {
  background(255); 
  drawObject(0, 0, 1);
  drawObject(0, 200, 0.5);
}
