'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

background();
noisee();
mask();
function mask() {
   context.strokeStyle= 'black';
   context.lineWidth= '1400';
   Utils.strokeCircle(width/2, height/2, 1000);
}


function background() {
   context.fillRect(0,0,width, height);
}
function noisee() {
  
   for ( let h= 0; h<Math.random()*height*2; h++) {
for (let i = 0; i < width; i++) {
   
   context.strokeStyle = "hsl("+8*h+",100%,50%)";
  
   let x = i;
   let y = 800+ noise.perlinNoise(i / 50) *150;
   context.strokeRect(x, y-h*10, 1, 1);
   
}
}
}


