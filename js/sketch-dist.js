let scrollPercentage,yOffset=0;const smallerSize=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth,constraints=[0*smallerSize,1*smallerSize];function setup(){canvas=createCanvas(document.body.clientWidth,smallerSize),canvas.position(0,0),canvas.style("z-index","-1"),background("#f1f1f1"),noFill()}window.addEventListener("scroll",(()=>{scrollPercentage=document.documentElement.scrollTop/document.body.scrollHeight*100}));var touchDevice=navigator.maxTouchPoints||"ontouchstart"in document.documentElement;function draw(){background("rgba(241, 241, 241, 0.1)"),stroke("#313fbf"),strokeWeight(1),beginShape();let e=0;for(let n=0;n<window.innerWidth;n+=10){let t=map(noise(e,yOffset),0,1,constraints[0],constraints[1]);t=scrollPercentage>20&&scrollPercentage<75?map(noise(e,yOffset),0,1,constraints[0]+50,constraints[1]-800):map(noise(e,yOffset),0,1,constraints[0],constraints[1]),vertex(n,t),e+=scrollPercentage>20&&scrollPercentage<75?.01:.04}yOffset+=.01,endShape()}touchDevice||(window.onresize=function(){location.reload()});