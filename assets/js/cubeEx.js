/*
 * @name cubeEx
 * @arialabel Six 3D cube in neon gradient rotating on a white background. 
 */
function setup() {
  let canvas1 = createCanvas(250, 210, WEBGL);
  canvas1.parent('cubeEx');
}

function draw() {
  background(260);

  translate(-240, -100, 0);
  normalMaterial();

  translate(260, 100, 50);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70, 70, 70);
  pop();
}
