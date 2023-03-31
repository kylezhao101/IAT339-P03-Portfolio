let yOffset = 0.0;
const smallerSize =
    window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth;

 const constraints = [smallerSize * 0.0, smallerSize * 1.0 ];

 function setup() {
   //const bg = new p5(sketch);
   canvas = createCanvas(document.body.clientWidth, smallerSize);
   canvas.position(0,0);
   canvas.style('z-index','-1');
   background("#f1f1f1");
   noFill();
 }

function draw(){

  background("rgba(241, 241, 241, 0.1)");
  stroke("#313fbf");
  strokeWeight(1);
  beginShape();

  let xOffset = 0.0;
  let step = 10;

  for (let x = 0; x < window.innerWidth; x += step) {
    let y = map(
      noise(xOffset, yOffset),
      0,
      1,
      constraints[0],
      constraints[1]
      );
      vertex(x,y);
      xOffset += 0.04;
    };
    yOffset += 0.01;
    endShape();
    
}
