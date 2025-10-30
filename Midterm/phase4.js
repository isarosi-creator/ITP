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

  let cols = 10;
  let rows = 10;

  let cellW = width / cols;
  let cellH = height / rows;

 
  let s = cellW / 400; 

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      drawObject(x, y, s);
    }
  }
}