let yOffset = 0.0;
let scrollPercentage;

const smallerSize =
    window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth;

const constraints = [smallerSize * 0.0, smallerSize * 1.0 ];

window.addEventListener('scroll', () => {
  scrollPercentage = (document.documentElement.scrollTop / document.body.scrollHeight * 100);
  //console.log(scrollPercentage);
});

function setup() {
   canvas = createCanvas(document.body.clientWidth, smallerSize);
   canvas.position(0,0);
   canvas.style('z-index','-1');
   background("#f1f1f1");
   noFill();
}

/*
window.addEventListener('resize', () =>{
  resizeCanvas(document.body.clientWidth, smallerSize);
  smallerSize =
    window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth;
  console.log("resize");
});
*/

var touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
if(!touchDevice){
  window.onresize = function(){ location.reload(); }
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

    if(scrollPercentage>20 && scrollPercentage<75){
    y = map(
      noise(xOffset, yOffset),
      0,
      1,
      constraints[0]+50,
      constraints[1]-800
      );
    } else{
      y = map(
      noise(xOffset, yOffset),
      0,
      1,
      constraints[0],
      constraints[1]
      );
    }

      vertex(x,y);
      if (scrollPercentage>20 && scrollPercentage<75){
        xOffset+=0.01;
      }
      else{
        xOffset += 0.04;
      }

    };
    if (scrollPercentage>20 && scrollPercentage<75){
      yOffset+=0.01;
    }
    else{
      yOffset += 0.01;
    }
    endShape();
}