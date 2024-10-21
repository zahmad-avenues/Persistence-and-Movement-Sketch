let baseColorValue = 0.5;
let x, y;
let squareSize;
let redVal, greenVal, blueVal;

function setup() {
  createCanvas(600, 600);
  background(25);

  x = random(50, width - 50);
  y = random(50, height - 50);

  let colorVariation = (0.5 * sin(PI / 4) + 1) / 2;
  redVal = baseColorValue + colorVariation / 2;
  greenVal = baseColorValue - colorVariation / 2;
  blueVal = colorVariation;

  squareSize = (0.5 * sin(PI / 4) + 1) * 50;
}

function draw() {
  noStroke();
  fill(redVal * 255, greenVal * 255, blueVal * 255, 127);
  rect(x - squareSize / 2, y - squareSize / 2, squareSize, squareSize);
}