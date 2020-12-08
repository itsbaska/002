var canvas;
const canvasHeight = 500;
const canvasWidth = 500;

function centerCanvas() {
  var x = (windowWidth - canvasWidth) / 2;
  var y = (windowHeight - canvasHeight) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(canvasHeight, canvasHeight);
  canvas.parent('sketch-holder');
  centerCanvas();
}

function draw() {
  background(153); 
}

function windowResized() {
  centerCanvas();
}
